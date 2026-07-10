const products = [
  {
    name: "4K Security Camera",
    category: "CCTV Camera",
    price: "$120",
  },
  {
    name: "PIN Access System",
    category: "Smart Door Lock",
    price: "$250",
  },
  {
    name: "Business Management Software",
    category: "Laptop Software",
    price: "$80",
  },
  {
    name: "Printer Papers & Accessories",
    category: "Office Supplies",
    price: "$15",
  },
];

const FeaturedProducts = () => {
  return (
    <section id="products" className="bg-white px-6 py-20 text-slate-950">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-yellow-700">
              Shop Technology
            </p>
            <h2 className="text-3xl font-bold md:text-4xl">
              Featured Products
            </h2>
          </div>
          <button className="btn border-0 bg-slate-900 text-white hover:bg-yellow-700">
            View All Products
          </button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <article
              key={product.name}
              className="rounded-lg border border-slate-200 bg-slate-50 p-6 shadow-sm"
            >
              <div className="mb-5 flex h-32 items-center justify-center rounded-lg bg-slate-900 text-center text-sm font-semibold uppercase tracking-[0.15em] text-yellow-500">
                {product.category}
              </div>
              <h3 className="min-h-14 text-lg font-bold">{product.name}</h3>
              <p className="mt-3 text-2xl font-bold text-yellow-700">
                {product.price}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
