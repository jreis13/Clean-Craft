import { Droplets } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <Droplets size={16} className="text-[var(--primary)]" />
          <span>
            © {new Date().getFullYear()} Clean Craft - Power Wash. Todos os
            direitos reservados.
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <span>+351 960 491 588</span>
          <span className="hidden h-3 w-px bg-slate-300 sm:inline-block" />
          <span className="text-slate-400">
            Limpeza de fachadas, entradas, pátios, piscinas, cercas, muros e
            grades.
          </span>
        </div>
      </div>
    </footer>
  );
}
