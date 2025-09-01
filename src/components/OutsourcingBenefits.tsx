import { DollarSign, Globe, Users, Clock, Shield, TrendingUp } from 'lucide-react';

const benefits = [
  {
    icon: DollarSign,
    title: 'Cost-Effective Development',
    description: 'Save significantly on development costs compared to Australia while maintaining high quality standards.',
    highlight: 'Cost Savings'
  },
  {
    icon: Users,
    title: 'Skilled Talent Pool',
    description: 'Access to a large pool of highly educated, English-speaking developers with expertise in modern technologies.',
    highlight: 'Expert Developers'
  },
  {
    icon: Clock,
    title: 'Faster Time to Market',
    description: 'Benefit from overlapping time zones and dedicated teams working around the clock to accelerate your project delivery.',
    highlight: 'Rapid Delivery'
  },
  {
    icon: Shield,
    title: 'Quality Assurance',
    description: 'High-quality development with comprehensive unit test coverage ensures your software meets international standards.',
    highlight: 'High Quality'
  },
  {
    icon: Globe,
    title: 'Global Experience',
    description: 'Proven track record of delivering successful projects for clients across North America, Europe, and Australia.',
    highlight: 'Global Reach'
  },
  {
    icon: TrendingUp,
    title: 'Scalable Solutions',
    description: 'Flexible team scaling options to meet your project requirements, from small teams to large enterprise solutions.',
    highlight: 'Flexible Scaling'
  }
];

export function OutsourcingBenefits() {
  return (
    <section id="outsourcing-benefits" className="py-20 bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Why Choose{' '}
            <span className="gradient-text">BRILLIX LABS</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            As a leading Sri Lankan software development company, we bring you the perfect blend of 
            world-class expertise and cost-effective solutions. Discover why global businesses choose 
            Sri Lankan tech talent through Brillix Labs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group relative p-6 lg:p-8 glass-card rounded-2xl border border-border/50 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10"
            >
              {/* Highlight Badge */}
              <div className="absolute -top-3 left-6 bg-gradient-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                {benefit.highlight}
              </div>
              
              {/* Icon */}
              <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <benefit.icon className="w-6 h-6 lg:w-8 lg:h-8 text-primary" />
              </div>
              
              {/* Content */}
              <h3 className="text-xl lg:text-2xl font-semibold mb-3 text-foreground">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="glass-card p-8 lg:p-12 rounded-3xl border border-border/50 max-w-4xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Ready to Experience the Benefits?
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join with us who have already discovered the advantages 
              of outsourcing to Sri Lanka with Brillix Labs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="w-full sm:w-auto">
                <button className="bg-gradient-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto">
                  Start Your Project
                </button>
              </a>
              <a href="#services" className="w-full sm:w-auto">
                <button className="glass-card text-foreground px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-all duration-300 w-full sm:w-auto">
                  View Our Services
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
