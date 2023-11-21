import * as React from "react";

import { useAppContext } from "../contexts/app";

const GAME_DURATION = 3599999 as const; // ms

const formatter = new Intl.DateTimeFormat("es-AR", {
    minute: "2-digit",
    second: "2-digit",
});

export default function useTimer() {
    const [timerText, setTimerText] = React.useState<string>(
        formatter.format(new Date(new Date().setMinutes(0, 0, GAME_DURATION))),
    );
    const { started, ended, endGame } = useAppContext();

    React.useEffect(() => {
        if (!started || ended) return;
        const initialMillis = new Date().setMinutes(0, 0, GAME_DURATION);
        let millis = new Date().setMinutes(0, 0, GAME_DURATION);

        const interval = setInterval(() => {
            millis -= 1000;

            setTimerText(formatter.format(new Date(millis)));

            if (initialMillis - millis >= GAME_DURATION) {
                return endGame();
            }
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, [started, ended, endGame]);

    return { timerText };
}
