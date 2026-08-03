import logo from "../assets/logo.png";

function Navbar() {
  return (
    <header className="navbar">
      <a className="navbar__logo" href="#home">
        <img src={logo} alt="Julian Tutors" className="logo" />
      </a>

      <nav className="navbar__links" aria-label="Main navigation">
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#why-choose">Why Choose Us</a>
        <a href="#testimonials">Testimonials</a>
        <a href="#contact">Contact</a>
      </nav>

      <a
        className="button button--small"
        href="https://zcal.co/julianramirez/30min"
        target="_blank"
        rel="noopener noreferrer"
      >
        Book a Consultation
      </a>
    </header>
  );
}

export default Navbar;