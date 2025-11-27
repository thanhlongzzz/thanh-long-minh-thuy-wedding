import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';

const BASE_URL = import.meta.env.BASE_URL || '/';

const desktopSlides = [
    "assets/gallery/KIM_2408.jpg",
    "assets/gallery/KIM_2453.jpg",
    "assets/gallery/KIM_2508.jpg",
    "assets/gallery/KIM_3924.jpg",
];

const mobileSlides = [
    "assets/gallery/KIM_2977.jpg",
    "assets/gallery/KIM_3924.jpg",
    "assets/gallery/KIM_2786.jpg",
];

const SlideAlbum: React.FC = () => {
    const [slides, setSlides] = useState<string[]>(desktopSlides);

    useEffect(() => {
        if (typeof window === 'undefined') return;
        const mq = window.matchMedia('(max-width: 768px)');
        const update = () => setSlides(mq.matches ? mobileSlides : desktopSlides);
        update();
        // add listener compatible with old/new browsers
        if (mq.addEventListener) {
            mq.addEventListener('change', update);
            return () => mq.removeEventListener('change', update);
        } else {
            mq.addListener(update);
            return () => mq.removeListener(update);
        }
    }, []);

    return (
        <section className="h-[100vh] md:h-screen w-full bg-black relative overflow-hidden z-0">
            <Swiper
                modules={[Autoplay, EffectFade, Navigation]}
                effect="fade"
                speed={2000}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                loop={true}
                className="h-full w-full"
            >
                {slides.map((src, index) => (
                    <SwiperSlide key={index}>
                        <div className="relative h-full w-full">
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-[10s] ease-linear transform scale-100 hover:scale-110 slide-bg"
                                style={{
                                    backgroundImage: `url("${BASE_URL}${src}")`,
                                    animation: 'kenburns 20s infinite alternate'
                                }}
                            />
                            <div className="absolute inset-0 bg-black/20" />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <style>{`
        @keyframes kenburns {
          0% { transform: scale(1); }
          100% { transform: scale(var(--ken-scale, 1.15)); }
        }
        .slide-bg { --ken-scale: 1.15; }
        @media (max-width: 768px) {
          .slide-bg { --ken-scale: 1.08; }
        }
      `}</style>
        </section>
    );
};

export default SlideAlbum;
