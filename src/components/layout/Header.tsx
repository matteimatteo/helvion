import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '../ui/Button';

export const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Marque', href: '#why-helvion' },
        { name: 'Solutions', href: '#solutions' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${isScrolled ? 'bg-background/90 backdrop-blur-md py-4 border-b border-gray-100/50' : 'bg-transparent py-6'
                }`}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                <a href="#" className="flex items-center gap-2 z-50">
                    <span className={`text-2xl font-display font-medium tracking-wide transition-colors ${isScrolled ? 'text-primary' : 'text-primary'}`}>HELVION</span>
                </a>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-10">
                    <div className={`flex items-center gap-8 ${isScrolled ? 'bg-transparent' : 'bg-white/80 backdrop-blur-lg px-8 py-3 rounded-full shadow-sm'}`}>
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-secondary hover:text-primary text-xs uppercase tracking-[0.15em] font-medium transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                </nav>

                <div className="hidden md:block">
                    <Button variant="primary" size="sm" className="px-6 text-xs uppercase tracking-widest">
                        Consultation
                    </Button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-primary z-50 relative"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-background z-40 flex flex-col justify-center items-center gap-8"
                    >
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-primary text-2xl font-display font-light"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                        <Button className="mt-4">Consultation Offerte</Button>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};
