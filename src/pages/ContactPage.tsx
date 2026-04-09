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

      <section className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8">
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-8">Contact Information</h2>
              <div className="space-y-6 mb-12">
                {contactInfo.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.a
                      key={index}
                      href={item.href}
                      className="flex items-start gap-4 p-5 rounded-2xl border border-slate-200/50 hover:border-brand-200 hover:bg-brand-50/50 transition-all duration-300 group"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="w-12 h-12 rounded-xl bg-brand-500/10 flex items-center justify-center shrink-0 group-hover:bg-brand-500 transition-all duration-300">
                        <Icon weight="duotone" className="w-6 h-6 text-brand-600 group-hover:text-white transition-colors duration-300" />
                      </div>
                      <div>
                        <p className="text-sm text-zinc-500 font-medium mb-1">{item.label}</p>
                        <p className="text-lg font-bold text-zinc-900">{item.value}</p>
                        <p className="text-sm text-zinc-500">{item.subtitle}</p>
                      </div>
                    </motion.a>
                  );
                })}
              </div>

              {/* Map Placeholder */}
              <div className="rounded-2xl overflow-hidden border border-slate-200/50 h-[250px] bg-zinc-100 flex items-center justify-center">
                <div className="text-center text-zinc-400">
                  <MapPin weight="duotone" className="w-12 h-12 mx-auto mb-3 text-zinc-300" />
                  <p className="font-medium">Google Maps Embed</p>
                  <p className="text-sm">Replace with your Google Maps iframe</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <motion.div
              className="bg-zinc-50 rounded-[2rem] p-8 sm:p-10 border border-slate-200/50"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {submitted ? (
                <div className="flex flex-col items-center justify-center h-full min-h-[400px] text-center">
                  <div className="w-20 h-20 rounded-full bg-brand-500/10 flex items-center justify-center mb-6">
                    <PaperPlaneTilt weight="duotone" className="w-10 h-10 text-brand-500" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Message Sent!</h3>
                  <p className="text-zinc-600 max-w-sm">
                    Thank you for reaching out. We'll get back to you within 30 minutes during business hours.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setFormState({ name: '', email: '', phone: '', service: '', message: '' }); }}
                    className="mt-6 text-brand-600 font-semibold hover:text-brand-700 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <>
                  <h2 className="text-2xl font-bold mb-2">Request a Free Estimate</h2>
                  <p className="text-zinc-500 mb-8">Fill out the form and we'll get back to you shortly.</p>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-zinc-700 mb-2">Full Name *</label>
                        <input
                          id="name"
                          type="text"
                          required
                          value={formState.name}
                          onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-white focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-all"
                          placeholder="John Smith"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-zinc-700 mb-2">Email Address *</label>
                        <input
                          id="email"
                          type="email"
                          required
                          value={formState.email}
                          onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-white focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-all"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-zinc-700 mb-2">Phone Number *</label>
                        <input
                          id="phone"
                          type="tel"
                          required
                          value={formState.phone}
                          onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-white focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-all"
                          placeholder="(613) 000-0000"
                        />
                      </div>
                      <div>
                        <label htmlFor="service" className="block text-sm font-medium text-zinc-700 mb-2">Service Needed</label>
                        <select
                          id="service"
                          value={formState.service}
                          onChange={(e) => setFormState({ ...formState, service: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-white focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-all"
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
                      <label htmlFor="message" className="block text-sm font-medium text-zinc-700 mb-2">Message</label>
                      <textarea
                        id="message"
                        rows={5}
                        value={formState.message}
                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-white focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-all resize-none"
                        placeholder="Describe your project or issue..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-brand-500 text-white py-4 rounded-xl font-bold text-lg hover:bg-brand-600 transition-all duration-300 shadow-lg hover:shadow-brand-500/30"
                    >
                      Send Message
                    </button>

                    <p className="text-center text-sm text-zinc-400">
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
