import ContactSection from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import HowItWorksSection from "@/components/HowItWorksSection";
import { Navbar } from "@/components/Navbar";
import ServicesSection from "@/components/ServicesSection";
import { Droplets, Sparkles } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main>
        <section
          id="hero"
          className="relative flex min-h-screen items-center justify-center text-center overflow-hidden bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/clean-craft-hero-house.png')",
          }}
        >
          <div className="absolute inset-0 bg-[rgba(0,95,115,0.65)] backdrop-blur-[1px]" />

          <div className="relative z-10 mx-auto max-w-3xl px-4 flex flex-col items-center justify-center gap-6 text-white">
            <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--secondary)]">
              Power washing profissional
            </span>

            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              A sua casa, como nova com a Clean Craft
            </h1>

            <p className="max-w-xl text-sm text-white/90 sm:text-base">
              Lavagem de alta pressão de fachadas, entradas, calçadas, pátios,
              piscinas, cercas, muros e grades. A partir de 2,5€/m², com visita
              e orçamento gratuitos.
            </p>

            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-2xl bg-[var(--secondary)] px-6 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-[var(--primary)] shadow-md transition hover:bg-[var(--skyBlue)]"
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
                <div className="flex h-9 w-9 p-2 items-center justify-center rounded-full bg-[var(--secondary)] text-[var(--primary)]">
                  <Droplets size={18} />
                </div>
                <div className="flex flex-col self-start">
                  <p className="font-semibold">Limpeza completa</p>
                  <p className="text-white/70">
                    Fachadas, calçadas, pátios, garagens e piscinas.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-2xl bg-white/10 px-3 py-3">
                <div className="flex h-9 w-9 p-2 items-center justify-center rounded-full bg-white text-[var(--primary)]">
                  <Sparkles size={18} />
                </div>
                <div className="flex flex-col self-start">
                  <p className="font-semibold">Resultado imediato</p>
                  <p className="text-white/70">
                    Limpeza visível logo na primeira passagem.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-2xl bg-white/5 px-3 py-3">
                <div className="flex h-9 w-9 p-2 items-center justify-center rounded-full border border-white/40 text-white">
                  <span className="text-xs font-bold">5+1</span>
                </div>
                <div className="flex flex-col self-start">
                  <p className="font-semibold">Oferta de lavagem</p>
                  <p className="text-white/70">
                    Complete 5 lavagens e receba 1 grátis.
                  </p>
                </div>
              </div>
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
