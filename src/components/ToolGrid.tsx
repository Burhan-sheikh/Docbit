import { categories, popularTools, tools } from '../lib/tools';
import { useDocbitStore } from '../store';
import { ToolCard } from './ToolCard';

export function ToolGrid() {
  const openTool = useDocbitStore((s) => s.openTool);

  return (
    <section id="tools" className="mx-auto w-full max-w-7xl px-4 py-12">
      <header className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-black text-blue-600">Popular tools</p>
          <h2 className="text-3xl font-black tracking-tight md:text-4xl">Business-ready conversion tools</h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600 dark:text-slate-300">
            Every tool includes drag & drop, validation, progress, cancellation, retry, privacy notices, related tools, and automatic temporary deletion.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <span key={category} className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-bold text-slate-600 dark:border-white/10 dark:bg-white/10 dark:text-slate-300">
              {category}
            </span>
          ))}
        </div>
      </header>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {popularTools.map((tool) => (
          <ToolCard key={tool.id} tool={tool} onClick={() => openTool(tool.id)} />
        ))}
      </div>

      <div className="mt-10">
        <h3 className="mb-4 text-xl font-black">Phase 1 registry</h3>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 lg:grid-cols-6">
          {tools.map((tool) => (
            <button key={tool.id} onClick={() => openTool(tool.id)} className="rounded-2xl border border-slate-200 bg-white p-3 text-left text-xs font-bold shadow-sm dark:border-white/10 dark:bg-white/10">
              {tool.title}
              {tool.status === 'coming-soon' && <span className="mt-2 block text-blue-600">Coming Soon</span>}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
