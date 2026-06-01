"use client";
import PortfolioCategoryLayout from '@/components/PortfolioCategoryLayout';

export default function Categoria_Salud() {
  const clientesSalud = [
    {
      id: "calma-wellness",
      cliente: "Calma Wellness",
      servicio: "Producción Audiovisual",
      anio: "2024",
      img: "/images/salud/calma-wellness.jpg"
    },
    {
      id: "dr-herrera",
      cliente: "Dr. Javier Herrera",
      servicio: "Producción Audiovisual",
      anio: "2024",
      img: "/images/salud/dr-herrera.jpg"
    },
    {
      id: "lab-sta-maria",
      cliente: "Lab. Sta. María",
      servicio: "Producción Audiovisual",
      anio: "2024",
      img: "/images/salud/lab-sta-maria.jpg"
    },
    {
      id: "health-wellness",
      cliente: "Health and Wellness Consultorios",
      servicio: "Producción Audiovisual",
      anio: "2024",
      img: "/images/salud/health-wellness.jpg"
    }
  ];

  return (
    <PortfolioCategoryLayout 
      clients={clientesSalud}
      videoSrc="/videos/Salud.mp4"
      titleLine1="SALUD &"
      titleLine2="BIENESTAR"
      description="Creamos contenido visual profesional que comunica confianza, cuidado y cercanía.
            Trabajamos en la producción audiovisual y presencia digital de marcas enfocadas en bienestar, servicios médicos y salud, desarrollando materiales alineados con una imagen moderna y profesional."
      categoryKey="salud"
    />
  );
}
