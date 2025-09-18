import { motion } from 'framer-motion';
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, ExternalLink, Star } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message sent successfully!",
      description: "I'll get back to you within 24 hours.",
    });
    
    setFormData({ name: '', email: '', project: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-luxury text-4xl md:text-5xl font-bold mb-6">
            Let's Create Something Extraordinary
          </h2>
          <div className="w-16 h-0.5 bg-luxury-gold mx-auto mb-6" />
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your vision to life? Let's discuss your project and explore the possibilities.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="card-luxury">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="font-body text-sm font-medium text-luxury-gold mb-2 block">
                        Name *
                      </label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="bg-background/50 border-luxury-gold/20 focus:border-luxury-gold"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="font-body text-sm font-medium text-luxury-gold mb-2 block">
                        Email *
                      </label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="bg-background/50 border-luxury-gold/20 focus:border-luxury-gold"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="font-body text-sm font-medium text-luxury-gold mb-2 block">
                      Project Type
                    </label>
                    <Input
                      name="project"
                      value={formData.project}
                      onChange={handleChange}
                      className="bg-background/50 border-luxury-gold/20 focus:border-luxury-gold"
                      placeholder="Web Development, AI Automation, Chatbot, etc."
                    />
                  </div>
                  
                  <div>
                    <label className="font-body text-sm font-medium text-luxury-gold mb-2 block">
                      Project Details *
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="bg-background/50 border-luxury-gold/20 focus:border-luxury-gold resize-none"
                      placeholder="Tell me about your project, timeline, and requirements..."
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary-luxury w-full text-lg py-4 hover:scale-[1.02] transition-all duration-300"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info & Freelance Links */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Contact Methods */}
            <Card className="card-luxury">
              <CardContent className="p-8">
                <h3 className="font-luxury text-2xl font-semibold mb-6">
                  Get In Touch
                </h3>
                
                <div className="space-y-4">
                  <a
                    href="mailto:natnael@example.com"
                    className="flex items-center gap-4 p-4 rounded-lg bg-gradient-luxury hover:shadow-glow transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 bg-luxury-gold/10 rounded-lg flex items-center justify-center group-hover:bg-luxury-gold/20 transition-colors">
                      <Mail className="w-6 h-6 text-luxury-gold" />
                    </div>
                    <div>
                      <p className="font-body font-medium">Email</p>
                      <p className="font-body text-sm text-muted-foreground">natnael@example.com</p>
                    </div>
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Freelance Platforms */}
            <Card className="card-luxury">
              <CardContent className="p-8">
                <h3 className="font-luxury text-2xl font-semibold mb-6">
                  Freelance Platforms
                </h3>
                
                <div className="space-y-4">
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 rounded-lg bg-gradient-luxury hover:shadow-glow transition-all duration-300 group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center group-hover:bg-green-500/20 transition-colors">
                        <span className="text-green-500 font-bold">U</span>
                      </div>
                      <div>
                        <p className="font-body font-medium">Upwork</p>
                        <div className="flex items-center gap-1">
                          {[1,2,3,4,5].map((star) => (
                            <Star key={star} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                          ))}
                          <span className="font-body text-xs text-muted-foreground ml-1">5.0 Rating</span>
                        </div>
                      </div>
                    </div>
                    <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-luxury-gold transition-colors" />
                  </a>
                  
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 rounded-lg bg-gradient-luxury hover:shadow-glow transition-all duration-300 group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-green-600/10 rounded-lg flex items-center justify-center group-hover:bg-green-600/20 transition-colors">
                        <span className="text-green-600 font-bold">F</span>
                      </div>
                      <div>
                        <p className="font-body font-medium">Fiverr</p>
                        <div className="flex items-center gap-1">
                          {[1,2,3,4,5].map((star) => (
                            <Star key={star} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                          ))}
                          <span className="font-body text-xs text-muted-foreground ml-1">Top Rated</span>
                        </div>
                      </div>
                    </div>
                    <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-luxury-gold transition-colors" />
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* CTA */}
            <motion.div
              className="text-center p-8 bg-gradient-luxury rounded-xl border border-luxury-gold/20"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <h3 className="font-luxury text-xl font-semibold mb-2">
                Ready to Start?
              </h3>
              <p className="font-body text-muted-foreground mb-4">
                Let's discuss your project requirements
              </p>
              <Button className="btn-primary-luxury">
                Hire Me Now
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}