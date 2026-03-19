import { motion } from 'motion/react';

export default function Stats() {
  const stats = [
    { value: "1,200+", label: "Water Pumps Repaired" },
    { value: "98%", label: "First-Time Fix Rate" },
    { value: "1,000+", label: "Happy Customers" },
    { value: "7-Day", label: "Service Guarantee" },
  ];

  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:divide-x divide-zinc-200">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center px-2 sm:px-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 text-zinc-900" aria-label={`${stat.value} ${stat.label}`}>
                {stat.value}
              </div>
              <div className="text-zinc-500 text-xs sm:text-sm font-medium uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
