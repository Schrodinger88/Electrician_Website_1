import PageHero from '../components/ui/PageHero';
import CTABanner from '../components/ui/CTABanner';
import { motion } from 'motion/react';
import { MapPin, CheckCircle } from '@phosphor-icons/react';
import { BRAND, SERVICE_AREA } from '../config/siteConfig';

export default function ServiceAreaPage() {
  return (
    <>
      <PageHero
        title={SERVICE_AREA.hero.title}
        titleAccent={SERVICE_AREA.hero.titleAccent}
        subtitle={SERVICE_AREA.hero.subtitle}
        breadcrumb={SERVICE_AREA.hero.breadcrumb}
      />

      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <motion.div
              className="rounded-2xl overflow-hidden border border-zinc-200/60 h-[350px] sm:h-[450px] bg-surface-50 flex items-center justify-center sticky top-28"
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <div className="text-center text-zinc-400">
                <MapPin weight="duotone" className="w-12 h-12 mx-auto mb-3 text-zinc-300" />
                <p className="font-semibold text-base">Service Area Map</p>
                <p className="text-[13px] max-w-[240px] mx-auto">Replace with an interactive Google Maps embed showing your service area</p>
              </div>
            </motion.div>

            <div className="space-y-4">
              <div className="mb-2">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-2">Areas We Serve</h2>
                <p className="text-zinc-500 text-[15px] leading-relaxed">{SERVICE_AREA.description}</p>
              </div>

              {SERVICE_AREA.areas.map((area, areaIndex) => (
                <motion.div
                  key={areaIndex}
                  className="bg-surface-50 rounded-xl p-5 border border-zinc-200/60"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: areaIndex * 0.08, duration: 0.4 }}
                >
                  <div className="flex items-center gap-2.5 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-brand-500/[0.08] flex items-center justify-center">
                      <MapPin weight="fill" className="w-4 h-4 text-brand-600" />
                    </div>
                    <h3 className="text-[17px] font-semibold">{area.region}</h3>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {area.cities.map((city, i) => (
                      <div key={i} className="flex items-center gap-2 text-zinc-600">
                        <CheckCircle weight="fill" className="w-3.5 h-3.5 text-brand-500 shrink-0" />
                        <span className="text-[13px] font-medium">{city}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}

              <div className="bg-brand-50 rounded-xl p-4 border border-brand-200">
                <p className="text-brand-800 text-sm font-medium">
                  {SERVICE_AREA.notListedMessage.split(BRAND.phone)[0]}
                  <a href={`tel:${BRAND.phoneRaw}`} className="underline font-bold">{BRAND.phone}</a>
                  {SERVICE_AREA.notListedMessage.split(BRAND.phone)[1]}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner title={SERVICE_AREA.cta.title} subtitle={SERVICE_AREA.cta.subtitle} />
    </>
  );
}
