import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MenuSection from "@/components/MenuSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import SectionDivider from "@/components/SectionDivider";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <SectionDivider />
      <MenuSection />
      <AboutSection />
      <SectionDivider />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
