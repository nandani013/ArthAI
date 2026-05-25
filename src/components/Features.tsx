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
    bullets: ['Finance', 'Operations', 'HR management', 'Inventory systems'],
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
    bullets: ['Autonomous workflows', 'AI task orchestration', 'Intelligent operations'],
  },
  {
    title: 'Integration Ecosystem',
    icon: Network,
    bullets: ['CRM ↔ ERP synchronization', 'APIs', 'Cloud integrations'],
  },
];

export function Features() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Everything Your <span className="text-gradient-purple">Business Needs</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            A powerful suite of AI-native tools designed to replace legacy systems and unify
            your entire enterprise stack.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -4 }}
              className="bg-white rounded-2xl p-8 border border-border card-shadow hover:card-shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-purple/10 flex items-center justify-center mb-6">
                <feature.icon className="w-6 h-6 text-brand-purple" />
              </div>
              <h3 className="text-xl font-semibold text-text-primary mb-5">{feature.title}</h3>
              <ul className="space-y-3">
                {feature.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-text-secondary">
                    <CheckCircle2 className="w-4 h-4 mt-0.5 text-brand-purple shrink-0" />
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
