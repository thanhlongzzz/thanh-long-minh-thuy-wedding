import { motion } from 'framer-motion';

interface SectionTitleProps {
    title: string;
    subtitle?: string;
    className?: string;
}

const SectionTitle = ({ title, subtitle, className = "" }: SectionTitleProps) => {
    return (
        <div className={`text-center mb-12 ${className}`}>
            {subtitle && (
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-primary text-lg font-medium tracking-widest uppercase mb-2"
                >
                    {subtitle}
                </motion.p>
            )}
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-4xl md:text-5xl font-serif text-stone-800 relative inline-block"
            >
                {title}
                <span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-primary rounded-full opacity-50"></span>
            </motion.h2>
        </div>
    );
};

export default SectionTitle;
