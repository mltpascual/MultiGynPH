import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProductsSection from "@/components/ProductsSection";
import ComparisonSection from "@/components/ComparisonSection";
import BenefitsSection from "@/components/BenefitsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import WhyMultiGynSection from "@/components/WhyMultiGynSection";
import BlogPreviewSection from "@/components/BlogPreviewSection";
import NewsletterSection from "@/components/NewsletterSection";
import WhereToBuySection from "@/components/WhereToBuySection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import SEOStructuredData from "@/components/SEOStructuredData";
import SEOHead from "@/components/SEOHead";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <SEOHead
        title="Multi-Gyn PH — Feminine Care You Can Trust"
        description="Clinically-proven, natural-based feminine care products that prevent and treat common vaginal discomforts. Trusted by women across the Philippines. Available at Mercury Drug, Watsons, and Rose Pharmacy."
        path="/"
      />
      <SEOStructuredData page="home" />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ProductsSection />
        <ComparisonSection />
        <BenefitsSection />
        <WhyMultiGynSection />
        <TestimonialsSection />
        <BlogPreviewSection />
        <NewsletterSection variant="full" />
        <WhereToBuySection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
