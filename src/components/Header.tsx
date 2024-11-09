import React from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from './Link';
import { ThemeToggle } from './ThemeToggle';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className="fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-gray-900 dark:text-white" onClick={closeMenu}>
              Automations.Solutions
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#services-section">Services</Link>
            <Link href="/about">About</Link>
            <Link href="/privacy">Privacy Policy</Link>
            <ThemeToggle />
            <Link href="/contact" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
              Contact Us
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="flex items-center gap-4 md:hidden">
            <ThemeToggle />
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} className="text-gray-600 dark:text-gray-300" /> : <Menu size={24} className="text-gray-600 dark:text-gray-300" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
          } overflow-hidden`}
        >
          <div className="px-2 pb-3 space-y-1">
            <Link href="#services-section" className="block px-3 py-2" onClick={closeMenu}>Services</Link>
            <Link href="/about" className="block px-3 py-2" onClick={closeMenu}>About</Link>
            <Link href="/privacy" className="block px-3 py-2" onClick={closeMenu}>Privacy Policy</Link>
            <Link href="/contact" className="block px-3 py-2" onClick={closeMenu}>Contact Us</Link>
          </div>
        </div>
      </div>
    </header>
  );
}