const CallToAction = () => {
  return (
    <section id="contact" className="bg-yellow-600 px-6 py-16 text-slate-950">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-3xl font-bold md:text-4xl">
            Ready to Upgrade Your Business?
          </h2>
          <p className="mt-3 max-w-2xl text-lg">
            Get reliable technology, security, and office solutions today.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <button className="btn border-0 bg-slate-950 text-white hover:bg-slate-800">
            Contact Us
          </button>
          <button className="btn border-slate-950 bg-transparent text-slate-950 hover:bg-slate-950 hover:text-white">
            Request Quote
          </button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
