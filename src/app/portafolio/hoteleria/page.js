"use client";
import PortfolioCategoryLayout from '@/components/PortfolioCategoryLayout';

export default function Categoria_Hoteleria() {
  const clientesHoteleria = [
    {
      id: "cardon-alto",
      cliente: "Cardón Alto",
      servicio: "Marketing",
      anio: "2024",
      img: "/images/hoteleria/cardon-alto.jpg"
    },
    {
      id: "hotel-centrico",
      cliente: "Hotel Céntrico Tulum",
      servicio: "Marketing",
      anio: "2024",
      img: "/images/hoteleria/hotel-centrico.jpg"
    },
    {
      id: "via-dorada",
      cliente: "Vía Dorada",
      servicio: "Producción Audiovisual",
      anio: "2024",
      img: "/images/hoteleria/via-dorada.jpg"
    }
  ];

  return (
    <PortfolioCategoryLayout 
      clients={clientesHoteleria}
      videoSrc="/videos/Hoteleria.mp4"
      titleLine1="HOTELERÍA &"
      titleLine2="TURISMO"
      description="Desarrollamos propuestas visuales y de branding enfocadas en transmitir experiencia, exclusividad y valor.
            A través de producción audiovisual y estrategias de marketing, construimos contenido que fortalece la identidad de cada espacio y genera una conexión más atractiva con sus clientes."
      categoryKey="hoteleria"
    />
  );
}
