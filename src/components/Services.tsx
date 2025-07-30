import { Globe, Smartphone, Database, Cloud, ShieldCheck, Zap } from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'Web Development',
    description: 'Modern, responsive web applications using .NET, React, and WordPress.',
    tech: ['.NET', 'ASP.NET Core', 'Blazor', 'React', 'Next.js', 'WordPress', 'Tailwind CSS']
  },
  {
    icon: Smartphone,
    title: 'Mobile Solutions',
    description: 'Cross-platform mobile apps built with .NET MAUI for seamless experiences.',
    tech: ['.NET MAUI', 'MAUI/Xamarin', 'Flutter', 'React Native',]
  },
  {
    icon: Database,
    title: 'Backend Development',
    description: 'Robust, scalable backend services powered by .NET and Entity Framework Core.',
    tech: ['.NET', 'Azure',]
  },
  {
    icon: Cloud,
    title: 'Cloud Integration',
    description: 'Cloud-native deployments using Azure, AWS, Docker, and Kubernetes.',
    tech: ['Azure', 'AWS']
  },
  {
    icon: ShieldCheck,
    title: 'DevOps & Security',
    description: 'Secure CI/CD pipelines and infrastructure automation with GitHub Actions and Azure DevOps.',
    tech: ['GitHub Actions', 'Azure DevOps']
  },
];

export function Services() {
  return (
    <section id="services" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6">
      <div className="container mx-auto">
        <div className="text-center mb-12 sm:mb-16 fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4 sm:mb-6">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Full-stack development solutions designed to transform your ideas into reality
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="glass-card p-6 sm:p-8 rounded-2xl hover-glow group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-4 sm:mb-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-gradient-primary flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">{service.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {service.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 sm:px-3 py-1 bg-primary/10 text-primary rounded-full text-xs sm:text-sm font-medium"
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
