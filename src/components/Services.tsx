import { Lightning, House, Buildings, Lightbulb, Wrench, ArrowsClockwise, FireExtinguisher, ChargingStation, DeviceMobile, Gauge } from '@phosphor-icons/react';
import { motion } from 'motion/react';

export default function Services() {
  // Top 10 services based on analysis
  const services = [
    {
      icon: House,
      title: "Residential Electrical",
      description: "Complete home electrical solutions from wiring to smart home integration.",
      size: "large"
    },
    {
      icon: Buildings,
      title: "Commercial Services",
      description: "Professional electrical work for offices, retail spaces, and businesses.",
      size: "large"
    },
    {
      icon: Gauge,
      title: "Panel Upgrades",
      description: "Modern electrical panel installation and circuit breaker upgrades.",
      size: "medium"
    },
    {
      icon: Lightning,
      title: "Wiring & Rewiring",
      description: "Safe, code-compliant electrical wiring for new and existing properties.",
      size: "medium"
    },
    {
      icon: Lightbulb,
      title: "Lighting Installation",
      description: "LED upgrades, recessed lighting, and custom fixture installation.",
      size: "medium"
    },
    {
      icon: Wrench,
      title: "Repairs & Troubleshooting",
      description: "Fast diagnosis and repair of electrical issues and malfunctions.",
      size: "medium"
    },
    {
      icon: ArrowsClockwise,
      title: "Electrical Upgrades",
      description: "Modernize your electrical system for safety and efficiency.",
      size: "small"
    },
    {
      icon: FireExtinguisher,
      title: "Emergency Service",
      description: "24/7 rapid response for urgent electrical problems.",
      size: "small"
    },
    {
      icon: ChargingStation,
      title: "EV Charging Stations",
      description: "Professional electric vehicle charger installation.",
      size: "small"
    },
    {
      icon: DeviceMobile,
      title: "Generator Installation",
      description: "Backup power solutions for uninterrupted electricity.",
      size: "small"
    }
  ];

  return (
    <section id="services" className="py-32 bg-zinc-50 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8">
        {/* Header */}
        <div className="mb-20">
          <motion.div
            className="inline-block px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-sm text-emerald-600 font-semibold tracking-tight">Our Expertise</span>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-end">
            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-none"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Comprehensive Electrical Solutions
            </motion.h2>
            <motion.p
              className="text-zinc-600 text-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              From routine maintenance to complex installations, our licensed electricians deliver safe, reliable service for every electrical need.
            </motion.p>
          </div>
        </div>

        {/* Bento Grid - Asymmetric Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-6 auto-rows-[200px]">
          {services.map((service, index) => {
            const Icon = service.icon;

            // Asymmetric grid spans
            const gridClass =
              service.size === 'large' ? 'md:col-span-2 md:row-span-2' :
              service.size === 'medium' ? 'md:col-span-2 md:row-span-1' :
              'md:col-span-1 md:row-span-1';

            return (
              <motion.article
                key={index}
                className={`${gridClass} bg-white rounded-[2.5rem] p-8 border border-slate-200/50 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.1)] transition-all duration-500 group relative overflow-hidden`}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                  type: "spring",
                  stiffness: 100,
                  damping: 20
                }}
                whileHover={{ y: -8 }}
              >
                {/* Gradient Background on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 to-emerald-500/0 group-hover:from-emerald-500/5 group-hover:to-emerald-500/10 transition-all duration-500 rounded-[2.5rem]" />

                <div className="relative z-10 h-full flex flex-col justify-between">
                  {/* Icon */}
                  <motion.div
                    className="w-14 h-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center group-hover:bg-emerald-500 transition-all duration-300"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <Icon
                      weight="duotone"
                      className="w-7 h-7 text-emerald-600 group-hover:text-white transition-colors duration-300"
                    />
                  </motion.div>

                  {/* Content */}
                  <div>
                    <h3 className="text-xl font-bold text-zinc-900 mb-2 tracking-tight">
                      {service.title}
                    </h3>
                    <p className="text-zinc-600 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-zinc-600 mb-6">Need a service not listed? We've got you covered.</p>
          <motion.button
            className="px-8 py-4 rounded-2xl bg-zinc-900 text-white font-semibold hover:bg-zinc-800 transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            View All Services
          </motion.button>
        </motion.div>
      </div>

      {/* Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />
    </section>
  );
}
