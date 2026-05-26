import { motion } from 'framer-motion';
import { DollarSign, Users, Briefcase, Box, ShoppingCart, Activity, ArrowRightLeft } from 'lucide-react';

const modules = [
  { icon: DollarSign, text: 'Finance' },
  { icon: Users, text: 'HR' },
  { icon: Briefcase, text: 'Operations' },
  { icon: Box, text: 'Inventory' },
  { icon: ShoppingCart, text: 'Procurement' },
];

export function ErpShowcase() {
  return (
    <section id="erp" className="py-24 md:py-28 bg-surface-muted border-y border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col-reverse lg:flex-row gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full lg:w-[58%]"
          >
            <div className="rounded-2xl border border-border bg-white p-5 card-shadow-lg">
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2 grid grid-cols-2 gap-4">
                  <div className="rounded-xl p-5 border border-border bg-surface-muted">
                    <div className="flex justify-between mb-2">
                      <p className="text-xs text-text-muted font-medium uppercase tracking-wide">Net revenue</p>
                      <DollarSign className="w-4 h-4 text-brand" />
                    </div>
                    <h3 className="text-2xl font-extrabold text-ink mb-1">₹4.2Cr</h3>
                    <p className="text-[10px] text-brand font-semibold">+12.5% vs last quarter</p>
                  </div>
                  <div className="rounded-xl p-5 border border-border bg-surface-muted">
                    <div className="flex justify-between mb-2">
                      <p className="text-xs text-text-muted font-medium uppercase tracking-wide">Workforce</p>
                      <Users className="w-4 h-4 text-accent" />
                    </div>
                    <h3 className="text-2xl font-extrabold text-ink mb-1">1,248</h3>
                    <p className="text-[10px] text-text-muted font-medium">Across 14 locations</p>
                  </div>
                </div>

                <div className="col-span-2 rounded-xl p-5 border border-border">
                  <h3 className="text-sm font-bold mb-4 flex items-center gap-2 text-ink">
                    <ArrowRightLeft className="w-4 h-4 text-brand" />
                    Procurement automation
                  </h3>
                  <div className="flex items-center justify-between px-4 relative">
                    <div className="absolute left-12 right-12 top-1/2 h-px bg-border" />
                    {[
                      { icon: ShoppingCart, label: 'Request' },
                      { icon: Briefcase, label: 'Approval' },
                      { icon: Box, label: 'Inventory' },
                    ].map((node, i) => (
                      <div key={node.label} className="relative z-10 flex flex-col items-center gap-2">
                        <div
                          className={`w-10 h-10 rounded-full flex items-center justify-center ${
                            i < 2
                              ? 'bg-brand text-white shadow-md'
                              : 'bg-surface-muted border border-border text-text-muted'
                          }`}
                        >
                          <node.icon className="w-4 h-4" />
                        </div>
                        <span className="text-[10px] font-medium text-text-muted">{node.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="col-span-2 rounded-xl p-5 border border-border">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-sm font-bold flex items-center gap-2 text-ink">
                      <Activity className="w-4 h-4 text-text-muted" />
                      Inventory health
                    </h3>
                    <span className="text-[10px] bg-brand/10 text-brand px-2 py-0.5 rounded font-semibold">
                      Optimal
                    </span>
                  </div>
                  <div className="space-y-3">
                    {[
                      { label: 'Raw materials', val: '85%', color: 'bg-brand' },
                      { label: 'In production', val: '65%', color: 'bg-accent' },
                      { label: 'Ready to ship', val: '92%', color: 'bg-brand-light' },
                    ].map((item) => (
                      <div key={item.label}>
                        <div className="flex justify-between text-[10px] mb-1">
                          <span className="text-text-muted">{item.label}</span>
                          <span className="font-semibold text-ink">{item.val}</span>
                        </div>
                        <div className="h-1.5 w-full bg-surface-muted rounded-full overflow-hidden">
                          <div className={`h-full ${item.color} rounded-full`} style={{ width: item.val }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="w-full lg:w-[42%]"
          >
            <span className="section-label bg-accent/10 text-accent border border-accent/25 mb-6">
              ERP
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-6 text-ink">
              Enterprise <span className="text-gradient">back-office</span> infrastructure
            </h2>
            <p className="text-text-secondary text-lg mb-8 leading-relaxed">
              Replace fragmented legacy tools with a connected ERP—finance, HR, inventory,
              and procurement in one intelligent system.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {modules.map((item) => (
                <div
                  key={item.text}
                  className="flex items-center gap-3 text-text-secondary bg-white p-3 rounded-xl border border-border"
                >
                  <item.icon className="w-4 h-4 text-brand shrink-0" />
                  <span className="text-sm font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
