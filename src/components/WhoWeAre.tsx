import kokiImage from '../assets/koki.jpg';
import layaliImage from '../assets/layali.jpg';

const WhoWeAre = () => {
  const team = [
    {
      name: "د. سالي معلا",
      title: "صيدلانية & خبيرة أعمال",
      image: kokiImage,
      experience: [
        "خبرة تتجاوز ٥ سنوات في الإمارات ضمن شركات كبرى وشركات ناشئة (Startups)",
        "خبرة في القيادة وتطوير الفرق عبر مستويات مختلفة من العمل",
        "مساهمة في بناء العمليات وتحسين الأنظمة الداخلية لتعزيز الكفاءة",
        "اختصاص في المبيعات، تطوير الأعمال، واستراتيجيات النمو",
        "مؤسِّسة منصة \"med رَسَة\" المخصّصة لتقديم برامج تدريبية للأطباء والصيادلة والمهنيين الصحيين في المبيعات، الإدارة، والتطوير المهني"
      ]
    },
    {
      name: "د. ليالي عمر",
      title: "طبيبة أسنان & خبيرة تسويق بالمحتوى | مؤسِّسة براند \"الطبيب المؤثر\" وصانعة محتوى",
      image: layaliImage,
      experience: [
        "طبيبة أسنان خريجة جامعة اللاذقية في سوريا 2019",
        "خبيرة تسويق بالمحتوى وبناء البراند الشخصي للأطباء",
        "مدرّبة لأكثر من ٥٠ طبيباً في الوطن العربي على استراتيجيات التسويق الرقمي وتطوير الاعمال",
        "مؤسِّسة براند \"الطبيب المؤثر\" و\"med رَسَة\" وصانعة محتوى"
      ]
    }
  ];

  return (
    <section id="who-we-are" className="section-padding bg-primary/5">
      <div className="container-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            من نحن
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            تعرف على المتخصصين ذوي الخبرة الذين سيوجهونك في رحلتك نحو تميز الممارسة الطبية
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {team.map((member, index) => (
            <div key={index} className="card-elevated p-8">
              <div className="text-center mb-8">
                <div className="relative inline-block mb-6">
                  <img 
                    src={member.image} 
                    alt={`${member.name} - عضو فريق med رَسَة`}
                    className="w-40 h-40 rounded-full object-cover mx-auto shadow-lg"
                  />
                  <div className="absolute inset-0 rounded-full ring-4 ring-primary/20"></div>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {member.name}
                </h3>
                <p className="text-primary font-medium text-center px-2 leading-relaxed">
                  {member.title}
                </p>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-foreground mb-4">
                  الخبرة والتخصص:
                </h4>
                <ul className="space-y-3">
                  {member.experience.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <div className="bg-primary/5 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              الخبرة المشتركة
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              بأكثر من ١٠ سنوات من الخبرة المجمَّعة في مجالات طب الأسنان، الصيدلة، التسويق الرقمي، وإدارة الأعمال، نجمع بين المعرفة الطبية العميقة والخبرة العملية في الشركات الكبرى والشركات الناشئة (Startups). خبراتنا ليست نظرية فقط، بل طُبِّقت ونجحت على أرض الواقع من خلال بناء عمليات، تطوير فرق، وإطلاق استراتيجيات نمو فعّالة. هذه التجربة المتنوعة تمنحنا القدرة على نقل رؤى عملية واستراتيجيات مثبتة تساعد الأطباء والمهنيين الصحيين على تحقيق نتائج ملموسة ونمو مستدام.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;