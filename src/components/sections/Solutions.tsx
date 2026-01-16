import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { Microscope, FileText, GraduationCap, Zap } from 'lucide-react';

const solutions = [
    {
        title: "Laboratoire R&D",
        description: "L'innovation au cœur de notre ADN. Des formulations exclusives développées par nos experts.",
        icon: <Microscope size={32} />,
        cta: "Notre recherche"
    },
    {
        title: "Protocoles",
        description: "Des méthodologies éprouvées pour des résultats visibles et durables. L'excellence clinique.",
        icon: <FileText size={32} />,
        cta: "Voir les protocoles"
    },
    {
        title: "Academy",
        description: "Formation haut de gamme pour les professionnels. Maîtrisez l'art de l'esthétique avancée.",
        icon: <GraduationCap size={32} />,
        cta: "Rejoindre l'Academy"
    },
    {
        title: "Équipements",
        description: "Matériel de dernière génération alliant design ergonomique et puissance technologique.",
        icon: <Zap size={32} />,
        cta: "Découvrir le matériel"
    }
];

export const Solutions = () => {
    return (
        <section id="solutions" className="py-24 bg-surface relative">
            <div className="container mx-auto px-6">

                <div className="text-center max-w-3xl mx-auto mb-20">
                    <span className="text-accent font-bold text-sm uppercase tracking-widest mb-3 block">Expertise Globale</span>
                    <h2 className="text-3xl md:text-5xl font-display font-medium text-primary mb-6">
                        Nos Solutions
                    </h2>
                    <p className="text-secondary text-lg font-light">
                        Un écosystème complet dédié à votre réussite.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {solutions.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            className="group relative bg-surface p-8 rounded-3xl hover:bg-white hover:shadow-xl hover:shadow-accent/5 transition-all duration-500 flex flex-col items-start justify-between min-h-[380px] border border-transparent hover:border-accent/10"
                        >
                            <div>
                                <div className="mb-8 p-4 bg-white shadow-sm rounded-2xl text-accent group-hover:scale-110 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                                    {item.icon}
                                </div>
                                <h3 className="text-2xl font-display font-medium text-primary mb-4">
                                    {item.title}
                                </h3>
                                <p className="text-secondary leading-relaxed font-light mb-8 text-sm">
                                    {item.description}
                                </p>
                            </div>

                            <Button variant="ghost" className="p-0 hover:bg-transparent text-accent hover:text-primary font-medium tracking-wide">
                                {item.cta} →
                            </Button>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};
