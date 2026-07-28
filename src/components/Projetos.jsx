import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { projetos } from '../data/projetos'

function CardProjeto({ projeto }) {
  const [currentImg, setCurrentImg] = useState(0)
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    if (!isHovering) {
      setCurrentImg(0)
      return
    }
    const interval = setInterval(() => {
      setCurrentImg((prev) => (prev + 1) % projeto.fotos.length)
    }, 600)
    return () => clearInterval(interval)
  }, [isHovering, projeto.fotos.length])

  return (
    <Link to={`/projetos/${projeto.slug}`} className="group block">
      <div
        className="aspect-[3/4] overflow-hidden relative"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <img
          src={projeto.fotos[currentImg]}
          alt={projeto.titulo}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover transition-opacity duration-300"
        />
      </div>
      <div className="pt-4">
        <span className="font-mono text-xs text-silver tracking-widest uppercase">
          {projeto.tag}
        </span>
        <h3 className="font-grotesk text-xl font-bold text-bone mt-1">
          {projeto.titulo}
        </h3>
        <p className="text-muted text-sm mt-2 leading-relaxed">
          {projeto.desc}
        </p>
      </div>
    </Link>
  )
}

export default function Projetos() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section ref={ref} id="projetos" className={`py-24 border-t border-surface transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        <p className="font-mono text-xs tracking-widest text-silver uppercase mb-4">
          — 02 / Projetos
        </p>
        <h2 className="font-grotesk text-5xl font-bold text-bone mb-12">
          Nossos trabalhos
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projetos.map((p) => (
            <CardProjeto key={p.slug} projeto={p} />
          ))}
        </div>

      </div>
    </section>
  )
}