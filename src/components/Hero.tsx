import { ChevronDown } from 'lucide-react';
// import heroBackgroundVideo from '../assets/hero-background.mp4';
import logo from '../assets/logo-transparent.png';

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ minHeight: '120vh' }}>
      {/* Background Animated Gradient */}
      <div className="absolute inset-0 z-0 hero-gradient pointer-events-none"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center justify-center min-h-screen" style={{ minHeight: '120vh' }}>
        <div className="mb-4 mt-4">
          <img 
            src={logo} 
            alt="med رَسَة - منصة التعليم الطبي المهني" 
            className="w-72 h-72 md:w-80 md:h-80 lg:w-88 lg:h-88 xl:w-96 xl:h-96 mx-auto drop-shadow-2xl"
          />
        </div>
        <p className="text-xl md:text-2xl text-white mb-4 leading-relaxed font-semibold">
          نُعلّم الأطباء والصيادلة مهارات البزنس، من البيع والتسويق إلى القيادة وإدارة العيادات باحترافية.
        </p>
        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto font-medium">
          استثمر بنفسك اليوم، وارتقِ بعيادتك غداً
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-accent text-lg px-8 py-4"
          >
            استكشف الدورات
          </button>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-secondary text-lg px-8 py-4"
          >
            ابدأ اليوم
          </button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <button 
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 text-white hover:text-accent transition-colors duration-200"
        aria-label="انتقل إلى قسم حول مدرسة"
      >
        <ChevronDown size={32} className="animate-bounce" />
      </button>
    </section>
  );
};

export default Hero;
