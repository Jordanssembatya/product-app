const Footer = () => {
  return (
    <footer className="bg-slate-950 px-6 py-12 text-slate-300">
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-4">
        <div>
          <h3 className="mb-3 text-xl font-bold text-white">E-mart Store</h3>
          <p>
            Smart technology, security systems, software, and office supplies
            for growing businesses.
          </p>
        </div>

        <div>
          <h4 className="mb-3 font-semibold text-white">Quick Links</h4>
          <ul className="space-y-2">
            <li>Home</li>
            <li>Products</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h4 className="mb-3 font-semibold text-white">Services</h4>
          <ul className="space-y-2">
            <li>CCTV Installation</li>
            <li>Access Control</li>
            <li>Software Solutions</li>
            <li>IT Support</li>
          </ul>
        </div>

        <div>
          <h4 className="mb-3 font-semibold text-white">Contact</h4>
          <ul className="space-y-2">
            <li>info@emartsystems.com</li>
            <li>Located at Karobwa Towers</li>
            <li>+256 414 697 063</li>
            <li>
              <a href="https://www.google.com/maps/place/Karobwa+Towers/@0.313611,32.581111,17z/data=!3m1!4b1!4m6!3m5!1s0x177dbf7e9c8a2d9f:0x5c8e5e5e5e5e5e5e!8m2!3d0.313611!4d32.583299!16s%2Fg%2F11b6v6v6v6?entry=ttu" target="_blank" className="hover:underline">
                Get Directions
              </a>
              <a href="https://www.facebook.com/eMartSystems" target="_blank" className="hover:underline me-4">
                Facebook
              </a>
              <a href="https://www.instagram.com/eMartSystems" target="_blank" className="hover:underline me-4">
                Instagram
              </a>
              <a href="https://www.linkedin.com/company/eMartSystems" target="_blank" className="hover:underline">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
       <div className="border-t border-slate-700 mt-20">
    <div className="mx-auto max-w-7xl py-3 flex flex-col md:flex-row justify-between items-center">
      <p className="text-slate-400 text-center justify-center ms-5">© 2026 eMart Store</p>
      <p className="text-slate-400  justify-end">Designed by  <a href="https://jordan-i9h3.onrender.com" target="_blank" className=" hover:underline  me-5">Ssembatya Jordan</a> </p>
    </div>
  </div>
    </footer>
  );
};

export default Footer;
