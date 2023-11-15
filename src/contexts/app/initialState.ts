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
                { tier: "bronze", reward: 1, price: 50, purchased: false },
                { tier: "silver", reward: 4, price: 150, purchased: false },
                { tier: "gold", reward: 10, price: 400, purchased: false },
                { tier: "platinum", reward: 20, price: 800, purchased: false },
                { tier: "diamond", reward: 40, price: 1500, purchased: false },
            ],
        },
        {
            id: "hardware",
            name: "Aceleración de Hardware",
            type: "second",
            tiers: [
                { tier: "bronze", reward: 2, price: 100, purchased: false },
                { tier: "silver", reward: 5, price: 250, purchased: false },
                { tier: "gold", reward: 12, price: 600, purchased: false },
                { tier: "platinum", reward: 24, price: 1200, purchased: false },
                { tier: "diamond", reward: 50, price: 2500, purchased: false },
            ],
        },
        {
            id: "gpu",
            name: "Bestia de Gráficos Potenciados",
            type: "click",
            tiers: [
                { tier: "bronze", reward: 2, price: 100, purchased: false },
                { tier: "silver", reward: 6, price: 300, purchased: false },
                { tier: "gold", reward: 15, price: 700, purchased: false },
                { tier: "platinum", reward: 30, price: 1500, purchased: false },
                { tier: "diamond", reward: 60, price: 3000, purchased: false },
            ],
        },
        {
            id: "wifi",
            name: "Enrutamiento Subnetizado",
            type: "second",
            tiers: [
                { tier: "bronze", reward: 15, price: 1000, purchased: false },
                { tier: "silver", reward: 35, price: 3000, purchased: false },
                { tier: "gold", reward: 80, price: 7000, purchased: false },
                { tier: "platinum", reward: 200, price: 15000, purchased: false },
                { tier: "diamond", reward: 400, price: 30000, purchased: false },
            ],
        },
        {
            id: "ram",
            name: "Buffer de Datos Supersónicos",
            type: "click",
            tiers: [
                { tier: "bronze", reward: 6, price: 300, purchased: false },
                { tier: "silver", reward: 20, price: 800, purchased: false },
                { tier: "gold", reward: 40, price: 1500, purchased: false },
                { tier: "platinum", reward: 80, price: 3000, purchased: false },
                { tier: "diamond", reward: 160, price: 6000, purchased: false },
            ],
        },

        {
            id: "bios",
            name: "Controlador mnemotécnico de BIOS",
            type: "second",
            tiers: [
                { tier: "bronze", reward: 15, price: 500, purchased: false },
                { tier: "silver", reward: 40, price: 1200, purchased: false },
                { tier: "gold", reward: 100, price: 2800, purchased: false },
                { tier: "platinum", reward: 225, price: 5500, purchased: false },
                { tier: "diamond", reward: 450, price: 11000, purchased: false },
            ],
        },
    ],
};

export default initialState;
