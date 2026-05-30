import { Hexagon, MapPin, Phone, Send, Clock, ChevronUp } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-[#051024] text-white pt-20 pb-10 relative overflow-hidden">
      {/* Background decorative circles */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] border-[1px] border-white/5 rounded-full -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-[600px] h-[600px] border-[1px] border-white/5 rounded-full -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-[400px] h-[400px] border-[1px] border-white/5 rounded-full -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 mb-16 text-sm">
          {/* Brand Info */}
          <div className="md:col-span-12 lg:col-span-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl overflow-hidden border border-white/10 shadow-lg bg-[#051024]">
                <img src="/logo.png" alt="ArthAI Studio Logo" className="w-full h-full object-cover scale-105" />
              </div>
              <span className="text-3xl font-bold tracking-tight">
                ArthAI <span className="text-gradient">Studio</span>
              </span>
            </div>
            <p className="text-white/60 leading-relaxed mb-8 max-w-sm text-base">
              ArthAI delivers innovative AI‑driven solutions that empower businesses worldwide.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <a href="https://www.facebook.com/login" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#3b5998] flex items-center justify-center hover:opacity-80 transition-opacity">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
              </a>
              <a href="https://twitter.com/login" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-black flex items-center justify-center hover:opacity-80 transition-opacity">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
              </a>
              <a href="https://www.instagram.com/accounts/login/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#333333] flex items-center justify-center hover:opacity-80 transition-opacity">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#ff0000] flex items-center justify-center hover:opacity-80 transition-opacity">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
              </a>
              <a href="https://www.linkedin.com/login" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#0077b5] flex items-center justify-center hover:opacity-80 transition-opacity">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
              </a>
            </div>
          </div>

          {/* Our Services */}
          <div className="md:col-span-4 lg:col-span-3">
            <h4 className="text-xl font-bold text-white mb-6">Our Services</h4>
            <ul className="space-y-4 text-white/70">
              <li><a href="#crm" className="hover:text-brand-light transition-colors text-base">Unified CRM</a></li>
              <li><a href="#erp" className="hover:text-brand-light transition-colors text-base">Intelligent ERP</a></li>
              <li><a href="#agents" className="hover:text-brand-light transition-colors text-base">AI Agents</a></li>
              <li><a href="#integrations" className="hover:text-brand-light transition-colors text-base">Platform Integrations</a></li>
              <li><a href="#features" className="hover:text-brand-light transition-colors text-base">Core Features</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="md:col-span-3 lg:col-span-2">
            <h4 className="text-xl font-bold text-white mb-6">Resources</h4>
            <ul className="space-y-4 text-white/70">
              <li><a href="#" className="hover:text-brand-light transition-colors text-base">Documentation</a></li>
              <li><a href="#" className="hover:text-brand-light transition-colors text-base">Blog</a></li>
              <li><a href="#" className="hover:text-brand-light transition-colors text-base">Support</a></li>
              <li><a href="#testimonials" className="hover:text-brand-light transition-colors text-base">About Us</a></li>
              <li><a href="#contact-details" className="hover:text-brand-light transition-colors text-base" onClick={(e) => {
                e.preventDefault();
                window.dispatchEvent(new Event('open-contact-modal'));
              }}>Contact Us</a></li>
            </ul>
          </div>

          {/* Our Office */}
          <div className="md:col-span-5 lg:col-span-3">
            <h4 className="text-xl font-bold text-white mb-6">Our Office</h4>
            <div className="space-y-5 text-white/70 text-base">
              <div className="flex items-start gap-4 group cursor-pointer hover:text-brand-light transition-colors">
                <MapPin className="w-5 h-5 text-white group-hover:text-brand-light transition-colors shrink-0 mt-0.5 opacity-80" />
                <p className="leading-snug">
                  Purbachal Main Road, Kolkata 700078
                </p>
              </div>
              <div className="flex items-center gap-4 group cursor-pointer hover:text-brand-light transition-colors">
                <Phone className="w-5 h-5 text-white group-hover:text-brand-light transition-colors shrink-0 opacity-80" />
                <p>+1 (555) 123-4567</p>
              </div>
              <div className="flex items-center gap-4 group cursor-pointer hover:text-brand-light transition-colors">
                <Send className="w-5 h-5 text-white group-hover:text-brand-light transition-colors shrink-0 opacity-80" />
                <p>info@arthaistudio.com</p>
              </div>
              <div className="flex items-center gap-4 group cursor-pointer hover:text-brand-light transition-colors">
                <Clock className="w-5 h-5 text-white group-hover:text-brand-light transition-colors shrink-0 opacity-80" />
                <p>Mon-Fri | 10AM - 7PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10 text-sm text-white/60">
          <p>© {new Date().getFullYear()} ArthAI, All Rights Reserved.</p>
          <div className="flex items-center gap-6 mt-6 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
            <button
              onClick={scrollToTop}
              className="w-10 h-10 bg-[#0014cc] hover:bg-[#0010a3] rounded text-white flex items-center justify-center transition-colors ml-2 shadow-lg"
              aria-label="Scroll to top"
            >
              <ChevronUp className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
