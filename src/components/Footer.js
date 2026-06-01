"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Mail, MapPin } from "lucide-react";
import AnimateIn from "@/components/AnimateIn";

const NAV_LINKS = [
  { href: "/", label: "Inicio" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/portafolio", label: "Portafolio" },
  { href: "/servicios", label: "Servicios" },
  { href: "/contacto", label: "Contacto" },
];

// SVG icons for platforms not in Lucide
function WhatsAppIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}

function TikTokIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.75a8.18 8.18 0 004.77 1.52V6.82a4.84 4.84 0 01-1-.13z"/>
    </svg>
  );
}

function InstagramIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
    </svg>
  );
}

function FacebookIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  );
}

export default function Footer() {
  const pathname = usePathname();

  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <footer className="bg-ovejeros-dark text-white py-16 relative overflow-hidden border-t border-white/5">
      {/* Background accent */}
      <div className="absolute right-0 top-0 w-[600px] h-full opacity-10 bg-[radial-gradient(ellipse_at_right,rgba(255,255,255,0.15),transparent)]" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-10 relative z-10">
        {/* Left column */}
        <AnimateIn variant="fade-right" className="flex flex-col items-start gap-8">
          {/* Logo */}
          <div className="max-w-[200px] md:max-w-[260px] -ml-1 md:-ml-4">
            <Image
              src="/logo-footer.png"
              alt="Ovejeros Producciones"
              width={260}
              height={80}
              className="w-full h-auto object-contain block"
            />
          </div>

          {/* Social icons */}
          <div className="flex gap-5 items-center">
            <Link href="/contacto" aria-label="Contacto" className="text-white hover:text-ovejeros-red cursor-pointer transition-colors">
              <Mail className="w-5 h-5" />
            </Link>
            <a href="https://wa.me/527711118767" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="text-white hover:text-ovejeros-red cursor-pointer transition-colors">
              <WhatsAppIcon className="w-5 h-5" />
            </a>
            <a href="https://www.instagram.com/ovejerosproducciones?igsh=MW53aHc1djZ1OWEwag%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-white hover:text-ovejeros-red cursor-pointer transition-colors">
              <InstagramIcon className="w-5 h-5" />
            </a>
            <a href="https://www.tiktok.com/@ovejerosproducciones?_r=1&_t=ZS-94bbqgZtRzc" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="text-white hover:text-ovejeros-red cursor-pointer transition-colors">
              <TikTokIcon className="w-5 h-5" />
            </a>
            <a href="https://www.facebook.com/share/1B6KEVmudf/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-white hover:text-ovejeros-red cursor-pointer transition-colors">
              <FacebookIcon className="w-5 h-5" />
            </a>
          </div>

          {/* Address */}
          <div className="flex items-start gap-2 text-sm text-gray-400 font-poppins max-w-xs text-left">
            <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-gray-500" />
            <span>
              Camino Real de La Plata 110, Zona Plateada,<br />
              42083 Pachuca de Soto, Hgo.
            </span>
          </div>


        </AnimateIn>

        {/* Right column — navigation */}
        <AnimateIn variant="fade-left" delay={0.15} className="flex md:justify-end items-center">
          <ul className="flex flex-col gap-3 text-right">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`font-poppins font-medium transition-colors ${
                    isActive(link.href)
                      ? "text-white"
                      : "text-gray-300 hover:text-ovejeros-red"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </AnimateIn>
      </div>
    </footer>
  );
}
