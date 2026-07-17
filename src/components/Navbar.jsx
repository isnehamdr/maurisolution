import React, { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { gsap } from "gsap";

const navLinks = [
  { name: "About", id: "about" },
  { name: "Services", id: "services" },
  { name: "Team", id: "team" },
  { name: "Reviews", id: "reviews" },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const headerRef = useRef(null);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setOpen(false);
  };

  // Scroll direction detection: scrolling down hides the bar,
  // scrolling up (or near the top) shows it again.
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= 20) {
        setShowNavbar(true);
      } else if (currentScrollY > lastScrollY) {
        // Scrolling Down
        setShowNavbar(false);
      } else {
        // Scrolling Up
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // GSAP drives the actual slide animation. Same tween runs forward
  // (yPercent 0) when showNavbar is true and reverses (yPercent -100)
  // when false, so scroll-down and scroll-up both animate smoothly.
  useEffect(() => {
    gsap.to(headerRef.current, {
      yPercent: showNavbar ? 0 : -100,
      duration: 0.5,
      ease: "power2.out",
      overwrite: "auto",
    });
  }, [showNavbar]);

  return (
    <>
      {/* Prevent content from hiding behind fixed navbar */}
      <div className="h-16"></div>

      <header
        ref={headerRef}
        className="fixed top-0 left-0 w-full z-50 bg-[#16273f] border border-gray-50/5"
      >
        <div className="max-w-7xl mx-auto px-4 lg:px-0">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            {/* <button
              onClick={() => scrollToSection("home")}
              className="text-white text-2xl font-semibold flex-shrink-0 cursor-pointer"
            >
              Mauri Solution
            </button> */}
          <button
  onClick={() => scrollToSection("home")}
  className="flex-shrink-0 cursor-pointer flex items-center"
>
  <img
    src="/image/maurilogo.png"
    alt="Mauri Solution Logo"
    className="h-16 lg:h-20 w-auto object-cover invert brightness-0 sm:mt-2"
  />
</button>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              <nav className="flex items-center gap-8">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className="text-xs tracking-[0.12em] uppercase text-slate-200 hover:text-white transition-colors cursor-pointer"
                  >
                    {link.name}
                  </button>
                ))}
              </nav>

              <button
                onClick={() => scrollToSection("contact")}
                className="inline-flex items-center rounded-full border border-slate-500/60 text-white text-xs tracking-wide uppercase px-5 py-2.5 hover:bg-white hover:text-[#0c1a30] transition-colors cursor-pointer"
              >
                Contact us
              </button>
            </div>

            {/* Mobile Toggle */}
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
            <div className="lg:hidden px-4 pb-6 pt-2 flex flex-col gap-4 bg-[#16273f]">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-left text-xs tracking-[0.12em] uppercase text-slate-200 hover:text-white transition-colors"
                >
                  {link.name}
                </button>
              ))}

              <button
                onClick={() => scrollToSection("contact")}
                className="mt-2 inline-flex w-fit items-center rounded-full border border-slate-400 text-white text-xs tracking-wide uppercase px-5 py-2.5 hover:bg-white hover:text-[#0c1a30] transition-colors"
              >
                Contact us
              </button>
            </div>
          )}
        </div>
      </header>
    </>
  );
}

export default Navbar;