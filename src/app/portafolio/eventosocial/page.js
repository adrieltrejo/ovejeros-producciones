"use client";
import PortfolioCategoryLayout from '@/components/PortfolioCategoryLayout';

export default function Categoria_Eventosocial() {
  const clientesEventos = [
    {
      id: "boda-mahetzi",
      cliente: "Boda de Mahetzi",
      servicio: "Fotografía & Video",
      anio: "2024",
      img: "/images/eventosocial/boda-mahetzi.jpg"
    },
    {
      id: "tres-anios",
      cliente: "3 Años",
      servicio: "Cobertura de Evento",
      anio: "2024",
      img: "/images/eventosocial/tres-anios.jpg"
    },
    {
      id: "revelacion-genero",
      cliente: "Revelación de Género",
      servicio: "Fotografía & Video",
      anio: "2024",
      img: "/images/eventosocial/revelacion-genero.jpg"

    },
    {
      id: "boda-valeria",
      cliente: "Boda de Valeria Tapia",
      servicio: "Fotografía & Video",
      anio: "2024",
      img: "/images/eventosocial/boda-valeria.jpg"
    },
    {
      id: "xv-liliana",
      cliente: "XV Años de Liliana",
      servicio: "Cobertura Completa",
      anio: "2024",
      img: "/images/eventosocial/xv-liliana.jpg"
    },
    {
      id: "lienzo-charro",
      cliente: "Lienzo Charro",
      servicio: "Cobertura de Evento",
      anio: "2024",
      img: "/images/eventosocial/lienzo-charro.jpg"
    },
    {
      id: "pasarela-ferrocarril",
      cliente: "Pasarela Ferrocarril",
      servicio: "Cobertura de Evento",
      anio: "2024",
      img: "/images/eventosocial/pasarela-ferrocarril.jpg"
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
