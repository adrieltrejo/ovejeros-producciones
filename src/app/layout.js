import "./globals.css";
import { poppins } from "./fonts";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata = {
  metadataBase: new URL('https://www.ovejerosproducciones.com'),
  title: {
    default: 'Ovejeros Producciones | Productora Audiovisual',
    template: '%s | Ovejeros Producciones'
  },
  description: 'Productora audiovisual en Pachuca y CDMX. Especialistas en cine comercial, fotografía profesional, desarrollo de marca, y campañas de alto impacto.',
  keywords: ['productora audiovisual', 'fotografía profesional', 'videos corporativos', 'Pachuca', 'CDMX', 'agencia de marketing', 'Ovejeros Producciones', 'Ovejeros', 'cine comercial'],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Ovejeros Producciones',
    description: 'Generamos impacto y valor a través de soluciones cinematográficas de la más alta calidad.',
    url: 'https://www.ovejerosproducciones.com',
    siteName: 'Ovejeros Producciones',
    locale: 'es_MX',
    type: 'website',
  }
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="es"
      className={`${poppins.variable}`}
    >
      <body className="bg-ovejeros-black text-white font-poppins antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}