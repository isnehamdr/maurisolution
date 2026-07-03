import React, { useLayoutEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const BG = "#edebe7";
const TEXT_DARK = "#1a1a1a";

const tabs = [
  {
    label: "Innovation",
    content:
      "Innovation is woven into the fabric of our strategy. We recognize the dynamic nature of the hospitality landscape and are committed to staying at the forefront of industry trends. Our strategy involves embracing technological advancements, exploring innovative solutions.",
  },
  {
    label: "Client Approach",
    content:
      "Our client approach is built on listening first. We take the time to understand every goal and constraint before recommending a path forward, and we stay close throughout the engagement rather than disappearing after the first meeting.",
  },
  {
    label: "Integrity",
    content:
      "Integrity guides every recommendation we make. We hold ourselves to transparent communication and honest advice, even when it isn't the easiest thing to say, because trust is the foundation every long-term partnership is built on.",
  },
];

function Vision() {
  const [active, setActive] = useState(0);

  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const badgeRef = useRef(null);
  const headingRef = useRef(null);
  const introRef = useRef(null);
  const tabsRef = useRef(null);
  const contentRef = useRef(null);
  const linkRef = useRef(null);

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
          // play scrolling down into view, reverse scrolling back up
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
        .from(introRef.current, { y: 20, opacity: 0 }, "-=0.45")
        .from(tabsRef.current, { y: 16, opacity: 0 }, "-=0.4")
        .from(contentRef.current, { y: 16, opacity: 0 }, "-=0.35")
        .from(linkRef.current, { y: 12, opacity: 0 }, "-=0.3");
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} style={{ backgroundColor: BG }} className="w-full px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto py-10 sm:py-14 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-center">
          {/* Left column - image */}
          <div
            ref={imageRef}
            className="overflow-hidden aspect-[4/3.3] lg:aspect-[4/3.6] order-1 lg:order-none"
          >
            <img
              src="https://images.unsplash.com/photo-1573497491208-6b1acb260507?auto=format&fit=crop&w=1200&q=80"
              alt="Two business professionals discussing strategy by a window"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right column - content */}
          <div className="order-2 lg:order-none">
            <span
              ref={badgeRef}
              style={{ color: TEXT_DARK, borderColor: "#c9c6bd" }}
              className="inline-block rounded-full border text-[10px] tracking-[0.14em] uppercase px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6"
            >
              Our vision
            </span>

            <h2
              ref={headingRef}
              style={{ color: TEXT_DARK }}
              className="font-semibold leading-[1.12] text-2xl sm:text-3xl lg:text-[2.75rem] max-w-full lg:max-w-lg"
            >
              Building a legacy of excellence
            </h2>

            <p
              ref={introRef}
              className="text-sm sm:text-[15px] leading-relaxed text-neutral-600 mt-4 sm:mt-6 max-w-full lg:max-w-xl"
            >
              We are more than just Hospitality consultants; we are a
              dedicated team of experts driven by a shared vision of
              transforming challenges into opportunities.
            </p>

            {/* Tabs */}
            <div
              ref={tabsRef}
              className="mt-8 sm:mt-10 flex items-center gap-4 sm:gap-6 lg:gap-8 border-b border-neutral-300 overflow-x-auto pb-0.5"
            >
              {tabs.map((tab, i) => (
                <button
                  key={tab.label}
                  onClick={() => setActive(i)}
                  style={{ color: TEXT_DARK }}
                  className={`relative pb-3 sm:pb-4 text-sm sm:text-[15px] lg:text-base font-medium whitespace-nowrap transition-opacity ${
                    active === i ? "opacity-100" : "opacity-45 hover:opacity-70"
                  }`}
                >
                  {tab.label}
                  {active === i && (
                    <span
                      style={{ backgroundColor: TEXT_DARK }}
                      className="absolute bottom-0 left-0 w-full h-0.5 rounded-full"
                    />
                  )}
                </button>
              ))}
            </div>

            <p
              ref={contentRef}
              className="text-sm sm:text-[15px] leading-relaxed text-neutral-600 mt-5 sm:mt-7 max-w-full lg:max-w-xl"
            >
              {tabs[active].content}
            </p>

            <a
              ref={linkRef}
              href="#"
              style={{ color: TEXT_DARK }}
              className="inline-flex items-center gap-1.5 text-sm font-medium mt-6 sm:mt-8 hover:opacity-70 "
            >
              Contact us
              <ArrowUpRight size={16} strokeWidth={2.25} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Vision;