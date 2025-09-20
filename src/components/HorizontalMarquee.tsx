import { motion } from 'framer-motion';
import { useState } from 'react';

interface MarqueeItem {
  text: string;
  type: 'identity' | 'impact' | 'testimonial';
}

const PremiumMarquee = () => {
  const [isHovered, setIsHovered] = useState(false);

  const identityItems: MarqueeItem[] = [
    { text: "CREATIVE DEVELOPER", type: "identity" },
    { text: "OPEN MINDED", type: "identity" },
    { text: "PROBLEM SOLVER", type: "identity" },
    { text: "INNOVATIVE THINKER", type: "identity" },
    { text: "DIGITAL CRAFTSMAN", type: "identity" },
  ];

  const impactItems: MarqueeItem[] = [
    { text: "10+ PROJECTS DELIVERED", type: "impact" },
    { text: "GREAT CLIENT SATISFACTION", type: "impact" },
    { text: "10k+ USERS REACHED", type: "impact" },
    { text: "24/7 SUPPORT", type: "impact" },
  ];

  const testimonialItems: MarqueeItem[] = [
    { text: "\"GREAT WORK ETHIC\" – MIKE KOBIA", type: "testimonial" },
    { text: "\"EXCEPTIONAL WORK\" – HENOK ALEMU", type: "testimonial" },
    { text: "\"HIGHLY RECOMMENDED\" – PRIVATE CLIENT", type: "testimonial" },
    { text: "\"OUTSTANDING RESULTS\" – UPWORK CLIENT", type: "testimonial" },
  ];

  const duplicateArray = (arr: MarqueeItem[]) => [...arr, ...arr, ...arr, ...arr];

  return (
    <div className="relative overflow-hidden">
      {/* Theme-Adaptive Background */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background dark:from-[#0A0A0A] dark:via-[#1A1A1A] dark:to-[#0A0A0A]" />
      
      <div className="relative py-12">
        {/* Top Luxury HR Line */}
        <div className="relative mb-10">
          <div className="absolute left-0 right-0 top-0 h-px bg-border opacity-60 dark:bg-[#F0EDE6] dark:opacity-30" />
          <motion.div 
            className="absolute left-1/2 transform -translate-x-1/2 -top-1 w-3 h-3 bg-primary rounded-full opacity-60 dark:bg-[#D4AF37]"
            animate={{ 
              opacity: isHovered ? [0.6, 1, 0.6] : 0.6,
              scale: isHovered ? [1, 1.2, 1] : 1 
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>

        {/* Professional Identity Banner - Left to Right */}
        <div className="transform rotate-1 mb-12">
          <motion.div
            className="flex whitespace-nowrap items-center"
            animate={{
              x: isHovered ? "-20%" : "-100%",
            }}
            transition={{
              duration: isHovered ? 110 : 45,
              repeat: Infinity,
              ease: "linear",
              
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {duplicateArray(identityItems).map((item, index) => (
              <div
                key={`identity-${index}`}
                className="inline-flex items-center mx-12 group cursor-pointer"
              >
                <span
                  className="text-2xl md:text-4xl lg:text-5xl font-bold text-foreground group-hover:scale-105 transition-all duration-500 tracking-wider drop-shadow-lg dark:text-[#D4AF37]"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  {item.text}
                </span>
                <div className="w-16 h-px bg-gradient-to-r from-primary to-transparent ml-8 opacity-60 dark:from-[#D4AF37]" />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Luxury Separator */}
        <div className="flex items-center justify-center my-20 px-8">
          <div className="flex-1 h-0.5 bg-border opacity-80 dark:bg-[#F0EDE6] dark:opacity-50" />
          <motion.div 
            className="mx-10 w-5 h-5 bg-primary rounded-full opacity-80 dark:bg-[#D4AF37]"
            animate={{ 
              opacity: isHovered ? [0.8, 1, 0.8] : 0.8 
            }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
          />
          <div className="flex-1 h-0.5 bg-border opacity-80 dark:bg-[#F0EDE6] dark:opacity-50" />
        </div>

        {/* Impact Numbers - Right to Left */}
        <div className="transform -rotate-1 mb-12">
          <motion.div
            className="flex whitespace-nowrap items-center"
            animate={{
              x: isHovered ? "25%" : "100%",
            }}
            transition={{
              duration: isHovered ? 85 : 42,
              repeat: Infinity,
              ease: "linear",
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {duplicateArray(impactItems).map((item, index) => (
              <div
                key={`impact-${index}`}
                className="inline-flex items-center mx-16 group cursor-pointer"
              >
                <div className="w-20 h-px bg-gradient-to-l from-primary to-transparent mr-10 opacity-60 dark:from-[#D4AF37]" />
                <span
                  className="text-xl md:text-3xl lg:text-4xl font-bold text-foreground group-hover:scale-110 transition-all duration-500 tracking-wide drop-shadow-lg dark:text-[#D4AF37]"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  {item.text}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Luxury Separator */}
        <div className="flex items-center justify-center my-20 px-8">
          <div className="flex-1 h-0.5 bg-border opacity-80 dark:bg-[#F0EDE6] dark:opacity-50" />
          <motion.div 
            className="mx-10 w-5 h-5 bg-primary rounded-full opacity-80 dark:bg-[#D4AF37]"
            animate={{ 
              opacity: isHovered ? [0.8, 1, 0.8] : 0.8 
            }}
            transition={{ duration: 2, repeat: Infinity, delay: 1 }}
          />
          <div className="flex-1 h-0.5 bg-border opacity-80 dark:bg-[#F0EDE6] dark:opacity-50" />
        </div>

        {/* Testimonial Highlights - Left to Right */}
        <div className="transform rotate-1 mb-12">
          <motion.div
            className="flex whitespace-nowrap items-center"
            animate={{
              x: isHovered ? "-30%" : "-100%",
            }}
            transition={{
              duration: isHovered ? 120 : 60,
              repeat: Infinity,
              ease: "linear",
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {duplicateArray(testimonialItems).map((item, index) => (
              <div
                key={`testimonial-${index}`}
                className="inline-flex items-center mx-20 group cursor-pointer"
              >
                <span
                  className="text-lg md:text-2xl lg:text-3xl font-medium text-foreground group-hover:scale-105 transition-all duration-500 tracking-wide italic drop-shadow-lg dark:text-[#D4AF37]"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  {item.text.split('–')[0]}
                  <span className="text-muted-foreground font-normal text-xs md:text-base lg:text-lg uppercase tracking-wider not-italic ml-2 dark:text-[#C0C0C0]" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {item.text.split('–')[1]}
                  </span>
                </span>
                <div className="w-24 h-px bg-gradient-to-r from-primary to-transparent ml-12 opacity-60 dark:from-[#D4AF37]" />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Bottom Luxury HR Line */}
        <div className="relative mt-10">
          <div className="absolute left-0 right-0 bottom-0 h-px bg-border opacity-60 dark:bg-[#F0EDE6] dark:opacity-30" />
          <motion.div 
            className="absolute right-1/3 transform -bottom-1 w-3 h-3 bg-primary rounded-full opacity-60 dark:bg-[#D4AF37]"
            animate={{ 
              opacity: isHovered ? [0.6, 1, 0.6] : 0.6,
              scale: isHovered ? [1, 1.2, 1] : 1 
            }}
            transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
          />
        </div>

        {/* Theme-Adaptive Edge Gradients */}
        <div className="absolute top-0 left-0 w-48 h-full bg-gradient-to-r from-background via-background/90 to-transparent pointer-events-none z-10 dark:from-[#0A0A0A] dark:via-[#0A0A0A]/90" />
        <div className="absolute top-0 right-0 w-48 h-full bg-gradient-to-l from-background via-background/90 to-transparent pointer-events-none z-10 dark:from-[#0A0A0A] dark:via-[#0A0A0A]/90" />
      </div>
    </div>
  );
};

export default PremiumMarquee;