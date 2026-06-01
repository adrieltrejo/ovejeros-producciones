"use client";
import PortfolioCategoryLayout from '@/components/PortfolioCategoryLayout';

export default function Categoria_Comida() {
  const clientesComida = [

    {
      id: "green-coffee",
      cliente: "Green Coffee",
      servicio: "Producción Audiovisual",
      anio: "2024",
      img: "/images/comida/green-coffee-v2.jpg"
    },
    {
      id: "villanova",
      cliente: "Villanova Heladería",
      servicio: "Producción Audiovisual",
      anio: "2024",
      img: "/images/comida/villanova.jpg"
    }
  ];

  return (
    <PortfolioCategoryLayout 
      clients={clientesComida}
      videoSrc="/videos/Comida.mp4"
      titleLine1="COMIDA &"
      titleLine2="GASTRONOMÍA"
      description="Desarrollamos contenido audiovisual y estrategias visuales para marcas gastronómicas que buscan destacar más allá de sus productos.
            A través de fotografía, video y contenido enfocado en marketing, logramos transmitir la esencia, personalidad y experiencia de cada negocio de forma atractiva y actual."
      categoryKey="comida"
    />
  );
}
