import { motion } from 'framer-motion';
import { Brain, Code2, Rocket, CheckCircle } from 'lucide-react';

const steps = [
  {
    step: 'Step 1',
    icon: Brain,
    title: 'Define Your Vision',
    description:
      'Tell ArthAI about your business goals, teams, and core workflows. Our AI helps refine and prioritize requirements.',
    color: 'bg-brand-purple',
  },
  {
    step: 'Step 2',
    icon: Code2,
    title: 'AI-Powered Setup',
    description:
      'ArthAI configures CRM pipelines, ERP modules, and integrations — building a functional platform based on your needs.',
    color: 'bg-brand-blue',
  },
  {
    step: 'Step 3',
    icon: Rocket,
    title: 'Iterate & Improve',
    description:
      'Test workflows, collect feedback, and refine operations with AI-assisted improvements and optimizations.',
    color: 'bg-brand-purple-light',
  },
  {
    step: 'Step 4',
    icon: CheckCircle,
    title: 'Launch at Scale',
    description:
      'Deploy your unified platform with confidence, ready to attract users, investors, and stakeholders.',
    color: 'bg-brand-purple',
  },
];

export function HowItWorks() {
  return (
    <section className="py-24 bg-surface-muted">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            How ArthAI Works
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Our streamlined process helps you go from idea to implementation with
            unprecedented speed and efficiency.
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden lg:block absolute top-[72px] left-[12%] right-[12%] h-0.5 bg-border" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                <span className="text-xs font-semibold text-brand-purple uppercase tracking-wider mb-4">
                  {item.step}
                </span>
                <div
                  className={`w-14 h-14 rounded-full ${item.color} flex items-center justify-center mb-6 shadow-md relative z-10`}
                >
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <div className="bg-white rounded-2xl p-6 border border-border card-shadow w-full">
                  <h3 className="text-lg font-bold text-text-primary mb-3">{item.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
