import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const FAQ = () => {
  const faqs = [
    {
      question: "ما هي مدة التسليم المتوقعة للمشروع؟",
      answer: "مدة التسليم تختلف حسب تعقيد المشروع، ولكن بشكل عام تتراوح بين ٢ إلى ٤ أسابيع بعد الموافقة على التصميم النهائي."
    },
    {
      question: "هل تقدمون خدمات التصميم فقط أم التطوير أيضًا؟",
      answer: "نقدم حلولاً متكاملة تشمل كلاً من التصميم والتطوير والاختبار لضمان منتج نهائي متكامل وسلس."
    },
    {
      question: "كيف يمكنني البدء بمشروعي معكم؟",
      answer: "يمكنك التواصل معنا عبر نموذج التواصل الموجود في الموقع وسنرد عليك في غضون ٢٤ ساعة لمناقشة متطلباتك وتقديم عرض سعر."
    }
  ];

  return (
    <section id="faq" className="section-padding bg-muted/20">
      <div className="container-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            الأسئلة الشائعة
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            إجابات على الأسئلة الأكثر شيوعاً حول خدماتنا
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="card-elevated p-0 border-0">
                <AccordionTrigger className="px-8 pt-8 pb-4 text-right text-xl font-bold text-foreground hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-8 pb-8">
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;