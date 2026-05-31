import { motion } from 'framer-motion';
import { Database, BrainCircuit, Workflow, Layers, Users, Network } from 'lucide-react';

// Node positions on SVG viewBox 400x400 (center = 200,200)
// Top: APIs  |  Left: CRM  |  Right: ERP  |  Bottom-Left: Workflows  |  Bottom-Right: Analytics
const NODES = [
  { id: 'crm',       label: 'CRM',       Icon: Users,       cx: 60,  cy: 180, color: '#2dd4bf', glow: 'rgba(45,212,191,0.5)',  border: 'rgba(45,212,191,0.6)'  },
  { id: 'erp',       label: 'ERP',       Icon: Database,    cx: 340, cy: 180, color: '#f97316', glow: 'rgba(249,115,22,0.5)', border: 'rgba(249,115,22,0.6)'  },
  { id: 'apis',      label: 'APIs',      Icon: Network,     cx: 200, cy: 55,  color: '#2dd4bf', glow: 'rgba(45,212,191,0.5)',  border: 'rgba(45,212,191,0.6)'  },
  { id: 'workflows', label: 'Workflows', Icon: Workflow,    cx: 88,  cy: 320, color: '#0d9488', glow: 'rgba(13,148,136,0.5)', border: 'rgba(13,148,136,0.6)'  },
  { id: 'analytics', label: 'Analytics', Icon: Layers,      cx: 312, cy: 320, color: '#f97316', glow: 'rgba(249,115,22,0.5)', border: 'rgba(249,115,22,0.6)'  },
];

// Percentage positions for the absolutely-positioned DOM nodes (matching SVG coords ÷ 400)
const NODE_DOM = NODES.map(n => ({ ...n, left: `${(n.cx / 400) * 100}%`, top: `${(n.cy / 400) * 100}%` }));

export function IntegrationShowcase() {
  return (
    <section id="integrations" className="py-24 md:py-32 bg-ink relative overflow-hidden">

      {/* Background ambient glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-brand/15 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-accent/8 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* ── 3-column grid ── */}
        <div className="flex flex-col xl:flex-row items-center justify-between gap-16 xl:gap-6">

          {/* ─── LEFT: Problem ─── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full xl:w-[26%] space-y-7"
          >
            <div>
              <p className="text-accent font-bold text-xs tracking-widest uppercase mb-2">The Problem:</p>
              <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight">Enterprise Complexity</h2>
            </div>

            <div className="space-y-6">
              <div className="p-4 rounded-xl border border-white/8 bg-ink-soft/50 backdrop-blur-sm">
                <h4 className="text-white font-semibold text-base mb-1.5">The Complexity Gap</h4>
                <p className="text-white/60 text-sm leading-relaxed">
                  Fragmented data silos across CRM, ERP &amp; APIs, leading to slow operations and lack of transparency.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-white/8 bg-ink-soft/50 backdrop-blur-sm">
                <h4 className="text-white font-semibold text-base mb-1.5">Moving with Friction</h4>
                <p className="text-white/60 text-sm leading-relaxed">
                  Without a unifying layer, teams lose time navigating between systems, not high-value tasks.
                </p>
              </div>
            </div>
          </motion.div>

          {/* ─── CENTER: Diagram ─── */}
          <div className="w-full xl:w-[48%] relative flex items-center justify-center" style={{ minHeight: 420 }}>

            {/* SVG connector lines */}
            <div className="absolute inset-0 pointer-events-none">
              <svg viewBox="0 0 400 400" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
                <defs>
                  {/* Teal gradient line */}
                  <linearGradient id="lg-teal" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#2dd4bf" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#0d9488" stopOpacity="0.4" />
                  </linearGradient>
                  {/* Orange gradient line */}
                  <linearGradient id="lg-orange" x1="100%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#f97316" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#0d9488" stopOpacity="0.4" />
                  </linearGradient>

                  <linearGradient id="lg-teal-api" x1="200" y1="200" x2="200" y2="55" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#2dd4bf" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#0d9488" stopOpacity="0.4" />
                  </linearGradient>

                  {/* Glow filter */}
                  <filter id="line-glow" filterUnits="userSpaceOnUse" x="-50" y="-50" width="500" height="500">
                    <feGaussianBlur stdDeviation="2.5" result="blur" />
                    <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                  </filter>
                </defs>

                {/* CRM line (teal) */}
                <line x1="200" y1="200" x2="60" y2="180"
                  stroke="url(#lg-teal)" strokeWidth="2.5" filter="url(#line-glow)"
                  strokeDasharray="6 6" className="animate-[dash_3s_linear_infinite]" />

                {/* ERP line (orange) */}
                <line x1="200" y1="200" x2="340" y2="180"
                  stroke="url(#lg-orange)" strokeWidth="2.5" filter="url(#line-glow)"
                  strokeDasharray="6 6" className="animate-[dash_2.5s_linear_infinite]" />

                {/* APIs line (teal) */}
                <line x1="200" y1="200" x2="199.9" y2="55"
                  stroke="url(#lg-teal-api)" strokeWidth="2.5" filter="url(#line-glow)"
                  strokeDasharray="6 6" className="animate-[dash_4s_linear_infinite]" />

                {/* Workflows line (teal) */}
                <line x1="200" y1="200" x2="88" y2="320"
                  stroke="url(#lg-teal)" strokeWidth="2.5" filter="url(#line-glow)"
                  strokeDasharray="6 6" className="animate-[dash_3.5s_linear_infinite]" />

                {/* Analytics line (orange) */}
                <line x1="200" y1="200" x2="312" y2="320"
                  stroke="url(#lg-orange)" strokeWidth="2.5" filter="url(#line-glow)"
                  strokeDasharray="6 6" className="animate-[dash_2s_linear_infinite]" />

                {/* Soft glow halos at endpoints */}
                {NODE_DOM.map(n => (
                  <circle key={n.id} cx={n.cx} cy={n.cy} r="26" fill={n.color} opacity="0.08" />
                ))}
                {/* Center halo */}
                <circle cx="200" cy="200" r="54" fill="#0d9488" opacity="0.12" className="animate-pulse" />
                <circle cx="200" cy="200" r="38" fill="#0d9488" opacity="0.14" className="animate-pulse" />
              </svg>
            </div>

            {/* ── Center AI Brain node ── */}
            <div className="absolute"
              style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)', zIndex: 30 }}>
              <div className="relative flex flex-col items-center">
                {/* Outer pulse ring */}
                <div className="absolute -inset-5 rounded-full bg-brand/25 blur-2xl animate-pulse" />
                {/* Brain circle */}
                <div
                  className="w-24 h-24 rounded-full flex items-center justify-center relative"
                  style={{
                    background: 'linear-gradient(135deg, #0d9488 0%, #0f766e 100%)',
                    boxShadow: '0 0 0 4px rgba(45,212,191,0.25), 0 0 50px rgba(13,148,136,0.7)',
                  }}
                >
                  <BrainCircuit className="w-12 h-12 text-white drop-shadow-lg" />
                </div>
                {/* Label */}
                <div
                  className="mt-3 px-4 py-1.5 rounded-full text-xs font-bold text-white tracking-wide"
                  style={{
                    background: 'rgba(13,148,136,0.25)',
                    border: '1px solid rgba(45,212,191,0.45)',
                    backdropFilter: 'blur(8px)',
                  }}
                >
                  AI Orchestrator
                </div>
              </div>
            </div>

            {/* ── Satellite nodes ── */}
            {NODE_DOM.map(n => (
              <div
                key={n.id}
                className="absolute flex flex-col items-center gap-2 group cursor-pointer"
                style={{
                  left: n.left,
                  top: n.top,
                  transform: 'translate(-50%, -50%)',
                  zIndex: 20,
                }}
              >
                {/* Icon card */}
                <div
                  className="w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                  style={{
                    background: 'rgba(26,35,50,0.85)',
                    border: `2px solid ${n.border}`,
                    boxShadow: `0 0 22px ${n.glow}`,
                    backdropFilter: 'blur(10px)',
                  }}
                >
                  <n.Icon className="w-7 h-7" style={{ color: n.color }} />
                </div>
                {/* Label pill */}
                <span
                  className="text-xs font-bold text-white px-3 py-1 rounded-full"
                  style={{
                    background: 'rgba(12,18,34,0.85)',
                    border: `1px solid ${n.border}`,
                    backdropFilter: 'blur(6px)',
                  }}
                >
                  {n.label}
                </span>
              </div>
            ))}

          </div>

          {/* ─── RIGHT: Solution ─── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full xl:w-[26%] space-y-7"
          >
            <div>
              <p className="text-brand-light font-bold text-xs tracking-widest uppercase mb-2">The Solution &amp; Value:</p>
              <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight">Intelligent Automation</h2>
            </div>

            <div className="space-y-6">
              <div className="p-4 rounded-xl border border-white/8 bg-ink-soft/50 backdrop-blur-sm">
                <h4 className="text-white font-semibold text-base mb-1.5 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-brand-light shadow-[0_0_8px_rgba(45,212,191,0.8)]" />
                  Live Enterprise Sync
                </h4>
                <p className="text-white/60 text-sm leading-relaxed">
                  Real-time synchronisation ensures a single, accurate source of truth across all platforms.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-white/8 bg-ink-soft/50 backdrop-blur-sm">
                <h4 className="text-white font-semibold text-base mb-1.5 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent shadow-[0_0_8px_rgba(249,115,22,0.8)]" />
                  Speed and Clarity
                </h4>
                <p className="text-white/60 text-sm leading-relaxed">
                  Automating the "glue" between systems empowers teams to move faster without manual data burden.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
