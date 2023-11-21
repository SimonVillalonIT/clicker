import { useAppContext } from "../contexts/app";

export default function Score() {
    const { balance, balancePerClick, balancePerSecond, multiplier } = useAppContext();

    const formatter = new Intl.NumberFormat("es-AR");

    return (
        <div className="flex flex-col items-center justify-center gap-y-2.5 pt-5">
            <h1 className="text-5xl font-black">{formatter.format(balance)}</h1>

            <div className="space-x-1.5">
                <span className="block text-center text-sm font-medium">
                    {formatter.format(balancePerClick * multiplier)} por click
                </span>

                <span className="block text-center text-sm font-medium">
                    {formatter.format(balancePerSecond * multiplier)} por segundo
                </span>
            </div>
        </div>
    );
}
