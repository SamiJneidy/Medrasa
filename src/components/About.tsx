import { BookOpen, Users, Trophy } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: BookOpen,
      title: "تعليم يلامس واقعك",
      description: "كورسات مصممة خصيصاً لتحديات الأطباء والصيادلة اليومية في العيادة والصيدلية."
    },
    {
      icon: Users,
      title: "مجتمع مهني متعاون",
      description: "انضم إلى شبكة من الأطباء والصيادلة الطموحين الملتزمين بتطوير أعمالهم وتعزيز رعاية المرضى."
    },
    {
      icon: Trophy,
      title: "نتائج مضمونة",
      description: "منهجياتنا ساعدت عشرات الممارسات الطبية على زيادة الأرباح ورفع رضا المرضى."
    }
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            حول <span className="font-garet">MED-</span><span className="font-tajawal">رَسَة</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          أول منصة عربية متخصصة بتعليم الأطباء والصيادلة مهارات البزنس.
          </p>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          مِدرَسَة تمنحك الأدوات التي تحتاجها لبناء عيادات ناجحة تتجاوز حدود الصفوف والكتب الجامعية.
          </p>
        </div>
        
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="card-elevated p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                  <Icon size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
        
        <div className="bg-primary/5 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto mb-16">
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
              مهمتنا
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              مهمّتنا في مِدرَسَة نؤمن أن العقول المتميزة تستحق نجاحاً علمياً ومهنياً موازياً. مدرَسة تسد الفجوة بين الخبرة الأكاديمية الطبية والإنجاز الريادي، عبر تدريب شامل في التسويق ،القيادة ، وتطوير الأعمال بشكل استراتيجي مصمم خصيصاً للقطاع الطبي.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;