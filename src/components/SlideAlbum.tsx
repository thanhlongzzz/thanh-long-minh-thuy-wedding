import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';

const slideImages = [
    "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1511285560982-1351cdeb9821?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80",
    "https://images.unsplash.com/photo-1519225448526-722609e862e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
];

const SlideAlbum = () => {
    return (
        <section className="h-screen w-full bg-black">
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
                {slideImages.map((src, index) => (
                    <SwiperSlide key={index}>
                        <div className="relative h-full w-full">
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-[10s] ease-linear transform scale-100 hover:scale-110"
                                style={{
                                    backgroundImage: `url("${src}")`,
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
          100% { transform: scale(1.15); }
        }
      `}</style>
        </section>
    );
};

export default SlideAlbum;
