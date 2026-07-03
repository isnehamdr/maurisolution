import React, { useLayoutEffect, useRef } from "react";
import {
  Hotel,
  Building2,
  BarChart3,
  Users,
  UtensilsCrossed,
  Briefcase,
} from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const NAVY = "#16273f";

const services = [
  {
    icon: Hotel,
    title: "Hotel & Resort Operations",
    description:
      "We provide end-to-end operational management for hotels and resorts, ensuring exceptional guest experiences while maximizing efficiency and profitability.",
  },
  {
    icon: Building2,
    title: "Pre-opening Services",
    description:
      "From planning to launch, we assist hospitality businesses with pre-opening strategies, setup, staffing, and operational readiness for a successful opening.",
  },
  {
    icon: BarChart3,
    title: "Revenue Management",
    description:
      "Our revenue management solutions optimize pricing strategies, occupancy, and profitability through market analysis and demand forecasting.",
  },
  {
    icon: Users,
    title: "Staff Training & SOP Development",
    description:
      "We develop customized Standard Operating Procedures (SOPs) and deliver professional training programs that enhance team performance and service quality.",
  },
  {
    icon: UtensilsCrossed,
    title: "Restaurant & Bar Management",
    description:
      "Comprehensive management solutions for restaurants and bars, focusing on operational excellence, customer satisfaction, and sustainable growth.",
  },
  {
    icon: Briefcase,
    title: "Hospitality Consulting",
    description:
      "Expert consulting services designed to improve operational efficiency, business strategy, financial performance, and long-term success in the hospitality industry.",
  },
];

function ServiceRow({ icon: Icon, title, description, isLast }) {
  return (
    <div
      data-row
      className={`py-5 sm:py-6 lg:py-7 ${
        !isLast ? "border-b border-white/10" : ""
      }`}
    >
      <div className="grid grid-cols-1 sm:grid-cols-[1fr_1.6fr] gap-5 lg:gap-16 items-start">
        <div className="flex items-center gap-4">
          <Icon
            size={30}
            strokeWidth={1.5}
            className="text-white shrink-0"
          />

          <h3 className="text-white text-lg lg:text-xl font-normal">
            {title}
          </h3>
        </div>

        <p className="text-slate-300 text-sm lg:text-base leading-7 max-w-lg">
          {description}
        </p>
      </div>
    </div>
  );
}

function Service() {
  const sectionRef = useRef(null);
  const badgeRef = useRef(null);
  const headingRef = useRef(null);
  const paraRef = useRef(null);
  const rowsWrapRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Left column: simple staggered fade + slide up.
      const introTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          // play scrolling down into view, reverse scrolling back up
          toggleActions: "play reverse play reverse",
        },
        defaults: { ease: "power2.out", duration: 0.7 },
      });

      introTl
        .from(badgeRef.current, { y: 20, opacity: 0 })
        .from(headingRef.current, { y: 24, opacity: 0 }, "-=0.45")
        .from(paraRef.current, { y: 20, opacity: 0 }, "-=0.45");

      // Right column: each service row fades + slides up, staggered.
      const rows = rowsWrapRef.current.querySelectorAll("[data-row]");

      gsap.from(rows, {
        y: 20,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.12,
        scrollTrigger: {
          trigger: rowsWrapRef.current,
          start: "top 80%",
          toggleActions: "play reverse play reverse",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      style={{ backgroundColor: NAVY }}
      className="w-full px-5 lg:px-8"
    >
      <div className="max-w-7xl mx-auto py-14 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.8fr] gap-12 lg:gap-20">
          {/* Left Column */}
          <div>
            <span
              ref={badgeRef}
              className="inline-block rounded-full border border-slate-500/60 text-slate-100 text-[10px] tracking-[0.14em] uppercase px-4 py-2 mb-5"
            >
              What We Do
            </span>

            <h2 ref={headingRef} className="text-white text-3xl lg:text-4xl font-normal ">
              Hospitality
            
              Management
       
              Services
            </h2>

            <p
              ref={paraRef}
              className="text-slate-300 text-base sm:text-md leading-8  mt-5 max-w-xl"
            >
              We provide professional hospitality management solutions
              tailored for hotels, resorts, restaurants, and hospitality
              businesses. Our expertise helps improve operational
              efficiency, enhance guest satisfaction, and maximize
              long-term profitability.
            </p>
          </div>

          {/* Right Column */}
          <div ref={rowsWrapRef} className="border-t border-white/10 lg:border-t-0">
            {services.map((service, index) => (
              <ServiceRow
                key={service.title}
                icon={service.icon}
                title={service.title}
                description={service.description}
                isLast={index === services.length - 1}
              />
            ))}

            <div className="border-t border-white/10" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Service;