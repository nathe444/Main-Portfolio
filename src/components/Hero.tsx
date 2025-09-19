import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import CrystalOrb from './CrystalOrb';
import heroBackground from '@/assets/hero-background.jpg';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.3]);

  useEffect(() => {
    const tl = gsap.timeline();
    
    tl.fromTo('.hero-text', 
      { 
        y: 100, 
        opacity: 0,
        scale: 0.9 
      },
      { 
        y: 0, 
        opacity: 1,
        scale: 1,
        duration: 1.2,
        ease: "power3.out",
        stagger: 0.2
      }
    )
    .fromTo('.hero-cta', 
      { 
        y: 50, 
        opacity: 0 
      },
      { 
        y: 0, 
        opacity: 1,
        duration: 0.8,
        ease: "power2.out"
      }, "-=0.4");

    // Parallax scroll effect for background image
    gsap.to(imageRef.current, {
      yPercent: -20,
      ease: "none",
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section id="hero" ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden bg-luxury-onyx">
      {/* Parallax Background */}
      <motion.div
        ref={imageRef}
        style={{ scale, opacity }}
        className="absolute inset-0 w-full h-[120%] -top-[10%]"
      >
        <img
          src={heroBackground}
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-luxury-onyx/70 via-luxury-onyx/50 to-luxury-onyx/80" />
      </motion.div>

      {/* 3D Crystal Orb */}
      <div className="absolute inset-0 z-10">
        <CrystalOrb />
      </div>

      {/* Hero Content */}
      <motion.div 
        style={{ y }}
        className="relative z-20 text-center px-6 max-w-4xl mx-auto"
      >
        <motion.h1 
          className="hero-text font-luxury text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-soft-off-white leading-tight"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <span className="block text-glow">Natnael</span>
          <span className="block text-luxury-gold text-glow">Mulugeta</span>
        </motion.h1>

        <motion.div 
          className="hero-text w-32 h-0.5 bg-luxury-gold mx-auto mb-8 opacity-0"
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        />

        <motion.p 
          className="hero-text font-body text-xl md:text-2xl text-platinum-grey mb-12 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          Full-Stack Developer & AI Automation Specialist
          <br />
          <span className="text-luxury-gold">Crafting Digital Excellence</span>
        </motion.p>

        <motion.div 
          className="hero-cta flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <Button
            size="lg"
            className="btn-primary-luxury text-lg px-8 py-4 hover:scale-105 transition-all duration-300"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View My Work
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="btn-luxury text-lg px-8 py-4 hover:scale-105 transition-all duration-300"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Let's Connect
          </Button>
        </motion.div>

        {/* Social Links */}
        <motion.div 
          className="hero-text flex gap-8 justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.3 }}
        >
          <a 
            href="https://github.com/natnael" 
            className="text-platinum-grey hover:text-luxury-gold transition-colors duration-300 hover:scale-110 transform"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="w-6 h-6" />
          </a>
          <a 
            href="https://linkedin.com/in/natnael" 
            className="text-platinum-grey hover:text-luxury-gold transition-colors duration-300 hover:scale-110 transform"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a 
            href="mailto:hello@natnael.dev" 
            className="text-platinum-grey hover:text-luxury-gold transition-colors duration-300 hover:scale-110 transform"
          >
            <Mail className="w-6 h-6" />
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowDown className="w-6 h-6 text-luxury-gold opacity-80" />
      </motion.div>
    </section>
  );
}