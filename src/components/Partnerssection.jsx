import React, { useLayoutEffect, useRef } from "react";
import {
  Hexagon,
  Zap,
  Box,
  AlignJustify,
  ToggleLeft,
  Globe,
  Shield,
  Target,
} from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const BG = "#efece5";
const TEXT_DARK = "#1a1a1a";

const partners = [
  { label: "Hotels", icon: Globe },
  { label: "Resorts", icon: Hexagon },
  { label: "Restaurants", icon: Box },
  { label: "Tourism Businesses", icon: Target },
  { label: "Hospitality Consulting", icon: Shield },
  { label: "Hotel Operations", icon: ToggleLeft },
  { label: "Pre-opening Services", icon: AlignJustify },
  { label: "Revenue Management", icon: Zap },
];

function PartnerCard({ label, icon: Icon }) {
  return (
    <div className="bg-white border border-neutral-200 h-40 w-[260px] flex-shrink-0 flex flex-col items-center justify-center transition-all duration-300 hover:shadow-lg">
      <div className="w-14 h-14 rounded-full border border-[#16273f] flex items-center justify-center mb-4">
        <Icon size={28} strokeWidth={1.8} className="text-[#16273f]" />
      </div>

      <h3 className="text-lg font-medium text-neutral-800 text-center px-4">
        {label}
      </h3>
    </div>
  );
}

export default function PartnersSection() {
  const sectionRef = useRef(null);
  const badgeRef = useRef(null);
  const headingRef = useRef(null);
  const marqueeWrapRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Badge + heading + marquee wrapper fade/slide in on scroll.
      // The marquee's own infinite loop (CSS) keeps running independently,
      // this just reveals the whole block.
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          // play scrolling down into view, reverse scrolling back up
          toggleActions: "play reverse play reverse",
        },
        defaults: { ease: "power2.out", duration: 0.7 },
      });

      tl.from(badgeRef.current, { y: 20, opacity: 0 })
        .from(headingRef.current, { y: 24, opacity: 0 }, "-=0.45")
        .from(marqueeWrapRef.current, { y: 20, opacity: 0 }, "-=0.4");
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{ backgroundColor: BG }}
      className="w-full overflow-hidden"
    >
      <div className="max-w-7xl mx-auto py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <span
          ref={badgeRef}
          style={{ color: TEXT_DARK, borderColor: "#c9c6bd" }}
          className="inline-block rounded-full border text-[10px] tracking-[0.14em] uppercase px-4 py-2 mb-6"
        >
          Trusted By
        </span>

        <h2
          ref={headingRef}
          style={{ color: TEXT_DARK }}
          className="text-3xl sm:text-4xl font-normal leading-tight max-w-3xl mb-12"
        >
          Trusted by hotels, resorts, restaurants, and tourism businesses
          across Nepal.
        </h2>

        {/* Marquee */}
        <div ref={marqueeWrapRef} className="relative overflow-hidden">
          <div className="marquee flex">
            {[...partners, ...partners].map((partner, index) => (
              <div key={index} className="mr-5">
                <PartnerCard {...partner} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .marquee {
          width: max-content;
          animation: marquee 28s linear infinite;
        }

        .marquee:hover {
          animation-play-state: paused;
        }

        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        @media (max-width: 768px) {
          .marquee {
            animation-duration: 20s;
          }
        }
      `}</style>
    </section>
  );
}