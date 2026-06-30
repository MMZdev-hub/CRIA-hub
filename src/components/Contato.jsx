import { useState } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal"

const socials = [
    { label: 'Instagram', handle: '@prodcria', href: 'https://instagram.com/prodcria' },
    { label: 'WhatsApp', handle: '(71) 99273-5540', href: 'https://wa.me/5571992735540' },
  ]

export default function Contato() {
    const [form, setForm] = useState({ nome: '', email: '', mensagem: '' })

    const handleChange = (e) => {
      setForm({ ...form, [e.target.name]: e.target.value })
    }

    const {ref, isVisible} = useScrollReveal();

    return (
        <section ref={ref} id="contato" className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="max-w-7xl mx-auto px-12">

                <p className="font-mono text-xs tracking-widest text-silver uppercase mb-4">
                    - 04 / Contato
                </p>

                <h2 className="font-grotesk text-5xl font-bold text-bone mb-16 justify-center">
                    Vamos criar juntos ?
                </h2>

                <div className="grid grid-cols-2 gap-14">

                {/* Coluna esquerda - formuário */}
                <div className="flex flex-col gap-6">

                    <div>
                        <label className="font-mono text-xs tracking-widest text-muted uppercase block mb-2">Nome</label>
                        <input
                            type="text"
                            name="nome"
                            value={form.nome}
                            onChange={handleChange}
                            placeholder="Seu nome"
                            className="w-full bg-transparent border border-surface focus:border-silver outline-none px-4 py-3 text-bone text-sm transition-colors"
                        />
                    </div>

                    <div>
                        <label className="font-mono text-xs tracking-widest text-muted uppercase block mb-2">E-mail</label>
                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="seu@email.com"
                            className="w-full bg-transparent border border-surface focus:border-silver outline-none px-4 py-3 text-bone text-sm transition-colors"
                        />
                    </div>

                    <div>
                        <label className="font-mono text-xs tracking-widest text-muted uppercase block mb-2">Mensagem</label>
                        <textarea
                            name="mensagem"
                            value={form.mensagem}
                            onChange={handleChange}
                            rows={4}
                            placeholder="Conta um pouco sobre o seu projeto..."
                            className="w-full bg-transparent border border-surface focus:border-silver outline-none px-4 py-3 text-bone text-sm transition-colors"
                        />
                    </div>

                    <button className="bg-silver text-void font-grotesk font-semibold px-8 py-4 hover:bg-bone transition-colors self-start">
                        Enviar mensagem →
                    </button>

                </div>

                {/* Coluna direta */}
                <div className="flex flex-col justify-between gap-12">

                    {/* Links de contato */}
                    <div className="space-y-8">
                        {socials.map((s) => (
                            <div key={s.label}>
                                <p className="font-mono text-xs tracking-widest text-muted uppercase mb-1">
                                    {s.label}
                                </p>

                                <a
                                href={s.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-grotesk text-xl text-bone hover:text-silver transition-colors"
                                >
                                {s.handle}
                                </a>
                            </div>
                        ))}
                    </div>

                    {/* Card manifesto */}
                    <div className="border-l-2 border-silver p-6 bg-surface">
                        <p className="font-grotesk text-bone text-lg font-medium leading-snug italic">
                        "Identidade não nasce. CRIA."
                        </p>
                        <p className="font-mono text-xs text-muted tracking-widest mt-3 uppercase">
                        — Manifesto CRIA HUB Criativo
                        </p>
                    </div>
                </div>

                </div>
            </div>
        </section>
    )
}