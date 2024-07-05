import Image from "next/image";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProductSection from "./components/ProductSection";
import PortfolioSection from "./components/PortfolioSection";
import TestimonialSection from "./components/TestimonialSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import FloatingIcon from "./components/FloatingIcon";

export default function Home() {
  return (
    <>
      <Header />
      <FloatingIcon/>
      <HeroSection />
      <AboutSection />
      <ProductSection />
      <PortfolioSection/>
      <TestimonialSection/>
      <ContactSection/>
      <Footer/>
    </>
  );
}
