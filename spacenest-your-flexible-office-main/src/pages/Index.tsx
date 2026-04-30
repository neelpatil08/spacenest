import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedSpaces from "@/components/FeaturedSpaces";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser && storedUser !== "undefined") {
      try {
        setUser(JSON.parse(storedUser));
      } catch {
        localStorage.removeItem("user");
      }
    }
  }, []);

  return (
    <div className="min-h-screen pt-16">
      <Navbar />

      <main>
        <Hero />
        <FeaturedSpaces />
        <HowItWorks />
        <Testimonials />
        <CTASection />
      </main>

      <Footer />
    </div>
  );
};

export default Index;