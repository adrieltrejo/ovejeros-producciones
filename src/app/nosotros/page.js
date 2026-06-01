"use client";
import Image from 'next/image';
import AnimateIn from "@/components/AnimateIn";


export default function Nosotros() {
  const secciones = [
    {
      id: "estrategia",
      title: "ESTRATEGIA",
      imgSrc: "/images/nosotros/estrategia-nosotros.jpg",
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
      <section className="relative w-full min-h-[90vh] flex flex-col items-center justify-center pt-32">
        <div className="fixed top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none z-0 opacity-20 md:opacity-40">
          <AnimateIn variant="fade-up" duration={1}>
            <h1 className="text-[60px] md:text-[120px] lg:text-[150px] font-poppins font-extrabold text-white leading-[1.1] tracking-tight drop-shadow-2xl">
              NUESTRO<br />ENFOQUE
            </h1>
          </AnimateIn>
        </div>
      </section>

      {/* SECCIONES APILADAS (Stacked Cards) */}
      <section className="relative z-20 w-full pb-40 px-4 md:px-10 max-w-[1400px] mx-auto">
        <div className="flex flex-col gap-8 md:gap-16">

          {secciones.map((sec, idx) => (
            <div
              key={sec.id}
              // El secreto del efecto: sticky y top dinámico para que se apilen visualmente
              className="sticky w-full min-h-[600px] border border-white/10 rounded-[40px] bg-[#080808] shadow-[0_-10px_40px_rgba(0,0,0,0.5)] overflow-hidden"
              style={{ top: `calc(100px + ${idx * 40}px)` }}
            >
              <div className="flex flex-col lg:flex-row w-full h-full p-8 md:p-16 gap-10 lg:gap-20">

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