import { Globe, Smartphone, Database, Cloud, ShieldCheck, Zap } from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'Web Development',
    description: 'Modern, responsive web applications using .NET, React, and WordPress.',
    tech: ['.NET', 'ASP.NET Core', 'React', 'Next.js', 'WordPress']
  },
  {
    icon: Smartphone,
    title: 'Mobile Solutions',
    description: 'Cross-platform mobile apps built with .NET MAUI for seamless experiences.',
    tech: ['.NET MAUI', 'Blazor', 'PWA']
  },
  {
    icon: Database,
    title: 'Backend Development',
    description: 'Robust, scalable backend services powered by .NET and Entity Framework Core.',
    tech: ['.NET', 'Entity Framework Core', 'Blazor']
  },
  {
    icon: Cloud,
    title: 'Cloud Integration',
    description: 'Cloud-native deployments using Azure, AWS, Docker, and Kubernetes.',
    tech: ['Azure', 'AWS', 'Docker', 'Kubernetes', 'Terraform']
  },
  {
    icon: ShieldCheck,
    title: 'DevOps & Security',
    description: 'Secure CI/CD pipelines and infrastructure automation with GitHub Actions and Azure DevOps.',
    tech: ['GitHub Actions', 'Azure DevOps', 'CI/CD', 'Terraform']
  },
  {
    icon: Zap,
    title: 'Performance Optimization',
    description: 'Optimized applications with caching, CDN integration, and load balancing.',
    tech: ['NGINX', 'Caching', 'CDN', 'Optimization']
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
