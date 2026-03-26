import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Solutions', path: '/solutions' },
    { name: 'Products', path: '/products' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav 
      className="fixed top-0 left-0 right-0 z-50 bg-ora-dark/95 backdrop-blur-sm border-b border-white/10"
      data-testid="navbar"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center"
            data-testid="navbar-logo"
          >
            <img 
              src="https://customer-assets.emergentagent.com/job_ora-fleet-tech/artifacts/0b2xb79n_ChatGPT%20Image%20Mar%2014%2C%202026%2C%2005_03_11%20AM.jpg"
              alt="ORA Developments PEI"
              className="h-12 lg:h-14 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                data-testid={`nav-link-${link.name.toLowerCase()}`}
                className={`font-ibm text-sm uppercase tracking-wide transition-colors duration-200 ${
                  isActive(link.path)
                    ? 'text-ora-orange'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <Link
            to="/contact"
            className="hidden lg:block ora-btn-primary bg-ora-orange hover:bg-ora-orange-hover text-white font-barlow font-semibold uppercase tracking-wider px-6 py-2.5 text-sm"
            data-testid="navbar-cta"
          >
            Get Started
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-gray-300 hover:text-white"
            data-testid="mobile-menu-toggle"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div 
          className="lg:hidden bg-ora-surface border-t border-white/10 mobile-menu-enter"
          data-testid="mobile-menu"
        >
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                data-testid={`mobile-nav-link-${link.name.toLowerCase()}`}
                className={`block py-3 px-4 font-ibm text-sm uppercase tracking-wide ${
                  isActive(link.path)
                    ? 'text-ora-orange bg-white/5'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="block mt-4 ora-btn-primary bg-ora-orange hover:bg-ora-orange-hover text-white font-barlow font-semibold uppercase tracking-wider px-6 py-3 text-sm text-center"
              data-testid="mobile-navbar-cta"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
