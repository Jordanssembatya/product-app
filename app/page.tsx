import NavBar from "./components/ScrollSections.tsx/NavBar";
import HeroSection from "./components/ScrollSections.tsx/HeroSection";
import WhyChoose from "./components/ScrollSections.tsx/WhyChoose";
import FeaturedProducts from "./components/ScrollSections.tsx/FeaturedProducts";
import SecuritySolutions from "./components/ScrollSections.tsx/SecuritySolutions";
import SoftwareServices from "./components/ScrollSections.tsx/SoftwareServices";
import HowItWorks from "./components/ScrollSections.tsx/HowItWorks";
import Testimonials from "./components/ScrollSections.tsx/Testimonials";
import CallToAction from "./components/ScrollSections.tsx/CallToAction";
import Footer from "./components/ScrollSections.tsx/Footer";

export default function Home() {
  return (
    <main>
      <NavBar />
      <HeroSection />
      <WhyChoose />
      <FeaturedProducts />
      <SecuritySolutions />
      <SoftwareServices />
      <HowItWorks />
      <Testimonials />
      <CallToAction />
      <Footer />
    </main>
  );
}
