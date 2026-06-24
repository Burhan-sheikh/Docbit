import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';
import {
  Bell,
  BriefcaseBusiness,
  CheckCircle2,
  ChevronRight,
  CreditCard,
  Gauge,
  Heart,
  Home,
  MapPin,
  Menu,
  MessageCircle,
  Navigation,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
  UserRound,
  Wallet,
  Wifi,
} from 'lucide-react';

const categories = [
  'Electrician',
  'Plumber',
  'Carpenter',
  'Tutor',
  'Designer',
  'Mechanic',
  'Painter',
  'Mobile Repair',
  'Laptop Repair',
  'Photographer',
  'Home Cleaning',
  'AC Repair',
  'Appliance Repair',
  'Tailor',
  'Beautician',
  'Freelancer',
];

const providers = [
  { name: 'Aarav Electricals', skill: 'Electrician', eta: '9 min', rating: '4.9', jobs: '1.8k', price: '₹299', status: 'Online' },
  { name: 'FixPro Plumbing', skill: 'Plumber', eta: '14 min', rating: '4.8', jobs: '980', price: '₹249', status: 'Busy' },
  { name: 'PixelLens Studio', skill: 'Photographer', eta: '2.1 km', rating: '5.0', jobs: '420', price: '₹1,999', status: 'Online' },
];

const workflow = ['Requested', 'Accepted', 'Assigned', 'On the way', 'Arrived', 'Work started', 'In progress', 'Completed', 'Reviewed'];

const adminStats = [
  ['Users', '102.4K', '+18%'],
  ['Providers', '22.8K', '+11%'],
  ['Jobs', '380K', '+26%'],
  ['Revenue', '₹8.6Cr', '+31%'],
];

const features: Array<[string, string, LucideIcon]> = [
  ['Realtime Jobs', 'Firestore status streams from request to review with agent escalation.', BriefcaseBusiness],
  ['Hyperlocal Maps', 'Google Places, live GPS, radius filters, ETA, routes, and location sharing.', Navigation],
  ['Secure Payments', 'Razorpay orders, subscriptions, commission split, invoices, and wallets.', CreditCard],
  ['PWA + Android', 'Installable app shell, offline caching, FCM pushes, Capacitor-ready packaging.', Wifi],
  ['Trust & Safety', 'Role-based rules, reports, verification, read receipts, and audit-friendly data.', ShieldCheck],
  ['Growth Engine', 'Featured listings, plans, local SEO pages, banners, and provider analytics.', Gauge],
];

function GlassCard({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <div className={`rounded-[16px] border border-white/10 bg-white/10 p-5 shadow-2xl shadow-black/20 backdrop-blur-xl ${className}`}>{children}</div>;
}

export function App() {
  return (
    <main className="min-h-screen overflow-hidden bg-white text-slate-950 dark:bg-[#05080f] dark:text-white">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,.35),transparent_35%),radial-gradient(circle_at_70%_20%,rgba(14,165,233,.22),transparent_30%),linear-gradient(135deg,#05080f,#0b1020_55%,#020617)]" />
      <header className="sticky top-0 z-40 border-b border-white/10 bg-black/40 px-4 py-3 backdrop-blur-xl supports-[padding:max(0px)]:pt-[max(12px,env(safe-area-inset-top))]">
        <nav className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="grid h-11 w-11 place-items-center rounded-[16px] bg-blue-500 shadow-glow"><Sparkles /></div>
            <div><p className="text-xl font-black tracking-tight">LocalPro</p><p className="text-xs text-blue-200">Hyperlocal services, instantly</p></div>
          </div>
          <div className="hidden items-center gap-6 text-sm text-slate-300 md:flex"><a href="#categories">Categories</a><a href="#providers">Providers</a><a href="#admin">Admin</a><a href="#security">Security</a></div>
          <button className="rounded-[16px] border border-white/10 bg-white/10 p-3 md:hidden" aria-label="Open menu"><Menu /></button>
        </nav>
      </header>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 pb-16 pt-10 md:grid-cols-[1.05fr_.95fr] md:pt-20">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6 }} className="space-y-7">
          <span className="inline-flex rounded-full border border-blue-300/30 bg-blue-500/15 px-4 py-2 text-sm font-semibold text-blue-100">Zomato × Uber × Urban Company × Fiverr for local pros</span>
          <h1 className="max-w-4xl text-5xl font-black leading-tight tracking-[-0.05em] md:text-7xl">Book trusted nearby service providers in minutes.</h1>
          <p className="max-w-2xl text-lg text-slate-300">A scalable PWA marketplace for customers, providers, agents, and admins with realtime jobs, chat, maps, wallets, reviews, subscriptions, and featured listings.</p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <button className="rounded-[16px] bg-blue-500 px-6 py-4 font-bold text-white shadow-glow">Request a service</button>
            <button className="rounded-[16px] border border-white/10 bg-white/10 px-6 py-4 font-bold text-white backdrop-blur">Become a provider</button>
          </div>
          <div className="grid grid-cols-3 gap-3 pt-3">
            {adminStats.slice(0, 3).map(([label, value]) => <GlassCard key={label}><p className="text-2xl font-black">{value}</p><p className="text-xs text-slate-300">{label}</p></GlassCard>)}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: .96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .7 }} className="relative mx-auto w-full max-w-md">
          <GlassCard className="space-y-4 bg-slate-950/70">
            <div className="flex items-center justify-between"><div><p className="text-sm text-slate-400">Current location</p><p className="font-bold"><MapPin className="mr-1 inline h-4 w-4 text-blue-400" /> Connaught Place, Delhi</p></div><Bell className="text-blue-300" /></div>
            <label className="flex items-center gap-3 rounded-[16px] bg-white p-4 text-slate-800"><Search className="text-blue-500" /><input className="w-full bg-transparent outline-none" placeholder="Search plumber, tutor, AC repair..." /></label>
            <div className="grid grid-cols-2 gap-3">{categories.slice(0, 6).map((c) => <button key={c} className="rounded-[16px] bg-white/10 p-3 text-left text-sm font-semibold hover:bg-blue-500/30">{c}</button>)}</div>
            <div className="rounded-[16px] border border-blue-300/20 bg-blue-500/15 p-4"><div className="mb-2 flex items-center justify-between"><p className="font-bold">Live job tracking</p><span className="text-xs text-blue-200">ETA 12 min</span></div><div className="h-40 rounded-[16px] bg-[linear-gradient(135deg,rgba(59,130,246,.32),rgba(15,23,42,.9)),radial-gradient(circle_at_30%_40%,#38bdf8_0_3px,transparent_4px),radial-gradient(circle_at_70%_65%,#22c55e_0_4px,transparent_5px)]" /></div>
          </GlassCard>
        </motion.div>
      </section>

      <section id="providers" className="mx-auto max-w-7xl px-4 py-10"><div className="mb-6 flex items-end justify-between"><div><p className="font-bold text-blue-300">Nearby providers</p><h2 className="text-3xl font-black">Radius-matched professionals</h2></div><ChevronRight /></div><div className="grid gap-4 md:grid-cols-3">{providers.map((p) => <GlassCard key={p.name}><div className="mb-4 flex items-center gap-3"><div className="grid h-14 w-14 place-items-center rounded-[16px] bg-blue-500/25 font-black">{p.name[0]}</div><div><h3 className="font-black">{p.name}</h3><p className="text-sm text-slate-300">{p.skill} • {p.eta}</p></div></div><div className="flex items-center justify-between text-sm"><span><Star className="inline h-4 w-4 fill-yellow-400 text-yellow-400" /> {p.rating} ({p.jobs})</span><span className="rounded-full bg-emerald-500/15 px-3 py-1 text-emerald-200">{p.status}</span></div><button className="mt-4 w-full rounded-[16px] bg-white py-3 font-bold text-slate-950">Book from {p.price}</button></GlassCard>)}</div></section>

      <section id="categories" className="mx-auto max-w-7xl px-4 py-10"><h2 className="mb-6 text-3xl font-black">Unlimited service categories</h2><div className="grid grid-cols-2 gap-3 md:grid-cols-4 lg:grid-cols-8">{categories.map((c) => <div key={c} className="rounded-[16px] border border-white/10 bg-white/10 p-4 text-center text-sm font-bold backdrop-blur">{c}</div>)}</div></section>

      <section className="mx-auto grid max-w-7xl gap-4 px-4 py-10 md:grid-cols-3">{features.map(([title, body, Icon]) => <GlassCard key={title as string}><Icon className="mb-4 text-blue-300" /><h3 className="text-xl font-black">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-300">{body}</p></GlassCard>)}</section>

      <section className="mx-auto max-w-7xl px-4 py-10"><GlassCard><h2 className="text-3xl font-black">Realtime job workflow</h2><div className="mt-6 grid gap-3 md:grid-cols-9">{workflow.map((step, i) => <div key={step} className="rounded-[16px] bg-white/10 p-3 text-center text-xs font-bold"><CheckCircle2 className="mx-auto mb-2 h-5 w-5 text-blue-300" />{i + 1}. {step}</div>)}</div></GlassCard></section>

      <section id="admin" className="mx-auto grid max-w-7xl gap-4 px-4 py-10 md:grid-cols-4">{adminStats.map(([label, value, change]) => <GlassCard key={label}><p className="text-sm text-slate-300">{label}</p><p className="mt-2 text-3xl font-black">{value}</p><p className="text-emerald-300">{change}</p></GlassCard>)}</section>

      <section id="security" className="mx-auto max-w-7xl px-4 py-10"><GlassCard className="grid gap-6 md:grid-cols-2"><div><h2 className="text-3xl font-black">Production architecture</h2><p className="mt-3 text-slate-300">Firebase Auth supports email, Google, phone OTP, reset, and verification. Firestore collections model users, providers, jobs, payments, wallets, subscriptions, chats, reports, settings, analytics, agents, and withdrawals with role-based access for guest, customer, provider, agent, and admin.</p></div><div className="grid grid-cols-2 gap-3 text-sm font-bold"><span><UserRound /> Customer</span><span><BriefcaseBusiness /> Provider</span><span><MessageCircle /> Agent</span><span><ShieldCheck /> Admin</span><span><Wallet /> Wallets</span><span><Heart /> Reviews</span></div></GlassCard></section>

      <nav className="fixed inset-x-0 bottom-0 z-50 mx-auto max-w-md rounded-t-[24px] border border-white/10 bg-slate-950/90 px-6 pb-[max(12px,env(safe-area-inset-bottom))] pt-3 text-white backdrop-blur-xl md:hidden"><div className="flex justify-between"><Home /><Search /><BriefcaseBusiness /><MessageCircle /><UserRound /></div></nav>
    </main>
  );
}
