import background from "../assets/background.png";

function Hero() {
  return (
    <section
      className="hero"
      id="home"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="hero__content">
        <p className="eyebrow">
          Personalized tutoring and academic coaching
        </p>

        <h1>Helping students build confidence and achieve their goals.</h1>

        <p className="hero__description">
          One-on-one support in mathematics, computer science, and executive
          functioning for high school and college students.
        </p>

        <div className="hero__actions">
          <a
            className="button"
            href="https://zcal.co/julianramirez/30min"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book a Consultation
          </a>

          <a className="button button--secondary" href="#services">
            Explore Services
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;