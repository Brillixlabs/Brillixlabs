import {
  Server,
  Globe,
  Smartphone,
  Database,
  FileText,
  Atom,
  Layers,
  Cloud,
  Box,
  Network,
  Code2,
  GitBranch,
  Wrench,
  ShieldCheck
} from 'lucide-react';

const techStack = [
  {
    category: 'Tools & Frameworks We Use',
    icon: Server,
    technologies: [
      {
        name: '.NET',
        description: 'High-performance framework for enterprise-grade web applications',
        icon: Server,
        color: 'from-purple-600 to-purple-400'
      },
      {
        name: 'ASP.NET Core',
        description: 'Modern, fast, and secure web development platform',
        icon: Globe,
        color: 'from-indigo-600 to-blue-500'
      },
      {
        name: '.NET MAUI',
        description: 'Cross-platform mobile and desktop app framework',
        icon: Smartphone,
        color: 'from-green-500 to-emerald-400'
      },
      {
        name: 'Blazor',
        description: 'Build rich interactive web UIs using C# instead of JavaScript',
        icon: Code2,
        color: 'from-blue-500 to-cyan-400'
      },
      {
        name: 'WordPress',
        description: 'Flexible CMS platform for content-driven websites',
        icon: FileText,
        color: 'from-blue-400 to-indigo-500'
      },
      {
        name: 'React',
        description: 'JavaScript library for creating interactive UI components',
        icon: Atom,
        color: 'from-blue-500 to-cyan-400'
      },
      {
        name: 'Next.js',
        description: 'React framework for SSR, static generation, and edge rendering',
        icon: Layers,
        color: 'from-gray-800 to-black'
      }
    ]
  },
  {
    category: 'DevOps & Cloud',
    icon: Cloud,
    technologies: [
      {
        name: 'Azure',
        description: 'Microsoft\'s cloud platform optimized for .NET workloads',
        icon: Cloud,
        color: 'from-blue-700 to-blue-500'
      },
      {
        name: 'AWS',
        description: 'Comprehensive cloud infrastructure for scalable hosting',
        icon: Network,
        color: 'from-orange-500 to-yellow-500'
      },
      {
        name: 'Docker',
        description: 'Containerization for consistent and portable deployments',
        icon: Box,
        color: 'from-blue-500 to-blue-300'
      },
      {
        name: 'GitHub Actions',
        description: 'CI/CD automation for testing and deployments',
        icon: GitBranch,
        color: 'from-gray-700 to-gray-500'
      },
      {
        name: 'Azure DevOps',
        description: 'End-to-end DevOps solution for .NET projects',
        icon: Code2,
        color: 'from-blue-600 to-blue-400'
      },
    ]
  }
];


export function TechStack() {
  return (
    <section id="tech-stack" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-12 sm:mb-16 fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4 sm:mb-6">
            Our <span className="gradient-text">Tech Stack</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            We prioritize .NET technologies for enterprise-grade solutions, 
            while leveraging WordPress and modern frameworks for flexibility and scalability.
          </p>
        </div>

        <div className="space-y-12 sm:space-y-16">
          {techStack.map((category, categoryIndex) => (
            <div key={category.category} className="fade-in" style={{ animationDelay: `${categoryIndex * 200}ms` }}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 mb-6 sm:mb-8">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gradient-primary flex items-center justify-center">
                  <category.icon className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-center sm:text-left">{category.category}</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                {category.technologies.map((tech, techIndex) => (
                  <div
                    key={tech.name}
                    className="glass-card p-4 sm:p-6 rounded-2xl hover-glow group"
                    style={{ animationDelay: `${(categoryIndex * 200) + (techIndex * 100)}ms` }}
                  >
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-r ${tech.color} mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center`}>
                      <tech.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <h4 className="text-lg sm:text-xl font-bold mb-2">{tech.name}</h4>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {tech.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
