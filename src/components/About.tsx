import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

export default function About() {
  return (
    <section id="about" className="py-24 bg-gradient-depth">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-luxury text-4xl md:text-5xl font-bold mb-6">
              Crafting Digital Excellence
            </h2>
            <div className="w-16 h-0.5 bg-luxury-gold mx-auto" />
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 items-start">
            {/* Main content */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="prose prose-lg max-w-none">
                <p className="font-body text-lg leading-relaxed text-muted-foreground mb-8">
                  I specialize in creating sophisticated digital experiences that seamlessly blend 
                  cutting-edge technology with elegant design. My expertise spans full-stack development, 
                  AI automation, and intelligent chatbot solutions.
                </p>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-luxury text-2xl font-semibold mb-4 text-luxury-gold">
                      Frontend Mastery
                    </h3>
                    <ul className="font-body text-muted-foreground space-y-2">
                      <li>• React & Redux Toolkit</li>
                      <li>• TypeScript & Modern JavaScript</li>
                      <li>• Tailwind CSS & Responsive Design</li>
                      <li>• Performance Optimization</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-luxury text-2xl font-semibold mb-4 text-luxury-gold">
                      Backend & AI
                    </h3>
                    <ul className="font-body text-muted-foreground space-y-2">
                      <li>• Node.js & Express</li>
                      <li>• MongoDB & PostgreSQL</li>
                      <li>• n8n Automation Workflows</li>
                      <li>• RAG & Generative AI Solutions</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Side accent */}
            <motion.div
              className="lg:col-span-1"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Card className="card-luxury h-full">
                <CardContent className="p-8">
                  <div className="text-center">
                    <div className="text-4xl font-luxury font-bold text-luxury-gold mb-2">
                      5+
                    </div>
                    <p className="font-body text-sm text-muted-foreground mb-6">
                      Years Experience
                    </p>
                    
                    <div className="text-4xl font-luxury font-bold text-luxury-gold mb-2">
                      50+
                    </div>
                    <p className="font-body text-sm text-muted-foreground mb-6">
                      Projects Delivered
                    </p>
                    
                    <div className="text-4xl font-luxury font-bold text-luxury-gold mb-2">
                      ★★★★★
                    </div>
                    <p className="font-body text-sm text-muted-foreground">
                      Client Satisfaction
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}