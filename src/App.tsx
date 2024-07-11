import { useMemo } from 'react';
import Header from '@/components/Header';
import Rules from '@/components/Rules';
import { useGameState } from '@/model/GameState';
import GameResult from '@/components/GameResult';
import { GameScreen } from '@/model/GameScreen';
import PlayField from './components/PlayField';

function App() {
  const { screen } = useGameState();

  const currentGameScreen = useMemo(() => {
    switch (screen) {
      case GameScreen.Play:
        return <PlayField />;
      case GameScreen.Result:
        return <GameResult />;
    }
  }, [screen]);

  return (
    <>
      <div className="flex items-center flex-col w-screen h-screen p-4">
        <Header />
        {currentGameScreen}
        <Rules />
      </div>
    </>
  );
}

export default App;
