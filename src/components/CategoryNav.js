"use client";
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const categorias = [
  { id: "comida", label: "COMIDA & GASTRONOMÍA" },
  { id: "moda", label: "MODA & ESTILO" },
  { id: "hoteleria", label: "HOTELERÍA & TURISMO" },
  { id: "salud", label: "SALUD & BIENESTAR" },
  { id: "deporte", label: "DEPORTE & ENTRENAMIENTO" },
  { id: "eventosocial", label: "EVENTOS SOCIALES" },
  { id: "privado", label: "PROYECTOS PRIVADOS" },
];

export default function CategoryNav({ current }) {
  const idx = categorias.findIndex(c => c.id === current);
  const prev = categorias[(idx - 1 + categorias.length) % categorias.length];
  const next = categorias[(idx + 1) % categorias.length];

  return (
    <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 md:px-12 py-12 flex items-center justify-between">
      <Link href={`/portafolio/${prev.id}`} className="group flex items-center gap-3 text-gray-500 hover:text-white transition-colors">
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        <span className="font-poppins font-bold text-xs md:text-sm tracking-[0.15em] uppercase font-bold">{prev.label}</span>
      </Link>

      <Link href="/portafolio" className="text-gray-600 hover:text-ovejeros-red transition-colors">
        <span className="font-poppins font-bold text-[10px] md:text-xs tracking-[0.3em] uppercase font-bold">Ver todo</span>
      </Link>

      <Link href={`/portafolio/${next.id}`} className="group flex items-center gap-3 text-gray-500 hover:text-white transition-colors">
        <span className="font-poppins font-bold text-xs md:text-sm tracking-[0.15em] uppercase font-bold">{next.label}</span>
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  );
}
