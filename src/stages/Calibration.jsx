import { useState } from 'react';
import { motion } from 'framer-motion';
import GlitchButton from '../components/GlitchButton';
import { useTypewriter } from '../hooks/useTypewriter';

export default function Calibration({ onUpdatePlayer, onStartGame }) {
  const [step, setStep] = useState(0);
  const [inputValue, setInputValue] = useState('');

  const prompts = [
    { field: 'name', prompt: 'SUBJECT IDENTIFICATION REQUIRED. ENTER YOUR DESIGNATION:', placeholder: 'Your name...' },
    { field: 'city', prompt: 'LOCATION CALIBRATION. WHERE DO YOU CURRENTLY EXIST?', placeholder: 'Your city...' },
    { field: 'talent', prompt: 'SKILL ANALYSIS. WHAT IS YOUR MOST USELESS TALENT?', placeholder: 'e.g., juggling, whistling...' },
  ];

  const currentPrompt = prompts[step];
  const { displayedText, isComplete } = useTypewriter(
    currentPrompt?.prompt || '',
    25
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    onUpdatePlayer(currentPrompt.field, inputValue.trim());
    setInputValue('');

    if (step < prompts.length - 1) {
      setStep(step + 1);
    } else {
      onStartGame();
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-2xl w-full"
      >
        <motion.h1
          className="text-3xl md:text-4xl font-bold mb-2 glow-green text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          THE COLLAPSE PROTOCOL
        </motion.h1>

        <motion.p
          className="text-[var(--holographic-blue)] text-center mb-12 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          SYSTEM CALIBRATION v0.0.47
        </motion.p>

        <div className="border border-[var(--terminal-green)] p-6 bg-black/50">
          <div className="mb-6 min-h-[60px]">
            <p className="text-[var(--terminal-green)] text-lg">
              {displayedText}
              {!isComplete && <span className="animate-pulse">█</span>}
            </p>
          </div>

          {isComplete && currentPrompt && (
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-4"
            >
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder={currentPrompt.placeholder}
                autoFocus
                className="w-full bg-transparent border-b-2 border-[var(--terminal-green)] py-2 px-1 text-[var(--terminal-green)] text-lg focus:outline-none focus:border-[var(--holographic-blue)] transition-colors"
              />
              <div className="flex justify-end">
                <GlitchButton type="submit" disabled={!inputValue.trim()}>
                  {step < prompts.length - 1 ? 'CONFIRM →' : 'INITIATE SEQUENCE'}
                </GlitchButton>
              </div>
            </motion.form>
          )}
        </div>

        <motion.div
          className="mt-8 flex gap-2 justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {prompts.map((_, i) => (
            <div
              key={i}
              className={`w-3 h-3 border ${
                i <= step
                  ? 'bg-[var(--terminal-green)] border-[var(--terminal-green)]'
                  : 'border-gray-600'
              }`}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
