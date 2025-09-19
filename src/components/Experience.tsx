import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    period: "2023 - Present",
    title: "Senior Full-Stack Developer & AI Specialist",
    company: "Freelance (Upwork & Fiverr)",
    location: "Remote",
    description: "Leading complex web development and AI automation projects for global clients. Specialized in building scalable SaaS solutions with advanced AI integrations.",
    achievements: [
      "Delivered 50+ successful projects with 98% client satisfaction",
      "Built multi-LLM chatbot systems with RAG capabilities",
      "Automated business workflows saving clients 40+ hours/week"
    ],
    tech: ["React", "Node.js", "OpenAI", "n8n", "Zapier"],
    link: "https://www.upwork.com/freelancers/~01234567890"
  },
  {
    period: "2022 - 2023",
    title: "AI Automation Developer",
    company: "Kuriftu Resort Chain",
    location: "Ethiopia",
    description: "Developed conversational AI systems for personalized travel planning and customer service automation in the hospitality industry.",
    achievements: [
      "Created GPT-4 powered itinerary planner increasing bookings by 30%",
      "Implemented multilingual RAG system for customer support",
      "Reduced response time from hours to seconds"
    ],
    tech: ["GPT-4", "RAG", "Travel APIs", "NLP"],
    link: "#"
  },
  {
    period: "2021 - 2022",
    title: "Full-Stack Web Developer",
    company: "Healthcare Solutions Inc.",
    location: "Addis Ababa, Ethiopia",
    description: "Built comprehensive healthcare management systems focusing on patient data security and real-time appointment scheduling.",
    achievements: [
      "Developed HIPAA-compliant patient management platform",
      "Implemented real-time appointment system serving 10K+ patients",
      "Optimized database queries reducing load times by 60%"
    ],
    tech: ["React", "PostgreSQL", "JWT", "Docker"],
    link: "#"
  },
  {
    period: "2020 - 2021",
    title: "Frontend Developer",
    company: "Digital Marketing Agency",
    location: "Remote",
    description: "Created high-performance e-commerce platforms and marketing websites with focus on conversion optimization.",
    achievements: [
      "Built React-based e-commerce solutions with 99.9% uptime",
      "Improved page load speeds by 40% through optimization",
      "Integrated advanced payment systems and analytics"
    ],
    tech: ["React", "TypeScript", "Tailwind", "Stripe"],
    link: "#"
  }
];

export default function Experience() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  useEffect(() => {
    const items = gsap.utils.toArray('.experience-item');
    
    items.forEach((item: any, index) => {
      gsap.fromTo(item, 
        {
          opacity: 0,
          y: 100,
          scale: 0.9
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
            end: "bottom 15%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section ref={containerRef} id="experience" className="py-24 bg-warm-beige/20 relative overflow-hidden">
      <motion.div 
        style={{ y }}
        className="absolute inset-0 bg-gradient-luxury opacity-5"
      />
      
      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="font-luxury text-4xl md:text-5xl font-bold mb-6">
            Professional Journey
          </h2>
          <div className="w-16 h-0.5 bg-luxury-gold mx-auto mb-6" />
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            A chronicle of innovation, growth, and transformative projects across the tech landscape
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-0.5 w-0.5 h-full bg-luxury-gold/30 hidden md:block" />
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className={`experience-item flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                {/* Timeline Dot */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-luxury-gold rounded-full border-4 border-background shadow-luxury z-10" />
                
                {/* Content Card */}
                <Card className={`card-luxury w-full md:w-5/12 group hover:scale-[1.02] transition-all duration-500 ${
                  index % 2 === 0 ? 'md:ml-auto md:mr-8' : 'md:mr-auto md:ml-8'
                }`}>
                  <CardContent className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <Calendar className="w-5 h-5 text-luxury-gold" />
                      <span className="font-body text-sm font-medium text-luxury-gold">
                        {exp.period}
                      </span>
                    </div>
                    
                    <h3 className="font-luxury text-2xl font-semibold mb-2">
                      {exp.title}
                    </h3>
                    
                    <div className="flex items-center gap-2 mb-4">
                      <span className="font-body font-medium text-muted-foreground">
                        {exp.company}
                      </span>
                      <MapPin className="w-4 h-4 text-muted-foreground" />
                      <span className="font-body text-sm text-muted-foreground">
                        {exp.location}
                      </span>
                    </div>
                    
                    <p className="font-body text-muted-foreground mb-6 leading-relaxed">
                      {exp.description}
                    </p>
                    
                    <div className="space-y-3 mb-6">
                      {exp.achievements.map((achievement, achIndex) => (
                        <div key={achIndex} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 bg-luxury-gold rounded-full mt-2.5 flex-shrink-0" />
                          <span className="font-body text-sm text-muted-foreground">
                            {achievement}
                          </span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {exp.tech.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="secondary"
                          className="bg-luxury-gold/10 text-luxury-gold border-luxury-gold/20"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    
                    {exp.link !== "#" && (
                      <a
                        href={exp.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 font-body text-sm text-luxury-gold hover:text-luxury-gold/80 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        View Project
                      </a>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}