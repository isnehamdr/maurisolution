import React, { useLayoutEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const BG = "#edebe7";
const TEXT_DARK = "black";

function WhoWeAre() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const badgeRef = useRef(null);
  const headingRef = useRef(null);
  const textRef = useRef(null);
  const linkRef = useRef(null);
  const statsRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Image: simple fade + scale in.
      gsap.from(imageRef.current, {
        opacity: 0,
        scale: 1.05,
        duration: 0.9,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          // play on scroll down into view, reverse on scroll back up
          toggleActions: "play reverse play reverse",
        },
      });

      // Right column: one timeline, staggered fade + slide up.
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play reverse play reverse",
        },
        defaults: { ease: "power2.out", duration: 0.7 },
      });

      tl.from(badgeRef.current, { y: 20, opacity: 0 })
        .from(headingRef.current, { y: 24, opacity: 0 }, "-=0.45")
        .from(textRef.current, { y: 20, opacity: 0 }, "-=0.45")
        .from(linkRef.current, { y: 16, opacity: 0 }, "-=0.4")
        .from(statsRef.current, { y: 16, opacity: 0 }, "-=0.35");
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} style={{ backgroundColor: BG }} className="w-full px-4">
      <div className="max-w-7xl mx-auto py-14 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left column - image */}
          <div ref={imageRef} className="overflow-hidden aspect-[4/3.3] lg:aspect-[4/3.6]">
            <img
              src="image/about.jpg"
              alt="Mauri Solution Hospitality Management"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right column - content */}
          <div>
            <span
              ref={badgeRef}
              style={{ color: TEXT_DARK, borderColor: "#c9c6bd" }}
              className="inline-block rounded-full border text-[10px] tracking-[0.14em] uppercase px-4 py-2 mb-6"
            >
              About Us
            </span>

            <h2
              ref={headingRef}
              style={{ color: TEXT_DARK }}
              className="font-normal leading-[1.12] text-3xl sm:text-4xl"
            >
              Professional Hospitality Management & Consulting
            </h2>

            <div ref={textRef} className="mt-6 space-y-4 max-w-xl">
              <p className="text-[15px] leading-relaxed text-neutral-600">
                Mauri Solution is a professional hospitality management and
                consulting company specializing in hotels, resorts,
                restaurants, and tourism businesses. We help hospitality
                brands deliver exceptional guest experiences while improving
                operational efficiency and business performance.
              </p>

              <p className="text-[15px] leading-relaxed text-neutral-600">
                Our expertise includes complete operational support,
                strategic planning, revenue optimization, staff training,
                SOP development, and management solutions tailored to the
                unique needs of every hospitality business.
              </p>
            </div>

            <a
              ref={linkRef}
              href="#services"
              className="inline-flex items-center gap-1.5 text-sm font-normal text-neutral-600 mt-8 mb-4 hover:opacity-70 "
            >
              Explore Our Services
              <ArrowUpRight size={16} strokeWidth={2.25} />
            </a>

            <div
              ref={statsRef}
              className="border-t border-neutral-300 mt-10 pt-8 grid grid-cols-2 gap-8 max-w-xl"
            >
              <div>
                <p
                  style={{ color: TEXT_DARK }}
                  className="text-4xl sm:text-6xl font-normal tracking-[1.5px]"
                >
                  7+
                </p>
                <p className="text-sm text-neutral-600 mt-2">
                  Hospitality management services
                </p>
              </div>

              <div>
                <p
                  style={{ color: TEXT_DARK }}
                  className="text-4xl sm:text-6xl font-normal tracking-[1.5px]"
                >
                  100%
                </p>
                <p className="text-sm text-neutral-600 mt-2">
                  Dedicated to client success
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhoWeAre;