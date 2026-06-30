import { useState, useEffect } from 'react';

export default function Navbar() {

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40)
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
            scrolled ? 'bg-void/95 backdrop-blur-md border-b border-surface' : 'bg-transparent'}`} > 
            
            <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">

                {/* Logo */}
                <a href="#">
                    <img src="/Logo_CRIA.png" alt="CRIA HUB Criativo" className="h-16 w-auto" />
                </a>

                {/* Links */}
                <nav className="flex items-center gap-8">
                    <a href="#sobre" className="text-xs tracking-widest text-bone hover:text-bone transition-colors uppercase">Sobre</a>
                    <a href="#servicos" className="text-xs tracking-widest text-bone hover:text-bone transition-colors uppercase">Serviços</a>
                    <a href="#galeria" className="text-xs tracking-widest text-bone hover:text-bone transition-colors uppercase">Galeria</a>
                    <a href="#contato" className="text-xs tracking-widest text-bone hover:text-bone transition-colors uppercase">Contato</a>
                </nav>
                
            </div>
        </header>
    )
}