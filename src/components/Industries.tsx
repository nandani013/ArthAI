import { motion } from 'framer-motion';

export function Industries() {
  return (
    <section id="industries" className="py-24 md:py-28 bg-ink-soft text-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-4">
            Industries
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">
            ArthAIStudio powers AI‑driven transformation across multiple verticals, from finance and healthcare to retail and manufacturing. Our platform adapts to industry‑specific workflows, delivering actionable insights and automating complex processes.
          </p>
        </motion.div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-white/5 rounded-xl border border-white/10">
              <h3 className="text-xl font-bold text-white mb-2">Finance</h3>
              <p className="text-white/70">AI‑driven financial analytics and automation.</p>
            </div>
            <div className="p-6 bg-white/5 rounded-xl border border-white/10">
              <h3 className="text-xl font-bold text-white mb-2">Healthcare</h3>
              <p className="text-white/70">Streamlined patient data and predictive diagnostics.</p>
            </div>
            <div className="p-6 bg-white/5 rounded-xl border border-white/10">
              <h3 className="text-xl font-bold text-white mb-2">Retail</h3>
              <p className="text-white/70">Personalized shopping experiences and inventory AI.</p>
            </div>
            <div className="p-6 bg-white/5 rounded-xl border border-white/10">
              <h3 className="text-xl font-bold text-white mb-2">Manufacturing</h3>
              <p className="text-white/70">Predictive maintenance and production optimization.</p>
            </div>
          </div>
      </div>
    </section>
  );
}
