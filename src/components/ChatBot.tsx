import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

interface ChatBotProps {
  className?: string;
}

const ChatBot: React.FC<ChatBotProps> = ({ className = '' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi! I'm here to help you learn about Natnael's services, pricing, and workflow. What would you like to know?",
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const botResponses = {
    services: [
      "I offer comprehensive full-stack development and AI automation services including:",
      "• Custom Web Applications (React, Next.js, Node.js)",
      "• AI-Powered Solutions & Automation",
      "• E-commerce Development", 
      "• API Development & Integration",
      "• Database Design & Optimization",
      "• Cloud Deployment & DevOps",
      "Would you like details about any specific service?"
    ].join('\n'),
    
    pricing: [
      "My pricing is flexible and project-based:",
      "• Simple Landing Pages: $800 - $1,500",
      "• Full-Stack Web Apps: $2,500 - $8,000",
      "• AI Automation Solutions: $1,500 - $5,000",
      "• E-commerce Platforms: $3,000 - $10,000",
      "• Hourly Consultation: $75/hour",
      "",
      "I offer free initial consultations to discuss your specific needs and provide accurate quotes."
    ].join('\n'),
    
    workflow: [
      "My development process ensures quality and transparency:",
      "",
      "1. 📋 Discovery & Planning (1-2 days)",
      "   • Requirements gathering",
      "   • Technical specification",
      "   • Project timeline",
      "",
      "2. 🎨 Design & Prototyping (2-5 days)",
      "   • UI/UX design",
      "   • Interactive prototypes",
      "   • Client approval",
      "",
      "3. 💻 Development (1-4 weeks)",
      "   • Agile development cycles",
      "   • Regular progress updates",
      "   • Testing & quality assurance",
      "",
      "4. 🚀 Deployment & Launch",
      "   • Production deployment",
      "   • Performance optimization",
      "   • Training & documentation"
    ].join('\n'),
    
    communication: [
      "I believe in transparent and regular communication:",
      "",
      "• Daily progress updates via Slack/Email",
      "• Weekly video calls for project review",
      "• Shared project dashboard for real-time tracking",
      "• 24-48 hour response time for all messages",
      "• Available for urgent support",
      "",
      "You'll always know exactly where your project stands!"
    ].join('\n'),
    
    delivery: [
      "I'm committed to timely, quality delivery:",
      "",
      "• On-time delivery guarantee",
      "• Staged delivery milestones",
      "• 30-day post-launch support included",
      "• Source code & documentation provided",
      "• 1-year bug-fix warranty",
      "• Optional maintenance packages available",
      "",
      "Your success is my priority!"
    ].join('\n'),
    
    contact: [
      "Ready to start your project? Let's connect:",
      "",
      "📧 Email: hello@natnael.dev",
      "💼 LinkedIn: linkedin.com/in/natnael",
      "📱 Schedule a call: calendly.com/natnael",
      "",
      "I typically respond within 2-4 hours during business days.",
      "Free consultation calls available!"
    ].join('\n')
  };

  const getKeywords = (text: string): string[] => {
    return text.toLowerCase().split(/\s+/);
  };

  const findBestResponse = (userInput: string): string => {
    const keywords = getKeywords(userInput);
    const responses = Object.entries(botResponses);
    
    let bestMatch = '';
    let maxScore = 0;

    for (const [key, response] of responses) {
      let score = 0;
      
      // Direct keyword matching
      if (keywords.some(keyword => key.includes(keyword))) {
        score += 5;
      }
      
      // Context-aware matching
      if (keywords.includes('price') || keywords.includes('cost') || keywords.includes('pricing') || keywords.includes('rates')) {
        if (key === 'pricing') score += 10;
      }
      
      if (keywords.includes('service') || keywords.includes('services') || keywords.includes('what') || keywords.includes('do')) {
        if (key === 'services') score += 10;
      }
      
      if (keywords.includes('process') || keywords.includes('workflow') || keywords.includes('how') || keywords.includes('work')) {
        if (key === 'workflow') score += 10;
      }
      
      if (keywords.includes('communication') || keywords.includes('contact') || keywords.includes('talk') || keywords.includes('updates')) {
        if (key === 'communication') score += 10;
      }
      
      if (keywords.includes('delivery') || keywords.includes('timeline') || keywords.includes('time') || keywords.includes('when')) {
        if (key === 'delivery') score += 10;
      }
      
      if (keywords.includes('contact') || keywords.includes('email') || keywords.includes('reach') || keywords.includes('connect')) {
        if (key === 'contact') score += 10;
      }

      if (score > maxScore) {
        maxScore = score;
        bestMatch = response;
      }
    }

    if (maxScore === 0) {
      return "I'd be happy to help! I can provide information about:\n\n• Services & capabilities\n• Pricing & packages\n• Development workflow\n• Communication process\n• Delivery timelines\n• Contact information\n\nWhat would you like to know more about?";
    }

    return bestMatch;
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const botResponse = findBestResponse(inputValue);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponse,
        sender: 'bot',
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className={`fixed bottom-6 right-6 z-50 ${className}`}>
      {/* Floating Chat Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ scale: 0, opacity: 0, y: 100 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0, opacity: 0, y: 100 }}
            transition={{ 
              type: "spring", 
              stiffness: 300, 
              damping: 20,
              delay: 2 
            }}
          >
            <Button
              onClick={() => setIsOpen(true)}
              className="
                w-16 h-16 rounded-full shadow-luxury
                bg-luxury-gold hover:bg-luxury-gold/90
                text-luxury-onyx
                hover:scale-110 hover:shadow-glow
                transition-all duration-300 ease-out
                group animate-pulse-slow
              "
            >
              <motion.div
                animate={{ 
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  repeatDelay: 3
                }}
              >
                <Bot className="w-7 h-7" />
              </motion.div>
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ 
              scale: 0, 
              opacity: 0, 
              y: 50,
              transformOrigin: "bottom right" 
            }}
            animate={{ 
              scale: 1, 
              opacity: 1, 
              y: 0 
            }}
            exit={{ 
              scale: 0, 
              opacity: 0, 
              y: 50 
            }}
            transition={{ 
              type: "spring", 
              stiffness: 300, 
              damping: 25 
            }}
            className="
              mb-4 w-96 h-[32rem] 
              card-luxury
              flex flex-col
              overflow-hidden
            "
          >
            {/* Chat Header */}
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="
                p-4 bg-gradient-luxury border-b border-luxury-gold/20
                flex items-center justify-between
              "
            >
              <div className="flex items-center gap-3">
                <div className="
                  w-10 h-10 rounded-full bg-luxury-gold/20 
                  flex items-center justify-center
                  animate-bounce-gentle
                ">
                  <Bot className="w-5 h-5 text-luxury-gold" />
                </div>
                <div>
                  <h3 className="font-luxury font-semibold text-foreground text-glow">
                    Natnael's Assistant
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    Usually replies instantly
                  </p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="
                  w-8 h-8 p-0 
                  hover:bg-luxury-gold/20 
                  transition-all duration-200
                  hover:scale-110
                  hover:rotate-90
                "
              >
                <X className="w-4 h-4" />
              </Button>
            </motion.div>

            {/* Messages Container */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-depth">
              <AnimatePresence mode="popLayout">
                {messages.map((message, index) => (
                  <motion.div
                    key={message.id}
                    initial={{ 
                      opacity: 0, 
                      y: 20,
                      x: message.sender === 'user' ? 20 : -20 
                    }}
                    animate={{ 
                      opacity: 1, 
                      y: 0, 
                      x: 0 
                    }}
                    transition={{ 
                      type: "spring",
                      stiffness: 300,
                      damping: 20,
                      delay: index * 0.1 
                    }}
                    className={`
                      flex gap-2 
                      ${message.sender === 'user' ? 'justify-end' : 'justify-start'}
                    `}
                  >
                    {message.sender === 'bot' && (
                      <motion.div 
                        className="
                          w-8 h-8 rounded-full bg-luxury-gold/20 
                          flex items-center justify-center flex-shrink-0 mt-auto
                          hover:bg-luxury-gold/30 transition-colors duration-200
                        "
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Bot className="w-4 h-4 text-luxury-gold" />
                      </motion.div>
                    )}
                    
                    <motion.div
                      className={`
                        max-w-[75%] p-3 rounded-lg
                        ${message.sender === 'user' 
                          ? 'bg-luxury-gold text-luxury-onyx ml-auto shadow-luxury' 
                          : 'bg-card/80 backdrop-blur-sm text-foreground border border-luxury-gold/10'
                        }
                        ${message.sender === 'bot' ? 'rounded-bl-sm' : 'rounded-br-sm'}
                        hover:shadow-glow transition-all duration-300
                      `}
                      whileHover={{ scale: 1.02 }}
                      layout
                    >
                      <p className="text-sm leading-relaxed whitespace-pre-line">
                        {message.text}
                      </p>
                    </motion.div>
                    
                    {message.sender === 'user' && (
                      <motion.div 
                        className="
                          w-8 h-8 rounded-full bg-luxury-gold/80 
                          flex items-center justify-center flex-shrink-0 mt-auto
                        "
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <User className="w-4 h-4 text-luxury-onyx" />
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </AnimatePresence>

              {/* Typing Indicator */}
              <AnimatePresence>
                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="flex gap-2 justify-start"
                  >
                    <div className="
                      w-8 h-8 rounded-full bg-luxury-gold/20 
                      flex items-center justify-center flex-shrink-0 mt-auto
                    ">
                      <Bot className="w-4 h-4 text-luxury-gold" />
                    </div>
                    <div className="bg-card/80 backdrop-blur-sm p-3 rounded-lg rounded-bl-sm border border-luxury-gold/10">
                      <div className="flex gap-1">
                        {[0, 1, 2].map((i) => (
                          <motion.div
                            key={i}
                            className="w-2 h-2 bg-luxury-gold/60 rounded-full"
                            animate={{ 
                              scale: [1, 1.2, 1],
                              opacity: [0.5, 1, 0.5]
                            }}
                            transition={{ 
                              duration: 1, 
                              repeat: Infinity,
                              delay: i * 0.2 
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="p-4 border-t border-luxury-gold/20 bg-gradient-luxury"
            >
              <div className="flex gap-2">
                <Input
                  ref={inputRef}
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask about services, pricing, workflow..."
                  className="
                    flex-1 
                    bg-background/50 backdrop-blur-sm
                    border-luxury-gold/20 
                    focus:border-luxury-gold/40 
                    focus:ring-luxury-gold/20
                    focus:shadow-glow
                    transition-all duration-200
                    hover:border-luxury-gold/30
                  "
                  disabled={isTyping}
                />
                <Button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim() || isTyping}
                  className="
                    w-10 h-10 p-0
                    bg-luxury-gold hover:bg-luxury-gold/90
                    text-luxury-onyx
                    hover:scale-105 hover:shadow-glow
                    transition-all duration-200
                    disabled:opacity-50 disabled:cursor-not-allowed
                    disabled:hover:scale-100
                  "
                >
                  <motion.div
                    whileHover={{ rotate: 15 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Send className="w-4 h-4" />
                  </motion.div>
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ChatBot;