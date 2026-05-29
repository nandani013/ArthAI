import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

// Founder information removed as per request

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 md:py-28 bg-ink relative overflow-hidden">
      <div className="absolute inset-0 bg-mesh opacity-15 pointer-events-none" />
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 max-w-xl mx-auto"
        >
          <span className="section-label bg-brand/20 text-brand-light border border-brand/30 mb-4">
            Leadership
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 text-white">
            About ArthAI
          </h2>
          <p className="text-white/55 text-lg">
ArthAI delivers AI‑driven transformation for enterprises worldwide.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto rounded-2xl border border-white/10 bg-ink-soft/90 p-8 md:p-10 relative"
        >
          <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-brand/40 via-transparent to-accent/20 -z-10 opacity-60" />
          <p className="text-white/75 text-base leading-relaxed mb-8">
            Founded by Enterprise AI Architects with expertise in Generative AI, Governance, and Digital Transformation.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
