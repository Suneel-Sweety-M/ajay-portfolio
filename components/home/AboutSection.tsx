import "./home.css";

export default function AboutSection() {
  return (
    <section className="home_about" id="about">
      <div className="home_about__container">
        {/* LEFT LABEL */}
        <div className="home_about__label">
          <p>About Me</p>
        </div>

        {/* RIGHT CONTENT */}
        <div className="home_about__content">
          <p className="home_about__text">
            I am a creative Video Editor and Graphic Designer with experience
            working with brands like CA Bros, Xthelete, and Eagle Eye
            Technologies. I specialize in high-quality video edits and visually
            compelling graphic designs. My work focuses on storytelling, brand
            consistency, and audience engagement. I aim to deliver impactful
            visuals that strengthen brand identity and performance.
          </p>

          {/* STATS */}
          <div className="home_about__stats">
            <div className="home_about__stat">
              <h3>4+</h3>
              <span>Years Of Experience</span>
            </div>

            {/* <div className="home_about__divider">
              <span></span>
            </div> */}

            <div className="home_about__stat">
              <h3>400+</h3>
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
