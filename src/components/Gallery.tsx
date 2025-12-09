import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import SectionTitle from './SectionTitle';

const BASE_URL = import.meta.env.BASE_URL || '/';

const images = [

  "assets/gallery/KIM_2354.jpg",
  "assets/gallery/KIM_2453.jpg",
  "assets/gallery/KIM_2521.jpg",
  "assets/gallery/KIM_2684.jpg",
  "assets/gallery/KIM_3740.jpg",

  "assets/gallery/KIM_2408.jpg",
  "assets/gallery/KIM_2704.jpg",
  "assets/gallery/KIM_2722.jpg",
  "assets/gallery/KIM_2786.jpg",
  "assets/gallery/KIM_2356.jpg",

  "assets/gallery/KIM_2798.jpg",
  "assets/gallery/KIM_2966.jpg",
  "assets/gallery/KIM_2977.jpg",
  "assets/gallery/KIM_3992.jpg",
  "assets/gallery/KIM_3677.jpg",

  "assets/gallery/KIM_3089.jpg",
  "assets/gallery/KIM_3286.jpg",
  "assets/gallery/KIM_3980.jpg",
  "assets/gallery/KIM_3924.jpg",
  "assets/gallery/KIM_3582.jpg",


];

const Gallery: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // keyboard nav + close + prevent background scroll when modal open
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === 'Escape') {
        setSelectedIndex(null);
      } else if (e.key === 'ArrowLeft') {
        setSelectedIndex((prev) => {
          if (prev === null) return null;
          return (prev - 1 + images.length) % images.length;
        });
      } else if (e.key === 'ArrowRight') {
        setSelectedIndex((prev) => {
          if (prev === null) return null;
          return (prev + 1) % images.length;
        });
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [selectedIndex]);

  useEffect(() => {
    if (selectedIndex !== null) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = prev || '';
      };
    }
    return;
  }, [selectedIndex]);

  const openAt = (i: number) => setSelectedIndex(i);
  const close = () => setSelectedIndex(null);
  const prev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setSelectedIndex((s) => (s === null ? null : (s - 1 + images.length) % images.length));
  };
  const next = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setSelectedIndex((s) => (s === null ? null : (s + 1) % images.length));
  };

  return (
    <section className="py-20 px-4 bg-stone-50">
      <div className="max-w-6xl mx-auto">
        <SectionTitle title="Khoảnh Khắc Ngọt Ngào" subtitle="Lưu giữ từng phút giây hạnh phúc" />

        {/* Masonry using CSS columns */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4 max-w-6xl mx-auto">
          {images.map((src, index) => (
            <motion.div
              key={index}
              layout
              whileHover={{ scale: 1.02 }}
              className="break-inside-avoid relative group rounded-lg overflow-hidden mb-4 shadow-md cursor-pointer"
              onClick={() => openAt(index)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.03 }}
            >
              <img
                src={`${BASE_URL}${src}`}
                alt={`Gallery ${index}`}
                loading="lazy"
                decoding="async"
                fetchPriority="low"
                draggable={false}
                style={{ willChange: 'transform' }}
                className="w-full h-auto object-cover block transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
              onClick={close}
            >
              <button
                aria-label="Close"
                className="absolute top-4 right-4 text-white p-2 hover:bg-white/10 rounded-full transition-colors z-50"
                onClick={(e) => {
                  e.stopPropagation();
                  close();
                }}
              >
                <X size={28} />
              </button>

              <button
                aria-label="Previous image"
                className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white bg-black/30 hover:bg-black/50 p-2 rounded-full z-50"
                onClick={prev}
              >
                <ChevronLeft size={28} />
              </button>

              <motion.div
                layout
                className="relative max-w-4xl max-h-[90vh] w-full flex items-center justify-center"
                onClick={(e) => e.stopPropagation()}
              >
                <motion.img
                  src={images[selectedIndex]}
                  alt={`Selected ${selectedIndex}`}
                  loading="eager"
                  decoding="async"
                  fetchPriority="high"
                  draggable={false}
                  style={{ willChange: 'transform' }}
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.95, opacity: 0 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                  className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
                />
              </motion.div>

              <button
                aria-label="Next image"
                className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white bg-black/30 hover:bg-black/50 p-2 rounded-full z-50"
                onClick={next}
              >
                <ChevronRight size={28} />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Gallery;
