import { useState } from 'react';
import { motion } from 'framer-motion';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    quote:
      'ArthAI helped us unify CRM and ERP in just two weeks. What would have taken months was accomplished in days. Incredible platform for growing teams.',
    author: 'Sarah Johnson',
    role: 'Founder, TechStart',
    initials: 'SJ',
    color: 'bg-brand-purple',
  },
  {
    quote:
      'As a non-technical leader, ArthAI was a game-changer. I could describe our vision and watch intelligent workflows come to life without fragmented tools.',
    author: 'Michael Chen',
    role: 'CEO, InnovateLabs',
    initials: 'MC',
    color: 'bg-brand-blue',
  },
  {
    quote:
      'We iterate on operations three times faster with ArthAI. The intelligent suggestions and automation saved us countless hours across finance and sales.',
    author: 'Alicia Rodriguez',
    role: 'CTO, QuickMVP',
    initials: 'AR',
    color: 'bg-brand-purple-light',
  },
];

export function Testimonials() {
  const [page, setPage] = useState(0);
  const perPage = 3;
  const maxPage = Math.max(0, Math.ceil(testimonials.length / perPage) - 1);

  const visible = testimonials.slice(page * perPage, page * perPage + perPage);

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
            Trusted By Innovative Teams
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            See how forward-thinking companies are transforming their operations with ArthAI.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {visible.map((t, idx) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-2xl p-8 border border-border card-shadow relative"
            >
              <Quote className="w-10 h-10 text-brand-purple-light/60 mb-4" />
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-brand-purple-light text-brand-purple-light" />
                ))}
              </div>
              <p className="text-text-secondary text-sm leading-relaxed mb-8">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div
                  className={`w-11 h-11 rounded-full ${t.color} flex items-center justify-center text-white text-sm font-bold`}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="font-semibold text-text-primary text-sm">{t.author}</p>
                  <p className="text-text-muted text-xs">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center gap-3">
          <button
            onClick={() => setPage((p) => Math.max(0, p - 1))}
            disabled={page === 0}
            className="w-10 h-10 rounded-full border border-border bg-white flex items-center justify-center text-text-muted hover:border-brand-purple/40 disabled:opacity-40 transition-colors"
            aria-label="Previous testimonials"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => setPage((p) => Math.min(maxPage, p + 1))}
            disabled={page >= maxPage}
            className="w-10 h-10 rounded-full border border-border bg-white flex items-center justify-center text-text-muted hover:border-brand-purple/40 disabled:opacity-40 transition-colors"
            aria-label="Next testimonials"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
