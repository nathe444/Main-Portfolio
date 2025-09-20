import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';

const skillCategories = {
  "Frontend": [
    "React", "TypeScript", "JavaScript", "Tailwind CSS", "Redux Toolkit", 
    "Next.js", "Framer Motion", "Responsive Design"
  ],
  "Backend": [
    "Node.js", "Express.js", "MongoDB", "PostgreSQL", "RESTful APIs", 
    , "JWT Authentication", "Server Architecture , django"
  ],
  "AI & Automation": [
    "n8n Workflows", "RAG Implementation", "OpenAI APIs", "Langchain", 
    "Zapier Integration", "Chatbot Development", "NLP Processing"
  ],
  "Tools & DevOps": [
    "Git", "Docker", "Vercel", "Netlify", "Postman", "VS Code", 
    "Chrome DevTools", "CI/CD Pipelines"
  ]
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-gradient-depth">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-luxury text-4xl md:text-5xl font-bold mb-6">
            Technical Expertise
          </h2>
          <div className="w-16 h-0.5 bg-luxury-gold mx-auto mb-6" />
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable, and intelligent applications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {Object.entries(skillCategories).map(([category, skills], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              className="space-y-6"
            >
              <div className="text-center">
                <h3 className="font-luxury text-2xl font-semibold text-luxury-gold mb-4">
                  {category}
                </h3>
                <div className="w-12 h-0.5 bg-luxury-gold/50 mx-auto" />
              </div>
              
              <div className="flex flex-wrap gap-2 justify-center">
                {skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.5, 
                      delay: categoryIndex * 0.2 + skillIndex * 0.05 
                    }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <Badge 
                      variant="secondary" 
                      className="bg-card/50 border border-luxury-gold/20 text-foreground hover:bg-luxury-gold/10 hover:border-luxury-gold/40 transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Experience Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="space-y-2">
              <div className="text-4xl font-luxury font-bold text-luxury-gold">
                3+
              </div>
              <p className="font-body text-muted-foreground">
                Years of Experience
              </p>
            </div>
            
            <div className="space-y-2">
              <div className="text-4xl font-luxury font-bold text-luxury-gold">
                10+
              </div>
              <p className="font-body text-muted-foreground">
                Projects Completed
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}