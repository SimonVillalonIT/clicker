import { Types, type AppState, type AppAction } from "./types";

export default function reducer(state: AppState, action: AppAction): AppState {
    const { type, payload } = action;

    switch (type) {
        case Types.START_GAME:
            return {
                ...state,
                started: true,
                balance: state.balancePerClick,
            };

        case Types.END_GAME:
            return {
                ...state,
                ended: true,
            };

        case Types.UPDATE_BALANCE:
            return {
                ...state,
                balance: state.balance + payload,
            };

        case Types.HANDLE_UPGRADE:
            return {
                ...state,
                balance: state.balance - payload.price,
                ...(payload.type === "click"
                    ? { balancePerClick: state.balancePerClick + payload.value }
                    : { balancePerSecond: state.balancePerSecond + payload.value }),
                upgrades: state.upgrades.map(upgrade =>
                    upgrade.key === payload.key
                        ? { ...upgrade, price: Math.ceil(payload.price * 1.25) }
                        : upgrade,
                ),
            };

        default:
            return state;
    }
}
