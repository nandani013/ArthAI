import { motion } from 'framer-motion';
import { Database, Target, BrainCircuit, Workflow, ArrowRightLeft, Layers } from 'lucide-react';

export function IntegrationShowcase() {
  return (
    <section id="integrations" className="py-24 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center mb-16"
        >
          <span className="section-label bg-ink/5 text-ink border border-border mb-4">
            Architecture
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 text-ink">
            Unified <span className="text-gradient">CRM–ERP</span> intelligence
          </h2>
          <p className="text-text-secondary text-lg leading-relaxed">
            One orchestration layer—no silos between customer-facing ops and enterprise systems.
          </p>
        </motion.div>

        <div className="relative max-w-2xl mx-auto aspect-square md:aspect-[5/3] rounded-3xl border border-border bg-surface-muted p-8 md:p-12">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center"
          >
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-gradient-primary flex items-center justify-center card-shadow-lg">
              <BrainCircuit className="w-10 h-10 text-white" />
            </div>
            <p className="mt-3 font-bold text-sm text-ink bg-white px-4 py-1.5 rounded-lg border border-border shadow-sm">
              AI Orchestration
            </p>
          </motion.div>

          <motion.div
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="absolute top-1/2 left-4 md:left-10 -translate-y-1/2 z-10 flex flex-col items-center"
          >
            <div className="w-14 h-14 rounded-xl bg-white border-2 border-brand/30 flex items-center justify-center card-shadow">
              <Target className="w-6 h-6 text-brand" />
            </div>
            <p className="mt-2 text-xs font-semibold text-text-secondary">CRM</p>
          </motion.div>

          <motion.div
            initial={{ x: 20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="absolute top-1/2 right-4 md:right-10 -translate-y-1/2 z-10 flex flex-col items-center"
          >
            <div className="w-14 h-14 rounded-xl bg-white border-2 border-accent/40 flex items-center justify-center card-shadow">
              <Database className="w-6 h-6 text-accent" />
            </div>
            <p className="mt-2 text-xs font-semibold text-text-secondary">ERP</p>
          </motion.div>

          <motion.div
            initial={{ y: -16, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="absolute top-4 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center"
          >
            <div className="w-12 h-12 rounded-lg bg-white border border-border flex items-center justify-center card-shadow">
              <ArrowRightLeft className="w-5 h-5 text-text-muted" />
            </div>
            <p className="mt-1.5 text-[10px] font-medium text-text-muted">APIs</p>
          </motion.div>

          <motion.div
            initial={{ y: 16, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center"
          >
            <div className="w-12 h-12 rounded-lg bg-white border border-border flex items-center justify-center card-shadow">
              <Layers className="w-5 h-5 text-text-muted" />
            </div>
            <p className="mt-1.5 text-[10px] font-medium text-text-muted">BI</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="absolute bottom-8 left-8 md:left-16 z-10 flex flex-col items-center"
          >
            <div className="w-11 h-11 rounded-lg bg-white border border-border flex items-center justify-center card-shadow">
              <Workflow className="w-4 h-4 text-text-muted" />
            </div>
            <p className="mt-1.5 text-[10px] font-medium text-text-muted text-center">Workflows</p>
          </motion.div>

          <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30" aria-hidden>
            <line x1="22%" y1="50%" x2="40%" y2="50%" stroke="#0d9488" strokeWidth="2" strokeDasharray="5 4" />
            <line x1="78%" y1="50%" x2="60%" y2="50%" stroke="#f97316" strokeWidth="2" strokeDasharray="5 4" />
            <line x1="50%" y1="22%" x2="50%" y2="40%" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="4 3" />
            <line x1="50%" y1="60%" x2="50%" y2="78%" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="4 3" />
          </svg>
        </div>
      </div>
    </section>
  );
}
