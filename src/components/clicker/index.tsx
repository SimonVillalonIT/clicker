import { useEffect, useState } from "react";
import { useAppContext } from "../../contexts/app";
import PcCanvas from "../models/pc";

export default function Clicker() {
    const {} = useAppContext();
    const [numeros, setNumeros] = useState<{ numero: number; style: any }[]>([]);

    const mostrarNumeros = () => {
        const colors = ["#95f4b0", "#3fff00", "#006efe", "#9900ff", "#f578b3"];
        setNumeros(state => [
            ...state,
            {
                numero: 10,
                style: {
                    color: "#fff",
                    left: Math.floor(Math.random() * 250).toString() + "px",
                    top: Math.floor(Math.random() * 250).toString() + "px",
                },
            },
        ]);
    };
    useEffect(() => {
        window.addEventListener("keyup", e => {
            if (e.key === ".") {
                mostrarNumeros();
            }
        });
    }, []);
    return (
        <div className="contenedor">
            {numeros.map((num, index) => (
                <span key={index} className="numero" style={num.style}>
                    {"+" + num.numero}
                </span>
            ))}
            <PcCanvas />
        </div>
    );
}
