"use client";
import PortfolioCategoryLayout from '@/components/PortfolioCategoryLayout';

export default function Categoria_Moda() {
  const clientesModa = [
    {
      id: "rr13",
      cliente: "R.R.13",
      servicio: "Producción Audiovisual",
      anio: "2024",
      img: "/images/moda/rr13.jpg"

    },
    {
      id: "norvi-jeans",
      cliente: "Norvi Jeans",
      servicio: "Producción Audiovisual",
      anio: "2024",
      img: "/images/moda/norvi-jeans.jpg"
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
      clients={clientesModa}
      videoSrc="/videos/Moda.mp4"
      titleLine1="MODA &"
      titleLine2="ESTILO"
      description="Creamos producciones visuales que proyectan identidad, estilo y presencia de marca.
            Desde contenido para tiendas de ropa hasta cobertura audiovisual de pasarelas, desarrollamos piezas dinámicas y contemporáneas que conectan con las tendencias y elevan la percepción de cada proyecto."
      categoryKey="moda"
    />
  );
}
