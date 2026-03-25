import { Link } from 'react-router-dom';
import { ArrowRight, Target, Users, Lightbulb, CheckCircle } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Purpose-Driven',
      description: 'Every tool we build solves a real problem faced by real operators.',
    },
    {
      icon: Users,
      title: 'Operator-First',
      description: 'We design for the people who use our tools daily, not boardroom presentations.',
    },
    {
      icon: Lightbulb,
      title: 'Practical Innovation',
      description: 'Technology should simplify your work, not complicate it.',
    },
  ];

  const highlights = [
    'Blue-collar background with tech expertise',
    'Based in Prince Edward Island, Canada',
    'Focused on fleets, trades, and operations',
    'Real-world solutions for real-world problems',
  ];

  return (
    <div data-testid="about-page">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-ora-dark" data-testid="about-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="font-barlow font-semibold text-ora-orange uppercase tracking-widest text-sm mb-4 block">
                About ORA
              </span>
              <h1 className="font-chivo font-bold text-white text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-tight mb-6">
                Who We Are
              </h1>
              <p className="font-ibm text-gray-300 text-lg leading-relaxed mb-6">
                ORA Developments PEI was born from the dirt, the docks, and the daily grind. We&apos;re not Silicon Valley dreamers—we&apos;re operators who got tired of clunky software that didn&apos;t understand how real work gets done.
              </p>
              <p className="font-ibm text-gray-400 leading-relaxed mb-8">
                Our team combines blue-collar experience with modern tech know-how. We&apos;ve driven the trucks, worked the fields, and managed the crews. Now we build the tools we wish we had.
              </p>
              <div className="space-y-3">
                {highlights.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-ora-blue flex-shrink-0" />
                    <span className="font-ibm text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-ora-surface border border-white/10 overflow-hidden">
                <img
                  src="https://customer-assets.emergentagent.com/job_72dff99e-f23b-417a-b072-6a778e2f977a/artifacts/bb8tv1rm_ChatGPT%20Image%20Mar%2014%2C%202026%2C%2005_02_29%20AM.png"
                  alt="ORA Developments PEI"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-ora-orange/20 border border-ora-orange/30 -z-10" />
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-ora-blue/20 border border-ora-blue/30 -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Why We Started Section */}
      <section className="py-20 lg:py-32 bg-ora-surface" data-testid="why-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12 lg:mb-16">
            <span className="font-barlow font-semibold text-ora-blue uppercase tracking-widest text-sm mb-4 block">
              Our Story
            </span>
            <h2 className="font-chivo font-bold text-white text-3xl sm:text-4xl lg:text-5xl tracking-tight mb-6">
              Why We Started
            </h2>
            <p className="font-ibm text-gray-400 text-lg leading-relaxed">
              Every day, we watched operations struggle with software that was built for offices, not fields. Spreadsheets that didn&apos;t sync. Apps that crashed in the cold. Compliance tools that took longer than the actual work.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-ora-dark border border-white/10 p-8">
                <blockquote className="font-ibm text-gray-300 text-lg italic leading-relaxed mb-4">
                  &ldquo;We didn&apos;t start ORA because we loved coding. We started it because we were tired of wrestling with software that didn&apos;t understand our world.&rdquo;
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-ora-blue/20 border border-ora-blue/30 flex items-center justify-center">
                    <span className="font-chivo font-bold text-ora-blue">JB</span>
                  </div>
                  <div>
                    <p className="font-chivo font-semibold text-white">Jake Bernard</p>
                    <p className="font-barlow text-ora-orange text-sm uppercase tracking-widest">Founder</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <img
                src="https://images.unsplash.com/photo-1721594489297-963f5e24abe1?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NDh8MHwxfHNlYXJjaHw0fHx0cmFjdG9yJTIwZmFybSUyMGZpZWxkJTIwYWdyaWN1bHR1cmV8ZW58MHx8fHwxNzc0MjcwMDMzfDA&ixlib=rb-4.1.0&q=85"
                alt="PEI Agriculture"
                className="w-full h-64 lg:h-80 object-cover border border-white/10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 lg:py-32 bg-ora-dark grid-accent" data-testid="mission-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <span className="font-barlow font-semibold text-ora-orange uppercase tracking-widest text-sm mb-4 block">
              Our Mission
            </span>
            <h2 className="font-chivo font-bold text-white text-3xl sm:text-4xl lg:text-5xl tracking-tight mb-6">
              Simplify Operations for Real People
            </h2>
            <p className="font-ibm text-gray-400 text-lg max-w-2xl mx-auto">
              We exist to make the daily work of operators, fleet managers, and tradespeople easier. No corporate jargon. No unnecessary features. Just tools that work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="ora-card bg-ora-surface border border-white/10 p-6 lg:p-8 text-center"
                data-testid={`value-card-${index}`}
              >
                <div className="w-16 h-16 bg-ora-blue/10 border border-ora-blue/30 flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-ora-blue" />
                </div>
                <h3 className="font-chivo font-bold text-white text-xl mb-3">{value.title}</h3>
                <p className="font-ibm text-gray-400 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-ora-surface border-t border-white/10" data-testid="about-cta">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-chivo font-bold text-white text-3xl sm:text-4xl tracking-tight mb-6">
            Ready to Work With Operators Who Get It?
          </h2>
          <p className="font-ibm text-gray-400 text-lg mb-8">
            Let&apos;s talk about what&apos;s slowing you down and how we can help.
          </p>
          <Link
            to="/contact"
            className="ora-btn-primary inline-flex items-center justify-center gap-2 bg-ora-orange hover:bg-ora-orange-hover text-white font-barlow font-semibold uppercase tracking-wider px-10 py-4 text-sm"
            data-testid="about-cta-button"
          >
            Get In Touch <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
