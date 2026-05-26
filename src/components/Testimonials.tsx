import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const founder = {
  quote:
    'ArthAI was built to help teams run smarter operations—unifying CRM and ERP workflows with AI that learns how your business works. Our mission is to make enterprise automation accessible, reliable, and fast to deploy.',
  author: 'Sunita Kumari',
  role: 'Founder',
  initials: 'SK',
};

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
            Meet our founder
          </h2>
          <p className="text-white/55 text-lg">
            Sunita Kumari leads ArthAI with a focus on intelligent operations and practical
            automation for growing teams.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto rounded-2xl border border-white/10 bg-ink-soft/90 p-8 md:p-10 relative"
        >
          <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-brand/40 via-transparent to-accent/20 -z-10 opacity-60" />
          <Quote className="w-9 h-9 text-brand-light/50 mb-5" />
          <p className="text-white/75 text-base leading-relaxed mb-8">
            &ldquo;{founder.quote}&rdquo;
          </p>
          <div className="flex items-center gap-4 pt-6 border-t border-white/10">
            <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center text-white text-sm font-bold">
              {founder.initials}
            </div>
            <div>
              <p className="font-bold text-white">{founder.author}</p>
              <p className="text-brand-light text-sm font-medium">{founder.role}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
