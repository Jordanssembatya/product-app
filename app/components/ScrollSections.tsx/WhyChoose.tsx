const reasons = [
  "Quality Products",
  "Professional Installation",
  "Reliable Customer Support",
  "Affordable Business Solutions",
  "Latest Technology",
];

const WhyChoose = () => {
  return (
    <section id="about" className="bg-slate-950 px-6 py-20 text-white">
      <div className="mx-auto text-center max-w-xl">
        <div className="mb-10 max-w-2xl">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-yellow-500">
            Why Choose eMart
          </p>
          <h2 className="text-3xl font-bold md:text-4xl">Why Choose Us?</h2>
          <p className="mt-4 text-slate-300">
            We supply reliable technology products and install business
            security systems with the care your workplace deserves.
          </p>
        </div>
      </div>
      <div className="mx-auto text-center max-w-6xl">
        

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {reasons.map((reason) => (
            <div
              key={reason}
              className="rounded-lg border align-middle border-slate-800 bg-slate-900 p-5 shadow-lg"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center mx-auto rounded-full bg-yellow-600 font-bold text-slate-950">
                ✓
              </div>
              <h3 className="text-lg font-semibold">{reason}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
