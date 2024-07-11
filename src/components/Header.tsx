import { useGameState } from '@/model/GameState';
import logo from '@/assets/rps/logo-bonus.svg';
import Score from './Score';

const Header = () => {
  const { playerScore, highScore } = useGameState();

  return (
    <div className=" flex items-center justify-between p-4 lg:mt-12 rounded-[20px] w-full 2xl:w-[800px] h-[200px] border-solid border-4 border-[rgba(255,255,255,0.2)]">
      <img
        src={logo}
        alt="Rock Paper Scissors"
        className="max-sm:w-[80px]"
      />
      <Score scoreValue={playerScore} highScore={highScore} />
    </div>
  );
};

export default Header;
