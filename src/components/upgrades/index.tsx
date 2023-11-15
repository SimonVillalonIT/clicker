import Upgrade from "./upgrade";
import { useUpgrades } from "../../hooks";

export default function Updrades() {
    const { upgradesRef, upgrades } = useUpgrades();

    return (
        <section className="space-y-8 py-4">
            <h2 className="text-center text-2xl font-black">Mejoras</h2>

            <section ref={upgradesRef} className="space-y-8 px-2">
                {upgrades.map(upgrade => (
                    <Upgrade key={upgrade.id} {...upgrade} />
                ))}
            </section>
        </section>
    );
}
