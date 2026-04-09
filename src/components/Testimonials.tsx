import { Star, CaretLeft, CaretRight } from '@phosphor-icons/react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { useState, useEffect, useCallback, useRef } from 'react';
import SectionHeader from './ui/SectionHeader';
import { TESTIMONIALS } from '../config/siteConfig';

/* ─── Single Testimonial Card ─── */
function TestimonialCard({
  testimonial,
  index = 0,
  animate = true,
}: {
  testimonial: typeof TESTIMONIALS.items[0];
  index?: number;
  animate?: boolean;
}) {
  const card = (
    <div className="p-6 sm:p-7 rounded-xl border border-zinc-200/60 bg-white hover:border-zinc-300/80 transition-all duration-300 h-full flex flex-col">
      <div className="flex items-center gap-0.5 mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} weight="fill" className="w-4 h-4 text-amber-400" />
        ))}
      </div>
      <p className="text-zinc-600 text-[15px] leading-relaxed mb-6 flex-1">"{testimonial.review}"</p>
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
    </div>
  );

  if (!animate) return card;

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45, delay: index * 0.06, ease: [0.25, 1, 0.5, 1] }}
    >
      {card}
    </motion.article>
  );
}

/* ─── Homepage Carousel ─── */
function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const visibleCount = 3;
  const totalPages = Math.ceil(TESTIMONIALS.items.length / visibleCount);

  const goToPage = useCallback((page: number) => {
    setCurrentIndex(((page % totalPages) + totalPages) % totalPages);
  }, [totalPages]);

  const next = useCallback(() => goToPage(currentIndex + 1), [currentIndex, goToPage]);
  const prev = useCallback(() => goToPage(currentIndex - 1), [currentIndex, goToPage]);

  useEffect(() => {
    if (isPaused) return;
    intervalRef.current = setInterval(next, 5000);
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [isPaused, next]);

  const startIdx = currentIndex * visibleCount;
  const visibleTestimonials = TESTIMONIALS.items.slice(startIdx, startIdx + visibleCount);

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white" id="testimonials-section">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
        <SectionHeader
          badge={TESTIMONIALS.badge}
          title={TESTIMONIALS.title}
          subtitle={TESTIMONIALS.subtitle}
        />

        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <button
            onClick={prev}
            className="absolute -left-4 sm:-left-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white border border-zinc-200 shadow-md flex items-center justify-center text-zinc-600 hover:text-zinc-900 hover:border-zinc-300 transition-all duration-200 hover:shadow-lg"
            aria-label="Previous testimonials"
            id="testimonial-prev"
          >
            <CaretLeft weight="bold" className="w-4 h-4" />
          </button>
          <button
            onClick={next}
            className="absolute -right-4 sm:-right-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white border border-zinc-200 shadow-md flex items-center justify-center text-zinc-600 hover:text-zinc-900 hover:border-zinc-300 transition-all duration-200 hover:shadow-lg"
            aria-label="Next testimonials"
            id="testimonial-next"
          >
            <CaretRight weight="bold" className="w-4 h-4" />
          </button>

          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5"
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
              >
                {visibleTestimonials.map((testimonial, index) => (
                  <div key={testimonial.name}>
                    <TestimonialCard testimonial={testimonial} index={index} animate={false} />
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => goToPage(i)}
                aria-label={`Go to testimonial page ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === currentIndex ? 'w-8 bg-brand-500' : 'w-2 bg-zinc-200 hover:bg-zinc-300'
                }`}
              />
            ))}
          </div>
        </div>

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
      </div>
    </section>
  );
}

/* ─── Vertical Marquee Column ─── */
function MarqueeColumn({
  items,
  direction = 'up',
  speed = 35,
}: {
  items: typeof TESTIMONIALS.items;
  direction?: 'up' | 'down';
  speed?: number;
}) {
  const [isPaused, setIsPaused] = useState(false);
  const doubled = [...items, ...items];

  return (
    <div
      className="relative overflow-hidden"
      style={{ height: '680px' }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none" />

      <div
        className="flex flex-col gap-4"
        style={{
          animation: `marquee-${direction} ${speed}s linear infinite`,
          animationPlayState: isPaused ? 'paused' : 'running',
        }}
      >
        {doubled.map((testimonial, index) => (
          <div key={`${testimonial.name}-${index}`} className="shrink-0">
            <TestimonialCard testimonial={testimonial} animate={false} />
          </div>
        ))}
      </div>

      <style>{`
        @keyframes marquee-up {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        @keyframes marquee-down {
          0% { transform: translateY(-50%); }
          100% { transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}

/* ─── Full Reviews Marquee ─── */
function TestimonialMarquee() {
  const col1 = TESTIMONIALS.items.filter((_, i) => i % 3 === 0);
  const col2 = TESTIMONIALS.items.filter((_, i) => i % 3 === 1);
  const col3 = TESTIMONIALS.items.filter((_, i) => i % 3 === 2);

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white" id="testimonials-section">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          <MarqueeColumn items={col1} direction="up" speed={30} />
          <div className="hidden sm:block">
            <MarqueeColumn items={col2} direction="down" speed={38} />
          </div>
          <div className="hidden lg:block">
            <MarqueeColumn items={col3} direction="up" speed={34} />
          </div>
        </div>
      </div>
    </section>
  );
}

interface TestimonialsProps {
  showAll?: boolean;
}

export default function Testimonials({ showAll = false }: TestimonialsProps) {
  if (showAll) return <TestimonialMarquee />;
  return <TestimonialsCarousel />;
}
