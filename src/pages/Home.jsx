import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import WhyChoose from "../components/WhyChoose";

function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <section className="credentials">
  <div className="container">
    <p className="eyebrow">Trusted Educational Background</p>

    <div className="credentials-grid">
      <div className="credential-card">
        ✓ Former Classroom Teacher
      </div>

      <div className="credential-card">
        ✓ UCLA Graduate
      </div>

      <div className="credential-card">
        ✓ M.A., Columbia University
      </div>

      <div className="credential-card">
        ✓ MBA, UC Berkeley Haas
      </div>

      <div className="credential-card">
        ✓ B.S. Computer Science, Oregon State University
      </div>
    </div>
  </div>
</section>

        <About />
        <Services />
        <WhyChoose />
        <Testimonials />
        <Contact />
      </main>
    </>
  );
}

export default Home;