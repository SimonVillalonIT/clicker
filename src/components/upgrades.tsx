import { useAppContext } from "../contexts/app";

export default function Updrades() {
    const { upgrades, handleUpgrade } = useAppContext();

    return (
        <aside className="fixed right-0 top-0 h-screen w-56 space-y-8 overflow-y-auto border-l border-neutral-800 px-4 py-8">
            <h2 className="text-center text-2xl font-bold">Mejoras</h2>

            <section className="space-y-5">
                {upgrades.map(upgrade => {
                    const { key, type, value, price } = upgrade;

                    return (
                        <article
                            key={key}
                            className="flex gap-x-2.5 rounded-sm border border-neutral-800 bg-zinc-950/75"
                        >
                            <img
                                src="/imgs/placeholder.jpg"
                                className="aspect-square w-full max-w-[50px]"
                            />

                            <div className="w-full p-1.5">
                                <h3 className="text-center text-sm font-medium uppercase">{key}</h3>
                            </div>

                            <button onClick={() => handleUpgrade(upgrade)}>comprar</button>
                        </article>
                    );
                })}
            </section>
        </aside>
    );
}
