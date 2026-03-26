import { Link } from 'react-router-dom';
import { ArrowRight, Truck, Wrench, BarChart3, ShoppingCart, Utensils, Receipt, FileText, Radio } from 'lucide-react';

const Home = () => {
  const features = [
    {
      icon: Truck,
      title: 'Fleet Systems',
      description: 'Track, manage, and optimize your fleet operations with real-time data and compliance tools.',
    },
    {
      icon: Wrench,
      title: 'Field Tools',
      description: 'Mobile-first solutions for crews in the field. Log jobs, track time, and sync with the office.',
    },
    {
      icon: BarChart3,
      title: 'Business Apps',
      description: 'Custom applications designed to streamline your operations and improve efficiency.',
    },
  ];

  const products = [
    {
      icon: Radio,
      name: "Inform'Me",
      tagline: 'by ORA',
      description: 'Real-time communication and alert system for field operations.',
      logo: 'https://customer-assets.emergentagent.com/job_ora-fleet-tech/artifacts/2ptazged_inform-me-2.png',
    },
    {
      icon: ShoppingCart,
      name: 'SmartShop',
      tagline: 'by ORA',
      description: 'Inventory and procurement management for trades and operations.',
    },
    {
      icon: Utensils,
      name: 'SmartMeal',
      tagline: 'by ORA',
      description: 'Meal planning and crew catering coordination made simple.',
    },
    {
      icon: Receipt,
      name: 'ExpendMe',
      tagline: 'by ORA',
      description: 'Expense tracking and reporting for field teams and fleets.',
    },
    {
      icon: FileText,
      name: 'ResuMate',
      tagline: 'PEI',
      description: 'Professional resume building for blue-collar workers in PEI.',
    },
  ];

  return (
    <div data-testid="home-page">
      {/* Hero Section */}
      <section 
        className="relative min-h-[90vh] flex items-center"
        data-testid="hero-section"
      >
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://customer-assets.emergentagent.com/job_72dff99e-f23b-417a-b072-6a778e2f977a/artifacts/x1orriwj_ChatGPT%20Image%20Mar%2014%2C%202026%2C%2005_02_36%20AM.png')`
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="max-w-3xl">
            <span className="font-barlow font-semibold text-ora-orange uppercase tracking-widest text-sm mb-4 block animate-fade-in-up">
              Operational Reality Advisors
            </span>
            <h1 className="font-chivo font-bold text-white text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-tight mb-6 animate-fade-in-up animate-delay-100">
              Built by Operators.<br />
              <span className="text-ora-orange">Designed for the Real World.</span>
            </h1>
            <p className="font-ibm text-gray-300 text-lg lg:text-xl leading-relaxed mb-8 animate-fade-in-up animate-delay-200">
              ORA builds tools for fleets, trades, and real operations. No fluff, no gimmicks—just software that works as hard as you do.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animate-delay-300">
              <Link
                to="/solutions"
                className="ora-btn-primary inline-flex items-center justify-center gap-2 bg-ora-orange hover:bg-ora-orange-hover text-white font-barlow font-semibold uppercase tracking-wider px-8 py-4 text-sm"
                data-testid="hero-cta-solutions"
              >
                View Solutions <ArrowRight size={18} />
              </Link>
              <Link
                to="/contact"
                className="ora-btn-secondary inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white/30 hover:border-ora-blue text-white font-barlow font-semibold uppercase tracking-wider px-8 py-4 text-sm"
                data-testid="hero-cta-contact"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>

        {/* Industry Icons Bar */}
        <div className="absolute bottom-0 left-0 right-0 bg-ora-surface/90 border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16 text-gray-400">
              <span className="font-barlow uppercase tracking-widest text-xs flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-ora-blue rounded-full"></span> Fisheries
              </span>
              <span className="font-barlow uppercase tracking-widest text-xs flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-ora-blue rounded-full"></span> Agriculture
              </span>
              <span className="font-barlow uppercase tracking-widest text-xs flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-ora-blue rounded-full"></span> Construction
              </span>
              <span className="font-barlow uppercase tracking-widest text-xs flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-ora-blue rounded-full"></span> Industry
              </span>
              <span className="font-barlow uppercase tracking-widest text-xs flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-ora-blue rounded-full"></span> Forestry
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 lg:py-32 bg-ora-dark" data-testid="features-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <span className="font-barlow font-semibold text-ora-blue uppercase tracking-widest text-sm mb-4 block">
              What We Build
            </span>
            <h2 className="font-chivo font-bold text-white text-3xl sm:text-4xl lg:text-5xl tracking-tight">
              Tools That Get the Job Done
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="ora-card bg-ora-surface border border-white/10 p-6 lg:p-8"
                data-testid={`feature-card-${index}`}
              >
                <div className="w-14 h-14 bg-ora-blue/10 border border-ora-blue/30 flex items-center justify-center mb-6">
                  <feature.icon className="w-7 h-7 text-ora-blue" />
                </div>
                <h3 className="font-chivo font-bold text-white text-xl mb-3">{feature.title}</h3>
                <p className="font-ibm text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 lg:py-32 bg-ora-surface grid-accent" data-testid="products-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <span className="font-barlow font-semibold text-ora-orange uppercase tracking-widest text-sm mb-4 block">
              Our Products
            </span>
            <h2 className="font-chivo font-bold text-white text-3xl sm:text-4xl lg:text-5xl tracking-tight">
              Apps Built for Operators
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {products.map((product, index) => (
              <div
                key={product.name}
                className="ora-card bg-ora-dark border border-white/10 p-6 flex flex-col"
                data-testid={`product-card-${index}`}
              >
                {product.logo ? (
                  <img 
                    src={product.logo} 
                    alt={product.name}
                    className="w-12 h-12 object-contain mb-4"
                  />
                ) : (
                  <div className="w-12 h-12 bg-ora-orange/10 border border-ora-orange/30 flex items-center justify-center mb-4">
                    <product.icon className="w-6 h-6 text-ora-orange" />
                  </div>
                )}
                <h3 className="font-chivo font-bold text-white text-lg">
                  {product.name}
                  <span className="font-barlow text-ora-blue text-xs uppercase tracking-widest ml-2">{product.tagline}</span>
                </h3>
                <p className="font-ibm text-gray-400 text-sm mt-2 flex-1">{product.description}</p>
                <Link
                  to="/products"
                  className="inline-flex items-center gap-1 font-barlow font-semibold text-ora-orange uppercase tracking-wider text-sm mt-4 hover:text-ora-orange-hover transition-colors duration-200"
                  data-testid={`product-link-${index}`}
                >
                  Learn More <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-ora-dark" data-testid="cta-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-chivo font-bold text-white text-3xl sm:text-4xl lg:text-5xl tracking-tight mb-6">
            Stop guessing.<br />
            <span className="text-ora-orange">Start operating.</span>
          </h2>
          <p className="font-ibm text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            Ready to streamline your operations? Let&apos;s talk about what ORA can build for you.
          </p>
          <Link
            to="/contact"
            className="ora-btn-primary inline-flex items-center justify-center gap-2 bg-ora-orange hover:bg-ora-orange-hover text-white font-barlow font-semibold uppercase tracking-wider px-10 py-4 text-sm"
            data-testid="cta-contact"
          >
            Let&apos;s Build Something Real <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
