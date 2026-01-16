export const Footer = () => {
    return (
        <footer className="bg-black py-12 border-t border-white/5">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">

                    <div className="text-center md:text-left">
                        <h2 className="text-2xl font-display font-bold text-white mb-2">HELVION</h2>
                        <p className="text-white/40 text-sm">© {new Date().getFullYear()} Helvion Aesthetics. All rights reserved.</p>
                    </div>

                    <div className="flex gap-8 text-sm text-white/40">
                        <a href="#" className="hover:text-white transition-colors">Mentions Légales</a>
                        <a href="#" className="hover:text-white transition-colors">Politique de Confidentialité</a>
                        <a href="#" className="hover:text-white transition-colors">CGV</a>
                    </div>

                </div>
            </div>
        </footer>
    );
};
