"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { href: "/", label: "INICIO" },
  { href: "/nosotros", label: "NOSOTROS" },
  { href: "/portafolio", label: "PORTAFOLIO" },
  { href: "/servicios", label: "SERVICIOS" },
  { href: "/contacto", label: "CONTACTO" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  // Cerrar mobile menu al cambiar de página
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Prevenir scroll cuando el menu está abierto
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-6 md:px-12 py-6">
        {/* Logo */}
        <Link href="/" className="w-16 h-16 flex items-center justify-center relative">
          <Image
            src="/logo-ovejeros-white.png"
            alt="Logo Ovejeros"
            width={64}
            height={64}
            className="w-full h-auto object-contain drop-shadow-lg"
            priority
          />
        </Link>

        {/* Desktop pill nav */}
        <div className="bg-white/10 backdrop-blur-md rounded-full items-center p-1 border border-white/10 hidden md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={
                isActive(link.href)
                  ? "bg-white text-black px-6 py-2.5 rounded-full text-xs font-bold tracking-widest font-poppins font-bold shadow-[0_0_15px_rgba(255,255,255,0.3)]"
                  : "text-gray-300 hover:text-white hover:bg-white/10 px-6 py-2.5 rounded-full text-xs font-bold tracking-widest font-poppins font-bold transition-all"
              }
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile hamburger button */}
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden w-12 h-12 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-white cursor-pointer z-[60]"
          aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile drawer overlay */}
      <div
        className={`fixed inset-0 z-[55] bg-black/80 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile drawer panel */}
      <div
        className={`fixed top-0 right-0 z-[58] h-full w-[280px] bg-ovejeros-dark/95 backdrop-blur-xl border-l border-white/10 flex flex-col pt-28 px-8 gap-2 transition-transform duration-300 ease-out md:hidden ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`py-3 px-4 rounded-2xl text-sm font-bold tracking-widest font-poppins font-bold transition-all ${
              isActive(link.href)
                ? "bg-white text-black shadow-[0_0_15px_rgba(255,255,255,0.2)]"
                : "text-gray-300 hover:text-white hover:bg-white/10"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </>
  );
}