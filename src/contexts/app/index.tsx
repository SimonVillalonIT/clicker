import * as React from "react";

import reducer from "./reducer";
import initialState from "./initialState";
import { Types, type AppContext, type EndGame, type HandleUpgrade } from "./types";
import ReactConfetti from "react-confetti";

const AppContext = React.createContext<AppContext | null>(null);

export function useAppContext() {
    const appContext = React.useContext(AppContext);
    if (!appContext) {
        throw new Error("App context must be used withing App Context Provider.");
    }

    return appContext;
}

export default function AppContextProvider({ children }: React.PropsWithChildren) {
    const [state, dispatch] = React.useReducer(reducer, initialState);
    const clickerRef = React.useRef<HTMLDivElement | null>(null);

    const endGame: EndGame = React.useCallback(() => {
        dispatch({
            type: Types.END_GAME,
            payload: null,
        });
    }, []);

    const handleUpgrade: HandleUpgrade = (upgrade, nextTier) => {
        if (state.balance < nextTier.price) return;

        dispatch({
            type: Types.UPDATE_UPGRADE_TIER,
            payload: {
                upgrade,
                nextTier,
            },
        });
    };

    const handleClick = React.useCallback(
        (e: KeyboardEvent) => {
            e.preventDefault();

            if (e.key !== ".") return;

            if (!state.started) {
                return dispatch({
                    type: Types.START_GAME,
                    payload: null,
                });
            }

            dispatch({
                type: Types.INCREMENT_BALANCE,
                payload: {
                    value: state.balancePerClick,
                    type: "click",
                },
            });
        },
        [state.started, state.balancePerClick],
    );

    const handleSecond = React.useCallback(() => {
        dispatch({
            type: Types.INCREMENT_BALANCE,
            payload: {
                value: state.balancePerSecond,
                type: "second",
            },
        });
    }, [state.balancePerSecond]);

    React.useEffect(() => {
        if (state.ended) return;

        window.addEventListener("keyup", handleClick);

        return () => window.removeEventListener("keyup", handleClick);
    }, [state.ended, handleClick]);

    React.useEffect(() => {
        if (!state.started || state.ended || !state.balancePerSecond) return;

        const interval = setInterval(handleSecond, 1000);

        return () => clearInterval(interval);
    }, [state.started, state.ended, state.balancePerSecond, handleSecond]);

    React.useEffect(() => {
        if (!state.started || state.ended) return;

        const clicks = state.clicks;
        const consecutiveClicks = state.consecutiveClicks;

        const multiplier = Math.min(Math.floor(consecutiveClicks / 25) + 1, 5);

        if (multiplier !== state.multiplier) {
            dispatch({
                type: Types.SET_MULTIPLIER,
                payload: multiplier,
            });
        }

        const timeout = setTimeout(() => {
            if (clicks > consecutiveClicks) {
                return dispatch({
                    type: Types.RESET_MULTIPLIER,
                    payload: null,
                });
            }
        }, 500);

        return () => clearTimeout(timeout);
    }, [state.started, state.ended, state.clicks, state.consecutiveClicks, state.multiplier]);

    return (
        <AppContext.Provider value={{ ...state, clickerRef, endGame, handleUpgrade }}>
            {children}

            {state.ended && (
                <ReactConfetti gravity={0.2} numberOfPieces={300} initialVelocityY={30} />
            )}
        </AppContext.Provider>
    );
}
