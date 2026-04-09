import PageHero from '../components/ui/PageHero';
import Testimonials from '../components/Testimonials';
import CTABanner from '../components/ui/CTABanner';
import { Star } from '@phosphor-icons/react';
import { motion } from 'motion/react';

export default function ReviewsPage() {
  return (
    <>
      <PageHero
        title="Customer"
        titleAccent="Reviews"
        subtitle="Don't just take our word for it. See what our customers have to say about their experience with ProElectric."
        breadcrumb="Reviews"
      />

      {/* Review Stats */}
      <section className="py-12 sm:py-16 bg-brand-500 text-white">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 text-center">
            {[
              { value: '4.9', label: 'Average Rating', suffix: '/5' },
              { value: '400+', label: 'Verified Reviews', suffix: '' },
              { value: '98%', label: 'Recommend Us', suffix: '' },
              { value: '5', label: 'Years on Google', suffix: '★' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.4 }}
              >
                <div className="text-3xl sm:text-4xl font-bold mb-1">{stat.value}{stat.suffix}</div>
                <div className="text-white/70 text-sm font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Rating Breakdown */}
      <section className="py-12 sm:py-16 bg-white border-b border-zinc-100">
        <div className="max-w-xl mx-auto px-5 sm:px-8">
          <h3 className="text-xl font-bold mb-6 text-center">Rating Breakdown</h3>
          <div className="space-y-2.5">
            {[
              { stars: 5, percentage: 92, count: 368 },
              { stars: 4, percentage: 6, count: 24 },
              { stars: 3, percentage: 1, count: 5 },
              { stars: 2, percentage: 0.5, count: 2 },
              { stars: 1, percentage: 0.5, count: 1 },
            ].map((rating) => (
              <div key={rating.stars} className="flex items-center gap-3">
                <div className="flex items-center gap-1 w-16 shrink-0">
                  <span className="font-medium text-sm w-3">{rating.stars}</span>
                  <Star weight="fill" className="w-3.5 h-3.5 text-amber-400" />
                </div>
                <div className="flex-1 bg-zinc-100 rounded-full h-2 overflow-hidden">
                  <motion.div
                    className="h-full bg-brand-500 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${rating.percentage}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
                  />
                </div>
                <span className="text-[13px] text-zinc-400 w-10 text-right">{rating.count}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials showAll />

      <CTABanner
        title="Join Our Satisfied Customers"
        subtitle="Experience the difference that quality electrical service makes. Get your free estimate today."
      />
    </>
  );
}
