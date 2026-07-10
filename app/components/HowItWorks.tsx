const steps = [
  "Contact Us",
  "Site Assessment",
  "Installation",
  "Support & Maintenance",
];

const HowItWorks = () => {
  return (
    <section className="bg-white px-6 py-20 text-slate-950">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-yellow-700">
            Our Process
          </p>
          <h2 className="text-3xl font-bold md:text-4xl">How It Works</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-4">
          {steps.map((step, index) => (
            <div key={step} className="relative rounded-lg bg-slate-100 p-6">
              <div className="mb-5 flex h-12 mx-auto w-12 items-center justify-center rounded-full bg-slate-900 text-lg font-bold text-yellow-500">
                {index + 1}
              </div>
              <h3 className="text-xl font-bold text-center">{step}</h3>
              {index < steps.length - 1 && (
                <span className="absolute -right-4 top-1/2 hidden text-3xl font-bold text-yellow-700 md:block">
                  →
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
