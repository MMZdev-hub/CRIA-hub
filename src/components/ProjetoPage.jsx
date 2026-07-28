import { useParams,Link } from "react-router-dom";
import { projetos } from "../data/projetos";
import { useState } from "react";

export default function ProjetoPage() {
    const { slug } = useParams()
    const projeto = projetos.find((p) => p.slug === slug)

    const [lightboxIndex, setLightboxIndex] = useState(null)

    const abrirLightbox = (index) => setLightboxIndex(index)
    const fecharLightbox = () => setLightboxIndex(null)
    const proximo = () => setLightboxIndex((prev) => (prev + 1) % projeto.fotos.length)
    const anterior = () => setLightboxIndex((prev) => (prev - 1 + projeto.fotos.length) % projeto.fotos.length)

    if (!projeto) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <p className="font-mono text-xs text-muted tracking-widest uppercase mb-4">Projeto não encontrado</p>
                    <Link to="/" className="font-grotesk text-bone hover:text-silver transition-colors">
                        ← Voltar ao início
                    </Link>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen pt-32 pb-24">
            <div className="max-w-7xl mx-auto px-6 md:px-12">

                {/* Voltar */}
                <Link
                to="/"
                className="font-mono text-xs tracking-widest text-muted hover:text-silver transition-colors uppercase mb-12 inline-block"
                >
                ← Voltar
                </Link>

                {/* Header do projeto */}
                <div className="mb-16">
                <span className="font-mono text-xs text-silver tracking-widest uppercase">
                    {projeto.tag}
                </span>
                <h1 className="font-grotesk text-5xl md:text-7xl font-bold text-bone mt-2 mb-6">
                    {projeto.titulo}
                </h1>
                <p className="text-muted text-lg max-w-2xl leading-relaxed">
                    {projeto.descLonga}
                </p>
                </div>

                {/* Foto capa */}
                <div className="w-full aspect-video overflow-hidden mb-4 cursor-pointer"
                onClick={() => abrirLightbox(0)}
                >
                <img
                    src={projeto.capa}
                    alt={projeto.titulo}
                    className="w-full h-full object-cover"
                    decoding="async"
                />
                </div>

                {/* Grid de fotos */}
                {projeto.fotos.length > 1 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    {projeto.fotos.slice(1).map((foto, i) => (
                        <div
                            key={i}
                            className="aspect-square overflow-hidden cursor-pointer"
                            onClick={() => abrirLightbox(i + 1)}
                        >
                            <img
                            src={foto}
                            alt={`${projeto.titulo} ${i + 2}`}
                            loading="lazy"
                            decoding="async"
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                    ))}
                </div>
                )}
                
            </div>

            {/* Lightbox */}
            {lightboxIndex !== null && (
            <div
                className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center"
                onClick={fecharLightbox}
            >
                {/* Imagem */}
                <img
                src={projeto.fotos[lightboxIndex]}
                alt={`${projeto.titulo} ${lightboxIndex + 1}`}
                className="max-h-screen max-w-screen-lg object-contain px-16"
                onClick={(e) => e.stopPropagation()}
                />

                {/* Fechar */}
                <button
                onClick={fecharLightbox}
                className="absolute top-6 right-6 text-bone font-mono text-xs tracking-widest uppercase hover:text-silver"
                >
                Fechar ✕
                </button>

                {/* Anterior */}
                <button
                onClick={(e) => { e.stopPropagation(); anterior() }}
                className="absolute left-6 text-bone text-3xl hover:text-silver transition-colors"
                >
                ←
                </button>

                {/* Próximo */}
                <button
                onClick={(e) => { e.stopPropagation(); proximo() }}
                className="absolute right-6 text-bone text-3xl hover:text-silver transition-colors"
                >
                →
                </button>

                {/* Contador */}
                <p className="absolute bottom-6 font-mono text-xs text-muted tracking-widest">
                {lightboxIndex + 1} / {projeto.fotos.length}
                </p>
            </div>
            )}
        </div>
    )
}