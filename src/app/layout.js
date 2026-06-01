import "./globals.css";
import { poppins } from "./fonts";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata = {
  title: 'Inicio | Ovejeros Producciones',
  description: 'Productora audiovisual en Pachuca. Especialistas en cine comercial, fotografía, desarrollo de marca y campañas de alto impacto.',
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