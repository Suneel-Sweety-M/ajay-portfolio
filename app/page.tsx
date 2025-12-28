// app/page.tsx
import ContactForm from "@/components/contact/ContactForm";
import Footer from "@/components/footer/Footer";
import AboutSection from "@/components/home/AboutSection";
import Hero from "@/components/home/Hero";
import RecentWork from "@/components/home/RecentWork";
import ServicesSection from "@/components/home/ServicesSection";
import Stories from "@/components/home/Stories";
import Testimonials from "@/components/home/Testimonials";
import Navbar from "@/components/navbar/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutSection />
      <ServicesSection />
      <RecentWork />
      <Testimonials />
      <Stories />
      <ContactForm />
      <Footer />
    </>
  );
}
