
const services = [
  {
    id: "01",
    title: "Video Editing",
    desc: "A creative video editor who consistently delivers high-quality visuals and exceeds client expectations every time.",
  },
  {
    id: "02",
    title: "Graphic Design",
    desc: "A creative graphic designer who crafts visually impactful designs and consistently exceeds client expectations.",
  },
  {
    id: "03",
    title: "Animations",
    desc: "An animation specialist who brings ideas to life with smooth motion and consistently exceeds client expectations.",
  },
  {
    id: "04",
    title: "Photography",
    desc: "I'm a photographer who captures compelling moments and consistently exceeds client expectations.",
  },
];

export default function ServicesSection() {
  return (
    <section className="home_services" id="services">
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
