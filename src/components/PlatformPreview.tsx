import { motion } from 'framer-motion';
import { BarChart3, Users, CreditCard, ChevronRight } from 'lucide-react';

export function PlatformPreview() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-brand-blue/10 rounded-full blur-[100px] opacity-60 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2"
          >
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
              A single platform for your <span className="text-gradient">entire business</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Stop switching between dozens of tabs. ArthAI brings your customer relationships, financial operations, and project management into one beautiful, lightning-fast interface powered by next-gen AI.
            </p>
            
            <ul className="space-y-4 mb-8">
              {['AI-powered predictive analytics', 'Automated data entry and reconciliation', 'Real-time cross-department collaboration'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-300">
                  <div className="w-5 h-5 rounded-full bg-brand-purple/20 flex items-center justify-center">
                    <ChevronRight className="w-3 h-3 text-brand-purple" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
            
            <button className="text-white font-medium flex items-center gap-2 hover:text-brand-purple transition-colors">
              Explore the platform <ChevronRight className="w-4 h-4" />
            </button>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative z-10 glass-card rounded-2xl p-6 border border-white/10 shadow-2xl">
              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-white/10">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                <div className="h-6 w-full max-w-[200px] bg-white/5 rounded-md flex items-center px-3">
                  <span className="text-[10px] text-gray-500">arthai.app/dashboard</span>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="glass bg-white/5 p-4 rounded-xl flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-brand-purple/20 text-brand-purple">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Total Customers</p>
                    <p className="text-lg font-semibold text-white">12,489</p>
                  </div>
                </div>
                <div className="glass bg-white/5 p-4 rounded-xl flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-brand-blue/20 text-brand-blue">
                    <CreditCard className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Monthly MRR</p>
                    <p className="text-lg font-semibold text-white">$1.2M</p>
                  </div>
                </div>
              </div>
              
              <div className="glass bg-white/5 p-6 rounded-xl">
                <div className="flex items-center justify-between mb-6">
                  <h4 className="text-sm font-medium text-white">Revenue vs Acquisition</h4>
                  <BarChart3 className="w-4 h-4 text-gray-400" />
                </div>
                <div className="h-32 w-full flex items-end justify-between gap-2">
                  {[40, 70, 45, 90, 65, 100, 80].map((height, i) => (
                    <div key={i} className="w-full bg-white/5 rounded-t-sm relative group">
                      <div 
                        className="absolute bottom-0 w-full bg-gradient-to-t from-brand-purple/80 to-brand-blue/80 rounded-t-sm transition-all duration-300"
                        style={{ height: `${height}%` }}
                      ></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Decorative elements behind the dashboard */}
            <div className="absolute -top-10 -right-10 w-72 h-72 bg-brand-purple/20 rounded-full blur-[80px] -z-10"></div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
