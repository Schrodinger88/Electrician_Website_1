import Hero from '../components/Hero';
import Services from '../components/Services';
import TrustSignals from '../components/TrustSignals';
import EmergencyBanner from '../components/EmergencyBanner';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import CTA from '../components/CTA';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <TrustSignals />
      <EmergencyBanner />
      <Testimonials />
      <FAQ limit={6} />
      <CTA />
    </>
  );
}
