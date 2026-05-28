import { useState, useEffect } from 'react';
import { Menu, X, Hexagon } from 'lucide-react';

const links = [
  { href: '#features', label: 'Features' },
  { href: '#agents', label: 'AI Agents' },
  { href: '#testimonials', label: 'About' },
  { href: '#integrations', label: 'Platform' },
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isLight ? 'glass-nav-light' : 'glass-nav'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5 shrink-0">
          <div className="w-9 h-9 rounded-lg bg-gradient-primary flex items-center justify-center">
            <Hexagon className="w-5 h-5 text-white" strokeWidth={2} />
          </div>
          <span
            className={`text-xl font-bold tracking-tight ${
              isLight ? 'text-text-primary' : 'text-white'
            }`}
          >
            Arth<span className="text-gradient">AI</span>
          </span>
        </a>

        <div
          className={`hidden md:flex items-center gap-8 text-sm font-medium ${
            isLight ? 'text-text-secondary' : 'text-white/70'
          }`}
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`transition-colors ${
                isLight ? 'hover:text-brand' : 'hover:text-brand-light'
              }`}
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

        <div className="hidden md:block">
          <a href="#contact-details" className="bg-accent hover:bg-accent-soft text-white px-6 py-2.5 rounded-full font-semibold transition-colors shadow-md text-sm" onClick={(e) => {
            e.preventDefault();
            window.dispatchEvent(new Event('open-contact-modal'));
          }}>
            Talk To Us
          </a>
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
          <a href="#contact-details" className="bg-accent hover:bg-accent-soft text-white text-center mt-2 py-2.5 rounded-full font-semibold" onClick={(e) => {
            e.preventDefault();
            setMobileOpen(false);
            window.dispatchEvent(new Event('open-contact-modal'));
          }}>
            Talk To Us
          </a>
        </div>
      )}
    </nav>
  );
}
