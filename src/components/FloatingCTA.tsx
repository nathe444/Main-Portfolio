import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';

export default function FloatingCTA() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 800], [0, 1]);
  const scale = useTransform(scrollY, [0, 800], [0.8, 1]);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.div
      style={{ opacity, scale }}
      className="fixed bottom-8 right-8 z-40"
      initial={{ opacity: 0, scale: 0.8 }}
    >
      <Button
        onClick={scrollToContact}
        className="btn-luxury group relative h-14 w-14 rounded-full shadow-[0_0_30px_hsl(var(--luxury-gold)_/_0.4)] hover:shadow-[0_0_40px_hsl(var(--luxury-gold)_/_0.6)] transition-all duration-500"
      >
        <MessageCircle className="w-6 h-6 text-luxury-gold group-hover:scale-110 transition-transform duration-300" />
        <div className="absolute -inset-2 rounded-full bg-luxury-gold/20 animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </Button>
    </motion.div>
  );
}