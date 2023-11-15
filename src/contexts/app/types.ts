type Tier = {
    tier: "bronze" | "silver" | "gold" | "platinum" | "diamond";
    reward: number;
    price: number;
    purchased: boolean;
};
export type Upgrade = {
    id: string;
    name: string;
    type: "click" | "second";
    tiers: Tier[];
};

export interface AppState {
    started: boolean;
    ended: boolean;
    balance: number;
    balancePerClick: number;
    balancePerSecond: number;
    upgrades: Upgrade[];
}

export type EndGame = () => void;
export type HandleUpgrade = (upgrade: Upgrade, nextTier: Tier) => void;

export interface AppContext extends AppState {
    clickerRef: React.MutableRefObject<HTMLDivElement | null>;
    endGame: EndGame;
    handleUpgrade: HandleUpgrade;
}

export enum Types {
    START_GAME,
    END_GAME,
    INCREMENT_BALANCE,
    UPDATE_UPGRADE_TIER,
}

export type AppAction =
    | {
          type: Types.START_GAME;
          payload: null;
      }
    | {
          type: Types.END_GAME;
          payload: null;
      }
    | {
          type: Types.INCREMENT_BALANCE;
          payload: number;
      }
    | {
          type: Types.UPDATE_UPGRADE_TIER;
          payload: {
              upgrade: Upgrade;
              nextTier: Tier;
          };
      };
