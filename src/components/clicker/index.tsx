import { useAppContext } from "../../contexts/app";

export default function Clicker() {
    const { clickerRef } = useAppContext();

    return (
        <div
            ref={clickerRef}
            className="aspect-square w-[400px] rounded-md border border-red-900"
        />
    );
}
