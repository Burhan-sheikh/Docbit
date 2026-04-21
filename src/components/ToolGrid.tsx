import { tools } from '../lib/tools';
import { useDocbitStore } from '../store';
import { ToolCard } from './ToolCard';

export function ToolGrid() {
  const openTool = useDocbitStore((s) => s.openTool);

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-10">
      <header className="mb-6">
        <h1 className="text-2xl font-semibold text-white">Docbit</h1>
        <p className="mt-1 text-sm text-slate-300">
          Modular scanning, PDF processing, and image utilities in one workspace.
        </p>
      </header>

      <div className="grid grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6">
        {tools.map((tool) => (
          <ToolCard key={tool.id} tool={tool} onClick={() => openTool(tool.id)} />
        ))}
      </div>
    </section>
  );
}
