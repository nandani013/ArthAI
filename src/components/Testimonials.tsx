import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const founder = {
  quote:
    'ArthAI was built to help teams run smarter operations—unifying CRM and ERP workflows with AI that learns how your business works. Our mission is to make enterprise automation accessible, reliable, and fast to deploy.',
  author: 'Sunita Kumari',
  role: 'Founder',
  initials: 'SK',
  color: 'bg-brand-purple',
};

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-surface-muted">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Meet our founder
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Sunita Kumari leads ArthAI with a focus on intelligent operations and
            practical automation for growing teams.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-xl mx-auto bg-white rounded-2xl p-8 border border-border card-shadow relative"
        >
          <Quote className="w-10 h-10 text-brand-purple-light/60 mb-4" />
          <p className="text-text-secondary text-sm leading-relaxed mb-8">
            &ldquo;{founder.quote}&rdquo;
          </p>
          <div className="flex items-center gap-3">
            <div
              className={`w-11 h-11 rounded-full ${founder.color} flex items-center justify-center text-white text-sm font-bold`}
            >
              {founder.initials}
            </div>
            <div>
              <p className="font-semibold text-text-primary text-sm">{founder.author}</p>
              <p className="text-text-muted text-xs">{founder.role}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
