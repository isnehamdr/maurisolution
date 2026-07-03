import React, { useLayoutEffect, useRef } from "react";
import { ArrowUpRight, Check } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const BG = "#edebe7";
const TEXT_DARK = "#1a1a1a";

const achievements = [
  "Project Director & CEO of Gautam Buddha International Hotel",
  "Founder and hospitality consultant managing 30+ hotels, resorts, and restaurants",
  "Founder of Mauri Solution",
  "Specialist in hotel operations, pre-opening projects, and business turnaround strategies",
];

function Team() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const badgeRef = useRef(null);
  const headingRef = useRef(null);
  const roleRef = useRef(null);
  const bioRef = useRef(null);
  const listRef = useRef(null);
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
        .from(roleRef.current, { y: 18, opacity: 0 }, "-=0.45")
        .from(bioRef.current, { y: 20, opacity: 0 }, "-=0.4");

      // Achievement list: staggered fade + slide up as a group.
      const items = listRef.current.querySelectorAll("[data-achievement]");

      tl.from(
        items,
        {
          y: 14,
          opacity: 0,
          duration: 0.5,
          stagger: 0.1,
        },
        "-=0.35"
      ).from(linkRef.current, { y: 12, opacity: 0, duration: 0.5 }, "-=0.2");
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="team" ref={sectionRef} style={{ backgroundColor: BG }} className="w-full">
      <div className="max-w-7xl mx-auto pt-14 pb-12 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image */}
          <div ref={imageRef} className="overflow-hidden aspect-[4/5]">
            <img
              src="image/person.jpeg"
              alt="Dev Khadka"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <span
              ref={badgeRef}
              style={{ color: TEXT_DARK, borderColor: "#c9c6bd" }}
              className="inline-block rounded-full border text-[10px] tracking-[0.14em] uppercase px-4 py-2 mb-6"
            >
              Leadership
            </span>

            <h2
              ref={headingRef}
              style={{ color: TEXT_DARK }}
              className="text-3xl sm:text-4xl font-normal leading-tight"
            >
              Dev Khadka
            </h2>

            <p ref={roleRef} className="text-lg text-[#cda86a] mt-2 mb-6">
              Managing Director & CEO
            </p>

            <p ref={bioRef} className="text-[15px] leading-relaxed text-neutral-600 mb-8">
              With extensive experience in hospitality management and
              consulting, Dev Khadka has successfully led hotels, resorts,
              restaurants, and tourism businesses through operational
              excellence, strategic planning, and sustainable growth.
            </p>

            <div ref={listRef} className="space-y-4">
              {achievements.map((item) => (
                <div key={item} data-achievement className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0">
                    <Check
                      size={18}
                      className="text-[#cda86a]"
                      strokeWidth={2.5}
                    />
                  </div>

                  <p className="text-[15px] text-neutral-700 leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <a
              ref={linkRef}
              href="#contact"
              className="inline-flex items-center gap-2 mt-10 text-sm font-medium text-neutral-700 hover:text-black transition-colors"
            >
              Contact Us
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;