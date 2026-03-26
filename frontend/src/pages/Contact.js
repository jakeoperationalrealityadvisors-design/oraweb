import { useState } from 'react';
import { Send, MapPin, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // 🔥 REAL SUBMIT (Formspree → Gmail)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("https://formspree.io/f/mvzvondq", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          _subject: "ORA Website Contact",
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert("Something went wrong. Try again.");
      }
    } catch (error) {
      console.error(error);
      alert("Error sending message.");
    }

    setIsLoading(false);
  };

  return (
    <div data-testid="contact-page">

      {/* HERO */}
      <section className="relative py-20 lg:py-32 bg-ora-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

            {/* LEFT SIDE */}
            <div>
              <span className="text-ora-orange uppercase tracking-widest text-sm mb-4 block">
                Contact
              </span>

              <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Let’s Build<br />
                <span className="text-ora-orange">Something Real</span>
              </h1>

              <p className="text-gray-300 text-lg mb-8">
                Got a challenge? Need a system? Want to work together?
                Send a message — I read everything.
              </p>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 border border-white/20 flex items-center justify-center">
                  <MapPin className="text-ora-orange" />
                </div>
                <div>
                  <p className="text-white font-semibold">Location</p>
                  <p className="text-gray-400">Prince Edward Island, Canada</p>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE FORM */}
            <div className="bg-[#0b1118] border border-white/10 p-6 lg:p-8">

              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 border border-ora-orange flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="text-ora-orange w-8 h-8" />
                  </div>

                  <h3 className="text-white text-2xl mb-3">
                    Message Sent
                  </h3>

                  <p className="text-gray-400 mb-6">
                    I’ll get back to you shortly.
                  </p>

                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-ora-orange hover:opacity-80"
                  >
                    Send Another →
                  </button>
                </div>
              ) : (

                <form onSubmit={handleSubmit}>

                  <h2 className="text-white text-2xl mb-6">
                    Send a Message
                  </h2>

                  <div className="space-y-5">

                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      required
                      className="w-full bg-[#0b1118] border border-white/10 px-4 py-3 text-white focus:border-ora-orange outline-none"
                    />

                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your Email"
                      required
                      className="w-full bg-[#0b1118] border border-white/10 px-4 py-3 text-white focus:border-ora-orange outline-none"
                    />

                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="What do you need?"
                      required
                      rows={5}
                      className="w-full bg-[#0b1118] border border-white/10 px-4 py-3 text-white focus:border-ora-orange outline-none"
                    />

                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full bg-ora-orange hover:bg-orange-600 text-white font-semibold py-4 flex items-center justify-center gap-2"
                    >
                      {isLoading ? "Sending..." : "Send Message"}
                      <Send size={16} />
                    </button>

                  </div>
                </form>
              )}

            </div>
          </div>
        </div>
      </section>

      {/* MAP / BRAND SECTION */}
      <section className="relative h-64 lg:h-96 bg-black">
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent flex items-end justify-center pb-10">
          <p className="text-white uppercase tracking-widest text-sm">
            Built in Prince Edward Island
          </p>
        </div>
      </section>

    </div>
  );
};

export default Contact;
