import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function FAQ() {
  const faqs = [
    {
      question: "How quickly can a technician arrive?",
      answer: "Our electrician usually arrives within 30–60 minutes, depending on your location and service availability."
    },
    {
      question: "Are your electricians certified and experienced?",
      answer: "Yes, all our electricians are fully certified, licensed, and have years of experience in handling various electrical issues."
    },
    {
      question: "Do you provide emergency electrical services?",
      answer: "Yes, we offer 24/7 emergency electrical services for urgent issues that need immediate attention."
    },
    {
      question: "How do you determine the service cost?",
      answer: "We provide upfront pricing based on the scope of work after a thorough diagnosis. There are no hidden charges."
    },
    {
      question: "Is there any service warranty?",
      answer: "Yes, we offer a 7-day service guarantee on all our repairs and installations."
    },
    {
      question: "What types of electrical services do you offer?",
      answer: "We offer a wide range of services including wiring, lighting installation, panel upgrades, and emergency repairs."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-8">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-zinc-600 text-base sm:text-lg leading-relaxed">
            Find quick answers to the most common questions about our electrical services, pricing, response time, and warranty.
          </p>
        </motion.div>

        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="border-b border-zinc-200"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <button
                className="w-full flex items-center justify-between py-4 sm:py-5 text-left font-bold text-base sm:text-lg hover:text-amber-600 transition-colors duration-200 focus:outline-none focus:text-amber-600 min-h-[48px] gap-4"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span>{faq.question}</span>
                <motion.div
                  initial={false}
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="shrink-0"
                >
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-amber-500" aria-hidden="true" />
                  ) : (
                    <Plus className="w-5 h-5 text-zinc-400" aria-hidden="true" />
                  )}
                </motion.div>
              </button>
              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    id={`faq-answer-${index}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="pb-4 sm:pb-6 text-zinc-600 text-base leading-relaxed pr-4 sm:pr-12">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
