import { useScrollReveal } from "../hooks/useScrollReveal"

export default function Galeria() {
    const {ref, isVisible} = useScrollReveal();

    return (
        <section ref={ref} id="galeria" className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="max-w-7xl mx-auto px-12">

                <p className="font-mono text-xs tracking-widest text-silver uppercase mb-4">
                    - 04 / Galeria
                </p>

                <h2 className="font-grotesk text-5xl font-bold text-bone mb-16 justify-center">
                    O que sai da CRIA
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    <img 
                        src="/AUN06565 (1).jpg"
                        loading="lazy"
                        decoding="async"
                        className="bg-surface col-span-2 aspect-square object-cover w-full h-full" />
                    <img
                        src="/DSC07690 (1).jpg"
                        loading="lazy"
                        decoding="async"
                        className="bg-surface row-span-2 min-h-full object-cover w-full h-full" />
                    <img
                        src="/DSC07746 (1).jpg"
                        loading="lazy"
                        decoding="async"
                        className="bg-surface aspect-square object-cover w-full h-full" />
                    <img
                        src="/DSC01710 (1).jpg"
                        loading="lazy"
                        decoding="async"
                        className="bg-surface aspect-square object-cover w-full h-full" />
                    <img
                        src="/DSC01446 (1).jpg"
                        loading="lazy"
                        decoding="async"
                        className="bg-surface col-span-2 aspect-square object-cover w-full h-full" />
                </div>
            </div>    
        </section>
          
    )
}