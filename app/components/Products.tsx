const productCategories = [
  {
    title: "CCTV & Surveillance",
    description:
      "Security cameras and recording systems for homes, shops, and offices.",
    products: [
      {
        name: "4K Security Camera",
        detail: "Outdoor night vision CCTV camera",
        price: "$120",
      },
      {
        name: "DVR Recording System",
        detail: "Multi-channel video storage and playback",
        price: "$180",
      },
      {
        name: "Wireless IP Camera",
        detail: "Remote viewing for mobile and desktop",
        price: "$95",
      },
    ],
  },
  {
    title: "Access Control",
    description:
      "Smart entry systems that help control who enters your workplace.",
    products: [
      {
        name: "Smart Door Lock",
        detail: "PIN access system for office doors",
        price: "$250",
      },
      {
        name: "Fingerprint Reader",
        detail: "Biometric authentication device",
        price: "$160",
      },
      {
        name: "Access Control Kit",
        detail: "Reader, controller, power supply, and lock",
        price: "$320",
      },
    ],
  },
  {
    title: "Software Solutions",
    description:
      "Digital systems and support tools for better business operations.",
    products: [
      {
        name: "Business Management Software",
        detail: "Sales, customer, and daily operation tools",
        price: "$80",
      },
      {
        name: "Inventory System",
        detail: "Track stock, purchases, and product movement",
        price: "$110",
      },
      {
        name: "Website Starter Package",
        detail: "Business website setup and basic support",
        price: "$300",
      },
    ],
  },
  {
    title: "Computers & Accessories",
    description:
      "Essential devices and accessories for offices and workstations.",
    products: [
      {
        name: "Business Laptop",
        detail: "Reliable laptop for daily office work",
        price: "$450",
      },
      {
        name: "Wireless Keyboard & Mouse",
        detail: "Comfortable desktop accessory combo",
        price: "$35",
      },
      {
        name: "USB Storage Drive",
        detail: "Portable storage for files and backups",
        price: "$18",
      },
    ],
  },
  {
    title: "Office Supplies",
    description:
      "Everyday supplies and accessories for smooth workplace operations.",
    products: [
      {
        name: "Printer Papers & Accessories",
        detail: "Paper, ink, and small printer essentials",
        price: "$15",
      },
      {
        name: "Desk Organizer Set",
        detail: "Keep documents and tools within reach",
        price: "$22",
      },
      {
        name: "Network Cables",
        detail: "Ethernet cables for office connectivity",
        price: "$8",
      },
    ],
  },
];

const Products = () => {
  return (
    <section className="bg-slate-950 text-white">
      <div className="bg-white px-6 py-16">
        <div className="mx-auto max-w-6xl ">
          <p className="mb-3 text-xl font-semibold text-center uppercase tracking-[0.2em] text-yellow-500">
            eMart Product Catalog
          </p>
          <h1 className=" text-md font-bold text-center text-slate-900 md:text-5xl">
            Technology products and business solutions in one place.
          </h1>
          <p className="mt-5 text-center text-sm text-slate-900">
            Browse CCTV systems, access control devices, software services,
            computer accessories, and office supplies for your organization.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-10 grid gap-4 md:grid-cols-3">
          <div className="rounded-lg border border-slate-800 bg-slate-900 p-5 text-center">
            <p className="text-3xl font-bold text-yellow-500">5+</p>
            <p className="mt-2 text-slate-300">Product categories</p>
          </div>
          <div className="rounded-lg border border-slate-800 bg-slate-900 p-5 text-center">
            <p className="text-3xl font-bold text-yellow-500">15+</p>
            <p className="mt-2 text-slate-300">Featured items</p>
          </div>
          <div className="rounded-lg border border-slate-800 bg-slate-900 p-5 text-center">
            <p className="text-3xl font-bold text-yellow-500">24/7</p>
            <p className="mt-2 text-slate-300">Support availability</p>
          </div>
        </div>

        <div className="space-y-12">
          {productCategories.map((category) => (
            <div key={category.title}>
              <div className="mb-5 flex flex-col justify-between gap-3 md:flex-row md:items-end">
                <div>
                  <h2 className="text-2xl font-bold md:text-3xl">
                    {category.title}
                  </h2>
                  <p className="mt-2 max-w-2xl text-slate-300">
                    {category.description}
                  </p>
                </div>
                <button className="btn border-0 bg-yellow-600 text-slate-950 hover:bg-yellow-500">
                  Request Category Quote
                </button>
              </div>

              <div className="grid gap-5 md:grid-cols-3">
                {category.products.map((product) => (
                  <article
                    key={product.name}
                    className="rounded-lg border border-slate-800 bg-slate-900 p-5 shadow-lg"
                  >
                    <div className="mb-5 flex h-28 items-center justify-center rounded-lg bg-slate-950 px-4 text-center text-sm font-semibold uppercase tracking-[0.14em] text-yellow-500">
                      {category.title}
                    </div>
                    <h3 className="text-xl font-bold">{product.name}</h3>
                    <p className="mt-2 min-h-12 text-slate-300">
                      {product.detail}
                    </p>
                    <div className="mt-5 flex items-center justify-between gap-4">
                      <p className="text-2xl font-bold text-yellow-500">
                        {product.price}
                      </p>
                      <button className="btn btn-sm border-slate-700 bg-transparent text-white hover:bg-yellow-600 hover:text-slate-950">
                        View Details
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-lg bg-yellow-600 p-8 text-slate-950 md:p-10">
          <h2 className="text-3xl font-bold">Need a complete setup?</h2>
          <p className="mt-3 max-w-3xl text-lg">
            eMart can combine products, installation, software, and ongoing
            support into one practical business solution.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <button className="btn border-0 bg-slate-950 text-white hover:bg-slate-800">
              Contact Sales
            </button>
            <button className="btn border-slate-950 bg-transparent text-slate-950 hover:bg-slate-950 hover:text-white">
              Request Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
