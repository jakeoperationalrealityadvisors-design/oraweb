import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>

      {/* 🔥 HERO */}
      <section className="bg-ora-dark py-28 px-6 text-center relative overflow-hidden">

        {/* IMAGE BACKGROUND PLACEHOLDER */}
        <img
          src="/hero-placeholder.jpg"
          alt="Operations background"
          className="absolute inset-0 w-full h-full object-cover opacity-10"
        />

        <div className="relative z-10">
          <h1 className="text-white text-5xl md:text-6xl font-bold leading-tight mb-6">
            Built by Operators.<br />
            <span className="text-ora-orange">Designed for the Real World.</span>
          </h1>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10">
            ORA builds tools for fleets, trades, and real operations.
            No fluff. No wasted time. Just systems that work.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#smartshop" className="bg-ora-orange px-8 py-4 text-white font-semibold uppercase tracking-wider">
              Explore SmartShop
            </a>

            <Link to="/contact" className="border border-white/20 px-8 py-4 text-white font-semibold uppercase tracking-wider">
              Talk to ORA
            </Link>
          </div>
        </div>
      </section>

      {/* 🔥 VISUAL STRIP (IMAGE SECTION) */}
      <section className="bg-black">
        <img
          src="/operations-strip.jpg"
          alt="Operations"
          className="w-full h-64 object-cover opacity-60"
        />
      </section>

      {/* 🔥 WHAT WE BUILD */}
      <section className="bg-ora-surface py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center">

          <div>
            <h3 className="text-white text-xl font-bold mb-2">Fleet Systems</h3>
            <p className="text-gray-400">Track, manage, and optimize fleets in real time.</p>
          </div>

          <div>
            <h3 className="text-white text-xl font-bold mb-2">Field Tools</h3>
            <p className="text-gray-400">Built for crews working on-site, not behind desks.</p>
          </div>

          <div>
            <h3 className="text-white text-xl font-bold mb-2">Business Apps</h3>
            <p className="text-gray-400">Simple systems that remove friction from operations.</p>
          </div>

        </div>
      </section>

      {/* 🔥 SMARTSHOP HERO */}
      <section id="smartshop" className="bg-ora-dark py-24 px-6 text-center border-t border-white/10">

        <img
          src="/smartshop-preview.jpg"
          alt="SmartShop preview"
          className="w-full max-w-4xl mx-auto mb-10 rounded opacity-90"
        />

        <span className="text-ora-orange uppercase tracking-widest text-sm block mb-4">
          SmartShop by ORA
        </span>

        <h2 className="text-white text-4xl md:text-5xl font-bold mb-6">
          Stop Guessing.<br />
          <span className="text-ora-orange">Start Saving.</span>
        </h2>

        <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
          Build smarter lists, compare prices, and optimize your shopping.
          Save time. Reduce cost. Stay efficient.
        </p>

        {/* WAITLIST */}
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

          <button className="bg-ora-orange px-6 py-4 text-white font-semibold uppercase tracking-wider hover:bg-orange-600">
            Join Waitlist
          </button>
        </form>

        <p className="text-gray-500 text-sm mt-4">
          Launching this week • Early access users first
        </p>

      </section>

      {/* 🔥 TRUST / AUTHORITY */}
      <section className="bg-ora-surface py-20 px-6 text-center">
        <h2 className="text-white text-3xl font-bold mb-6">
          Built From Real Work
        </h2>

        <p className="text-gray-400 max-w-2xl mx-auto mb-10">
          ORA comes from trucking, operations, and hands-on environments where tools need to work — not just look good.
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div>
            <p className="text-ora-orange text-2xl font-bold">Real Workflows</p>
            <p className="text-gray-400">Not theory</p>
          </div>

          <div>
            <p className="text-ora-orange text-2xl font-bold">No Fluff</p>
            <p className="text-gray-400">Only what matters</p>
          </div>

          <div>
            <p className="text-ora-orange text-2xl font-bold">Operator First</p>
            <p className="text-gray-400">Built for use</p>
          </div>
        </div>
      </section>

      {/* 🔥 OTHER PRODUCTS */}
      <section className="bg-ora-dark py-20 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

          {["Inform'Me", "ExpendMe", "SmartMeal", "ResuMate"].map((app) => (
            <div key={app} className="border border-white/10 p-6 hover:border-ora-orange transition">
              <h3 className="text-white text-xl font-bold mb-2">{app}</h3>
              <p className="text-gray-400">
                Built for real-world operations and practical use.
              </p>
            </div>
          ))}

        </div>
      </section>

      {/* 🔥 FINAL CTA */}
      <section className="bg-black py-20 px-6 text-center">
        <h2 className="text-white text-3xl font-bold mb-6">
          Stop Guessing. Start Operating.
        </h2>

        <p className="text-gray-400 mb-8">
          Real tools. Real systems. Built from experience.
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
