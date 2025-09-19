import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Home, 
  User, 
  Briefcase, 
  Code, 
  Award, 
  FolderOpen, 
  Mail, 
  Menu, 
  X 
} from 'lucide-react';

interface NavigationItem {
  name: string;
  href: string;
  icon: React.ComponentType<any>;
  label: string;
}

const navigationItems: NavigationItem[] = [
  { name: 'Hero', href: '#hero', icon: Home, label: 'Home' },
  { name: 'About', href: '#about', icon: User, label: 'About' },
  { name: 'Services', href: '#services', icon: Briefcase, label: 'Services' },
  { name: 'Skills', href: '#skills', icon: Code, label: 'Skills' },
  { name: 'Experience', href: '#experience', icon: Award, label: 'Experience' },
  { name: 'Projects', href: '#projects', icon: FolderOpen, label: 'Projects' },
  { name: 'Contact', href: '#contact', icon: Mail, label: 'Contact' },
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Determine active section
      const sections = navigationItems.map(item => item.href.substring(1));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav
        initial={{ x: -100, opacity: 0, y:-220}}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden lg:block transition-all duration-300 ${
          isScrolled ? 'scale-95' : 'scale-100'
        }`}
      >
        <div className="bg-card/80 backdrop-blur-md border border-luxury-gold/20 rounded-2xl p-4 shadow-luxury">
          <div className="flex flex-col gap-4">
            {navigationItems.map((item, index) => {
              const Icon = item.icon;
              const isActive = activeSection === item.href.substring(1);
              
              return (
                <motion.button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`relative group p-3 rounded-xl transition-all duration-300 ${
                    isActive
                      ? 'bg-luxury-gold text-luxury-onyx shadow-glow'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                  }`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Icon size={20} />
                  
                  {/* Tooltip */}
                  <div className="absolute left-full ml-4 px-3 py-2 bg-card border border-luxury-gold/20 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                    {item.label}
                    <div className="absolute right-full top-1/2 -translate-y-1/2 border-4 border-transparent border-r-card" />
                  </div>

                  {/* Active indicator */}
                  {isActive && (
                    <motion.div
                      className="absolute inset-0 bg-luxury-gold rounded-xl"
                      layoutId="activeNav"
                      initial={false}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30
                      }}
                      style={{ zIndex: -1 }}
                    />
                  )}
                </motion.button>
              );
            })}
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation */}
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 lg:hidden transition-all duration-300 ${
          isScrolled
            ? "bg-background/95 backdrop-blur-lg border-b border-border"
            : "bg-transparent"
        }`}
      >
        <div className="flex items-center justify-start p-4">
          {/* Logo */}
          {/* <motion.div
            className="font-luxury font-bold text-xl cursor-pointer"
            onClick={() => scrollToSection('#hero')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-luxury-gold">NM</span>
          </motion.div> */}

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-lg bg-card/80 backdrop-blur-md border border-luxury-gold/20 text-foreground hover:bg-muted/50 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-background/95 backdrop-blur-lg border-b border-border"
            >
              <div className="p-4 grid grid-cols-2 gap-3">
                {navigationItems.map((item, index) => {
                  const Icon = item.icon;
                  const isActive = activeSection === item.href.substring(1);
                  
                  return (
                    <motion.button
                      key={item.name}
                      onClick={() => scrollToSection(item.href)}
                      className={`flex items-center gap-3 p-3 rounded-xl transition-all duration-300 ${
                        isActive
                          ? 'bg-luxury-gold text-luxury-onyx'
                          : 'text-foreground hover:bg-muted/50'
                      }`}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2, delay: index * 0.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Icon size={18} />
                      <span className="text-sm font-medium">{item.label}</span>
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
};

export default Navigation;