export type Upgrade = {
    key: string;
    type: "click" | "second";
    value: number;
    price: number;
};

export interface AppState {
    started: boolean;
    ended: boolean;
    balance: number;
    balancePerClick: number;
    balancePerSecond: number;
    upgrades: Upgrade[];
    clickerRef: React.MutableRefObject<HTMLImageElement | null> | null;
}

export type EndGame = () => void;
export type HandleUpgrade = (upgrade: Upgrade) => void;

export interface AppContext extends AppState {
    endGame: EndGame;
    handleUpgrade: HandleUpgrade;
}

export type AppAction =
    | {
          type: Types.START_GAME;
      }
    | {
          type: Types.END_GAME;
      }
    | {
          type: Types.UPDATE_BALANCE;
          payload: number;
      }
    | {
          type: Types.HANDLE_UPGRADE;
          payload: Upgrade;
      };

export enum Types {
    START_GAME,
    END_GAME,
    UPDATE_BALANCE,
    HANDLE_UPGRADE,
}
