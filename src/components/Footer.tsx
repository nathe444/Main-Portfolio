import { motion } from 'framer-motion';
import { Mail, ExternalLink, Github, Linkedin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 bg-foreground text-background">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 items-start mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >
            <div className="font-luxury text-3xl font-bold text-luxury-gold mb-4">
              NM
            </div>
            <p className="font-body text-background/80 leading-relaxed">
              Full-Stack Developer & AI Automation Specialist crafting exceptional digital experiences.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center"
          >
            <h3 className="font-luxury text-xl font-semibold text-luxury-gold mb-4">
              Navigation
            </h3>
            <nav className="space-y-2">
              {['About', 'Services', 'Skills', 'Projects', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="font-body text-background/80 hover:text-luxury-gold transition-colors duration-300 block"
                >
                  {item}
                </a>
              ))}
            </nav>
          </motion.div>

          {/* Contact & Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center md:text-right"
          >
            <h3 className="font-luxury text-xl font-semibold text-luxury-gold mb-4">
              Connect
            </h3>
            <div className="space-y-3">
              <a
                href="mailto:natnael@example.com"
                className="flex items-center gap-3 text-background/80 hover:text-luxury-gold transition-colors duration-300 justify-center md:justify-end"
              >
                <Mail className="w-4 h-4" />
                <span className="font-body text-sm">natnael@example.com</span>
              </a>
              
              <div className="flex gap-4 justify-center md:justify-end">
                <a
                  href="#"
                  className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center text-background/80 hover:bg-luxury-gold/20 hover:text-luxury-gold transition-all duration-300"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center text-background/80 hover:bg-luxury-gold/20 hover:text-luxury-gold transition-all duration-300"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center text-background/80 hover:bg-luxury-gold/20 hover:text-luxury-gold transition-all duration-300"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="pt-8 border-t border-background/20"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-body text-sm text-background/60">
              © {currentYear} Natnael Mulugeta. All rights reserved.
            </p>
            
            <div className="flex gap-6 text-sm">
              <a 
                href="#" 
                className="font-body text-background/60 hover:text-luxury-gold transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a 
                href="#" 
                className="font-body text-background/60 hover:text-luxury-gold transition-colors duration-300"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}