import { useState } from 'react';
import { ShoppingCart, Utensils, Receipt, FileText, Radio, ArrowRight, CheckCircle } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '../components/ui/dialog';

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    {
      id: 'informme',
      icon: Radio,
      name: "Inform'Me",
      tagline: 'Platform',
      shortDescription: 'Real-time communication between field crews and the office.',
      fullDescription: "Inform'Me keeps your entire operation connected with instant alerts, updates, and communication.",
      keyBenefit: 'Keep everyone in the loop, instantly.',
      features: [
        'Real-time alerts',
        'Field-to-office messaging',
        'Team communication',
        'Status updates',
      ],
      status: 'coming-soon',
      color: 'ora-blue',
    },

    {
      id: 'smartshop',
      icon: ShoppingCart,
      name: 'SmartShop',
      tagline: 'System',
      shortDescription: 'Smarter shopping, pricing insights, and optimized lists.',
      fullDescription: 'SmartShop helps you build lists, compare prices, and optimize your shopping to save time and money.',
      keyBenefit: 'Spend less. Shop smarter.',
      features: [
        'Smart list building',
        'Price comparison',
        'Optimized shopping routes',
        'AI-assisted input',
      ],
      status: 'live',
      color: 'ora-orange',
      link: 'https://smartshopbyora.vercel.app', // 🔥 UPDATE THIS WHEN READY
    },

    {
      id: 'smartmeal',
      icon: Utensils,
      name: 'SmartMeal',
      tagline: 'System',
      shortDescription: 'Meal planning and crew coordination made simple.',
      fullDescription: 'SmartMeal simplifies meal planning and feeding crews in real-world environments.',
      keyBenefit: 'Feed your crew without the hassle.',
      features: [
        'Meal planning',
        'Crew coordination',
        'Shopping integration',
      ],
      status: 'coming-soon',
      color: 'ora-blue',
    },

    {
      id: 'expendme',
      icon: Receipt,
      name: 'ExpendMe',
      tagline: 'Tool',
      shortDescription: 'Track expenses, materials, and spending.',
      fullDescription: 'ExpendMe makes expense tracking simple and fast for field teams.',
      keyBenefit: 'Track every dollar easily.',
      features: [
        'Receipt tracking',
        'Expense reports',
        'Job-based tracking',
      ],
      status: 'coming-soon',
      color: 'ora-orange',
    },

    {
      id: 'resumate',
      icon: FileText,
      name: 'ResuMate',
      tagline: 'PEI',
      shortDescription: 'Resume building for real-world workers.',
      fullDescription: 'ResuMate helps workers build resumes that reflect real skills.',
      keyBenefit: 'Show what you can actually do.',
      features: [
        'Simple builder',
        'Trade-focused templates',
      ],
      status: 'coming-soon',
      color: 'ora-blue',
    },
  ];

  return (
    <div>

      {/* HERO */}
      <section className="py-20 bg-ora-dark">
        <div className="max-w-5xl mx-auto px-6">
          <h1 className="text-white text-5xl font-bold mb-6">
            Apps That Work<br />
            <span className="text-ora-orange">As Hard As You Do</span>
          </h1>
          <p className="text-gray-400 text-lg">
            Built from real-world operations. Designed to be used — not just sold.
          </p>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="py-20 bg-ora-surface">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8">

          {products.map((product) => (
            <div key={product.id} className="bg-ora-dark border border-white/10 p-8">

              <h3 className="text-white text-2xl font-bold mb-2">
                {product.name}
                <span className="text-sm text-ora-orange ml-2 uppercase">{product.tagline}</span>
              </h3>

              <p className="text-gray-400 mb-4">{product.shortDescription}</p>

              <p className="text-sm text-white mb-4">
                <span className="text-ora-orange">Key Benefit:</span> {product.keyBenefit}
              </p>

              {/* 🔥 CONDITIONAL CTA */}
              {product.status === 'live' ? (
                <a
                  href={product.link}
                  className="inline-flex items-center gap-2 bg-ora-orange px-6 py-3 text-white uppercase text-sm"
                >
                  Open App <ArrowRight size={16} />
                </a>
              ) : (
                <button
                  onClick={() => setSelectedProduct(product)}
                  className="inline-flex items-center gap-2 border border-white/20 px-6 py-3 text-white uppercase text-sm"
                >
                  View Details <ArrowRight size={16} />
                </button>
              )}

            </div>
          ))}

        </div>
      </section>

      {/* MODAL */}
      <Dialog open={!!selectedProduct} onOpenChange={() => setSelectedProduct(null)}>
        <DialogContent className="bg-ora-dark border border-white/10">
          {selectedProduct && (
            <>
              <DialogHeader>
                <DialogTitle className="text-white text-xl">
                  {selectedProduct.name}
                </DialogTitle>
              </DialogHeader>

              <DialogDescription className="text-gray-300 mb-4">
                {selectedProduct.fullDescription}
              </DialogDescription>

              <ul className="space-y-2">
                {selectedProduct.features.map((f, i) => (
                  <li key={i} className="flex gap-2">
                    <CheckCircle className="text-ora-orange w-4 h-4" />
                    <span className="text-gray-400">{f}</span>
                  </li>
                ))}
              </ul>
            </>
          )}
        </DialogContent>
      </Dialog>

    </div>
  );
};

export default Products;
