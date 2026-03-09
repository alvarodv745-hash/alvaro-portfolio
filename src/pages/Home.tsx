/*
 * SLATE ARCHITECT — Home Page
 * Portfolio completo de Álvaro Durán Valor
 * Secciones: Hero → Stack → Proyectos → Proceso → Estudios de Caso → Contacto
 */
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StackSection from "@/components/StackSection";
import ProjectsSection from "@/components/ProjectsSection";
import ProcessSection from "@/components/ProcessSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[oklch(0.09_0.005_285)] text-white">
      <Navbar />
      <main>
        <HeroSection />
        <StackSection />
        <ProjectsSection />
        <ProcessSection />
        <CaseStudiesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
