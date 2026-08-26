import { ProductShowcase } from '../../components/ProductShowcase';

export const metadata = {
  title: 'Products Portfolio',
  description: 'Explore our complete range of pharmaceutical formulations.',
};

export default function ProductsPage() {
  return (
    <main className="pt-24">
      <ProductShowcase />
    </main>
  );
}
