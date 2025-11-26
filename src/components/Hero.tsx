import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import SlideAlbum from './SlideAlbum';

const Hero = () => {
    return (
        <section className="relative h-screen w-full overflow-hidden flex items-center justify-center z-1">
            {/* Background Image - full cover with smooth left-right drift */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
                style={{
                    animation: 'drift 60s ease-in-out infinite',
                    filter: 'brightness(0.6)'
                }}>
                <SlideAlbum />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center text-white px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.8 }}
                >
                    <p className="text-xl md:text-2xl tracking-[0.2em] uppercase mb-4">The Wedding Of</p>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, delay: 0.8 }}
                    
                >
                    <div className="flex justify-center items-center gap-2 text-sm text-stone-500">
                    <h2 className="text-5xl md:text-7xl lg:text-9xl font-serif mb-6 cinematic-text" style={{color:'#fff'}}>Thành Long </h2>
                    <Heart size={30} className="text-red-500 fill-red-500 animate-pulse"  style={{margin:'0 10px 20px 10px', color:'#ddd'}} />
                    <h2 className="text-5xl md:text-7xl lg:text-9xl font-serif mb-6 cinematic-text" style={{color:'#fff'}}>Minh Thuỷ </h2>
                </div>
                
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1.5 }}
                    className="space-y-2"
                >
                    <p className="text-xl md:text-3xl font-light">20 & 21 . 12 . 2025</p>
                    <p className="text-lg md:text-xl italic opacity-90">Tức ngày 1 & 2 tháng 11 năm Ất Tị</p>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
            >
                <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center p-1">
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                        className="w-1 h-2 bg-white rounded-full"
                    />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
