import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';
import { Calendar, Clock, MapPin } from 'lucide-react';
import { useState } from 'react';

const Events = () => {
    const [activeTab, setActiveTab] = useState<'groom' | 'bride'>('groom');

    const groomEvents = [
        {
            title: "Bữa Cơm Thân Mật",
            time: "16:00",
            date: "Thứ 7, 20/12/2025",
            lunarDate: "Mồng 1/11 Ất Tỵ",
            location: "Tư Gia Nhà Trai",
            address: "Đội 2, Cao Xá, Phường Sơn Nam, Tỉnh Hưng Yên",
            image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            title: "Lễ Thành Hôn",
            time: "15:00",
            date: "Chủ Nhật, 21/12/2025",
            lunarDate: "Mồng 2/11 Ất Tỵ",
            location: "Tư Gia Nhà Trai",
            address: "Đội 2, Cao Xá, Phường Sơn Nam, Tỉnh Hưng Yên",
            image: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
    ];

    const brideEvents = [
        {
            title: "Bữa Cơm Thân Mật",
            time: "16:00",
            date: "Thứ 7, 20/12/2025",
            lunarDate: "Mồng 1/11 Ất Tỵ",
            location: "Tư Gia Nhà Gái",
            address: "21E, Phù Sa, Phường Sơn Tây, Hà Nội",
            image: "https://images.unsplash.com/photo-1519225448526-722609e862e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            title: "Lễ Thành Hôn",
            time: "12:00",
            date: "Chủ Nhật, 21/12/2025",
            lunarDate: "Mồng 2/11 Ất Tỵ",
            location: "Tư Gia Nhà Gái",
            address: "21E, Phù Sa, Phường Sơn Tây, Hà Nội",
            image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        }
    ];

    const events = activeTab === 'groom' ? groomEvents : brideEvents;

    return (
        <section className="py-20 bg-stone-50">
            <div className="container mx-auto px-4">
                <SectionTitle title="Wedding Events" subtitle="The Schedule" />

                {/* Tab Selector */}
                <div className="flex justify-center gap-4 mb-12">
                    <button
                        onClick={() => setActiveTab('groom')}
                        className={`px-8 py-3 rounded-full font-medium transition-all ${activeTab === 'groom'
                                ? 'bg-stone-900 text-white shadow-lg'
                                : 'bg-white text-stone-600 hover:bg-stone-100'
                            }`}
                    >
                        Nhà Trai
                    </button>
                    <button
                        onClick={() => setActiveTab('bride')}
                        className={`px-8 py-3 rounded-full font-medium transition-all ${activeTab === 'bride'
                                ? 'bg-stone-900 text-white shadow-lg'
                                : 'bg-white text-stone-600 hover:bg-stone-100'
                            }`}
                    >
                        Nhà Gái
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {events.map((event, index) => (
                        <motion.div
                            key={`${activeTab}-${index}`}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
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
                                        <div className="text-left">
                                            <p className="font-medium">{event.date}</p>
                                            <p className="text-sm text-stone-500 italic">({event.lunarDate})</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-center gap-2">
                                        <Clock size={16} className="text-primary" />
                                        <span className="font-medium">{event.time}</span>
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
