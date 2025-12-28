import Image from "next/image";

const works = [
  {
    id: 1,
    image: "/images/work1.webp",
    tag: "Branding",
    title: "Hope Bottle Branding",
  },
  {
    id: 2,
    image: "/images/work2.webp",
    tag: "Mockup",
    title: "Fashion Product UI",
  },
  {
    id: 3,
    image: "/images/work3.webp",
    tag: "Video",
    title: "Video Identity System",
  },
  {
    id: 4,
    image: "/images/work4.webp",
    tag: "Branding",
    title: "Tea Packaging Design",
  },
  {
    id: 5,
    image: "/images/work5.webp",
    tag: "Mockup",
    title: "Minimal Bottle Mockup",
  },
];

export default function RecentWork() {
  return (
    <section className="recent">
      {/* HEADER */}
      <div className="recent__header">
        <Image
          src="/images/work-scribble.svg"
          alt="Some recent work"
          width={180}
          height={60}
        />
      </div>

      {/* WORKS */}
      <div className="recent__rows">
        {chunkWorks(works).map((row, rowIndex) => (
          <div
            key={rowIndex}
            className={`recent__row ${
              row.length === 2 ? "row--two" : "row--three"
            }`}
          >
            {row.map((work) => (
              <div key={work.id} className="recent__card">
                <span className="recent__tag">{work.tag}</span>

                <div className="recent__title">{work.title}</div>

                <Image
                  src={work.image}
                  alt={work.title}
                  fill
                  className="recent__image"
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

/* -------- Helpers -------- */
function chunkWorks(list: typeof works) {
  const rows = [];
  let i = 0;
  let toggle = true; // true → 2, false → 3

  while (i < list.length) {
    const size = toggle ? 2 : 3;
    rows.push(list.slice(i, i + size));
    i += size;
    toggle = !toggle;
  }

  return rows;
}