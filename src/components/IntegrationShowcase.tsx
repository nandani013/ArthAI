import { motion } from 'framer-motion';
import { Database, Target, BrainCircuit, Workflow, ArrowRightLeft, Layers } from 'lucide-react';

export function IntegrationShowcase() {
  return (
    <section id="integrations" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-surface-muted border border-border text-text-secondary text-xs font-semibold uppercase mb-6">
            Architecture
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Unified <span className="text-gradient-purple">CRM–ERP</span> Intelligence
          </h2>
          <p className="text-text-secondary text-lg leading-relaxed">
            ArthAI creates seamless synchronization between customer operations and enterprise
            systems. No more silos — just a single, intelligent flow of data.
          </p>
        </motion.div>

        <div className="relative max-w-3xl mx-auto aspect-square md:aspect-[16/10] mt-8">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center"
          >
            <div className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-white border-2 border-brand-purple/40 flex items-center justify-center card-shadow-lg">
              <BrainCircuit className="w-10 h-10 text-brand-purple" />
            </div>
            <p className="mt-4 font-semibold text-sm bg-white px-4 py-1.5 rounded-full border border-border shadow-sm">
              AI Orchestration Engine
            </p>
          </motion.div>

          <motion.div
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="absolute top-1/2 left-0 md:left-8 -translate-y-1/2 z-10 flex flex-col items-center"
          >
            <div className="w-16 h-16 rounded-2xl bg-white border border-brand-purple/30 flex items-center justify-center card-shadow">
              <Target className="w-7 h-7 text-brand-purple" />
            </div>
            <p className="mt-2 text-sm font-medium text-text-secondary">CRM Data</p>
          </motion.div>

          <motion.div
            initial={{ x: 30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="absolute top-1/2 right-0 md:right-8 -translate-y-1/2 z-10 flex flex-col items-center"
          >
            <div className="w-16 h-16 rounded-2xl bg-white border border-brand-blue/30 flex items-center justify-center card-shadow">
              <Database className="w-7 h-7 text-brand-blue" />
            </div>
            <p className="mt-2 text-sm font-medium text-text-secondary">ERP Systems</p>
          </motion.div>

          <motion.div
            initial={{ y: -30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="absolute top-0 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center"
          >
            <div className="w-14 h-14 rounded-xl bg-white border border-border flex items-center justify-center card-shadow">
              <ArrowRightLeft className="w-5 h-5 text-text-muted" />
            </div>
            <p className="mt-2 text-sm font-medium text-text-secondary">Secure APIs</p>
          </motion.div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 }}
            className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center"
          >
            <div className="w-14 h-14 rounded-xl bg-white border border-border flex items-center justify-center card-shadow">
              <Layers className="w-5 h-5 text-text-muted" />
            </div>
            <p className="mt-2 text-sm font-medium text-text-secondary">Centralized BI</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="absolute bottom-16 left-8 md:left-24 z-10 flex flex-col items-center"
          >
            <div className="w-12 h-12 rounded-xl bg-white border border-border flex items-center justify-center card-shadow">
              <Workflow className="w-5 h-5 text-text-muted" />
            </div>
            <p className="mt-2 text-xs font-medium text-text-muted text-center">
              Workflow
              <br />
              Automation
            </p>
          </motion.div>

          <svg className="absolute inset-0 w-full h-full -z-10 pointer-events-none opacity-40">
            <line x1="20%" y1="50%" x2="38%" y2="50%" stroke="#a78bfa" strokeWidth="2" strokeDasharray="6 4" />
            <line x1="80%" y1="50%" x2="62%" y2="50%" stroke="#3b82f6" strokeWidth="2" strokeDasharray="6 4" />
            <line x1="50%" y1="18%" x2="50%" y2="38%" stroke="#e5e7eb" strokeWidth="2" strokeDasharray="6 4" />
            <line x1="50%" y1="62%" x2="50%" y2="82%" stroke="#e5e7eb" strokeWidth="2" strokeDasharray="6 4" />
          </svg>
        </div>
      </div>
    </section>
  );
}
