import React, { useState } from 'react';
import SectionTitle from './SectionTitle';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Heart, Expand } from 'lucide-react';

// Using a mix of portrait and landscape images for Masonry effect
const PHOTOS = [
  { id: 1, src: "https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=800&auto=format&fit=crop", alt: "Trao nhẫn", category: "Ceremony" },
  { id: 2, src: "https://images.unsplash.com/photo-1511285560982-1351cdeb9821?q=80&w=800&auto=format&fit=crop", alt: "Cầm tay", category: "Moments" },
  { id: 3, src: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop", alt: "Tiệc cưới", category: "Party" },
  { id: 4, src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=800&auto=format&fit=crop", alt: "Cô dâu", category: "Portrait" },
  { id: 5, src: "https://images.unsplash.com/photo-1520854221256-17451cc330e7?q=80&w=800&auto=format&fit=crop", alt: "Nụ cười", category: "Moments" },
  { id: 6, src: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=800&auto=format&fit=crop", alt: "Váy cưới", category: "Dress" },
  { id: 7, src: "https://images.unsplash.com/photo-1623161557221-118430a61849?q=80&w=800&auto=format&fit=crop", alt: "Hoa cưới", category: "Decor" },
  { id: 8, src: "https://images.unsplash.com/photo-1532712938310-34cb3958d677?q=80&w=800&auto=format&fit=crop", alt: "Hạnh phúc", category: "Emotion" },
];

const Gallery2: React.FC = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const selectedImage = PHOTOS.find(p => p.id === selectedId);

  return (
    <section className="py-20 bg-gradient-to-b from-white to-wedding-cream/30" id="gallery">
      <div className="container mx-auto px-4">
        <SectionTitle title="Khoảnh Khắc Ngọt Ngào" subtitle="Lưu giữ từng phút giây hạnh phúc" />
        
        {/* Masonry Layout using CSS Columns */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4 max-w-7xl mx-auto">
          {PHOTOS.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="break-inside-avoid relative group rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all duration-500 mb-4 bg-gray-200"
              onClick={() => setSelectedId(photo.id)}
            >
              <img 
                src={photo.src} 
                alt={photo.alt} 
                className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              
              {/* Elegant Overlay */}
              <div className="absolute inset-0 bg-wedding-dark/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4">
                 <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 flex flex-col items-center">
                    <div className="bg-white/20 backdrop-blur-md p-3 rounded-full border border-white/40 mb-2 text-white">
                        <Expand size={24} />
                    </div>
                    <span className="text-white font-serif tracking-wider text-sm border-b border-wedding-gold pb-1">Xem ảnh</span>
                 </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
            <p className="font-serif italic text-gray-500">"Mỗi bức ảnh là một câu chuyện tình yêu..."</p>
        </div>
      </div>

      {/* Modern Lightbox Modal */}
      <AnimatePresence>
        {selectedId && selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-wedding-dark/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
            onClick={() => setSelectedId(null)}
          >
            {/* Close Button */}
            <button 
              className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors p-2 z-50 bg-black/20 rounded-full"
              onClick={() => setSelectedId(null)}
            >
              <X size={32} />
            </button>
            
            {/* Main Image */}
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center"
                onClick={(e) => e.stopPropagation()}
            >
                <img 
                  src={selectedImage.src} 
                  alt={selectedImage.alt}
                  className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl border border-white/10"
                />
                <div className="mt-4 flex items-center gap-2 text-white/80 font-serif">
                   <Heart size={16} className="text-wedding-gold fill-wedding-gold" />
                   <span>{selectedImage.alt}</span>
                </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery2;