import { useTimer } from "../../hooks";

export default function Timer() {
    const { timerText } = useTimer();

    return <span className="text-center text-3xl font-bold">{timerText}</span>;
}
