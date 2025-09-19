import React from 'react';
import { Moon, Sun, Monitor } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import { motion } from 'framer-motion';

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  const themes = [
    { name: 'light', icon: Sun, label: 'Light' },
    { name: 'dark', icon: Moon, label: 'Dark' },
    { name: 'system', icon: Monitor, label: 'System' },
  ] as const;

  return (
    <div className="fixed top-6 right-6 z-50">
      <div className="bg-card/80 backdrop-blur-md border border-luxury-gold/20 rounded-xl p-2 shadow-luxury">
        <div className="flex gap-1">
          {themes.map(({ name, icon: Icon, label }) => (
            <motion.button
              key={name}
              onClick={() => setTheme(name)}
              className={`relative p-2 rounded-lg transition-all duration-300 ${
                theme === name
                  ? 'bg-luxury-gold text-luxury-onyx shadow-glow'
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              title={`Switch to ${label} theme`}
            >
              <Icon size={16} />
              {theme === name && (
                <motion.div
                  className="absolute inset-0 bg-luxury-gold rounded-lg"
                  layoutId="activeTheme"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30
                  }}
                  style={{ zIndex: -1 }}
                />
              )}
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ThemeToggle;