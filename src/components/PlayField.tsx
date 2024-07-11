import { useCallback, useEffect } from 'react';
import fieldCoreImage from '@/assets/rps/bg-pentagon.svg';
import PlayIconType from '@/model/PlayIconType';
import Position from '@/model/Position';
import PlayIcon from './PlayIcon';
import { useGameState } from '@/model/GameState';
import GameResultEnum from '@/model/GameResultEnum';

const PlayField = () => {
  const {
    reset,
    addScore,
    setPlayerPlay,
    lastCpuPlay,
    lastPlayerPlay,
    goToGameResult,
  } = useGameState();

  const ProcessPlayerPick = (type: PlayIconType) => {
    setPlayerPlay(type);
  };

  const CalculateOutcome = useCallback(() => {
    let gameResult = GameResultEnum.Draw;

    const win = () => {
      addScore(1);
      gameResult = GameResultEnum.Won;
    };

    const lost = () => {
      addScore(-1);
      gameResult = GameResultEnum.Lost;
    };

    switch (lastCpuPlay) {
      case PlayIconType.Paper:
        if (lastCpuPlay !== lastPlayerPlay) {
          switch (lastPlayerPlay) {
            case PlayIconType.Scissors:
              win();
              break;
            case PlayIconType.Lizard:
              win();
              break;
            default:
              lost();
          }
        }
        break;

      case PlayIconType.Rock:
        if (lastCpuPlay !== lastPlayerPlay) {
          switch (lastPlayerPlay) {
            case PlayIconType.Paper:
              win();
              break;
            case PlayIconType.Spock:
              win();
              break;
            default:
              lost();
          }
        }

        break;

      case PlayIconType.Scissors:
        if (lastCpuPlay !== lastPlayerPlay) {
          switch (lastPlayerPlay) {
            case PlayIconType.Spock:
              win();
              break;
            case PlayIconType.Rock:
              win();
              break;
            default:
              lost();
          }
        }

        break;

      case PlayIconType.Spock:
        if (lastCpuPlay !== lastPlayerPlay) {
          switch (lastPlayerPlay) {
            case PlayIconType.Paper:
              win();
              break;
            case PlayIconType.Lizard:
              win();
              break;
            default:
              lost();
          }
        }

        break;

      case PlayIconType.Lizard:
        if (lastCpuPlay !== lastPlayerPlay) {
          switch (lastPlayerPlay) {
            case PlayIconType.Rock:
              win();
              break;
            case PlayIconType.Scissors:
              win();
              break;
            default:
              lost();
          }
        }

        break;

      default:
        break;
    }

    goToGameResult(gameResult);
  }, [addScore, goToGameResult, lastCpuPlay, lastPlayerPlay]);

  useEffect(() => {
    if (lastCpuPlay === null) {
      reset();
    }
  }, [reset, lastCpuPlay]);

  useEffect(() => {
    if (lastPlayerPlay !== null && lastCpuPlay !== null) {
      CalculateOutcome();
    }
  }, [lastPlayerPlay, CalculateOutcome, lastCpuPlay]);

  return (
    <>
      <div className="flex justify-center items-center w-full h-full">
        <div className="flex justify-center items-center relative select-none">
          <img
            className="select-none w-[250px] md:w-[550px] lg:w-[650px]"
            src={fieldCoreImage}
            alt="Rock Paper Scissors"
          />

          <PlayIcon
            position={Position.Top}
            type={PlayIconType.Scissors}
            onClick={ProcessPlayerPick}
          />

          <PlayIcon
            position={Position.Left}
            type={PlayIconType.Spock}
            onClick={ProcessPlayerPick}
          />

          <PlayIcon
            position={Position.Right}
            type={PlayIconType.Paper}
            onClick={ProcessPlayerPick}
          />

          <PlayIcon
            position={Position.BottomLeft}
            type={PlayIconType.Lizard}
            onClick={ProcessPlayerPick}
          />

          <PlayIcon
            position={Position.BottomRight}
            type={PlayIconType.Rock}
            onClick={ProcessPlayerPick}
          />
        </div>
      </div>
    </>
  );
};

export default PlayField;
