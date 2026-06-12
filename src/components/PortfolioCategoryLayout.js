"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import AnimateIn from '@/components/AnimateIn';
import CategoryNav from '@/components/CategoryNav';

export default function PortfolioCategoryLayout({
  clients,
  videoSrc,
  titleLine1,
  titleLine2,
  description,
  categoryKey
}) {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="min-h-screen bg-ovejeros-black font-poppins text-white overflow-x-hidden selection:bg-ovejeros-red selection:text-white">

      {/* CAPA 0: FONDO DINÁMICO */}
      <div className="fixed inset-0 w-full h-full z-0 transition-all duration-700 ease-in-out">
        {/* Video de fondo — visible cuando no se hace hover en ningún cliente */}
        <div className={`absolute inset-0 transition-opacity duration-700 ${hoveredIndex === null ? 'opacity-100' : 'opacity-0'}`}>
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-25"
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/80" />
        </div>

        {clients.map((cliente, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 w-full h-full transition-all duration-700 ease-in-out ${hoveredIndex === idx ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-110 z-0'}`}
          >
            <Image fill src={cliente.img} alt={cliente.cliente} className="w-full h-full object-cover grayscale opacity-30 mix-blend-overlay" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/80" />
          </div>
        ))}
      </div>

      {/* CAPA Z10: CONTENIDO */}
      <div className="relative z-10">

        {/* HERO HEADER */}
        <section className="relative w-full pt-48 px-6 md:px-16 flex flex-col lg:flex-row justify-between lg:items-end gap-10">
          <AnimateIn variant="fade-up" duration={0.7}>
            <div className="flex flex-col items-start gap-1">
              <Link href="/portafolio" className="group flex items-center gap-2 text-gray-500 hover:text-white transition-colors mb-6">
                <ArrowLeft className="w-5 h-5" />
                <span className="font-poppins font-bold tracking-widest text-xs uppercase">Portafolio</span>
              </Link>
              <h1 className="text-white text-5xl md:text-[80px] lg:text-[100px] leading-[1.1] font-poppins font-extrabold tracking-tight uppercase">
                {titleLine1} <br /> <span className="text-gray-600">{titleLine2}</span>
              </h1>
            </div>
          </AnimateIn>
          <p className="max-w-[400px] text-gray-400 font-poppins text-sm md:text-base leading-relaxed font-medium lg:pb-6">
            {description}
          </p>
        </section>

        {/* SECCIÓN DE LISTADO INTERACTIVO DE CLIENTES */}
        <section className="relative w-full max-w-[1600px] mx-auto px-6 md:px-12 pt-24 pb-32">

          <div className="grid grid-cols-[80px_1fr_1fr] md:grid-cols-[100px_1fr_1fr] gap-6 items-center border-b border-gray-800 pb-4 text-gray-600 font-poppins font-bold text-xs md:text-sm tracking-widest uppercase">
            <span>REF</span>
            <span>CLIENTE / MARCA</span>
            <span className="text-right">SERVICIO / PROYECTO</span>
          </div>

          {clients.map((cliente, idx) => (
            <Link
              href={`/portafolio/${categoryKey}/${cliente.id}`}
              key={idx}
              className="group grid grid-cols-[80px_1fr_1fr] md:grid-cols-[100px_1fr_1fr] gap-6 items-center border-b border-gray-800 py-6 md:py-10 transition-colors duration-300 cursor-pointer"
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <span className="font-poppins font-bold text-gray-600 group-hover:text-ovejeros-red text-xs md:text-base transition-colors">
                #C0{idx + 1}
              </span>
              <h3 className="font-poppins font-extrabold text-white group-hover:text-ovejeros-red text-2xl md:text-5xl tracking-tight leading-tight transition-all duration-300 group-hover:translate-x-2">
                {cliente.cliente}
              </h3>
              <div className="flex items-center justify-end gap-5 text-right font-poppins text-gray-500 group-hover:text-white text-xs md:text-base font-medium transition-colors">
                <span>{cliente.servicio}</span>
              </div>
            </Link>
          ))}
        </section>

        <CategoryNav current={categoryKey} />
      </div>
    </div>
  );
}
