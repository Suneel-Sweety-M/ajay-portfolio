import Image from "next/image";

const stories = [
  {
    id: 1,
    title: "Create a landing page that performs great",
    date: "Posted on Aug 28",
    image: "/images/blog1.jpg",
    tag: "Help",
  },
  {
    id: 2,
    title: "Starting and growing a career in web design",
    date: "Posted on Aug 28",
    image: "/images/blog2.jpg",
    tag: "Branding",
  },
  {
    id: 3,
    title: "How can designers prepare for the future",
    date: "Posted on Aug 28",
    image: "/images/blog3.jpg",
    tag: "Design",
  },
];

export default function Stories() {
  return (
    <section className="stories">
      <div className="stories__header">
        <h2>STORIES</h2>
      </div>

      <div className="stories__list">
        {stories.map((story) => (
          <div key={story.id} className="story">
            {/* IMAGE */}
            <div className="story__media">
              <span className="story__tag">{story.tag}</span>

              <Image
                src={story.image}
                alt={story.title}
                fill
                className="story__image"
              />
            </div>

            {/* CONTENT */}
            <div className="story__content">
              <span className="story__date">{story.date}</span>
              <h3>{story.title}</h3>

              <button className="story__btn">
                Read more <span>→</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
