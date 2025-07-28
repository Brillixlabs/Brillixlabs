import { Users, Award, Clock, Star } from 'lucide-react';

const stats = [
  { icon: Users, value: '10+', label: 'Early Adopters' },
  { icon: Award, value: '5+', label: 'Innovative Projects' },
  { icon: Clock, value: '3+', label: 'Active Projects' },
  { icon: Star, value: '7+', label: 'Technology Partners' }
];

export function About() {
  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="slide-in-left">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4 sm:mb-6">
              About <span className="gradient-text">Brillix Labs</span>
            </h2>
            <div className="space-y-4 sm:space-y-6 text-base sm:text-lg text-muted-foreground leading-relaxed">
              <p>
                We are a passionate and dedicated team based in Sri Lanka, committed to delivering 
                cutting-edge digital solutions that drive growth and innovation.
              </p>
              <p>
                Leveraging modern technologies such as .NET, React, Next.js, and WordPress, we partner 
                with early adopters to create scalable and impactful web and mobile applications.
              </p>
              <p>
                Our mission is to empower businesses by bridging complex requirements with elegant, 
                user-focused technical solutions.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="slide-in-right">
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="glass-card p-6 sm:p-8 rounded-2xl text-center hover-glow"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-gradient-primary flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-black gradient-text mb-1 sm:mb-2">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
