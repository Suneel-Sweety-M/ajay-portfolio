import Image from "next/image";
import "./home.css";

export default function Hero() {
  return (
    <section className="hero">
      <h1 className="hero__title">AJAY ABBIREDDY</h1>
      <div className="hero__content">
        {/* LEFT */}
        <div className="hero__left">
          <div className="hero__reviews">
            <div className="hero__avatars">
              <img src="/images/logo1.png" alt="" />
              <img src="/images/logo2.png" alt="" />
              <img src="/images/logo3.png" alt="" />
            </div>

            <div>
              <strong>Happy Clients</strong>
              {/* <span> (4.96 of 5)</span> */}
              <p>Five-star reviews from my esteemed clients.</p>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="hero__right">
          <p>
            Hi, I’m Ajay, a passionate Video Editor & Graphics Designer
            dedicated to bringing your stories to life through captivating
            visuals and seamless editing.
          </p>

          <a href="#contact" className="hero__cta">Get In touch</a>
        </div>
      </div>

      {/* CENTER IMAGE */}
      <div className="hero__image">
        <Image
          src="/images/hero2.png"
          alt="Ajay Abbireddy"
          width={400}
          height={500}
          priority
        />
      </div>
    </section>
  );
}
