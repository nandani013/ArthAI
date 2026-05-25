import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Calendar, Rocket, Brain, MessageCircle } from 'lucide-react';

const highlights = [
  {
    icon: Rocket,
    title: 'Rapid Deployment',
    description: 'Go from setup to live CRM & ERP workflows in days, not months.',
    color: 'text-brand-purple',
    bg: 'bg-brand-purple/10',
  },
  {
    icon: Brain,
    title: 'Intelligent Assistance',
    description: 'AI agents that predict, automate, and optimize every business process.',
    color: 'text-brand-blue',
    bg: 'bg-brand-blue/10',
  },
  {
    icon: MessageCircle,
    title: 'Collaborative Insights',
    description: 'Real-time dashboards and recommendations your whole team can act on.',
    color: 'text-brand-purple',
    bg: 'bg-brand-purple/10',
  },
];

export function Hero() {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 bg-gradient-hero overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-purple/30 bg-brand-purple/5 text-brand-purple text-sm font-medium mb-8"
        >
          <Sparkles className="w-4 h-4" />
          AI-powered CRM + ERP Platform
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6 text-text-primary"
        >
          Autonomous AI agents built to scale, streamline,{' '}
          <span className="text-gradient">and transform your business.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          ArthAI unifies intelligent CRM, ERP, automation, and AI agents into one
          scalable enterprise ecosystem — so your team moves faster with clarity.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
        >
          <button className="px-8 py-4 rounded-full bg-gradient-primary text-white font-semibold hover:opacity-90 transition-opacity flex items-center gap-2 shadow-md">
            Get started — 14 day free trial
            <ArrowRight className="w-4 h-4" />
          </button>
          <button className="px-8 py-4 rounded-full bg-white border-2 border-brand-purple/40 text-brand-purple font-semibold hover:bg-brand-purple/5 transition-colors flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            Book a 30-minute demo
          </button>
        </motion.div>
      </div>

      <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
        {highlights.map((item, idx) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 + idx * 0.1 }}
            className="text-center"
          >
            <div className={`inline-flex p-3 rounded-2xl ${item.bg} mb-4`}>
              <item.icon className={`w-6 h-6 ${item.color}`} />
            </div>
            <h3 className="text-lg font-bold text-text-primary mb-2">{item.title}</h3>
            <p className="text-sm text-text-secondary leading-relaxed">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
