import { useState } from 'react';
import { Plus, Minus } from '@phosphor-icons/react';
import { motion, AnimatePresence } from 'motion/react';
import SectionHeader from './ui/SectionHeader';

const faqs = [
  {
    question: "How quickly can a technician arrive?",
    answer: "Our electrician usually arrives within 30-60 minutes, depending on your location and service availability."
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
    answer: "Yes, we offer a comprehensive service guarantee on all our repairs and installations."
  },
  {
    question: "What types of electrical services do you offer?",
    answer: "We offer a wide range of services including wiring, lighting installation, panel upgrades, EV charger installation, generator installation, and emergency repairs for both residential and commercial properties."
  },
  {
    question: "Do you offer free estimates?",
    answer: "Yes, we provide free, no-obligation estimates for all residential and commercial electrical projects. Contact us to schedule yours."
  },
  {
    question: "What areas do you serve?",
    answer: "We serve the greater metro area and surrounding communities. Visit our Service Area page for a complete list of locations we cover."
  }
];

interface FAQProps {
  limit?: number;
}

export default function FAQ({ limit }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const displayFaqs = limit ? faqs.slice(0, limit) : faqs;

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-surface-50" id="faq-section">
      <div className="max-w-2xl mx-auto px-5 sm:px-8">
        <SectionHeader
          badge="FAQ"
          title="Frequently Asked"
          titleAccent="Questions"
          subtitle="Find quick answers to the most common questions about our electrical services."
        />

        <div className="space-y-2">
          {displayFaqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl border border-zinc-200/60 overflow-hidden"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{ duration: 0.35, delay: index * 0.04 }}
            >
              <button
                className="w-full flex items-center justify-between p-5 sm:p-6 text-left font-semibold text-[15px] sm:text-base hover:text-brand-600 transition-colors duration-200 gap-4"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
                id={`faq-toggle-${index}`}
              >
                <span>{faq.question}</span>
                <motion.div
                  initial={false}
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.25 }}
                  className="shrink-0"
                >
                  {openIndex === index ? (
                    <Minus className="w-4 h-4 text-brand-500" />
                  ) : (
                    <Plus className="w-4 h-4 text-zinc-400" />
                  )}
                </motion.div>
              </button>
              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: [0.25, 1, 0.5, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 sm:px-6 pb-5 sm:pb-6 text-zinc-500 text-[15px] leading-relaxed">
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
