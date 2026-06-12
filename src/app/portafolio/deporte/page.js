"use client";
import PortfolioCategoryLayout from '@/components/PortfolioCategoryLayout';

export default function Categoria_Deporte() {
  const clientesDeporte = [
    {
      id: "one-fit-center",
      cliente: "One Fit Center",
      servicio: "Producción Audiovisual",
      anio: "2024",
      img: "/images/deporte/one-fit-center.jpg"
    },
    {
      id: "excelencia-charra",
      cliente: "Excelencia Charra",
      servicio: "Producción Audiovisual",
      anio: "2024",
      img: "/images/deporte/excelencia-charra.jpg"
    }
  ];

  return (
    <PortfolioCategoryLayout 
      clients={clientesDeporte}
      videoSrc="/videos/Deporte.mp4"
      titleLine1="DEPORTE &"
      titleLine2="ENTRENAMIENTO"
      description="Generamos contenido audiovisual con energía, movimiento y enfoque visual actual.
            Desde gimnasios hasta espacios especializados, desarrollamos piezas que transmiten motivación, disciplina y la esencia de cada marca a través de contenido dinámico y estratégico."
      categoryKey="deporte"
    />
  );
}
