import PlayIconType from '@/model/PlayIconType';

import iconRock from '@/assets/rps/icon-rock.svg';
import iconScissors from '@/assets/rps/icon-scissors.svg';
import iconPaper from '@/assets/rps/icon-paper.svg';
import iconSpock from '@/assets/rps/icon-spock.svg';
import iconLizard from '@/assets/rps/icon-lizard.svg';
import Position from '@/model/Position';
import clsx from 'clsx';

interface PlayIconProps {
  type: PlayIconType;
  position?: Position;
  resultDisplay?: boolean;
  onClick?: (type: PlayIconType) => void;
}

const GetIconImage = (iconType: PlayIconType) => {
  switch (iconType) {
    case PlayIconType.Paper:
      return (
        <img
          className="w-2/5 select-none"
          src={iconPaper}
          alt="Paper"
        />
      );
    case PlayIconType.Rock:
      return (
        <img
          className="w-2/5 select-none"
          src={iconRock}
          alt="Rock"
        />
      );
    case PlayIconType.Scissors:
      return (
        <img
          className="w-2/5 select-none"
          src={iconScissors}
          alt="Scissors"
        />
      );
    case PlayIconType.Spock:
      return (
        <img
          className="w-2/5 select-none"
          src={iconSpock}
          alt="Spock"
        />
      );
    case PlayIconType.Lizard:
      return (
        <img
          className="w-2/5 select-none"
          src={iconLizard}
          alt="Lizard"
        />
      );
  }
};

const GetIconClassNamePosition = (position?: Position | null) => {
  if (position === null) {
    return '';
  }

  switch (position) {
    case Position.Top:
      return 'top-0 left-[50%] translate-x-[-50%] translate-y-[-50%]';
    case Position.Left:
      return 'left-[7%] top-[37%] translate-x-[-50%] translate-y-[-50%]';
    case Position.Right:
      return 'right-[7%] top-[37%] translate-x-[50%] translate-y-[-50%]';
    case Position.BottomLeft:
      return 'left-[20%] bottom-[7%] translate-x-[-50%] translate-y-[50%]';
    case Position.BottomRight:
      return 'bottom-[7%] right-[20%] translate-x-[50%] translate-y-[50%]';
  }
};

const GetIconClassNameBody = (type: PlayIconType) => {
  switch (type) {
    case PlayIconType.Paper:
      return 'bg-paper-body-gradient shadow-paper-body-shadow';
    case PlayIconType.Rock:
      return 'bg-rock-body-gradient shadow-rock-body-shadow';
    case PlayIconType.Scissors:
      return 'bg-scissors-body-gradient shadow-scissors-body-shadow';
    case PlayIconType.Spock:
      return 'bg-spock-body-gradient shadow-spock-body-shadow';
    case PlayIconType.Lizard:
      return 'bg-lizard-body-gradient shadow-lizard-body-shadow';
  }
};

const PlayIcon = ({
  type,
  position,
  onClick,
  resultDisplay = false,
}: PlayIconProps) => {
  return resultDisplay ? (
    <>
      <div
        className={clsx(
          ' w-[350px] h-[350px] flex justify-center items-center rounded-[200px]',
          GetIconClassNameBody(type)
        )}
      >
        <div className="flex w-[75%] h-[75%] rounded-[200px] justify-center items-center bg-gray-200">
          {GetIconImage(type)}
        </div>
      </div>
    </>
  ) : (
    <>
      <div
        onClick={() => onClick?.(type)}
        className={clsx(
          'cursor-pointer w-48 h-48 flex justify-center items-center absolute rounded-[200px]',
          GetIconClassNamePosition(position),
          GetIconClassNameBody(type)
        )}
      >
        <div className="flex w-[75%] h-[75%] rounded-[200px] transition-colors duration-200 justify-center items-center bg-gray-200 hover:bg-white active:bg-[rgb(51,255,255)] active:first:translate-y-1">
          {GetIconImage(type)}
        </div>
      </div>
    </>
  );
};

export default PlayIcon;
