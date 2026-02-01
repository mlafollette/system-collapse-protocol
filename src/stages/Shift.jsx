import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { getGlitchMessage } from '../engine/ScenarioDatabase';

export default function Shift({ playerData, onComplete }) {
  const [phase, setPhase] = useState(0);
  const [glitchText, setGlitchText] = useState('');
  const [shake, setShake] = useState(false);
  const hasCompleted = useRef(false);
  const timeoutRef = useRef(null);

  const messages = [
    `SUBJECT LOCKED: ${playerData.name.toUpperCase()}`,
    `LOCATION ANCHORED: ${playerData.city.toUpperCase()}`,
    `SKILL REGISTERED: ${playerData.talent.toUpperCase()}`,
    '',
    'INITIATING REALITY COLLAPSE...',
    '',
  ];

  const totalPhases = messages.length + 5;

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setGlitchText(getGlitchMessage());
    }, 200);

    const phaseTimer = setInterval(() => {
      setPhase((prev) => {
        if (prev >= totalPhases) {
          clearInterval(phaseTimer);
          clearInterval(glitchInterval);
          if (!hasCompleted.current) {
            hasCompleted.current = true;
            timeoutRef.current = setTimeout(onComplete, 500);
          }
          return prev;
        }
        if (prev >= 4) {
          setShake(true);
          setTimeout(() => setShake(false), 500);
        }
        return prev + 1;
      });
    }, 800);

    return () => {
      clearInterval(phaseTimer);
      clearInterval(glitchInterval);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [onComplete, totalPhases]);

  return (
    <div className={`min-h-screen flex items-center justify-center p-8 ${shake ? 'shake' : ''}`}>
      <motion.div
        className="max-w-2xl w-full text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <AnimatePresence mode="wait">
          {phase < messages.length ? (
            <motion.div
              key={phase}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-4"
            >
              {messages.slice(0, phase + 1).map((msg, i) => (
                <p
                  key={i}
                  className={`text-lg ${
                    i >= 4
                      ? 'text-[var(--danger-red)] glow-red flicker'
                      : 'text-[var(--terminal-green)]'
                  }`}
                >
                  {msg}
                </p>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="glitch"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="relative"
            >
              <div className="absolute inset-0 vhs-distort">
                <p className="text-4xl text-[var(--danger-red)] glow-red font-bold">
                  {glitchText}
                </p>
              </div>
              <p className="text-4xl text-[var(--danger-red)] glow-red font-bold">
                {glitchText}
              </p>

              <motion.div
                className="mt-12 space-y-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0, 1, 0.5, 1] }}
                transition={{ duration: 2 }}
              >
                <div className="w-full h-1 bg-[var(--danger-red)]" />
                <div className="w-3/4 h-1 bg-[var(--holographic-blue)] mx-auto" />
                <div className="w-1/2 h-1 bg-[var(--terminal-green)] mx-auto" />
              </motion.div>

              <motion.p
                className="mt-8 text-[var(--holographic-blue)] text-sm"
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 0.5, repeat: Infinity }}
              >
                PLEASE STAND BY...
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
