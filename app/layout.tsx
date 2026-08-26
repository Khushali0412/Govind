import './globals.css';
import type { Metadata } from 'next';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export const metadata: Metadata = {
  title: {
    default: 'Govind Remedies Pvt. Ltd.',
    template: '%s | Govind Remedies',
  },
  description: 'Leading pharmaceutical manufacturer providing high-quality solutions globally.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-white text-brand-navy antialiased selection:bg-brand-blue selection:text-white">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
