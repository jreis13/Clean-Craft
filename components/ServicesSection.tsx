"use client";

import { Brush, Droplets, Fence, House, Sparkles, Waves } from "lucide-react";

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="w-full p-24 bg-[var(--skyBlue)] text-[var(--deep)]"
    >
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-white">
          Serviços de Limpeza Profissional
        </h2>

        <p className="text-center text-[var(--deep)]/70 max-w-2xl mx-auto mb-12 text-lg">
          Limpeza de alta pressão para fachadas, calçadas, muros, pátios,
          garagens, piscinas e muito mais. Qualidade visível na hora.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
          <div className="rounded-2xl bg-white/90 p-6 shadow-md backdrop-blur-sm flex flex-col gap-3">
            <div className="h-10 w-10 rounded-full bg-[var(--secondary)] flex items-center justify-center text-[var(--primary)] mx-auto">
              <House size={20} />
            </div>
            <h3 className="font-semibold text-center text-[var(--deep)]">
              Fachadas
            </h3>
            <p className="text-sm text-center text-[var(--deep)]/70">
              Remoção completa de sujidade, mofo e marcas do tempo.
            </p>
          </div>

          <div className="rounded-2xl bg-white/90 p-6 shadow-md backdrop-blur-sm flex flex-col gap-3">
            <div className="h-10 w-10 rounded-full bg-[var(--secondary)] flex items-center justify-center text-[var(--primary)] mx-auto">
              <Droplets size={20} />
            </div>
            <h3 className="font-semibold text-center text-[var(--deep)]">
              Calçadas
            </h3>
            <p className="text-sm text-center text-[var(--deep)]/70">
              Lavagem com jato de alta pressão e tratamento anti-manchas.
            </p>
          </div>

          <div className="rounded-2xl bg-white/90 p-6 shadow-md backdrop-blur-sm flex flex-col gap-3">
            <div className="h-10 w-10 rounded-full bg-[var(--secondary)] flex items-center justify-center text-[var(--primary)] mx-auto">
              <Brush size={20} />
            </div>
            <h3 className="font-semibold text-center text-[var(--deep)]">
              Pátios
            </h3>
            <p className="text-sm text-center text-[var(--deep)]/70">
              Pátios e áreas externas impecáveis e livres de resíduos.
            </p>
          </div>

          <div className="rounded-2xl bg-white/90 p-6 shadow-md backdrop-blur-sm flex flex-col gap-3">
            <div className="h-10 w-10 rounded-full bg-[var(--secondary)] flex items-center justify-center text-[var(--primary)] mx-auto">
              <Sparkles size={20} />
            </div>
            <h3 className="font-semibold text-center text-[var(--deep)]">
              Garagens
            </h3>
            <p className="text-sm text-center text-[var(--deep)]/70">
              Remoção de óleo, borracha e marcas profundas.
            </p>
          </div>

          <div className="rounded-2xl bg-white/90 p-6 shadow-md backdrop-blur-sm flex flex-col gap-3">
            <div className="h-10 w-10 rounded-full bg-[var(--secondary)] flex items-center justify-center text-[var(--primary)] mx-auto">
              <Waves size={20} />
            </div>
            <h3 className="font-semibold text-center text-[var(--deep)]">
              Piscinas
            </h3>
            <p className="text-sm text-center text-[var(--deep)]/70">
              Bordas e áreas molhadas com limpeza profunda e segura.
            </p>
          </div>

          <div className="rounded-2xl bg-white/90 p-6 shadow-md backdrop-blur-sm flex flex-col gap-3">
            <div className="h-10 w-10 rounded-full bg-[var(--secondary)] flex items-center justify-center text-[var(--primary)] mx-auto">
              <Fence size={20} />
            </div>
            <h3 className="font-semibold text-center text-[var(--deep)]">
              Muros e Cercas
            </h3>
            <p className="text-sm text-center text-[var(--deep)]/70">
              Deixa muros, portões e cercas com aspecto renovado.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
