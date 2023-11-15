import * as React from "react";

import reducer from "./reducer";
import initialState from "./initialState";
import { Types, type AppContext, type EndGame, type HandleUpgrade } from "./types";

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
                payload: state.balancePerClick,
            });
        },
        [state.started, state.balancePerClick],
    );

    const handleSecond = React.useCallback(() => {
        dispatch({
            type: Types.INCREMENT_BALANCE,
            payload: state.balancePerSecond,
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

    return (
        <AppContext.Provider value={{ ...state, clickerRef, endGame, handleUpgrade }}>
            {children}
        </AppContext.Provider>
    );
}
