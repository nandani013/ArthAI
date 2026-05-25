import { motion } from 'framer-motion';
import { GraduationCap, Lightbulb, Building2 } from 'lucide-react';

const agents = [
  {
    title: 'CRM Intelligence',
    icon: GraduationCap,
    headerBg: 'bg-brand-purple',
    description:
      'Your AI sales companion that scores leads, automates follow-ups, and surfaces insights. Streamlines pipeline management and customer engagement.',
    highlight: 'Perfect for sales and revenue teams.',
    cta: 'Try CRM Agent',
  },
  {
    title: 'ERP Operations',
    icon: Lightbulb,
    headerBg: 'bg-brand-blue',
    description:
      'An AI companion for finance, HR, inventory, and procurement. Supports forecasting, workflow automation, and operational excellence.',
    highlight: 'For operations and finance leaders.',
    cta: 'Try ERP Agent',
  },
  {
    title: 'Integration Hub',
    icon: Building2,
    headerBg: 'bg-brand-purple-light',
    description:
      'Unified CRM ↔ ERP sync, API gateway, cloud connectors, and real-time business intelligence in one place.',
    highlight: 'Connect your entire stack.',
    cta: 'Join Waitlist',
  },
];

export function AgentShowcase() {
  return (
    <section id="agents" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Meet Our <span className="text-gradient-purple">Agentic AI</span> Platform
          </h2>
          <p className="text-text-secondary text-lg max-w-3xl mx-auto leading-relaxed">
            Specialized AI companions with unique capabilities to accelerate real results.
            Unlike general-purpose AI, ArthAI delivers focused, autonomous agents tailored to
            your business needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {agents.map((agent, idx) => (
            <motion.div
              key={agent.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col rounded-2xl overflow-hidden border border-border card-shadow-lg bg-white"
            >
              <div className={`${agent.headerBg} px-6 py-8 flex items-center gap-3`}>
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                  <agent.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">{agent.title}</h3>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <p className="text-text-secondary text-sm leading-relaxed mb-4 flex-1">
                  {agent.description}
                </p>
                <p className="text-brand-purple font-medium text-sm mb-6">{agent.highlight}</p>
                <button className="w-full py-3 rounded-xl bg-gradient-primary text-white font-semibold text-sm hover:opacity-90 transition-opacity">
                  {agent.cta}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
