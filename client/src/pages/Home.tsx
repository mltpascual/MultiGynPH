import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProductsSection from "@/components/ProductsSection";
import BenefitsSection from "@/components/BenefitsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import WhyMultiGynSection from "@/components/WhyMultiGynSection";
import WhereToBuySection from "@/components/WhereToBuySection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ProductsSection />
        <BenefitsSection />
        <WhyMultiGynSection />
        <TestimonialsSection />
        <WhereToBuySection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
