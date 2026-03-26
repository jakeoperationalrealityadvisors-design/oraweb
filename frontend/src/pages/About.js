import { Link } from 'react-router-dom';
import { ArrowRight, Target, Users, Lightbulb, CheckCircle } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Purpose-Driven',
      description: 'Every tool is built to solve a real problem — not to look good in a demo.',
    },
    {
      icon: Users,
      title: 'Operator-First',
      description: 'Designed for the people actually doing the work, not sitting in meetings.',
    },
    {
      icon: Lightbulb,
      title: 'Practical Innovation',
      description: 'Technology should make work easier — not more complicated.',
    },
  ];

  const highlights = [
    'Built from trucking and operational experience',
    'Based in Prince Edward Island, Canada',
    'Focused on fleets, trades, and real-world systems',
    'No fluff — just tools that actually get used',
  ];

  return (
    <div data-testid="about-page">

      {/* Hero */}
      <section className="py-20 lg:py-32 bg-ora-dark">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="text-ora-orange uppercase tracking-widest text-sm block mb-4">
            About ORA
          </span>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Built by an Operator. Not a Theorist.
          </h1>

          <p className="text-gray-400 text-lg leading-relaxed">
            ORA Developments PEI comes from real-world work — trucking, operations, and hands-on environments where things either work or they don’t.
          </p>
        </div>
      </section>

      {/* Who I Am */}
      <section className="py-16 max-w-5xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-ora-orange mb-4">
          Who I Am
        </h2>

        <p className="text-gray-400 leading-relaxed mb-6">
          I’m Jake — I didn’t start in tech. I started in real operations.
          Trucks, jobs, schedules, breakdowns, pressure — the kind of environments where software isn’t optional, it either works or it slows you down.
        </p>

        <p className="text-gray-400 leading-relaxed">
          ORA is built from that experience. Everything here is shaped by what actually happens on the ground, not what looks good on paper.
        </p>

        <div className="mt-8 space-y-3">
          {highlights.map((item, index) => (
            <div key={index} className="flex items-center gap-3">
              <CheckCircle className="text-ora-blue w-5 h-5" />
              <span className="text-gray-300">{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Why ORA Exists */}
      <section className="py-16 bg-ora-surface max-w-5xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-ora-orange mb-4">
          Why ORA Exists
        </h2>

        <p className="text-gray-400 leading-relaxed mb-6">
          Most software isn’t built by the people who actually use it.
        </p>

        <p className="text-gray-400 leading-relaxed mb-6">
          It’s built by people guessing what operations need — and it shows.
        </p>

        <p className="text-gray-400 leading-relaxed">
          ORA exists to fix that. To build systems based on real workflows, real problems, and real use.
        </p>
      </section>

      {/* Values */}
      <section className="py-20 bg-ora-dark">
        <div className="max-w-7xl mx-auto px-6 text-center mb-12">
          <h2 className="text-white text-4xl font-bold">
            How We Build
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 px-6">
          {values.map((value, index) => (
            <div key={index} className="bg-ora-surface p-6 border border-white/10 text-center">
              <value.icon className="text-ora-blue w-8 h-8 mx-auto mb-4" />
              <h3 className="text-white font-bold mb-2">{value.title}</h3>
              <p className="text-gray-400">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center px-6">
        <h2 className="text-white text-3xl font-bold mb-6">
          Want to See What ORA Builds?
        </h2>

        <p className="text-gray-400 mb-8">
          Take a look at the systems currently being developed.
        </p>

        <Link
          to="/products"
          className="bg-ora-orange px-8 py-4 text-white font-semibold uppercase tracking-wider inline-flex items-center gap-2"
        >
          Explore Products <ArrowRight size={18} />
        </Link>
      </section>

    </div>
  );
};

export default About;
