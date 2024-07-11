import { create } from 'zustand';
import PlayIconType from './PlayIconType';
import { createJSONStorage, persist } from 'zustand/middleware';
import { GameScreen } from './GameScreen';
import GameResultEnum from './GameResultEnum';
import { getRandomInt } from '@/lib/MathUtils';

export interface GameStateData {
  screen: GameScreen;
  lastCpuPlay: PlayIconType | null;
  lastPlayerPlay: PlayIconType | null;
  playerScore: number;
  highScore: number;
  result?: GameResultEnum | null;
}

export interface GameStateActions {
  pickCpuPlay: () => PlayIconType;
  addScore: (value: number) => void;
  reset: () => void;
  goToGameResult: (gameResult: GameResultEnum) => void;
  setPlayerPlay: (type: PlayIconType) => void;
}

const localStorageHighScoreKey = 'rps_high_score';

const iconTypesPickList: PlayIconType[] = [
  PlayIconType.Paper,
  PlayIconType.Rock,
  PlayIconType.Scissors,
  PlayIconType.Spock,
  PlayIconType.Lizard,
];

const getLocalStorageHighScore = (): number | null => {
  const highScoreValue = localStorage.getItem(
    localStorageHighScoreKey
  );

  if (highScoreValue === null) {
    return null;
  }

  return Number.parseInt(highScoreValue);
};

const initialGameState: GameStateData = {
  screen: GameScreen.Play,
  lastCpuPlay: null,
  lastPlayerPlay: null,
  playerScore: 0,
  highScore: getLocalStorageHighScore() || 0,
  result: null,
};

export const useGameState = create<
  GameStateData & GameStateActions
>()(
  persist(
    (set, get) => ({
      ...initialGameState,
      addScore: (value: number) => {
        if (value < 0 && get().playerScore === 0) {
          return;
        }

        set({ playerScore: get().playerScore + value });
        if (get().playerScore > get().highScore) {
          set({ highScore: get().playerScore });
        }
      },
      setPlayerPlay: (type: PlayIconType) => {
        set({
          lastPlayerPlay: type,
        });
      },
      reset: () => {
        set({
          screen: GameScreen.Play,
          lastCpuPlay: get().pickCpuPlay(),
          lastPlayerPlay: null,
          result: null,
        });
      },
      pickCpuPlay: () => {
        let index = getRandomInt(iconTypesPickList.length);

        let pick: PlayIconType = iconTypesPickList[index];

        let lastPick = get().lastCpuPlay;

        if (pick !== lastPick) {
          set({ lastCpuPlay: pick });
          return pick;
        }

        while (pick === lastPick) {
          index = getRandomInt(iconTypesPickList.length);
          lastPick = pick;
          pick = iconTypesPickList[index];
        }

        return pick;
      },
      goToGameResult: (gameResult: GameResultEnum) => {
        set({
          screen: GameScreen.Result,
          result: gameResult,
        });
      },
    }),
    {
      name: 'rps-storage',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ highScore: state.highScore }),
    }
  )
);
