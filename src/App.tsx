import AppContextProvider from "./contexts/app";
import { Countdown, Balance, Information, Clicker, Upgrades } from "./components";

export default function App() {
    return (
        <AppContextProvider>
            <main className="flex min-h-screen flex-col items-center gap-y-24 bg-zinc-950 pt-24 text-white">
                <section className="flex flex-col items-center gap-y-4">
                    <Countdown />

                    <Balance />

                    <Information />

                </section>

                <section className="flex flex-col items-center">
                    <Clicker />
                </section>
                
                <Upgrades />
            </main>
        </AppContextProvider>
    );
}
