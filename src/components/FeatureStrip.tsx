import { motion } from 'framer-motion';
import { Code2, MessageSquare, CheckCircle, ArrowUpRight } from 'lucide-react';

const cards = [
  {
    icon: Code2,
    title: 'Smart Workflow Automation',
    description:
      'Orchestrate CRM and ERP workflows from a single rules engine—no brittle point-to-point scripts.',
    span: 'md:col-span-2',
    accent: 'border-l-brand',
  },
  {
    icon: MessageSquare,
    title: 'Contextual Guidance',
    description: 'Architecture and scaling advice tailored to your stack and team maturity.',
    span: '',
    accent: 'border-l-accent',
  },
  {
    icon: CheckCircle,
    title: 'Quality Assurance',
    description: 'Automated validation keeps operations reliable as you grow.',
    span: '',
    accent: 'border-l-brand-light',
  },
];

export function FeatureStrip() {
  return (
    <section className="py-20 md:py-28 bg-surface-warm bg-mesh">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 max-w-2xl"
        >
          <span className="section-label bg-brand/10 text-brand border border-brand/20 mb-4">
            Platform
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 text-ink">
            Built for teams who need{' '}
            <span className="text-gradient">speed and control</span>
          </h2>
          <p className="text-text-secondary text-lg leading-relaxed">
            ArthAI pairs proven enterprise patterns with AI-native tooling—so you ship
            operations faster without sacrificing governance.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {cards.map((card, idx) => (
            <motion.article
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className={`group ${card.span} bg-white rounded-2xl p-8 border border-border card-shadow hover:card-shadow-lg transition-all border-l-4 ${card.accent}`}
            >
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 rounded-xl bg-brand/10">
                  <card.icon className="w-6 h-6 text-brand" />
                </div>
                <ArrowUpRight className="w-5 h-5 text-border-strong group-hover:text-brand transition-colors" />
              </div>
              <h3 className="text-lg font-bold text-ink mb-2">{card.title}</h3>
              <p className="text-text-secondary text-sm leading-relaxed">{card.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
