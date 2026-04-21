import { motion } from 'framer-motion';
import { ChevronLeft, Download, Plus } from 'lucide-react';
import { tools } from '../lib/tools';
import { useDocbitStore } from '../store';

const worker = new Worker(new URL('../workers/processor.worker.ts', import.meta.url), {
  type: 'module',
});

export function Workspace() {
  const { activeTool, closeTool, settings, updateSettings, enqueueTask, updateTask, tasks } =
    useDocbitStore();

  if (!activeTool) return null;

  const active = tools.find((t) => t.id === activeTool);
  const recentTask = [...tasks].reverse().find((t) => t.toolId === activeTool);

  const startTask = () => {
    const taskId = enqueueTask({ toolId: activeTool, message: 'Queued in background engine' });

    worker.onmessage = (event: MessageEvent<{ progress?: number; done?: boolean; error?: string }>) => {
      if (event.data.error) {
        updateTask(taskId, { status: 'failed', message: event.data.error, progress: 100 });
        return;
      }
      if (typeof event.data.progress === 'number') {
        updateTask(taskId, { status: 'processing', progress: event.data.progress });
      }
      if (event.data.done) {
        updateTask(taskId, { status: 'done', progress: 100, message: 'Ready for export' });
      }
    };

    worker.postMessage({ operation: 'mergePdf', payload: { settings } });
  };

  return (
    <div className="fixed inset-0 z-20 bg-bg/95 backdrop-blur">
      <div className="flex h-full flex-col">
        <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
          <button className="rounded-lg p-2 text-slate-300 hover:bg-white/10" onClick={closeTool}>
            <ChevronLeft className="h-5 w-5" />
          </button>
          <h2 className="text-sm font-medium text-white">{active?.title}</h2>
          <button className="rounded-lg p-2 text-slate-300 hover:bg-white/10">
            <Download className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-hidden p-3 md:p-6">
          <div className="h-full rounded-2xl border border-white/10 bg-surface p-4">
            <div className="mb-3 flex items-center justify-between text-sm text-slate-300">
              <span>Real-time preview</span>
              <button
                onClick={startTask}
                className="rounded-lg bg-accent px-3 py-1.5 text-xs font-medium text-white"
              >
                Run background process
              </button>
            </div>
            <div className="flex h-[calc(100%-2.5rem)] items-center justify-center rounded-xl border border-dashed border-white/10 bg-black/20 text-xs text-slate-400">
              Accurate preview canvas placeholder (connect per-tool renderer)
            </div>
          </div>
        </div>

        <motion.div
          initial={{ y: 140 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.3 }}
          className="rounded-t-3xl border-t border-white/10 bg-surface/95 p-4 shadow-2xl"
        >
          <div className="mx-auto mb-4 h-1.5 w-12 rounded-full bg-white/20" />
          <div className="grid grid-cols-2 gap-3 text-xs text-slate-200 md:grid-cols-4">
            <label className="space-y-1">
              <span>Page size</span>
              <select
                className="w-full rounded-lg bg-bg px-2 py-1.5"
                value={settings.pageSize}
                onChange={(e) => updateSettings({ pageSize: e.target.value as typeof settings.pageSize })}
              >
                {['A3', 'A4', 'A5', 'Letter', 'Passport', 'Custom'].map((size) => (
                  <option key={size}>{size}</option>
                ))}
              </select>
            </label>

            <label className="space-y-1">
              <span>Orientation</span>
              <select
                className="w-full rounded-lg bg-bg px-2 py-1.5"
                value={settings.orientation}
                onChange={(e) =>
                  updateSettings({ orientation: e.target.value as typeof settings.orientation })
                }
              >
                {['Portrait', 'Landscape', 'Auto', 'Mixed'].map((mode) => (
                  <option key={mode}>{mode}</option>
                ))}
              </select>
            </label>

            <label className="space-y-1">
              <span>Margin: {settings.margin}px</span>
              <input
                type="range"
                min={0}
                max={64}
                value={settings.margin}
                onChange={(e) => updateSettings({ margin: Number(e.target.value) })}
                className="w-full"
              />
            </label>

            <label className="space-y-1">
              <span>Background</span>
              <input
                type="color"
                value={settings.background}
                onChange={(e) => updateSettings({ background: e.target.value })}
                className="h-8 w-full rounded-lg border-none bg-transparent"
              />
            </label>
          </div>

          <div className="mt-4 rounded-xl border border-white/10 bg-bg/40 p-3 text-xs text-slate-300">
            <p className="font-medium">Task Queue</p>
            <p className="mt-1">
              {recentTask
                ? `${recentTask.status.toUpperCase()} • ${recentTask.progress}% • ${recentTask.message ?? ''}`
                : 'No task yet'}
            </p>
          </div>

          <button className="fixed bottom-28 right-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-white shadow-glow">
            <Plus className="h-5 w-5" />
          </button>
        </motion.div>
      </div>
    </div>
  );
}
