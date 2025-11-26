import { Copy, Gift } from 'lucide-react';
import { useState } from 'react';
import SectionTitle from './SectionTitle';

const GiftSection = () => {
    const [copied, setCopied] = useState(false);
    const bankNumber = "123456789"; // Placeholder
    const bankName = "MB Bank"; // Placeholder
    const accountName = "THANH LONG"; // Placeholder

    const handleCopy = () => {
        navigator.clipboard.writeText(bankNumber);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section className="py-20 bg-stone-50">
            <div className="container mx-auto px-4">
                <SectionTitle title="Wedding Gift" subtitle="Send your love" />

                <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-stone-100">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <div className="p-8 md:p-12 flex flex-col justify-center bg-stone-900 text-white">
                            <Gift className="w-12 h-12 text-primary mb-6" />
                            <h3 className="text-2xl font-serif mb-4">Hộp Mừng Cưới</h3>
                            <p className="text-stone-300 mb-8 leading-relaxed">
                                Sự hiện diện của quý vị là món quà ý nghĩa nhất đối với chúng tôi.
                                Nếu quý vị muốn gửi quà mừng, xin vui lòng quét mã QR hoặc chuyển khoản.
                            </p>

                            <div className="space-y-4">
                                <div>
                                    <p className="text-sm text-stone-400 uppercase tracking-wider">Ngân hàng</p>
                                    <p className="text-lg font-medium">{bankName}</p>
                                </div>
                                <div>
                                    <p className="text-sm text-stone-400 uppercase tracking-wider">Chủ tài khoản</p>
                                    <p className="text-lg font-medium">{accountName}</p>
                                </div>
                                <div>
                                    <p className="text-sm text-stone-400 uppercase tracking-wider">Số tài khoản</p>
                                    <div className="flex items-center gap-3 mt-1">
                                        <span className="text-xl font-mono text-primary">{bankNumber}</span>
                                        <button
                                            onClick={handleCopy}
                                            className="p-2 hover:bg-white/10 rounded-full transition-colors relative group"
                                            title="Copy Account Number"
                                        >
                                            <Copy size={18} />
                                            {copied && (
                                                <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white text-stone-900 text-xs py-1 px-2 rounded shadow-lg">
                                                    Copied!
                                                </span>
                                            )}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="p-8 md:p-12 bg-white flex items-center justify-center">
                            <div className="w-full max-w-xs aspect-square bg-stone-100 rounded-xl border-2 border-dashed border-stone-300 flex items-center justify-center relative overflow-hidden group">
                                {/* Placeholder for QR Code - User needs to replace this */}
                                <div className="text-stone-400 text-sm text-center p-4">
                                    <p>QR Code Ngân Hàng</p>
                                    <p className="text-xs mt-2">(Thay ảnh QR của bạn vào đây)</p>
                                </div>
                                <img
                                    src={`https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=00020101021138570010A0000007270127000697042201131234567890208QRIBFTTA53037045802VN6304D89A`}
                                    alt="Bank QR"
                                    className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GiftSection;
