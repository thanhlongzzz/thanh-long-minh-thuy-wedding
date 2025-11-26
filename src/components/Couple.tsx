import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';

const Couple = () => {
    return (
        <section className="py-20 bg-white overflow-hidden">
            <div className="container mx-auto px-4">
                <SectionTitle title="Groom & Bride" subtitle="The Happy Couple" />

                <div className="flex flex-col md:flex-row items-center justify-center gap-12 lg:gap-24">
                    {/* Groom */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col items-center text-center max-w-sm"
                    >
                        <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-stone-100 shadow-xl mb-6 relative group">
                            <img
                                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                alt="Groom"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                        </div>
                        <h3 className="text-3xl font-serif text-stone-800 mb-2">Thành Long</h3>
                        <p className="text-primary font-medium tracking-wider uppercase mb-4">Chú Rể</p>
                        <p className="text-stone-600 leading-relaxed">
                            Là một chàng trai ấm áp, luôn biết quan tâm và chia sẻ.
                            Với Long, Thuỷ là mảnh ghép hoàn hảo nhất mà anh may mắn tìm thấy.
                        </p>
                    </motion.div>

                    {/* Divider Heart */}
                    <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5, type: "spring" }}
                        className="text-6xl text-primary/20 font-serif"
                    >
                        &
                    </motion.div>

                    {/* Bride */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col items-center text-center max-w-sm"
                    >
                        <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-stone-100 shadow-xl mb-6 relative group">
                            <img
                                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                alt="Bride"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                        </div>
                        <h3 className="text-3xl font-serif text-stone-800 mb-2">Minh Thuỷ</h3>
                        <p className="text-primary font-medium tracking-wider uppercase mb-4">Cô Dâu</p>
                        <p className="text-stone-600 leading-relaxed">
                            Cô gái dịu dàng, tinh tế và luôn tràn đầy năng lượng tích cực.
                            Với Thuỷ, Long là chỗ dựa vững chắc và là người bạn đồng hành tuyệt vời nhất.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Couple;
