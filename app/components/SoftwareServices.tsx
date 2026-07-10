const services = [
  "Business Management Systems",
  "Website Development",
  "Inventory Systems",
  "Custom Software Solutions",
  "IT Support",
];

const SoftwareServices = () => {
  return (
    <section className="bg-slate-950 px-6 py-20 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-start">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-yellow-500">
              Software Services
            </p>
            <h2 className="text-3xl font-bold md:text-4xl">
              Software Solutions
            </h2>
            <p className="mt-4 text-slate-300">
              Beyond products, eMart builds and supports digital systems that
              help businesses run more efficiently.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {services.map((service) => (
              <div
                key={service}
                className="rounded-lg border border-slate-800 bg-slate-900 p-5"
              >
                <span className="text-yellow-500">•</span>{" "}
                <span className="font-semibold">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SoftwareServices;
