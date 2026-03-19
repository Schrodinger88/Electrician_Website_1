import { CheckSquare } from 'lucide-react';
import { motion } from 'motion/react';

export default function WhyChooseUs() {
  const reasons = [
    "Our skilled electrician arrives at your location within 30–60 minutes",
    "All our technicians are professionally trained, certified, and experienced",
    "We provide clear pricing before starting any job, so you never face hidden charges",
    "Electrical issues can happen anytime. That's why we offer round-the-clock emergency services"
  ];

  return (
    <section id="about" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
        <motion.div
          className="rounded-3xl overflow-hidden shadow-xl order-2 md:order-1"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <img
            src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=2070&auto=format&fit=crop"
            alt="Satisfied electrician showing thumbs up after successful electrical repair"
            className="w-full h-[400px] sm:h-[500px] object-cover"
            referrerPolicy="no-referrer"
            loading="lazy"
          />
        </motion.div>
        <motion.div
          className="space-y-6 sm:space-y-8 order-1 md:order-2"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Why Choose Our<br />Service?
          </h2>
          <div className="space-y-5 sm:space-y-6">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                className="flex gap-3 sm:gap-4"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <CheckSquare className="w-6 h-6 text-amber-500 shrink-0 mt-0.5" aria-hidden="true" />
                <p className="text-zinc-600 text-base sm:text-lg leading-relaxed">{reason}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
