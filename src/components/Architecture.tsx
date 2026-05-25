import { motion } from 'framer-motion';
import { Bot, BrainCircuit, Box, BarChart3, Network, Cloud } from 'lucide-react';

const layers = [
  {
    title: 'AI Agent Layer',
    icon: Bot,
    description: 'Autonomous agents that execute complex multi-step business processes.',
    color: 'text-purple-400',
    bg: 'bg-purple-500/10',
    border: 'border-purple-500/20'
  },
  {
    title: 'CRM Intelligence Layer',
    icon: BrainCircuit,
    description: 'Predictive models for lead scoring, churn prevention, and sales forecasting.',
    color: 'text-brand-purple',
    bg: 'bg-brand-purple/10',
    border: 'border-brand-purple/20'
  },
  {
    title: 'ERP Operations Layer',
    icon: Box,
    description: 'Core logic processing engine for finance, supply chain, and HR data.',
    color: 'text-brand-blue',
    bg: 'bg-brand-blue/10',
    border: 'border-brand-blue/20'
  },
  {
    title: 'Analytics Engine',
    icon: BarChart3,
    description: 'Real-time processing engine for massive enterprise datasets.',
    color: 'text-cyan-400',
    bg: 'bg-cyan-500/10',
    border: 'border-cyan-500/20'
  },
  {
    title: 'API Gateway',
    icon: Network,
    description: 'Ultra-fast GraphQL and REST endpoints connecting all enterprise tools.',
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/20'
  },
  {
    title: 'Cloud Infrastructure',
    icon: Cloud,
    description: 'Horizontally scalable, globally distributed, zero-trust serverless platform.',
    color: 'text-indigo-400',
    bg: 'bg-indigo-500/10',
    border: 'border-indigo-500/20'
  }
];

export function Architecture() {
  return (
    <section id="architecture" className="py-24 relative overflow-hidden bg-[#020204]">
      {/* Animated Network Background */}
      <div className="absolute inset-0 z-0 opacity-20">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="network-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(139, 92, 246, 0.2)" strokeWidth="0.5" />
              <circle cx="0" cy="0" r="1" fill="rgba(59, 130, 246, 0.5)" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#network-grid)" />
        </svg>
        
        {/* Animated scanning line */}
        <motion.div 
          animate={{ top: ['0%', '100%', '0%'] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-purple/50 to-transparent shadow-[0_0_15px_rgba(139,92,246,0.5)]"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Next-Gen <span className="text-gradient">System Architecture</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Built from the ground up to support the scale, speed, and security requirements of modern AI-driven enterprises.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {layers.map((layer, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`glass-card p-8 rounded-2xl bg-[#0A0A0E]/90 border ${layer.border} hover:border-white/30 transition-all duration-300 relative overflow-hidden group`}
            >
              {/* Internal glow matching the layer color */}
              <div className={`absolute top-0 right-0 w-32 h-32 ${layer.bg} rounded-bl-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              {/* Network Node Dots (Decorative) */}
              <div className="absolute right-4 top-4 flex gap-1 opacity-20 group-hover:opacity-100 transition-opacity">
                <div className="w-1 h-1 rounded-full bg-white animate-ping"></div>
                <div className="w-1 h-1 rounded-full bg-white"></div>
                <div className="w-1 h-1 rounded-full bg-white"></div>
              </div>

              <div className={`w-12 h-12 rounded-xl ${layer.bg} flex items-center justify-center mb-6`}>
                <layer.icon className={`w-6 h-6 ${layer.color}`} />
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-3 tracking-tight">
                {layer.title}
              </h3>
              
              <p className="text-gray-400 text-sm leading-relaxed">
                {layer.description}
              </p>

              {/* Decorative data stream line */}
              <div className="absolute bottom-0 left-0 h-0.5 bg-white/5 w-full">
                <div className={`h-full ${layer.color.replace('text-', 'bg-')} w-0 group-hover:w-full transition-all duration-700 ease-out`}></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
