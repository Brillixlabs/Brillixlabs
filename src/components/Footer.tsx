import { Github, Twitter, Linkedin, Mail, Heart } from 'lucide-react';

const socialLinks = [
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Mail, href: '#', label: 'Email' }
];

const footerLinks = {
  Services: ['Web Development', 'Mobile Apps', 'Backend Solutions', 'Cloud Integration'],
  Technologies: ['.NET', 'React', 'Next.js', 'Laravel', 'Vue.js'],
  Company: ['About Us', 'Our Team', 'Careers', 'Contact'],
  Resources: ['Blog', 'Case Studies', 'Documentation', 'Support']
};

export function Footer() {
  return (
    <footer className="border-t border-border/50 py-16 px-6 mt-24">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-primary" />
              <span className="text-xl font-black gradient-text">Brillix Labs</span>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Building the future of digital experiences with cutting-edge technologies 
              and innovative solutions.
            </p>
            {/* <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-lg glass-card flex items-center justify-center hover-glow"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div> */}
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-bold mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © 2024 Brillix Labs. All rights reserved.
            </p>
            <div className="flex items-center gap-1 text-muted-foreground text-sm">
              Made with <Heart className="w-4 h-4 text-red-500 mx-1" /> by Brillix Labs Team
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}