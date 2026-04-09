import { useState } from 'react';
import PageHero from '../components/ui/PageHero';
import CTABanner from '../components/ui/CTABanner';
import { motion, AnimatePresence } from 'motion/react';
import { X } from '@phosphor-icons/react';

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

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxImage, setLightboxImage] = useState<typeof projects[0] | null>(null);

  const filtered = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <>
      <PageHero
        title="Our Work"
        titleAccent="Gallery"
        subtitle="Browse our portfolio of completed electrical projects. Every photo represents quality workmanship and satisfied customers."
        breadcrumb="Gallery"
      />

      <section className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-xl font-medium text-sm transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-brand-500 text-white shadow-lg shadow-brand-500/30'
                    : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filtered.map((project, index) => (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="group cursor-pointer"
                  onClick={() => setLightboxImage(project)}
                >
                  <div className="rounded-2xl overflow-hidden border border-slate-200/50 relative aspect-[4/3]">
                    <img
                      src={project.src}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <div>
                        <h3 className="text-white font-bold text-lg">{project.title}</h3>
                        <p className="text-white/80 text-sm">{project.desc}</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-3">
                    <span className="text-xs font-medium text-brand-600 bg-brand-50 px-3 py-1 rounded-full">{project.category}</span>
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
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              onClick={() => setLightboxImage(null)}
            />
            <motion.div
              className="relative max-w-4xl w-full"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
              <button
                onClick={() => setLightboxImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-brand-400 transition-colors"
                aria-label="Close lightbox"
              >
                <X className="w-8 h-8" weight="bold" />
              </button>
              <img
                src={lightboxImage.src}
                alt={lightboxImage.title}
                className="w-full rounded-2xl shadow-2xl"
              />
              <div className="mt-4 text-center">
                <h3 className="text-white text-xl font-bold">{lightboxImage.title}</h3>
                <p className="text-white/60">{lightboxImage.desc}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <CTABanner
        title="Like What You See?"
        subtitle="Let us bring the same quality and attention to detail to your project."
      />
    </>
  );
}
