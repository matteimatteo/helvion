import { motion } from 'framer-motion';
import { Button } from '../ui/Button';

export const Hero = () => {
    return (
        <section className="relative px-4 md:px-6 pt-32 pb-6 min-h-screen flex flex-col">
            <div className="relative flex-grow w-full rounded-4xl overflow-hidden shadow-2xl shadow-accent/5">
                {/* Background Video/Image */}
                <div className="absolute inset-0 bg-accent-soft">
                    <div className="absolute inset-0 bg-gradient-to-tr from-accent-soft via-transparent to-transparent opacity-50 z-10"></div>
                    <video
                        className="w-full h-full object-cover opacity-90"
                        autoPlay
                        muted
                        loop
                        playsInline
                        poster="/placeholder-video.jpg"
                    >
                        <source src="/helvion.mp4" type="video/mp4" />
                    </video>
                    {/* Soft Luxury Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/10 to-transparent z-10"></div>
                </div>

                {/* Content */}
                <div className="relative z-20 container mx-auto px-6 h-full flex flex-col justify-center pt-20 md:pt-0">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="max-w-3xl"
                    >
                        <span className="inline-block py-2 px-4 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs md:text-sm tracking-[0.2em] uppercase mb-8 font-medium">
                            Excellence Suisse
                        </span>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-medium text-white mb-8 leading-[1.1]">
                            Révélez votre <br />
                            <span className="font-light italic text-accent-soft">Signature</span>
                        </h1>
                        <p className="text-lg md:text-xl text-white/90 max-w-xl mb-10 font-light leading-relaxed">
                            Technologies de pointe et protocoles exclusifs pour les experts de l'esthétique médicale.
                        </p>

                        <div className="flex flex-col md:flex-row items-start gap-4">
                            <Button size="lg" className="bg-white !text-primary hover:bg-surface border-none shadow-xl shadow-black/10">
                                Découvrir nos solutions
                            </Button>
                            <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 hover:border-white">
                                Voir le film
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
