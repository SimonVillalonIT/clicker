import { useAppContext } from "../contexts/app";

export default function Information() {
    const { balancePerClick, balancePerSecond } = useAppContext();

    return (
        <div className="flex gap-x-1.5">
            <span className="">{balancePerClick} por click |</span>
            <span className="">{balancePerSecond} por segundo</span>
        </div>
    );
}
