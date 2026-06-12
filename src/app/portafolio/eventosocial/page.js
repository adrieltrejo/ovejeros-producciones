"use client";
import PortfolioCategoryLayout from '@/components/PortfolioCategoryLayout';

export default function Categoria_Eventosocial() {
  const clientesEventos = [
    {
      id: "bodas",
      cliente: "Bodas",
      servicio: "Fotografía & Video",
      anio: "2024",
      img: "/images/eventosocial/boda-mahetzi.jpg" // Temporal till new image
    }
  ];

  return (
    <PortfolioCategoryLayout 
      clients={clientesEventos}
      videoSrc="/videos/Social.mp4"
      titleLine1="EVENTOS"
      titleLine2="SOCIALES"
      description="Capturamos los momentos más importantes a través de cobertura audiovisual que combina narrativa, emoción y estética.
            Cada evento es documentado con un enfoque fresco y cinematográfico, creando recuerdos que trascienden lo tradicional y conservan la esencia de cada celebración."
      categoryKey="eventosocial"
    />
  );
}
