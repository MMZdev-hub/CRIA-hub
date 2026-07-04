import { useScrollReveal } from "../hooks/useScrollReveal"

const servicos = [
    {
      num: '01',
      title: 'Produção de Clipes',
      desc: 'Do conceito ao corte final. Direção, filmagem e edição para artistas que querem mais que um vídeo — querem um manifesto visual.',
    },
    {
      num: '02',
      title: 'Estúdio Fotográfico',
      desc: 'Ensaios editoriais e retratos artísticos em ambiente controlado, com iluminação pensada para esculpir presença e contar história.',
    },
    {
      num: '03',
      title: 'Foto Externa',
      desc: 'A rua, o terreiro, o evento como cenário. Registros urbanos e culturais que capturam a verdade do momento com acabamento editorial.',
    },
    {
      num: '04',
      title: 'Produção de Eventos',
      desc: 'Cobertura completa de shows, festas e eventos culturais — dos bastidores ao palco, sempre com olhar de quem entende a cena.',
    },
    {
      num: '05',
      title: 'Identidade Visual & Publicidade',
      desc: 'Estratégia de marca e gestão de comunicação para quem quer presença forte e consistente nas redes e no mercado.',
    },
    {
      num: '06',
      title: 'Moda & Fashion',
      desc: 'Produção e direção criativa de editoriais de moda com identidade urbana — onde estética periférica encontra acabamento de revista.',
    },
    {
      num: '07',
      title: 'Web Design & Desenvolvimento',
      desc: 'Sites institucionais e landing pages sob medida, unindo identidade visual forte e código bem estruturado.',
    },
  ]

export default function Servicos() {
    const {ref, isVisible} = useScrollReveal();

    return(
        <section ref={ref} id="servicos"  className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="max-w-7xl mx-auto px-12">

                {/* Header da seção */}
                <p className="font-mono text-xs tracking-widest text-silver uppercase mb-4">
                    - 03 / Serviços
                </p>
                <h2 className="font-grotesk text-5xl font-bold text-bone mb-16">
                    O que a CRIA faz
                </h2>

                {/* Grid de cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-surface">
                    {servicos.map((s) => (
                        <div key={s.num} className="bg-void p-8 hover:bg-surface transition-colors duration-300">
                            <span className="font-mono text-xs text-muted tracking-widest">{s.num}</span>
                            <div className="w-8 h-px bg-silver my-6" />
                            <h3 className="font-grotesk text-xl font-semibold text-bone mb-3">
                                {s.title}
                            </h3>
                            <p className="text-muted text-sm leading-relaxed">{s.desc}</p>
                        </div>
                    ))}    
                </div>
            </div>
        </section>
    )
}