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
      description: 'Real-time communication between field crews and the office — no delays.',
      logo: 'https://customer-assets.emergentagent.com/job_ora-fleet-tech/artifacts/2ptazged_inform-me-2.png',
    },
    {
      icon: ShoppingCart,
      name: 'SmartShop',
      tagline: 'by ORA',
      description: 'Save money and optimize your shopping with smarter lists and pricing insight.',
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
      description: 'Track expenses, materials, and spending across jobs and teams.',
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
      <section className="relative min-h-[90vh] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://customer-assets.emergentagent.com/job_72dff99e-f23b-417a-b072-6a778e2f977a/artifacts/x1orriwj_ChatGPT%20Image%20Mar%2014%2C%202026%2C%2005_02_36%20AM.png')`
          }}
        />
        <div className="absolute inset-0 hero-overlay" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="max-w-3xl">
            <span className="font-barlow font-semibold text-ora-orange uppercase tracking-widest text-sm mb-4 block">
              Operational Reality Advisors
            </span>

            <h1 className="font-chivo font-bold text-white text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-tight mb-6">
              Built by Operators.<br />
              <span className="text-ora-orange">Designed for the Real World.</span>
            </h1>

            <p className="font-ibm text-gray-300 text-lg lg:text-xl leading-relaxed mb-8">
              ORA builds tools for fleets, trades, and real operations. No fluff, no gimmicks—just software that works as hard as you do.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/products"
                className="ora-btn-primary inline-flex items-center justify-center gap-2 bg-ora-orange hover:bg-ora-orange-hover text-white font-barlow font-semibold uppercase tracking-wider px-8 py-4 text-sm"
              >
                Explore Our Apps <ArrowRight size={18} />
              </Link>

              <Link
                to="/contact"
                className="ora-btn-secondary inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white/30 hover:border-ora-blue text-white font-barlow font-semibold uppercase tracking-wider px-8 py-4 text-sm"
              >
                Talk to ORA
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 lg:py-32 bg-ora-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
          <span className="font-barlow font-semibold text-ora-blue uppercase tracking-widest text-sm mb-4 block">
            What We Build
          </span>
          <h2 className="font-chivo font-bold text-white text-3xl sm:text-4xl lg:text-5xl">
            Tools That Get the Job Done
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 px-6">
          {features.map((feature, index) => (
            <div key={index} className="ora-card bg-ora-surface border border-white/10 p-6">
              <div className="mb-4">
                <feature.icon className="text-ora-blue w-8 h-8" />
              </div>
              <h3 className="text-white font-bold text-xl mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Products */}
      <section className="py-20 lg:py-32 bg-ora-surface text-center">
        <h2 className="text-white text-4xl font-bold mb-4">
          Apps Built for Operators
        </h2>

        <p className="text-gray-400 max-w-2xl mx-auto mb-12">
          Each system is built to solve real operational problems — not theoretical ones.
        </p>

        <div className="grid md:grid-cols-5 gap-6 px-6">
          {products.map((product, index) => (
            <div key={index} className="border border-white/10 p-6 bg-ora-dark">
              <h3 className="text-white font-bold text-lg">{product.name}</h3>
              <p className="text-gray-400 text-sm mt-2">{product.description}</p>

              <a
                href="#"
                className="text-ora-orange mt-4 inline-block hover:underline"
              >
                Open App →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center bg-ora-dark">
        <h2 className="text-white text-4xl font-bold mb-6">
          Stop guessing. <span className="text-ora-orange">Start operating.</span>
        </h2>

        <p className="text-gray-400 mb-8">
          See what ORA can actually do for your operation.
        </p>

        <Link
          to="/contact"
          className="bg-ora-orange px-8 py-4 text-white font-semibold uppercase tracking-wider"
        >
          Let’s Build Something Real
        </Link>
      </section>

    </div>
  );
};

export default Home;
