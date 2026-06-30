
export default function Hero() {
    return (
        <div className="relative min-h-screen">

            <div className="absolute inset-0">
                <img
                    src="/DSC03557.jpg"
                    alt="Salvador"
                    className="w-full h-full object-cover object-center"
                />
            </div>

            <div className="absolute inset-0 bg-black/70" />
            
            <div className="relative z-10 flex flex-col justify-end min-h-screen px-12 pb-32">

                <p className="text-xs font-mono tracking-widest text-silver uppercase mb-6">
                    ✦ Gestão · Audiovisual · Produção
                </p>

                <h1 className="text-8xl font-bold font-grotesk text-bone leading-none mb-4">
                    Identidade<br />
                    não nasce.<br />
                    <span className="text-silver">CRIA.</span>
                </h1>

                <p className="text-muted text-lg max-w-lg mt-6 leading-relaxed">
                    Hub de comunicação criativa em Salvador. Moda, música, fotografia e produção de eventos numa única estrutura.
                </p>

                <div className="flex gap-4 mt-10">
                    <a href="#servicos" className="bg-silver text-void font-semibold px-8 py-4 hover:bg-bone transition-colors">
                        Nossos Serviços
                    </a>
                    <a href="#sobre" className="text-bone border-b border-muted pb-0.5 hover:text-silver hover:border-silver transition-colors text-sm self-end">
                        Conheça a CRIA →
                    </a>
                </div>
            </div>
        </div>
    )
}