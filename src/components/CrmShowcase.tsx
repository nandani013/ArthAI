import { motion } from 'framer-motion';
import { Target, TrendingUp, Users, Sparkles, MessageSquare, Workflow } from 'lucide-react';

const capabilities = [
  { icon: Target, text: 'Sales pipeline UI' },
  { icon: TrendingUp, text: 'Lead analytics' },
  { icon: Users, text: 'Customer tracking' },
  { icon: Sparkles, text: 'AI recommendations' },
  { icon: MessageSquare, text: 'Team collaboration' },
  { icon: Workflow, text: 'Workflow automation' },
];

export function CrmShowcase() {
  return (
    <section id="crm" className="py-24 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-[42%]"
          >
            <span className="section-label bg-brand/10 text-brand border border-brand/20 mb-6">
              CRM
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-6 text-ink">
              <span className="text-gradient">AI-powered</span> sales platform
            </h2>
            <p className="text-text-secondary text-lg mb-8 leading-relaxed">
              Predict behavior, automate follow-ups, and give your team the insights they need
              to close faster—with one CRM built for intelligent operations.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {capabilities.map((item) => (
                <div
                  key={item.text}
                  className="flex items-center gap-3 text-text-secondary bg-surface-muted p-3 rounded-xl border border-border"
                >
                  <item.icon className="w-4 h-4 text-brand shrink-0" />
                  <span className="text-sm font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="w-full lg:w-[58%]"
          >
            <div className="rounded-2xl border border-border bg-surface-muted p-5 card-shadow-lg">
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2 bg-white rounded-xl p-5 border border-border">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-sm font-bold flex items-center gap-2 text-ink">
                      <Target className="w-4 h-4 text-brand" />
                      Sales Pipeline
                    </h3>
                    <span className="text-[10px] text-brand bg-brand/10 px-2 py-0.5 rounded font-semibold uppercase tracking-wide">
                      Live
                    </span>
                  </div>
                  <div className="flex gap-2 h-24">
                    {['Lead', 'Qualified', 'Proposal', 'Closed'].map((stage) => (
                      <div key={stage} className="flex-1 bg-surface-muted rounded-lg p-2 flex flex-col gap-1.5">
                        <div className="text-[9px] text-text-muted uppercase font-bold tracking-wide">{stage}</div>
                        <div className="h-6 bg-white rounded border border-border" />
                        <div className="h-6 bg-brand/10 rounded border border-brand/20" />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-xl p-5 border border-border">
                  <h3 className="text-sm font-bold mb-3 flex items-center gap-2 text-ink">
                    <TrendingUp className="w-4 h-4 text-accent" />
                    Lead Analytics
                  </h3>
                  <div className="flex items-end gap-1.5 h-16">
                    {[30, 50, 40, 70, 60, 90, 80].map((h, i) => (
                      <div key={i} className="flex-1 h-full flex items-end">
                        <div
                          className="w-full rounded-t bg-gradient-to-t from-brand to-brand-light"
                          style={{ height: `${h}%` }}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-xl p-5 border border-border">
                  <h3 className="text-sm font-bold mb-3 flex items-center gap-2 text-ink">
                    <Sparkles className="w-4 h-4 text-brand" />
                    AI Suggestion
                  </h3>
                  <div className="p-3 rounded-lg bg-brand/5 border border-brand/20">
                    <p className="text-[10px] text-brand font-semibold uppercase tracking-wide mb-1">
                      High probability
                    </p>
                    <p className="text-sm font-bold mb-1">Enterprise deal — Acme Corp</p>
                    <p className="text-[11px] text-text-muted mb-2">
                      Send ROI case study based on recent activity.
                    </p>
                    <button type="button" className="text-xs bg-brand text-white px-3 py-1.5 rounded-md w-full font-medium">
                      Automate email
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
