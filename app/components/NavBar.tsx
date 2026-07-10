"use client";

import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX, FiSearch } from "react-icons/fi";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="navbar sticky top-0 z-50 bg-slate-900 shadow-md px-4">

      {/* Logo */}
      <div className="flex-1">
        <Link href="/" className="text-white text-xl font-bold">
          Jordan Cart
        </Link>
      </div>


      {/* Desktop Links */}
      <div className="hidden md:flex flex-1 justify-center gap-6">
        <Link href="/" className="text-white hover:underline hover:text-yellow-500">
          Home
        </Link>

        <Link href="/products" className="text-white hover:underline hover:text-yellow-500">
          Products
        </Link>

        <Link href="/#about" className="text-white hover:underline hover:text-yellow-500">
          About
        </Link>

        <Link href="/#contact" className="text-white hover:underline hover:text-yellow-500">
          Contact
        </Link>
      </div>


      {/* Search Bar */}
      <div className="hidden sm:flex flex-1 justify-end">
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="input input-bordered w-32 md:w-48 text-slate-950 pr-10"
          />

          <button className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500">
            <FiSearch size={18}/>
          </button>
        </div>
      </div>


      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-white text-2xl"
        onClick={() => setOpen(!open)}
      >
        {open ? <FiX /> : <FiMenu />}
      </button>


      {/* Mobile Menu */}
      {open && (
        <div className="absolute top-full left-0 w-full bg-slate-900 flex flex-col items-center gap-4 py-5 md:hidden">

          <Link href="/" className="text-white">
            Home
          </Link>

          <Link href="/products" className="text-white">
            Products
          </Link>

          <Link href="/#about" className="text-white">
            About
          </Link>

          <Link href="/#contact" className="text-white">
            Contact
          </Link>

          {/* Mobile Search */}
          <input
            type="text"
            placeholder="Search..."
            className="input input-bordered w-3/4 text-slate-950"
          />

        </div>
      )}

    </div>
  );
}