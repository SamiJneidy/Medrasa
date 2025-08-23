import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const PrivacyPolicy = () => {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Add top padding to account for fixed navbar */}
      <div className="pt-20">
        <section className="section-padding">
          <div className="container-padding">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8 text-center">
                سياسة الخصوصية – med-رَسَة
              </h1>
              
              <div className="prose prose-lg max-w-none text-right space-y-8">
                <p className="text-xl text-muted-foreground leading-relaxed">
                  نحن في med-رَسَة نلتزم بحماية خصوصية زوار موقعنا ومشتركينا. تهدف هذه السياسة إلى توضيح كيفية جمع بياناتك الشخصية واستخدامها وحمايتها.
                </p>
                
                <div className="bg-muted/20 p-6 rounded-lg">
                  <h2 className="text-2xl font-bold text-foreground mb-4">
                    ١. المعلومات التي نجمعها
                  </h2>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>المعلومات التي تقدمها عند التسجيل في الدورات (الاسم، البريد الإلكتروني، رقم الهاتف).</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>بيانات الدفع عند الاشتراك في الدورات المدفوعة.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>المراسلات التي تتم معنا عبر البريد الإلكتروني أو واتساب.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>معلومات تقنية عامة (مثل نوع المتصفح، عنوان الـ IP) لأغراض تحسين الموقع.</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-muted/20 p-6 rounded-lg">
                  <h2 className="text-2xl font-bold text-foreground mb-4">
                    ٢. كيفية استخدام المعلومات
                  </h2>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>لإتمام التسجيل في الدورات وتقديم الخدمة التعليمية.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>للتواصل معك بخصوص استفساراتك أو مواعيد الدروس.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>لإرسال تحديثات أو عروض خاصة (مع إمكانية إلغاء الاشتراك في أي وقت).</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>لتحسين تجربة المستخدم وتطوير خدماتنا.</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-muted/20 p-6 rounded-lg">
                  <h2 className="text-2xl font-bold text-foreground mb-4">
                    ٣. مشاركة البيانات
                  </h2>
                  <p className="text-muted-foreground mb-4">
                    نحن لا نبيع أو نؤجر بياناتك الشخصية لأي طرف ثالث.
                    قد نشارك بياناتك فقط في الحالات التالية:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>الامتثال للقوانين أو المتطلبات القانونية.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>مع مزوّدي خدمات الدفع لتأكيد عمليات الشراء.</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-muted/20 p-6 rounded-lg">
                  <h2 className="text-2xl font-bold text-foreground mb-4">
                    ٤. حماية البيانات
                  </h2>
                  <p className="text-muted-foreground">
                    نتخذ إجراءات تقنية وتنظيمية مناسبة لحماية بياناتك الشخصية من الوصول غير المصرّح به أو التغيير أو الاستخدام غير القانوني.
                  </p>
                </div>
                
                <div className="bg-muted/20 p-6 rounded-lg">
                  <h2 className="text-2xl font-bold text-foreground mb-4">
                    ٥. حقوقك
                  </h2>
                  <p className="text-muted-foreground mb-4">يحق لك:</p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>طلب الوصول إلى بياناتك الشخصية.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>طلب تعديل أو حذف بياناتك.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>إلغاء الاشتراك في أي رسائل تسويقية.</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-muted/20 p-6 rounded-lg">
                  <h2 className="text-2xl font-bold text-foreground mb-4">
                    ٦. التغييرات على السياسة
                  </h2>
                  <p className="text-muted-foreground">
                    قد نقوم بتحديث سياسة الخصوصية من وقت لآخر، وسيتم نشر أي تغييرات على هذه الصفحة.
                  </p>
                </div>
                
                <div className="bg-primary/5 p-6 rounded-lg">
                  <h2 className="text-2xl font-bold text-foreground mb-4">
                    ٧. تواصل معنا
                  </h2>
                  <p className="text-muted-foreground mb-4">
                    إذا كانت لديك أي استفسارات بخصوص سياسة الخصوصية، يمكنك التواصل معنا عبر:
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-primary font-medium">البريد الإلكتروني:</span>
                      <a href="mailto:info@medrasa.org" className="text-primary hover:text-primary-hover transition-colors">
                        info@medrasa.org
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-primary font-medium">واتساب:</span>
                      <a href="https://wa.me/963932802989" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-hover transition-colors">
                        +963932802989
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </main>
  );
};

export default PrivacyPolicy;