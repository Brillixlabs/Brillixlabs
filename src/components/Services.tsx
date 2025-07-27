import { Globe, Smartphone, Database, Cloud, Shield, Zap } from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'Web Development',
    description: 'Modern, responsive web applications built with cutting-edge technologies.',
    tech: ['React', 'Next.js', 'Vue.js']
  },
  {
    icon: Smartphone,
    title: 'Mobile Solutions',
    description: 'Cross-platform mobile apps that deliver exceptional user experiences.',
    tech: ['React Native', 'Flutter', 'PWA']
  },
  {
    icon: Database,
    title: 'Backend Development',
    description: 'Scalable server-side solutions with robust architecture and performance.',
    tech: ['.NET', 'Laravel', 'Node.js']
  },
  {
    icon: Cloud,
    title: 'Cloud Integration',
    description: 'Seamless cloud deployments and microservices architecture.',
    tech: ['AWS', 'Azure', 'Docker']
  },
  {
    icon: Shield,
    title: 'Security & Testing',
    description: 'Enterprise-grade security measures and comprehensive testing.',
    tech: ['Auth', 'Testing', 'CI/CD']
  },
  {
    icon: Zap,
    title: 'Performance',
    description: 'Lightning-fast applications optimized for speed and efficiency.',
    tech: ['Optimization', 'CDN', 'Caching']
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-5xl font-black mb-6">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Full-stack development solutions designed to transform your ideas into reality
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="glass-card p-8 rounded-2xl hover-glow group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {service.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}