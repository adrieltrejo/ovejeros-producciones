"use client";
import PortfolioCategoryLayout from '@/components/PortfolioCategoryLayout';

export default function Categoria_Privado() {
  const clientesPrivado = [
    {
      id: "carlos-ramirez",
      cliente: "Carlos Ramírez",
      servicio: "Sesión de Fotos",
      anio: "2024",
      img: "/images/privado/carlos-ramirez.jpg"
    }
  ];

  return (
    <PortfolioCategoryLayout 
      clients={clientesPrivado}
      videoSrc="/videos/Privado.mp4"
      titleLine1="SESIONES"
      titleLine2="PRIVADAS"
      description="Creamos sesiones fotográficas con dirección visual y atención a cada detalle.
            Nuestro enfoque busca desarrollar imágenes auténticas, limpias y contemporáneas, logrando resultados que reflejan personalidad, estilo e identidad visual de forma profesional."
      categoryKey="privado"
    />
  );
}
