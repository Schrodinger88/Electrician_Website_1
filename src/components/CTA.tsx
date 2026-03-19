import { Phone, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function CTA() {
  return (
    <section id="contact" className="py-12 sm:py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-8">
        <motion.div
          className="bg-[#FFF9EA] rounded-3xl sm:rounded-[3rem] p-8 sm:p-12 md:p-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">Need Electrical Help Right Now?</h2>
          <p className="text-zinc-600 text-base sm:text-lg mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed">
            Book a certified electrician today for fast, safe, and reliable service at your home or office.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 sm:gap-6">
            <motion.button
              className="flex items-center justify-center gap-2 text-zinc-950 px-6 sm:px-8 py-3 sm:py-4 font-medium hover:text-amber-600 active:text-amber-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 rounded-full min-h-[48px] w-full sm:w-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Call now for immediate assistance"
            >
              <Phone className="w-5 h-5" aria-hidden="true" />
              <span className="text-base sm:text-lg">Call Now</span>
            </motion.button>
            <motion.button
              className="flex items-center justify-center gap-2 bg-amber-500 text-zinc-950 px-8 sm:px-10 py-3 sm:py-4 rounded-full font-medium hover:bg-amber-400 active:bg-amber-600 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 min-h-[48px] shadow-lg hover:shadow-xl w-full sm:w-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Book a certified technician online"
            >
              <span className="text-base sm:text-lg">Book a Technician</span>
              <div className="bg-zinc-950 text-white p-1.5 rounded-full">
                <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
              </div>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
