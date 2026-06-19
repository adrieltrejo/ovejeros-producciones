"use client";
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';
import { Video, Camera, Sparkles, Briefcase, PieChart, PenTool, Lightbulb, Megaphone, MessageCircle, Film, Play, ChevronLeft, ChevronRight } from 'lucide-react';
import AnimateIn from '@/components/AnimateIn';

const ICON_MAP = {
  "fa-video": Video,
  "fa-camera": Camera,
  "fa-wand-magic-sparkles": Sparkles,
  "fa-briefcase": Briefcase,
  "fa-chart-pie": PieChart,
  "fa-pen-ruler": PenTool,
  "fa-lightbulb": Lightbulb,
  "fa-bullhorn": Megaphone,
  "fa-comments": MessageCircle,
  "fa-film": Film,
  "fa-play": Play,
};


export default function Servicios() {
  const [activeIndex, setActiveIndex] = useState(0);


  const services = [
    {
      title: "PRODUCCIÓN\nAUDIOVISUAL",
      video: "/videos/video.mp4",
      poster: "/images/poster_produccion.jpg",
      sub: [
        {
          icon: "fa-video",
          title: "CREACIÓN Y EDICIÓN DE VIDEOS CORPORATIVOS",
          text: "Convertimos ideas en experiencias audiovisuales que elevan la forma en la que tu marca se presenta. No hacemos producción tradicional; diseñamos piezas que comunican con intención, estética y objetivos."
        },
        {
          icon: "fa-camera",
          title: "FOTOGRAFÍA PROFESIONAL",
          text: "Capturamos imágenes que hablan por tu marca antes que cualquier palabra. Nuestra fotografía interpreta y proyecta identidad con un toque visual actual."
        },
        {
          icon: "fa-wand-magic-sparkles",
          title: "VFX",
          text: "Creamos efectos visuales que transforman lo ordinario en un material visual sorprendente. Nuestros efectos visuales son nuestra herramienta para revolucionar."
        }
      ]
    },
    {
      title: "MARKETING",
      video: "/videos/video.mp4",
      poster: "/images/poster_marketing.jpg",
      sub: [
        { icon: "fa-briefcase", title: "BRANDING", text: "Creamos la identidad visual de tu marca o la renovamos estratégicamente. Incluye: logo, paleta de colores, tipografías, estilo visual, tono de comunicación y lineamientos de uso para asegurar coherencia." },
        { icon: "fa-chart-pie", title: "ESTUDIOS DE MERCADO", text: "Analizamos tu industria, competencia y público objetivo, para tomar decisiones estratégicas que impulsen el crecimiento y posicionamiento de tu marca." },
        { icon: "fa-pen-ruler", title: "DISEÑO GRÁFICO", text: "Creamos piezas visuales alineadas a tu marca, desde contenido para redes sociales hasta material publicitario, cuidando la estética, la creatividad y la coherencia en cada diseño." },
        { icon: "fa-lightbulb", title: "CREACIÓN DE CONTENIDO", text: "Ideamos, producimos y desarrollamos contenido para tu marca con un enfoque estratégico: que conecte con tu audiencia, comunique el mensaje correcto y mantenga una alta calidad visual. Cada pieza está pensada para representar tu esencia y generar impacto." },
        { icon: "fa-bullhorn", title: "CAMPAÑAS PUBLICITARIAS", text: "Creamos y gestionamos anuncios en plataformas digitales para posicionar tu marca, llegar a las personas correctas y atraer clientes potenciales. Cada campaña está enfocada en generar resultados reales y medibles." },
        { icon: "fa-comments", title: "GESTIÓN DE MARCAS", text: "Nos encargamos de la presencia de tu marca en redes sociales: planeación, publicación y seguimiento en las diferentes plataformas, asegurando una comunicación constante, coherente y alineada a tus objetivos." }
      ]
    },
    {
      title: "COBERTURA DE\nEVENTOS",
      video: "/videos/video.mp4",
      poster: "/images/poster_eventos.jpg",
      sub: [
        {
          icon: "fa-film",
          title: "FOTOGRAFÍA",
          text: "Capturamos más que fotografías, construimos la memoria visual de tu evento con un cuidado extremo en la estética y la atmósfera."
        },
        {
          icon: "fa-play",
          title: "VIDEO",
          text: "Transformamos tu evento en una pieza audiovisual genuina. Contamos la historia completa con ritmo, intención y una dirección innovadora."
        }
      ]
    }
  ];

  const nextIndex1 = (activeIndex + 1) % services.length;
  const nextIndex2 = (activeIndex + 2) % services.length;

  function getIcon(iconKey) {
    const IconComponent = ICON_MAP[iconKey];
    return IconComponent ? <IconComponent className="w-5 h-5" /> : null;
  }

  return (
    <div className="bg-black font-poppins text-white flex flex-col min-h-screen selection:bg-[#E31E24] selection:text-white">

      {/* HERO SLIDER SECTION CON VIDEOS */}
      <section className="relative w-full min-h-[100dvh] flex flex-col justify-center md:justify-end pb-24 md:pb-16 pt-24 md:pt-32 overflow-hidden bg-[#050505]">

        {/* CAPA 0: FONDOS DINÁMICOS */}
        {services.map((srv, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${activeIndex === idx ? 'opacity-100 z-0' : 'opacity-0 -z-10'}`}
          >
            {/* Solo renderizamos la imagen si es la activa para optimizar memoria */}
            {activeIndex === idx && (
              <Image fill
                src={srv.poster}
                alt={srv.title}
                className="w-full h-full object-cover"
              />
            )}
            {/* Gradiente inmersivo para que el texto sea legible */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/70 to-transparent" />
          </div>
        ))}

        {/* CAPA 10: CONTENIDO SUPERIOR */}
        <div className="relative z-10 flex flex-col xl:flex-row justify-between items-end gap-10 px-6 md:px-16 max-w-[1800px] mx-auto w-full">

          {/* LADO IZQUIERDO: TEXTOS */}
          <div className="w-full xl:w-2/3 flex flex-col gap-6 lg:gap-8">
            <AnimateIn variant="fade-up" duration={0.6} key={`title-${activeIndex}`}>
              <h1 className="text-4xl md:text-[60px] lg:text-[80px] font-poppins font-extrabold leading-[1.1] tracking-tight whitespace-pre-line drop-shadow-2xl text-white">
                {services[activeIndex].title}
              </h1>
            </AnimateIn>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6 mt-2 max-w-6xl">
              {services[activeIndex].sub.map((sub, i) => (
                <div key={i} className="flex flex-col gap-3 items-start">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-black shadow-lg">
                    {getIcon(sub.icon)}
                  </div>
                  <h3 className="font-poppins font-bold text-[15px] uppercase tracking-wide leading-tight text-white">
                    {sub.title}
                  </h3>
                  <p className="font-poppins text-[13px] text-gray-300 leading-snug">
                    {sub.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* LADO DERECHO: NAVEGACIÓN Y MINIATURAS */}
          <div className="relative z-40 w-full xl:w-1/3 flex flex-col xl:items-end gap-6">

            {/* MINIATURAS (Usamos posters para no cargar 3 videos a la vez) */}
            <div className="flex gap-4 p-4 rounded-3xl backdrop-blur-md bg-white/10 border border-white/20 shadow-2xl w-max">
              <button
                type="button"
                onClick={() => setActiveIndex(nextIndex1)}
                className="relative w-32 h-20 md:w-48 md:h-28 rounded-2xl overflow-hidden group cursor-pointer border border-white/10 hover:border-white/50 transition-all"
              >
                <Image fill src={services[nextIndex1].poster} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt={services[nextIndex1].title} />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                <span className="absolute bottom-2 left-0 right-0 text-center text-white text-[10px] font-poppins font-bold tracking-widest uppercase px-1">
                  {services[nextIndex1].title.replace('\n', ' ')}
                </span>
              </button>

              <button
                type="button"
                onClick={() => setActiveIndex(nextIndex2)}
                className="relative w-32 h-20 md:w-48 md:h-28 rounded-2xl overflow-hidden group cursor-pointer border border-white/10 hover:border-white/50 transition-all opacity-60 hover:opacity-100"
              >
                <Image fill src={services[nextIndex2].poster} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt={services[nextIndex2].title} />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                <span className="absolute bottom-2 left-0 right-0 text-center text-white text-[10px] font-poppins font-bold tracking-widest uppercase px-1">
                  {services[nextIndex2].title.replace('\n', ' ')}
                </span>
              </button>
            </div>

            {/* FLECHAS DE NAVEGACIÓN */}
            <div className="flex gap-4 xl:mr-4">
              <button
                type="button"
                onClick={() => setActiveIndex((prev) => (prev === 0 ? services.length - 1 : prev - 1))}
                className="w-12 h-12 rounded-full border-2 border-white/50 flex items-center justify-center hover:bg-white hover:text-black transition-all cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                type="button"
                onClick={() => setActiveIndex((prev) => (prev === services.length - 1 ? 0 : prev + 1))}
                className="w-12 h-12 rounded-full border-2 border-white/50 flex items-center justify-center hover:bg-white hover:text-black transition-all cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}