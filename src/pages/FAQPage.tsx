import PageHero from '../components/ui/PageHero';
import FAQ from '../components/FAQ';
import CTABanner from '../components/ui/CTABanner';

export default function FAQPage() {
  return (
    <>
      <PageHero
        title="Frequently Asked"
        titleAccent="Questions"
        subtitle="Everything you need to know about our electrical services, pricing, process, and guarantees."
        breadcrumb="FAQ"
      />

      <FAQ />

      <CTABanner
        title="Still Have Questions?"
        subtitle="Our team is happy to help. Reach out to us and we'll get back to you within 30 minutes."
      />
    </>
  );
}
