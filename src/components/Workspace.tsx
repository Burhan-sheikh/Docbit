import { motion } from 'framer-motion';
import { AlertTriangle, ChevronLeft, Download, RefreshCcw, ShieldCheck, UploadCloud, X } from 'lucide-react';
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
    if (!active) return;
    if (active.status === 'coming-soon') {
      const taskId = enqueueTask({ toolId: activeTool, message: 'This conversion engine is coming soon.', stage: 'Not available yet' });
      updateTask(taskId, { status: 'failed', progress: 100 });
      return;
    }

    const taskId = enqueueTask({ toolId: activeTool, message: 'Queued with validated upload rules', stage: 'Queued' });

    worker.onmessage = (event: MessageEvent<{ progress?: number; done?: boolean; error?: string }>) => {
      if (event.data.error) {
        updateTask(taskId, { status: 'failed', message: event.data.error, progress: 100, stage: 'Error' });
        return;
      }
      if (typeof event.data.progress === 'number') {
        updateTask(taskId, { status: 'processing', progress: event.data.progress, stage: event.data.progress < 60 ? 'Processing locally where possible' : 'Preparing secure download' });
      }
      if (event.data.done) {
        updateTask(taskId, { status: 'done', progress: 100, message: 'Ready for download. Temporary files scheduled for deletion.', stage: 'Complete' });
      }
    };

    worker.postMessage({ operation: activeTool, payload: { settings } });
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/70 p-0 backdrop-blur md:p-6">
      <div className="mx-auto flex h-full max-w-5xl flex-col overflow-hidden bg-slate-50 shadow-2xl dark:bg-[#05080f] md:rounded-[2rem]">
        <div className="flex items-center justify-between border-b border-slate-200 px-4 py-3 dark:border-white/10">
          <button className="rounded-xl p-2 hover:bg-slate-100 dark:hover:bg-white/10" onClick={closeTool} aria-label="Close tool"><ChevronLeft className="h-5 w-5" /></button>
          <div className="text-center"><h2 className="text-sm font-black">{active?.title}</h2><p className="text-xs text-slate-500">{active?.seoTitle}</p></div>
          <button className="rounded-xl p-2 hover:bg-slate-100 dark:hover:bg-white/10" aria-label="Download result"><Download className="h-5 w-5" /></button>
        </div>

        <div className="grid flex-1 gap-4 overflow-auto p-4 md:grid-cols-[1fr_320px] md:p-6">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-5 dark:border-white/10 dark:bg-white/10">
            <div className="rounded-[1.5rem] border-2 border-dashed border-blue-200 bg-blue-50 p-8 text-center dark:border-blue-300/20 dark:bg-blue-500/10">
              <UploadCloud className="mx-auto h-12 w-12 text-blue-600" />
              <h3 className="mt-4 text-2xl font-black">Upload files</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Drag & drop, browse, camera, and gallery inputs are supported. Validation runs on MIME, file signature, size, and file count.</p>
              <p className="mt-3 text-sm font-bold text-blue-700 dark:text-blue-200">Limit: {active?.uploadRule.maxFiles} file{active?.uploadRule.maxFiles === 1 ? '' : 's'} • {active?.inputFormats.join(', ')}</p>
              <button onClick={startTask} className="mt-5 rounded-2xl bg-blue-600 px-6 py-4 font-black text-white shadow-glow">Start conversion</button>
              {active?.status === 'coming-soon' && <p className="mt-4 inline-flex items-center rounded-full bg-amber-50 px-3 py-1 text-sm font-bold text-amber-700 dark:bg-amber-500/10 dark:text-amber-200"><AlertTriangle className="mr-2 h-4 w-4" /> Coming Soon — no placeholder conversion is presented as working.</p>}
            </div>

            <div className="mt-5 rounded-2xl border border-slate-200 p-4 dark:border-white/10">
              <div className="mb-2 flex items-center justify-between text-sm font-bold"><span>{recentTask?.stage ?? 'Waiting for upload'}</span><span>{recentTask?.progress ?? 0}%</span></div>
              <div className="h-3 rounded-full bg-slate-100 dark:bg-white/10"><div className="h-3 rounded-full bg-blue-600 transition-all" style={{ width: `${recentTask?.progress ?? 0}%` }} /></div>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{recentTask?.message ?? 'Instant upload feedback, current stage, cancel, retry, preview, and download states appear here.'}</p>
              <div className="mt-4 flex gap-2"><button className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-bold dark:border-white/10"><X className="mr-1 inline h-4 w-4" /> Cancel</button><button onClick={startTask} className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-bold dark:border-white/10"><RefreshCcw className="mr-1 inline h-4 w-4" /> Retry</button></div>
            </div>
          </div>

          <motion.aside initial={{ x: 30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="space-y-4 rounded-[2rem] border border-slate-200 bg-white p-5 dark:border-white/10 dark:bg-white/10">
            <div className="rounded-2xl bg-blue-50 p-4 text-sm dark:bg-blue-500/10"><ShieldCheck className="mb-2 text-blue-600" /><p className="font-black">Privacy notice</p><p className="mt-1 text-slate-600 dark:text-slate-300">Local browser processing is used whenever possible. Cloud files use signed URLs and automatic deletion. Files are never used for AI training.</p></div>
            <label className="block text-sm font-bold">Output format<select className="mt-1 w-full rounded-xl border border-slate-200 bg-white p-3 dark:border-white/10 dark:bg-slate-950" value={settings.format} onChange={(e) => updateSettings({ format: e.target.value as typeof settings.format })}>{active?.outputFormats.map((format) => <option key={format}>{format}</option>)}</select></label>
            <label className="block text-sm font-bold">Quality<select className="mt-1 w-full rounded-xl border border-slate-200 bg-white p-3 dark:border-white/10 dark:bg-slate-950" value={settings.quality} onChange={(e) => updateSettings({ quality: e.target.value as typeof settings.quality })}>{['High', 'Medium', 'Low'].map((quality) => <option key={quality}>{quality}</option>)}</select></label>
            <div><p className="mb-2 text-sm font-black">Related tools</p><div className="flex flex-wrap gap-2">{active?.related.map((id) => <span key={id} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold dark:bg-white/10">{tools.find((tool) => tool.id === id)?.title}</span>)}</div></div>
          </motion.aside>
        </div>
      </div>
    </div>
  );
}
