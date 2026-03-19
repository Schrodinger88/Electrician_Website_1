import { motion } from 'motion/react';

export default function Testimonials() {
  const testimonials = [
    {
      name: "John Smith",
      review: "Got emergency support even at night. Highly recommended! Arrived very fast and fixed the wiring issue in minutes.",
      avatar: "https://i.pravatar.cc/150?img=11"
    },
    {
      name: "Sarah Johnson",
      review: "Professional and courteous service. They diagnosed the problem quickly and provided a fair quote. Very satisfied!",
      avatar: "https://i.pravatar.cc/150?img=12"
    },
    {
      name: "Michael Davis",
      review: "Best electrical service in town! They upgraded our entire panel system efficiently and cleaned up everything perfectly.",
      avatar: "https://i.pravatar.cc/150?img=13"
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-zinc-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Hear from our satisfied customers who trust us for fast, reliable, and professional electrical services for their homes, offices, and commercial spaces.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={index}
              className="p-6 sm:p-8 rounded-2xl border border-amber-200 bg-white shadow-sm hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <img
                src={testimonial.avatar}
                alt={`${testimonial.name} - satisfied customer`}
                className="w-16 h-16 rounded-full mb-6 object-cover ring-2 ring-amber-100"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <h3 className="font-bold text-lg sm:text-xl mb-4 text-zinc-900">{testimonial.name}</h3>
              <p className="text-zinc-600 leading-relaxed text-sm sm:text-base">
                {testimonial.review}
              </p>
            </motion.article>
          ))}
        </div>

        <div className="flex justify-center gap-2" role="group" aria-label="Testimonial pagination">
          <button className="w-3 h-3 rounded-full bg-amber-500 ring-4 ring-amber-100" aria-label="Page 1" aria-current="true"></button>
          <button className="w-3 h-3 rounded-full bg-zinc-200 hover:bg-zinc-300 transition-colors" aria-label="Page 2"></button>
          <button className="w-3 h-3 rounded-full bg-zinc-200 hover:bg-zinc-300 transition-colors" aria-label="Page 3"></button>
        </div>
      </div>
    </section>
  );
}
