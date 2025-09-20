import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import CrystalOrb from './CrystalOrb';
import { useTheme } from './ThemeProvider';


gsap.registerPlugin(ScrollTrigger);

// Floating skill interface
interface FloatingSkill {
  id: number;
  x: number;
  y: number;
  size: number;
  rotation: number;
  rotationSpeed: number;
  vx: number;
  vy: number;
  skill: string;
  opacity: number;
  glowIntensity: number;
  depth: number;
}

// Skills data with their respective logo URLs
const SKILLS = [
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', color: '#61DAFB' },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', color: '#339933' },
  { name: 'Django', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg', color: '#092E20' },
  { name: 'LangChain', icon: 'https://python.langchain.com/img/brand/wordmark.png', color: '#FF6B35' },
  { name: 'N8N', icon: 'https://docs.n8n.io/assets/images/n8n-logo.svg', color: '#FF6D5A' },
  { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', color: '#1572B6' },
  { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', color: '#E34F26' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', color: '#F7DF1E' },
  { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', color: '#3776AB' },
  { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', color: '#336791' },
  { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', color: '#3178C6' },
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', color: '#F05032' },
  { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', color: '#2496ED' },
  { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg', color: '#FF9900' },
  { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', color: '#47A248' },
  { name: 'Redis', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg', color: '#DC382D' },
  { name: 'GraphQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg', color: '#E10098' },
  { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', color: '#000000' },
  { name: 'Express', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', color: '#000000' },
  { name: 'Tailwind', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg', color: '#06B6D4' }
];

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const [skills, setSkills] = useState<FloatingSkill[]>([]);
  const { theme } = useTheme();
  
  // Get current theme (handle 'system' theme)
  const currentTheme = theme === 'system' 
    ? (typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
    : theme;

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);

  // Shape component for rendering different skill logos
  const SkillLogo = ({ skill }: { skill: FloatingSkill }) => {
    const skillData = SKILLS.find(s => s.name === skill.skill);
    if (!skillData) return null;

    const baseStyle = {
      position: 'absolute' as const,
      left: skill.x,
      top: skill.y,
      width: skill.size,
      height: skill.size,
      transform: `rotate(${skill.rotation}deg) scale(${skill.depth})`,
      opacity: skill.opacity
    };

    const containerStyle = {
      width: '100%',
      height: '100%',
      background: currentTheme === 'dark' 
        ? 'rgba(255, 255, 255, 0.15)'
        : 'rgba(30, 30, 30, 0.75)',
      border: currentTheme === 'dark'
        ? '1px solid rgba(255, 255, 255, 0.25)'
        : '1px solid rgba(212, 175, 55, 0.4)',
      borderRadius: '12px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backdropFilter: 'blur(3px)'
    };

    const iconStyle = {
      fontSize: `${skill.size * 0.6}px`,
      filter: `brightness(1.2) drop-shadow(0 0 12px ${skillData.color}) drop-shadow(0 0 6px rgba(212, 175, 55, 0.8))`,
      textShadow: `0 0 15px ${skillData.color}, 0 0 8px rgba(212, 175, 55, 0.9)`
    };

    const labelStyle = {
      position: 'absolute' as const,
      bottom: '-20px',
      left: '50%',
      transform: 'translateX(-50%)',
      fontSize: '10px',
      color: currentTheme === 'dark' 
        ? 'rgba(255, 255, 255, 0.9)' 
        : 'rgba(212, 175, 55, 0.8)',
      fontWeight: 'bold',
      textShadow: currentTheme === 'dark'
        ? '0 0 4px rgba(255, 255, 255, 0.5)'
        : '0 0 3px rgba(212, 175, 55, 0.4)',
      whiteSpace: 'nowrap' as const,
      opacity: skill.glowIntensity > 0.4 ? 0.6 : 0.3, // Much more subtle labels
      transition: 'opacity 0.3s ease'
    };

    return (
      <div style={baseStyle}>
        <div style={containerStyle}>
          <img 
            src={skillData.icon} 
            alt={skillData.name}
            style={{
              width: `${skill.size * 0.6}px`,
              height: `${skill.size * 0.6}px`,
              filter: 'brightness(1.1) contrast(1.1)',
              objectFit: 'contain'
            }}
            onError={(e) => {
              // Fallback to text if image fails to load
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              const fallback = document.createElement('div');
              fallback.textContent = skillData.name.charAt(0);
              fallback.style.fontSize = `${skill.size * 0.4}px`;
              fallback.style.color = skillData.color;
              fallback.style.fontWeight = 'bold';
              target.parentNode?.appendChild(fallback);
            }}
          />
        </div>
        <div style={labelStyle}>{skillData.name}</div>
      </div>
    );
  };
  
  // Initialize floating skills
  useEffect(() => {
    const createSkills = () => {
      const newSkills: FloatingSkill[] = [];
      
      // Create floating skills with random positions
      SKILLS.forEach((skillData, index) => {
        newSkills.push({
          id: index,
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          size: Math.random() * 30 + 50, // 50-80px (larger)
          rotation: Math.random() * 360,
          rotationSpeed: (Math.random() - 0.2) * 0.8, // Slower rotation
          vx: (Math.random() - 0.1) * 0.9, // Slightly faster movement
          vy: (Math.random() - 0.1) * 0.9,
          skill: skillData.name,
          opacity: Math.random() * 0.8 + 0.25, // 0.25 to 0.4 (much more subtle)
          glowIntensity: Math.random() * 1 + 0.3, // 0.3 to 0.6 (reduced glow)
          depth: Math.random() * 0.7 + 0.7 // 0.7 to 1.3 (larger presence)
        });
      });
      
      setSkills(newSkills);
    };
    
    createSkills();
    window.addEventListener('resize', createSkills);
    
    return () => window.removeEventListener('resize', createSkills);
  }, []);

  // Animate skills with collision detection
  useEffect(() => {
    const animateSkills = () => {
      setSkills(prevSkills => {
        const newSkills = prevSkills.map(skill => ({
          ...skill,
          x: skill.x + skill.vx,
          y: skill.y + skill.vy,
          rotation: skill.rotation + skill.rotationSpeed
        }));

        // Check for collisions between skills
        for (let i = 0; i < newSkills.length; i++) {
          for (let j = i + 1; j < newSkills.length; j++) {
            const skill1 = newSkills[i];
            const skill2 = newSkills[j];
            
            const dx = skill1.x - skill2.x;
            const dy = skill1.y - skill2.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            const minDistance = (skill1.size + skill2.size) / 2;
            
            if (distance < minDistance) {
              // Collision detected - calculate bounce
              const angle = Math.atan2(dy, dx);
              const targetX1 = skill2.x + Math.cos(angle) * minDistance;
              const targetY1 = skill2.y + Math.sin(angle) * minDistance;
              const targetX2 = skill1.x - Math.cos(angle) * minDistance;
              const targetY2 = skill1.y - Math.sin(angle) * minDistance;
              
              // Separate overlapping skills
              skill1.x = targetX1;
              skill1.y = targetY1;
              skill2.x = targetX2;
              skill2.y = targetY2;
              
              // Calculate new velocities (elastic collision)
              const v1x = skill1.vx;
              const v1y = skill1.vy;
              const v2x = skill2.vx;
              const v2y = skill2.vy;
              
              skill1.vx = v2x * 0.8; // Add some damping
              skill1.vy = v2y * 0.8;
              skill2.vx = v1x * 0.8;
              skill2.vy = v1y * 0.8;
            }
          }
        }

        // Handle screen edge bouncing
        return newSkills.map(skill => {
          let newX = skill.x;
          let newY = skill.y;
          let newVx = skill.vx;
          let newVy = skill.vy;
          
          // Bounce off screen edges
          if (newX <= 0 || newX >= window.innerWidth - skill.size) {
            newVx = -newVx * 0.8; // Reverse and dampen
            newX = Math.max(0, Math.min(window.innerWidth - skill.size, newX));
          }
          if (newY <= 0 || newY >= window.innerHeight - skill.size) {
            newVy = -newVy * 0.8; // Reverse and dampen
            newY = Math.max(0, Math.min(window.innerHeight - skill.size, newY));
          }
          
          return {
            ...skill,
            x: newX,
            y: newY,
            vx: newVx,
            vy: newVy
          };
        });
      });
    };
    
    const interval = setInterval(animateSkills, 16); // ~60fps
    return () => clearInterval(interval);
  }, []);

  // GSAP animations for text content
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

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section id="hero" ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden bg-luxury-onyx">
      {/* Luxury Floating Geometric Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        {/* Theme-responsive gradient background */}
        <div 
          className="absolute inset-0 w-full h-full"
          style={{
            background: currentTheme === 'dark' ? `
              radial-gradient(ellipse at top left, rgba(212, 175, 55, 0.08) 0%, transparent 50%),
              radial-gradient(ellipse at bottom right, rgba(166, 163, 161, 0.06) 0%, transparent 50%),
              radial-gradient(circle at center, rgba(212, 175, 55, 0.04) 0%, transparent 70%),
              linear-gradient(135deg, 
                rgba(20, 20, 20, 0.95) 0%, 
                rgba(24, 24, 24, 0.98) 25%, 
                rgba(18, 18, 18, 0.96) 50%, 
                rgba(22, 22, 22, 0.97) 75%, 
                rgba(16, 16, 16, 0.98) 100%
              )
            ` : `
              radial-gradient(ellipse at top left, rgba(212, 175, 55, 0.04) 0%, transparent 60%),
              radial-gradient(ellipse at bottom right, rgba(212, 175, 55, 0.03) 0%, transparent 60%),
              radial-gradient(circle at center, rgba(255, 255, 255, 0.8) 0%, transparent 80%),
              linear-gradient(135deg, 
                rgba(255, 255, 255, 0.95) 0%, 
                rgba(252, 252, 252, 0.98) 25%, 
                rgba(250, 250, 250, 0.96) 50%, 
                rgba(248, 248, 248, 0.97) 75%, 
                rgba(245, 245, 245, 0.98) 100%
              )
            `
          }}
        />
        
        {/* Floating skill logos */}
        <div className="absolute inset-0">
          {skills.map(skill => (
            <SkillLogo key={skill.id} skill={skill} />
          ))}
        </div>
        
        {/* Theme-responsive overlay gradient */}
        <div className={`absolute inset-0 ${
          currentTheme === 'dark' 
            ? 'bg-gradient-to-b from-luxury-onyx/60 via-luxury-onyx/40 to-luxury-onyx/70'
            : 'bg-gradient-to-b from-white/40 via-white/20 to-white/50'
        }`} />
        
        {/* Subtle noise texture overlay for premium feel */}
        <div 
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='1' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
          }}
        />
      </div>

      {/* 3D Crystal Orb */}
      {/* <div className="absolute inset-0 z-10">
        <CrystalOrb />
      </div> */}

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
          <span className="block text-luxury-gold text-glow">Natnael</span>
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
            href="https://github.com/nathe444" 
            className="text-black/60 hover:text-luxury-gold transition-colors duration-300 hover:scale-110 transform"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="w-8 h-8" />
          </a>
          <a 
            href="https://www.linkedin.com/in/natnael-mulugeta-8974a930b" 
            className="text-black/60 hover:text-luxury-gold transition-colors duration-300 hover:scale-110 transform"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="w-8 h-8" />
          </a>
          <a 
            href="mailto:natnaelm552@gmail.com" 
            className="text-black/60 hover:text-luxury-gold transition-colors duration-300 hover:scale-110 transform"
          >
            <Mail className="w-8 h-8" />
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