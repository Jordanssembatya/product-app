import Image from "next/image";

const securityFeatures = [
  "PIN Access",
  "Fingerprint Authentication",
  "CCTV Monitoring",
  "Smart Door Locks",
];

const SecuritySolutions = () => {
  return (
    <section className="bg-slate-900 px-6 py-20 text-white">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2 md:items-center">
        <div className="overflow-hidden rounded-lg">
          <Image
            src="/security.jpg"
            alt="Security installation"
            width={900}
            height={650}
            className="h-full min-h-80 w-full object-cover"
          />
        </div>

        <div>
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-yellow-500">
            Security Solutions
          </p>
          <h2 className="text-3xl font-bold md:text-4xl">
            Secure Your Workplace
          </h2>
          <p className="mt-4 text-slate-300">
            Control who enters your office and monitor important areas with
            reliable installation support from eMart.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {securityFeatures.map((feature) => (
              <div
                key={feature}
                className="rounded-lg border border-slate-700 bg-slate-950 p-4 font-semibold"
              >
                {feature}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecuritySolutions;
