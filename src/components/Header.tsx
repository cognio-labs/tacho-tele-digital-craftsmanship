import { useState } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Logo from './Logo';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-brand-sm">
      {/* Top bar */}
      <div className="bg-primary">
        <div className="section-container py-2 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6 text-primary-foreground/90">
            <a href="tel:+919205770317" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">+91 92057 70317</span>
            </a>
            <a href="mailto:info@tachoteleindia.com" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Mail className="w-4 h-4" />
              <span className="hidden sm:inline">info@tachoteleindia.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="section-container py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2">
            <Logo className="h-10 w-10 md:h-14 md:w-14" />
            <div className="flex items-center">
              <span className="font-heading font-bold text-lg md:text-2xl text-foreground">Tacho</span>
              <span className="font-heading font-bold text-lg md:text-2xl text-accent ml-0.5">Tele</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-medium text-foreground hover:text-accent transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-accent after:transition-all hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
          </nav>



          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-card border-t border-border animate-slide-up">
          <nav className="section-container py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-medium text-foreground hover:text-accent transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}

          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
