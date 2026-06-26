"use client";
import Image from 'next/image';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FileText, Video, Sparkles, ArrowRight } from 'lucide-react';
import AnimateIn from '@/components/AnimateIn';

const PROCESS_ICONS = {
  "fas fa-file-contract": FileText,
  "fas fa-video": Video,
  "fas fa-magic": Sparkles,
};


export default function PortafolioInmersivo() {

  const categoriasPortafolio = [
    {
      id: "comida",
      visible: "COMIDA & GASTRONOMÍA",
      proyectos: 5,
      img: "/images/portafolio/portada_comida.jpg"
    },
    {
      id: "moda",
      visible: "MODA & ESTILO",
      proyectos: 3,
      img: "/images/portafolio/portada_moda.jpg"
    },
    {
      id: "hoteleria",
      visible: "HOTELERÍA & TURISMO",
      proyectos: 3,
      img: "/images/portafolio/portada_hoteleria.jpg"
    },
    {
      id: "salud",
      visible: "SALUD & BIENESTAR",
      proyectos: 4,
      img: "/images/portafolio/portada_salud.jpg"
    },
    {
      id: "deporte",
      visible: "DEPORTE & ENTRENAMIENTO",
      proyectos: 3,
      img: "/images/portafolio/portada_deporte.jpg"
    },
    {
      id: "eventosocial",
      visible: "EVENTOS SOCIALES",
      proyectos: 8,
      img: "/images/portafolio/portada_sociales.jpg"
    },
    {
      id: "privado",
      visible: "SESIONES PRIVADAS",
      proyectos: 1,
      img: "/images/privado/fernanda-brena.jpg"
    }
  ];

  const [activeProcess, setActiveProcess] = useState(0);

  const pasosProceso = [
    {
      paso: "RECEPCIÓN",
      label: "BRIEFING",
      icon: "fas fa-file-contract",
      desc: "Escuchamos tu visión, definimos objetivos y trazamos la ruta crítica del proyecto. No empezamos a grabar sin antes entender qué quieres lograr.",
      img: "/images/portafolio/proceso_briefing_v2.jpg"
    },
    {
      paso: "PROCESO",
      label: "PRODUCCIÓN",
      icon: "fas fa-video",
      desc: "Llevamos las ideas al set, con equipo de vanguardia cinematográfica y una dirección precisa para garantizar un material visual impecable y pro.",
      img: "/images/portafolio/proceso_produccion.jpg"
    },
    {
      paso: "ENTREGA",
      label: "POST-PRODUCCIÓN",
      icon: "fas fa-magic",
      desc: "Montaje con ritmo, efectos visuales (VFX) sutiles y corrección de color profesional para lograr una estética cinematográfica y el resultado final perfecto.",
      img: "/images/portafolio/proceso_post.jpg"
    }
  ];

  function getProcessIcon(iconKey) {
    const IconComponent = PROCESS_ICONS[iconKey];
    return IconComponent ? <IconComponent className="w-6 h-6 md:w-8 md:h-8" /> : null;
  }

  return (
    <div className="min-h-screen bg-ovejeros-black font-poppins text-white overflow-x-hidden selection:bg-ovejeros-red selection:text-white flex flex-col">

      {/* ================= ENCABEZADO ================= */}
      <section className="relative w-full flex flex-col items-center overflow-hidden pb-16 pt-44 bg-ovejeros-black">

        <div className="absolute inset-0 z-0">

          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-ovejeros-red rounded-full blur-[150px] opacity-10 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-ovejeros-black via-ovejeros-black/40 to-ovejeros-black/90" />
        </div>

        <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-5xl mx-auto">
          <AnimateIn variant="fade" duration={0.5}>
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[1px] w-8 md:w-12 bg-ovejeros-red" />
              <span className="text-ovejeros-red font-poppins font-bold tracking-[0.3em] uppercase text-sm md:text-base font-bold">Portafolio</span>
              <div className="h-[1px] w-8 md:w-12 bg-ovejeros-red" />
            </div>
          </AnimateIn>

          <AnimateIn variant="fade-up" delay={0.1}>
            <h1 className="text-white text-5xl md:text-[80px] leading-[1.1] font-poppins font-extrabold tracking-tight uppercase mb-6 drop-shadow-2xl">
              NUESTRO <span className="text-gray-500">TRABAJO</span>
            </h1>
          </AnimateIn>

          <AnimateIn variant="fade-up" delay={0.2}>
            <p className="text-gray-400 font-poppins text-base md:text-xl max-w-2xl leading-relaxed font-light">
              Explora nuestra selección de categorías donde la creatividad, la estrategia y la calidad cinematográfica se unen para generar resultados reales.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* ================= BENTO GRID DE CATEGORÍAS (DISEÑO COMPACTO Y ELEGANTE) ================= */}
      <section className="relative w-full py-16 px-4 md:px-8 bg-ovejeros-black overflow-hidden">
        {/* Grid de 6 columnas para lograr exactamente 3 por fila y la última centrada */}
        <div className="max-w-[1400px] mx-auto w-full grid grid-cols-1 md:grid-cols-6 gap-4 md:gap-6 relative z-10">
          {categoriasPortafolio.map((categoria, idx) => {
            return (
              <AnimateIn
                key={categoria.id}
                variant="fade-up"
                delay={idx * 0.1}
                className={idx === 6 ? "md:col-span-2 md:col-start-3" : "md:col-span-2"}
              >
                <Link
                  href={`/portafolio/${categoria.id}`}
                  prefetch={false}
                  className="group relative overflow-hidden rounded-[24px] md:rounded-[32px] block shadow-2xl ring-1 ring-white/5 hover:ring-white/20 transition-all duration-700 h-[280px] md:h-[360px] transform-gpu"
                >
                  {/* Background Image */}
                  <Image fill
                    src={categoria.img}
                    alt={categoria.visible}
                    className="absolute inset-0 w-full h-full object-cover object-top md:object-center transition-all duration-[1200ms] transform-gpu will-change-transform will-change-filter md:group-hover:scale-110 grayscale-0 opacity-100 md:grayscale md:opacity-60 md:group-hover:grayscale-0 md:group-hover:opacity-100 ease-[cubic-bezier(0.25,1,0.5,1)]"
                  />

                  {/* Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-700 pointer-events-none" />

                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-8 pointer-events-none">
                    <h3 className="text-white font-poppins font-extrabold text-2xl md:text-3xl lg:text-4xl leading-[1.1] uppercase drop-shadow-2xl translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] break-words transform-gpu">
                      {categoria.visible}
                    </h3>

                    <div className="overflow-hidden mt-1 md:mt-2">
                      <span className="inline-flex items-center gap-2 text-ovejeros-red font-poppins font-bold tracking-[0.2em] text-xs uppercase opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100 ease-out transform-gpu">
                        Explorar Proyectos <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>
                </Link>
              </AnimateIn>
            );
          })}
        </div>
      </section>

      {/* ================= PROCESO CREATIVO (INTERACTIVO PREMIUM) ================= */}
      <section className="w-full bg-[#030303] py-24 md:py-32 px-6 md:px-12 relative overflow-hidden border-t border-white/5">
        {/* Glow de fondo */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-ovejeros-red rounded-full blur-[250px] opacity-[0.03] pointer-events-none" />

        <div className="max-w-[1500px] mx-auto relative z-10">
          
          {/* Título de la Sección (Separado para que en móvil quede hasta arriba) */}
          <div className="w-full mb-12 lg:mb-16">
            <AnimateIn variant="fade-right" duration={0.5}>
              <div className="flex items-center gap-4 mb-6">
                <div className="h-[1px] w-12 bg-ovejeros-red" />
                <span className="text-ovejeros-red font-poppins font-bold tracking-[0.3em] text-sm md:text-base font-bold uppercase">Metodología</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-poppins font-extrabold leading-[1.1] tracking-tight text-white">
                NUESTRO PROCESO <br className="hidden md:block" /> <span className="text-gray-500">CREATIVO</span>
              </h2>
            </AnimateIn>
          </div>

          {/* ================= METODOLOGÍA (Grid 3 Columnas) ================= */}
          <div className="w-full mt-12 md:mt-24 pb-12 md:pb-20 max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10">
              {pasosProceso.map((paso, idx) => (
                <AnimateIn key={idx} variant="fade-up" delay={idx * 0.1}>
                  <div className="group w-full flex flex-col gap-6 md:gap-8 bg-[#080808] p-6 rounded-[32px] border border-white/5 shadow-2xl hover:border-white/10 transition-colors duration-500">
                    {/* Contenedor de la Imagen (Mantiene su proporción natural 16:9 sin recortar) */}
                    <div className="w-full aspect-video rounded-[20px] overflow-hidden relative shadow-inner bg-[#151515]">
                      <Image fill 
                        src={paso.img} 
                        alt={paso.label} 
                        className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-105 ease-[cubic-bezier(0.25,1,0.5,1)]" 
                      />
                    </div>
                    
                    {/* Contenido (Abajo de la imagen) */}
                    <div className="flex flex-col gap-4 px-2">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-xl bg-white/5 text-ovejeros-red flex items-center justify-center border border-white/10 group-hover:bg-ovejeros-red group-hover:text-white transition-colors duration-500">
                          {getProcessIcon(paso.icon)}
                        </div>
                        <span className="font-poppins font-bold tracking-[0.3em] text-xs uppercase text-ovejeros-red">
                          Paso 0{idx + 1}
                        </span>
                      </div>
                      
                      <h3 className="text-2xl md:text-3xl font-poppins font-extrabold tracking-tight uppercase text-white leading-tight">
                        {paso.label}
                      </h3>
                      
                      <p className="text-gray-400 font-poppins text-sm md:text-base leading-relaxed font-light">
                        {paso.desc}
                      </p>
                    </div>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}