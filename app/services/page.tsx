import { ManufacturingCapabilities } from '../../components/ManufacturingCapabilities';
import { ServiceHighlights } from '../../components/ServiceHighlights';

export const metadata = {
  title: 'Manufacturing & Services',
  description: 'Explore our state-of-the-art manufacturing capabilities and infrastructure.',
};

export default function ServicesPage() {
  return (
    <main className="pt-24">
      <ServiceHighlights />
      <ManufacturingCapabilities />
    </main>
  );
}
