import { Link } from 'react-router-dom';
import { ArrowRight, Truck, ClipboardCheck, Shield, Smartphone, Cloud, Users, Heart, Calculator, FileText } from 'lucide-react';

const Solutions = () => {
  const solutionCategories = [
    {
      id: 'fleet',
      title: 'Fleet & Compliance',
      description: 'Keep your vehicles on the road and your paperwork in order.',
      color: 'ora-blue',
      solutions: [
        {
          icon: Truck,
          name: 'Fleet Tracking',
          description: 'Real-time GPS tracking and route optimization for your entire fleet.',
        },
        {
          icon: ClipboardCheck,
          name: 'Compliance Management',
          description: 'Automated logging, inspections, and regulatory compliance tracking.',
        },
        {
          icon: Shield,
          name: 'Safety & Maintenance',
          description: 'Preventive maintenance scheduling and safety incident tracking.',
        },
      ],
    },
    {
      id: 'field',
      title: 'Field-to-Office Tools',
      description: 'Bridge the gap between your crews in the field and your operations center.',
      color: 'ora-orange',
      solutions: [
        {
          icon: Smartphone,
          name: 'Mobile Crew Apps',
          description: 'Job logging, time tracking, and task management from any device.',
        },
        {
          icon: Cloud,
          name: 'Real-Time Sync',
          description: 'Instant data sync between field crews and office management.',
        },
        {
          icon: Users,
          name: 'Team Coordination',
          description: 'Dispatch, scheduling, and communication tools for distributed teams.',
        },
      ],
    },
    {
      id: 'lifestyle',
      title: 'Lifestyle & Personal Apps',
      description: 'Practical tools for everyday life—built with the same operator mindset.',
      color: 'ora-blue',
      solutions: [
        {
          icon: Heart,
          name: 'SmartMeal',
          description: 'Meal planning and nutrition tracking for busy workers and families.',
        },
        {
          icon: Calculator,
          name: 'ExpendMe',
          description: 'Personal and business expense tracking made simple.',
        },
        {
          icon: FileText,
          name: 'ResuMate PEI',
          description: 'Professional resume builder designed for blue-collar workers.',
        },
      ],
    },
  ];

  return (
    <div data-testid="solutions-page">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-ora-dark" data-testid="solutions-hero">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1644519221874-8f2a91fe3e17?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzOTB8MHwxfHNlYXJjaHwxfHxzZW1pJTIwdHJ1Y2slMjBoaWdod2F5JTIwZmxlZXR8ZW58MHx8fHwxNzc0MjcwMDM4fDA&ixlib=rb-4.1.0&q=85')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ora-dark via-ora-dark/90 to-ora-dark" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="font-barlow font-semibold text-ora-orange uppercase tracking-widest text-sm mb-4 block">
              Our Solutions
            </span>
            <h1 className="font-chivo font-bold text-white text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-tight mb-6">
              Tools Built for<br />
              <span className="text-ora-blue">How You Work</span>
            </h1>
            <p className="font-ibm text-gray-300 text-lg lg:text-xl leading-relaxed">
              From fleet management to field operations to personal productivity—we build solutions that understand the real-world challenges you face every day.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Categories */}
      {solutionCategories.map((category, categoryIndex) => (
        <section
          key={category.id}
          id={category.id}
          className={`py-20 lg:py-32 ${categoryIndex % 2 === 0 ? 'bg-ora-surface' : 'bg-ora-dark'}`}
          data-testid={`solutions-category-${category.id}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12 lg:mb-16">
              <span className={`font-barlow font-semibold text-${category.color} uppercase tracking-widest text-sm mb-4 block`}>
                {category.id === 'fleet' ? '01' : category.id === 'field' ? '02' : '03'} / Solutions
              </span>
              <h2 className="font-chivo font-bold text-white text-3xl sm:text-4xl lg:text-5xl tracking-tight mb-4">
                {category.title}
              </h2>
              <p className="font-ibm text-gray-400 text-lg max-w-2xl">
                {category.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {category.solutions.map((solution, index) => (
                <div
                  key={solution.name}
                  className={`ora-card bg-ora-dark border border-white/10 p-6 lg:p-8 ${categoryIndex % 2 !== 0 ? 'bg-ora-surface' : ''}`}
                  data-testid={`solution-card-${category.id}-${index}`}
                >
                  <div className={`w-14 h-14 bg-${category.color}/10 border border-${category.color}/30 flex items-center justify-center mb-6`}
                       style={{
                         backgroundColor: category.color === 'ora-blue' ? 'rgba(30, 58, 138, 0.1)' : 'rgba(249, 115, 22, 0.1)',
                         borderColor: category.color === 'ora-blue' ? 'rgba(30, 58, 138, 0.3)' : 'rgba(249, 115, 22, 0.3)'
                       }}>
                    <solution.icon 
                      className="w-7 h-7" 
                      style={{ color: category.color === 'ora-blue' ? '#1E3A8A' : '#F97316' }}
                    />
                  </div>
                  <h3 className="font-chivo font-bold text-white text-xl mb-3">{solution.name}</h3>
                  <p className="font-ibm text-gray-400 leading-relaxed mb-4">{solution.description}</p>
                  <Link
                    to="/contact"
                    className={`inline-flex items-center gap-1 font-barlow font-semibold uppercase tracking-wider text-sm hover:opacity-80 transition-opacity duration-200`}
                    style={{ color: category.color === 'ora-blue' ? '#1E3A8A' : '#F97316' }}
                    data-testid={`solution-link-${category.id}-${index}`}
                  >
                    Learn More <ArrowRight size={14} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-ora-dark border-t border-white/10" data-testid="solutions-cta">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-chivo font-bold text-white text-3xl sm:text-4xl tracking-tight mb-6">
            Don&apos;t See What You Need?
          </h2>
          <p className="font-ibm text-gray-400 text-lg mb-8">
            We build custom solutions for unique operational challenges. Tell us what&apos;s slowing you down.
          </p>
          <Link
            to="/contact"
            className="ora-btn-primary inline-flex items-center justify-center gap-2 bg-ora-orange hover:bg-ora-orange-hover text-white font-barlow font-semibold uppercase tracking-wider px-10 py-4 text-sm"
            data-testid="solutions-cta-button"
          >
            Let&apos;s Talk <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Solutions;
