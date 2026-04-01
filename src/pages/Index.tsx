import HeroSection from "@/components/HeroSection";
import PortfolioSection from "@/components/PortfolioSection";
import ProductsSection from "@/components/ProductsSection";
import CustomizationSection from "@/components/CustomizationSection";
import PerfectForSection from "@/components/PerfectForSection";
import AboutSection from "@/components/AboutSection";
import ReviewsSection from "@/components/ReviewsSection";
import FinalCTA from "@/components/FinalCTA";
import FloatingInstagram from "@/components/FloatingInstagram";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <PortfolioSection />
      <ProductsSection />
      <CustomizationSection />
      <PerfectForSection />
      <AboutSection />
      <ReviewsSection />
      <FinalCTA />
      <Footer />
      <FloatingInstagram />
    </div>
  );
};

export default Index;
