import { MapPin } from 'lucide-react';
import SectionTitle from './SectionTitle';

const Location = () => {
    const mapLink = "https://maps.app.goo.gl/WNsM6fNiTVpbyHMTA";

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <SectionTitle title="Location" subtitle="Getting There" />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Map */}
                    <div className="h-[400px] w-full bg-stone-100 rounded-xl overflow-hidden shadow-lg border border-stone-200 relative group">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.696976646543!2d105.841171315402!3d21.00478198601142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ac76ccab6dd7%3A0x55e92a5b07a97d03!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBCw6FjaCBraG9hIEjDoCBO4buZaQ!5e0!3m2!1svi!2s!4v1677834567890!5m2!1svi!2s"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="grayscale group-hover:grayscale-0 transition-all duration-500"
                        ></iframe>
                    </div>

                    {/* Info */}
                    <div className="space-y-8 text-center lg:text-left">
                        <div className="space-y-4">
                            <h3 className="text-3xl font-serif text-stone-800">Tư Gia Nhà Trai</h3>
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
                                <span className="text-lg">Số 1 Đại Cồ Việt, Hai Bà Trưng, Hà Nội</span>
                            </div>
                        </div>

                        <a
                            href={mapLink}
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
