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
    const clickerRef = React.useRef<HTMLImageElement | null>(null);

    const endGame: EndGame = React.useCallback(() => {
        dispatch({
            type: Types.END_GAME,
        });
    }, []);

    const handleUpgrade: HandleUpgrade = upgrade => {
        if (state.balance < upgrade.price) return;

        dispatch({
            type: Types.HANDLE_UPGRADE,
            payload: upgrade,
        });
    };

    React.useEffect(() => {
        if (!state.started || state.ended || !state.balancePerSecond) return;

        const interval = setInterval(() => {
            dispatch({
                type: Types.UPDATE_BALANCE,
                payload: state.balancePerSecond,
            });
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, [state.started, state.ended, state.balancePerSecond]);

    const handleClick = React.useCallback(() => {
        if (state.ended) return;

        clickerRef?.current?.classList.add("scale-110");
        setTimeout(() => {
            clickerRef?.current?.classList.remove("scale-110");
        }, 75);

        if (!state.started) {
            return dispatch({
                type: Types.START_GAME,
            });
        }

        dispatch({
            type: Types.UPDATE_BALANCE,
            payload: state.balancePerClick,
        });
    }, [state.started, state.ended, state.balancePerClick]);

    React.useEffect(() => {
        const handleKeyUp = (e: KeyboardEvent) => {
            e.preventDefault();

            switch (e.key) {
                case "0":
                    return handleClick();

                default:
                    return;
            }
        };

        window.addEventListener("keyup", handleKeyUp);

        return () => window.removeEventListener("keyup", handleKeyUp);
    }, [handleClick]);

    return (
        <AppContext.Provider value={{ ...state, clickerRef, endGame, handleUpgrade }}>
            {children}

            {/* <div className="fixed left-0 top-0 max-h-[100vh] overflow-y-auto bg-white p-2.5 text-xs text-black">
                <pre>{JSON.stringify(state, null, 4)}</pre>
            </div> */}
        </AppContext.Provider>
    );
}
