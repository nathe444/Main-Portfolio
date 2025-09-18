import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Code2, Workflow, Bot } from 'lucide-react';

const services = [
  {
    icon: Code2,
    title: "Web Application Development",
    description: "Modern, responsive web applications built with React, TypeScript, and cutting-edge technologies for optimal performance and user experience.",
    features: ["Custom React Applications", "E-commerce Solutions", "Dashboard Interfaces", "Progressive Web Apps"]
  },
  {
    icon: Workflow,
    title: "AI Automation & n8n Workflows",
    description: "Streamline your business processes with intelligent automation workflows that save time and reduce manual tasks.",
    features: ["Process Automation", "API Integrations", "Workflow Optimization", "Custom n8n Solutions"]
  },
  {
    icon: Bot,
    title: "Custom RAG & Chatbot Solutions",
    description: "Intelligent conversational AI systems with retrieval-augmented generation for superior customer engagement and support.",
    features: ["RAG Implementation", "Multi-LLM Integration", "Conversational AI", "Knowledge Base Systems"]
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-luxury text-4xl md:text-5xl font-bold mb-6">
            Services & Expertise
          </h2>
          <div className="w-16 h-0.5 bg-luxury-gold mx-auto mb-6" />
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Delivering sophisticated digital solutions that elevate your business
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Card className="card-luxury h-full group hover:scale-[1.02] transition-all duration-300">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-gradient-luxury rounded-xl flex items-center justify-center mb-4 group-hover:shadow-glow transition-all duration-300">
                      <service.icon className="w-8 h-8 text-luxury-gold" />
                    </div>
                    <h3 className="font-luxury text-2xl font-semibold mb-4">
                      {service.title}
                    </h3>
                    <p className="font-body text-muted-foreground mb-6 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-body font-semibold text-luxury-gold mb-3 text-sm uppercase tracking-wider">
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="font-body text-sm text-muted-foreground flex items-center">
                          <div className="w-1.5 h-1.5 bg-luxury-gold rounded-full mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}