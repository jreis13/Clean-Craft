"use client";

import { Mail, MessageCircle, PhoneCall } from "lucide-react";
import { FormEvent, useState } from "react";

const WHATSAPP_NUMBER = "351960491588";

export default function ContactSection() {
  const [sending, setSending] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const name = formData.get("name")?.toString().trim() || "";
    const phone = formData.get("phone")?.toString().trim() || "";
    const email = formData.get("email")?.toString().trim() || "";
    const service = formData.get("service")?.toString().trim() || "";
    const area = formData.get("area")?.toString().trim() || "";
    const message = formData.get("message")?.toString().trim() || "";

    const lines = [
      "Olá, gostava de pedir um orçamento para power washing 👋",
      name ? `Nome: ${name}` : "",
      phone ? `Telefone: ${phone}` : "",
      email ? `Email: ${email}` : "",
      service ? `Tipo de serviço: ${service}` : "",
      area ? `Área aproximada: ${area} m²` : "",
      message ? `Notas adicionais: ${message}` : "",
    ].filter(Boolean);

    const text = encodeURIComponent(lines.join("\n"));
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;

    setSending(true);
    window.open(url, "_blank");
    setTimeout(() => setSending(false), 1000);
  }

  return (
    <section
      id="contact"
      className="w-full py-20 bg-gradient-to-b from-[var(--skyBlue)] to-[var(--primary)]"
    >
      <div className="max-w-6xl mx-auto px-4 flex flex-col gap-10">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--secondary)] mb-2">
            Orçamento Gratuito
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 text-white">
            Marque já a sua lavagem com a Clean Craft
          </h2>
          <p className="text-sm sm:text-base text-white/80">
            Envie o seu pedido em menos de um minuto. Respondemos normalmente no
            mesmo dia com um orçamento claro, sem compromisso.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] items-stretch">
          <div className="flex flex-col justify-between gap-6">
            <div className="rounded-3xl bg-white/10 border border-white/15 backdrop-blur px-6 py-6 text-white shadow-lg">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--secondary)] mb-2">
                Contacto direto
              </p>
              <h3 className="text-xl font-semibold mb-3">
                Prefere falar connosco pelo WhatsApp?
              </h3>
              <p className="text-sm text-white/80 mb-4">
                Clique no botão abaixo para abrir uma conversa com mensagem
                pré-preenchida. Pode também ligar diretamente para o número
                abaixo.
              </p>
              <div className="flex flex-col gap-3">
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[var(--secondary)] px-5 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-[var(--primary)] shadow-md hover:bg-[color:rgba(110,214,228,0.9)] transition"
                >
                  <MessageCircle size={18} />
                  Falar por WhatsApp
                </a>
                <div className="flex flex-col gap-1 text-sm">
                  <div className="inline-flex items-center gap-2">
                    <PhoneCall size={16} />
                    <a href="tel:+351960491588" className="hover:underline">
                      (+351) 960 491 588
                    </a>
                  </div>
                  <div className="inline-flex items-center gap-2 text-white/80">
                    <Mail size={16} />
                    <span>
                      Envie fotos da área a lavar para um orçamento mais
                      preciso.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="hidden lg:block rounded-3xl bg-white/10 border border-white/10 px-6 py-5 text-xs text-white/80">
              <p className="font-semibold mb-1 text-[var(--secondary)]">
                Dica para um orçamento rápido
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>Foto ou vídeo da fachada, calçada ou área a lavar</li>
                <li>Tipo de superfície (azulejo, pedra, betão, deck, etc.)</li>
                <li>Área aproximada em m² e localização</li>
              </ul>
            </div>
          </div>

          <div className="rounded-3xl bg-white shadow-xl p-6 sm:p-8">
            <h3 className="text-lg sm:text-xl font-semibold mb-4 text-[var(--deep)]">
              Formulário de pedido de orçamento
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex flex-col gap-1 text-sm">
                  <label
                    htmlFor="name"
                    className="font-medium text-[var(--deep)]"
                  >
                    Nome
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    className="h-10 rounded-2xl border border-slate-200 px-3 text-sm outline-none transition focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--secondary)]/60"
                    placeholder="Nome para contacto..."
                  />
                </div>
                <div className="flex flex-col gap-1 text-sm">
                  <label
                    htmlFor="phone"
                    className="font-medium text-[var(--deep)]"
                  >
                    Telemóvel
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    className="h-10 rounded-2xl border border-slate-200 px-3 text-sm outline-none transition focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--secondary)]/60"
                    placeholder="+351..."
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1 text-sm">
                <label
                  htmlFor="email"
                  className="font-medium text-[var(--deep)]"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="h-10 rounded-2xl border border-slate-200 px-3 text-sm outline-none transition focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--secondary)]/60"
                  placeholder="Opcional, para envio do orçamento"
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex flex-col gap-1 text-sm">
                  <label
                    htmlFor="service"
                    className="font-medium text-[var(--deep)]"
                  >
                    Tipo de serviço
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="h-10 rounded-2xl border border-slate-200 px-3 text-sm outline-none transition focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--secondary)]/60 bg-white cursor-pointer"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Selecione uma opção
                    </option>
                    <option value="Fachadas">Fachadas</option>
                    <option value="Calçadas">Calçadas</option>
                    <option value="Pátios">Pátios</option>
                    <option value="Piscinas">Piscinas</option>
                    <option value="Muros e cercas">Muros e cercas</option>
                    <option value="Vários serviços">Vários serviços</option>
                  </select>
                </div>
                <div className="flex flex-col gap-1 text-sm">
                  <label
                    htmlFor="area"
                    className="font-medium text-[var(--deep)]"
                  >
                    Área aproximada (m²)
                  </label>
                  <input
                    id="area"
                    name="area"
                    className="h-10 rounded-2xl border border-slate-200 px-3 text-sm outline-none transition focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--secondary)]/60"
                    placeholder="Ex.: 80"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1 text-sm">
                <label
                  htmlFor="message"
                  className="font-medium text-[var(--deep)]"
                >
                  Notas adicionais
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="rounded-2xl border border-slate-200 px-3 py-2 text-sm outline-none transition focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--secondary)]/60 resize-none"
                  placeholder="Ex.: tipo de sujidade, acesso, etc."
                />
              </div>

              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between pt-2">
                <button
                  type="submit"
                  disabled={sending}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[var(--primary)] px-6 py-3 text-xs sm:text-sm font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-[var(--primaryDark)] disabled:opacity-70 hover:cursor-pointer"
                >
                  <MessageCircle size={16} />
                  {sending ? "A abrir WhatsApp..." : "Enviar por WhatsApp"}
                </button>
                <p className="text-[11px] text-slate-500 max-w-xs">
                  Ao enviar, abrimos o WhatsApp com uma mensagem pré-preenchida.
                  Pode editar antes de enviar.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
