import { useState } from 'react';
import PageHero from '../components/ui/PageHero';
import Services from '../components/Services';
import CTABanner from '../components/ui/CTABanner';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { CheckCircle, X } from '@phosphor-icons/react';
import SectionHeader from '../components/ui/SectionHeader';

/* ─── Gallery Data ─── */
const categories = ['All', 'Residential', 'Commercial', 'Panel Upgrades', 'Lighting', 'EV Chargers'];

const projects = [
  { src: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=600&h=400&fit=crop", title: "Panel Upgrade - Residential", category: "Panel Upgrades", desc: "200A panel upgrade for a family home" },
  { src: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=400&fit=crop", title: "Commercial Rewiring", category: "Commercial", desc: "Complete electrical rewiring for retail space" },
  { src: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=600&h=400&fit=crop", title: "LED Lighting Install", category: "Lighting", desc: "Modern LED recessed lighting installation" },
  { src: "https://images.unsplash.com/photo-1558449028-b53a39d100fc?w=600&h=400&fit=crop", title: "Kitchen Remodel Wiring", category: "Residential", desc: "Full kitchen electrical for renovation" },
  { src: "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?w=600&h=400&fit=crop", title: "Office Lighting Design", category: "Commercial", desc: "Custom commercial lighting solution" },
  { src: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=600&h=400&fit=crop", title: "EV Charger Installation", category: "EV Chargers", desc: "Level 2 EV charger for home garage" },
  { src: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&h=400&fit=crop", title: "Smart Home Setup", category: "Residential", desc: "Complete smart home electrical integration" },
  { src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop", title: "Office Build-Out", category: "Commercial", desc: "New construction office electrical" },
  { src: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=800&fit=crop", title: "Service Panel Replacement", category: "Panel Upgrades", desc: "Outdated panel replaced with modern unit" },
  { src: "https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=600&h=400&fit=crop", title: "Landscape Lighting", category: "Lighting", desc: "Outdoor landscape lighting design" },
  { src: "https://images.unsplash.com/photo-1558449028-b53a39d100fc?w=600&h=600&fit=crop", title: "Bathroom Remodel", category: "Residential", desc: "Bathroom electrical and exhaust fan install" },
  { src: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=600&h=400&fit=crop", title: "Multi-unit EV Charging", category: "EV Chargers", desc: "EV charging station for condo parking" },
];

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxImage, setLightboxImage] = useState<typeof projects[0] | null>(null);

  const filtered = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory);

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

      {/* ─── Our Recent Work (Gallery Section) ─── */}
      <section className="py-16 sm:py-20 lg:py-24 bg-surface-50" id="gallery-section">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
          <SectionHeader
            badge="Portfolio"
            title="Our Recent"
            titleAccent="Work"
            subtitle="Browse our portfolio of completed electrical projects. Every photo represents quality workmanship and satisfied customers."
          />

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                id={`gallery-filter-${cat.toLowerCase().replace(' ', '-')}`}
                className={`px-4 py-2 rounded-lg font-medium text-[13px] transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-zinc-900 text-white'
                    : 'bg-white text-zinc-600 hover:bg-zinc-100 border border-zinc-200/60'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            <AnimatePresence mode="popLayout">
              {filtered.map((project, index) => (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.3, delay: index * 0.04 }}
                  className="group cursor-pointer"
                  onClick={() => setLightboxImage(project)}
                >
                  <div className="rounded-xl overflow-hidden border border-zinc-200/60 relative aspect-[4/3]">
                    <img
                      src={project.src}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                      <div>
                        <h3 className="text-white font-semibold text-[15px]">{project.title}</h3>
                        <p className="text-white/70 text-[13px]">{project.desc}</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-2.5">
                    <span className="text-[11px] font-medium text-brand-600 bg-brand-500/[0.08] px-2.5 py-1 rounded-md">{project.category}</span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              onClick={() => setLightboxImage(null)}
            />
            <motion.div
              className="relative max-w-3xl w-full"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
            >
              <button
                onClick={() => setLightboxImage(null)}
                className="absolute -top-10 right-0 text-white/60 hover:text-white transition-colors"
                aria-label="Close lightbox"
                id="lightbox-close"
              >
                <X className="w-6 h-6" weight="bold" />
              </button>
              <img
                src={lightboxImage.src}
                alt={lightboxImage.title}
                className="w-full rounded-xl"
              />
              <div className="mt-3 text-center">
                <h3 className="text-white text-lg font-semibold">{lightboxImage.title}</h3>
                <p className="text-white/50 text-sm">{lightboxImage.desc}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Service Guarantees */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
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
