import { useState } from 'react';
import { Plus, Minus } from '@phosphor-icons/react';
import { motion, AnimatePresence } from 'motion/react';
import SectionHeader from './ui/SectionHeader';
import { FAQ_DATA } from '../config/siteConfig';

interface FAQProps {
  limit?: number;
}

export default function FAQ({ limit }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const displayFaqs = limit ? FAQ_DATA.items.slice(0, limit) : FAQ_DATA.items;

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-surface-50" id="faq-section">
      <div className="max-w-2xl mx-auto px-5 sm:px-8">
        <SectionHeader
          badge={FAQ_DATA.badge}
          title={FAQ_DATA.title}
          titleAccent={FAQ_DATA.titleAccent}
          subtitle={FAQ_DATA.subtitle}
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
