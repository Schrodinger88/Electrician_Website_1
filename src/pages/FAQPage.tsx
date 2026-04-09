import PageHero from '../components/ui/PageHero';
import FAQ from '../components/FAQ';
import CTABanner from '../components/ui/CTABanner';
import { FAQ_PAGE } from '../config/siteConfig';

export default function FAQPage() {
  return (
    <>
      <PageHero
        title={FAQ_PAGE.hero.title}
        titleAccent={FAQ_PAGE.hero.titleAccent}
        subtitle={FAQ_PAGE.hero.subtitle}
        breadcrumb={FAQ_PAGE.hero.breadcrumb}
      />

      <FAQ />

      <CTABanner
        title={FAQ_PAGE.cta.title}
        subtitle={FAQ_PAGE.cta.subtitle}
      />
    </>
  );
}
