const services = [
  {
    title: "Mathematics",
    description:
      "Algebra, Geometry, Precalculus, Calculus, SAT/ACT preparation, homework support, and confidence building.",
  },

  {
    title: "Computer Science",
    description:
      "Programming fundamentals, Python, JavaScript, AP Computer Science, and introductory college coursework.",
  },

  {
    title: "Executive Function Coaching",
    description:
      "Organization, planning, time management, study skills, accountability, and academic coaching.",
  },
];

function Services() {
  return (
    <section className="section section--light" id="services">
      <p className="eyebrow">Services</p>
      <h2>Support designed around the student.</h2>

      <div className="services-grid">
        {services.map((service) => (
          <article className="service-card" key={service.title}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Services;