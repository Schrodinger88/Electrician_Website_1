import { Lightning, House, Buildings, Lightbulb, Wrench, ArrowsClockwise, FireExtinguisher, ChargingStation, DeviceMobile, Gauge } from '@phosphor-icons/react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import SectionHeader from './ui/SectionHeader';

const services = [
  {
    icon: House,
    title: "Residential Electrical",
    description: "Complete home electrical solutions from wiring to smart home integration.",
  },
  {
    icon: Buildings,
    title: "Commercial Services",
    description: "Professional electrical work for offices, retail spaces, and businesses.",
  },
  {
    icon: Gauge,
    title: "Panel Upgrades",
    description: "Modern electrical panel installation and circuit breaker upgrades.",
  },
  {
    icon: Lightning,
    title: "Wiring & Rewiring",
    description: "Safe, code-compliant electrical wiring for new and existing properties.",
  },
  {
    icon: Lightbulb,
    title: "Lighting Installation",
    description: "LED upgrades, recessed lighting, and custom fixture installation.",
  },
  {
    icon: Wrench,
    title: "Repairs & Troubleshooting",
    description: "Fast diagnosis and repair of electrical issues and malfunctions.",
  },
];

interface ServicesProps {
  showAll?: boolean;
}

export default function Services({ showAll = false }: ServicesProps) {
  const allServices = showAll ? [
    ...services,
    { icon: ArrowsClockwise, title: "Electrical Upgrades", description: "Modernize your electrical system for safety and efficiency." },
    { icon: FireExtinguisher, title: "Emergency Service", description: "24/7 rapid response for urgent electrical problems." },
    { icon: ChargingStation, title: "EV Charging Stations", description: "Professional electric vehicle charger installation." },
    { icon: DeviceMobile, title: "Generator Installation", description: "Backup power solutions for uninterrupted electricity." },
  ] : services;

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-surface-50 relative overflow-hidden" id="services-section">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
        <SectionHeader
          badge="Our Expertise"
          title="Comprehensive Electrical"
          titleAccent="Solutions"
          subtitle="From routine maintenance to complex installations, our licensed electricians deliver safe, reliable service for every electrical need."
        />

        {/* Services Grid */}
        <div className={`grid grid-cols-1 sm:grid-cols-2 ${showAll ? 'lg:grid-cols-3 xl:grid-cols-4' : 'lg:grid-cols-3'} gap-4 sm:gap-5`}>
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

        {/* See All Link (only on homepage) */}
        {!showAll && (
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
        )}
      </div>
    </section>
  );
}
