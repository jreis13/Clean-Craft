"use client";

import { Droplets, Home, Info, Menu, Phone, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const navItems = [
  { id: "hero", label: "Início", icon: Home },
  { id: "services", label: "Serviços", icon: Droplets },
  { id: "how-it-works", label: "Como funciona", icon: Info },
  { id: "contact", label: "Contacto", icon: Phone },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition ${
        scrolled
          ? "bg-(--primary) bg-opacity-95 backdrop-blur shadow-lg"
          : "bg-linear-to-b from-(--primary) to-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="#hero" className="flex items-center gap-3">
          <div className="relative h-9 w-40 sm:h-10 sm:w-44">
            <Image
              src="/clean-craft-logo-horizontal-white.png"
              alt="Clean Craft - Power Wash"
              fill
              className="object-contain"
            />
          </div>
        </Link>

        <div className="hidden items-center gap-2 rounded-full bg-white/10 px-2 py-1 text-xs text-white sm:flex">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="flex items-center gap-1 rounded-full px-3 py-1 font-medium transition hover:bg-white/20"
              >
                <Icon size={14} className="opacity-80" />
                <span>{item.label}</span>
              </a>
            );
          })}
        </div>

        <a
          href="#contact"
          className="inline-flex items-center justify-center rounded-2xl bg-(--secondary) px-6 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-(--primary) shadow-md transition hover:bg-(--skyBlue)"
        >
          Orçamento gratuito
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="inline-flex items-center justify-center rounded-full border border-white/40 p-2 text-white sm:hidden"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-(--primary) bg-opacity-95 px-4 py-3 text-sm text-white sm:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-2 rounded-lg px-2 py-2 transition hover:bg-white/10"
                >
                  <Icon size={16} />
                  <span>{item.label}</span>
                </a>
              );
            })}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-lg bg-(--secondary) px-3 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-(--primary)"
            >
              Orçamento gratuito
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
