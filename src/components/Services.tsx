import { Lightning, House, Buildings, Lightbulb, Wrench, ArrowsClockwise, FireExtinguisher, ChargingStation, DeviceMobile, Gauge } from '@phosphor-icons/react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import SectionHeader from './ui/SectionHeader';

const services = [
  {
    icon: House,
    title: "Residential Electrical",
    description: "Complete home electrical solutions from wiring to smart home integration.",
    image: "https://images.unsplash.com/photo-1558449028-b53a39d100fc?w=800&h=600&fit=crop",
    features: ["Full home rewiring", "Smart home setup", "Outlet installation", "Code compliance"],
  },
  {
    icon: Buildings,
    title: "Commercial Services",
    description: "Professional electrical work for offices, retail spaces, and businesses.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
    features: ["Office build-outs", "Retail lighting", "Data cabling", "Code inspections"],
  },
  {
    icon: Gauge,
    title: "Panel Upgrades",
    description: "Modern electrical panel installation and circuit breaker upgrades.",
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&h=600&fit=crop",
    features: ["200A upgrades", "Circuit breakers", "Sub-panels", "Load balancing"],
  },
  {
    icon: Lightning,
    title: "Wiring & Rewiring",
    description: "Safe, code-compliant electrical wiring for new and existing properties.",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&h=600&fit=crop",
    features: ["New construction", "Knob & tube replacement", "Aluminum to copper", "Dedicated circuits"],
  },
  {
    icon: Lightbulb,
    title: "Lighting Installation",
    description: "LED upgrades, recessed lighting, and custom fixture installation.",
    image: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=800&h=600&fit=crop",
    features: ["Recessed lighting", "LED conversions", "Landscape lighting", "Dimmer systems"],
  },
  {
    icon: Wrench,
    title: "Repairs & Troubleshooting",
    description: "Fast diagnosis and repair of electrical issues and malfunctions.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&h=600&fit=crop",
    features: ["Fault diagnosis", "Outlet repair", "Breaker issues", "Flickering lights"],
  },
];

const additionalServices = [
  { icon: ArrowsClockwise, title: "Electrical Upgrades", description: "Modernize your electrical system for safety and efficiency." },
  { icon: FireExtinguisher, title: "Emergency Service", description: "24/7 rapid response for urgent electrical problems." },
  { icon: ChargingStation, title: "EV Charging Stations", description: "Professional electric vehicle charger installation." },
  { icon: DeviceMobile, title: "Generator Installation", description: "Backup power solutions for uninterrupted electricity." },
];

interface ServicesProps {
  showAll?: boolean;
}

/* ─── Interactive Tabbed Layout (Homepage) ─── */
function ServicesTabbed() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeService = services[activeIndex];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-surface-50 relative overflow-hidden" id="services-section">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
        <SectionHeader
          badge="Our Expertise"
          title="Comprehensive Electrical"
          titleAccent="Solutions"
          subtitle="From routine maintenance to complex installations, our licensed electricians deliver safe, reliable service for every electrical need."
        />

        {/* Desktop: Side-by-side layout */}
        <div className="hidden lg:grid lg:grid-cols-[1fr_1.3fr] gap-8 lg:gap-12 items-start">
          {/* Left: Service List */}
          <div className="space-y-1.5">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isActive = index === activeIndex;

              return (
                <motion.button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-full flex items-center gap-4 p-4 sm:p-5 rounded-xl text-left transition-all duration-300 group relative ${
                    isActive
                      ? 'bg-white border border-brand-200 shadow-sm'
                      : 'bg-transparent border border-transparent hover:bg-white/60 hover:border-zinc-200/60'
                  }`}
                  whileHover={{ x: isActive ? 0 : 4 }}
                  id={`service-tab-${index}`}
                >
                  {/* Active indicator */}
                  {isActive && (
                    <motion.div
                      className="absolute left-0 top-3 bottom-3 w-[3px] bg-brand-500 rounded-full"
                      layoutId="activeServiceIndicator"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}

                  <div
                    className={`w-11 h-11 rounded-lg flex items-center justify-center shrink-0 transition-colors duration-250 ${
                      isActive
                        ? 'bg-brand-500 text-white'
                        : 'bg-brand-500/[0.08] text-brand-600 group-hover:bg-brand-500/[0.12]'
                    }`}
                  >
                    <Icon weight="duotone" className="w-5 h-5" />
                  </div>

                  <div className="min-w-0">
                    <h3 className={`text-[16px] font-semibold tracking-tight transition-colors ${
                      isActive ? 'text-zinc-900' : 'text-zinc-700'
                    }`}>
                      {service.title}
                    </h3>
                    <p className={`text-[13px] leading-relaxed mt-0.5 transition-colors ${
                      isActive ? 'text-zinc-500' : 'text-zinc-400'
                    }`}>
                      {service.description}
                    </p>
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* Right: Image + Details */}
          <div className="sticky top-28">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
                className="rounded-2xl overflow-hidden border border-zinc-200/60 bg-white"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={activeService.image}
                    alt={activeService.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5">
                    <h3 className="text-white text-xl font-bold mb-1">{activeService.title}</h3>
                    <p className="text-white/70 text-sm">{activeService.description}</p>
                  </div>
                </div>

                {/* Features */}
                <div className="p-5 sm:p-6">
                  <p className="text-[13px] text-zinc-400 font-medium uppercase tracking-wider mb-3">What's included</p>
                  <div className="grid grid-cols-2 gap-2.5">
                    {activeService.features.map((feature, i) => (
                      <motion.div
                        key={feature}
                        className="flex items-center gap-2 text-zinc-600"
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.06, duration: 0.3 }}
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-500 shrink-0" />
                        <span className="text-[14px] font-medium">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile: Accordion-style stacked layout */}
        <div className="lg:hidden space-y-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isOpen = index === activeIndex;

            return (
              <motion.div
                key={index}
                className={`bg-white rounded-xl border overflow-hidden transition-all duration-300 ${
                  isOpen ? 'border-brand-200 shadow-sm' : 'border-zinc-200/60'
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <button
                  onClick={() => setActiveIndex(index)}
                  className="w-full flex items-center gap-3.5 p-5 text-left"
                >
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-colors duration-250 ${
                    isOpen ? 'bg-brand-500 text-white' : 'bg-brand-500/[0.08] text-brand-600'
                  }`}>
                    <Icon weight="duotone" className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-[16px] font-semibold text-zinc-900 tracking-tight">{service.title}</h3>
                    <p className="text-[13px] text-zinc-400 mt-0.5">{service.description}</p>
                  </div>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="text-zinc-400 shrink-0"
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="w-4 h-4">
                      <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5">
                        <div className="rounded-xl overflow-hidden mb-4 aspect-[16/10]">
                          <img
                            src={service.image}
                            alt={service.title}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          {service.features.map((feature) => (
                            <div key={feature} className="flex items-center gap-2 text-zinc-600">
                              <div className="w-1.5 h-1.5 rounded-full bg-brand-500 shrink-0" />
                              <span className="text-[13px] font-medium">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          className="mt-10 text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Link
            to="/services"
            id="view-all-services-btn"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-zinc-900 text-white font-semibold text-[14px] hover:bg-zinc-800 transition-colors duration-200"
          >
            View All Services
            <span className="text-zinc-400">→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── Full Grid Layout (Services Page) ─── */
function ServicesGrid() {
  const allServices = [
    ...services.map(s => ({ icon: s.icon, title: s.title, description: s.description })),
    ...additionalServices,
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-surface-50 relative overflow-hidden" id="services-section">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
        <SectionHeader
          badge="Our Expertise"
          title="Comprehensive Electrical"
          titleAccent="Solutions"
          subtitle="From routine maintenance to complex installations, our licensed electricians deliver safe, reliable service for every electrical need."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
          {allServices.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={index}
                className="bg-white rounded-xl p-6 sm:p-7 border border-zinc-200/60 hover:border-zinc-300/80 transition-all duration-300 group cursor-default"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.45, delay: index * 0.06, ease: [0.25, 1, 0.5, 1] }}
                whileHover={{ y: -3 }}
              >
                <div className="h-full flex flex-col">
                  <div
                    className="w-11 h-11 rounded-lg bg-brand-500/[0.08] flex items-center justify-center mb-5 group-hover:bg-brand-500 transition-colors duration-250"
                  >
                    <Icon
                      weight="duotone"
                      className="w-5 h-5 text-brand-600 group-hover:text-white transition-colors duration-250"
                    />
                  </div>

                  <h3 className="text-[17px] font-semibold text-zinc-900 mb-2 tracking-tight">{service.title}</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">{service.description}</p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default function Services({ showAll = false }: ServicesProps) {
  if (showAll) return <ServicesGrid />;
  return <ServicesTabbed />;
}
