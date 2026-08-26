import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Syringe, Box, ShieldCheck, Mail, FileText, CheckCircle2, ChevronLeft } from 'lucide-react';
import { PRODUCTS_DATA } from '../../../lib/data/products';

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const product = PRODUCTS_DATA.find((p) => p.id === params.slug);
  
  if (!product) {
    return {
      title: 'Product Not Found',
    };
  }

  return {
    title: product.name,
    description: product.description,
  };
}

export function generateStaticParams() {
  return PRODUCTS_DATA.map((product) => ({
    slug: product.id,
  }));
}

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const product = PRODUCTS_DATA.find((p) => p.id === params.slug);

  if (!product) {
    notFound();
  }

  return (
    <main className="pt-32 pb-24 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* BACK LINK */}
        <Link 
          href="/products" 
          className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-brand-blue transition-colors mb-8"
        >
          <ChevronLeft className="w-4 h-4" />
          Back to all products
        </Link>

        <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
          
          {/* HEADER */}
          <div className="bg-gradient-to-r from-brand-navy via-slate-900 to-brand-navy p-8 sm:p-12 text-white relative">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/20 border border-brand-blue/30 text-brand-blue text-xs font-semibold uppercase tracking-wider mb-4">
              <span>{product.category}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              {product.name}
            </h1>

            <p className="text-slate-300 text-base sm:text-lg mt-4 max-w-2xl leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* BODY */}
          <div className="p-8 sm:p-12 space-y-10">
            
            {/* AT A GLANCE SUMMARY BOXES */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                  <Syringe className="w-4 h-4 text-brand-blue" />
                  <span>PFS / Pack Size</span>
                </div>
                <div className="text-base font-extrabold text-brand-navy">
                  {product.pfsSizeSummary}
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                  <Box className="w-4 h-4 text-brand-emerald" />
                  <span>Container MOC</span>
                </div>
                <div className="text-base font-extrabold text-brand-emerald">
                  {product.mocSummary}
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                  <ShieldCheck className="w-4 h-4 text-brand-golden" />
                  <span>Configurations</span>
                </div>
                <div className="text-base font-extrabold text-brand-navy">
                  {product.variants.length} Available Option{product.variants.length > 1 ? 's' : ''}
                </div>
              </div>
            </div>

            {/* VARIANTS & SPECIFICATION TABLE */}
            <div>
              <h2 className="text-xl font-bold text-brand-navy flex items-center gap-2 mb-6">
                <FileText className="w-5 h-5 text-brand-blue" />
                <span>Available Product Configurations</span>
              </h2>

              <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
                <table className="w-full text-left text-sm">
                  <thead className="bg-slate-50 text-slate-700 font-bold border-b border-slate-200">
                    <tr>
                      <th className="py-4 px-6">Sr. No.</th>
                      <th className="py-4 px-6">Strength</th>
                      <th className="py-4 px-6">PFS / Size</th>
                      <th className="py-4 px-6">Material (MOC)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 font-medium bg-white">
                    {product.variants.map((v) => (
                      <tr key={v.srNo} className="hover:bg-slate-50/80 transition-colors">
                        <td className="py-4 px-6 text-slate-500 font-mono text-sm">{v.srNo}</td>
                        <td className="py-4 px-6 text-brand-navy font-bold">{v.strength}</td>
                        <td className="py-4 px-6 text-slate-600">{v.pfsSize}</td>
                        <td className="py-4 px-6">
                          <span className="inline-block px-3 py-1 rounded text-xs font-bold bg-emerald-50 text-brand-emerald">
                            {v.moc}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* FACTUAL DISCLAIMER */}
            <div className="p-6 rounded-2xl bg-blue-50/60 border border-blue-100 flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-brand-blue shrink-0 mt-0.5" />
              <p className="text-sm text-slate-600 leading-relaxed">
                Govind Remedies supplies pharmaceutical formulations according to customer and regulatory specifications. For complete commercial terms and technical dossiers, please submit an enquiry.
              </p>
            </div>

          </div>

          {/* FOOTER ACTION */}
          <div className="p-8 sm:p-12 bg-slate-50 border-t border-slate-100 flex justify-end">
            <Link
              href={`/contact?product=${encodeURIComponent(product.name)}`}
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-brand-blue to-brand-emerald text-white font-bold text-base shadow-glow-blue hover:shadow-glow-emerald transition-all flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              <Mail className="w-5 h-5" />
              <span>Enquire About {product.name}</span>
            </Link>
          </div>

        </div>
      </div>
    </main>
  );
}
