"use client";
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Play, Camera, Clapperboard, ArrowDown } from 'lucide-react';
import AnimateIn from '@/components/AnimateIn';
import { useParams } from 'next/navigation';
import { portfolioData } from '@/data/portfolioData';

export default function ClienteDetalle() {
  const params = useParams();
  const { categoria, cliente } = params;

  // Extraer información de la base de datos o usar texto genérico
  const data = portfolioData[cliente] || {
    titulo1: "EL PROYECTO",
    parrafo1: `Para ${cliente.split('-').join(' ')}, el objetivo principal era capturar la esencia de su marca resaltando texturas y colores. Rompimos con lo tradicional para crear una campaña visualmente atractiva que transmitiera su producto como una verdadera experiencia premium.`,
    titulo2: "IMPACTO",
    parrafo2: "Lo que comenzó como un proyecto inicial evolucionó rápidamente. Desarrollamos contenido visual de alta calidad para mantener su identidad siempre fresca y relevante en todas sus plataformas, generando una conexión más fuerte con su audiencia."
  };

  // Si la base de datos tiene un nombre oficial (con acentos, ej. "Céntrico"), se usa. Si no, se auto-formatea.
  const nombreFormateado = data.nombre || cliente.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  // Extraer la imagen de la base de datos, o generar la ruta dinámicamente según la categoría y cliente
  const heroImage = data.img || `/images/${categoria}/${cliente}.jpg`;

  return (
    <div className="min-h-screen bg-[#030303] font-poppins text-white selection:bg-ovejeros-red selection:text-white overflow-x-hidden">

      {/* 1. HERO COVER MONUMENTAL (Estilo Cine) */}
      <section className="relative w-full h-[65vh] md:h-[90vh] min-h-[450px] md:min-h-[700px] flex flex-col pb-12 pt-24 md:pt-32 px-6 md:px-16 overflow-hidden border-b border-white/10">

        {/* Fondo con Parallax sutil */}
        <div className="absolute inset-0 z-0">
          <Image fill
            src={heroImage}
            alt={nombreFormateado}
            className="w-full h-full object-cover opacity-70 scale-105"
          />
          {/* Gradientes aligerados para más brillo en todas las pantallas */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-black/10 to-[#030303] opacity-80" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#030303]/40 via-transparent to-[#030303]/40 opacity-70" />
        </div>

        {/* Top Navbar Contextual */}
        <div className="absolute top-36 left-0 w-full z-40 px-6 md:px-16">
          <div className="max-w-[1600px] mx-auto flex flex-row items-center justify-between w-full gap-4">
            <AnimateIn variant="fade-right">
              <Link href={`/portafolio/${categoria}`} className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                <ArrowLeft className="w-4 h-4 md:w-5 md:h-5 group-hover:-translate-x-1 transition-transform" />
                <span className="font-poppins font-bold tracking-widest text-[10px] md:text-xs uppercase">{categoria}</span>
              </Link>
            </AnimateIn>
            <AnimateIn variant="fade-left">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-ovejeros-red animate-pulse" />
                <span className="text-gray-500 font-poppins font-bold tracking-[0.3em] text-[9px] md:text-[10px] uppercase">CASO DE ÉXITO</span>
              </div>
            </AnimateIn>
          </div>
        </div>

        {/* Título Gigante (Centrado Absoluto) */}
        <div className="relative z-10 w-full max-w-[1600px] mx-auto flex-1 flex flex-col items-center justify-center text-center gap-4 md:gap-6 mt-16 md:mt-10">
          <AnimateIn variant="fade-up" delay={0.1}>
            <div className="w-full overflow-hidden px-2 md:px-4">
              <h1 className="text-4xl sm:text-5xl md:text-[100px] lg:text-[140px] font-extrabold tracking-tighter uppercase leading-[1.1] md:leading-[0.9] text-white break-words">
                {nombreFormateado}
              </h1>
            </div>
          </AnimateIn>

          <AnimateIn variant="fade-up" delay={0.3} className="flex justify-center mt-8">
            <button
              onClick={() => document.getElementById('detalles')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-14 h-14 rounded-full border border-white/20 bg-black/30 backdrop-blur-md flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 group cursor-pointer shadow-lg"
            >
              <ArrowDown className="w-6 h-6 group-hover:translate-y-1 transition-transform" />
            </button>
          </AnimateIn>
        </div>
      </section>



      {/* 2. RESUMEN (Formato Editorial) */}
      <section id="detalles" className="w-full max-w-[1000px] mx-auto px-6 md:px-16 py-12 md:py-16 flex flex-col gap-16">

        <AnimateIn variant="fade-up" delay={0.1}>
          <div className="flex flex-col gap-6">
            <h3 className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-ovejeros-red flex items-center gap-3">
              <span className="w-8 h-[1px] bg-ovejeros-red"></span>
              {data.titulo1}
            </h3>
            <p className="text-gray-300 leading-[1.8] text-xl md:text-3xl font-light">
              {data.parrafo1}
            </p>
          </div>
        </AnimateIn>

        {data.parrafo2 && (
          <AnimateIn variant="fade-up" delay={0.2}>
            <div className="flex flex-col gap-6">
              <h3 className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-ovejeros-red flex items-center gap-3">
                <span className="w-8 h-[1px] bg-ovejeros-red"></span>
                {data.titulo2}
              </h3>
              <p className="text-gray-300 leading-[1.8] text-xl md:text-3xl font-light">
                {data.parrafo2}
              </p>
            </div>
          </AnimateIn>
        )}

      </section>

      {/* 3. EXPERIENCIA VISUAL (Video Local) */}
      <section className="w-full flex justify-center px-0 md:px-16 pb-20 md:pb-32 text-center">
        <div className="w-full max-w-[1600px] flex justify-center">
          <AnimateIn variant="fade-up" className="inline-flex justify-center w-full md:w-auto">
            <div className="relative w-full md:w-auto rounded-none md:rounded-[40px] overflow-hidden group border-y md:border border-white/5 shadow-2xl md:shadow-[0_40px_80px_rgba(0,0,0,0.8)] bg-[#050505]">

              {data.videoLocal ? (
                <div className="relative w-full overflow-hidden bg-black flex justify-center items-center group-hover:scale-[1.01] transition-transform duration-700">
                  {/* Video Intacto Sin Recortes ni Rellenos (Fluye Naturalmente) */}
                  <video
                    src={data.videoLocal}
                    autoPlay
                    muted
                    loop
                    playsInline
                    controls
                    className="relative z-10 w-full h-auto block drop-shadow-[0_0_50px_rgba(0,0,0,0.5)]"
                  ></video>
                </div>
              ) : (
                // Placeholder dinámico si aún no se sube el archivo a public/videos
                <div className="w-full aspect-[9/16] md:aspect-video md:h-[600px] relative">
                  <Image fill
                    src={heroImage}
                    alt={`Video de ${nombreFormateado}`}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-60"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 md:w-32 md:h-32 rounded-full bg-black/40 backdrop-blur-xl border border-white/10 flex items-center justify-center shadow-[0_0_50px_rgba(0,0,0,0.5)] group-hover:bg-ovejeros-red group-hover:border-ovejeros-red transition-all duration-500 group-hover:scale-110">
                      <Play className="w-6 h-6 md:w-12 md:h-12 text-white ml-1 md:ml-2 drop-shadow-lg" />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </AnimateIn>
        </div>
      </section>

    </div>
  );
}
