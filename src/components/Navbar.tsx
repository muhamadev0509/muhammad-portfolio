"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-gray-900 shadow-md" : "bg-transparent"}`}>
      <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center text-white">
        <h1 className="text-xl font-bold tracking-wide">Muhammad Amir</h1>
        <div className="space-x-6 text-sm font-medium">
          <Link href="#about" className="hover:text-indigo-400">About</Link>
          <Link href="#experience" className="hover:text-indigo-400">Experience</Link>
          <Link href="#skills" className="hover:text-indigo-400">Skills</Link>
          <Link href="#projects" className="hover:text-indigo-400">Projects</Link>
          <Link href="#testimonials" className="hover:text-indigo-400">Testimonials</Link>
          <Link href="#contact" className="hover:text-indigo-400">Contact</Link>
        </div>
      </div>
    </nav>
  );
}