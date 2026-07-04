import { useScrollReveal } from "../hooks/useScrollReveal"

const projetos = [
    { img: '/IMG_5848.jpg', tag: 'Música', titulo: 'SALVADORH', desc: 'Cobertura fotográfica e audiovisual no coração da cena musical de Salvador.' },
    { img: '/DSC01766.jpg', tag: 'Evento', titulo: 'Agonia de Puto', desc: 'Registro do evento, capturando a energia e a cultura da noite baiana.' },
    { img: '/IMG_6953.jpeg', tag: 'Moda', titulo: 'VRY Co.', desc: 'Editorial de moda com identidade urbana e estética periférica.' },
  ]

export default function Projetos() {
    const {ref, isVisible} = useScrollReveal();

    return(
        <section ref={ref}  className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

            <div className="max-w-7xl mx-auto px-12">
                {/* Header da seção */}
                <p className="font-mono text-xs tracking-widest text-silver uppercase mb-4">
                    - 02 / Projetos
                </p>

                <h2 className="font-grotesk text-5xl font-bold text-bone">
                    Nossos trabalhos
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                {projetos.map((p) => (
                    <div key={p.titulo}>
                        <img src={p.img} alt={p.titulo} className="aspect-[3/4] object-cover w-full" />
                        
                        <div className="pt-4">
                            <span className="font-mono text-xs text-silver tracking-widest uppercase">
                                {p.tag}
                            </span>

                            <h3 className="font-grotesk text-xl font-bold text-bone mt-2">
                                {p.titulo}
                            </h3>

                            <p className="text-muted text=sm mt-2 leading-relaxed">
                                {p.desc}
                            </p>
                        </div>

                    </div>
                    ))}
                </div>
            </div>
        </section>
    )
}