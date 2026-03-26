import { useState } from 'react';
import { ShoppingCart, Utensils, Receipt, FileText, Radio, ArrowRight, X, CheckCircle } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '../components/ui/dialog';

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    {
      id: 'informme',
      icon: Radio,
      name: "Inform'Me",
      tagline: 'by ORA',
      shortDescription: 'Real-time communication and alert system for field operations.',
      fullDescription: "Inform'Me keeps your entire operation connected with instant alerts, updates, and communications. From field to office, everyone stays informed in real-time.",
      keyBenefit: 'Keep everyone in the loop, instantly.',
      features: [
        'Real-time alerts and notifications',
        'Field-to-office communication',
        'Emergency broadcast system',
        'Team messaging',
        'Status updates and check-ins',
      ],
      status: 'coming-soon',
      color: 'ora-blue',
      logo: 'https://customer-assets.emergentagent.com/job_ora-fleet-tech/artifacts/2ptazged_inform-me-2.png',
    },
    {
      id: 'smartshop',
      icon: ShoppingCart,
      name: 'SmartShop',
      tagline: 'by ORA',
      shortDescription: 'Inventory and procurement management for trades and operations.',
      fullDescription: 'SmartShop streamlines your inventory management and procurement processes. Track stock levels, automate reordering, and manage suppliers—all from one dashboard designed for trades and operations.',
      keyBenefit: 'Never run out of critical supplies again.',
      features: [
        'Real-time inventory tracking',
        'Automated reorder alerts',
        'Supplier management',
        'Purchase order generation',
        'Cost analysis and reporting',
      ],
      status: 'coming-soon',
      color: 'ora-orange',
    },
    {
      id: 'smartmeal',
      icon: Utensils,
      name: 'SmartMeal',
      tagline: 'by ORA',
      shortDescription: 'Meal planning and crew catering coordination made simple.',
      fullDescription: 'SmartMeal takes the hassle out of feeding your crew. Plan meals, track nutrition, coordinate catering, and manage dietary requirements—all in one place built for operations that feed teams.',
      keyBenefit: 'Feed your crew better without the headaches.',
      features: [
        'Weekly meal planning',
        'Nutrition tracking',
        'Crew dietary management',
        'Catering coordination',
        'Budget tracking',
      ],
      status: 'coming-soon',
      color: 'ora-blue',
    },
    {
      id: 'expendme',
      icon: Receipt,
      name: 'ExpendMe',
      tagline: 'by ORA',
      shortDescription: 'Expense tracking and reporting for field teams and fleets.',
      fullDescription: 'ExpendMe makes expense tracking painless for field crews and fleet operators. Snap receipts, categorize expenses, and generate reports—no more shoebox accounting.',
      keyBenefit: 'Track every dollar without the paperwork pile.',
      features: [
        'Receipt scanning',
        'Auto-categorization',
        'Mileage tracking',
        'Expense reports',
        'Team expense management',
      ],
      status: 'coming-soon',
      color: 'ora-orange',
    },
    {
      id: 'resumate',
      icon: FileText,
      name: 'ResuMate',
      tagline: 'PEI',
      shortDescription: 'Professional resume building for blue-collar workers in PEI.',
      fullDescription: 'ResuMate PEI helps tradespeople and operators create professional resumes that highlight practical skills and hands-on experience. Built specifically for the blue-collar workforce.',
      keyBenefit: 'Land your next job with a resume that shows what you can do.',
      features: [
        'Trade-focused templates',
        'Skills highlighting',
        'Certification tracking',
        'Easy formatting',
        'PEI job market optimized',
      ],
      status: 'coming-soon',
      color: 'ora-blue',
    },
  ];

  return (
    <div data-testid="products-page">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-ora-dark" data-testid="products-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="font-barlow font-semibold text-ora-orange uppercase tracking-widest text-sm mb-4 block">
              Our Products
            </span>
            <h1 className="font-chivo font-bold text-white text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-tight mb-6">
              Apps That Work<br />
              <span className="text-ora-orange">As Hard As You Do</span>
            </h1>
            <p className="font-ibm text-gray-300 text-lg lg:text-xl leading-relaxed">
              Practical tools built by operators, for operators. No bloat, no fluff—just features that make your day easier.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 lg:py-32 bg-ora-surface grid-accent" data-testid="products-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {products.map((product, index) => (
              <div
                key={product.id}
                id={product.id}
                className="ora-card bg-ora-dark border border-white/10 p-8 lg:p-10 flex flex-col"
                data-testid={`product-detail-${product.id}`}
              >
                <div className="flex items-start justify-between mb-6">
                  {product.logo ? (
                    <img 
                      src={product.logo} 
                      alt={product.name}
                      className="w-16 h-16 object-contain"
                    />
                  ) : (
                    <div 
                      className="w-16 h-16 flex items-center justify-center"
                      style={{
                        backgroundColor: product.color === 'ora-blue' ? 'rgba(30, 58, 138, 0.1)' : 'rgba(249, 115, 22, 0.1)',
                        border: `1px solid ${product.color === 'ora-blue' ? 'rgba(30, 58, 138, 0.3)' : 'rgba(249, 115, 22, 0.3)'}`
                      }}
                    >
                      <product.icon 
                        className="w-8 h-8" 
                        style={{ color: product.color === 'ora-blue' ? '#1E3A8A' : '#F97316' }}
                      />
                    </div>
                  )}
                  <span 
                    className="font-barlow text-xs uppercase tracking-widest px-3 py-1 border"
                    style={{
                      color: product.color === 'ora-blue' ? '#1E3A8A' : '#F97316',
                      borderColor: product.color === 'ora-blue' ? 'rgba(30, 58, 138, 0.3)' : 'rgba(249, 115, 22, 0.3)'
                    }}
                  >
                    Coming Soon
                  </span>
                </div>

                <h3 className="font-chivo font-bold text-white text-2xl lg:text-3xl mb-1">
                  {product.name}
                  <span 
                    className="font-barlow text-sm uppercase tracking-widest ml-2"
                    style={{ color: product.color === 'ora-blue' ? '#1E3A8A' : '#F97316' }}
                  >
                    {product.tagline}
                  </span>
                </h3>

                <p className="font-ibm text-gray-400 mt-3 mb-4 flex-1">
                  {product.shortDescription}
                </p>

                <div className="bg-ora-surface/50 border border-white/5 p-4 mb-6">
                  <p className="font-ibm text-white text-sm">
                    <span className="text-ora-orange font-semibold">Key Benefit:</span> {product.keyBenefit}
                  </p>
                </div>

                <button
                  onClick={() => setSelectedProduct(product)}
                  className="ora-btn-primary inline-flex items-center justify-center gap-2 text-white font-barlow font-semibold uppercase tracking-wider px-6 py-3 text-sm w-full"
                  style={{ backgroundColor: product.color === 'ora-blue' ? '#1E3A8A' : '#F97316' }}
                  data-testid={`product-cta-${product.id}`}
                >
                  View Details <ArrowRight size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Detail Modal */}
      <Dialog open={!!selectedProduct} onOpenChange={() => setSelectedProduct(null)}>
        <DialogContent className="bg-ora-dark border border-white/10 max-w-lg p-0">
          {selectedProduct && (
            <>
              <DialogHeader className="p-6 pb-0">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    {selectedProduct.logo ? (
                      <img 
                        src={selectedProduct.logo} 
                        alt={selectedProduct.name}
                        className="w-12 h-12 object-contain"
                      />
                    ) : (
                      <div 
                        className="w-12 h-12 flex items-center justify-center"
                        style={{
                          backgroundColor: selectedProduct.color === 'ora-blue' ? 'rgba(30, 58, 138, 0.1)' : 'rgba(249, 115, 22, 0.1)',
                          border: `1px solid ${selectedProduct.color === 'ora-blue' ? 'rgba(30, 58, 138, 0.3)' : 'rgba(249, 115, 22, 0.3)'}`
                        }}
                      >
                        <selectedProduct.icon 
                          className="w-6 h-6" 
                          style={{ color: selectedProduct.color === 'ora-blue' ? '#1E3A8A' : '#F97316' }}
                        />
                      </div>
                    )}
                    <div>
                      <DialogTitle className="font-chivo font-bold text-white text-xl">
                        {selectedProduct.name}
                        <span 
                          className="font-barlow text-xs uppercase tracking-widest ml-2"
                          style={{ color: selectedProduct.color === 'ora-blue' ? '#1E3A8A' : '#F97316' }}
                        >
                          {selectedProduct.tagline}
                        </span>
                      </DialogTitle>
                    </div>
                  </div>
                </div>
              </DialogHeader>
              <div className="p-6">
                <DialogDescription className="font-ibm text-gray-300 mb-6">
                  {selectedProduct.fullDescription}
                </DialogDescription>

                <h4 className="font-barlow font-semibold text-white uppercase tracking-widest text-sm mb-4">
                  Features
                </h4>
                <ul className="space-y-3 mb-6">
                  {selectedProduct.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle 
                        className="w-5 h-5 flex-shrink-0" 
                        style={{ color: selectedProduct.color === 'ora-blue' ? '#1E3A8A' : '#F97316' }}
                      />
                      <span className="font-ibm text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="bg-ora-surface border border-white/10 p-4 text-center">
                  <p className="font-barlow font-semibold text-ora-orange uppercase tracking-widest text-sm mb-2">
                    Coming Soon
                  </p>
                  <p className="font-ibm text-gray-400 text-sm">
                    We&apos;re putting the finishing touches on {selectedProduct.name}. Stay tuned!
                  </p>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-ora-dark border-t border-white/10" data-testid="products-cta">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-chivo font-bold text-white text-3xl sm:text-4xl tracking-tight mb-6">
            Want Early Access?
          </h2>
          <p className="font-ibm text-gray-400 text-lg mb-8">
            Be the first to know when our products launch. Reach out and we&apos;ll add you to the list.
          </p>
          <a
            href="/contact"
            className="ora-btn-primary inline-flex items-center justify-center gap-2 bg-ora-orange hover:bg-ora-orange-hover text-white font-barlow font-semibold uppercase tracking-wider px-10 py-4 text-sm"
            data-testid="products-early-access-cta"
          >
            Get Notified <ArrowRight size={18} />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Products;
