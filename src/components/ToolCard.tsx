import { motion } from 'framer-motion';
import type { ToolDefinition } from '../types/tools';

type ToolCardProps = {
  tool: ToolDefinition;
  onClick: () => void;
};

export function ToolCard({ tool, onClick }: ToolCardProps) {
  const Icon = tool.icon;

  return (
    <motion.button
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
      onClick={onClick}
      className="group rounded-[2rem] border border-slate-200 bg-white p-5 text-left shadow-sm transition hover:shadow-xl hover:shadow-blue-950/10 dark:border-white/10 dark:bg-white/10"
    >
      <div className="mb-4 flex items-start justify-between gap-3">
        <span className="inline-flex rounded-2xl bg-blue-50 p-3 text-blue-600 dark:bg-blue-500/10 dark:text-blue-200">
          <Icon className="h-6 w-6" />
        </span>
        <span className={`rounded-full px-3 py-1 text-xs font-black ${tool.status === 'available' ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-200' : 'bg-amber-50 text-amber-700 dark:bg-amber-500/10 dark:text-amber-200'}`}>
          {tool.status === 'available' ? 'Ready' : 'Coming Soon'}
        </span>
      </div>
      <p className="text-xs font-black uppercase tracking-wide text-blue-600">{tool.category}</p>
      <h3 className="mt-2 text-lg font-black">{tool.title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{tool.description}</p>
      <div className="mt-4 flex flex-wrap gap-2 text-xs font-bold text-slate-500 dark:text-slate-400">
        <span>Input: {tool.inputFormats.join(', ')}</span>
        <span>Output: {tool.outputFormats.join(', ')}</span>
      </div>
    </motion.button>
  );
}
