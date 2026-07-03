import React, { useLayoutEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CONNECT_BG = "#16273f";
const LINKS_BG = "#0c1a30";
const GOLD = "white";

/* Social Icons */
function XIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function FacebookIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M13.5 21v-8.06h2.7l.4-3.13h-3.1V7.8c0-.9.25-1.52 1.55-1.52h1.66V3.48c-.29-.04-1.27-.12-2.41-.12-2.39 0-4.02 1.46-4.02 4.13v2.3H7.6v3.13h2.68V21z" />
    </svg>
  );
}

function YoutubeIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M21.58 7.19a2.51 2.51 0 0 0-1.77-1.78C18.25 5 12 5 12 5s-6.25 0-7.81.41a2.51 2.51 0 0 0-1.77 1.78A26.3 26.3 0 0 0 2 12a26.3 26.3 0 0 0 .42 4.81 2.51 2.51 0 0 0 1.77 1.78C5.75 19 12 19 12 19s6.25 0 7.81-.41a2.51 2.51 0 0 0 1.77-1.78A26.3 26.3 0 0 0 22 12a26.3 26.3 0 0 0-.42-4.81zM10 15.5v-7l6 3.5z" />
    </svg>
  );
}

function InstagramIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      {...props}
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

/* Navigation (same as Navbar) */
const navLinks = [
  { name: "About", id: "about" },
  { name: "Services", id: "services" },
 
  { name: "Team", id: "team" },
  { name: "Reviews", id: "reviews" },
];

/* Company Services */
const serviceLinks = [
  "Hotel & Resort Operations",
  "Pre-opening Services",
  "Revenue Management",
  "Staff Training & SOP Development",
  "Restaurant & Bar Management",
  "Hospitality Consulting",
];

function Footer() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const footerRef = useRef(null);
  const ctaTextRef = useRef(null);
  const ctaButtonRef = useRef(null);
  const aboutRef = useRef(null);
  const navColRef = useRef(null);
  const servicesColRef = useRef(null);
  const contactColRef = useRef(null);
  const bottomBarRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Top CTA: simple fade + slide up.
      const ctaTl = gsap.timeline({
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 80%",
          // play scrolling down into view, reverse scrolling back up
          toggleActions: "play reverse play reverse",
        },
        defaults: { ease: "power2.out", duration: 0.7 },
      });

      ctaTl
        .from(ctaTextRef.current, { y: 20, opacity: 0 })
        .from(ctaButtonRef.current, { y: 20, opacity: 0 }, "-=0.45");

      // Footer columns: staggered fade + slide up as a group.
      gsap.from(
        [aboutRef.current, navColRef.current, servicesColRef.current, contactColRef.current],
        {
          y: 20,
          opacity: 0,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: aboutRef.current,
            start: "top 85%",
            toggleActions: "play reverse play reverse",
          },
        }
      );

      // Bottom bar: fade in last.
      gsap.from(bottomBarRef.current, {
        y: 14,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: bottomBarRef.current,
          start: "top 95%",
          toggleActions: "play reverse play reverse",
        },
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer id="contact" ref={footerRef} className="w-full">
      {/* Top CTA */}
      <div
        style={{ backgroundColor: CONNECT_BG }}
        className="w-full"
      >
        <div className="max-w-7xl mx-auto px-5 lg:px-0 py-14 lg:py-16">
          <div className="flex flex-col lg:flex-row items-start justify-between gap-10">
            <div ref={ctaTextRef} className="max-w-2xl">
              <p
                style={{ color: GOLD }}
                className="text-base mb-3"
              >
                Let's Connect
              </p>

              <h2 className="text-white text-3xl  leading-relaxed font-normal">
                Helping hospitality businesses grow through operational
                excellence, strategic consulting, and exceptional guest
                experiences.
              </h2>
            </div>

            <button
              ref={ctaButtonRef}
              onClick={() => scrollToSection("contact")}
              className="flex items-center gap-4 group"
            >
              <span className="text-white text-xl">
                Get a Quote
              </span>

              <span className="w-12 h-12 rounded-full bg-white flex items-center justify-center group-hover:scale-105 transition">
                <ArrowUpRight
                  size={22}
                  style={{ color: LINKS_BG }}
                />
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div
        style={{ backgroundColor: LINKS_BG }}
        className="w-full"
      >
        <div className="max-w-7xl mx-auto px-5 lg:px-0">

          <div className="flex flex-col lg:flex-row justify-between gap-16 py-16">

            {/* Left Side */}
            <div ref={aboutRef} className="lg:w-1/3">
              <h2 className="text-white text-3xl font-semibold mb-6">
                Mauri Solution
              </h2>

              <p className="text-slate-400 leading-8">
                Mauri Solution provides professional hospitality
                management services for hotels, resorts, restaurants,
                and hospitality businesses. We help clients improve
                operations, maximize revenue, and deliver exceptional
                guest experiences.
              </p>
            </div>

            {/* Right Side */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">

              {/* Navigation */}
              <div ref={navColRef}>
                <h3 className="text-white text-xl mb-6">
                  Navigation
                </h3>

                <div className="flex flex-col gap-3">
                  {navLinks.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className="text-left text-slate-400 hover:text-white transition"
                    >
                      {item.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Services */}
              <div ref={servicesColRef}>
                <h3 className="text-white text-xl mb-6">
                  Services
                </h3>

                <div className="flex flex-col gap-3">
                  {serviceLinks.map((service) => (
                    <p
                      key={service}
                      className="text-slate-400 text-sm leading-6"
                    >
                      {service}
                    </p>
                  ))}
                </div>
              </div>

              {/* Contact */}
              <div ref={contactColRef}>
                <h3 className="text-white text-xl mb-6">
                  Contact
                </h3>

                <div className="flex flex-col gap-4">
                  <p className="text-slate-400">
                    Kathmandu, Nepal
                  </p>

                  <a
                    href="mailto:info@maurisolution.com"
                    className="text-slate-400 hover:text-white transition"
                  >
                    info@maurisolution.com
                  </a>

                  <a
                    href="tel:+9779800000000"
                    className="text-slate-400 hover:text-white transition"
                  >
                    +977 9800000000
                  </a>

                  {/* <button
                    onClick={() => scrollToSection("contact")}
                    className="inline-flex items-center gap-2 text-white mt-2 hover:opacity-80 transition"
                  >
                    Contact us
                    <ArrowUpRight size={15} />
                  </button> */}
                </div>
              </div>

            </div>

          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10" />

          {/* Bottom Bar */}
<div className="border-t border-white/10" />

<div ref={bottomBarRef} className="flex flex-col lg:flex-row items-center justify-between gap-6 py-6">
  <div className="text-center lg:text-left">
    <p className="text-slate-500 text-sm">
      © {new Date().getFullYear()} Mauri Solution. All Rights Reserved.
    </p>

    <p className="text-slate-500 text-sm mt-2">
      Crafted by{" "}
      <a
        href="https://sait.com.np/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-slate-300 transition-colors"
      >
        S.A I.T Solution Nepal
      </a>
    </p>
  </div>

  <div className="flex items-center gap-5">
    <a
      href="#"
      className="text-slate-400 hover:text-white transition"
    >
      <XIcon width={16} height={16} />
    </a>

    <a
      href="#"
      className="text-slate-400 hover:text-white transition"
    >
      <FacebookIcon width={16} height={16} />
    </a>

    <a
      href="#"
      className="text-slate-400 hover:text-white transition"
    >
      <YoutubeIcon width={18} height={18} />
    </a>

    <a
      href="#"
      className="text-slate-400 hover:text-white transition"
    >
      <InstagramIcon width={17} height={17} />
    </a>
  </div>
</div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;