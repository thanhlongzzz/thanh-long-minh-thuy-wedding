import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Countdown = () => {
    const targetDate = new Date('2025-12-20T10:00:00').getTime();
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    function calculateTimeLeft() {
        const now = new Date().getTime();
        const difference = targetDate - now;

        if (difference > 0) {
            return {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const TimeUnit = ({ value, label }: { value: number; label: string }) => (
        <div className="flex flex-col items-center mx-2 md:mx-6">
            <div className="text-4xl md:text-6xl font-serif font-bold text-stone-800 mb-2">
                {String(value).padStart(2, '0')}
            </div>
            <div className="text-xs md:text-sm uppercase tracking-widest text-stone-500 font-medium">
                {label}
            </div>
        </div>
    );

    return (
        <section className="py-20 bg-stone-50">
            <div className="container mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="inline-block bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-stone-100"
                >
                    <p className="text-lg text-stone-500 mb-8 font-serif italic">We are waiting for...</p>
                    <div className="flex flex-wrap justify-center items-center">
                        <TimeUnit value={timeLeft.days} label="Ngày" />
                        <TimeUnit value={timeLeft.hours} label="Giờ" />
                        <TimeUnit value={timeLeft.minutes} label="Phút" />
                        <TimeUnit value={timeLeft.seconds} label="Giây" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Countdown;
