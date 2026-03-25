import { useState } from 'react';
import { Send, MapPin, ArrowRight, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, just show success state
    // In production, this would integrate with a form service like Formspree
    setIsSubmitted(true);
    console.log('Form submitted:', formData);
  };

  return (
    <div data-testid="contact-page">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-ora-dark" data-testid="contact-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Column - Info */}
            <div>
              <span className="font-barlow font-semibold text-ora-orange uppercase tracking-widest text-sm mb-4 block">
                Contact Us
              </span>
              <h1 className="font-chivo font-bold text-white text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-tight mb-6">
                Let&apos;s Build<br />
                <span className="text-ora-orange">Something Real</span>
              </h1>
              <p className="font-ibm text-gray-300 text-lg leading-relaxed mb-8">
                Got a challenge? Need a tool? Want to see how ORA can help your operations? Drop us a line. We read every message.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-ora-blue/10 border border-ora-blue/30 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-ora-blue" />
                  </div>
                  <div>
                    <h3 className="font-chivo font-semibold text-white mb-1">Location</h3>
                    <p className="font-ibm text-gray-400">Prince Edward Island, Canada</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-10 pt-10 border-t border-white/10">
                <p className="font-barlow font-semibold text-white uppercase tracking-widest text-sm mb-4">
                  Follow Us
                </p>
                <div className="flex items-center gap-4">
                  <a
                    href="https://www.facebook.com/ORADevelopmentsPEI"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-ibm text-gray-400 hover:text-ora-orange transition-colors duration-200"
                    data-testid="contact-facebook"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                    Facebook
                  </a>
                  <a
                    href="https://www.tiktok.com/@oradevelopmentspei"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-ibm text-gray-400 hover:text-ora-orange transition-colors duration-200"
                    data-testid="contact-tiktok"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
                    </svg>
                    TikTok
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="bg-ora-surface border border-white/10 p-6 lg:p-8">
              {isSubmitted ? (
                <div className="text-center py-12" data-testid="contact-success">
                  <div className="w-16 h-16 bg-ora-orange/10 border border-ora-orange/30 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-8 h-8 text-ora-orange" />
                  </div>
                  <h3 className="font-chivo font-bold text-white text-2xl mb-3">Message Sent!</h3>
                  <p className="font-ibm text-gray-400 mb-6">
                    Thanks for reaching out. We&apos;ll get back to you soon.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: '', email: '', message: '' });
                    }}
                    className="font-barlow font-semibold text-ora-orange uppercase tracking-wider text-sm hover:text-ora-orange-hover transition-colors duration-200"
                    data-testid="contact-send-another"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} data-testid="contact-form">
                  <h2 className="font-chivo font-bold text-white text-2xl mb-6">Send a Message</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <label 
                        htmlFor="name" 
                        className="font-barlow font-semibold text-white uppercase tracking-widest text-sm mb-2 block"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="ora-input w-full bg-ora-dark border border-white/10 text-white font-ibm px-4 py-3 focus:outline-none focus:border-ora-blue"
                        placeholder="Your name"
                        data-testid="contact-input-name"
                      />
                    </div>

                    <div>
                      <label 
                        htmlFor="email" 
                        className="font-barlow font-semibold text-white uppercase tracking-widest text-sm mb-2 block"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="ora-input w-full bg-ora-dark border border-white/10 text-white font-ibm px-4 py-3 focus:outline-none focus:border-ora-blue"
                        placeholder="your@email.com"
                        data-testid="contact-input-email"
                      />
                    </div>

                    <div>
                      <label 
                        htmlFor="message" 
                        className="font-barlow font-semibold text-white uppercase tracking-widest text-sm mb-2 block"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="ora-input w-full bg-ora-dark border border-white/10 text-white font-ibm px-4 py-3 focus:outline-none focus:border-ora-blue resize-none"
                        placeholder="Tell us about your project or challenge..."
                        data-testid="contact-input-message"
                      />
                    </div>

                    <button
                      type="submit"
                      className="ora-btn-primary w-full inline-flex items-center justify-center gap-2 bg-ora-orange hover:bg-ora-orange-hover text-white font-barlow font-semibold uppercase tracking-wider px-6 py-4 text-sm"
                      data-testid="contact-submit"
                    >
                      Send Message <Send size={16} />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section - Using PEI image */}
      <section className="relative h-64 lg:h-96 bg-ora-surface" data-testid="contact-map-section">
        <img
          src="https://customer-assets.emergentagent.com/job_72dff99e-f23b-417a-b072-6a778e2f977a/artifacts/49pvttd3_ChatGPT%20Image%20Mar%2014%2C%202026%2C%2005_02_41%20AM.png"
          alt="Prince Edward Island"
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ora-dark via-ora-dark/50 to-transparent" />
        <div className="absolute bottom-8 left-0 right-0 text-center">
          <p className="font-barlow font-semibold text-white uppercase tracking-widest text-sm">
            Proudly Based in Prince Edward Island, Canada
          </p>
        </div>
      </section>
    </div>
  );
};

export default Contact;
