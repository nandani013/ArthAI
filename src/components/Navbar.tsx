import { useState, useEffect } from 'react';
import { Menu, X, Hexagon } from 'lucide-react';

const links = [
  { href: '/', label: 'Home' },
  { href: '#integrations', label: 'Platform' },
  { href: '#features', label: 'Products' },
  { href: '#agents', label: 'AI Agents' },
  { href: '#industries', label: 'Who We Serve' },
  { href: '#testimonials', label: 'About' },
  { href: '#contact-details', label: 'Contact Us' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isLight = scrolled;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isLight ? 'glass-nav-light' : 'glass-nav'
        }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between relative">
        <a href="#" className="flex items-center gap-3 shrink-0">
          <div className="w-11 h-11 flex items-center justify-center rounded-xl overflow-hidden border border-white/10 shadow-lg bg-[#051024]">
            <img src="/logo.png" alt="ArthAI Studio Logo" className="w-full h-full object-cover scale-105" />
          </div>
          <span
            className={`text-xl font-bold tracking-tight ${isLight ? 'text-text-primary' : 'text-white'
              }`}
          >
            ArthAI <span className="text-gradient">Studio</span>
          </span>
        </a>

        {/* Centered navigation links */}
        <div className={`hidden md:flex flex-nowrap whitespace-nowrap md:absolute md:left-1/2 md:-translate-x-1/2 items-center gap-4 md:gap-8 ml-8 text-sm font-medium ${isLight ? 'text-text-secondary' : 'text-white/70'}`}>
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`flex-shrink-0 transition-colors ${isLight ? 'hover:text-brand' : 'hover:text-brand-light'}`}
              onClick={(e) => {
                if (link.label === 'Contact Us') {
                  e.preventDefault();
                  window.dispatchEvent(new Event('open-contact-modal'));
                }
              }}
            >
              {link.label}
            </a>
          ))}
        </div>



        <button
          type="button"
          className={`md:hidden p-2 rounded-lg ${isLight ? 'text-text-primary' : 'text-white'}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-white/10 bg-ink px-6 py-4 flex flex-col gap-3">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white/80 hover:text-brand-light py-2 text-sm font-medium"
              onClick={(e) => {
                setMobileOpen(false);
                if (link.label === 'Contact Us') {
                  e.preventDefault();
                  window.dispatchEvent(new Event('open-contact-modal'));
                }
              }}
            >
              {link.label}
            </a>
          ))}

        </div>
      )}
    </nav>
  );
}
