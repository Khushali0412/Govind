import { Suspense } from 'react';
import { ContactSection } from '../../components/ContactSection';

export const metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Govind Remedies for any inquiries.',
};

export default function ContactPage() {
  return (
    <main className="pt-24">
      <Suspense fallback={<div>Loading form...</div>}>
        <ContactSection />
      </Suspense>
    </main>
  );
}
