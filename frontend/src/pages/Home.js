import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Home = () => {
  return (
    <div>

      {/* 🔥 HERO */}
      <section className="relative bg-ora-dark py-28 px-6 text-center overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-br from-black via-transparent to-black opacity-70" />

        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="relative z-10"
        >
          <h1 className="text-white text-5xl md:text-6xl font-bold leading-tight mb-6 tracking-tight">
            Built by Operators.<br />
            <span className="text-ora-orange">Designed for the Real World.</span>
          </h1>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            ORA builds tools for fleets, trades, and real operations.
            No fluff. No wasted time. Just systems that work.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#smartshop"
              className="bg-ora-orange px-8 py-4 text-white font-semibold uppercase tracking-wider hover:scale-105 transition"
            >
              Explore SmartShop
            </a>

            <Link
              to="/contact"
              className="border border-white/20 px-8 py-4 text-white font-semibold uppercase tracking-wider hover:bg-white/10 transition"
            >
              Talk to ORA
            </Link>
          </div>
        </motion.div>
      </section>

      {/* 🔥 VISUAL STRIP */}
      <section className="relative overflow-hidden">
        <img
          src="/operations-strip.jpg"
          alt=""
          className="w-full h-64 object-cover opacity-60 scale-105 hover:scale-110 transition duration-700"
        />
      </section>

      {/* 🔥 WHAT WE BUILD */}
      <section className="bg-ora-surface py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center">

          {["Fleet Systems", "Field Tools", "Business Apps"].map((item) => (
            <motion.div
              key={item}
              whileHover={{ y: -6 }}
              className="border border-white/10 p-6 hover:border-ora-orange transition"
            >
              <h3 className="text-white text-xl font-bold mb-2">{item}</h3>
              <p className="text-gray-400">
                Built for real-world usage and daily operations.
              </p>
            </motion.div>
          ))}

        </div>
      </section>

      {/* 🔥 SMARTSHOP */}
      <section id="smartshop" className="bg-ora-dark py-24 px-6 text-center border-t border-white/10">

        <motion.img
          src="/smartshop-preview.jpg"
          alt=""
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="w-full max-w-4xl mx-auto mb-10 rounded shadow-lg"
        />

        <h2 className="text-white text-4xl md:text-5xl font-bold mb-6 tracking-tight">
          Stop Guessing.<br />
          <span className="text-ora-orange">Start Saving.</span>
        </h2>

        <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
          Build smarter lists, compare prices, and optimize your shopping.
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
            className="flex-1 px-4 py-4 bg-black border border-white/10 text-white outline-none focus:border-ora-orange transition"
          />

          <button className="bg-ora-orange px-6 py-4 text-white font-semibold uppercase tracking-wider hover:scale-105 transition">
            Join Waitlist
          </button>
        </form>

        <p className="text-gray-500 text-sm mt-4">
          Launching this week • Early access users first
        </p>
      </section>

      {/* 🔥 TRUST */}
      <section className="bg-ora-surface py-20 px-6 text-center">
        <h2 className="text-white text-3xl font-bold mb-6">
          Built From Real Work
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">

          {["Real Workflows", "No Fluff", "Operator First"].map((item) => (
            <motion.div
              key={item}
              whileHover={{ scale: 1.05 }}
              className="border border-white/10 p-6"
            >
              <p className="text-ora-orange text-2xl font-bold">{item}</p>
            </motion.div>
          ))}

        </div>
      </section>

      {/* 🔥 FINAL CTA */}
      <section className="bg-black py-20 px-6 text-center">
        <h2 className="text-white text-3xl font-bold mb-6">
          Stop Guessing. Start Operating.
        </h2>

        <Link
          to="/contact"
          className="bg-ora-orange px-8 py-4 text-white font-semibold uppercase tracking-wider hover:scale-105 transition"
        >
          Work With ORA
        </Link>
      </section>

    </div>
  );
};

export default Home;
