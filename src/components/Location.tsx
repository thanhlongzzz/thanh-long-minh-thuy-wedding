import { MapPin } from 'lucide-react';
import SectionTitle from './SectionTitle';
import { useState } from 'react';

const Location = () => {
    const [activeTab, setActiveTab] = useState<'groom' | 'bride'>('groom');

    const groomLocation = {
        name: "Tư Gia Nhà Trai",
        address: "Đội 2, Cao Xá, Phường Sơn Nam, Tỉnh Hưng Yên",
        mapLink: "https://maps.app.goo.gl/WNsM6fNiTVpbyHMTA",
        embedUrl: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d629.4006837961354!2d106.03477931072554!3d20.686856155012684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjDCsDQxJzEyLjQiTiAxMDbCsDAyJzA1LjkiRQ!5e1!3m2!1svi!2s!4v1764155020905!5m2!1svi!2s"
    };

    const brideLocation = {
        name: "Tư Gia Nhà Gái",
        address: "21E, Phù Sa, Phường Sơn Tây, Hà Nội",
        mapLink: "https://maps.app.goo.gl/CYAJSkkHPueUi4DN9",
        embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d430.7312715499988!2d105.50625782526747!3d21.15048535428329!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3134f60c07916fa5%3A0x7e929bb5b10e269e!2zMjFFIFAuIFBow7kgU2EsIFREUCBI4buTbmcgSMOgLCBTxqFuIFTDonksIEjDoCBO4buZaSwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1764154411598!5m2!1svi!2s"
    };

    const location = activeTab === 'groom' ? groomLocation : brideLocation;

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <SectionTitle title="Location" subtitle="Getting There" />

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

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Map */}
                    <div className="h-[400px] w-full bg-stone-100 rounded-xl overflow-hidden shadow-lg border border-stone-200 relative group">
                        <iframe
                            key={activeTab}
                            src={location.embedUrl}
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="transition-all duration-500"
                        ></iframe>
                    </div>

                    {/* Info */}
                    <div className="space-y-8 text-center lg:text-left">
                        <div className="space-y-4">
                            <h3 className="text-3xl font-serif text-stone-800">{location.name}</h3>
                            <p className="text-stone-600 leading-relaxed">
                                Chúng tôi rất hân hạnh được đón tiếp quý khách tại tư gia.
                                Sự hiện diện của quý khách là niềm vinh hạnh lớn lao cho gia đình chúng tôi.
                            </p>
                        </div>

                        <div className="flex flex-col gap-4">
                            <div className="flex items-center justify-center lg:justify-start gap-3 text-stone-700">
                                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                                    <MapPin size={20} />
                                </div>
                                <span className="text-lg">{location.address}</span>
                            </div>
                        </div>

                        <a
                            href={location.mapLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block px-8 py-3 bg-stone-800 text-white rounded-full hover:bg-primary transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                        >
                            Xem bản đồ Google Maps
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Location;
