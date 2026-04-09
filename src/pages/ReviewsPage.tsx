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
      <section className="py-16 bg-brand-500 text-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { value: '4.9', label: 'Average Rating', suffix: '/5' },
              { value: '400+', label: 'Verified Reviews', suffix: '' },
              { value: '98%', label: 'Recommend Us', suffix: '' },
              { value: '5', label: 'Years on Google', suffix: '★' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}{stat.suffix}</div>
                <div className="text-white/80 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Rating Breakdown */}
      <section className="py-16 bg-white border-b border-zinc-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-8">
          <h3 className="text-2xl font-bold mb-8 text-center">Rating Breakdown</h3>
          <div className="space-y-3">
            {[
              { stars: 5, percentage: 92, count: 368 },
              { stars: 4, percentage: 6, count: 24 },
              { stars: 3, percentage: 1, count: 5 },
              { stars: 2, percentage: 0.5, count: 2 },
              { stars: 1, percentage: 0.5, count: 1 },
            ].map((rating) => (
              <div key={rating.stars} className="flex items-center gap-4">
                <div className="flex items-center gap-1 w-24 shrink-0">
                  <span className="font-medium text-sm w-3">{rating.stars}</span>
                  <Star weight="fill" className="w-4 h-4 text-brand-500" />
                </div>
                <div className="flex-1 bg-zinc-100 rounded-full h-3 overflow-hidden">
                  <motion.div
                    className="h-full bg-brand-500 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${rating.percentage}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                  />
                </div>
                <span className="text-sm text-zinc-500 w-12 text-right">{rating.count}</span>
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
