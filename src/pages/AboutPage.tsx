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
      <section className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              className="rounded-[2.5rem] overflow-hidden shadow-2xl"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&h=600&fit=crop"
                alt="Our team of professional electricians"
                className="w-full h-[500px] object-cover"
                loading="lazy"
              />
            </motion.div>

            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-block px-4 py-2 rounded-full bg-brand-500/10 border border-brand-500/20">
                <span className="text-sm text-brand-600 font-semibold">Our Story</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">
                17+ Years of Trusted <span className="text-brand-500">Electrical Service</span>
              </h2>
              <p className="text-zinc-600 text-lg leading-relaxed">
                Founded with a simple mission: provide honest, reliable electrical services at fair prices. What started as a one-man operation has grown into a trusted team of certified professionals serving thousands of residential and commercial clients.
              </p>
              <p className="text-zinc-600 text-lg leading-relaxed">
                Every member of our team is hand-picked for their expertise, professionalism, and commitment to doing the job right the first time. We treat every home and business like our own.
              </p>

              <div className="grid grid-cols-2 gap-6 pt-6">
                {[
                  { label: 'Projects Completed', value: '1,200+' },
                  { label: 'Years in Business', value: '17+' },
                  { label: 'Customer Rating', value: '4.9/5.0' },
                  { label: 'Team Members', value: '12+' },
                ].map((stat, i) => (
                  <div key={i} className="text-center p-4 bg-zinc-50 rounded-2xl">
                    <div className="text-2xl font-bold text-zinc-900">{stat.value}</div>
                    <div className="text-sm text-zinc-500">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-zinc-50">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">Our Core Values</h2>
            <p className="text-zinc-600 text-lg max-w-2xl mx-auto">The principles that guide every project we undertake.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-white rounded-[2rem] p-8 border border-slate-200/50 text-center group hover:shadow-lg transition-all duration-500"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -6 }}
                >
                  <div className="w-14 h-14 rounded-2xl bg-brand-500/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-brand-500 transition-all duration-300">
                    <Icon weight="duotone" className="w-7 h-7 text-brand-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-zinc-600 text-sm leading-relaxed">{value.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">Meet Our Team</h2>
            <p className="text-zinc-600 text-lg max-w-2xl mx-auto">Certified professionals dedicated to delivering excellence on every project.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                className="group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="rounded-[2rem] overflow-hidden mb-5 aspect-[3/4] relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute bottom-4 left-4 right-4 backdrop-blur-md bg-white/10 rounded-xl p-3 border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white text-sm font-medium">{member.experience} experience</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-zinc-900">{member.name}</h3>
                <p className="text-brand-600 font-medium text-sm">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-24 bg-zinc-950 text-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">
            Licenses & <span className="text-brand-400">Certifications</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto mb-12">
            Fully licensed, bonded, and insured. Your safety and peace of mind come first.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
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
                  className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 text-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Icon weight="duotone" className="w-10 h-10 text-brand-400 mx-auto mb-4" />
                  <p className="text-sm font-medium text-zinc-300">{cert.label}</p>
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
