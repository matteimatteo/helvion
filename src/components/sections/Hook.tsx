import { motion } from 'framer-motion';
import { Button } from '../ui/Button';

export const Hook = () => {
    return (
        <section className="py-24 bg-background relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

                    {/* Visual Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="aspect-[4/5] bg-surface rounded-3xl overflow-hidden relative group shadow-2xl shadow-accent/10">
                            {/* Fallback pattern or placeholder image */}
                            <div className="absolute inset-0 bg-accent-soft/30 group-hover:scale-105 transition-transform duration-700"></div>
                            <div className="absolute inset-0 flex items-center justify-center text-accent/20 font-display text-4xl">
                                IMAGE MATÉRIEL
                            </div>

                            {/* Overlay Text */}
                            <div className="absolute bottom-0 left-0 p-8 w-full bg-gradient-to-t from-black/40 to-transparent">
                                <p className="text-white/90 font-display text-sm tracking-widest uppercase">Technologie Suisse</p>
                            </div>
                        </div>

                        {/* Decoration - Soft Circles */}
                        <div className="absolute -top-8 -left-8 w-32 h-32 bg-accent-soft rounded-full -z-10 opacity-60 blur-2xl"></div>
                        <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-accent/10 rounded-full -z-10 blur-3xl"></div>
                    </motion.div>

                    {/* Text Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        <h2 className="text-4xl md:text-5xl font-display font-medium leading-tight text-primary">
                            L'alliance de la science et de la <span className="italic text-accent font-light">beauté</span>
                        </h2>
                        <p className="text-secondary text-lg leading-relaxed font-light">
                            Chez Helvion, nous redéfinissons les standards de l'esthétique médicale.
                            Nés de l'exigence suisse, nos protocoles et équipements sont conçus pour
                            les professionnels qui ne visent rien de moins que l'excellence.
                        </p>
                        <p className="text-secondary text-lg leading-relaxed font-light">
                            Chaque détail compte. De la recherche en laboratoire à l'expérience client finale,
                            nous vous accompagnons vers une performance inégalée.
                        </p>

                        <div className="pt-4 flex flex-wrap gap-4">
                            <Button variant="primary" className="shadow-lg shadow-accent/20">Découvrir la marque</Button>
                            <Button variant="outline">Nos protocoles</Button>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};
