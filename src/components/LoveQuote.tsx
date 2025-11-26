import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const LoveQuote = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

    return (
        <section ref={ref} className="relative h-[60vh] overflow-hidden flex items-center justify-center">
            <motion.div
                style={{ y }}
                className="absolute inset-0 bg-cover bg-center z-0"
            >
                <div
                    className="w-full h-[160%] -mt-[20%]"
                    style={{
                        backgroundImage: 'url("/assets/gallery/KIM_3992.jpg")',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}
                />
            </motion.div>
            <div className="absolute inset-0 bg-black/40 z-0" />

            <motion.div
                style={{ opacity }}
                className="relative z-10 text-center text-white max-w-2xl px-6"
            >
                <p className="text-2xl md:text-4xl font-serif italic leading-relaxed">
                    "Where there is love there is life."
                </p>
                <p className="mt-4 text-lg font-light tracking-widest uppercase">
                    - Mahatma Gandhi -
                </p>
            </motion.div>
        </section>
    );
};

export default LoveQuote;
