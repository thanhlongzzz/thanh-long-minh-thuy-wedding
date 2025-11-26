import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const images = [
    "https://images.unsplash.com/photo-1519225448526-722609e862e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1522673607200-1645062cd958?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1520854221256-17451cc330e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
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
                                    src={images[parseInt(selectedId)]}
                                    alt="Selected"
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
