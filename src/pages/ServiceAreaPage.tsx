import PageHero from '../components/ui/PageHero';
import CTABanner from '../components/ui/CTABanner';
import { motion } from 'motion/react';
import { MapPin, CheckCircle } from '@phosphor-icons/react';

export default function ServiceAreaPage() {
  const areas = [
    {
      region: "Central Ottawa",
      cities: ["Downtown Ottawa", "Centretown", "The Glebe", "Old Ottawa South", "Sandy Hill", "Byward Market"]
    },
    {
      region: "East Ottawa",
      cities: ["Orleans", "Gloucester", "Beacon Hill", "Blackburn Hamlet", "Cumberland", "Navan"]
    },
    {
      region: "West Ottawa",
      cities: ["Kanata", "Stittsville", "Barrhaven", "Nepean", "Westboro", "Bell's Corners"]
    },
    {
      region: "South Ottawa",
      cities: ["Riverside South", "Manotick", "Greely", "Metcalfe", "Osgoode", "Richmond"]
    },
  ];

  return (
    <>
      <PageHero
        title="Our Service"
        titleAccent="Area"
        subtitle="We proudly serve the greater Ottawa area and surrounding communities. Check if we cover your neighborhood."
        breadcrumb="Service Area"
      />

      {/* Coverage Map Section */}
      <section className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Map Placeholder */}
            <motion.div
              className="rounded-[2.5rem] overflow-hidden border border-slate-200/50 h-[500px] bg-zinc-100 flex items-center justify-center sticky top-32"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <div className="text-center text-zinc-400">
                <MapPin weight="duotone" className="w-16 h-16 mx-auto mb-4 text-zinc-300" />
                <p className="font-bold text-lg">Service Area Map</p>
                <p className="text-sm max-w-xs mx-auto">Replace with an interactive Google Maps embed showing your service area</p>
              </div>
            </motion.div>

            {/* Area Lists */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter mb-2">Areas We Serve</h2>
                <p className="text-zinc-600 leading-relaxed">
                  Our team of licensed electricians provides fast, reliable service across the greater Ottawa region. If your area isn't listed, give us a call — we may still be able to help.
                </p>
              </div>

              {areas.map((area, areaIndex) => (
                <motion.div
                  key={areaIndex}
                  className="bg-zinc-50 rounded-2xl p-6 border border-slate-200/50"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: areaIndex * 0.1 }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-brand-500/10 flex items-center justify-center">
                      <MapPin weight="fill" className="w-5 h-5 text-brand-600" />
                    </div>
                    <h3 className="text-xl font-bold">{area.region}</h3>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {area.cities.map((city, i) => (
                      <div key={i} className="flex items-center gap-2 text-zinc-600">
                        <CheckCircle weight="fill" className="w-4 h-4 text-brand-500 shrink-0" />
                        <span className="text-sm font-medium">{city}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}

              <div className="bg-brand-50 rounded-2xl p-6 border border-brand-200">
                <p className="text-brand-800 font-medium">
                  Don't see your area? <a href="tel:+16133017913" className="underline font-bold">Call us at (613) 301-7913</a> — we may still service your location.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        title="In Your Area?"
        subtitle="Get a free estimate for your electrical project. We'll send a certified electrician to you."
      />
    </>
  );
}
