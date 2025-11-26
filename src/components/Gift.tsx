import { Copy, Gift } from 'lucide-react';
import { useState } from 'react';
import SectionTitle from './SectionTitle';

const GiftSection = () => {
    const [activeTab, setActiveTab] = useState<'groom' | 'bride'>('groom');
    const [copiedGroom, setCopiedGroom] = useState(false);
    const [copiedBride, setCopiedBride] = useState(false);

    const groomAccount = {
        name: "Nguyễn Thành Long",
        bankName: "VietCombank",
        accountNumber: "9386000635",
        // VietQR format: https://api.vietqr.io/image/{BANK_ID}-{ACCOUNT_NO}-{TEMPLATE}.jpg
        qrCode: "https://img.vietqr.io/image/VCB-9386000635-print.jpg?accountName=NGUYEN%20THANH%20LONG"
    };

    const brideAccount = {
        name: "Hà Minh Thuỷ",
        bankName: "BIDV",
        accountNumber: "2206820528",
        qrCode: "https://img.vietqr.io/image/BIDV-2206820528-print.jpg?accountName=HA%20MINH%20THUY"
    };

    const account = activeTab === 'groom' ? groomAccount : brideAccount;
    const copied = activeTab === 'groom' ? copiedGroom : copiedBride;
    const setCopied = activeTab === 'groom' ? setCopiedGroom : setCopiedBride;

    const handleCopy = () => {
        navigator.clipboard.writeText(account.accountNumber);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section className="py-20 bg-stone-50">
            <div className="container mx-auto px-4">
                <SectionTitle title="Wedding Gift" subtitle="Send your love" />

                {/* Tab Selector */}
                <div className="flex justify-center gap-4 mb-12">
                    <button
                        onClick={() => setActiveTab('groom')}
                        className={`px-8 py-3 rounded-full font-medium transition-all ${activeTab === 'groom'
                            ? 'bg-stone-900 text-white shadow-lg'
                            : 'bg-white text-stone-600 hover:bg-stone-100'
                            }`}
                    >
                        Mừng Chú Rể
                    </button>
                    <button
                        onClick={() => setActiveTab('bride')}
                        className={`px-8 py-3 rounded-full font-medium transition-all ${activeTab === 'bride'
                            ? 'bg-stone-900 text-white shadow-lg'
                            : 'bg-white text-stone-600 hover:bg-stone-100'
                            }`}
                    >
                        Mừng Cô Dâu
                    </button>
                </div>

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
                                    <p className="text-sm text-stone-400 uppercase tracking-wider">Người nhận</p>
                                    <p className="text-lg font-medium">{account.name}</p>
                                </div>
                                <div>
                                    <p className="text-sm text-stone-400 uppercase tracking-wider">Ngân hàng</p>
                                    <p className="text-lg font-medium">{account.bankName}</p>
                                </div>
                                <div>
                                    <p className="text-sm text-stone-400 uppercase tracking-wider">Số tài khoản</p>
                                    <div className="flex items-center gap-3 mt-1">
                                        <span className="text-xl font-mono text-primary">{account.accountNumber}</span>
                                        <button
                                            onClick={handleCopy}
                                            className="p-2 hover:bg-white/10 rounded-full transition-colors relative group"
                                            title="Copy Account Number"
                                        >
                                            <Copy size={18} />
                                            {copied && (
                                                <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white text-stone-900 text-xs py-1 px-2 rounded shadow-lg whitespace-nowrap">
                                                    Đã sao chép!
                                                </span>
                                            )}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="p-8 md:p-12 bg-white flex items-center justify-center">
                            <div className="w-full max-w-xs">
                                <img
                                    key={activeTab}
                                    src={account.qrCode}
                                    alt={`QR Code ${account.name}`}
                                    className="w-full h-auto rounded-xl shadow-lg"
                                />
                                <p className="text-center text-sm text-stone-500 mt-4">
                                    Quét mã QR để chuyển khoản
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GiftSection;
