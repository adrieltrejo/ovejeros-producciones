"use client";
import Image from 'next/image';
import AnimateIn from "@/components/AnimateIn";


export default function Nosotros() {
  const secciones = [
    {
      id: "estrategia",
      title: "ESTRATEGIA",
      imgSrc: "/images/nosotros/estrategia-nosotros-v2.jpg",
      text: <>En <span className="text-white font-medium italic">Ovejeros Producciones</span> transformamos la visión de tu marca en conceptos audiovisuales con dirección, identidad y propósito. Analizamos lo que hace única a tu empresa para desarrollar ideas que conecten con tu audiencia y proyecten una imagen auténtica, moderna y memorable. Cada proyecto nace desde una estrategia creativa pensada para generar impacto real, no solo contenido visual.</>
    },
    {
      id: "produccion",
      title: "PRODUCCIÓN",
      imgSrc: "/images/nosotros/produccion-nosotros.jpg",
      text: "Creamos experiencias audiovisuales que combinan narrativa, estética y ejecución profesional. Desde la planeación creativa hasta la grabación y postproducción, cuidamos cada detalle para construir piezas cinematográficas que transmitan emoción, presencia y valor de marca. No hacemos contenido genérico: desarrollamos producciones hechas a la medida de cada cliente, con una identidad visual sólida y una intención clara."
    },
    {
      id: "resultados",
      title: "RESULTADOS",
      imgSrc: "/images/nosotros/resultados-nosotros.jpg",
      text: <>Nuestro objetivo es que tu marca no solo se vea bien, sino que destaque, conecte y permanezca en la mente de las personas. En <span className="text-white font-medium italic">Ovejeros Producciones</span> creamos contenido que fortalece la presencia de empresas, artistas y proyectos que buscan posicionarse como referentes en su industria. Porque una buena producción no solo se mira: se siente, se recuerda y genera oportunidades.</>
    }
  ];

  return (
    <div className="min-h-screen bg-black font-poppins text-white relative">

      {/* BACKGROUND ELEMENTS */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-ovejeros-red/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-white/5 rounded-full blur-[150px]" />
      </div>

      {/* 1. HERO TITLE */}
      <section className="relative w-full min-h-0 md:min-h-[90vh] flex flex-col items-center justify-start md:justify-center px-6 pt-36 pb-16 md:pb-0 md:pt-32 z-10">

        {/* Contenido Real (Frente) */}
        <div className="relative z-10 max-w-4xl text-center md:text-center flex flex-col items-center md:items-center mt-0">
          <AnimateIn variant="fade-up" delay={0.1}>
            <div className="flex items-center gap-4 mb-6 md:mb-8">
              <div className="h-[1px] w-8 md:w-16 bg-ovejeros-red" />
              <span className="text-ovejeros-red font-poppins font-bold tracking-[0.3em] text-[10px] md:text-sm uppercase">Quiénes Somos</span>
              <div className="h-[1px] w-8 md:w-16 bg-ovejeros-red" />
            </div>
          </AnimateIn>
          
          <AnimateIn variant="fade-up" delay={0.2}>
            <h2 className="text-3xl md:text-5xl lg:text-7xl font-poppins font-extrabold text-white leading-[1.1] tracking-tight mb-6 md:mb-10">
              MÁS QUE UNA PRODUCTORA, <br className="hidden md:block" /> 
              <span className="text-gray-500">SOMOS TU ALIADO VISUAL</span>
            </h2>
          </AnimateIn>

          <AnimateIn variant="fade-up" delay={0.3}>
            <p className="text-gray-400 font-poppins text-sm md:text-xl leading-relaxed max-w-2xl font-light">
              No nos conformamos con grabar videos bonitos que nadie recuerda. Creemos en producir piezas cinematográficas con alma, dirección estratégica y un propósito claro: hacer destacar a tu marca.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* SECCIONES APILADAS (Stacked Cards) */}
      <section className="relative z-20 w-full pb-40 px-4 md:px-10 max-w-[1400px] mx-auto mt-0 md:mt-12">
        <div className="flex flex-col gap-8 md:gap-16">

          {secciones.map((sec, idx) => (
            <div
              key={sec.id}
              // En celular es relativo (scroll normal) para evitar que el texto se corte. En compu es sticky.
              className="relative md:sticky w-full min-h-[600px] border border-white/10 rounded-[32px] md:rounded-[40px] bg-[#080808] shadow-[0_-10px_40px_rgba(0,0,0,0.5)] overflow-hidden md:[top:var(--sticky-top)]"
              style={{ "--sticky-top": `calc(100px + ${idx * 40}px)` }}
            >
              <div className="flex flex-col lg:flex-row w-full h-full p-6 md:p-16 gap-8 lg:gap-20">

                {/* Lado Izquierdo: Imagen Placeholder */}
                <div className="w-full lg:w-1/2 h-[300px] lg:h-auto rounded-[24px] border border-white/5 bg-[#151515] flex items-center justify-center overflow-hidden relative shadow-inner">
                  {sec.imgSrc ? (
                    <Image fill src={sec.imgSrc} alt={sec.title} className="w-full h-full object-cover opacity-80" />
                  ) : (
                    <>
                      {/* Glow sutil rojo */}
                      <div className="absolute top-0 right-0 w-32 h-32 bg-ovejeros-red/20 rounded-full blur-[60px]" />
                      <span className="text-white/30 font-poppins tracking-[0.2em] relative z-10 text-sm md:text-base text-center px-4">
                        {sec.imgPlaceholder}
                      </span>
                    </>
                  )}
                </div>

                {/* Lado Derecho: Textos Originales */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center">
                  <span className="text-ovejeros-red font-poppins font-bold tracking-[0.3em] text-xs font-bold uppercase mb-4">
                    Paso 0{idx + 1}
                  </span>
                  <h2 className="text-4xl md:text-5xl lg:text-[70px] font-poppins font-extrabold text-white leading-[1.1] tracking-tight mb-8">
                    {sec.title}
                  </h2>
                  <div className="text-gray-300 font-poppins text-base md:text-lg leading-[1.8] font-light max-w-xl whitespace-pre-line">
                    {sec.text}
                  </div>
                </div>

              </div>
            </div>
          ))}

        </div>
      </section>

    </div>
  );
}