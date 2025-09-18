import { motion } from 'framer-motion';
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

// Import project images
import ecommerceImg from '@/assets/project-ecommerce.jpg';
import dashboardImg from '@/assets/project-dashboard.jpg';
import chatbotImg from '@/assets/project-chatbot.jpg';
import resortImg from '@/assets/project-resort.jpg';
import healthcareImg from '@/assets/project-healthcare.jpg';
import realestateImg from '@/assets/project-realestate.jpg';

const projects = {
  "Web Applications": [
    {
      title: "E-commerce Platform",
      description: "Modern React-based e-commerce solution with advanced filtering, cart management, and payment integration.",
      image: ecommerceImg,
      tech: ["React", "TypeScript", "Tailwind", "Stripe"],
      github: "#",
      demo: "#"
    },
    {
      title: "Project Management Dashboard",
      description: "Comprehensive dashboard for team collaboration with real-time updates and analytics.",
      image: dashboardImg,
      tech: ["React", "Node.js", "MongoDB", "Socket.io"],
      github: "#",
      demo: "#"
    }
  ],
  "AI & Automation": [
    {
      title: "SaaS AI Chatbot System",
      description: "Multi-LLM chatbot platform with Zapier integration for automated customer support workflows.",
      image: chatbotImg,
      tech: ["OpenAI", "Zapier", "n8n", "RAG"],
      github: "#",
      demo: "#"
    },
    {
      title: "Kuriftu Resort AI Assistant",
      description: "Conversational AI itinerary planner for personalized travel recommendations and bookings.",
      image: resortImg,
      tech: ["GPT-4", "RAG", "Travel API", "NLP"],
      github: "#",
      demo: "#"
    }
  ],
  "Full-Stack Solutions": [
    {
      title: "Healthcare Management System",
      description: "Complete patient management solution with appointment scheduling and medical records.",
      image: healthcareImg,
      tech: ["React", "Node.js", "PostgreSQL", "JWT"],
      github: "#",
      demo: "#"
    },
    {
      title: "Real Estate Platform",
      description: "Property listing and management platform with advanced search and virtual tours.",
      image: realestateImg,
      tech: ["Next.js", "Prisma", "Supabase", "Maps API"],
      github: "#",
      demo: "#"
    }
  ]
};

export default function Projects() {
  const [activeTab, setActiveTab] = useState("Web Applications");
  const tabs = Object.keys(projects);

  return (
    <section id="projects" className="py-24 bg-gradient-depth">
      <div className="container mx-auto px-6">
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
            >
              <Card className="card-luxury overflow-hidden group h-full hover:scale-[1.02] transition-all duration-300">
                <div className="aspect-video bg-gradient-luxury overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
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