import { Heart } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-stone-900 text-white py-12">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-4xl font-serif mb-6">Thành Long & Minh Thuỷ</h2>
                <p className="text-stone-400 mb-8 italic">"Thank you for being part of our special day"</p>

                <div className="flex justify-center items-center gap-2 text-sm text-stone-500">
                    <span>Made with</span>
                    <Heart size={14} className="text-red-500 fill-red-500 animate-pulse" />
                    <span>for our wedding</span>
                </div>

                <p className="mt-4 text-xs text-stone-600">© 2025 All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
