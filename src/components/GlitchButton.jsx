import { motion } from 'framer-motion';

export default function GlitchButton({ children, onClick, variant = 'primary', disabled = false }) {
  const variants = {
    primary: 'border-[var(--terminal-green)] text-[var(--terminal-green)] hover:bg-[var(--terminal-green)] hover:text-black',
    secondary: 'border-[var(--holographic-blue)] text-[var(--holographic-blue)] hover:bg-[var(--holographic-blue)] hover:text-black',
    danger: 'border-[var(--danger-red)] text-[var(--danger-red)] hover:bg-[var(--danger-red)] hover:text-black',
  };

  return (
    <motion.button
      onClick={onClick}
      disabled={disabled}
      className={`
        px-6 py-3 border-2 bg-transparent font-mono text-sm uppercase tracking-wider
        transition-all duration-200 glitch-hover
        disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-transparent
        ${variants[variant]}
      `}
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
    >
      {children}
    </motion.button>
  );
}
