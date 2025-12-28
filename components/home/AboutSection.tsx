import './home.css';

export default function AboutSection() {
  return (
    <section className="home_about">
      <div className="home_about__container">

        {/* LEFT LABEL */}
        <div className="home_about__label">
          <p>About Me</p>
        </div>

        {/* RIGHT CONTENT */}
        <div className="home_about__content">
          <p className="home_about__text">
            I am Nino Walker, a seasoned UX designer with over 8 years of
            experience in crafting intuitive and engaging digital experiences.
            My journey began with a background in graphic design, where I
            discovered my passion for understanding user behavior and
            translating it into seamless interactions.
          </p>

          {/* STATS */}
          <div className="home_about__stats">
            <div className="home_about__stat">
              <h3>8+</h3>
              <span>Years Of Experience</span>
            </div>

            {/* <div className="home_about__divider">
              <span></span>
            </div> */}

            <div className="home_about__stat">
              <h3>1k+</h3>
              <span>Completed Projects</span>
            </div>

            <div className="home_about__stat">
              <h3>90%+</h3>
              <span>Client Satisfactions</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
