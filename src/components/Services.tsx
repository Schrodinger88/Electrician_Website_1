import { Lightning, House, Buildings, Lightbulb, Wrench, ArrowsClockwise, FireExtinguisher, ChargingStation, DeviceMobile, Gauge } from '@phosphor-icons/react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import SectionHeader from './ui/SectionHeader';

const services = [
  {
    icon: House,
    title: "Residential Electrical",
    description: "Complete home electrical solutions from wiring to smart home integration.",
    size: "large" as const
  },
  {
    icon: Buildings,
    title: "Commercial Services",
    description: "Professional electrical work for offices, retail spaces, and businesses.",
    size: "large" as const
  },
  {
    icon: Gauge,
    title: "Panel Upgrades",
    description: "Modern electrical panel installation and circuit breaker upgrades.",
    size: "medium" as const
  },
  {
    icon: Lightning,
    title: "Wiring & Rewiring",
    description: "Safe, code-compliant electrical wiring for new and existing properties.",
    size: "medium" as const
  },
  {
    icon: Lightbulb,
    title: "Lighting Installation",
    description: "LED upgrades, recessed lighting, and custom fixture installation.",
    size: "medium" as const
  },
  {
    icon: Wrench,
    title: "Repairs & Troubleshooting",
    description: "Fast diagnosis and repair of electrical issues and malfunctions.",
    size: "medium" as const
  },
];

interface ServicesProps {
  showAll?: boolean;
}

export default function Services({ showAll = false }: ServicesProps) {
  const allServices = showAll ? [
    ...services,
    { icon: ArrowsClockwise, title: "Electrical Upgrades", description: "Modernize your electrical system for safety and efficiency.", size: "small" as const },
    { icon: FireExtinguisher, title: "Emergency Service", description: "24/7 rapid response for urgent electrical problems.", size: "small" as const },
    { icon: ChargingStation, title: "EV Charging Stations", description: "Professional electric vehicle charger installation.", size: "small" as const },
    { icon: DeviceMobile, title: "Generator Installation", description: "Backup power solutions for uninterrupted electricity.", size: "small" as const },
  ] : services;

  return (
    <section className="py-24 sm:py-32 bg-zinc-50 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8">
        <SectionHeader
          badge="Our Expertise"
          title="Comprehensive Electrical"
          titleAccent="Solutions"
          subtitle="From routine maintenance to complex installations, our licensed electricians deliver safe, reliable service for every electrical need."
        />

        {/* Services Grid */}
        <div className={`grid grid-cols-1 sm:grid-cols-2 ${showAll ? 'lg:grid-cols-3 xl:grid-cols-4' : 'lg:grid-cols-3'} gap-6`}>
          {allServices.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={index}
                className="bg-white rounded-[2rem] p-8 border border-slate-200/50 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.1)] transition-all duration-500 group relative overflow-hidden"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -6 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-brand-500/0 to-brand-500/0 group-hover:from-brand-500/5 group-hover:to-brand-500/10 transition-all duration-500 rounded-[2rem]" />

                <div className="relative z-10 h-full flex flex-col">
                  <motion.div
                    className="w-14 h-14 rounded-2xl bg-brand-500/10 flex items-center justify-center mb-6 group-hover:bg-brand-500 transition-all duration-300"
                  >
                    <Icon
                      weight="duotone"
                      className="w-7 h-7 text-brand-600 group-hover:text-white transition-colors duration-300"
                    />
                  </motion.div>

                  <h3 className="text-xl font-bold text-zinc-900 mb-2 tracking-tight">{service.title}</h3>
                  <p className="text-zinc-600 text-sm leading-relaxed">{service.description}</p>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* See All Link (only on homepage) */}
        {!showAll && (
          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-zinc-900 text-white font-semibold hover:bg-zinc-800 transition-all duration-300"
            >
              View All Services
              <span>→</span>
            </Link>
          </motion.div>
        )}
      </div>

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-500/5 rounded-full blur-[120px] pointer-events-none" />
    </section>
  );
}
