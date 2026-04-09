import PageHero from '../components/ui/PageHero';
import Testimonials from '../components/Testimonials';
import CTABanner from '../components/ui/CTABanner';
import { Star } from '@phosphor-icons/react';
import { motion } from 'motion/react';
import { REVIEWS_PAGE } from '../config/siteConfig';

export default function ReviewsPage() {
  return (
    <>
      <PageHero
        title={REVIEWS_PAGE.hero.title}
        titleAccent={REVIEWS_PAGE.hero.titleAccent}
        subtitle={REVIEWS_PAGE.hero.subtitle}
        breadcrumb={REVIEWS_PAGE.hero.breadcrumb}
      />

      <section className="py-12 sm:py-16 bg-brand-500 text-white">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 text-center">
            {REVIEWS_PAGE.stats.map((stat, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08, duration: 0.4 }}>
                <div className="text-3xl sm:text-4xl font-bold mb-1">{stat.value}{stat.suffix}</div>
                <div className="text-white/70 text-sm font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-white border-b border-zinc-100">
        <div className="max-w-xl mx-auto px-5 sm:px-8">
          <h3 className="text-xl font-bold mb-6 text-center">Rating Breakdown</h3>
          <div className="space-y-2.5">
            {REVIEWS_PAGE.ratingBreakdown.map((rating) => (
              <div key={rating.stars} className="flex items-center gap-3">
                <div className="flex items-center gap-1 w-16 shrink-0">
                  <span className="font-medium text-sm w-3">{rating.stars}</span>
                  <Star weight="fill" className="w-3.5 h-3.5 text-amber-400" />
                </div>
                <div className="flex-1 bg-zinc-100 rounded-full h-2 overflow-hidden">
                  <motion.div className="h-full bg-brand-500 rounded-full" initial={{ width: 0 }} whileInView={{ width: `${rating.percentage}%` }} viewport={{ once: true }} transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }} />
                </div>
                <span className="text-[13px] text-zinc-400 w-10 text-right">{rating.count}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials showAll />

      <CTABanner title={REVIEWS_PAGE.cta.title} subtitle={REVIEWS_PAGE.cta.subtitle} />
    </>
  );
}
