import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Rocket, Target, Box, Network, Presentation, CheckCircle2 } from 'lucide-react';

const phases = [
  {
    title: 'Website & Brand Launch',
    subtitle: 'Phase 1',
    icon: Rocket,
    bullets: [
      'Define branding and positioning',
      'Launch product website',
      'Create investor and partner pages'
    ]
  },
  {
    title: 'CRM Platform',
    subtitle: 'Phase 2',
    icon: Target,
    bullets: [
      'Lead management',
      'Sales pipeline',
      'AI insights',
      'Workflow automation'
    ]
  },
  {
    title: 'ERP Platform',
    subtitle: 'Phase 3',
    icon: Box,
    bullets: [
      'Finance modules',
      'HR systems',
      'Operations management',
      'AI forecasting'
    ]
  },
  {
    title: 'CRM + ERP Integration',
    subtitle: 'Phase 4',
    icon: Network,
    bullets: [
      'Unified workflows',
      'Shared business data',
      'Real-time synchronization',
      'API integrations'
    ]
  },
  {
    title: 'Enterprise Demo Ecosystem',
    subtitle: 'Phase 5',
    icon: Presentation,
    bullets: [
      'Architecture showcase',
      'AI automation demos',
      'Investor-ready presentations',
      'Scalable onboarding'
    ]
  },
];

export function Roadmap() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="roadmap" className="py-24 relative overflow-hidden" ref={containerRef}>
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-blue/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-purple/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24 relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
          >
            ArthAIStudio <span className="text-gradient">Product Roadmap</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg"
          >
            Our strategic vision for building the ultimate autonomous enterprise ecosystem.
          </motion.p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Animated Glowing Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 md:-ml-0.5 bg-white/5 rounded-full overflow-hidden">
            <motion.div 
              className="absolute top-0 w-full bg-gradient-to-b from-brand-purple via-brand-blue to-transparent rounded-full shadow-[0_0_15px_rgba(139,92,246,0.8)]"
              style={{ height: lineHeight }}
            />
          </div>

          <div className="space-y-12 md:space-y-24">
            {phases.map((phase, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={index} className="relative flex flex-col md:flex-row items-center md:justify-between group">
                  
                  {/* Timeline Node Icon (Center on Desktop, Left on Mobile) */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full glass bg-[#0A0A0E] border-2 border-brand-purple/50 flex items-center justify-center z-10 shadow-[0_0_20px_rgba(139,92,246,0.2)] group-hover:shadow-[0_0_30px_rgba(139,92,246,0.6)] group-hover:border-brand-purple transition-all duration-500">
                    <phase.icon className="w-5 h-5 text-white group-hover:text-brand-purple transition-colors" />
                  </div>

                  {/* Desktop Empty Space for Alternating Layout */}
                  <div className={`hidden md:block w-[45%] ${isEven ? 'order-2' : 'order-1'}`} />

                  {/* Content Card */}
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? -50 : 50, y: 20 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className={`w-full md:w-[45%] pl-20 md:pl-0 ${isEven ? 'order-1 md:text-right' : 'order-2 text-left'}`}
                  >
                    <div className="glass-card bg-[#0A0A0E]/80 p-8 rounded-2xl border border-white/10 group-hover:border-brand-purple/50 transition-colors duration-500 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/5 to-brand-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      <div className="relative z-10">
                        <span className="inline-block px-3 py-1 rounded-full bg-brand-purple/10 text-brand-purple text-xs font-semibold tracking-wider uppercase mb-4">
                          {phase.subtitle}
                        </span>
                        
                        <h3 className="text-2xl font-bold text-white mb-6">
                          {phase.title}
                        </h3>
                        
                        <ul className={`space-y-3 ${isEven ? 'md:flex md:flex-col md:items-end' : ''}`}>
                          {phase.bullets.map((bullet, idx) => (
                            <li key={idx} className={`flex items-start gap-3 text-gray-400 group-hover:text-gray-300 transition-colors ${isEven ? 'md:flex-row-reverse' : ''}`}>
                              <CheckCircle2 className={`w-5 h-5 text-brand-purple/50 group-hover:text-brand-purple transition-colors shrink-0 ${isEven ? 'mt-0' : 'mt-0.5'}`} />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>

                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
