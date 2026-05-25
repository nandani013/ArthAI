import { motion } from 'framer-motion';
import { Target, TrendingUp, Users, Sparkles, MessageSquare, Workflow } from 'lucide-react';

export function CrmShowcase() {
  return (
    <section id="crm" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-[45%]"
          >
            <span className="inline-block px-3 py-1 rounded-full bg-brand-purple/10 text-brand-purple text-xs font-semibold uppercase mb-6">
              CRM Platform
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              <span className="text-gradient-purple">AI-Powered</span> CRM Platform
            </h2>
            <p className="text-text-secondary text-lg mb-8 leading-relaxed">
              Transform your sales process with an intelligent CRM that predicts behavior,
              automates follow-ups, and gives your team the insights they need to close faster.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { icon: Target, text: 'Sales pipeline UI' },
                { icon: TrendingUp, text: 'Lead analytics' },
                { icon: Users, text: 'Customer tracking' },
                { icon: Sparkles, text: 'AI recommendations' },
                { icon: MessageSquare, text: 'Team collaboration' },
                { icon: Workflow, text: 'Workflow automation' },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 text-text-secondary bg-surface-muted p-3 rounded-xl border border-border"
                >
                  <item.icon className="w-5 h-5 text-brand-purple shrink-0" />
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
            className="w-full lg:w-[55%]"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2 bg-white rounded-2xl p-6 border border-border card-shadow">
                <div className="flex justify-between items-center mb-5">
                  <h3 className="text-sm font-semibold flex items-center gap-2">
                    <Target className="w-4 h-4 text-brand-purple" />
                    Sales Pipeline
                  </h3>
                  <span className="text-xs text-brand-blue bg-brand-blue/10 px-2 py-1 rounded-full font-medium">
                    Live Sync
                  </span>
                </div>
                <div className="flex gap-3 h-28">
                  {['Lead', 'Qualified', 'Proposal', 'Closed'].map((stage, i) => (
                    <div key={i} className="flex-1 bg-surface-muted rounded-lg p-2 flex flex-col gap-2">
                      <div className="text-[10px] text-text-muted uppercase font-semibold">{stage}</div>
                      <div className="h-8 bg-white rounded border border-border" />
                      {i < 2 && <div className="h-8 bg-white rounded border border-border" />}
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-border card-shadow">
                <h3 className="text-sm font-semibold mb-4 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-brand-blue" />
                  Lead Analytics
                </h3>
                <div className="flex items-end gap-2 h-20">
                  {[30, 50, 40, 70, 60, 90, 80].map((h, i) => (
                    <div key={i} className="w-full bg-brand-blue/15 rounded-t relative">
                      <div
                        className="absolute bottom-0 w-full bg-brand-blue rounded-t"
                        style={{ height: `${h}%` }}
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-border card-shadow">
                <h3 className="text-sm font-semibold mb-4 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-brand-purple" />
                  AI Suggestion
                </h3>
                <div className="p-3 rounded-xl bg-brand-purple/5 border border-brand-purple/20">
                  <p className="text-xs text-brand-purple font-medium mb-1">High Probability to Close</p>
                  <p className="text-sm font-semibold mb-2">Acme Corp Enterprise Deal</p>
                  <p className="text-[11px] text-text-muted">
                    Recommended: Send ROI case study based on recent activity.
                  </p>
                  <button className="mt-3 text-xs bg-brand-purple text-white px-3 py-1.5 rounded-lg w-full font-medium">
                    Automate Email
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
