import { Hexagon } from 'lucide-react';

export function Footer() {
  return (
    <footer id="contact" className="bg-ink text-white pt-20 pb-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="rounded-2xl border border-white/10 bg-ink-soft p-10 md:p-14 text-center mb-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-mesh opacity-30 pointer-events-none" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
              Ready to modernize your{' '}
              <span className="text-gradient">operations?</span>
            </h2>
            <p className="text-white/55 text-lg mb-8 max-w-xl mx-auto">
              Start with ArthAI today—unified CRM, ERP, and AI agents in one place.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button type="button" className="btn-primary px-8">
                Get started free
              </button>
              <button type="button" className="btn-outline-light px-8">
                Talk to us
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-14 text-sm">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center">
                <Hexagon className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-bold">ArthAI</span>
            </div>
            <p className="text-white/50 max-w-xs leading-relaxed">
              Intelligent CRM and ERP infrastructure for teams that want clarity,
              automation, and room to scale.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white/90 mb-4">Product</h4>
            <ul className="space-y-2.5 text-white/50">
              <li><a href="#crm" className="hover:text-brand-light transition-colors">CRM</a></li>
              <li><a href="#erp" className="hover:text-brand-light transition-colors">ERP</a></li>
              <li><a href="#integrations" className="hover:text-brand-light transition-colors">Platform</a></li>
              <li><a href="#features" className="hover:text-brand-light transition-colors">Features</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white/90 mb-4">Resources</h4>
            <ul className="space-y-2.5 text-white/50">
              <li><a href="#" className="hover:text-brand-light transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-brand-light transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-brand-light transition-colors">Support</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white/90 mb-4">Company</h4>
            <ul className="space-y-2.5 text-white/50">
              <li><a href="#testimonials" className="hover:text-brand-light transition-colors">About</a></li>
              <li><a href="#" className="hover:text-brand-light transition-colors">Careers</a></li>
              <li><a href="#contact" className="hover:text-brand-light transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10 text-xs text-white/40">
          <p>© {new Date().getFullYear()} ArthAI. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-brand-light transition-colors">Privacy</a>
            <a href="#" className="hover:text-brand-light transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
