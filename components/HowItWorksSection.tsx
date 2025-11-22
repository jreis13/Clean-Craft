"use client";

import {
  Camera,
  CheckCircle2,
  ClipboardList,
  Clock3,
  RefreshCw,
  ShowerHead,
} from "lucide-react";
import { useState } from "react";

type Step = {
  id: number;
  label: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  highlight: string;
};

const steps: Step[] = [
  {
    id: 1,
    label: "Pedido de orçamento",
    title: "Entre em contacto e envie fotos da área a lavar",
    description:
      "Pode pedir orçamento por WhatsApp, telefone ou através do formulário. Quanto mais detalhes e fotos enviar, mais preciso será o valor apresentado.",
    icon: ClipboardList,
    highlight: "Orçamento transparente e gratuito, sem compromisso.",
  },
  {
    id: 2,
    label: "Avaliação e proposta",
    title: "Analisamos a área e definimos o melhor plano de limpeza",
    description:
      "Avaliamos tipo de superfície, nível de sujidade e acessos. Com base nisso, sugerimos o tipo de lavagem e enviamos o valor estimado, normalmente ainda no mesmo dia.",
    icon: Camera,
    highlight: "Pode combinar fachada, calçada, pátios, piscina e mais.",
  },
  {
    id: 3,
    label: "Agendamento do serviço",
    title: "Marcamos o dia e hora mais conveniente",
    description:
      "Confirmado o orçamento, agendamos a visita num horário conveniente. Em muitos casos, conseguimos marcar ainda dentro da mesma semana.",
    icon: Clock3,
    highlight:
      "Chegamos no horário combinado, com todo o equipamento necessário.",
  },
  {
    id: 4,
    label: "Limpeza no local",
    title: "Lavagem de alta pressão com cuidado pelas superfícies",
    description:
      "Protegemos portas, janelas e zonas sensíveis. Depois, realizamos a lavagem com equipamento profissional, ajustando a pressão para cada tipo de material.",
    icon: ShowerHead,
    highlight:
      "Veja o antes e depois a acontecer à sua frente, já na primeira passagem.",
  },
  {
    id: 5,
    label: "Revisão e fidelidade",
    title: "Confirmamos o resultado e planeamos manutenções futuras",
    description:
      "No final, fazemos uma revisão para garantir que tudo ficou como combinado. Podemos até agendar a próxima limpeza com condições especiais.",
    icon: RefreshCw,
    highlight:
      "Complete 5 lavagens e ganhe 1 grátis com o cartão fidelidade Clean Craft.",
  },
];

export default function HowItWorksSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeStep = steps[activeIndex];

  function goNext() {
    setActiveIndex((prev) => (prev + 1) % steps.length);
  }

  function goPrev() {
    setActiveIndex((prev) => (prev - 1 + steps.length) % steps.length);
  }

  return (
    <section
      id="how-it-works"
      className="w-full pt-20 pb-24 bg-[var(--skyBlue)] text-[var(--deep)]"
    >
      <div className="max-w-6xl mx-auto px-4 flex flex-col gap-10">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--secondary)] mb-2">
            Como Funciona
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 text-white">
            Passo a passo da limpeza Clean Craft
          </h2>
        </div>

        <div className="flex flex-col gap-8 items-center">
          <div className="lg:w-3/5">
            <div className="relative h-full min-h-[360px] overflow-hidden rounded-3xl bg-white shadow-xl">
              <div className="absolute -right-24 -top-24 h-56 w-56 rounded-full bg-[var(--secondary)]/30 blur-3xl" />
              <div className="absolute -left-16 -bottom-24 h-48 w-48 rounded-full bg-[var(--primary)]/15 blur-3xl" />

              <div className="relative p-6 sm:p-8 flex flex-col h-full justify-between pb-8">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--secondary)] text-[var(--primary)]">
                      <activeStep.icon size={22} />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[var(--primary)]/80">
                        Passo {activeStep.id}
                      </span>
                      <h3 className="text-lg sm:text-xl font-semibold text-[var(--deep)]">
                        {activeStep.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-sm sm:text-base text-[var(--deep)]/80">
                    {activeStep.description}
                  </p>

                  <div className="mt-6 rounded-2xl bg-[var(--primary)]/5 px-4 py-3 text-xs sm:text-sm text-[var(--primary)]">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 size={16} />
                      <p className="font-semibold">Ponto-chave deste passo</p>
                    </div>
                    <p className="mt-1 text-[var(--primary)]/90">
                      {activeStep.highlight}
                    </p>
                  </div>
                </div>

                <div className="mt-auto pt-6 flex flex-wrap items-center gap-3 text-[11px] text-[var(--deep)]/60">
                  <span className="rounded-full bg-[var(--secondary)]/20 px-3 py-1 font-semibold uppercase tracking-[0.18em] text-[var(--primary)]">
                    Clean Craft - Power Wash
                  </span>
                  <span>Processo rápido, claro e sem surpresas.</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-2/5">
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
              {steps.map((step, index) => {
                const Icon = step.icon;
                const isActive = index === activeIndex;

                return (
                  <button
                    key={step.id}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    className={`flex flex-col items-center justify-center rounded-2xl border px-2 py-3 text-xs transition hover:cursor-pointer ${
                      isActive
                        ? "border-[var(--secondary)] bg-[var(--secondary)]/15 text-[var(--primary)]"
                        : "border-[var(--primary)]/15 bg-white/70 text-[var(--deep)]/70 hover:bg-white"
                    }`}
                  >
                    <span
                      className={`flex h-7 w-7 items-center justify-center rounded-full text-[11px] font-semibold ${
                        isActive
                          ? "bg-[var(--secondary)] text-[var(--primary)]"
                          : "bg-[var(--primary)]/5 text-[var(--primary)]"
                      }`}
                    >
                      {step.id}
                    </span>
                    <Icon
                      size={16}
                      className={`mt-1 ${
                        isActive
                          ? "text-[var(--primary)]"
                          : "text-[var(--primary)]/80"
                      }`}
                    />
                    <span className="mt-1 text-[10px] leading-tight text-center">
                      {step.label}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="mt-4 flex items-center justify-between gap-2 text-xs">
              <button
                type="button"
                onClick={goPrev}
                className="rounded-full border border-[var(--primary)]/30 px-4 py-2 font-semibold uppercase tracking-[0.16em] text-[var(--primary)] bg-white hover:bg-gray-100 transition hover:cursor-pointer"
              >
                Anterior
              </button>
              <span className="text-[var(--deep)]/50">
                Passo {activeStep.id} de {steps.length}
              </span>
              <button
                type="button"
                onClick={goNext}
                className="rounded-full bg-[var(--primary)] px-4 py-2 font-semibold uppercase tracking-[0.16em] text-white hover:bg-[var(--primaryDark)] transition hover:cursor-pointer"
              >
                Seguinte
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
