/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import TrustSignals from './components/TrustSignals';
import EmergencyBanner from './components/EmergencyBanner';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <Navbar />
      <Hero />
      <Services />
      <TrustSignals />
      <EmergencyBanner />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}
