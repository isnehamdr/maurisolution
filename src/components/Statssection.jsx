import React, { useLayoutEffect, useRef } from "react";
import { Hotel, TrendingUp, Users } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const BG = "#efece5";
const TEXT_DARK = "#1a1a1a";

const stats = [
  {
    icon: Hotel,
    value: "30+",
    description:
      "Hotels, resorts, and restaurants successfully managed and consulted across Nepal.",
  },
  {
    icon: TrendingUp,
    value: "7+",
    description:
      "Professional hospitality services, including operations, consulting, revenue management, and pre-opening support.",
  },
  {
    icon: Users,
    value: "100%",
    description:
      "Commitment to delivering exceptional guest experiences and long-term business success.",
  },
];

function StatsSection() {
  const sectionRef = useRef(null);
  const introRef = useRef(null);
  const iconsRef = useRef(null);
  const statsRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          // play scrolling down into view, reverse scrolling back up
          toggleActions: "play reverse play reverse",
        },
        defaults: { ease: "power2.out", duration: 0.6 },
      });

      const icons = iconsRef.current.querySelectorAll("[data-icon]");
      const statItems = statsRef.current.querySelectorAll("[data-stat]");

      tl.from(introRef.current, { y: 20, opacity: 0 })
        .from(icons, { y: 16, opacity: 0, stagger: 0.1 }, "-=0.35")
        .from(statItems, { y: 20, opacity: 0, stagger: 0.12 }, "-=0.3");
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} style={{ backgroundColor: BG }} className="w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-0 pb-14 lg:py-20">
        <p
          ref={introRef}
          style={{ color: TEXT_DARK }}
          className="text-[15px] sm:text-base leading-relaxed max-w-2xl"
        >
          At Mauri Solution, we partner with hotels, resorts, restaurants,
          and tourism businesses to deliver operational excellence,
          strategic growth, and memorable guest experiences through
          professional hospitality management and consulting services.
        </p>

        {/* Icons */}
        <div ref={iconsRef} className="grid grid-cols-3 gap-6 sm:gap-10 mt-14">
          {stats.map(({ icon: Icon }, index) => (
            <div key={index} data-icon className="flex justify-start">
              <div
                style={{ borderColor: "#b9b6ac" }}
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border flex items-center justify-center"
              >
                <Icon
                  size={22}
                  strokeWidth={1.5}
                  style={{ color: TEXT_DARK }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="border-t border-neutral-300 mt-8" />

        {/* Stats */}
        <div ref={statsRef} className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-10 mt-10">
          {stats.map((stat) => (
            <div key={stat.value} data-stat>
              <p
                style={{ color: TEXT_DARK }}
                className="text-5xl sm:text-6xl font-semibold tracking-tight"
              >
                {stat.value}
              </p>

              <p className="text-[15px] leading-relaxed text-neutral-600 mt-3 max-w-xs">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StatsSection;