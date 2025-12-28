import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import "../../components/about/about.css";

const aboutData = [
  {
    id: 1,
    period: "2020 - PRESENT",
    title: "WEB DEVELOPER & BUSINESS PARTNER (FULL-TIME)",
    place: "@ Envato Marketplace",
    desc: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 2,
    period: "2020 - PRESENT",
    title: "BACHELOR DEGREE OF SCIENCE",
    place: "@ University of London",
    desc: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 3,
    period: "2018 - 2020",
    title: "CEO & FOUNDER",
    place: "@ Thememaster LTD",
    desc: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 4,
    period: "2018 - 2020",
    title: "MASTER DEGREE OF DESIGN",
    place: "@ Envato Education",
    desc: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];

export default function About() {
  return (
    <>
      <Navbar />

      <main className="about">
        {/* PAGE TITLE */}
        <h1 className="about__title">ABOUT ME</h1>

        {/* GRID */}
        <div className="about__grid">
          {aboutData.map((item) => (
            <div key={item.id} className="about__card">
              <span className="about__period">{item.period}</span>

              <h3>{item.title}</h3>
              <span className="about__place">{item.place}</span>

              <p>{item.desc}</p>
            </div>
          ))}
        </div>

        {/* SKILLS SECTION */}
        <section className="skills">
          <h2 className="skills__title">PROFESSIONAL SKILLS</h2>

          <div className="skills__grid">
            {[
              { name: "Figma", icon: "/images/skills/skill1.png" },
              { name: "Tailwind", icon: "/images/skills/skill2.png" },
              { name: "Photoshop", icon: "/images/skills/skill3.png" },
              { name: "WordPress", icon: "/images/skills/skill4.png" },
              { name: "Angular", icon: "/images/skills/skill5.png" },
              { name: "Webflow", icon: "/images/skills/skill6.png" },
              { name: "Python", icon: "/images/skills/skill7.png" },
              { name: "Sketch", icon: "/images/skills/skill8.png" },
            ].map((skill) => (
              <div key={skill.name} className="skill__card">
                <img src={skill.icon} alt={skill.name} />
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
