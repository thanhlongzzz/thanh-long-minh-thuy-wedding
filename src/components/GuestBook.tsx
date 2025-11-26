import { useState, useEffect } from 'react';
import { Send, Check, Loader2, MessageSquareHeart } from 'lucide-react';
import SectionTitle from './SectionTitle';

interface Wish {
    name: string;
    message: string;
    attending: boolean;
    timestamp: string;
}

const GuestBook = () => {
    const [wishes, setWishes] = useState<Wish[]>([]);
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [attending, setAttending] = useState(true);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    useEffect(() => {
        const savedWishes = localStorage.getItem('wedding-wishes');
        if (savedWishes) {
            setWishes(JSON.parse(savedWishes));
        }
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!name.trim() || !message.trim()) return;

        setIsSubmitting(true);

        const newWish: Wish = {
            name,
            message,
            attending,
            timestamp: new Date().toISOString(),
        };

        const updatedWishes = [newWish, ...wishes];
        setWishes(updatedWishes);
        localStorage.setItem('wedding-wishes', JSON.stringify(updatedWishes));

        try {
            const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxNGEJ_Pqr8HFU6S3c-V1yxCw61C8fE5waFApCMzBguZU8_8P072x_yArfhlZx8zrjB/exec"; 
            await fetch(GOOGLE_SCRIPT_URL, 
                { 
                    method: 'POST', 
                    body: JSON.stringify(newWish),
                    headers: { 'Content-Type': 'application/json' }
                });
            await new Promise(resolve => setTimeout(resolve, 1000));

            setSubmitStatus('success');
            setName('');
            setMessage('');
            setTimeout(() => setSubmitStatus('idle'), 3000);

        } catch (error) {
            console.error("Error submitting wish:", error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <SectionTitle title="Guestbook" subtitle="Leave a wish" />

                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Form */}
                    <div className="bg-stone-50 p-8 rounded-2xl shadow-sm border border-stone-100 h-fit">
                        <div className="flex items-center gap-3 mb-6">
                            <MessageSquareHeart className="text-primary" />
                            <h3 className="text-2xl font-serif text-stone-800">Gửi lời chúc</h3>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div>
                                <label className="block text-sm font-medium text-stone-600 mb-1">Tên của bạn</label>
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all bg-white"
                                    placeholder="Nhập tên của bạn..."
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-stone-600 mb-1">Lời chúc</label>
                                <textarea
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all h-32 resize-none bg-white"
                                    placeholder="Viết lời chúc..."
                                    required
                                />
                            </div>

                            <div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-stone-100">
                                <input
                                    type="checkbox"
                                    id="attending"
                                    checked={attending}
                                    onChange={(e) => setAttending(e.target.checked)}
                                    className="w-5 h-5 text-primary rounded border-stone-300 focus:ring-primary accent-primary"
                                />
                                <label htmlFor="attending" className="text-sm text-stone-700 cursor-pointer select-none">
                                    Tôi sẽ tham dự tiệc cưới
                                </label>
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting || submitStatus === 'success'}
                                className={`w-full py-3 px-6 rounded-lg text-white font-medium flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 ${submitStatus === 'success'
                                        ? 'bg-green-600 hover:bg-green-700'
                                        : 'bg-stone-900 hover:bg-stone-800'
                                    }`}
                            >
                                {isSubmitting ? (
                                    <Loader2 className="animate-spin" />
                                ) : submitStatus === 'success' ? (
                                    <>
                                        <Check size={20} />
                                        Đã gửi thành công
                                    </>
                                ) : (
                                    <>
                                        <Send size={20} />
                                        Gửi lời chúc
                                    </>
                                )}
                            </button>
                        </form>
                    </div>

                    {/* Wishes List */}
                    <div className="space-y-6 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
                        <h3 className="text-2xl font-serif mb-6 text-stone-800">Lời chúc mới nhất</h3>
                        {wishes.length === 0 ? (
                            <div className="text-center py-12 bg-stone-50 rounded-xl border border-dashed border-stone-200">
                                <p className="text-stone-400 italic">Chưa có lời chúc nào. Hãy là người đầu tiên!</p>
                            </div>
                        ) : (
                            wishes.map((wish, index) => (
                                <div key={index} className="bg-white p-6 rounded-xl border border-stone-100 shadow-sm hover:shadow-md transition-shadow">
                                    <div className="flex justify-between items-start mb-3">
                                        <div className="flex items-center gap-2">
                                            <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary font-serif font-bold">
                                                {wish.name.charAt(0).toUpperCase()}
                                            </div>
                                            <h4 className="font-bold text-lg text-stone-800">{wish.name}</h4>
                                        </div>
                                        <span className="text-xs text-stone-400 bg-stone-50 px-2 py-1 rounded-full">
                                            {new Date(wish.timestamp).toLocaleDateString('vi-VN')}
                                        </span>
                                    </div>
                                    <p className="text-stone-600 mb-4 leading-relaxed pl-10 border-l-2 border-stone-100">
                                        "{wish.message}"
                                    </p>
                                    {wish.attending && (
                                        <div className="flex justify-end">
                                            <div className="inline-flex items-center gap-1.5 text-xs font-medium text-green-700 bg-green-50 px-3 py-1 rounded-full border border-green-100">
                                                <Check size={12} />
                                                Tham dự
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GuestBook;
