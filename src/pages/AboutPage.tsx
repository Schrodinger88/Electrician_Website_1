import PageHero from '../components/ui/PageHero';
import CTABanner from '../components/ui/CTABanner';
import { motion } from 'motion/react';
import { Shield, Certificate, Users, Clock, Trophy, Target } from '@phosphor-icons/react';

export default function AboutPage() {
  const team = [
    { name: "Mike Richardson", role: "Master Electrician / Owner", image: "https://i.pravatar.cc/300?img=59", experience: "20+ years" },
    { name: "Tom Bradley", role: "Lead Electrician", image: "https://i.pravatar.cc/300?img=60", experience: "15+ years" },
    { name: "Chris Parker", role: "Commercial Specialist", image: "https://i.pravatar.cc/300?img=52", experience: "12+ years" },
    { name: "Alex Rivera", role: "Residential Expert", image: "https://i.pravatar.cc/300?img=53", experience: "10+ years" },
  ];

  const values = [
    { icon: Shield, title: "Safety First", desc: "Every job follows strict safety protocols and code compliance." },
    { icon: Trophy, title: "Quality Work", desc: "We never cut corners. Every installation meets the highest standards." },
    { icon: Target, title: "Reliability", desc: "On time, every time. We respect your schedule and property." },
    { icon: Users, title: "Customer Focus", desc: "Clear communication, fair pricing, and your satisfaction guaranteed." },
  ];

  return (
    <>
      <PageHero
        title="About"
        titleAccent="ProElectric"
        subtitle="A family-owned electrical company built on trust, quality workmanship, and an unwavering commitment to customer satisfaction."
        breadcrumb="About"
      />

      {/* Story Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <motion.div
              className="rounded-2xl overflow-hidden"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&h=600&fit=crop"
                alt="Our team of professional electricians"
                className="w-full h-[350px] sm:h-[450px] object-cover rounded-2xl"
                loading="lazy"
              />
            </motion.div>

            <motion.div
              className="space-y-5"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-block px-3 py-1.5 rounded-full bg-brand-500/[0.08] border border-brand-500/[0.12]">
                <span className="text-[13px] text-brand-600 font-semibold">Our Story</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                17+ Years of Trusted <span className="text-brand-500">Electrical Service</span>
              </h2>
              <p className="text-zinc-500 text-[15px] leading-relaxed">
                Founded with a simple mission: provide honest, reliable electrical services at fair prices. What started as a one-man operation has grown into a trusted team of certified professionals serving thousands of residential and commercial clients.
              </p>
              <p className="text-zinc-500 text-[15px] leading-relaxed">
                Every member of our team is hand-picked for their expertise, professionalism, and commitment to doing the job right the first time. We treat every home and business like our own.
              </p>

              <div className="grid grid-cols-2 gap-3 pt-4">
                {[
                  { label: 'Projects Completed', value: '1,200+' },
                  { label: 'Years in Business', value: '17+' },
                  { label: 'Customer Rating', value: '4.9/5.0' },
                  { label: 'Team Members', value: '12+' },
                ].map((stat, i) => (
                  <div key={i} className="text-center p-3.5 bg-surface-50 rounded-xl border border-zinc-200/60">
                    <div className="text-xl font-bold text-zinc-900">{stat.value}</div>
                    <div className="text-[13px] text-zinc-500">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 sm:py-20 lg:py-24 bg-surface-50">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">Our Core Values</h2>
            <p className="text-zinc-500 text-base max-w-xl mx-auto">The principles that guide every project we undertake.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl p-6 sm:p-7 border border-zinc-200/60 text-center group hover:border-zinc-300/80 transition-all duration-300"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08, duration: 0.45 }}
                  whileHover={{ y: -3 }}
                >
                  <div className="w-11 h-11 rounded-lg bg-brand-500/[0.08] flex items-center justify-center mx-auto mb-5 group-hover:bg-brand-500 transition-colors duration-250">
                    <Icon weight="duotone" className="w-5 h-5 text-brand-600 group-hover:text-white transition-colors duration-250" />
                  </div>
                  <h3 className="text-[17px] font-semibold mb-2 tracking-tight">{value.title}</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">{value.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">Meet Our Team</h2>
            <p className="text-zinc-500 text-base max-w-xl mx-auto">Certified professionals dedicated to delivering excellence on every project.</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {team.map((member, index) => (
              <motion.div
                key={index}
                className="group"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.45 }}
              >
                <div className="rounded-xl overflow-hidden mb-4 aspect-[3/4] relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute bottom-3 left-3 right-3 backdrop-blur-md bg-black/30 rounded-lg p-2.5 border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white text-[13px] font-medium">{member.experience} experience</span>
                  </div>
                </div>
                <h3 className="text-[15px] sm:text-[17px] font-semibold text-zinc-900">{member.name}</h3>
                <p className="text-brand-600 font-medium text-[13px]">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 sm:py-20 lg:py-24 bg-zinc-950 text-white">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Licenses & <span className="text-brand-400">Certifications</span>
          </h2>
          <p className="text-zinc-400 text-base max-w-xl mx-auto mb-10">
            Fully licensed, bonded, and insured. Your safety and peace of mind come first.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-3xl mx-auto">
            {[
              { icon: Certificate, label: 'Master Electrician License' },
              { icon: Shield, label: 'Fully Insured & Bonded' },
              { icon: Certificate, label: 'ESA Certified' },
              { icon: Clock, label: '24/7 Emergency Licensed' },
            ].map((cert, index) => {
              const Icon = cert.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-white/[0.04] border border-white/[0.06] rounded-xl p-5 sm:p-6 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08, duration: 0.45 }}
                >
                  <Icon weight="duotone" className="w-8 h-8 text-brand-400 mx-auto mb-3" />
                  <p className="text-[13px] font-medium text-zinc-300">{cert.label}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <CTABanner
        title="Work With the Best"
        subtitle="Join thousands of satisfied customers. Get your free estimate today."
      />
    </>
  );
}
