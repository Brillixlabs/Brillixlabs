import { ArrowRight, Code, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl float" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl float" style={{ animationDelay: '2s' }} />
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="fade-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full mb-8">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">Next-Gen Development Studio</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-6xl md:text-8xl font-black mb-6 leading-tight">
          Brilliant Minds
            <br />
            <span className="gradient-text">Bold Solutions</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Cutting-edge web applications with <strong>.NET</strong>, <strong>React</strong>, <strong>Next.js</strong>, 
            <strong> Laravel</strong>, and <strong>Vue.js</strong>. Where innovation meets excellence.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#contact">
              <Button variant="hero" size="xl" className="group">
                Get Started
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <a href="#services">
              <Button variant="glass" size="xl">
                <Code className="w-5 h-5 mr-2" />
                Our Services
              </Button>
            </a>
          </div>

          {/* Tech Icons */}
          <div className="flex justify-center items-center gap-8 mt-16 opacity-60">
            <div className="text-sm font-medium">Powered by</div>
            <div className="flex gap-6">
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