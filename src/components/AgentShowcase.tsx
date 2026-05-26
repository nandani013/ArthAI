import { motion } from 'framer-motion';
import { GraduationCap, Lightbulb, Building2 } from 'lucide-react';

const agents = [
  {
    title: 'CRM Intelligence',
    icon: GraduationCap,
    description:
      'Scores leads, automates follow-ups, and surfaces pipeline insights so revenue teams close with confidence.',
    tag: 'Sales & revenue',
    cta: 'Explore CRM Agent',
  },
  {
    title: 'ERP Operations',
    icon: Lightbulb,
    description:
      'Forecasting, procurement, inventory, and finance workflows—automated and connected across your back office.',
    tag: 'Finance & ops',
    cta: 'Explore ERP Agent',
  },
  {
    title: 'Integration Hub',
    icon: Building2,
    description:
      'CRM ↔ ERP sync, API gateway, and real-time BI in one orchestration layer for your entire stack.',
    tag: 'Platform',
    cta: 'View integrations',
  },
];

export function AgentShowcase() {
  return (
    <section id="agents" className="py-24 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <span className="section-label bg-brand/10 text-brand border border-brand/20 mb-4">
            AI Agents
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 text-ink">
            Specialized agents, <span className="text-gradient">real outcomes</span>
          </h2>
          <p className="text-text-secondary text-lg leading-relaxed">
            Purpose-built companions for CRM, ERP, and integrations—not generic chatbots
            stapled onto legacy tools.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {agents.map((agent, idx) => (
            <motion.article
              key={agent.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col rounded-2xl border border-border bg-surface-muted p-8 hover:border-brand/30 hover:card-shadow-lg transition-all group"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-brand/15 flex items-center justify-center group-hover:bg-brand/25 transition-colors">
                  <agent.icon className="w-6 h-6 text-brand" />
                </div>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-text-muted bg-white px-2 py-1 rounded border border-border">
                  {agent.tag}
                </span>
              </div>
              <h3 className="text-xl font-bold text-ink mb-3">{agent.title}</h3>
              <p className="text-text-secondary text-sm leading-relaxed mb-6 flex-1">
                {agent.description}
              </p>
              <button type="button" className="btn-primary w-full text-sm">
                {agent.cta}
              </button>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
