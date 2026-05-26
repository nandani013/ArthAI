import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Calendar, Rocket, Brain, MessageCircle, Activity } from 'lucide-react';

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
              <button type="button" className="btn-primary px-8 py-4">
                Start free trial
                <ArrowRight className="w-4 h-4" />
              </button>
              <button type="button" className="btn-outline-light px-8 py-4">
                <Calendar className="w-4 h-4" />
                Book a demo
              </button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="relative"
          >
            <div className="rounded-2xl border border-white/10 bg-ink-soft/80 backdrop-blur-sm p-6 card-shadow-lg">
              <div className="flex items-center justify-between mb-6">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-400/80" />
                  <span className="w-3 h-3 rounded-full bg-amber-400/80" />
                  <span className="w-3 h-3 rounded-full bg-emerald-400/80" />
                </div>
                <span className="text-xs text-white/40 font-mono">arthai.dashboard</span>
              </div>
              <div className="grid grid-cols-2 gap-3 mb-4">
                {[
                  { label: 'Pipeline value', val: '₹2.4Cr', change: '+18%' },
                  { label: 'Active workflows', val: '47', change: 'Live' },
                ].map((m) => (
                  <div key={m.label} className="rounded-xl bg-white/5 border border-white/8 p-4">
                    <p className="text-[10px] uppercase tracking-wider text-white/40 mb-1">{m.label}</p>
                    <p className="text-xl font-bold text-white">{m.val}</p>
                    <p className="text-xs text-brand-light mt-1">{m.change}</p>
                  </div>
                ))}
              </div>
              <div className="rounded-xl bg-white/5 border border-white/8 p-4 h-32 flex items-end gap-1.5">
                {[35, 55, 45, 70, 60, 85, 75, 90].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-t bg-gradient-to-t from-brand to-brand-light opacity-80"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
              <div className="mt-4 flex items-center gap-2 text-xs text-white/50">
                <Activity className="w-3.5 h-3.5 text-brand-light" />
                AI orchestration active · 12 agents running
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
