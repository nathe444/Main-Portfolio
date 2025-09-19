import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ProjectImage {
  src: string;
  alt: string;
  caption?: string;
}

interface ProjectGalleryProps {
  images: ProjectImage[];
  projectTitle: string;
}

export default function ProjectGallery({ images, projectTitle }: ProjectGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };

  const nextLightboxImage = () => {
    setLightboxIndex((prev) => (prev + 1) % images.length);
  };

  const prevLightboxImage = () => {
    setLightboxIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <>
      {/* Gallery Carousel */}
      <div className="relative aspect-video bg-gradient-luxury overflow-hidden rounded-lg group">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex}
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            className="w-full h-full object-cover cursor-pointer"
            onClick={() => openLightbox(currentIndex)}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
          />
        </AnimatePresence>

        {/* Navigation Controls */}
        {images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-luxury-onyx/80 backdrop-blur-sm border border-luxury-gold/20 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-luxury-gold/20"
            >
              <ChevronLeft className="w-5 h-5 text-luxury-gold" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-luxury-onyx/80 backdrop-blur-sm border border-luxury-gold/20 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-luxury-gold/20"
            >
              <ChevronRight className="w-5 h-5 text-luxury-gold" />
            </button>

            {/* Image Indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-luxury-gold w-6' 
                      : 'bg-luxury-gold/40 hover:bg-luxury-gold/60'
                  }`}
                />
              ))}
            </div>
          </>
        )}

        {/* Glassmorphism Overlay */}
        <div className="absolute inset-0 bg-luxury-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-[1px]" />
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            className="fixed inset-0 bg-luxury-onyx/95 backdrop-blur-md z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <motion.div
              className="relative max-w-6xl max-h-[90vh] w-full"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={images[lightboxIndex].src}
                alt={images[lightboxIndex].alt}
                className="w-full h-full object-contain rounded-lg"
              />

              {/* Lightbox Controls */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 w-10 h-10 bg-luxury-onyx/80 backdrop-blur-sm border border-luxury-gold/20 rounded-full flex items-center justify-center hover:bg-luxury-gold/20 transition-colors"
              >
                <X className="w-5 h-5 text-luxury-gold" />
              </button>

              {images.length > 1 && (
                <>
                  <button
                    onClick={prevLightboxImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-luxury-onyx/80 backdrop-blur-sm border border-luxury-gold/20 rounded-full flex items-center justify-center hover:bg-luxury-gold/20 transition-colors"
                  >
                    <ChevronLeft className="w-6 h-6 text-luxury-gold" />
                  </button>
                  <button
                    onClick={nextLightboxImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-luxury-onyx/80 backdrop-blur-sm border border-luxury-gold/20 rounded-full flex items-center justify-center hover:bg-luxury-gold/20 transition-colors"
                  >
                    <ChevronRight className="w-6 h-6 text-luxury-gold" />
                  </button>
                </>
              )}

              {/* Image Counter */}
              {images.length > 1 && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-luxury-onyx/80 backdrop-blur-sm border border-luxury-gold/20 rounded-full px-4 py-2">
                  <span className="text-luxury-gold text-sm">
                    {lightboxIndex + 1} / {images.length}
                  </span>
                </div>
              )}

              {/* Caption */}
              {images[lightboxIndex].caption && (
                <div className="absolute bottom-4 left-4 right-16 bg-luxury-onyx/80 backdrop-blur-sm border border-luxury-gold/20 rounded-lg p-4">
                  <p className="text-soft-off-white text-sm">
                    {images[lightboxIndex].caption}
                  </p>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}