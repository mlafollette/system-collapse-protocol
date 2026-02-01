import { motion } from 'framer-motion';
import GlitchButton from '../components/GlitchButton';
import StatBar from '../components/StatBar';
import { getEndingMessage } from '../engine/ScenarioDatabase';
import { useTypewriter } from '../hooks/useTypewriter';

export default function Ending({ gameState, onRestart }) {
  const isDead = gameState.stats.health <= 0 || gameState.stats.sanity <= 0;
  const endingMessage = getEndingMessage(gameState.stats.health, gameState.stats.sanity);
  const { displayedText, isComplete } = useTypewriter(endingMessage, 40);

  const survivalStats = [
    { label: 'Scenarios Survived', value: gameState.currentScenario },
    { label: 'Final Health', value: `${gameState.stats.health}%` },
    { label: 'Final Sanity', value: `${gameState.stats.sanity}%` },
    { label: 'Decisions Made', value: gameState.history.length },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <motion.div
        className="max-w-2xl w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <motion.div
          className={`border p-8 bg-black/50 ${
            isDead
              ? 'border-[var(--danger-red)]'
              : 'border-[var(--terminal-green)]'
          }`}
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', duration: 0.5 }}
        >
          <h1
            className={`text-3xl font-bold mb-6 text-center ${
              isDead ? 'text-[var(--danger-red)] glow-red' : 'text-[var(--terminal-green)] glow-green'
            }`}
          >
            {isDead ? 'SIMULATION TERMINATED' : 'SIMULATION COMPLETE'}
          </h1>

          <div className="mb-8">
            <p
              className={`text-lg text-center ${
                isDead ? 'text-[var(--danger-red)]' : 'text-[var(--terminal-green)]'
              }`}
            >
              {displayedText}
              {!isComplete && <span className="animate-pulse">█</span>}
            </p>
          </div>

          {isComplete && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <div className="border-t border-gray-800 pt-6 mb-6">
                <p className="text-[var(--holographic-blue)] text-sm mb-4">
                  SUBJECT ANALYSIS: {gameState.player.name.toUpperCase()}
                </p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  {survivalStats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <p className="text-[var(--terminal-green)] text-2xl font-bold">
                        {stat.value}
                      </p>
                      <p className="text-gray-500 text-xs uppercase">{stat.label}</p>
                    </div>
                  ))}
                </div>

                <div className="space-y-2 mb-6">
                  <StatBar label="HEALTH" value={gameState.stats.health} type="health" />
                  <StatBar label="SANITY" value={gameState.stats.sanity} type="sanity" />
                </div>
              </div>

              {gameState.history.length > 0 && (
                <div className="border-t border-gray-800 pt-6 mb-6">
                  <p className="text-[var(--holographic-blue)] text-sm mb-4">
                    DECISION LOG:
                  </p>
                  <div className="space-y-2 max-h-40 overflow-y-auto">
                    {gameState.history.map((entry, index) => (
                      <p key={index} className="text-gray-500 text-xs">
                        <span className="text-[var(--terminal-green)]">[{index + 1}]</span>{' '}
                        {entry.choice}
                      </p>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex justify-center gap-4">
                <GlitchButton onClick={onRestart} variant={isDead ? 'danger' : 'primary'}>
                  {isDead ? 'TRY AGAIN' : 'RESTART SIMULATION'}
                </GlitchButton>
              </div>
            </motion.div>
          )}
        </motion.div>

        <motion.p
          className="text-center text-gray-600 text-xs mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          THE COLLAPSE PROTOCOL v0.0.47 | "Existence is mandatory. Enjoyment is not."
        </motion.p>
      </motion.div>
    </div>
  );
}
