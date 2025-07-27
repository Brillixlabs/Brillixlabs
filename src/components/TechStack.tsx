import { Monitor, Server, Cloud, Layers, Code, Database, Globe, Settings } from 'lucide-react';

const techStack = [
  {
    category: 'Frontend',
    icon: Monitor,
    technologies: [
      { name: 'React', description: 'Modern UI library for building interactive interfaces', icon: Code, color: 'from-blue-500 to-cyan-500' },
      { name: 'Next.js', description: 'Full-stack React framework for production', icon: Globe, color: 'from-gray-800 to-gray-600' },
      { name: 'Vue.js', description: 'Progressive framework for ambitious applications', icon: Layers, color: 'from-green-500 to-emerald-500' },
      { name: 'TypeScript', description: 'Type-safe JavaScript for large applications', icon: Code, color: 'from-blue-600 to-blue-400' }
    ]
  },
  {
    category: 'Backend',
    icon: Server,
    technologies: [
      { name: '.NET', description: 'Enterprise-grade backend development platform', icon: Server, color: 'from-purple-600 to-purple-400' },
      { name: 'Laravel', description: 'Elegant PHP framework for web artisans', icon: Code, color: 'from-red-500 to-orange-500' },
      { name: 'Node.js', description: 'JavaScript runtime for scalable backend services', icon: Server, color: 'from-green-600 to-green-400' },
      { name: 'GraphQL', description: 'Modern API query language and runtime', icon: Database, color: 'from-pink-500 to-rose-500' }
    ]
  },
  {
    category: 'DevOps & Cloud',
    icon: Cloud,
    technologies: [
      { name: 'AWS', description: 'Comprehensive cloud computing platform', icon: Cloud, color: 'from-orange-500 to-yellow-500' },
      { name: 'Docker', description: 'Containerization for consistent deployments', icon: Layers, color: 'from-blue-500 to-blue-300' },
      { name: 'Kubernetes', description: 'Container orchestration at scale', icon: Settings, color: 'from-blue-600 to-purple-600' },
      { name: 'CI/CD', description: 'Automated testing and deployment pipelines', icon: Settings, color: 'from-indigo-500 to-purple-500' }
    ]
  }
];

export function TechStack() {
  return (
    <section id="tech-stack" className="py-24 px-6 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-5xl font-black mb-6">
            Our <span className="gradient-text">Tech Stack</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We leverage the most advanced technologies to deliver exceptional results
          </p>
        </div>

        <div className="space-y-16">
          {techStack.map((category, categoryIndex) => (
            <div key={category.category} className="fade-in" style={{ animationDelay: `${categoryIndex * 200}ms` }}>
              <div className="flex items-center justify-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center">
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-3xl font-bold">{category.category}</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.technologies.map((tech, techIndex) => (
                  <div
                    key={tech.name}
                    className="glass-card p-6 rounded-2xl hover-glow group"
                    style={{ animationDelay: `${(categoryIndex * 200) + (techIndex * 100)}ms` }}
                  >
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${tech.color} mb-4 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center`}>
                      <tech.icon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-xl font-bold mb-2">{tech.name}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
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