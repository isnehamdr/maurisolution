import React, { useLayoutEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const NAVY = "#0c1a30";

const testimonials = [
  {
    quote:
      "Partnering with Mauri Solution has been one of the best decisions for our hospitality business. Their strategic guidance, operational expertise, and commitment to excellence have significantly improved our guest satisfaction and overall business performance.",
    name: "Sundar Shah",
    position: "Hotel Owner",
    location: "Kathmandu, Nepal",
  },
  {
    quote:
      "The Mauri Solution team understood our challenges from day one. Their staff training and operational consulting transformed our service quality and helped us achieve better customer reviews and stronger business growth.",
    name: "Anita Gurung",
    position: "Resort Manager",
    location: "Pokhara, Nepal",
  },
  {
    quote:
      "Their professionalism, industry knowledge, and practical recommendations helped us optimize revenue while maintaining exceptional guest experiences. Mauri Solution has become a trusted long-term partner for our business.",
    name: "Ramesh Thapa",
    position: "Restaurant Director",
    location: "Chitwan, Nepal",
  },
];

function TestimonialsSection() {
  const [index, setIndex] = useState(0);

  const current = testimonials[index];

  const prev = () =>
    setIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1));

  const next = () =>
    setIndex((i) => (i === testimonials.length - 1 ? 0 : i + 1));

  const sectionRef = useRef(null);
  const badgeRef = useRef(null);
  const headingRef = useRef(null);
  const quoteRef = useRef(null);
  const personRef = useRef(null);
  const navRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
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
        .from(quoteRef.current, { y: 22, opacity: 0 }, "-=0.4")
        .from(personRef.current, { y: 16, opacity: 0 }, "-=0.35")
        .from(navRef.current, { y: 14, opacity: 0 }, "-=0.3");
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="reviews"
      ref={sectionRef}
      style={{ backgroundColor: NAVY }}
      className="w-full"
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-0 py-16 lg:py-24">
        <div className="border-t border-white/10 mb-14" />

        <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-14 lg:gap-20">
          {/* Left Side */}
          <div>
            <span
              ref={badgeRef}
              className="inline-block rounded-full border border-slate-500/60 text-slate-100 text-[10px] tracking-[0.18em] uppercase px-4 py-2 mb-5"
            >
              Testimonials
            </span>

            <h2 ref={headingRef} className="text-white text-3xl md:text-4xl leading-tight font-normal">
              What Our
              <br />
              Clients Say
            </h2>
          </div>

          {/* Right Side */}
          <div>
            <blockquote
              ref={quoteRef}
              className="text-slate-300 text-xl md:text-2xl lg:text-3xl leading-relaxed"
            >
              “{current.quote}”
            </blockquote>

            <div ref={personRef} className="mt-10">
              <h3 className="text-white text-xl font-medium">
                {current.name}
              </h3>

              <p className="text-slate-400 mt-2">
                {current.position}
              </p>

              <p className="text-slate-500 text-sm mt-1">
                {current.location}
              </p>
            </div>

            {/* Navigation */}
            <div ref={navRef} className="flex items-center justify-between mt-12 flex-wrap gap-6">
              {/* Indicators */}
              <div className="flex gap-3">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIndex(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === index
                        ? "w-8 bg-white"
                        : "w-2 bg-white/30 hover:bg-white/60"
                    }`}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>

              {/* Arrows */}
              <div className="flex gap-3">
                <button
                  onClick={prev}
                  className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-[#0c1a30] transition-all duration-300"
                  aria-label="Previous testimonial"
                >
                  <ArrowLeft size={20} />
                </button>

                <button
                  onClick={next}
                  className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-[#0c1a30] transition-all duration-300"
                  aria-label="Next testimonial"
                >
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-16" />
      </div>
    </section>
  );
}

export default TestimonialsSection;