import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Calendar, Rocket, Brain, MessageCircle, Activity, Database, Network, Users, Box, Bot } from 'lucide-react';

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
            <div className="rounded-2xl border border-white/10 bg-ink-soft/80 backdrop-blur-sm p-6 card-shadow-lg relative overflow-hidden">
              <div className="absolute inset-0 bg-mesh opacity-20 pointer-events-none" />
              
              <div className="flex items-center justify-between mb-8 relative z-10">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-400/80" />
                  <span className="w-3 h-3 rounded-full bg-amber-400/80" />
                  <span className="w-3 h-3 rounded-full bg-emerald-400/80" />
                </div>
                <span className="text-xs text-white/40 font-mono">system.architecture</span>
              </div>

              <div className="relative z-10 flex flex-col items-center gap-8 py-2">
                {/* Connecting Lines (Decorative) */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none z-0">
                  <svg className="w-full h-full opacity-30" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M 20,20 Q 50,20 50,50 T 80,80" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" className="text-brand-light animate-[dash_20s_linear_infinite]" />
                    <path d="M 80,20 Q 50,20 50,50 T 20,80" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" className="text-brand-light animate-[dash_20s_linear_infinite]" />
                  </svg>
                </div>
                
                <div className="flex justify-between w-full px-6 relative z-10">
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center backdrop-blur-md">
                      <Users className="w-5 h-5 text-blue-400" />
                    </div>
                    <span className="text-[10px] font-mono text-white/50 uppercase tracking-wider">CRM</span>
                  </div>
                  
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center backdrop-blur-md">
                      <Box className="w-5 h-5 text-purple-400" />
                    </div>
                    <span className="text-[10px] font-mono text-white/50 uppercase tracking-wider">ERP</span>
                  </div>
                </div>

                <div className="relative z-10">
                  <div className="absolute inset-0 bg-brand/30 blur-xl rounded-full animate-pulse" />
                  <div className="w-16 h-16 rounded-2xl bg-brand/20 border border-brand/40 flex items-center justify-center relative z-10 shadow-[0_0_20px_rgba(20,184,166,0.3)] backdrop-blur-md">
                    <Bot className="w-8 h-8 text-brand-light" />
                  </div>
                </div>

                <div className="flex justify-between w-full px-6 relative z-10">
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center backdrop-blur-md">
                      <Database className="w-5 h-5 text-emerald-400" />
                    </div>
                    <span className="text-[10px] font-mono text-white/50 uppercase tracking-wider">Data</span>
                  </div>
                  
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center backdrop-blur-md">
                      <Network className="w-5 h-5 text-amber-400" />
                    </div>
                    <span className="text-[10px] font-mono text-white/50 uppercase tracking-wider">API</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex items-center gap-2 text-xs text-white/50 justify-center">
                <Activity className="w-3.5 h-3.5 text-brand-light animate-pulse" />
                AI orchestration active · cross-platform sync
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
