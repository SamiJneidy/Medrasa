import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'حول MED-رَسَة', href: '#about' },
    { name: 'الدورات', href: '#courses' },
    { name: 'من نحن', href: '#who-we-are' },
    { name: 'تواصل معنا', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-lg backdrop-blur-sm z-50">
      <div className="container-padding">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold text-primary font-garet">MED-</span><span className="text-2xl font-bold text-primary font-tajawal">رَسَة</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
          <div className="mr-10 flex items-baseline space-x-reverse space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-primary hover:text-accent px-4 py-3 text-xl font-medium transition-colors duration-200"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-primary hover:text-accent hover:bg-primary/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-accent"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-primary/20">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-base font-medium text-primary hover:text-accent hover:bg-primary/10 rounded-md transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' });
                    setIsOpen(false);
                  }}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;