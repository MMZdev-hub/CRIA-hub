import { useScrollReveal } from "../hooks/useScrollReveal"

export default function Sobre() {
    const {ref, isVisible} = useScrollReveal();

    return(
        <section ref={ref} id="sobre" className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="max-w-7xl mx-auto px-12">

                <p className="font-mono text-xs tracking-widest text-silver uppercase mb-4">
                    -01 / Sobre
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

                    <div>
                        <h2 className="font-grotesk text-5xl font-bold text-bone leading-tight mb-8">
                            Um hub onde cultura{' '}
                            <span className="text-silver italic">vira negócio</span>
                        </h2>

                        <div className="space-y-5 text-muted leading-relaxed">
                            <p>
                                A CRIA não é apenas uma produtora — é um hub criativo forjado no inconformismo. Nascemos na Bahia a partir de uma insatisfação profunda com o padrão do mercado atual. Nosso objetivo não é apenas entregar arquivos de vídeo, mas dar voz e impacto real a artistas e marcas que têm uma mensagem para o mundo.
                            </p>
                            <p>
                                Nossa força vem da fusão de dois universos: a inteligência de <span className="text-bone">Vanner Carvalho</span>, formado em marketing e especialista em estratégias digitais, e o olhar artístico de <span className="text-bone">Jean Jorge</span>, fotógrafo e filmmaker com cinco anos de estrada pelo eixo Bahia–Rio de Janeiro.
                            </p>
                            <p>
                                A técnica encontra a estratégia. A estética autêntica ganha propósito.
                            </p>
                        </div>

                        <div className="mt-8 pl-6 border-l-2 border-silver/30">
                            <p className="text-bone italic leading-relaxed">
                                "Nascido no sertão árido da Bahia e crescido na realidade periférica de Salvador, entendi desde cedo que ser CRIA é ir além. Graduado em comunicação, modelo, gestor de projetos, amante dos esportes e das artes: mais que técnica, personalidade que vira resultado."
                            </p>
                            <p className="font-mono text-xs text-muted tracking-widest mt-3 uppercase">
                                — Vanner Carvalho, Co-fundador
                            </p>
                        </div>

                        <div className="mt-8 pl-6 border-l-2 border-silver/30">
                            <p className="text-bone italic leading-relaxed">
                                "Jean Jorge, fotógrafo e filmmaker com mais de cinco anos no mercado audiovisual, transitando principalmente entre Bahia e Rio de Janeiro.

Como um dos fundadores da CRIA, minha atuação vai além da captação tradicional de imagens, trabalho na construção de um centro estratégico de identidade e posicionamento. Meu foco é traduzir a essência de marcas, artistas, projetos de moda e eventos em narrativas visuais autênticas e de alto impacto."
                            </p>
                            <p className="font-mono text-xs text-muted tracking-widest mt-3 uppercase">
                                — Jean Jorge, Co-fundador
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-8">

                        {/* Fotos da dupla fundadora*/}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="aspect-[3/4] overflow-hidden">
                                <img
                                    src="/IMG_9939.JPG.jpg"
                                    alt="Vanner Carvalho"
                                    loading="lazy"
                                    decoding="async"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <div className="aspect-[3/4] overflow-hidden">
                                <img
                                    src="/IMG_1687.JPG.jpg"
                                    alt="Jean Jorge"
                                    loading="lazy"
                                    decoding="async"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>

                        {/* Grid de stats*/}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                            <div className="border border-surface p-5">
                                <p className="font-grotesk text-3xl font-bold text-silver mb-1">1</p>
                                <p className="font-mono text-xs text-muted uppercase tracking-wide">Ano no mercado</p>
                            </div>
                            <div className="border border-surface p-5">
                                <p className="font-grotesk text-3xl font-bold text-silver mb-1">30+</p>
                                <p className="font-mono text-xs text-muted uppercase tracking-wide">Projeto entregues</p>
                            </div>
                            <div className="border border-surface p-5">
                                <p className="font-grotesk text-3xl font-bold text-silver mb-1">20</p>
                                <p className="font-mono text-xs text-muted uppercase tracking-wide">Comunidades ativa</p>
                            </div>
                            <div className="border border-surface p-5">
                                <p className="font-grotesk text-3xl font-bold text-silver mb-1">∞</p>
                                <p className="font-mono text-xs text-muted uppercase tracking-wide">Criatividade</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}