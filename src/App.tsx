import { motion } from 'framer-motion';
import {
  ArrowRight,
  BadgeCheck,
  BotOff,
  CheckCircle2,
  FileUp,
  LockKeyhole,
  Menu,
  Moon,
  Search,
  ShieldCheck,
  Sparkles,
  UploadCloud,
  Zap,
} from 'lucide-react';
import { ToolGrid } from './components/ToolGrid';
import { Workspace } from './components/Workspace';

const trust = ['Secure file processing', 'Automatic file deletion', 'Local browser processing where possible', 'Files are never used for AI training'];
const privacy = [
  ['Secure Processing', ShieldCheck],
  ['Automatic Deletion', CheckCircle2],
  ['Local Processing', Zap],
  ['No AI Training', BotOff],
  ['Encrypted Uploads', LockKeyhole],
  ['Mobile Friendly', BadgeCheck],
] as const;
const recommendations = [
  ['Invoice PDF', ['PDF to Excel', 'OCR PDF', 'Extract Tables', 'Compress PDF', 'PDF to Word']],
  ['Logo PNG', ['PNG to SVG', 'Background Remover', 'Favicon Generator', 'App Icon Pack', 'Social Media Sizes']],
  ['Excel', ['Excel to PDF', 'Dashboard', 'Remove Duplicates', 'Clean Data', 'CRM']],
];

function Logo() {
  return (
    <a href="#top" className="flex items-center gap-3" aria-label="DocBit home">
      <span className="grid h-11 w-11 place-items-center rounded-2xl bg-blue-600 text-white shadow-glow"><Sparkles className="h-5 w-5" /></span>
      <span><span className="block text-xl font-black tracking-tight">DocBit</span><span className="block text-xs font-semibold text-blue-600 dark:text-blue-300">docbit.in</span></span>
    </a>
  );
}

export function App() {
  return (
    <main id="top" className="min-h-screen bg-slate-50 text-slate-950 dark:bg-[#05080f] dark:text-white">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_20%_0%,rgba(37,99,235,.16),transparent_34%),radial-gradient(circle_at_80%_10%,rgba(14,165,233,.13),transparent_30%)]" />
      <header className="sticky top-0 z-30 border-b border-slate-200/80 bg-white/85 px-4 py-3 backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/80 supports-[padding:max(0px)]:pt-[max(12px,env(safe-area-inset-top))]">
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4">
          <Logo />
          <div className="hidden items-center gap-6 text-sm font-semibold text-slate-600 dark:text-slate-300 lg:flex">
            <a href="#tools">All Tools</a><a href="#tools">PDF Tools</a><a href="#tools">Image Tools</a><a href="#pricing">Pricing</a><a href="#privacy">Privacy</a><a href="#blog">Blog</a><a href="#login">Login</a>
          </div>
          <div className="flex items-center gap-2"><button className="hidden rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-bold shadow-sm dark:border-white/10 dark:bg-white/10 md:inline-flex"><Moon className="mr-2 h-4 w-4" /> Dark mode</button><a href="#tools" className="rounded-2xl bg-blue-600 px-5 py-3 text-sm font-black text-white shadow-glow">Choose a Tool</a><button className="rounded-2xl border border-slate-200 p-3 dark:border-white/10 lg:hidden" aria-label="Open menu"><Menu /></button></div>
        </nav>
      </header>

      <section className="mx-auto grid max-w-7xl gap-10 px-4 pb-12 pt-10 md:grid-cols-[1.05fr_.95fr] md:pt-20">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-7">
          <span className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-bold text-blue-700 dark:border-blue-300/20 dark:bg-blue-500/10 dark:text-blue-200">Privacy-first file conversion for business workflows</span>
          <h1 className="max-w-4xl text-5xl font-black leading-[.95] tracking-[-0.055em] md:text-7xl">Convert Any File Into a Usable Business Asset.</h1>
          <p className="max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">Upload PDFs, documents, spreadsheets, presentations, images, or design files and convert them into editable, searchable, structured, and business-ready formats.</p>
          <div className="flex flex-col gap-3 sm:flex-row"><a href="#tools" className="rounded-2xl bg-blue-600 px-6 py-4 text-center font-black text-white shadow-glow">Choose a Tool</a><button className="rounded-2xl border border-slate-200 bg-white px-6 py-4 font-black shadow-sm dark:border-white/10 dark:bg-white/10"><UploadCloud className="mr-2 inline h-5 w-5" /> Upload a File</button></div>
          <div className="grid gap-3 sm:grid-cols-2">{trust.map((item) => <div key={item} className="flex items-center gap-2 rounded-2xl bg-white p-3 text-sm font-semibold shadow-sm dark:bg-white/10"><CheckCircle2 className="h-5 w-5 text-blue-600" />{item}</div>)}</div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: .96 }} animate={{ opacity: 1, scale: 1 }} className="rounded-[2rem] border border-slate-200 bg-white p-4 shadow-2xl shadow-blue-950/10 dark:border-white/10 dark:bg-white/10">
          <div className="rounded-[1.5rem] border-2 border-dashed border-blue-200 bg-blue-50/70 p-5 dark:border-blue-300/20 dark:bg-blue-500/10">
            <div className="flex items-center justify-between"><div><p className="text-sm font-bold text-blue-700 dark:text-blue-200">Hero uploader</p><h2 className="mt-1 text-2xl font-black">Drag & drop any file</h2></div><FileUp className="h-10 w-10 text-blue-600" /></div>
            <div className="mt-6 grid grid-cols-3 gap-3 text-center text-xs font-bold"><button className="rounded-2xl bg-white p-4 shadow-sm dark:bg-slate-950/60">Browse</button><button className="rounded-2xl bg-white p-4 shadow-sm dark:bg-slate-950/60">Camera</button><button className="rounded-2xl bg-white p-4 shadow-sm dark:bg-slate-950/60">Gallery</button></div>
            <div className="mt-5 rounded-2xl bg-white p-4 shadow-sm dark:bg-slate-950/60"><div className="mb-2 flex items-center justify-between text-xs font-bold"><span>Auto detecting file type</span><span>68%</span></div><div className="h-2 rounded-full bg-slate-100 dark:bg-white/10"><div className="h-2 w-2/3 rounded-full bg-blue-600" /></div><p className="mt-3 text-sm text-slate-600 dark:text-slate-300">Recommended: PDF to Excel, OCR PDF, Compress PDF</p></div>
          </div>
        </motion.div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8"><div className="rounded-[2rem] border border-slate-200 bg-white p-4 shadow-sm dark:border-white/10 dark:bg-white/10"><label className="flex items-center gap-3 rounded-2xl bg-slate-50 px-4 py-4 dark:bg-slate-950/60"><Search className="text-blue-600" /><input className="w-full bg-transparent outline-none" placeholder="Search convert pdf to word, merge pdf, invoice to excel, transparent png..." /></label></div></section>

      <ToolGrid />

      <section className="mx-auto max-w-7xl px-4 py-12"><div className="mb-6 flex items-end justify-between"><div><p className="font-black text-blue-600">Smart recommendations</p><h2 className="text-3xl font-black">Start from what you uploaded</h2></div><ArrowRight /></div><div className="grid gap-4 md:grid-cols-3">{recommendations.map(([name, items]) => <div key={name as string} className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-white/10"><h3 className="text-xl font-black">{name}</h3><div className="mt-4 flex flex-wrap gap-2">{(items as string[]).map((item) => <span key={item} className="rounded-full bg-blue-50 px-3 py-1 text-sm font-bold text-blue-700 dark:bg-blue-500/10 dark:text-blue-200">{item}</span>)}</div></div>)}</div></section>

      <section id="privacy" className="mx-auto max-w-7xl px-4 py-12"><div className="grid gap-4 md:grid-cols-6">{privacy.map(([label, Icon]) => <div key={label} className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-white/10"><Icon className="mb-4 text-blue-600" /><p className="font-black">{label}</p></div>)}</div></section>

      <section id="pricing" className="mx-auto max-w-7xl px-4 py-12"><h2 className="text-3xl font-black">Pricing in INR</h2><div className="mt-6 grid gap-4 md:grid-cols-3">{[['Free','₹0','Limited daily conversions, small file size, standard tools'],['Pro','₹399/mo','Batch conversion, OCR, conversion history, priority processing'],['Business','₹1,999/mo','Team workspace, API access, custom retention, admin controls']].map(([plan, price, body]) => <div key={plan} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/10"><p className="text-sm font-black text-blue-600">{plan}</p><p className="mt-2 text-4xl font-black">{price}</p><p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{body}</p></div>)}</div></section>

      <footer className="mx-auto max-w-7xl px-4 pb-28 pt-10 text-sm text-slate-500 dark:text-slate-400"><p>© 2026 DocBit. Files are never stored permanently unless explicitly saved. Tools without a completed conversion engine are clearly marked Coming Soon.</p></footer>

      <nav className="fixed inset-x-0 bottom-0 z-40 mx-auto max-w-md rounded-t-3xl border border-slate-200 bg-white/95 px-6 pb-[max(12px,env(safe-area-inset-bottom))] pt-3 shadow-2xl dark:border-white/10 dark:bg-slate-950/95 md:hidden"><div className="flex justify-between text-xs font-black"><a href="#top">Home</a><a href="#tools">Tools</a><button>Upload</button><a href="#pricing">Pricing</a></div></nav>
      <Workspace />
    </main>
  );
}
