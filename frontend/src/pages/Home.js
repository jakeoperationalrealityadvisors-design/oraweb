import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>

      {/* HERO */}
      <section className="bg-ora-dark py-28 px-6 text-center">
        <h1 className="text-white text-5xl md:text-6xl font-bold leading-tight mb-6">
          Built by Operators.<br />
          <span className="text-ora-orange">Designed for the Real World.</span>
        </h1>

        <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10">
          ORA builds tools for fleets, trades, and real operations.
          No fluff. No wasted time. Just systems that work.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#smartshop"
            className="bg-ora-orange px-8 py-4 text-white font-semibold uppercase tracking-wider"
          >
            Explore SmartShop
          </a>

          <Link
            to="/contact"
            className="border border-white/20 px-8 py-4 text-white font-semibold uppercase tracking-wider"
          >
            Talk to ORA
          </Link>
        </div>
      </section>

      {/* WHAT WE BUILD */}
      <section className="bg-ora-surface py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center">

          <div>
            <h3 className="text-white text-xl font-bold mb-2">Fleet Systems</h3>
            <p className="text-gray-400">
              Manage, track, and optimize your fleet operations with real-world tools.
            </p>
          </div>

          <div>
            <h3 className="text-white text-xl font-bold mb-2">Field Tools</h3>
            <p className="text-gray-400">
              Mobile-first systems built for crews working in the field.
            </p>
          </div>

          <div>
            <h3 className="text-white text-xl font-bold mb-2">Business Apps</h3>
            <p className="text-gray-400">
              Custom tools designed to simplify operations and reduce friction.
            </p>
          </div>

        </div>
      </section>

      {/* 🔥 SMARTSHOP SECTION */}
      <section id="smartshop" className="bg-ora-dark py-24 px-6 text-center border-t border-white/10">

        <span className="text-ora-orange uppercase tracking-widest text-sm block mb-4">
          SmartShop by ORA
        </span>

        <h2 className="text-white text-4xl md:text-5xl font-bold mb-6">
          Stop Guessing.<br />
          <span className="text-ora-orange">Start Saving.</span>
        </h2>

        <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
          Build smarter lists, compare prices, and optimize your shopping.
          Save time, reduce cost, and shop with confidence.
        </p>

        {/* WAITLIST FORM */}
        <form
          action="https://formspree.io/f/maqlyzkz"
          method="POST"
          className="flex flex-col sm:flex-row gap-3 justify-center max-w-xl mx-auto"
        >
          <input
            type="email"
            name="email"
            required
            placeholder="Enter your email"
            className="flex-1 px-4 py-4 bg-[#0b1118] border border-white/10 text-white outline-none focus:border-ora-orange"
          />

          <button
            type="submit"
            className="bg-ora-orange px-6 py-4 text-white font-semibold uppercase tracking-wider hover:bg-orange-600"
          >
            Join Waitlist
          </button>
        </form>

        <p className="text-gray-500 text-sm mt-4">
          Launching this week • Early access users first
        </p>

      </section>

      {/* OTHER APPS */}
      <section className="bg-ora-surface py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

          <div className="border border-white/10 p-6">
            <h3 className="text-white text-xl font-bold mb-2">Inform'Me</h3>
            <p className="text-gray-400">
              Real-time communication between field crews and the office.
            </p>
          </div>

          <div className="border border-white/10 p-6">
            <h3 className="text-white text-xl font-bold mb-2">ExpendMe</h3>
            <p className="text-gray-400">
              Track expenses, materials, and job costs in real-time.
            </p>
          </div>

          <div className="border border-white/10 p-6">
            <h3 className="text-white text-xl font-bold mb-2">SmartMeal</h3>
            <p className="text-gray-400">
              Meal planning and crew coordination made simple.
            </p>
          </div>

          <div className="border border-white/10 p-6">
            <h3 className="text-white text-xl font-bold mb-2">ResuMate</h3>
            <p className="text-gray-400">
              Resume builder designed for real-world workers.
            </p>
          </div>

        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-ora-dark py-20 px-6 text-center border-t border-white/10">
        <h2 className="text-white text-3xl font-bold mb-6">
          Stop Guessing. Start Operating.
        </h2>

        <p className="text-gray-400 mb-8">
          Built from real experience. Designed to actually be used.
        </p>

        <Link
          to="/contact"
          className="bg-ora-orange px-8 py-4 text-white font-semibold uppercase tracking-wider"
        >
          Work With ORA
        </Link>
      </section>

    </div>
  );
};

export default Home;
