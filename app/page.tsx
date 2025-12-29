// app/page.tsx
import ContactForm from "@/components/contact/ContactForm";
import Footer from "@/components/footer/Footer";
import AboutSection from "@/components/home/AboutSection";
import Hero from "@/components/home/Hero";
// import RecentWork from "@/components/home/RecentWork";
import ServicesSection from "@/components/home/ServicesSection";
import Stories from "@/components/home/Stories";
import Testimonials from "@/components/home/Testimonials";
import Navbar from "@/components/navbar/Navbar";
import '../components/about/about.css';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutSection />
      <ServicesSection />
      <main className="about" id="tools">
        <section className="skills">
          <h2 className="skills__title">TOOLS I USE</h2>
          <div className="skills__grid">
            {[
              { name: "Figma", icon: "/images/skills/skill1.png" },
              { name: "After Effects", icon: "/images/skills/ae.jpeg" },
              { name: "Canva", icon: "/images/skills/canva.jpeg" },
              { name: "Premiere Pro", icon: "/images/skills/pr.jpeg" },
              // { name: "Angular", icon: "/images/skills/skill5.png" },
              // { name: "Webflow", icon: "/images/skills/skill6.png" },
              // { name: "Python", icon: "/images/skills/skill7.png" },
              // { name: "Sketch", icon: "/images/skills/skill8.png" },
            ].map((skill) => (
              <div key={skill.name} className="skill__card">
                <img src={skill.icon} alt={skill.name} />
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </section>
      </main>
      {/* <RecentWork /> */}
      <Testimonials />
      <Stories />
      <ContactForm />
      <Footer />
    </>
  );
}
