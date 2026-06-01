"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { MapPin } from 'lucide-react';
import AnimateIn from '@/components/AnimateIn';


export default function Contacto() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    descripcion: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.nombre.trim()) newErrors.nombre = 'Requerido';
    if (!formData.email.trim()) {
      newErrors.email = 'Requerido';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email inválido';
    }
    if (!formData.descripcion.trim()) newErrors.descripcion = 'Requerido';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus(null);

    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        setSubmitStatus({ type: "error", message: data.error || "No se pudo enviar el mensaje." });
        return;
      }

      setSubmitStatus({
        type: "success",
        message: "¡Mensaje enviado! Te contactaremos pronto.",
      });
      setFormData({ nombre: "", email: "", telefono: "", descripcion: "" });
      setErrors({});
    } catch {
      setSubmitStatus({
        type: "error",
        message: "Error de conexión. Verifica tu internet e intenta de nuevo.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-black font-poppins text-white overflow-x-hidden relative flex flex-col">

      {/* ================= HERO / CONTACTO SECTION ================= */}
      <section className="relative w-full min-h-screen flex flex-col justify-center pt-32 pb-16 px-6 md:px-12 overflow-hidden">

        <div className="absolute inset-0 z-0">
          {/* TODO: Reemplazar con imagen real de contacto */}
          <Image fill
            src="/images/fondo_contacto.jpg"
            className="w-full h-full object-cover opacity-30 grayscale"
            alt="Fondo contacto"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
        </div>

        <div className="relative z-10 w-full flex flex-col lg:flex-row gap-16 justify-between items-center max-w-[1400px] mx-auto">

          {/* LADO IZQUIERDO: Textos */}
          <AnimateIn variant="fade-right" className="w-full lg:w-1/2 flex flex-col gap-8 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-[70px] font-poppins font-extrabold tracking-tight leading-[1.1]">
              HABLEMOS <br /> <span className="text-ovejeros-red">DE TU PROYECTO</span>
            </h1>

            <div className="flex flex-col gap-6 mt-4">
              <div className="flex flex-col gap-1">
                <span className="text-ovejeros-red font-bold tracking-widest text-xs uppercase">Teléfono</span>
                <p className="text-lg md:text-xl font-poppins font-extrabold tracking-wider">771 111 8767</p>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-ovejeros-red font-bold tracking-widest text-xs uppercase">Correo</span>
                <p className="text-lg md:text-xl font-poppins font-extrabold tracking-wider">OVEJEROSPRODUCCIONES@GMAIL.COM</p>
              </div>

              {/* Botón de Google Maps */}
              <div className="flex flex-col gap-3 items-center lg:items-start mt-2">
                <span className="text-ovejeros-red font-bold tracking-widest text-xs uppercase">Dirección</span>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Camino+Real+de+La+Plata+110,+Zona+Plateada,+42083+Pachuca+de+Soto,+Hgo."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-white/5 hover:bg-ovejeros-red border border-white/10 hover:border-ovejeros-red px-6 py-3 rounded-full text-xs font-poppins font-bold tracking-widest uppercase transition-all duration-300 cursor-pointer"
                >
                  <MapPin className="w-4 h-4" />
                  VER EN GOOGLE MAPS
                </a>
              </div>
            </div>
          </AnimateIn>

          {/* LADO DERECHO: Formulario */}
          <AnimateIn variant="fade-left" delay={0.2} className="w-full lg:w-1/2 max-w-[450px] lg:ml-auto bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-[32px] shadow-2xl">
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="nombre" className="text-[10px] uppercase tracking-widest font-bold ml-4 opacity-60">Nombre / Empresa</label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  className={`bg-white/10 border rounded-full px-4 py-2.5 text-xs focus:outline-none focus:border-ovejeros-red transition-colors ${errors.nombre ? 'border-ovejeros-red' : 'border-white/10'}`}
                />
                {errors.nombre && <span className="text-ovejeros-red text-xs ml-4">{errors.nombre}</span>}
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="text-[10px] uppercase tracking-widest font-bold ml-4 opacity-60">Correo Electrónico</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`bg-white/10 border rounded-full px-4 py-2.5 text-xs focus:outline-none focus:border-ovejeros-red transition-colors ${errors.email ? 'border-ovejeros-red' : 'border-white/10'}`}
                />
                {errors.email && <span className="text-ovejeros-red text-xs ml-4">{errors.email}</span>}
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="telefono" className="text-[10px] uppercase tracking-widest font-bold ml-4 opacity-60">Teléfono</label>
                <input
                  type="tel"
                  id="telefono"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  className="bg-white/10 border border-white/10 rounded-full px-4 py-2.5 text-xs focus:outline-none focus:border-ovejeros-red transition-colors"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="descripcion" className="text-[10px] uppercase tracking-widest font-bold ml-4 opacity-60">Descripción del proyecto</label>
                <textarea
                  rows="3"
                  id="descripcion"
                  name="descripcion"
                  value={formData.descripcion}
                  onChange={handleChange}
                  className={`bg-white/10 border rounded-[20px] px-4 py-2.5 text-xs focus:outline-none focus:border-ovejeros-red transition-colors resize-none ${errors.descripcion ? 'border-ovejeros-red' : 'border-white/10'}`}
                />
                {errors.descripcion && <span className="text-ovejeros-red text-xs ml-4">{errors.descripcion}</span>}
              </div>

              {submitStatus && (
                <p
                  role="alert"
                  className={`text-xs text-center px-4 py-2 rounded-2xl ${
                    submitStatus.type === "success"
                      ? "text-green-400 bg-green-400/10"
                      : "text-ovejeros-red bg-ovejeros-red/10"
                  }`}
                >
                  {submitStatus.message}
                </p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-ovejeros-red text-white mt-3 py-3 rounded-full font-poppins font-bold text-xs tracking-[0.2em] uppercase hover:bg-ovejeros-red-dark transition-colors shadow-[0_10px_30px_rgba(227,30,36,0.3)] cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "ENVIANDO..." : "SOLICITAR COTIZACIÓN"}
              </button>
            </form>
          </AnimateIn>
        </div>
      </section>
    </div>
  );
}