import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Zonathon Doe",
    role: "CEO & Founder X",
    text:
      "Financial planners help people to knowledge in about how to invest and in save their moneye the most efficient way eve plan ners help people tioniiio know ledige in about how.",
    avatar: "/images/avatar1.jpg",
    large: true,
  },
  {
    id: 2,
    name: "Martin Smith",
    role: "CEO & Founder Google",
    text:
      "Asian planners help people to knowledge in about how to invest and in save their moneye the most efficient way eve plan ners help people tioniiio know ledige in about how.",
    avatar: "/images/avatar2.jpg",
    large: true,
  },
  {
    id: 3,
    name: "Methail Dev",
    role: "Managing Director – Paydesk",
    text:
      "Hello planners help people to knowledge in about how to invest and in save their moneye the most efficient way eve plan ners help people tioniiio know ledige in about how.",
    avatar: "/images/avatar3.jpg",
  },
  {
    id: 4,
    name: "Eliana Tweet",
    role: "CEO & Founder Tesla",
    text:
      "Financial planners help people to knowledge in about how to invest and in save their moneye the most efficient way eve plan ners help people tioniiio know ledige in about how.",
    avatar: "/images/avatar2.jpg",
  },
  {
    id: 5,
    name: "Henry Clark",
    role: "Founder Oxyzen",
    text:
      "Yelp planners help people to knowledge in about how to invest and in save their moneye the most efficient way eve plan ners help people tioniiio know ledige in about how.",
    avatar: "/images/avatar1.jpg",
  },
  {
    id: 6,
    name: "Henry Clark",
    role: "Founder Oxyzen",
    text:
      "Yelp planners help people to knowledge in about how to invest and in save their moneye the most efficient way eve plan ners help people tioniiio know ledige in about how.",
    avatar: "/images/avatar1.jpg",
  },
];

export default function Testimonials() {
  return (
    <section className="testimonials">
      <h2 className="testimonials__title">TESTIMONIALS</h2>

      <div className="testimonials__grid">
        {testimonials.map((item) => (
          <div
            key={item.id}
            className={`testimonial__card ${
              item.large ? "testimonial__card--large" : ""
            }`}
          >
            <div className="testimonial__avatar">
              <Image
                src={item.avatar}
                alt={item.name}
                width={56}
                height={56}
              />
            </div>

            <p className="testimonial__text">{item.text}</p>

            <div className="testimonial__author">
              <h4>{item.name}</h4>
              <span>{item.role}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
