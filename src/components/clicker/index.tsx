import { useAppContext } from "../../contexts/app";
import PcCanvas from "../models/pc";

export default function Clicker() {
    const { clickerRef } = useAppContext();

    return <PcCanvas />;
}
