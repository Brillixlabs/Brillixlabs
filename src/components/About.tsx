import { Users, Award, Clock, Star } from 'lucide-react';

const stats = [
  { icon: Users, value: '50+', label: 'Happy Clients' },
  { icon: Award, value: '100+', label: 'Projects Delivered' },
  { icon: Clock, value: '5+', label: 'Years Experience' },
  { icon: Star, value: '4.9', label: 'Client Rating' }
];

export function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="slide-in-left">
            <h2 className="text-5xl font-black mb-6">
              About <span className="gradient-text">Brillix Labs</span>
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                We are a cutting-edge development studio passionate about creating 
                digital experiences that push the boundaries of technology. Our team 
                of expert developers specializes in modern web technologies and 
                enterprise-grade solutions.
              </p>
              <p>
                From startups to Fortune 500 companies, we've helped organizations 
                transform their digital presence with innovative solutions built on 
                the latest technologies including .NET, React, Next.js, Laravel, and Vue.js.
              </p>
              <p>
                Our mission is to bridge the gap between complex business requirements 
                and elegant technical solutions, delivering products that not only meet 
                expectations but exceed them.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="slide-in-right">
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="glass-card p-8 rounded-2xl text-center hover-glow"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-black gradient-text mb-2">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground font-medium">
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