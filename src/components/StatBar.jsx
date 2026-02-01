import { motion } from 'framer-motion';
import { getStatStatus } from '../engine/GameEngine';

export default function StatBar({ label, value, type }) {
  const status = getStatStatus(value);
  const barClass = type === 'health' ? 'health-bar' : 'sanity-bar';

  const statusColors = {
    stable: 'text-[var(--terminal-green)]',
    warning: 'text-[var(--warning-yellow)]',
    critical: 'text-[var(--danger-red)]',
    terminal: 'text-[var(--danger-red)] flicker',
  };

  return (
    <div className="flex items-center gap-3">
      <span className={`text-xs uppercase tracking-wider w-16 ${statusColors[status]}`}>
        {label}
      </span>
      <div className="flex-1 h-3 bg-gray-900 border border-gray-700 rounded overflow-hidden">
        <motion.div
          className={`h-full ${barClass} rounded`}
          initial={{ width: '100%' }}
          animate={{ width: `${value}%` }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        />
      </div>
      <span className={`text-xs w-10 text-right font-bold ${statusColors[status]}`}>
        {value}%
      </span>
    </div>
  );
}
