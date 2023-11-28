import type { AppState } from "./types";

const initialState: AppState = {
    started: false,
    ended: false,
    balance: 0,
    balancePerClick: 1,
    balancePerSecond: 0,
    upgrades: [
        {
            id: "chipset",
            name: "Furia de Overclock",
            type: "click",
            tiers: [
                { tier: "bronze", reward: 1, price: 75, purchased: false },
                { tier: "silver", reward: 5, price: 250, purchased: false },
                { tier: "gold", reward: 50, price: 1500, purchased: false },
                { tier: "platinum", reward: 150, price: 5000, purchased: false },
                { tier: "diamond", reward: 300, price: 10000, purchased: false },
            ],
        },
        {
            id: "hardware",
            name: "Aceleración de Hardware",
            type: "second",
            tiers: [
                { tier: "bronze", reward: 1, price: 100, purchased: false },
                { tier: "silver", reward: 10, price: 500, purchased: false },
                { tier: "gold", reward: 75, price: 6000, purchased: false },
                { tier: "platinum", reward: 200, price: 12000, purchased: false },
                { tier: "diamond", reward: 400, price: 20000, purchased: false },
            ],
        },
        {
            id: "gpu",
            name: "Bestia de Gráficos Potenciados",
            type: "second",
            tiers: [
                { tier: "bronze", reward: 20, price: 5000, purchased: false },
                { tier: "silver", reward: 150, price: 30000, purchased: false },
                { tier: "gold", reward: 1200, price: 120000, purchased: false },
                { tier: "platinum", reward: 3000, price: 400000, purchased: false },
                { tier: "diamond", reward: 10000, price: 1200000, purchased: false },
            ],
        },
        {
            id: "wifi",
            name: "Enrutamiento Subnetizado",
            type: "click",
            tiers: [
                { tier: "bronze", reward: 25, price: 20000, purchased: false },
                { tier: "silver", reward: 200, price: 120000, purchased: false },
                { tier: "gold", reward: 1500, price: 600000, purchased: false },
                { tier: "platinum", reward: 5000, price: 1800000, purchased: false },
                { tier: "diamond", reward: 20000, price: 6000000, purchased: false },
            ],
        },
        {
            id: "ram",
            name: "Buffer de Datos Supersónicos",
            type: "second",
            tiers: [
                { tier: "bronze", reward: 50, price: 40000, purchased: false },
                { tier: "silver", reward: 300, price: 200000, purchased: false },
                { tier: "gold", reward: 2000, price: 800000, purchased: false },
                { tier: "platinum", reward: 5000, price: 2400000, purchased: false },
                { tier: "diamond", reward: 25000, price: 8000000, purchased: false },
            ],
        },
        {
            id: "bios",
            name: "Controlador mnemotécnico de BIOS",
            type: "click",
            tiers: [
                { tier: "bronze", reward: 100, price: 80000, purchased: false },
                { tier: "silver", reward: 600, price: 400000, purchased: false },
                { tier: "gold", reward: 3000, price: 960000, purchased: false },
                { tier: "platinum", reward: 10000, price: 2880000, purchased: false },
                { tier: "diamond", reward: 40000, price: 9600000, purchased: false },
            ],
        },
    ],
    clicks: 0,
    consecutiveClicks: 0,
    multiplier: 1,
};

export default initialState;
