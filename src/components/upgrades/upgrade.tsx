import { useAppContext } from "../../contexts/app";
import { Upgrade } from "../../contexts/app/types";

interface UpgradeProps extends Upgrade {}

const tierColorsMap = {
    default: "#ffffff",
    bronze: "#cd7f32",
    silver: "#adaaaa",
    gold: "#ffd700",
    platinum: "#3c72c7",
    diamond: "#233d91",
};

const focusColorMap = {
    default: "focus-visible:ring-[#ffffff]",
    bronze: "focus-visible:ring-[#cd7f32]",
    silver: "focus-visible:ring-[#adaaaa]",
    gold: "focus-visible:ring-[#ffd700]",
    platinum: "focus-visible:ring-[#3c72c7]",
    diamond: "focus-visible:ring-[#233d91]",
};

export default function Upgrade(upgrade: UpgradeProps) {
    const { id, name, type, tiers } = upgrade;
    const { handleUpgrade } = useAppContext();

    const currentTier = [...tiers].reverse().find(({ purchased }) => purchased);
    const nextTier =
        currentTier?.tier === "diamond" ? undefined : tiers.find(({ purchased }) => !purchased);

    const handleKeyUp = (e: React.KeyboardEvent<HTMLElement>) => {
        e.preventDefault();

        if (e.key !== "9" || !nextTier) return;

        handleUpgrade(upgrade, nextTier);
    };

    return (
        <article
            tabIndex={1}
            className={`flex h-[74px] items-center justify-center rounded-md outline-none focus-visible:ring-2 ${
                focusColorMap[currentTier?.tier ?? "default"]
            }`}
            onKeyUp={handleKeyUp}
        >
            <div className="grid aspect-square w-[56px] place-items-center">
                <img
                    src={`/imgs/${id}.png`}
                    style={{
                        backgroundColor: tierColorsMap[currentTier?.tier ?? "default"],
                    }}
                />
            </div>

            <div className="flex flex-1 flex-col items-center space-y-1.5 p-1.5">
                <h3 className="text-center text-sm font-bold">{name}</h3>

                {nextTier ? (
                    <div className="flex flex-col gap-y-1">
                        <span className="text-center text-xs font-medium">
                            Recompensa: +{nextTier.reward} por&nbsp;
                            {type === "click" ? "click" : "segundo"}
                        </span>

                        <span className="text-center text-xs font-medium">
                            Valor: {nextTier.price}
                        </span>
                    </div>
                ) : (
                    <span className="text-center text-xs font-medium">Máximo nivel alcanzado</span>
                )}
            </div>
        </article>
    );
}
