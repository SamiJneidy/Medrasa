import { Calendar, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const Courses = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const courses = [
    {
      title: "كورس فن المبيعات للأطباء والصيادلة",
      duration: "٤ ساعات",
      description: "تعلم كيف تحوّل تواصلك مع المريض إلى ثقة وفرصة، واكتشف أسرار البيع في المجال الصحي عبر تقنيات عملية لبناء العلاقات، معالجة الاعتراضات، وإغلاق الصفقات باحترافية عند تقديم أي خدمة طبية.",
      topics: [
        "مدخل إلى المبيعات الطبية",
        "علم النفس في المبيعات", 
        "الذكاء العاطفي والتواصل الفعّال",
        "استراتيجيات الإغلاق ومعالجة الاعتراضات",
        "من السوشال ميديا إلى أرض الواقع"
      ],
      price: "50$ مسجَّل | 100$ تفاعلي مباشر",
      phone: "+963932802989"
    },
    {
      title: "كورس Dental Business Management من الألف إلى الياء",
      duration: "٦ ساعات أونلاين (مقسّمة على جلسات تطبيقية)",
      description: "كورس شامل يغطي جميع جوانب إدارة العيادة السنية، من بناء البراند الشخصي إلى التخطيط المالي والقيادة. مصمم ليمنحك رؤية كاملة وأدوات عملية لتحويل عيادتك إلى مشروع متكامل يحقق النجاح والاستدامة.",
      topics: [
        "البراند الشخصي وبراند المركز",
        "تجربة المريض: التواصل، أنواع المرضى، وإدارة الشكاوى",
        "الفريق: التوظيف، التدريب، تنظيم الوقت وتوزيع المهام",
        "فن البيع في العيادة",
        "أنظمة المتابعة والولاء",
        "صياغة العرض الذي لا يُقاوم",
        "استراتيجيات التسعير",
        "التخطيط المالي لنجاح العيادة",
        "القيادة والعقلية الناجحة",
        "مهارات التواصل المتقدّمة"
      ],
      price: "150$",
      phone: "+963932802989"
    },
    {
      title: "كورس التسويق وصناعة المحتوى للأطباء",
      duration: "٤ ساعات",
      description: "كورس تدريبي أونلاين شامل و عملي يساعدك في بناء حضور رقمي قوي، تطوير محتواك، وتحويل حسابك إلى أداة لجذب المرضى.",
      topics: [
        "تحليل الحساب والمحتوى الحالي",
        "تحسين البروفايل والهايلايتس",
        "بناء البراند الشخصي للطبيب",
        "منهجية صناعة المحتوى",
        "أنواع المحتوى الأنسب لعيادتك",
        "أسرار الريلز والستوري والـهوك",
        "أدوات لاستمرارية المحتوى"
      ],
      extraFeatures: [
        "دليل الطبيب المؤثر (PDF – أكثر من 200 فكرة محتوى جاهزة)",
        "متابعة شخصية لمدة أسبوعين بعد الكورس"
      ],
      price: "50$ مسجَّل | 100$ تفاعلي مباشر",
      phone: "+963932802989"
    },
    {
      title: "كورس القيادة وإدارة الفرق الطبية",
      duration: "٥ ساعات أونلاين",
      description: "كورس متخصص في تطوير مهارات القيادة وإدارة الفرق في المجال الطبي. تعلم كيف تبني فريقاً متعاوناً، تدير الصراعات بفعالية، وتقود عيادتك نحو النجاح المستدام من خلال تطبيق مبادئ القيادة الحديثة.",
      topics: [
        "أساسيات القيادة في المجال الطبي",
        "بناء الفرق المتعاونة والفعالة",
        "إدارة الصراعات وحل المشاكل",
        "تطوير مهارات التواصل القيادي",
        "إدارة التغيير والتطوير المؤسسي",
        "تقييم الأداء وتطوير الموظفين",
        "بناء ثقافة العمل الإيجابية",
        "استراتيجيات الاحتفاظ بالموظفين الموهوبين"
      ],
      extraFeatures: [
        "أدوات تقييم القيادة الشخصية",
        "نماذج إدارة الفرق جاهزة للاستخدام",
        "متابعة شخصية لمدة شهر بعد الكورس"
      ],
      price: "75$ مسجَّل | 120$ تفاعلي مباشر",
      phone: "+963932802989"
    }
  ];

  const nextSlide = () => {
    if (currentIndex < courses.length - 3) {
      setCurrentIndex((prevIndex) => prevIndex + 3);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 3);
    }
  };

  const visibleCourses = courses.slice(currentIndex, currentIndex + 3);

  // Check if arrows should be disabled
  const isLeftDisabled = currentIndex === 0;
  const isRightDisabled = currentIndex >= courses.length - 3;

  return (
    <section id="courses" className="section-padding bg-muted/20">
      <div className="container-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            الكورسات المتاحة
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            مجموعة دورات احترافية مصممة لتطوير مهاراتك والارتقاء بمستواك المهني في القطاع الصحي.
          </p>
        </div>
        
        {/* Custom Carousel with Navigation */}
        <div className="relative max-w-7xl mx-auto">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            disabled={isLeftDisabled}
            className={`absolute left-4 top-1/2 transform -translate-y-1/2 z-10 p-3 rounded-full shadow-lg transition-all duration-300 active:scale-95 active:shadow-md ${
              isLeftDisabled 
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed opacity-50' 
                : 'bg-white/90 hover:bg-white text-primary hover:shadow-xl'
            }`}
            aria-label="Previous courses"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button
            onClick={nextSlide}
            disabled={isRightDisabled}
            className={`absolute right-4 top-1/2 transform -translate-y-1/2 z-10 p-3 rounded-full shadow-lg transition-all duration-300 active:scale-95 active:shadow-md ${
              isRightDisabled 
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed opacity-50' 
                : 'bg-white/90 hover:bg-white text-primary hover:shadow-xl'
            }`}
            aria-label="Next courses"
          >
            <ChevronRight size={24} />
          </button>
          
          {/* Courses Display */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-16 transition-opacity duration-300 ease-in-out">
            {visibleCourses.map((course, index) => (
              <div 
                key={`${currentIndex}-${index}`} 
                className="border-2 border-primary/20 rounded-xl p-6 flex flex-col h-full bg-background shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out"
              >
                <h3 className="text-xl font-bold mb-3 text-foreground line-clamp-2">
                  {course.title}
                </h3>
                
                <div className="flex items-center gap-2 mb-4">
                  <Calendar size={18} className="text-primary" />
                  <span className="text-sm font-medium text-muted-foreground">{course.duration}</span>
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed text-sm">
                  {course.description}
                </p>
                
                {/* Topics List */}
                <div className="mb-6 p-4 bg-muted/30 rounded-lg flex-grow">
                  <h4 className="font-semibold text-foreground mb-3 text-sm">المحاور:</h4>
                  <ul className="space-y-1 min-h-[140px]">
                    {course.topics.map((topic, topicIndex) => (
                      <li key={topicIndex} className="flex items-start gap-2 text-muted-foreground text-sm">
                        <span className="text-primary mt-1 text-xs">•</span>
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {course.extraFeatures && (
                    <div className="mt-3">
                      <h5 className="font-semibold text-foreground mb-2 text-sm">المزايا الإضافية:</h5>
                      <ul className="space-y-1">
                        {course.extraFeatures.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start gap-2 text-muted-foreground text-sm">
                            <span className="text-accent mt-1 text-xs">✓</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
                
                {/* Price */}
                <div className="p-4 bg-accent/10 rounded-lg border border-accent/20 text-center">
                  <div className="text-sm text-muted-foreground mb-1">السعر</div>
                  <div className="text-lg font-bold text-accent">{course.price}</div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Course Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: Math.ceil(courses.length / 3) }, (_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i * 3)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  i === Math.floor(currentIndex / 3) ? 'bg-primary' : 'bg-primary/30'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
        
        <div className="text-center mt-12">
          <a
            href="https://wa.me/963932802989"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-lg px-8 py-4 inline-block"
          >
            تواصل معنا للتسجيل على الكورس
          </a>
        </div>
      </div>
    </section>
  );
};

export default Courses;