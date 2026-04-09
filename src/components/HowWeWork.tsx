import { Phone, FileText, CheckCircle } from '@phosphor-icons/react';
import { motion } from 'motion/react';

export default function HowWeWork() {
  const steps = [
    {
      icon: Phone,
      step: '01',
      title: "Contact Us",
      description: "Call or message us anytime and schedule a visit at your convenience."
    },
    {
      icon: FileText,
      step: '02',
      title: "Technician Visit",
      description: "Our certified electrician arrives at your location promptly."
    },
    {
      icon: CheckCircle,
      step: '03',
      title: "Diagnosis & Service",
      description: "We carefully inspect the problem and provide a solution."
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-white" id="how-we-work-section">
      <div className="max-w-[960px] mx-auto px-5 sm:px-8">
        <motion.div
          className="bg-surface-50 rounded-2xl p-8 sm:p-12 text-center border border-zinc-200/60"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-2 tracking-tight">How We Work</h2>
          <p className="text-zinc-500 text-base mb-10 sm:mb-12">Our process is simple and quick.</p>

          <div className="grid sm:grid-cols-3 gap-8 sm:gap-10 relative">
            {/* Connecting line */}
            <div className="hidden sm:block absolute top-6 left-[16%] right-[16%] h-px bg-zinc-200" aria-hidden="true" />

            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  className="relative z-10 flex flex-col items-center text-center"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.12, ease: [0.25, 1, 0.5, 1] }}
                >
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-4 border border-zinc-200/80 shadow-sm">
                    <Icon weight="duotone" className="w-5 h-5 text-brand-600" />
                  </div>
                  <h3 className="text-[17px] font-semibold mb-2 text-zinc-900">{step.title}</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed max-w-[240px]">{step.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
