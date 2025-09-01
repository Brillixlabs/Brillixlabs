import { Navigation } from '@/components/Navigation';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Hero } from '@/components/Hero';
import { Services } from '@/components/Services';
import { OutsourcingBenefits } from '@/components/OutsourcingBenefits';
import { TechStack } from '@/components/TechStack';
import { About } from '@/components/About';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Services />
      <OutsourcingBenefits />
      <TechStack />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
