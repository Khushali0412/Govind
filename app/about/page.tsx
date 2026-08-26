import { WhyGovind } from '../../components/WhyGovind';
import { QualitySection } from '../../components/QualitySection';
import { TrustStrip } from '../../components/TrustStrip';

export const metadata = {
  title: 'About Us',
  description: 'Learn about Govind Remedies and our commitment to quality healthcare.',
};

export default function AboutPage() {
  return (
    <main className="pt-24">
      <WhyGovind />
      <QualitySection />
      <TrustStrip />
    </main>
  );
}
