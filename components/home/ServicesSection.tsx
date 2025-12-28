
const services = [
  {
    id: "01",
    title: "Brand Identity Design",
    desc: "Blend of strategic thinking and creative flair to craft a digital identity that resonates and captivates. Kits you need to create a true website within minutes.",
  },
  {
    id: "02",
    title: "Visual Design",
    desc: "Blend of artistic intuition with strategic insight to craft a visual identity.",
  },
  {
    id: "03",
    title: "UX Research",
    desc: "Blend of functionality with aesthetics to create delightful experience.",
  },
  {
    id: "04",
    title: "Art Direction",
    desc: "Blend of strategic thinking and artistic finesse to craft a visual identity that goes beyond aesthetics.",
  },
];

export default function ServicesSection() {
  return (
    <section className="home_services">
      <div className="home_services__header">
        <h2>SERVICES</h2>
      </div>

      <div className="home_services__grid">
        {services.map((service) => (
          <div key={service.id} className="home_service__card">
            <div className="home_service__top">
              <span className="home_service__number">{service.id}</span>
              <span className="home_service__arrow">↗</span>
            </div>

            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
