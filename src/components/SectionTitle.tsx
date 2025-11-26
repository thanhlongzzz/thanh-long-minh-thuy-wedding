import React from 'react';
import { Heart } from 'lucide-react';

interface SectionTitleProps {
    title: string;
    subtitle?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle }) => {
    return (
        <div className="text-center mb-12 px-4">
            <div className="flex justify-center items-center gap-2 mb-4 opacity-60">
                <div className="h-[1px] w-12 bg-wedding-gold"></div>
                <Heart size={16} className="text-wedding-gold fill-wedding-gold" />
                <div className="h-[1px] w-12 bg-wedding-gold"></div>
            </div>
            <h2 className="text-3xl md:text-5xl font-script text-wedding-gold mb-3">{title}</h2>
            {subtitle && <p className="text-sm md:text-base font-sans text-wedding-dark/70 uppercase tracking-widest">{subtitle}</p>}
        </div>
    );
};

export default SectionTitle;