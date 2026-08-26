import { Hero } from '../components/Hero';
import { TrustStrip } from '../components/TrustStrip';
import { WhyGovind } from '../components/WhyGovind';
import { ServiceHighlights } from '../components/ServiceHighlights';
import { ManufacturingCapabilities } from '../components/ManufacturingCapabilities';
import { QualitySection } from '../components/QualitySection';
import { ProductShowcase } from '../components/ProductShowcase';
import { CTASection } from '../components/CTASection';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { BlogSection } from '../components/BlogSection';
import { FAQSection } from '../components/FAQSection';
import { ContactSection } from '../components/ContactSection';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <TrustStrip />
      <ServiceHighlights />
      <ManufacturingCapabilities />
      <WhyGovind />
      <QualitySection />
      <ProductShowcase />
      <CTASection />
      <TestimonialsSection />
      <BlogSection />
      <FAQSection />
      <ContactSection />
    </main>
  );
}
