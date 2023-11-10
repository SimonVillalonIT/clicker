import type { AppState } from "./types";

const initialState: AppState = {
    started: false,
    ended: false,
    balance: 0,
    balancePerClick: 1,
    balancePerSecond: 0,
    upgrades: [
        {
            key: "tier1",
            type: "click",
            value: 1,
            price: 30,
        },
        {
            key: "tier2",
            type: "second",
            value: 1,
            price: 110,
        },
        {
            key: "tier3",
            type: "click",
            value: 25,
            price: 25000,
        },
        {
            key: "tier4",
            type: "second",
            value: 25,
            price: 36000,
        },
        {
            key: "tier5",
            type: "click",
            value: 100,
            price: 150000,
        },
        {
            key: "tier6",
            type: "second",
            value: 100,
            price: 225000,
        },
    ],
    clickerRef: null,
};

export default initialState;
