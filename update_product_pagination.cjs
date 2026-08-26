const fs = require('fs');
const path = require('path');

const filePath = path.join('d:', 'Govind', 'components', 'ProductShowcase.tsx');
let content = fs.readFileSync(filePath, 'utf8');

// 1. Update categories array
const newCategories = `  const categories = [
    'All',
    'Anticoagulant',
    'Vitamins & Minerals',
    'Electrolytes & Infusions',
    'Emergency & Cardiac',
    'Analgesic & NSAID',
    'Contrast Media',
    'Specialty & Peptides',
    'Anesthetic & Others',
  ];`;
content = content.replace(/const categories = \[[\s\S]*?\];/, newCategories);

// 2. Add pagination state and logic
const paginationState = `  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedLetter, setSelectedLetter] = useState<string>('All');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;`;
content = content.replace(/const \[searchQuery, setSearchQuery\] = useState\(''\);\n  const \[selectedCategory, setSelectedCategory\] = useState<string>\('All'\);\n  const \[selectedLetter, setSelectedLetter\] = useState<string>\('All'\);/, paginationState);

// Reset pagination on filter change
const resetPagination = `  React.useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedCategory, selectedLetter]);

  const handleReset = () => {`;
content = content.replace(/const handleReset = \(\) => {/, resetPagination);

// Slice the products
const currentProductsLogic = `  }, [searchQuery, selectedCategory, selectedLetter]);

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const currentProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );`;
content = content.replace(/}, \[searchQuery, selectedCategory, selectedLetter\]\);/, currentProductsLogic);

// Replace mapping filteredProducts to currentProducts
content = content.replace(/\{filteredProducts\.map\(\(product\)/g, `{currentProducts.map((product)`);

// Add pagination UI
const paginationUI = `            </AnimatePresence>
          </div>

          {totalPages > 1 && (
            <div className="flex justify-center mt-12 gap-2">
              <button
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="w-10 h-10 rounded-full flex items-center justify-center font-bold bg-white text-brand-navy border border-slate-200 hover:border-brand-blue hover:text-brand-blue disabled:opacity-50 disabled:pointer-events-none transition-colors"
              >
                &lt;
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={\`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-colors \${
                    currentPage === page
                      ? 'bg-brand-blue text-white'
                      : 'bg-white text-brand-navy border border-slate-200 hover:border-brand-blue hover:text-brand-blue'
                  }\`}
                >
                  {page}
                </button>
              ))}
              <button
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="w-10 h-10 rounded-full flex items-center justify-center font-bold bg-white text-brand-navy border border-slate-200 hover:border-brand-blue hover:text-brand-blue disabled:opacity-50 disabled:pointer-events-none transition-colors"
              >
                &gt;
              </button>
            </div>
          )}
        ) : (`

content = content.replace(/<\/AnimatePresence>\n          <\/div>\n        \) : \(/, paginationUI);

fs.writeFileSync(filePath, content, 'utf8');
console.log("Updated ProductShowcase with pagination");
