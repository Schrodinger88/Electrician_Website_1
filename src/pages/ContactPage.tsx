import { useState, type FormEvent } from 'react';
import PageHero from '../components/ui/PageHero';
import { motion } from 'motion/react';
import { Phone, Envelope, MapPin, Clock, PaperPlaneTilt } from '@phosphor-icons/react';

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // In production, this would send the form data to your backend
  };

  const contactInfo = [
    { icon: Phone, label: 'Phone', value: '(613) 301-7913', href: 'tel:+16133017913', subtitle: 'Mon-Fri 7AM-8PM' },
    { icon: Envelope, label: 'Email', value: 'info@proelectric.com', href: 'mailto:info@proelectric.com', subtitle: 'Response within 2 hours' },
    { icon: MapPin, label: 'Location', value: 'Ottawa, ON, Canada', href: '#', subtitle: 'Serving greater Ottawa area' },
    { icon: Clock, label: 'Emergency', value: '24/7 Available', href: 'tel:+16133017913', subtitle: 'Call anytime for emergencies' },
  ];

  return (
    <>
      <PageHero
        title="Get In Touch"
        titleAccent="With Us"
        subtitle="Ready to start your project? Get a free estimate or ask us anything. We respond within 30 minutes during business hours."
        breadcrumb="Contact"
      />

      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-10 lg:gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-6">Contact Information</h2>
              <div className="space-y-3 sm:space-y-4 mb-10">
                {contactInfo.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.a
                      key={index}
                      href={item.href}
                      className="flex items-start gap-3.5 p-4 rounded-xl border border-zinc-200/60 hover:border-brand-200 hover:bg-brand-50/30 transition-all duration-250 group"
                      initial={{ opacity: 0, x: -16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.08, duration: 0.4 }}
                    >
                      <div className="w-10 h-10 rounded-lg bg-brand-500/[0.08] flex items-center justify-center shrink-0 group-hover:bg-brand-500 transition-colors duration-250">
                        <Icon weight="duotone" className="w-5 h-5 text-brand-600 group-hover:text-white transition-colors duration-250" />
                      </div>
                      <div>
                        <p className="text-[13px] text-zinc-400 font-medium mb-0.5">{item.label}</p>
                        <p className="text-[15px] font-semibold text-zinc-900">{item.value}</p>
                        <p className="text-[13px] text-zinc-400">{item.subtitle}</p>
                      </div>
                    </motion.a>
                  );
                })}
              </div>

              {/* Map Placeholder */}
              <div className="rounded-xl overflow-hidden border border-zinc-200/60 h-[200px] sm:h-[240px] bg-surface-50 flex items-center justify-center">
                <div className="text-center text-zinc-400">
                  <MapPin weight="duotone" className="w-10 h-10 mx-auto mb-2 text-zinc-300" />
                  <p className="font-medium text-sm">Google Maps Embed</p>
                  <p className="text-[13px]">Replace with your Google Maps iframe</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <motion.div
              className="bg-surface-50 rounded-xl p-6 sm:p-8 border border-zinc-200/60"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {submitted ? (
                <div className="flex flex-col items-center justify-center h-full min-h-[380px] text-center">
                  <div className="w-16 h-16 rounded-xl bg-brand-500/[0.08] flex items-center justify-center mb-5">
                    <PaperPlaneTilt weight="duotone" className="w-8 h-8 text-brand-500" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
                  <p className="text-zinc-500 text-sm max-w-sm">
                    Thank you for reaching out. We'll get back to you within 30 minutes during business hours.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setFormState({ name: '', email: '', phone: '', service: '', message: '' }); }}
                    className="mt-5 text-brand-600 font-semibold text-sm hover:text-brand-700 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <>
                  <h2 className="text-xl font-bold mb-1.5">Request a Free Estimate</h2>
                  <p className="text-zinc-400 text-sm mb-6">Fill out the form and we'll get back to you shortly.</p>

                  <form onSubmit={handleSubmit} className="space-y-4" id="contact-form">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="contact-name" className="block text-[13px] font-medium text-zinc-600 mb-1.5">Full Name *</label>
                        <input
                          id="contact-name"
                          type="text"
                          required
                          value={formState.name}
                          onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-lg border border-zinc-200 bg-white text-[15px] focus:outline-none focus:ring-2 focus:ring-brand-500/40 focus:border-brand-500 transition-all"
                          placeholder="John Smith"
                        />
                      </div>
                      <div>
                        <label htmlFor="contact-email" className="block text-[13px] font-medium text-zinc-600 mb-1.5">Email Address *</label>
                        <input
                          id="contact-email"
                          type="email"
                          required
                          value={formState.email}
                          onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-lg border border-zinc-200 bg-white text-[15px] focus:outline-none focus:ring-2 focus:ring-brand-500/40 focus:border-brand-500 transition-all"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="contact-phone" className="block text-[13px] font-medium text-zinc-600 mb-1.5">Phone Number *</label>
                        <input
                          id="contact-phone"
                          type="tel"
                          required
                          value={formState.phone}
                          onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-lg border border-zinc-200 bg-white text-[15px] focus:outline-none focus:ring-2 focus:ring-brand-500/40 focus:border-brand-500 transition-all"
                          placeholder="(613) 000-0000"
                        />
                      </div>
                      <div>
                        <label htmlFor="contact-service" className="block text-[13px] font-medium text-zinc-600 mb-1.5">Service Needed</label>
                        <select
                          id="contact-service"
                          value={formState.service}
                          onChange={(e) => setFormState({ ...formState, service: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-lg border border-zinc-200 bg-white text-[15px] focus:outline-none focus:ring-2 focus:ring-brand-500/40 focus:border-brand-500 transition-all"
                        >
                          <option value="">Select a service</option>
                          <option value="residential">Residential Electrical</option>
                          <option value="commercial">Commercial Services</option>
                          <option value="panel">Panel Upgrades</option>
                          <option value="lighting">Lighting Installation</option>
                          <option value="wiring">Wiring & Rewiring</option>
                          <option value="ev">EV Charger Installation</option>
                          <option value="generator">Generator Installation</option>
                          <option value="emergency">Emergency Service</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="contact-message" className="block text-[13px] font-medium text-zinc-600 mb-1.5">Message</label>
                      <textarea
                        id="contact-message"
                        rows={4}
                        value={formState.message}
                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-zinc-200 bg-white text-[15px] focus:outline-none focus:ring-2 focus:ring-brand-500/40 focus:border-brand-500 transition-all resize-none"
                        placeholder="Describe your project or issue..."
                      />
                    </div>

                    <button
                      type="submit"
                      id="contact-submit-btn"
                      className="w-full bg-brand-500 text-white py-3 rounded-lg font-semibold text-[15px] hover:bg-brand-600 transition-colors duration-200"
                    >
                      Send Message
                    </button>

                    <p className="text-center text-[13px] text-zinc-400">
                      We respect your privacy. Your information will never be shared.
                    </p>
                  </form>
                </>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
