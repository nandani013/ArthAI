import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Rocket, Brain, MessageCircle } from 'lucide-react';

const highlights = [
  {
    icon: Rocket,
    title: 'Rapid Deployment',
    description: 'Live CRM & ERP workflows in days, not months.',
  },
  {
    icon: Brain,
    title: 'Intelligent Assistance',
    description: 'AI agents that predict, automate, and optimize processes.',
  },
  {
    icon: MessageCircle,
    title: 'Collaborative Insights',
    description: 'Dashboards and recommendations your team can act on.',
  },
];

export function Hero() {
  return (
    <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 bg-gradient-hero overflow-hidden">
      <div className="absolute inset-0 bg-mesh opacity-40 pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-brand/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── Left: Copy ── */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="section-label bg-brand/15 text-brand-light border border-brand/25 mb-8"
            >
              <Sparkles className="w-3.5 h-3.5" />
              AI-native CRM + ERP
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-[3.25rem] font-extrabold tracking-tight leading-[1.08] mb-6 text-white"
            >
              Run your enterprise on{' '}
              <span className="text-gradient">intelligent automation</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-white/60 max-w-lg mb-10 leading-relaxed"
            >
              ArthAIStudio unifies CRM, ERP, and autonomous AI agents into one platform—so your
              teams move faster with clarity, not complexity.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button
                type="button"
                className="btn-primary px-8 py-4"
                onClick={() => window.dispatchEvent(new Event('open-contact-modal'))}
              >
                Get in touch
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          </div>

          {/* ── Right: Circular Orbital Diagram ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="relative flex flex-col items-center"
          >
            {/* Subtitle */}
            <p className="text-white font-semibold text-sm md:text-base mb-4 text-center tracking-wide">
              The Enterprise Engine:{' '}
              <span className="text-brand-light">Autonomous AI Orchestration</span>
            </p>

            {/* Card */}
            <div
              className="relative w-full max-w-md mx-auto rounded-3xl border border-white/10 overflow-hidden"
              style={{ background: 'rgba(16,24,40,0.80)', backdropFilter: 'blur(20px)' }}
            >
              {/* Ambient glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-brand/15 blur-[80px] rounded-full pointer-events-none" />

              {/* ── SVG Orbital Diagram ── */}
              <svg viewBox="0 0 360 360" className="w-full relative z-10" style={{ padding: '14px' }}>
                <defs>
                  <linearGradient id="ring-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%"   stopColor="#2dd4bf" stopOpacity="0.9" />
                    <stop offset="50%"  stopColor="#0d9488" stopOpacity="0.55" />
                    <stop offset="100%" stopColor="#2dd4bf" stopOpacity="0.9" />
                  </linearGradient>
                  <radialGradient id="brain-fill" cx="38%" cy="38%">
                    <stop offset="0%" stopColor="#14b8a6" />
                    <stop offset="100%" stopColor="#0d9488" />
                  </radialGradient>
                  <filter id="soft-glow">
                    <feGaussianBlur stdDeviation="3" result="b" />
                    <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
                  </filter>
                </defs>

                {/* ── Orbital ring ── */}
                <circle
                  cx="180" cy="178" r="118"
                  fill="none"
                  stroke="url(#ring-grad)"
                  strokeWidth="1.8"
                  strokeDasharray="4 3.5"
                  filter="url(#soft-glow)"
                  opacity="0.8"
                />

                {/* ── 6 spokes with dot connectors ── */}
                {/* CRM — top (270°) */}
                <line x1="180" y1="178" x2="180" y2="60"
                  stroke="#2dd4bf" strokeWidth="1.5" strokeDasharray="5 5" opacity="0.6"
                  className="animate-[dash_3s_linear_infinite]" />
                <circle cx="180" cy="119" r="3.5" fill="#f97316" opacity="0.95" />
                <circle cx="180" cy="89"  r="3"   fill="#2dd4bf" opacity="0.95" />

                {/* ERP — top-right (330°) */}
                <line x1="180" y1="178" x2="282" y2="119"
                  stroke="#2dd4bf" strokeWidth="1.5" strokeDasharray="5 5" opacity="0.6"
                  className="animate-[dash_2.5s_linear_infinite]" />
                <circle cx="231" cy="148" r="3.5" fill="#2dd4bf" opacity="0.95" />
                <circle cx="257" cy="133" r="3"   fill="#f97316" opacity="0.95" />

                {/* Healthcare — bottom-right (30°) */}
                <line x1="180" y1="178" x2="282" y2="237"
                  stroke="#2dd4bf" strokeWidth="1.5" strokeDasharray="5 5" opacity="0.6"
                  className="animate-[dash_4s_linear_infinite]" />
                <circle cx="231" cy="207" r="3.5" fill="#f97316" opacity="0.95" />
                <circle cx="257" cy="222" r="3"   fill="#2dd4bf" opacity="0.95" />

                {/* EdTech — bottom (90°) */}
                <line x1="180" y1="178" x2="180" y2="296"
                  stroke="#2dd4bf" strokeWidth="1.5" strokeDasharray="5 5" opacity="0.6"
                  className="animate-[dash_3.5s_linear_infinite]" />
                <circle cx="180" cy="237" r="3.5" fill="#2dd4bf" opacity="0.95" />
                <circle cx="180" cy="267" r="3"   fill="#f97316" opacity="0.95" />

                {/* Finance — bottom-left (150°) */}
                <line x1="180" y1="178" x2="78" y2="237"
                  stroke="#2dd4bf" strokeWidth="1.5" strokeDasharray="5 5" opacity="0.6"
                  className="animate-[dash_2s_linear_infinite]" />
                <circle cx="129" cy="207" r="3.5" fill="#f97316" opacity="0.95" />
                <circle cx="103" cy="222" r="3"   fill="#2dd4bf" opacity="0.95" />

                {/* Workflows — top-left (210°) */}
                <line x1="180" y1="178" x2="78" y2="119"
                  stroke="#2dd4bf" strokeWidth="1.5" strokeDasharray="5 5" opacity="0.6"
                  className="animate-[dash_3s_linear_infinite]" />
                <circle cx="129" cy="148" r="3.5" fill="#2dd4bf" opacity="0.95" />
                <circle cx="103" cy="133" r="3"   fill="#f97316" opacity="0.95" />

                {/* ── Center brain ── */}
                <circle cx="180" cy="178" r="40" fill="#0d9488" opacity="0.14" className="animate-pulse" filter="url(#soft-glow)" />
                <circle cx="180" cy="178" r="28" fill="url(#brain-fill)" stroke="#2dd4bf" strokeWidth="1.8" />
                {/* Brain line art */}
                <g transform="translate(167,164)" fill="none" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M13,6 C13,3.8 11.2,2 9,2 C7.6,2 6.3,2.8 5.6,4 C4.9,2.8 3.6,2 2.2,2 C0.5,2 -0.8,3.3 -0.8,5 C-0.8,5.5 -0.7,5.9 -0.5,6.3 C-0.7,6.7 -0.8,7.1 -0.8,7.5 C-0.8,9.4 0.8,11 2.7,11 L5.2,11 L5.2,14 L7.2,14 L7.2,11 L9.7,11 C11.6,11 13.2,9.4 13.2,7.5 C13.2,7 13.1,6.6 12.9,6.2 C13.1,5.8 13.2,5.4 13.2,5" />
                  <line x1="6.2" y1="4" x2="6.2" y2="11" />
                  <line x1="3.2" y1="6.5" x2="9.2" y2="6.5" />
                  <line x1="2.2" y1="8.8" x2="4.2" y2="8.8" />
                  <line x1="8.2" y1="8.8" x2="10.2" y2="8.8" />
                </g>
                <text x="180" y="219" textAnchor="middle" fill="white" fontSize="9.5" fontWeight="700"
                  fontFamily="system-ui" letterSpacing="1.5" opacity="0.95">
                  AI ORCHESTRATOR
                </text>

                {/* ── Node boxes (6 nodes) ── */}

                {/* CRM — top-center: box anchored at (148, 22) */}
                <g transform="translate(148,22)">
                  <rect width="64" height="52" rx="9" fill="#111b2d" stroke="#2dd4bf" strokeWidth="1.5" />
                  <rect width="64" height="52" rx="9" fill="#2dd4bf" opacity="0.05" />
                  <g transform="translate(20,8)" fill="none" stroke="#2dd4bf" strokeWidth="1.5" strokeLinecap="round">
                    <circle cx="8" cy="6" r="3.5" />
                    <path d="M1,20 C1,16.5 4.1,14 8,14" />
                    <line x1="14" y1="7" x2="23" y2="7" />
                    <line x1="14" y1="11" x2="21" y2="11" />
                    <line x1="14" y1="15" x2="19" y2="15" />
                  </g>
                  <text x="32" y="48" textAnchor="middle" fill="white" fontSize="9" fontWeight="600" fontFamily="system-ui" opacity="0.9">CRM</text>
                </g>

                {/* ERP — top-right: box at (252, 93) */}
                <g transform="translate(252,93)">
                  <rect width="60" height="52" rx="9" fill="#111b2d" stroke="#2dd4bf" strokeWidth="1.5" />
                  <rect width="60" height="52" rx="9" fill="#2dd4bf" opacity="0.05" />
                  <g transform="translate(18,8)" fill="none" stroke="#2dd4bf" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="0" y="0" width="9" height="9" rx="1" />
                    <rect x="13" y="0" width="9" height="9" rx="1" />
                    <rect x="0" y="13" width="9" height="9" rx="1" />
                    <rect x="13" y="13" width="9" height="9" rx="1" />
                    <line x1="4.5" y1="9" x2="4.5" y2="13" />
                    <line x1="17.5" y1="9" x2="17.5" y2="13" />
                    <line x1="9" y1="4.5" x2="13" y2="4.5" />
                    <line x1="9" y1="17.5" x2="13" y2="17.5" />
                  </g>
                  <text x="30" y="47" textAnchor="middle" fill="white" fontSize="9" fontWeight="600" fontFamily="system-ui" opacity="0.9">ERP</text>
                </g>

                {/* Healthcare — bottom-right: box at (252, 212) */}
                <g transform="translate(252,212)">
                  <rect width="60" height="52" rx="9" fill="#111b2d" stroke="#2dd4bf" strokeWidth="1.5" />
                  <rect width="60" height="52" rx="9" fill="#2dd4bf" opacity="0.05" />
                  <g transform="translate(18,7)" fill="none" stroke="#2dd4bf" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12,1 C8,1 5,4 5,8 C5,14 12,22 12,22 C12,22 19,14 19,8 C19,4 16,1 12,1 Z" />
                    <line x1="12" y1="5" x2="12" y2="11" />
                    <line x1="9" y1="8"  x2="15" y2="8" />
                  </g>
                  <text x="30" y="47" textAnchor="middle" fill="white" fontSize="8" fontWeight="600" fontFamily="system-ui" opacity="0.9">Healthcare</text>
                </g>

                {/* EdTech — bottom-center: box at (148, 270) */}
                <g transform="translate(148,270)">
                  <rect width="64" height="52" rx="9" fill="#111b2d" stroke="#2dd4bf" strokeWidth="1.5" />
                  <rect width="64" height="52" rx="9" fill="#2dd4bf" opacity="0.05" />
                  <g transform="translate(20,8)" fill="none" stroke="#2dd4bf" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2,6 L12,2 L22,6 L12,10 Z" />
                    <path d="M6,10 L6,16 C6,16 12,20 18,16 L18,10" />
                    <line x1="22" y1="6" x2="22" y2="14" />
                  </g>
                  <text x="32" y="48" textAnchor="middle" fill="white" fontSize="9" fontWeight="600" fontFamily="system-ui" opacity="0.9">EdTech</text>
                </g>

                {/* Finance — bottom-left: box at (22, 212) */}
                <g transform="translate(22,212)">
                  <rect width="64" height="52" rx="9" fill="#111b2d" stroke="#2dd4bf" strokeWidth="1.5" />
                  <rect width="64" height="52" rx="9" fill="#2dd4bf" opacity="0.05" />
                  <g transform="translate(20,7)" fill="none" stroke="#2dd4bf" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="8" r="4" />
                    <line x1="12" y1="4" x2="12" y2="2" />
                    <line x1="12" y1="12" x2="12" y2="14" />
                    <path d="M5,18 C5,15 8,13.5 12,13.5 C16,13.5 19,15 19,18" />
                    <line x1="7" y1="20" x2="17" y2="20" />
                  </g>
                  <text x="32" y="48" textAnchor="middle" fill="white" fontSize="9" fontWeight="600" fontFamily="system-ui" opacity="0.9">Finance</text>
                </g>

                {/* Workflows — top-left: box at (22, 93) */}
                <g transform="translate(22,93)">
                  <rect width="64" height="52" rx="9" fill="#111b2d" stroke="#2dd4bf" strokeWidth="1.5" />
                  <rect width="64" height="52" rx="9" fill="#2dd4bf" opacity="0.05" />
                  <g transform="translate(20,8)" fill="none" stroke="#2dd4bf" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="0" y="0" width="9" height="9" rx="1" />
                    <rect x="14" y="0" width="9" height="9" rx="1" />
                    <rect x="7" y="14" width="9" height="9" rx="1" />
                    <line x1="9" y1="4.5" x2="14" y2="4.5" />
                    <line x1="18.5" y1="9" x2="11.5" y2="14" />
                    <line x1="4.5" y1="9" x2="11.5" y2="14" />
                  </g>
                  <text x="32" y="48" textAnchor="middle" fill="white" fontSize="9" fontWeight="600" fontFamily="system-ui" opacity="0.9">Workflows</text>
                </g>

              </svg>

              {/* ── LIVE ENTERPRISE SYNC pill ── */}
              <div
                className="mx-4 mb-5 flex items-center justify-center gap-3 rounded-2xl border border-brand/30 py-3 px-5"
                style={{ background: 'rgba(13,148,136,0.12)' }}
              >
                <div className="relative flex h-3 w-3 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-light opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-light" />
                </div>
                <span className="text-xs font-bold tracking-[0.18em] uppercase text-white/80">
                  <span className="text-brand-light">Live</span> Enterprise Sync
                </span>
              </div>
            </div>
          </motion.div>

        </div>

        {/* ── Bottom highlights ── */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 border-t border-white/10">
          {highlights.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 + idx * 0.08 }}
              className="flex gap-4 items-start"
            >
              <div className="shrink-0 p-2.5 rounded-lg bg-brand/20 border border-brand/30">
                <item.icon className="w-5 h-5 text-brand-light" />
              </div>
              <div>
                <h3 className="font-bold text-white text-sm mb-1">{item.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
