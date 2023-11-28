import { useAppContext } from "../../contexts/app";

export default function Multipier() {
    const { consecutiveClicks } = useAppContext();

    const percentaje = Math.min(consecutiveClicks, 100);

    return (
        <div className="relative flex w-8 flex-1 border border-neutral-900 transition-colors">
            <div
                className="-z-[1] mt-auto h-full w-full bg-emerald-700 transition-[max-height]"
                style={{ maxHeight: `${percentaje}%` }}
            ></div>

            <span className="absolute bottom-0 left-12 font-semibold leading-none">x1</span>
            <span className="absolute bottom-[162px] right-12 font-semibold leading-none">x2</span>
            <span className="absolute left-12 top-[330px] font-semibold leading-none">x3</span>
            <span className="absolute right-12 top-[162px] font-semibold leading-none">x4</span>
            <span className="absolute left-12 font-semibold leading-none">x5</span>
        </div>
    );
}
