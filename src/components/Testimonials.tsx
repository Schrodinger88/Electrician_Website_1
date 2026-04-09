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
    <section className="py-16 sm:py-20 lg:py-24 bg-white" id="testimonials-section">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
        <SectionHeader
          badge="Testimonials"
          title="What Our Clients Say"
          subtitle="Hear from satisfied customers who trust us for fast, reliable, and professional electrical services."
        />

        <div className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5`}>
          {allTestimonials.map((testimonial, index) => (
            <motion.article
              key={index}
              className="p-6 sm:p-7 rounded-xl border border-zinc-200/60 bg-white hover:border-zinc-300/80 transition-all duration-300"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: index * 0.06, ease: [0.25, 1, 0.5, 1] }}
            >
              <div className="flex items-center gap-0.5 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} weight="fill" className="w-4 h-4 text-amber-400" />
                ))}
              </div>

              <p className="text-zinc-600 text-[15px] leading-relaxed mb-6">"{testimonial.review}"</p>

              <div className="flex items-center gap-3 pt-4 border-t border-zinc-100">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full object-cover ring-1 ring-zinc-200"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div>
                  <h4 className="font-semibold text-zinc-900 text-[15px]">{testimonial.name}</h4>
                  <p className="text-[13px] text-zinc-400">{testimonial.role}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {!showAll && (
          <motion.div
            className="mt-10 text-center"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Link
              to="/reviews"
              id="view-all-reviews-btn"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-zinc-900 text-white font-semibold text-[14px] hover:bg-zinc-800 transition-colors duration-200"
            >
              View All Reviews
              <span className="text-zinc-400">→</span>
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
}
