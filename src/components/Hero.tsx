import { ArrowRight, Code, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 sm:pt-24">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
      <div className="absolute top-1/4 left-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-primary/10 rounded-full blur-3xl float" />
      <div className="absolute bottom-1/4 right-1/4 w-56 h-56 sm:w-80 sm:h-80 bg-secondary/10 rounded-full blur-3xl float" style={{ animationDelay: '2s' }} />
      
      <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
        <div className="fade-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 glass-card px-3 sm:px-4 py-2 rounded-full mb-6 sm:mb-8">
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
            <span className="text-xs sm:text-sm font-medium">Next-Gen Development Studio</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-4 sm:mb-6 leading-tight px-2">
            Brilliant Minds
            <br />
            <span className="gradient-text">Bold Solutions</span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8 sm:mb-12 max-w-2xl sm:max-w-3xl mx-auto leading-relaxed px-4">
            Cutting-edge web applications with <strong>.NET</strong>, <strong>React</strong>, <strong>Next.js</strong>, 
            <strong> Laravel</strong>, and <strong>Vue.js</strong>. Where innovation meets excellence.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
            <a href="#contact" className="w-full sm:w-auto">
              <Button variant="hero" size="xl" className="group w-full sm:w-auto">
                Get Started
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <a href="#services" className="w-full sm:w-auto">
              <Button variant="glass" size="xl" className="w-full sm:w-auto">
                <Code className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Our Services
              </Button>
            </a>
          </div>

          {/* Tech Icons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 mt-12 sm:mt-16 opacity-60 px-4">
            <div className="text-xs sm:text-sm font-medium">Powered by</div>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-6 text-xs sm:text-sm">
              <span className="font-semibold">.NET</span>
              <span className="font-semibold">React</span>
              <span className="font-semibold">Next.js</span>
              <span className="font-semibold">Laravel</span>
              <span className="font-semibold">Vue.js</span>
              <span className="font-semibold">WordPress</span>
              <span className="font-semibold">Tailwind CSS</span>
              <span className="font-semibold">Docker</span>
              <span className="font-semibold">Kubernetes</span>
              <span className="font-semibold">AWS</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}