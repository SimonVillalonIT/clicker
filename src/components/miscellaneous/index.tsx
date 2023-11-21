import Multipier from "./multiplier";
import Timer from "./timer";

export default function Miscellaneous() {
    return (
        <section className="flex flex-col items-center space-y-4 py-4 backdrop-blur-sm">
            <Timer />

            <Multipier />
        </section>
    );
}
