import { motion } from 'framer-motion';
import { Brain, Code2, Rocket, CheckCircle } from 'lucide-react';

const steps = [
  {
    step: '01',
    icon: Brain,
    title: 'Define Your Vision',
    description:
      'Share goals, teams, and workflows. ArthAI helps refine requirements into a clear implementation plan.',
  },
  {
    step: '02',
    icon: Code2,
    title: 'AI-Powered Setup',
    description:
      'CRM pipelines, ERP modules, and integrations configured from your inputs—not months of manual setup.',
  },
  {
    step: '03',
    icon: Rocket,
    title: 'Iterate & Improve',
    description:
      'Test workflows, gather feedback, and refine with AI-assisted suggestions as your operations evolve.',
  },
  {
    step: '04',
    icon: CheckCircle,
    title: 'Launch at Scale',
    description:
      'Deploy a unified platform ready for stakeholders, auditors, and the growth ahead.',
  },
];

export function HowItWorks() {
  return (
    <section className="py-24 md:py-28 bg-ink text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-mesh opacity-20 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 max-w-2xl mx-auto"
        >
          <span className="section-label bg-brand/20 text-brand-light border border-brand/30 mb-4">
            Process
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
            How ArthAI works
          </h2>
          <p className="text-white/55 text-lg">
            From first conversation to live operations—a streamlined path built for speed.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="relative"
            >
              <span className="text-5xl font-extrabold text-white/5 absolute -top-2 right-4 select-none">
                {item.step}
              </span>
              <div className="rounded-2xl border border-white/10 bg-ink-soft/80 p-6 h-full hover:border-brand/40 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-brand/20 flex items-center justify-center mb-5">
                  <item.icon className="w-6 h-6 text-brand-light" />
                </div>
                <h3 className="text-lg font-bold mb-3">{item.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
