export default function Footer() {
    return (
        <footer className="border-t border-surface py-8 px-12 flex items-center justify-between">
            <div>
                <img src="/Logo_CRIA.png" alt="CRIA HUB Criativo" className="h-16 w-auto" />
            </div>

            <div>
                <p className="font-mono text-xs text-muted tracking-widest uppercase">
                    © 2025 CRIA HUB Criativo · Todos os direitos reservados
                </p>
            </div>

            <div className="flex items-center gap-6">
                <a href="https://instagram.com/prodcria" target="_blank" className="font-mono text-xs text-muted hover:text-silver transition-colors tracking-widest uppercase">
                    Instagram
                </a>
                <a href="#contato" className="font-mono text-xs text-muted hover:text-silver transition-colors tracking-widest uppercase">
                    Contato
                </a>

                <p className="font-mono text-xs text-muted hover:text-silver transition-colors tracking-widest uppercase">
                    Design & Dev: Caíque Lima
                </p>
            </div>
        </footer>
    )
}