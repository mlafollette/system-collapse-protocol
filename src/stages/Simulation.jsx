import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import StatBar from '../components/StatBar';
import GlitchButton from '../components/GlitchButton';
import { useTypewriter } from '../hooks/useTypewriter';
import { generateScenario } from '../engine/ScenarioDatabase';

export default function Simulation({ gameState, onMakeChoice }) {
  const [scenario, setScenario] = useState(null);
  const [showOutcome, setShowOutcome] = useState(false);
  const [lastChoice, setLastChoice] = useState(null);

  useEffect(() => {
    const newScenario = generateScenario(gameState.player, gameState.currentScenario);
    setScenario(newScenario);
    setShowOutcome(false);
    setLastChoice(null);
  }, [gameState.currentScenario, gameState.player]);

  const narrativeText = scenario?.narrative || scenario?.description || '';
  const { displayedText, isComplete } = useTypewriter(narrativeText, 25);

  const handleChoice = (choice) => {
    setLastChoice(choice);
    setShowOutcome(true);
  };

  const handleContinue = () => {
    onMakeChoice(lastChoice);
  };

  if (!scenario) return null;

  return (
    <div className="min-h-screen flex flex-col p-4 md:p-8">
      {/* Stats Header */}
      <motion.div
        className="max-w-2xl mx-auto w-full mb-8 space-y-2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="flex justify-between items-center mb-4">
          <span className="text-[var(--holographic-blue)] text-sm">
            SCENARIO {gameState.currentScenario + 1}/{gameState.totalScenarios}
          </span>
          <span className="text-[var(--terminal-green)] text-sm">
            {gameState.player.name.toUpperCase()}
          </span>
        </div>
        <StatBar label="HEALTH" value={gameState.stats.health} type="health" />
        <StatBar label="SANITY" value={gameState.stats.sanity} type="sanity" />
      </motion.div>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center">
        <motion.div
          className="max-w-2xl w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <AnimatePresence mode="wait">
            {!showOutcome ? (
              <motion.div
                key="scenario"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="border border-[var(--terminal-green)] p-6 bg-black/50"
              >
                {/* Intro text for first scenario */}
                {scenario.intro && gameState.currentScenario === 0 && (
                  <div className="mb-4 pb-4 border-b border-gray-800">
                    <p className="text-[var(--holographic-blue)] text-sm">{scenario.intro}</p>
                    <p className="text-[var(--holographic-blue)] text-sm">{scenario.location}</p>
                  </div>
                )}

                {/* Narrative */}
                <p className="text-[var(--terminal-green)] text-lg leading-relaxed mb-8">
                  {displayedText}
                  {!isComplete && <span className="animate-pulse">█</span>}
                </p>

                {/* Choices */}
                {isComplete && (
                  <motion.div
                    className="space-y-3"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <p className="text-[var(--holographic-blue)] text-sm mb-4">
                      CHOOSE YOUR RESPONSE:
                    </p>
                    {scenario.choices.map((choice, index) => (
                      <motion.button
                        key={index}
                        onClick={() => handleChoice(choice)}
                        className="w-full text-left p-4 border border-gray-700 hover:border-[var(--terminal-green)] bg-black/30 hover:bg-[var(--terminal-green)]/10 transition-all duration-200 group"
                        whileHover={{ x: 10 }}
                      >
                        <span className="text-[var(--holographic-blue)] mr-3">
                          [{String.fromCharCode(65 + index)}]
                        </span>
                        <span className="text-[var(--terminal-green)] group-hover:glow-green">
                          {choice.text}
                        </span>
                      </motion.button>
                    ))}
                  </motion.div>
                )}
              </motion.div>
            ) : (
              <motion.div
                key="outcome"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="border border-[var(--holographic-blue)] p-6 bg-black/50"
              >
                <p className="text-[var(--holographic-blue)] text-sm mb-4">OUTCOME:</p>
                <p className="text-[var(--terminal-green)] text-lg leading-relaxed mb-6">
                  {lastChoice.outcome}
                </p>

                <div className="flex gap-4 text-sm mb-6">
                  <span className={lastChoice.healthChange >= 0 ? 'text-[var(--terminal-green)]' : 'text-[var(--danger-red)]'}>
                    HEALTH: {lastChoice.healthChange >= 0 ? '+' : ''}{lastChoice.healthChange}
                  </span>
                  <span className={lastChoice.sanityChange >= 0 ? 'text-[var(--terminal-green)]' : 'text-[var(--danger-red)]'}>
                    SANITY: {lastChoice.sanityChange >= 0 ? '+' : ''}{lastChoice.sanityChange}
                  </span>
                </div>

                <div className="flex justify-end">
                  <GlitchButton onClick={handleContinue} variant="secondary">
                    CONTINUE →
                  </GlitchButton>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
