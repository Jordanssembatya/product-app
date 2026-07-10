const testimonials = [
  {
    quote:
      "eMart installed our office CCTV system professionally and helped our team understand how to manage it.",
    name: "Business Client",
  },
  {
    quote:
      "Their access control solution made our workplace safer and easier to monitor every day.",
    name: "Office Manager",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-slate-900 px-6 py-20 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 max-w-2xl">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-yellow-500">
            Testimonials
          </p>
          <h2 className="text-3xl font-bold md:text-4xl">
            What Our Clients Say
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.map((testimonial) => (
            <figure
              key={testimonial.name}
              className="rounded-lg border border-slate-700 bg-slate-950 p-6"
            >
              <blockquote className="text-lg text-slate-200">
                “{testimonial.quote}”
              </blockquote>
              <figcaption className="mt-5 font-semibold text-yellow-500">
                {testimonial.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
