import { Link } from 'react-router-dom';
import { Facebook, ArrowUpRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: 'About', path: '/about' },
      { name: 'Solutions', path: '/solutions' },
      { name: 'Products', path: '/products' },
      { name: 'Contact', path: '/contact' },
    ],
    products: [
      { name: 'SmartShop', path: '/products#smartshop' },
      { name: 'SmartMeal', path: '/products#smartmeal' },
      { name: 'ExpendMe', path: '/products#expendme' },
      { name: 'ResuMate PEI', path: '/products#resumate' },
    ],
  };

  return (
    <footer className="bg-ora-surface border-t border-white/10" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-4" data-testid="footer-logo">
              <img 
                src="https://customer-assets.emergentagent.com/job_ora-fleet-tech/artifacts/0b2xb79n_ChatGPT%20Image%20Mar%2014%2C%202026%2C%2005_03_11%20AM.jpg"
                alt="ORA Developments PEI"
                className="h-16 w-auto"
              />
            </Link>
            <p className="font-ibm text-gray-400 text-sm leading-relaxed mb-6">
              Built by Operators. Designed for the Real World. Tools for fleets, trades, and real operations.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://www.facebook.com/ORADevelopmentsPEI"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-ora-orange hover:border-ora-orange transition-colors duration-200"
                data-testid="footer-facebook"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://www.tiktok.com/@oradevelopmentspei"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-ora-orange hover:border-ora-orange transition-colors duration-200"
                data-testid="footer-tiktok"
                aria-label="TikTok"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-barlow font-semibold text-white uppercase tracking-widest text-sm mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="font-ibm text-gray-400 text-sm hover:text-ora-orange transition-colors duration-200"
                    data-testid={`footer-link-${link.name.toLowerCase()}`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products Links */}
          <div>
            <h4 className="font-barlow font-semibold text-white uppercase tracking-widest text-sm mb-4">Products</h4>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="font-ibm text-gray-400 text-sm hover:text-ora-orange transition-colors duration-200"
                    data-testid={`footer-link-${link.name.toLowerCase().replace(' ', '-')}`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-barlow font-semibold text-white uppercase tracking-widest text-sm mb-4">Get In Touch</h4>
            <p className="font-ibm text-gray-400 text-sm mb-4">
              Prince Edward Island, Canada
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 font-barlow font-semibold text-ora-orange uppercase tracking-wider text-sm hover:text-ora-orange-hover transition-colors duration-200"
              data-testid="footer-contact-cta"
            >
              Contact Us <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-ibm text-gray-500 text-sm">
            &copy; {currentYear} ORA Developments PEI. All rights reserved.
          </p>
          <p className="font-ibm text-gray-500 text-sm">
            oradevelopmentspei.ca
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
