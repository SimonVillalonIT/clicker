import { Types, type AppState, type AppAction } from "./types";

export default function reducer(state: AppState, action: AppAction): AppState {
    const { type, payload } = action;

    switch (type) {
        case Types.START_GAME:
            return {
                ...state,
                started: true,
                balance: state.balance + state.balancePerClick,
            };

        case Types.END_GAME:
            return {
                ...state,
                ended: true,
            };

        case Types.INCREMENT_BALANCE:
            return {
                ...state,
                balance: state.balance + payload,
            };

        case Types.UPDATE_UPGRADE_TIER: {
            const { balance, balancePerClick, balancePerSecond, upgrades } = state;
            const { id, type, tiers } = payload.upgrade;
            const { tier, price, reward } = payload.nextTier;

            return {
                ...state,
                balance: balance - price,
                upgrades: upgrades.map(upgrade => {
                    if (upgrade.id !== id) return upgrade;

                    return {
                        ...upgrade,
                        tiers: [
                            ...tiers.filter(upgradeTier => upgradeTier.tier !== tier),
                            { ...payload.nextTier, purchased: true },
                        ],
                    };
                }),
                ...(type === "click"
                    ? { balancePerClick: balancePerClick + reward }
                    : { balancePerSecond: balancePerSecond + reward }),
            };
        }

        default:
            return state;
    }
}
