import { motion } from 'framer-motion';
import { Network, BarChart4, Users, Shield, Sparkles, Settings2, CheckCircle2 } from 'lucide-react';

const features = [
  {
    title: 'AI CRM Automation',
    icon: Users,
    bullets: ['Lead tracking', 'Smart follow-ups', 'AI recommendations'],
  },
  {
    title: 'ERP Workflow Engine',
    icon: Settings2,
    bullets: ['Finance & operations', 'HR management', 'Inventory systems'],
  },
  {
    title: 'Unified Business Intelligence',
    icon: BarChart4,
    bullets: ['Real-time dashboards', 'Predictive analytics', 'AI reporting'],
  },
  {
    title: 'Enterprise Security',
    icon: Shield,
    bullets: ['Role-based access', 'Governance controls', 'Secure APIs'],
  },
  {
    title: 'AI Business Agents',
    icon: Sparkles,
    bullets: ['Autonomous workflows', 'Task orchestration', 'Intelligent ops'],
  },
  {
    title: 'Integration Ecosystem',
    icon: Network,
    bullets: ['CRM ↔ ERP sync', 'APIs', 'Cloud connectors'],
  },
];

export function Features() {
  return (
    <section id="features" className="py-24 md:py-28 bg-surface-warm bg-mesh">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 max-w-2xl"
        >
          <span className="section-label bg-accent/10 text-accent border border-accent/25 mb-4">
            Capabilities
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 text-ink">
            Everything your <span className="text-gradient">business needs</span>
          </h2>
          <p className="text-text-secondary text-lg leading-relaxed">
            AI-native tools to replace fragmented legacy systems and unify your enterprise stack.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              className="bg-white rounded-2xl p-8 border border-border card-shadow hover:border-brand/25 transition-all"
            >
              <div className="w-11 h-11 rounded-lg bg-brand/10 flex items-center justify-center mb-5">
                <feature.icon className="w-5 h-5 text-brand" />
              </div>
              <h3 className="text-lg font-bold text-ink mb-4">{feature.title}</h3>
              <ul className="space-y-2.5">
                {feature.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2.5 text-sm text-text-secondary">
                    <CheckCircle2 className="w-4 h-4 mt-0.5 text-brand shrink-0" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
