import { Button } from '../ui/Button';
import { Phone, Mail, MapPin } from 'lucide-react';

export const Contact = () => {
    return (
        <section id="contact" className="py-24 bg-surface relative">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto">

                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-display font-medium text-primary mb-6">
                            Contact & Consultation
                        </h2>
                        <p className="text-secondary text-lg font-light">
                            Nos experts sont à votre disposition pour une démonstration personnalisée.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-white p-8 md:p-12 border border-gray-50 rounded-3xl shadow-xl shadow-accent/5">

                        {/* Contact Info */}
                        <div className="space-y-8">
                            <h3 className="text-xl font-display text-primary mb-6">Nos Coordonnées</h3>

                            <div className="space-y-6">
                                <a href="tel:+41XXXXXXXXX" className="flex items-center gap-4 text-secondary hover:text-primary transition-colors group">
                                    <span className="p-4 bg-surface rounded-full group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                                        <Phone size={20} />
                                    </span>
                                    <span className="font-medium">+41 XX XXX XX XX</span>
                                </a>

                                <a href="mailto:contact@helvion.ch" className="flex items-center gap-4 text-secondary hover:text-primary transition-colors group">
                                    <span className="p-4 bg-surface rounded-full group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                                        <Mail size={20} />
                                    </span>
                                    <span className="font-medium">contact@helvion.ch</span>
                                </a>

                                <div className="flex items-center gap-4 text-secondary group">
                                    <span className="p-4 bg-surface rounded-full group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                                        <MapPin size={20} />
                                    </span>
                                    <span className="font-medium">Genève, Suisse</span>
                                </div>
                            </div>

                            <div className="pt-8">
                                <p className="text-sm text-secondary uppercase tracking-widest mb-4">Suivez-nous</p>
                                <div className="flex gap-4">
                                    {/* Social placeholders */}
                                    <div className="w-10 h-10 bg-gray-50 hover:bg-gray-100 transition-colors rounded-full cursor-pointer"></div>
                                    <div className="w-10 h-10 bg-gray-50 hover:bg-gray-100 transition-colors rounded-full cursor-pointer"></div>
                                    <div className="w-10 h-10 bg-gray-50 hover:bg-gray-100 transition-colors rounded-full cursor-pointer"></div>
                                </div>
                            </div>
                        </div>

                        {/* Verification Form */}
                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-xs uppercase tracking-widest text-secondary mb-2 font-medium">Nom Complet</label>
                                    <input type="text" className="w-full bg-surface border border-transparent focus:bg-white focus:border-accent/30 rounded-xl p-4 text-primary focus:outline-none transition-all duration-300" placeholder="Votre nom" />
                                </div>

                                <div>
                                    <label className="block text-xs uppercase tracking-widest text-secondary mb-2 font-medium">Email Professionnel</label>
                                    <input type="email" className="w-full bg-surface border border-transparent focus:bg-white focus:border-accent/30 rounded-xl p-4 text-primary focus:outline-none transition-all duration-300" placeholder="email@entreprise.com" />
                                </div>

                                <div>
                                    <label className="block text-xs uppercase tracking-widest text-secondary mb-2">Message</label>
                                    <textarea rows={4} className="w-full bg-gray-50 border border-gray-200 p-3 text-black focus:outline-none focus:border-black/30 transition-colors resize-none" placeholder="Je souhaite en savoir plus sur..."></textarea>
                                </div>
                            </div>

                            <Button type="submit" variant="primary" className="w-full">
                                Planifiez une démo
                            </Button>
                        </form>

                    </div>

                </div>
            </div>
        </section>
    );
};
