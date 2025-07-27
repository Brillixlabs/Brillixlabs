import { Navigation } from '@/components/Navigation';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Hero } from '@/components/Hero';
import { Services } from '@/components/Services';
import { TechStack } from '@/components/TechStack';
import { About } from '@/components/About';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <ThemeToggle />
      <Hero />
      <Services />
      <TechStack />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
