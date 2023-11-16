import AppContextProvider from "./contexts/app";
import { Miscellaneous, Score, Clicker, Footer, Upgrades } from "./components";

export default function App() {
    return (
        <AppContextProvider>
            <img src="/imgs/bg.jpg" className="fixed -z-[1] min-h-screen opacity-50" />

            <div className="grid min-h-screen w-full grid-cols-[2fr_6fr_2fr] divide-x divide-neutral-900">
                <Miscellaneous />

                <section className="grid grid-rows-[2fr_6fr_2fr]">
                    <Score />

                    <main className="grid place-items-center">
                        <Clicker />
                    </main>

                    <Footer />
                </section>

                {
                    //<Upgrades />
                }
            </div>
        </AppContextProvider>
    );
}
