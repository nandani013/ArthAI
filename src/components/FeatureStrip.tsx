import { motion } from 'framer-motion';
import { Code2, MessageSquare, CheckCircle } from 'lucide-react';

const cards = [
  {
    icon: Code2,
    title: 'Smart Workflow Automation',
    description: 'ArthAI orchestrates efficient workflows across CRM and ERP based on your business rules.',
    iconColor: 'text-brand-purple',
    iconBg: 'bg-brand-purple/10',
  },
  {
    icon: MessageSquare,
    title: 'Contextual Guidance',
    description: 'Expert advice on architecture, tech stack, and scaling strategies for your enterprise.',
    iconColor: 'text-brand-blue',
    iconBg: 'bg-brand-blue/10',
  },
  {
    icon: CheckCircle,
    title: 'Quality Assurance',
    description: 'Automated validation ensures your operations stay reliable and performant.',
    iconColor: 'text-brand-purple-light',
    iconBg: 'bg-brand-purple/10',
  },
];

export function FeatureStrip() {
  return (
    <section className="py-20 bg-gradient-section border-y border-border/60">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Everything You Need to Run Your{' '}
            <span className="text-gradient-purple">Enterprise</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            ArthAI combines cutting-edge artificial intelligence with proven business
            frameworks to help you build successful operations faster.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, idx) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-2xl p-8 border border-border card-shadow hover:card-shadow-lg transition-shadow"
            >
              <div className={`inline-flex p-3 rounded-xl ${card.iconBg} mb-5`}>
                <card.icon className={`w-6 h-6 ${card.iconColor}`} />
              </div>
              <h3 className="text-lg font-bold mb-3">{card.title}</h3>
              <p className="text-text-secondary text-sm leading-relaxed">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
