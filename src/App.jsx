import { useState, useCallback } from 'react';
import { AnimatePresence } from 'framer-motion';
import CRTOverlay from './components/CRTOverlay';
import Calibration from './stages/Calibration';
import Shift from './stages/Shift';
import Simulation from './stages/Simulation';
import Ending from './stages/Ending';
import {
  GAME_STAGES,
  createInitialState,
  updatePlayerInfo,
  startGame,
  beginSimulation,
  makeChoice,
  restartGame,
} from './engine/GameEngine';

function App() {
  const [gameState, setGameState] = useState(createInitialState);

  const handleUpdatePlayer = useCallback((field, value) => {
    setGameState((prev) => updatePlayerInfo(prev, field, value));
  }, []);

  const handleStartGame = useCallback(() => {
    setGameState((prev) => startGame(prev));
  }, []);

  const handleBeginSimulation = useCallback(() => {
    setGameState((prev) => beginSimulation(prev));
  }, []);

  const handleMakeChoice = useCallback((choice) => {
    setGameState((prev) => makeChoice(prev, choice));
  }, []);

  const handleRestart = useCallback(() => {
    setGameState(restartGame());
  }, []);

  const renderStage = () => {
    switch (gameState.stage) {
      case GAME_STAGES.CALIBRATION:
        return (
          <Calibration
            key="calibration"
            onUpdatePlayer={handleUpdatePlayer}
            onStartGame={handleStartGame}
          />
        );
      case GAME_STAGES.SHIFT:
        return (
          <Shift
            key="shift"
            playerData={gameState.player}
            onComplete={handleBeginSimulation}
          />
        );
      case GAME_STAGES.SIMULATION:
        return (
          <Simulation
            key="simulation"
            gameState={gameState}
            onMakeChoice={handleMakeChoice}
          />
        );
      case GAME_STAGES.ENDING:
        return (
          <Ending
            key="ending"
            gameState={gameState}
            onRestart={handleRestart}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#050505]">
      <CRTOverlay />
      <AnimatePresence mode="wait">
        {renderStage()}
      </AnimatePresence>
    </div>
  );
}

export default App;
