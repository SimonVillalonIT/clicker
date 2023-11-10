import * as React from "react";
import Confetti from "react-confetti";

import { useAppContext } from "../contexts/app";

const GAME_DURATION = 3599999 as const; // ms

const formatter = new Intl.DateTimeFormat("es-AR", {
    minute: "2-digit",
    second: "2-digit",
});

export default function Countdown() {
    const [countdownText, setCountdownText] = React.useState<string>(
        formatter.format(new Date(new Date().setMinutes(0, 0, GAME_DURATION))),
    );
    const { started, ended, endGame } = useAppContext();

    React.useEffect(() => {
        if (!started || ended) return;
        const initialMillis = new Date().setMinutes(0, 0, GAME_DURATION);
        let millis = new Date().setMinutes(0, 0, GAME_DURATION);

        const interval = setInterval(() => {
            millis -= 1000;

            setCountdownText(formatter.format(new Date(millis)));

            if (initialMillis - millis >= GAME_DURATION) {
                return endGame();
            }
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, [started, ended, endGame]);

    return (
        <>
            <span className="text-center text-3xl font-bold">{countdownText}</span>

            {ended && <Confetti gravity={0.2} numberOfPieces={300} initialVelocityY={30} />}
        </>
    );
}
