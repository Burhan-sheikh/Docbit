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
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.25 }}
      onClick={onClick}
      className="group rounded-2xl border border-white/10 bg-white/5 p-4 text-left shadow-lg backdrop-blur transition hover:shadow-glow"
    >
      <div className="mb-3 inline-flex rounded-xl bg-accent/10 p-2 text-accent">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="mb-1 text-sm font-semibold text-white">{tool.title}</h3>
      <p className="text-xs text-slate-300/80">{tool.description}</p>
    </motion.button>
  );
}
