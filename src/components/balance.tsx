import { useAppContext } from "../contexts/app";

export default function Balance() {
    const { balance } = useAppContext();

    const formatter = new Intl.NumberFormat("es-AR", { currency: "ARS", style: "currency" });

    return (
        <span className="text-center text-4xl font-black text-white">
            {formatter.format(balance)}
        </span>
    );
}
