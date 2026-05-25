import { Bot } from 'lucide-react';

const links = [
  { href: '#features', label: 'Features' },
  { href: '#agents', label: 'AI Agents' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#integrations', label: 'Integrations' },
];

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 shrink-0">
          <div className="w-9 h-9 rounded-xl bg-gradient-primary flex items-center justify-center shadow-sm">
            <Bot className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold tracking-tight text-text-primary">
            Arth<span className="text-gradient-purple">AI</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-text-secondary">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-brand-purple transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <button className="px-5 py-2.5 rounded-full bg-gradient-primary text-white text-sm font-semibold hover:opacity-90 transition-opacity shadow-sm">
          Get Started
        </button>
      </div>
    </nav>
  );
}
