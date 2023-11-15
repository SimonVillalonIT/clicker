import Confetti from "react-confetti";

import { useAppContext } from "../../contexts/app";
import { useTimer } from "../../hooks";

export default function Timer() {
    const { ended } = useAppContext();
    const { timerText } = useTimer();

    return (
        <>
            <span className="text-center text-3xl font-bold">{timerText}</span>

            {ended && <Confetti gravity={0.2} numberOfPieces={300} initialVelocityY={30} />}
        </>
    );
}
