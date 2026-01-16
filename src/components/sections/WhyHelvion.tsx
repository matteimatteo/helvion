import { motion } from 'framer-motion';

export const WhyHelvion = () => {
    return (
        <section id="why-helvion" className="py-32 bg-background text-primary">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-20">

                    <div className="lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative"
                        >
                            <div className="aspect-video bg-surface relative overflow-hidden rounded-sm shadow-soft">
                                <video
                                    className="w-full h-full object-cover"
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    poster="/placeholder-video.jpg" /* Optional poster if you have one */
                                >
                                    <source src="/helvion.mp4" type="video/mp4" />
                                    Votre navigateur ne supporte pas la lecture de vidéos.
                                </video>
                            </div>
                            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-gray-100 -z-10 rounded-full blur-3xl opacity-50"></div>
                        </motion.div>
                    </div>

                    <div className="lg:w-1/2">
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-accent text-sm uppercase tracking-widest mb-4 block"
                        >
                            Pourquoi Helvion ?
                        </motion.span>

                        <motion.h2
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-4xl md:text-5xl font-display font-bold mb-8 leading-tight text-primary"
                        >
                            L'Excellence comme <br />seule option.
                        </motion.h2>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="space-y-6 text-secondary text-lg font-light leading-relaxed"
                        >
                            <p>
                                Choisir Helvion, c'est choisir un partenaire qui comprend les exigences du luxe et de la performance médicale.
                            </p>
                            <ul className="space-y-4 mt-8">
                                {["Qualité Suisse certifiée", "Accompagnement sur-mesure", "Innovation constante", "Réseau exclusif"].map((item, i) => (
                                    <li key={i} className="flex items-center gap-4">
                                        <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                                        <span className="text-primary">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};
