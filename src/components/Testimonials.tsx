import { Star } from '@phosphor-icons/react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import SectionHeader from './ui/SectionHeader';

const testimonials = [
  {
    name: "John Smith",
    role: "Homeowner",
    review: "Got emergency support even at night. Highly recommended! Arrived very fast and fixed the wiring issue in minutes.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?img=11"
  },
  {
    name: "Sarah Johnson",
    role: "Business Owner",
    review: "Professional and courteous service. They diagnosed the problem quickly and provided a fair quote. Very satisfied!",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?img=12"
  },
  {
    name: "Michael Davis",
    role: "Property Manager",
    review: "Best electrical service in town! They upgraded our entire panel system efficiently and cleaned up everything perfectly.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?img=13"
  }
];

interface TestimonialsProps {
  showAll?: boolean;
}

export default function Testimonials({ showAll = false }: TestimonialsProps) {
  const allTestimonials = showAll ? [
    ...testimonials,
    { name: "Emily Wilson", role: "Restaurant Owner", review: "They rewired our entire kitchen during off-hours so we didn't lose any business. Incredible professionalism and attention to detail.", rating: 5, avatar: "https://i.pravatar.cc/150?img=5" },
    { name: "Robert Chen", role: "Homeowner", review: "Had a panel upgrade done and couldn't be happier. The team was clean, efficient, and explained everything clearly. Fair pricing too.", rating: 5, avatar: "https://i.pravatar.cc/150?img=8" },
    { name: "Lisa Martinez", role: "Office Manager", review: "We've used them for all our office electrical needs. Consistent quality, always on time, and they stand behind their work.", rating: 5, avatar: "https://i.pravatar.cc/150?img=9" },
    { name: "David Thompson", role: "Homeowner", review: "They installed EV chargers at our property. Quick, clean work with a great warranty. Already recommended them to neighbors.", rating: 5, avatar: "https://i.pravatar.cc/150?img=14" },
    { name: "Amanda Foster", role: "Real Estate Agent", review: "I refer all my clients to ProElectric for inspections. They're thorough, honest, and always deliver on time.", rating: 5, avatar: "https://i.pravatar.cc/150?img=16" },
    { name: "James Wright", role: "Contractor", review: "As a general contractor, I need reliable subs. ProElectric is my go-to for every project. Consistent quality and fair pricing.", rating: 5, avatar: "https://i.pravatar.cc/150?img=15" },
  ] : testimonials;

  return (
    <section className="py-24 sm:py-32 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8">
        <SectionHeader
          badge="Testimonials"
          title="What Our Clients Say"
          subtitle="Hear from satisfied customers who trust us for fast, reliable, and professional electrical services."
        />

        <div className={`grid sm:grid-cols-2 ${showAll ? 'lg:grid-cols-3' : 'lg:grid-cols-3'} gap-6`}>
          {allTestimonials.map((testimonial, index) => (
            <motion.article
              key={index}
              className="p-8 rounded-[2rem] border border-slate-200/50 bg-white shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.1)] transition-all duration-500"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} weight="fill" className="w-4 h-4 text-brand-500" />
                ))}
              </div>

              <p className="text-zinc-600 leading-relaxed mb-6">"{testimonial.review}"</p>

              <div className="flex items-center gap-3 pt-4 border-t border-zinc-100">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-brand-100"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div>
                  <h4 className="font-bold text-zinc-900">{testimonial.name}</h4>
                  <p className="text-sm text-zinc-500">{testimonial.role}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {!showAll && (
          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Link
              to="/reviews"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-zinc-900 text-white font-semibold hover:bg-zinc-800 transition-all duration-300"
            >
              View All Reviews
              <span>→</span>
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
}
