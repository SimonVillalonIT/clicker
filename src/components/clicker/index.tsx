import { useEffect, useState } from "react";
import { useAppContext } from "../../contexts/app";
import PcCanvas from "../models/pc";

export default function Clicker() {
    const { balancePerClick, multiplier } = useAppContext();
    const [numeros, setNumeros] = useState<{ style: any }[]>([]);

    const mostrarNumeros = () => {
        setNumeros(state => [
            ...state,
            {
                style: {
                    color: "#fff",
                    left: Math.floor(Math.random() * 250).toString() + "px",
                    top: Math.floor(Math.random() * 250).toString() + "px",
                },
            },
        ]);
    };
    const keyEffect = e => {
        if (e.key === ".") {
            mostrarNumeros();
        }
    };
    useEffect(() => {
        window.addEventListener("keyup", keyEffect);
        return () => {
            window.removeEventListener("keyup", keyEffect);
        };
    }, []);
    return (
        <div className="contenedor">
            {numeros.map((num, i) => {
                return (
                    <span key={i} className="numero" style={num.style}>
                        {"+" + balancePerClick * multiplier}
                    </span>
                );
            })}
            <PcCanvas />
        </div>
    );
}
