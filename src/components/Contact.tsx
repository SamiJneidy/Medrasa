import { Phone, MapPin, Clock } from 'lucide-react';

const Contact = () => {

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            تواصل معنا
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          خطوة واحدة تفصلك عن التميز… تواصل معنا اليوم!
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="card-elevated p-8 text-center">
              <div className="flex flex-col items-center gap-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <Phone size={24} className="text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground text-xl mb-2">الهاتف</p>
                  <a 
                    href="https://wa.me/963932802989" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-primary hover:text-primary-hover transition-colors text-2xl font-bold"
                  >
                    963932802989+
                  </a>
                </div>
              </div>
            </div>
            
            <div className="card-elevated p-8 text-center">
              <div className="flex flex-col items-center gap-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <MapPin size={24} className="text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground text-xl mb-2">البريد الإلكتروني</p>
                  <a 
                    href="mailto:info@medrasa.org" 
                    className="text-primary hover:text-primary-hover transition-colors text-xl font-semibold"
                  >
                    info@medrasa.org
                  </a>
                </div>
              </div>
            </div>
            
            <div className="card-elevated p-8 text-center">
              <div className="flex flex-col items-center gap-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <Clock size={24} className="text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground text-xl mb-2">ساعات العمل</p>
                  <p className="text-primary text-lg font-semibold">
                    من الإثنين إلى السبت، 9:00 صباحًا – 6:00 مساءً
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="card-elevated p-8 text-center">
            <div className="p-6 bg-primary/5 rounded-xl">
              <h4 className="text-xl font-semibold text-foreground mb-4">
                مستعد للتسجيل؟
              </h4>
              <p className="text-muted-foreground mb-6 text-lg">
              تواصل معنا على واتساب للتسجيل الفوري.
              </p>
              <a 
                href="https://wa.me/963932802989"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2 text-lg px-8 py-4"
              >
                <Phone size={20} />
                تواصل الآن عبر واتساب
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;