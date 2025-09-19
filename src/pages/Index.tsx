import { motion } from 'framer-motion';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';
import FloatingCTA from '@/components/FloatingCTA';
import ThemeToggle from '@/components/ThemeToggle';
import Navigation from '@/components/Navigation';
import ChatBot from '@/components/ChatBot';

const Index = () => {
  return (
    <motion.div 
      className="min-h-screen bg-background cursor-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <CustomCursor />
      <Navigation />
      <ThemeToggle />
      {/* <FloatingCTA /> */}
      <ChatBot />
      <Hero />
      <About />
      <Services />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </motion.div>
  );
};

export default Index;
