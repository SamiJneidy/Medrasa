import { Facebook, Twitter, Linkedin, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-padding py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">MED-رَسَة</h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              تمكين أطباء الأسنان بالخبرة التجارية والمعرفة التسويقية 
              لبناء عيادات ناجحة ومزدهرة.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <a href="https://wa.me/963932802989" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                  963932802989+
                </a>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">روابط سريعة</h4>
            <nav className="space-y-2">
              <button 
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="block hover:text-accent transition-colors"
              >
                حول MED-رَسَة              </button>
              <button 
                onClick={() => document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' })}
                className="block hover:text-accent transition-colors"
              >
                الدورات المتاحة
              </button>
              <button 
                onClick={() => document.getElementById('who-we-are')?.scrollIntoView({ behavior: 'smooth' })}
                className="block hover:text-accent transition-colors"
              >
                فريقنا
              </button>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="block hover:text-accent transition-colors"
              >
                تواصل معنا
              </button>
            </nav>
          </div>
          
          {/* Social Media */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">تابعنا</h4>
            <p className="text-primary-foreground/80">
              ابق على تواصل للحصول على آخر التحديثات والنصائح وقصص النجاح من مجتمع مدرسة.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://facebook.com/medrasa" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-200"
                aria-label="تابعنا على فيسبوك"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://twitter.com/medrasa" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-200"
                aria-label="تابعنا على تويتر"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="https://linkedin.com/company/medrasa" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-200"
                aria-label="تابعنا على لينكد إن"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/80 text-sm">
              © {currentYear} مدرسة. جميع الحقوق محفوظة.
            </p>
            <div className="flex gap-6 text-sm">
              <a 
                href="/privacy-policy" 
                className="text-primary-foreground/80 hover:text-accent transition-colors"
              >
                سياسة الخصوصية
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;