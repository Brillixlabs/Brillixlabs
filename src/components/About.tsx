import { Users, Award, Clock, Star, MapPin, Target, Zap, Heart } from 'lucide-react';



const values = [
  {
    icon: Heart,
    title: 'Passion',
    description: 'We pour our heart into every project'
  },
  {
    icon: Target,
    title: 'Excellence',
    description: 'Striving for perfection in every detail'
  },
  {
    icon: Zap,
    title: 'Innovation',
    description: 'Pushing boundaries with cutting-edge tech'
  },
  {
    icon: Users,
    title: 'Partnership',
    description: 'Building lasting relationships with clients'
  }
];

export function About() {
  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4 sm:mb-6">
            About <span className="gradient-text">Brillix Labs</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            We are a passionate and dedicated team based in Sri Lanka, committed to delivering 
            cutting-edge digital solutions that drive growth and innovation.
          </p>
        </div>



        {/* Mission Statement */}
        <div className="glass-card p-8 sm:p-12 rounded-3xl mb-16 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold mb-6">
            Our <span className="gradient-text">Mission</span>
          </h3>
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto">
            To empower businesses by bridging complex requirements with elegant, 
            user-focused technical solutions. We leverage modern technologies such as .NET, 
            React, Next.js, and WordPress to create scalable and impactful web and mobile applications.
          </p>
        </div>

        {/* Core Values */}
        <div>
          <h3 className="text-2xl sm:text-3xl font-bold text-center mb-12">
            Our <span className="gradient-text">Values</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="glass-card p-6 rounded-2xl text-center hover-glow"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-bold mb-2">{value.title}</h4>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
