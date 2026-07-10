import Image from "next/image";
import Link from "next/link";
 
 const HeroSection = () => {
   return (
     <div>
          <div className="relative h-[500px] w-full overflow-hidden">
  {/* Background Image */}
  <Image
    src="/cctv.jpg"
    alt="Emart Store"
    fill
    priority
    sizes="100vw"
    className="object-cover"
  />

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/50"></div>

  {/* Text Content */}
  <div className="absolute inset-0 flex items-center justify-center text-center text-white">
    <div>
      <h1 className="text-5xl font-bold mb-4">
        Welcome to jordan Cart 
      </h1>

      <h2 className="text-4xl font-semibold mb-4">
         Your One-Stop Tech Store
      </h2>

      <p className="text-xl mb-6">
        Smart Technology Solutions for Every Business
      </p>

      <Link
        href="/products"
        className="inline-block rounded-lg bg-yellow-600 px-6 py-3 font-semibold hover:bg-yellow-800 cursor-pointer"
      >
        Explore Products
      </Link>
    </div>
  </div>
</div>
     </div>
   )
 }
 
 export default HeroSection
 
