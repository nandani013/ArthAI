import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Calendar, Rocket, Brain, MessageCircle, Activity, Database, Network, Users, Box, Bot, ArrowRightLeft, Layers, Target, Workflow } from 'lucide-react';

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
              ArthAI unifies CRM, ERP, and autonomous AI agents into one platform—so your
              teams move faster with clarity, not complexity.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button type="button" className="btn-primary px-8 py-4" onClick={() => window.dispatchEvent(new Event('open-contact-modal'))}>
                Get in touch
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="relative"
          >
            <div className="rounded-3xl border border-white/10 bg-ink/40 backdrop-blur-xl p-8 shadow-2xl relative overflow-hidden aspect-square w-full max-w-md mx-auto flex items-center justify-center">
              
              {/* Animated background glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand/10 blur-[100px] pointer-events-none rounded-full" />
              <div className="absolute inset-0 bg-mesh opacity-20 pointer-events-none" />

              {/* Connecting SVG Lines with animated data packets */}
              <div className="absolute inset-0 pointer-events-none flex items-center justify-center z-0">
                <svg className="w-full h-full" viewBox="0 0 200 200">
                  <defs>
                    <linearGradient id="glowLine" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="var(--color-brand-light)" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="transparent" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  
                  {/* Base connections */}
                  <path d="M 100,100 L 40,40" stroke="rgba(255,255,255,0.05)" strokeWidth="2" />
                  <path d="M 100,100 L 160,40" stroke="rgba(255,255,255,0.05)" strokeWidth="2" />
                  <path d="M 100,100 L 40,160" stroke="rgba(255,255,255,0.05)" strokeWidth="2" />
                  <path d="M 100,100 L 160,160" stroke="rgba(255,255,255,0.05)" strokeWidth="2" />
                  <path d="M 100,100 L 100,20" stroke="rgba(255,255,255,0.05)" strokeWidth="2" />

                  {/* Animated packets (simulated with dashed lines) */}
                  <path d="M 100,100 L 40,40" stroke="#14b8a6" strokeWidth="2" strokeDasharray="4 20" className="opacity-50 animate-[dash_3s_linear_infinite]" />
                  <path d="M 100,100 L 160,40" stroke="#f97316" strokeWidth="2" strokeDasharray="4 20" className="opacity-50 animate-[dash_2s_linear_infinite]" />
                  <path d="M 100,100 L 40,160" stroke="#a855f7" strokeWidth="2" strokeDasharray="4 20" className="opacity-50 animate-[dash_4s_linear_infinite]" />
                  <path d="M 100,100 L 160,160" stroke="#10b981" strokeWidth="2" strokeDasharray="4 20" className="opacity-50 animate-[dash_2.5s_linear_infinite]" />
                  <path d="M 100,100 L 100,20" stroke="#0ea5e9" strokeWidth="2" strokeDasharray="4 20" className="opacity-50 animate-[dash_3.5s_linear_infinite]" />
                </svg>
              </div>

              {/* Central Core: AI Orchestration */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 flex flex-col items-center">
                <div className="relative group cursor-pointer">
                  <div className="absolute -inset-3 bg-brand/40 blur-xl rounded-full animate-pulse transition-all duration-500 group-hover:bg-brand/60" />
                  <div className="w-20 h-20 bg-[#051024] border border-brand/50 rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(20,184,166,0.4)] relative z-10 overflow-hidden transition-transform duration-300 group-hover:scale-105">
                    <div className="absolute inset-0 bg-gradient-to-br from-brand/20 to-transparent opacity-50" />
                    <Brain className="w-10 h-10 text-brand-light" />
                  </div>
                </div>
                <div className="mt-3 bg-[#051024]/90 backdrop-blur-md rounded-full px-4 py-1.5 border border-white/10 z-20 shadow-lg">
                  <span className="text-[11px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-light to-white uppercase tracking-wider">AI Orchestrator</span>
                </div>
              </div>

              {/* Node 1: CRM (Top Left) */}
              <div className="absolute top-[20%] left-[20%] -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center gap-2">
                <div className="w-12 h-12 bg-[#051024]/80 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/10 shadow-lg transition-all duration-300 hover:scale-110 hover:border-blue-400/50 hover:shadow-[0_0_15px_rgba(96,165,250,0.3)] cursor-pointer">
                  <Users className="w-5 h-5 text-blue-400" />
                </div>
                <span className="text-[10px] text-white/70 font-medium uppercase tracking-wider">CRM</span>
              </div>

              {/* Node 2: ERP (Top Right) */}
              <div className="absolute top-[20%] right-[20%] translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center gap-2">
                <div className="w-12 h-12 bg-[#051024]/80 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/10 shadow-lg transition-all duration-300 hover:scale-110 hover:border-orange-400/50 hover:shadow-[0_0_15px_rgba(251,146,60,0.3)] cursor-pointer">
                  <Database className="w-5 h-5 text-orange-400" />
                </div>
                <span className="text-[10px] text-white/70 font-medium uppercase tracking-wider">ERP</span>
              </div>

              {/* Node 3: Analytics (Bottom Left) */}
              <div className="absolute bottom-[20%] left-[20%] -translate-x-1/2 translate-y-1/2 z-20 flex flex-col items-center gap-2">
                <div className="w-12 h-12 bg-[#051024]/80 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/10 shadow-lg transition-all duration-300 hover:scale-110 hover:border-purple-400/50 hover:shadow-[0_0_15px_rgba(192,132,252,0.3)] cursor-pointer">
                  <Layers className="w-5 h-5 text-purple-400" />
                </div>
                <span className="text-[10px] text-white/70 font-medium uppercase tracking-wider">Analytics</span>
              </div>

              {/* Node 4: Workflows (Bottom Right) */}
              <div className="absolute bottom-[20%] right-[20%] translate-x-1/2 translate-y-1/2 z-20 flex flex-col items-center gap-2">
                <div className="w-12 h-12 bg-[#051024]/80 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/10 shadow-lg transition-all duration-300 hover:scale-110 hover:border-emerald-400/50 hover:shadow-[0_0_15px_rgba(52,211,153,0.3)] cursor-pointer">
                  <Workflow className="w-5 h-5 text-emerald-400" />
                </div>
                <span className="text-[10px] text-white/70 font-medium uppercase tracking-wider">Workflows</span>
              </div>

              {/* Node 5: APIs (Top Center) */}
              <div className="absolute top-[10%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center gap-2">
                <div className="w-12 h-12 bg-[#051024]/80 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/10 shadow-lg transition-all duration-300 hover:scale-110 hover:border-sky-400/50 hover:shadow-[0_0_15px_rgba(56,189,248,0.3)] cursor-pointer">
                  <ArrowRightLeft className="w-5 h-5 text-sky-400 rotate-90" />
                </div>
                <span className="text-[10px] text-white/70 font-medium uppercase tracking-wider">APIs</span>
              </div>

              {/* Status Indicator */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 text-[10px] text-white/60 bg-[#051024]/90 px-3 py-1.5 rounded-full border border-white/10 backdrop-blur-md whitespace-nowrap z-20 uppercase tracking-widest shadow-lg">
                <div className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-light opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-light"></span>
                </div>
                Live Enterprise Sync
              </div>
            </div>
          </motion.div>
        </div>

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
