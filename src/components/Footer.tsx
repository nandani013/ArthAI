import { Bot } from 'lucide-react';

export function Footer() {
  return (
    <footer id="contact" className="border-t border-border bg-white pt-20 pb-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Ready to transform your{' '}
            <span className="text-gradient-purple">enterprise?</span>
          </h2>
          <p className="text-text-secondary text-lg mb-8 max-w-xl">
            Join forward-thinking companies building the future of business operations on ArthAI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-3 rounded-full bg-gradient-primary text-white font-semibold hover:opacity-90 transition-opacity shadow-sm">
              Get Started for free
            </button>
            <button className="px-8 py-3 rounded-full bg-white border-2 border-brand-purple/40 text-brand-purple font-semibold hover:bg-brand-purple/5 transition-colors">
              Talk to Sales
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 text-sm">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center">
                <Bot className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-bold">ArthAI</span>
            </div>
            <p className="text-text-secondary max-w-xs leading-relaxed">
              AI-powered CRM + ERP infrastructure for modern enterprises. Built for scale,
              designed for speed.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-text-primary mb-4">Product</h4>
            <ul className="space-y-2 text-text-secondary">
              <li><a href="#crm" className="hover:text-brand-purple transition-colors">CRM</a></li>
              <li><a href="#erp" className="hover:text-brand-purple transition-colors">ERP</a></li>
              <li><a href="#integrations" className="hover:text-brand-purple transition-colors">Integrations</a></li>
              <li><a href="#features" className="hover:text-brand-purple transition-colors">Features</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-text-primary mb-4">Resources</h4>
            <ul className="space-y-2 text-text-secondary">
              <li><a href="#" className="hover:text-brand-purple transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-brand-purple transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-brand-purple transition-colors">Community</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-text-primary mb-4">Company</h4>
            <ul className="space-y-2 text-text-secondary">
              <li><a href="#" className="hover:text-brand-purple transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-brand-purple transition-colors">Careers</a></li>
              <li><a href="#contact" className="hover:text-brand-purple transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border text-xs text-text-muted">
          <p>© {new Date().getFullYear()} ArthAI Inc. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-brand-purple transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-purple transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
