import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import WhyChoose from "./components/WhyChoose";
import FeaturedProducts from "./components/FeaturedProducts";
import SecuritySolutions from "./components/SecuritySolutions";
import SoftwareServices from "./components/SoftwareServices";
import HowItWorks from "./components/HowItWorks";
import Testimonials from "./components/Testimonials";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";

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
