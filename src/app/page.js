"use client";
import Image from 'next/image';
import Link from "next/link";
import AnimateIn from "@/components/AnimateIn";


export default function InicioExacto() {
  return (
    <div className="min-h-screen bg-ovejeros-black font-poppins text-white overflow-x-hidden selection:bg-ovejeros-red selection:text-white">

      {/* ================= HERO SECTION ================= */}
      <section className="relative z-10 w-full h-[100dvh] min-h-[600px] md:min-h-[700px] overflow-hidden bg-ovejeros-black flex flex-col justify-center md:justify-end pb-0 md:pb-20 pt-20 md:pt-0">
        <div className="absolute inset-0 w-full h-full z-0">
          {/* Video Desktop (Oculto en celulares) */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="hidden md:block w-full h-full object-cover opacity-60"
          >
            <source src="/videos/Hero.mp4" type="video/mp4" />
          </video>

          {/* Video Mobile Vertical (Oculto en PC) */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="block md:hidden w-full h-full object-cover opacity-60"
          >
            <source src="/videos/Hero-mobile.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-ovejeros-black via-ovejeros-black/40 to-transparent" />
        </div>

        <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 md:px-16 flex flex-col items-start text-left mt-10 md:mt-0">
          <AnimateIn variant="fade-left" duration={0.5}>
            <div className="flex items-center gap-4 mb-4 md:mb-8">
              <div className="h-[1px] w-8 md:w-12 bg-ovejeros-red" />
              <span className="text-white font-poppins font-bold tracking-[0.3em] text-xs md:text-base uppercase">Productora Audiovisual</span>
            </div>
          </AnimateIn>

          <AnimateIn variant="fade-up" delay={0.15} duration={0.7}>
            <h1 className="text-white text-4xl md:text-6xl lg:text-[80px] leading-[1.1] max-w-5xl mb-4 md:mb-8 font-poppins font-extrabold tracking-tight">
              CREAMOS EXPERIENCIAS <br /> VISUALES QUE <span className="text-gray-500">INSPIRAN</span>
            </h1>
          </AnimateIn>

          <AnimateIn variant="fade-up" delay={0.3} duration={0.6}>
            <p className="text-gray-400 font-poppins text-[14px] md:text-[20px] max-w-2xl mb-8 md:mb-10 leading-relaxed font-light">
              Generamos impacto y valor en cada proyecto, construyendo lazos a través de la creatividad, la innovación y soluciones cinematográficas de la más alta calidad.
            </p>
          </AnimateIn>

          <AnimateIn variant="fade-up" delay={0.45} duration={0.5}>
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 w-full sm:w-auto">
              <Link href="/contacto" className="bg-ovejeros-red text-white px-6 md:px-10 py-3 md:py-4 rounded-full text-[11px] md:text-[13px] tracking-[0.15em] md:tracking-[0.2em] font-bold uppercase text-center hover:bg-ovejeros-red-dark transition-colors font-poppins shadow-[0_10px_30px_rgba(227,30,36,0.3)] w-full sm:w-auto">
                COTIZAR PROYECTO
              </Link>
              <Link href="/portafolio" className="bg-transparent text-white border border-white/30 px-6 md:px-10 py-3 md:py-4 rounded-full text-[11px] md:text-[13px] tracking-[0.15em] md:tracking-[0.2em] font-bold uppercase text-center hover:bg-white hover:text-black transition-all font-poppins w-full sm:w-auto">
                VER PORTAFOLIO
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ================= SECCIÓN: ¿POR QUÉ OVEJEROS? ================= */}
      <section className="relative w-full py-24 bg-ovejeros-black overflow-hidden">
        <div className="absolute -top-20 -right-10 w-[400px] h-[400px] bg-ovejeros-red rounded-full blur-[150px] opacity-10 z-0 pointer-events-none" />

        <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-12">

          <div className="flex flex-col lg:flex-row justify-between items-start gap-10 border-b border-white/10 pb-10 mb-16">
            <AnimateIn variant="fade-right">
              <div className="flex flex-col items-start">
                <span className="text-ovejeros-red font-poppins font-bold tracking-[0.2em] text-sm font-bold uppercase mb-4">La diferencia</span>
                <h2 className="text-[50px] md:text-[70px] font-poppins font-extrabold leading-[1.1] text-white tracking-tight">
                  ¿POR QUÉ <br/> OVEJEROS?
                </h2>
              </div>
            </AnimateIn>
            <AnimateIn variant="fade-left" delay={0.2}>
              <p className="max-w-[450px] lg:text-right text-[16px] md:text-[18px] text-gray-400 font-poppins leading-relaxed self-end lg:self-start pt-4">
                No solo producimos contenido; diseñamos herramientas audiovisuales estratégicas pensadas para generar resultados reales y tangibles para tu marca.
              </p>
            </AnimateIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 w-full">

            {/* Pilar 1 — Producción Audiovisual */}
            <AnimateIn variant="fade-up" delay={0}>
              <Link href="/servicios" className="group relative w-full aspect-[3/4] rounded-[24px] overflow-hidden block shadow-2xl">
                {/* TODO: Reemplazar con imagen real de producción */}
                <Image fill
                  src="/images/inicio/card-produccion-v2.jpg"
                  alt="Producción Audiovisual"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 flex flex-col gap-3">
                  <span className="inline-block w-max bg-ovejeros-red text-white px-4 py-1 rounded-full text-xs font-bold tracking-[0.3em] font-poppins uppercase">01</span>
                  <h3 className="text-white text-2xl md:text-3xl font-poppins font-extrabold tracking-tight leading-tight">PRODUCCIÓN AUDIOVISUAL</h3>
                  <p className="text-gray-300 font-poppins text-sm leading-relaxed max-w-[280px] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    Videos corporativos, fotografía profesional y efectos visuales que elevan tu marca.
                  </p>
                </div>
              </Link>
            </AnimateIn>

            {/* Pilar 2 — Marketing */}
            <AnimateIn variant="fade-up" delay={0.15}>
              <Link href="/servicios" className="group relative w-full aspect-[3/4] rounded-[24px] overflow-hidden block shadow-2xl">
                {/* TODO: Reemplazar con imagen real de marketing */}
                <Image fill
                  src="/images/inicio/card-marketing-v2.jpg"
                  alt="Marketing Estratégico"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 flex flex-col gap-3">
                  <span className="inline-block w-max bg-ovejeros-red text-white px-4 py-1 rounded-full text-xs font-bold tracking-[0.3em] font-poppins uppercase">02</span>
                  <h3 className="text-white text-2xl md:text-3xl font-poppins font-extrabold tracking-tight leading-tight">MARKETING ESTRATÉGICO</h3>
                  <p className="text-gray-300 font-poppins text-sm leading-relaxed max-w-[280px] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    Branding, campañas digitales y estrategia de contenido para posicionar tu marca.
                  </p>
                </div>
              </Link>
            </AnimateIn>

            {/* Pilar 3 — Cobertura de Eventos */}
            <AnimateIn variant="fade-up" delay={0.3}>
              <Link href="/servicios" className="group relative w-full aspect-[3/4] rounded-[24px] overflow-hidden block shadow-2xl">
                {/* TODO: Reemplazar con imagen real de eventos */}
                <Image fill
                  src="/images/inicio/card-eventos.jpg"
                  alt="Cobertura de Eventos"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 flex flex-col gap-3">
                  <span className="inline-block w-max bg-ovejeros-red text-white px-4 py-1 rounded-full text-xs font-bold tracking-[0.3em] font-poppins uppercase">03</span>
                  <h3 className="text-white text-2xl md:text-3xl font-poppins font-extrabold tracking-tight leading-tight">COBERTURA DE EVENTOS</h3>
                  <p className="text-gray-300 font-poppins text-sm leading-relaxed max-w-[280px] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    Fotografía y video profesional que captura la esencia de cada momento.
                  </p>
                </div>
              </Link>
            </AnimateIn>

          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="w-full bg-ovejeros-black text-white pt-12 pb-32 flex flex-col items-center text-center px-6 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-20 bg-gradient-to-b from-transparent to-ovejeros-red" />
        <AnimateIn variant="fade" duration={0.5}>
          <span className="text-ovejeros-red font-poppins font-bold font-bold tracking-[0.3em] uppercase text-sm mb-6 mt-0 block">El siguiente paso</span>
        </AnimateIn>
        <AnimateIn variant="fade-up" delay={0.1}>
          <h2 className="text-4xl md:text-6xl font-poppins font-extrabold tracking-tight max-w-4xl mx-auto leading-[1.1]">
            ¿LISTO PARA LLEVAR TU MARCA AL SIGUIENTE NIVEL?
          </h2>
        </AnimateIn>
        <AnimateIn variant="fade-up" delay={0.25}>
          <p className="font-poppins text-gray-400 mt-8 mb-12 max-w-lg mx-auto text-lg">
            Agenda una llamada con nuestro equipo y descubramos cómo podemos sumar valor a tu proyecto.
          </p>
        </AnimateIn>
        <AnimateIn variant="scale" delay={0.4}>
          <Link href="/contacto" className="inline-block w-full md:w-auto bg-ovejeros-red text-white px-6 md:px-14 py-4 md:py-5 rounded-full text-xs md:text-sm tracking-[0.1em] md:tracking-[0.2em] font-bold uppercase hover:bg-white hover:text-black transition-colors duration-300 font-poppins shadow-[0_10px_30px_rgba(227,30,36,0.3)]">
            INICIAR CONVERSACIÓN
          </Link>
        </AnimateIn>
      </section>
    </div>
  );
}