import { useMemo } from 'react';
import Header from '@/components/Header';
import PlayScreen from '@/components/PlayScreen';
import Rules from '@/components/Rules';
import { useGameState } from '@/model/GameState';
import GameResultScreen from '@/components/GameResultScreen';
import { GameScreen } from '@/model/GameScreen';

function App() {
  const { screen } = useGameState();

  const currentGameScreen = useMemo(() => {
    switch (screen) {
      case GameScreen.Play:
        return <PlayScreen />;
      case GameScreen.Result:
        return <GameResultScreen />;
    }
  }, [screen]);

  return (
    <>
      <div className="flex items-center flex-col h-screen w-screen">
        <Header />
        {currentGameScreen}
        <Rules />
      </div>
    </>
  );
}

export default App;
