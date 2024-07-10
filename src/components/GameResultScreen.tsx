import { useGameState } from '@/model/GameState';
import PlayIcon from './PlayIcon';
import GameResult from '@/model/GameResult';

const GameResultScreen = () => {
  const { lastCpuPlay, lastPlayerPlay, result, reset } =
    useGameState();

  const getGameResultText = () => {
    switch (result) {
      case GameResult.Won:
        return 'YOU WIN';
      case GameResult.Draw:
        return 'DRAW';
      case GameResult.Lost:
        return 'YOU LOSE';
    }
  };

  return (
    <div className="w-full h-full flex justify-center items-center gap-[100px]">
      {/* You Picked */}
      <div className="flex flex-col justify-center items-center gap-14">
        <h1 className="text-white font-bold text-[30px]">
          YOU PICKED
        </h1>
        <PlayIcon resultDisplay type={lastPlayerPlay!} />
      </div>
      <div className="flex justify-center items-center flex-col">
        <h1 className="text-white font-bold text-[70px]">
          {getGameResultText()}
        </h1>
        <button className="btn w-[300px]" onClick={() => reset()}>
          PLAY AGAIN
        </button>
      </div>
      {/* The House Picked */}
      <div className="flex flex-col justify-center items-center gap-14">
        <h1 className="text-white font-bold text-[30px]">
          THE HOUSE PICKED
        </h1>
        <PlayIcon resultDisplay type={lastCpuPlay!} />
      </div>
    </div>
  );
};

export default GameResultScreen;
