import { useGameState } from '@/model/GameState';
import PlayIcon from './PlayIcon';
import GameResultEnum from '@/model/GameResultEnum';
import { useMediaQuery } from 'usehooks-ts';

const GameResult = () => {
  const { lastCpuPlay, lastPlayerPlay, result, reset } =
    useGameState();

  const isMobile = useMediaQuery('(max-width: 1024px)');

  const getGameResultText = () => {
    switch (result) {
      case GameResultEnum.Won:
        return 'YOU WIN';
      case GameResultEnum.Draw:
        return 'DRAW';
      case GameResultEnum.Lost:
        return 'YOU LOSE';
    }
  };

  return (
    <>
      {isMobile ? (
        <>
          <div className="w-full h-full flex justify-center items-center gap-[20px]">
            {/* You Picked */}
            <div className="flex flex-col justify-center items-center gap-10">
              <PlayIcon resultDisplay type={lastPlayerPlay!} />
              <h1 className="text-white font-bold text-[16px] md:text-[30px]">
                YOU PICKED
              </h1>
            </div>

            {/* The House Picked */}
            <div className="flex flex-col justify-center items-center gap-10">
              <PlayIcon resultDisplay type={lastCpuPlay!} />
              <h1 className="text-white font-bold text-[16px] md:text-[30px]">
                THE HOUSE PICKED
              </h1>
            </div>
          </div>
          <div>
            <div className="flex justify-center items-center flex-col">
              <h1 className="text-white font-bold text-[50px]">
                {getGameResultText()}
              </h1>
              <button
                className="btn w-[230px]"
                onClick={() => reset()}
              >
                PLAY AGAIN
              </button>
            </div>
          </div>
        </>
      ) : (
        <div className="w-full h-full flex justify-center items-center gap-[100px]">
          {/* You Picked */}
          <div className="flex flex-col justify-center items-center gap-14">
            <h1 className="text-white font-bold text-[45px]">
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
            <h1 className="text-white font-bold text-[45px]">
              THE HOUSE PICKED
            </h1>
            <PlayIcon resultDisplay type={lastCpuPlay!} />
          </div>
        </div>
      )}
    </>
  );
};

export default GameResult;
