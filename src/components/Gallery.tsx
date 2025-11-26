import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const images = [
  "/assets/gallery/KIM_2354.jpg",
  "/assets/gallery/KIM_2453.jpg",
  "/assets/gallery/KIM_2521.jpg",
  "/assets/gallery/KIM_2684.jpg",
  "/assets/gallery/KIM_2704.jpg",
  "/assets/gallery/KIM_2722.jpg",
  "/assets/gallery/KIM_2786.jpg",
  "/assets/gallery/KIM_2803.jpg",
  "/assets/gallery/KIM_2966.jpg",
  "/assets/gallery/KIM_2977.jpg",
  "/assets/gallery/KIM_2988.jpg",
  "/assets/gallery/KIM_2992.jpg",
  "/assets/gallery/KIM_3285.jpg",
  "/assets/gallery/KIM_3286.jpg",
];

const Gallery = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  return (
    <section className="py-20 px-4 bg-stone-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif text-center mb-12 text-stone-800">Our Moments</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((src, index) => (
            <motion.div
              key={index}
              layoutId={`image-${index}`}
              onClick={() => setSelectedId(index.toString())}
              className="cursor-pointer overflow-hidden rounded-lg shadow-md aspect-[3/4] relative group"
              whileHover={{ scale: 1.02 }}
            >
              <img
                src={src}
                alt={`Gallery ${index}`}
                loading="lazy"
                decoding="async"
                fetchPriority="low"
                style={{ willChange: 'transform' }}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedId && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
              onClick={() => setSelectedId(null)}
            >
              <button
                className="absolute top-4 right-4 text-white p-2 hover:bg-white/20 rounded-full transition-colors"
                onClick={() => setSelectedId(null)}
              >
                <X size={32} />
              </button>

              <motion.div
                layoutId={`image-${selectedId}`}
                className="relative max-w-4xl max-h-[90vh] w-full h-full flex items-center justify-center"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={images[parseInt(selectedId || '0')]}
                  alt="Selected"
                  loading="eager"
                  decoding="async"
                  fetchPriority="high"
                  style={{ willChange: 'transform' }}
                  className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Gallery;
