import { CheckCircle } from '@phosphor-icons/react';
import { motion } from 'motion/react';

export default function WhyChooseUs() {
  const reasons = [
    "Our skilled electrician arrives at your location within 30–60 minutes",
    "All our technicians are professionally trained, certified, and experienced",
    "We provide clear pricing before starting any job, so you never face hidden charges",
    "Electrical issues can happen anytime. That's why we offer round-the-clock emergency services"
  ];

  return (
    <section className="py-16 sm:py-20 bg-white" id="why-choose-section">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
        <motion.div
          className="rounded-2xl overflow-hidden order-2 md:order-1"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <img
            src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=2070&auto=format&fit=crop"
            alt="Satisfied electrician showing thumbs up after successful electrical repair"
            className="w-full h-[350px] sm:h-[450px] object-cover rounded-2xl"
            referrerPolicy="no-referrer"
            loading="lazy"
          />
        </motion.div>
        <motion.div
          className="space-y-6 order-1 md:order-2"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold leading-tight tracking-tight">
            Why Choose Our<br />Service?
          </h2>
          <div className="space-y-4">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                className="flex gap-3"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                <CheckCircle weight="fill" className="w-5 h-5 text-brand-500 shrink-0 mt-0.5" />
                <p className="text-zinc-600 text-[15px] leading-relaxed">{reason}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
