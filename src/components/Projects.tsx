import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';
import ProjectGallery from './ProjectGallery';

// Import project images
import ecommerceImg from '@/assets/project-ecommerce.jpg';
import dashboardImg from '@/assets/project-dashboard.jpg';
import chatbotImg from '@/assets/project-chatbot.jpg';
import resortImg from '@/assets/project-resort.jpg';
import healthcareImg from '@/assets/project-healthcare.jpg';
import realestateImg from '@/assets/project-realestate.jpg';

gsap.registerPlugin(ScrollTrigger);

const projects = {
  "Frontend": [
    {
      title: "E-commerce Platform",
      description: "Modern React-based e-commerce solution with advanced filtering, cart management, and payment integration.",
      images: [
        { src: ecommerceImg, alt: "E-commerce Platform - Main View", caption: "Product catalog with advanced filtering" },
        { src: ecommerceImg, alt: "E-commerce Platform - Cart", caption: "Shopping cart and checkout process" },
        { src: ecommerceImg, alt: "E-commerce Platform - Dashboard", caption: "Admin dashboard with analytics" }
      ],
      tech: ["React", "TypeScript", "Tailwind", "Stripe"],
      github: "#",
      demo: "#"
    },
    {
      title: "Project Management Dashboard",
      description: "Comprehensive dashboard for team collaboration with real-time updates and analytics.",
      images: [
        { src: dashboardImg, alt: "Dashboard - Overview", caption: "Main dashboard with project overview" },
        { src: dashboardImg, alt: "Dashboard - Analytics", caption: "Detailed analytics and reporting" }
      ],
      tech: ["React", "Node.js", "MongoDB", "Socket.io"],
      github: "#",
      demo: "#"
    }
  ],
  "Backend": [
    {
      title: "Healthcare Management API",
      description: "RESTful API with JWT authentication, real-time notifications, and HIPAA-compliant data handling.",
      images: [
        { src: healthcareImg, alt: "Healthcare API - Architecture", caption: "Microservices architecture overview" },
        { src: healthcareImg, alt: "Healthcare API - Security", caption: "Security and authentication flow" }
      ],
      tech: ["Node.js", "Express", "PostgreSQL", "JWT"],
      github: "#",
      demo: "#"
    },
    {
      title: "Real Estate Platform Backend",
      description: "Scalable microservices architecture with property search, user management, and payment processing.",
      images: [
        { src: realestateImg, alt: "Real Estate API - Properties", caption: "Property management system" },
        { src: realestateImg, alt: "Real Estate API - Search", caption: "Advanced search functionality" }
      ],
      tech: ["Node.js", "Prisma", "Supabase", "Stripe"],
      github: "#",
      demo: "#"
    }
  ],
  "AI & Automations": [
    {
      title: "SaaS AI Chatbot System",
      description: "Multi-LLM chatbot platform with Zapier integration for automated customer support workflows.",
      images: [
        { src: chatbotImg, alt: "AI Chatbot - Interface", caption: "Conversational AI interface" },
        { src: chatbotImg, alt: "AI Chatbot - Analytics", caption: "Conversation analytics and insights" },
        { src: chatbotImg, alt: "AI Chatbot - Integrations", caption: "Third-party integrations" }
      ],
      tech: ["OpenAI", "Zapier", "n8n", "RAG"],
      github: "#",
      demo: "#"
    },
    {
      title: "Kuriftu Resort AI Assistant",
      description: "Conversational AI itinerary planner for personalized travel recommendations and bookings.",
      images: [
        { src: resortImg, alt: "Resort AI - Planner", caption: "AI-powered itinerary planning" },
        { src: resortImg, alt: "Resort AI - Recommendations", caption: "Personalized recommendations engine" }
      ],
      tech: ["GPT-4", "RAG", "Travel API", "NLP"],
      github: "#",
      demo: "#"
    }
  ],
  "Full-Stack": [
    {
      title: "E-commerce Platform Complete",
      description: "End-to-end e-commerce solution with inventory management, analytics dashboard, and customer portal.",
      images: [
        { src: ecommerceImg, alt: "Full-Stack E-commerce - Frontend", caption: "Customer-facing storefront" },
        { src: ecommerceImg, alt: "Full-Stack E-commerce - Admin", caption: "Admin panel and inventory management" },
        { src: ecommerceImg, alt: "Full-Stack E-commerce - Analytics", caption: "Sales analytics and reporting" }
      ],
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "#",
      demo: "#"
    },
    {
      title: "Project Management Suite",
      description: "Comprehensive team collaboration platform with real-time updates, file sharing, and analytics.",
      images: [
        { src: dashboardImg, alt: "Project Suite - Dashboard", caption: "Team collaboration dashboard" },
        { src: dashboardImg, alt: "Project Suite - Files", caption: "File sharing and version control" }
      ],
      tech: ["React", "Node.js", "PostgreSQL", "Socket.io"],
      github: "#",
      demo: "#"
    }
  ]
};

export default function Projects() {
  const [activeTab, setActiveTab] = useState("Frontend");
  const tabs = Object.keys(projects);
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  useEffect(() => {
    const cards = gsap.utils.toArray('.project-card');
    
    cards.forEach((card: any, index) => {
      gsap.fromTo(card, 
        {
          opacity: 0,
          y: 80,
          rotationX: 15,
          scale: 0.95
        },
        {
          opacity: 1,
          y: 0,
          rotationX: 0,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            end: "bottom 10%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [activeTab]);

  return (
    <section ref={containerRef} id="projects" className="py-24 bg-gradient-depth relative overflow-hidden">
      <motion.div 
        style={{ y }}
        className="absolute inset-0 bg-gradient-luxury opacity-10"
      />
      
      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-luxury text-4xl md:text-5xl font-bold mb-6">
            Featured Projects
          </h2>
          <div className="w-16 h-0.5 bg-luxury-gold mx-auto mb-6" />
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            A curated selection of my finest work across web development, AI automation, and full-stack solutions
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center mb-12 border-b border-luxury-gold/20"
        >
          {tabs.map((tab, index) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`font-body px-6 py-4 text-lg transition-all duration-300 relative ${
                activeTab === tab
                  ? 'text-luxury-gold'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {tab}
              {activeTab === tab && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-luxury-gold"
                  initial={false}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
            </button>
          ))}
        </motion.div>

        {/* Project Grid */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 gap-8"
        >
          {projects[activeTab as keyof typeof projects].map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="project-card"
            >
              <Card className="card-luxury overflow-hidden group h-full hover:scale-[1.02] hover:shadow-glow transition-all duration-500 hover:rotate-1 hover:-translate-y-2">
                <ProjectGallery 
                  images={project.images} 
                  projectTitle={project.title}
                />
                <CardContent className="p-8">
                  <h3 className="font-luxury text-2xl font-semibold mb-4">
                    {project.title}
                  </h3>
                  <p className="font-body text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="secondary"
                        className="bg-luxury-gold/10 text-luxury-gold border-luxury-gold/20"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <Button
                      variant="outline"
                      size="sm"
                      className="btn-luxury flex items-center gap-2"
                      onClick={() => window.open(project.github, '_blank')}
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </Button>
                    <Button
                      size="sm"
                      className="btn-primary-luxury flex items-center gap-2"
                      onClick={() => window.open(project.demo, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}