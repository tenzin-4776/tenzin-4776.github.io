const testimonials = [
  {
    quote:
      "Julian has been a blessing for both of our kids. He is knowledgeable, patient, supportive, and most importantly effective. He adapts to the needs of each child and always goes the extra mile to help them thrive academically.",
    author: "The Zanders",
  },
  {
    quote:
      "Julian was instrumental in helping our son prepare for high school entrance exams and application essays. His teaching style is exceptional, and our son always looked forward to their sessions.",
    author: "Dave B.",
  },
  {
    quote:
      "Julian has had a fantastic impact on my son's academic journey and personal growth, especially in math, organization, and confidence. He is patient, encouraging, and genuinely committed to helping students thrive.",
    author: "Carel T.",
  },
];

function Testimonials() {
  return (
    <section className="section" id="testimonials">
      <p className="eyebrow">Testimonials</p>

      <h2>What families are saying.</h2>

      <div className="testimonials-grid">
        {testimonials.map((testimonial) => (
          <article className="testimonial-card" key={testimonial.author}>
            <div className="testimonial-stars" aria-label="Five-star review">
              ★★★★★
            </div>

            <blockquote>“{testimonial.quote}”</blockquote>

            <p className="testimonial-author">— {testimonial.author}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;