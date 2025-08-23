import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Courses from '@/components/Courses';
import WhoWeAre from '@/components/WhoWeAre';
import Contact from '@/components/Contact';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="bg-background">
        <Hero />
      </div>
      <div className="bg-muted/30">
        <About />
      </div>
      <div className="bg-background">
        <Courses />
      </div>
      <div className="bg-muted/30">
        <WhoWeAre />
      </div>
      <div className="bg-background">
        <Contact />
      </div>
      <div className="bg-muted/30">
        <FAQ />
      </div>
      <Footer />
    </main>
  );
};

export default Index;