import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';
import { Calendar, Clock, MapPin } from 'lucide-react';

const Events = () => {
    const events = [
        {
            title: "Lễ Vu Quy",
            time: "09:00 AM",
            date: "20/12/2025",
            location: "Tư Gia Nhà Gái",
            address: "Số 123, Đường ABC, TP. Hà Nội",
            image: "https://images.unsplash.com/photo-1519225448526-722609e862e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            title: "Lễ Thành Hôn",
            time: "10:30 AM",
            date: "21/12/2025",
            location: "Tư Gia Nhà Trai",
            address: "Số 456, Đường XYZ, TP. Hà Nội",
            image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            title: "Tiệc Rượu",
            time: "11:30 AM",
            date: "21/12/2025",
            location: "Trung Tâm Tiệc Cưới",
            address: "Sảnh A, Khách Sạn Grand Plaza",
            image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        }
    ];

    return (
        <section className="py-20 bg-stone-50">
            <div className="container mx-auto px-4">
                <SectionTitle title="Wedding Events" subtitle="The Schedule" />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {events.map((event, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="bg-white rounded-xl overflow-hidden shadow-lg group hover:shadow-xl transition-shadow duration-300"
                        >
                            <div className="h-48 overflow-hidden relative">
                                <img
                                    src={event.image}
                                    alt={event.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                            </div>

                            <div className="p-6 text-center space-y-4">
                                <h3 className="text-2xl font-serif text-stone-800">{event.title}</h3>

                                <div className="space-y-2 text-stone-600">
                                    <div className="flex items-center justify-center gap-2">
                                        <Calendar size={16} className="text-primary" />
                                        <span>{event.date}</span>
                                    </div>
                                    <div className="flex items-center justify-center gap-2">
                                        <Clock size={16} className="text-primary" />
                                        <span>{event.time}</span>
                                    </div>
                                    <div className="flex items-center justify-center gap-2">
                                        <MapPin size={16} className="text-primary" />
                                        <span>{event.location}</span>
                                    </div>
                                </div>

                                <p className="text-sm text-stone-500 italic border-t border-stone-100 pt-4">
                                    {event.address}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Events;
