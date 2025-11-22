import ContactSection from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import HowItWorksSection from "@/components/HowItWorksSection";
import { Navbar } from "@/components/Navbar";
import ServicesSection from "@/components/ServicesSection";
import { Droplets, Sparkles } from "lucide-react";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main>
        <section
          id="hero"
          className="relative flex min-h-[85vh] items-center overflow-hidden bg-gradient-to-b from-[var(--primary)] to-[var(--skyBlue)] py-24 text-white"
        >
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] lg:px-8">
            <div className="space-y-6">
              <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--secondary)]">
                Power washing profissional
              </span>
              <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
                A sua casa, como nova com a Clean Craft
              </h1>
              <p className="max-w-xl text-sm text-white/85 sm:text-base">
                Lavagem de alta pressão de fachadas, entradas, calçadas, pátios,
                piscinas, cercas, muros e grades. A partir de 2,5€/m², com
                visita e orçamento gratuitos.
              </p>

              <div className="flex flex-wrap gap-3">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-2xl bg-[var(--secondary)] px-6 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-[var(--primary)] shadow-md transition hover:bg-[color:rgba(110,214,228,0.9)]"
                >
                  Pedir orçamento
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center justify-center rounded-2xl border border-white/40 bg-white/10 px-6 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-white backdrop-blur transition hover:bg-white/20"
                >
                  Ver serviços
                </a>
              </div>

              <div className="mt-4 grid gap-4 text-xs sm:grid-cols-3 sm:text-sm">
                <div className="flex items-center gap-3 rounded-2xl bg-white/10 px-3 py-3">
                  <div className="flex h-9 w-9 p-2 items-center justify-center self-center rounded-full bg-[var(--secondary)] text-[var(--primary)]">
                    <Droplets size={18} />
                  </div>
                  <div className="flex flex-col self-start">
                    <p className="font-semibold">Limpeza completa</p>
                    <p className="text-white/70">
                      Fachadas, calçadas, pátios, piscinas e mais.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 rounded-2xl bg-white/10 px-3 py-3">
                  <div className="flex h-9 w-9 p-2 items-center justify-center self-center rounded-full bg-white text-[var(--primary)]">
                    <Sparkles size={18} />
                  </div>
                  <div className="flex flex-col self-start">
                    <p className="font-semibold">Resultados na hora</p>
                    <p className="text-white/70">
                      Antes e depois visível logo na primeira passagem.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 rounded-2xl bg-white/5 px-3 py-3">
                  <div className="flex h-9 w-9 p-2 items-center justify-center self-center rounded-full border border-white/40 text-white">
                    <span className="text-xs font-bold">5+1</span>
                  </div>
                  <div className="flex flex-col self-start">
                    <p className="font-semibold">Cartão fidelidade</p>
                    <p className="text-white/70">
                      Completa 5 lavagens e ganha 1 grátis.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="overflow-hidden rounded-2xl bg-white shadow-xl">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="/clean-craft-hero-house.png"
                    alt="Casa a ser lavada com power washing"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[color:rgba(0,95,115,0.4)] via-[color:rgba(0,95,115,0.1)] to-transparent" />
                </div>
                <div className="absolute bottom-4 left-4 rounded-2xl bg-white/95 px-4 py-3 text-xs text-slate-800 shadow-lg">
                  <p className="font-semibold text-[var(--primary)]">
                    Antes / Depois
                  </p>
                  <p className="text-[11px] text-slate-600">
                    Metade da fachada já lavada, com diferença clara de brilho e
                    cor.
                  </p>
                </div>
              </div>
              <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[var(--secondary)] opacity-40 blur-3xl" />
              <div className="pointer-events-none absolute -left-20 bottom-0 h-40 w-40 rounded-full bg-white/30 blur-3xl" />
            </div>
          </div>
        </section>
        <ServicesSection />
        <HowItWorksSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
