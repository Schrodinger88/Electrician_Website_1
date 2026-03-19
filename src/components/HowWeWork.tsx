import { User, FileText, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

export default function HowWeWork() {
  const steps = [
    {
      icon: <User className="w-6 h-6 text-amber-600" aria-hidden="true" />,
      title: "Contact Us",
      description: "Call or message us anytime and schedule a visit."
    },
    {
      icon: <FileText className="w-6 h-6 text-amber-600" aria-hidden="true" />,
      title: "Technician Visit",
      description: "Our certified electrician arrives at your location promptly"
    },
    {
      icon: <CheckCircle2 className="w-6 h-6 text-amber-600" aria-hidden="true" />,
      title: "Diagnosis & Service",
      description: "We carefully inspect the problem, and provide a solution."
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-8">
        <motion.div
          className="bg-[#FFF9EA] rounded-3xl sm:rounded-[3rem] p-8 sm:p-12 md:p-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4">How We Work</h2>
          <p className="text-zinc-600 text-base sm:text-lg mb-12 sm:mb-16">Our process is simple and quick.</p>

          <div className="grid sm:grid-cols-3 gap-8 sm:gap-12 relative">
            {/* Connecting line */}
            <div className="hidden sm:block absolute top-8 left-[16%] right-[16%] h-[2px] bg-amber-200 border-dashed border-t-2 border-amber-200" aria-hidden="true"></div>

            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="relative z-10 flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.15 }}
              >
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm border border-amber-100 group-hover:shadow-md transition-shadow">
                  {step.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3 text-zinc-900">{step.title}</h3>
                <p className="text-zinc-600 text-base leading-relaxed max-w-xs">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
