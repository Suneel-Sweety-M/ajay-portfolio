import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Surya Prasad",
    role: "CEO & Founder of Xthlete",
    text:
      "Amazing experience working with him. The creativity, attention to detail, and timely delivery exceeded our expectations. Every requirement was understood perfectly and executed flawlessly.",
    avatar: "/images/surya.jpeg",
    large: true,
  },
  {
    id: 2,
    name: "Arun Anbu",
    role: "CEO & Founder of CABros",
    text:
      "Highly professional and reliable. The quality of work was outstanding, and all revisions were handled patiently until we were fully satisfied. Truly a great creative partner.",
    avatar: "/images/arun.jpeg",
    large: true,
  },
  {
    id: 3,
    name: "Vishnu Inugala",
    role: "CEO & Founder of Eagle Eye Technologies",
    text:
      "Excellent work ethic and creativity. He delivered exactly what we needed and even added extra value with his ideas. Would definitely recommend and work with him again.",
    avatar: "/images/vishnu.png",
  },
  // {
  //   id: 4,
  //   name: "Eliana Tweet",
  //   role: "CEO & Founder Tesla",
  //   text:
  //     "Financial planners help people to knowledge in about how to invest and in save their moneye the most efficient way eve plan ners help people tioniiio know ledige in about how.",
  //   avatar: "/images/avatar2.jpg",
  // },
  // {
  //   id: 5,
  //   name: "Henry Clark",
  //   role: "Founder Oxyzen",
  //   text:
  //     "Yelp planners help people to knowledge in about how to invest and in save their moneye the most efficient way eve plan ners help people tioniiio know ledige in about how.",
  //   avatar: "/images/avatar1.jpg",
  // },
  // {
  //   id: 6,
  //   name: "Henry Clark",
  //   role: "Founder Oxyzen",
  //   text:
  //     "Yelp planners help people to knowledge in about how to invest and in save their moneye the most efficient way eve plan ners help people tioniiio know ledige in about how.",
  //   avatar: "/images/avatar1.jpg",
  // },
];

export default function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">
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
