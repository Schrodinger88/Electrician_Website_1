import PageHero from '../components/ui/PageHero';
import Services from '../components/Services';
import CTABanner from '../components/ui/CTABanner';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { CheckCircle } from '@phosphor-icons/react';

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Our Electrical"
        titleAccent="Services"
        subtitle="From routine repairs to complex installations, we provide a full range of electrical services for residential and commercial properties."
        breadcrumb="Services"
      />

      <Services showAll />

      {/* Process Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">How We Work</h2>
            <p className="text-zinc-500 text-base max-w-xl mx-auto">Our simple 3-step process gets your electrical issues resolved fast.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8 max-w-3xl mx-auto">
            {[
              { step: '01', title: 'Contact Us', desc: 'Call or fill out our form to schedule a visit at your convenience.' },
              { step: '02', title: 'Free Assessment', desc: 'Our certified electrician arrives, inspects the issue, and provides a transparent quote.' },
              { step: '03', title: 'Expert Service', desc: 'We complete the work efficiently, clean up, and ensure your complete satisfaction.' },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.45 }}
              >
                <div className="w-12 h-12 rounded-xl bg-brand-500 text-white flex items-center justify-center text-lg font-bold mx-auto mb-5">
                  {item.step}
                </div>
                <h3 className="text-[17px] font-semibold mb-2">{item.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Guarantees */}
      <section className="py-16 sm:py-20 lg:py-24 bg-surface-50">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-5">
                Our Service <span className="text-brand-500">Guarantee</span>
              </h2>
              <p className="text-zinc-500 text-[15px] leading-relaxed mb-6">
                We stand behind every project with our commitment to quality, safety, and your complete satisfaction.
              </p>
              <div className="space-y-3">
                {[
                  'Upfront, transparent pricing — no hidden fees',
                  'All work performed by licensed, certified electricians',
                  'Comprehensive workmanship warranty on all projects',
                  'Clean, respectful work at your property',
                  '100% satisfaction guaranteed or we make it right',
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-2.5"
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.06, duration: 0.4 }}
                  >
                    <CheckCircle weight="fill" className="w-5 h-5 text-brand-500 shrink-0 mt-0.5" />
                    <p className="text-zinc-600 font-medium text-[15px]">{item}</p>
                  </motion.div>
                ))}
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 mt-7 px-6 py-3 rounded-lg bg-zinc-900 text-white font-semibold text-[14px] hover:bg-zinc-800 transition-colors duration-200"
              >
                Get a Free Estimate
                <span className="text-zinc-400">→</span>
              </Link>
            </div>
            <motion.div
              className="rounded-2xl overflow-hidden"
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&h=600&fit=crop"
                alt="Electrician working on residential panel"
                className="w-full h-[350px] sm:h-[450px] object-cover rounded-2xl"
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <CTABanner
        title="Need an Electrician?"
        subtitle="Get a free, no-obligation quote for your project. We respond within 30 minutes during business hours."
      />
    </>
  );
}
