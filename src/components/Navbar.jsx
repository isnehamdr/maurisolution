import React, { useState } from "react";
import { Menu, X } from "lucide-react";



const navLinks = ["About", "Services", "Blogs", "Team", "Reviews"];

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header  className="w-full relative z-30 bg-[#16273f] border border-gray-50/5">
        <div className="max-w-7xl mx-auto px-4 lg:px-0">
          <div className="flex items-center justify-between h-16">
            {/* Logo - Left Side */}
            <a href="#" className="text-white text-2xl font-semibold tracking-1.5px flex-shrink-0">
              Mauri Solution
            </a>

            {/* Desktop Navigation - Right Side */}
            <div className="hidden lg:flex items-center gap-8">
              <nav className="flex items-center gap-8">
                {navLinks.map((link) => (
                  <a
                    key={link}
                    href="#"
                    className="text-xs tracking-[0.12em] uppercase text-slate-200 hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                ))}
              </nav>
              
              <a
                href="#"
                className="inline-flex items-center rounded-full border border-slate-500/60 text-white text-xs tracking-wide uppercase px-5 py-2.5 hover:bg-white hover:text-[#0c1a30] transition-colors"
              >
                Contact us
              </a>
            </div>

            {/* Mobile toggle button - Right Side */}
            <button
              className="lg:hidden text-white p-1"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              {open ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {open && (
            <div
              className="lg:hidden px-4 pb-6 pt-2 flex flex-col gap-4 bg-[#16273f]"
            >
              {navLinks.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-xs tracking-[0.12em] uppercase text-slate-200 hover:text-white transition-colors"
                >
                  {link}
                </a>
              ))}
              <a
                href="#"
                className="mt-2 inline-flex w-fit items-center rounded-full border border-slate-400 text-white text-xs tracking-wide uppercase px-5 py-2.5 hover:bg-white hover:text-[#0c1a30] transition-colors"
              >
                Contact us
              </a>
            </div>
          )}
        </div>
      </header>
    </>
  );
}

export default Navbar;