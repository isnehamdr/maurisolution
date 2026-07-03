import React, { useLayoutEffect, useRef } from "react";
import { ArrowUpRight, ChevronRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const NAVY = "#16273f";
const NAVY_LIGHT = "#13233f";
const GOLD = "#cda86a";

function Hero() {
  const sectionRef = useRef(null);
  const badgeRef = useRef(null);
  const headingRef = useRef(null);
  const paraRef = useRef(null);
  const ctaRef = useRef(null);
  const trustRef = useRef(null);
  const imageRef = useRef(null);
  const captionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Simple fade + slide up timeline for the left column text stack.
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          // play: scrolling down into view
          // reverse: scrolling back up out of view
          toggleActions: "play reverse play reverse",
        },
        defaults: { ease: "power2.out", duration: 0.7 },
      });

      tl.from(badgeRef.current, { y: 20, opacity: 0 })
        .from(headingRef.current, { y: 24, opacity: 0 }, "-=0.45")
        .from(paraRef.current, { y: 20, opacity: 0 }, "-=0.45")
        .from(ctaRef.current, { y: 16, opacity: 0 }, "-=0.4")
        .from(trustRef.current, { y: 16, opacity: 0 }, "-=0.35");

      // Right column image: simple scale + fade, its own trigger so it
      // stays in sync with the same scroll position but animates independently.
      gsap.from(imageRef.current, {
        opacity: 0,
        scale: 1.05,
        duration: 0.9,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play reverse play reverse",
        },
      });

      gsap.from(captionRef.current, {
        opacity: 0,
        y: 12,
        duration: 0.7,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play reverse play reverse",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="w-full bg-[#16273f] min-h-screen flex items-center"
    >
      <div className="pt-8 pb-14 lg:pt-16 lg:pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            <span
              ref={badgeRef}
              className="inline-block rounded-full border border-slate-400/60 text-slate-100 text-[10px] tracking-[0.18em] uppercase px-3 sm:px-4 py-2 mb-4 sm:mb-5 mt-0 lg:mt-12"
            >
              Hospitality Management
            </span>

            <h1
              ref={headingRef}
              className="text-white font-normal leading-[1.08] text-[2rem] sm:text-[2.5rem] md:text-5xl lg:text-[3.4rem] max-w-2xl mx-auto lg:mx-0"
            >
              Elevating Hospitality with Excellence
            </h1>

            <p
              ref={paraRef}
              className="text-slate-300 text-base sm:text-lg leading-relaxed mt-4 sm:mt-6 max-w-xl mx-auto lg:mx-0"
            >
              We help hotels, resorts, restaurants, and tourism businesses
              achieve operational excellence through expert management,
              consulting, staff training, and revenue optimization.
            </p>

            <div
              ref={ctaRef}
              className="flex flex-wrap items-center gap-3 sm:gap-4 mt-8 sm:mt-12 lg:mt-16"
            >
              <a
                href="#services"
                style={{ backgroundColor: GOLD }}
                className="inline-flex items-center gap-1.5 text-[#0c1a30] text-sm font-medium rounded-full px-5 sm:px-6 py-2.5 sm:py-3 hover:opacity-90 transition-opacity duration-300"
              >
                Our Services
                <ChevronRight size={16} strokeWidth={2.5} />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 text-white text-sm font-medium px-1 py-2.5 sm:py-3 hover:text-[#cda86a] transition-colors duration-300 border-b-2 border-transparent hover:border-[#cda86a]"
              >
                Contact Us
                <ArrowUpRight size={16} strokeWidth={2.5} />
              </a>
            </div>

            {/* Bottom Info */}
            <div
              ref={trustRef}
              className="flex items-center gap-3 sm:gap-4 mt-12 sm:mt-24 md:mt-36 lg:mt-48"
            >
              <div className="flex -space-x-3 flex-shrink-0">
                <img
                  src="https://i.pravatar.cc/64?img=12"
                  alt=""
                  style={{ borderColor: NAVY }}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2"
                />

                <img
                  src="https://i.pravatar.cc/64?img=32"
                  alt=""
                  style={{ borderColor: NAVY }}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2"
                />

                <div
                  style={{
                    backgroundColor: NAVY_LIGHT,
                    borderColor: NAVY,
                  }}
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border-2 flex items-center justify-center text-white"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <line x1="3" y1="18" x2="21" y2="18" />
                  </svg>
                </div>
              </div>

              <p className="text-white text-xs sm:text-sm max-w-[220px] leading-relaxed">
                Trusted by hotels, resorts, restaurants, and tourism businesses
                across Nepal.
              </p>
            </div>
          </div>

          {/* Right Image */}
          <div className="order-1 lg:order-2 relative">
            <div
              ref={imageRef}
              className="overflow-hidden aspect-[4/4.4] max-h-[500px] lg:max-h-none"
            >
              <img
                src="image/hero.jpg"
                alt="Hospitality Management"
                className="w-full h-full object-cover object-center"
              />
            </div>

            <p
              ref={captionRef}
              className="absolute -bottom-8 sm:-bottom-12 right-4 sm:right-8 lg:right-32 text-xs sm:text-sm text-white tracking-wide hidden sm:block whitespace-nowrap"
            >
              Your Hospitality, Our Expertise.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;