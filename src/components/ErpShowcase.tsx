import { motion } from 'framer-motion';
import { DollarSign, Users, Briefcase, Box, ShoppingCart, Activity, ArrowRightLeft } from 'lucide-react';

export function ErpShowcase() {
  return (
    <section id="erp" className="py-24 bg-surface-muted border-y border-border/60">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col-reverse lg:flex-row gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full lg:w-[55%]"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2 grid grid-cols-2 gap-4">
                <div className="bg-white rounded-2xl p-5 border border-border card-shadow">
                  <div className="flex justify-between mb-2">
                    <p className="text-sm text-text-muted font-medium">Net Revenue</p>
                    <div className="p-1.5 rounded-lg bg-green-500/10 text-green-600">
                      <DollarSign className="w-4 h-4" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-1">$4.2M</h3>
                  <p className="text-[10px] text-green-600 font-medium">+12.5% vs last quarter</p>
                </div>
                <div className="bg-white rounded-2xl p-5 border border-border card-shadow">
                  <div className="flex justify-between mb-2">
                    <p className="text-sm text-text-muted font-medium">Active Workforce</p>
                    <div className="p-1.5 rounded-lg bg-brand-purple/10 text-brand-purple">
                      <Users className="w-4 h-4" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-1">1,248</h3>
                  <p className="text-[10px] text-text-muted font-medium">Across 14 locations</p>
                </div>
              </div>

              <div className="col-span-2 bg-white rounded-2xl p-6 border border-border card-shadow">
                <h3 className="text-sm font-semibold mb-5 flex items-center gap-2">
                  <ArrowRightLeft className="w-4 h-4 text-brand-blue" />
                  Procurement Workflow Automation
                </h3>
                <div className="flex items-center justify-between px-2 relative">
                  <div className="absolute left-8 right-8 top-1/2 h-0.5 bg-border" />
                  {[
                    { icon: ShoppingCart, label: 'Request' },
                    { icon: Briefcase, label: 'Approval' },
                    { icon: Box, label: 'Inventory' },
                  ].map((node, i) => (
                    <div key={i} className="relative z-10 flex flex-col items-center gap-2">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          i < 2 ? 'bg-brand-blue text-white shadow-md' : 'bg-surface-muted border border-border text-text-muted'
                        }`}
                      >
                        <node.icon className="w-4 h-4" />
                      </div>
                      <span className="text-[10px] font-medium text-text-muted">{node.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="col-span-2 bg-white rounded-2xl p-6 border border-border card-shadow">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-sm font-semibold flex items-center gap-2">
                    <Activity className="w-4 h-4 text-text-muted" />
                    Inventory Health
                  </h3>
                  <span className="text-[10px] bg-green-500/10 text-green-600 px-2 py-0.5 rounded font-medium">
                    Optimal
                  </span>
                </div>
                <div className="space-y-3">
                  {[
                    { label: 'Raw Materials', val: '85%', color: 'bg-brand-blue' },
                    { label: 'In Production', val: '65%', color: 'bg-brand-purple' },
                    { label: 'Ready for Shipping', val: '92%', color: 'bg-green-500' },
                  ].map((item, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between text-[10px] mb-1">
                        <span className="text-text-muted">{item.label}</span>
                        <span className="font-medium">{item.val}</span>
                      </div>
                      <div className="h-1.5 w-full bg-surface-muted rounded-full overflow-hidden">
                        <div className={`h-full ${item.color} rounded-full`} style={{ width: item.val }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="w-full lg:w-[45%]"
          >
            <span className="inline-block px-3 py-1 rounded-full bg-brand-blue/10 text-brand-blue text-xs font-semibold uppercase mb-6">
              ERP Platform
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              Enterprise <span className="text-gradient-purple">ERP Infrastructure</span>
            </h2>
            <p className="text-text-secondary text-lg mb-8 leading-relaxed">
              Unify your back-office operations. ArthAI replaces fragmented legacy tools with a
              deeply connected, high-performance ERP system built for scale.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { icon: DollarSign, text: 'Finance' },
                { icon: Users, text: 'HR' },
                { icon: Briefcase, text: 'Operations' },
                { icon: Box, text: 'Inventory' },
                { icon: ShoppingCart, text: 'Procurement' },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 text-text-secondary bg-white p-3 rounded-xl border border-border"
                >
                  <item.icon className="w-5 h-5 text-brand-blue shrink-0" />
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
