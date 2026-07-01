import React, { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const NAVY = "#0c1a30";

const testimonials = [
  {
    quote:
      "Partnering with Helder is the catalyst our company needed. Their strategic approach to financial consultancy has been instrumental in navigating market challenges. The expertise, reliability, and genuine care exhibited by their team create a partnership that goes beyond traditional consulting.",
    name: "Devon Lane",
    location: "New York, USA",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=500&q=80",
  },
  {
    quote:
      "Working with Helder gave us clarity we didn't have before. Their team took the time to understand our business and delivered recommendations that actually moved the needle on our bottom line.",
    name: "Courtney Henry",
    location: "London, UK",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=500&q=80",
  },
  {
    quote:
      "The level of insight and responsiveness from the Helder team has been outstanding. They've become a true extension of our leadership team, not just an outside consultancy.",
    name: "Robert Fox",
    location: "Toronto, Canada",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80",
  },
];

function TestimonialsSection() {
  const [index, setIndex] = useState(0);
  const current = testimonials[index];

  const prev = () =>
    setIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1));
  const next = () =>
    setIndex((i) => (i === testimonials.length - 1 ? 0 : i + 1));

  return (
    <section style={{ backgroundColor: NAVY }} className="w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-0 py-14 lg:py-20">
        <span className="inline-block rounded-full border border-slate-500/60 text-slate-100 text-[10px] tracking-[0.14em] uppercase px-4 py-2 mb-4">
          Testimonials
        </span>

        <h2 className="text-white font-normal  text-2xl sm:text-3xl">
          Clients Review
        </h2>

        <div className="border-t border-white/10 mt-6 mb-10" />

        <div className="grid grid-cols-1 sm:grid-cols-[1fr_1.6fr] gap-8 sm:gap-12 items-start">
          <div className=" overflow-hidden aspect-[4/5.8] max-w-xs bg-[#f1ede4]">
            <img
              src={current.image}
              alt={current.name}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="pt-12">
            <p className="text-slate-400 text-lg sm:text-2xl leading-relaxed">
              &ldquo;{current.quote}&rdquo;
            </p>

            <p className="text-white text-sm font-medium mt-6">
              {current.name}
            </p>
            <p className="text-slate-400 text-sm">{current.location}</p>

            <div className="flex items-center gap-3 mt-8">
              <button
                onClick={prev}
                aria-label="Previous testimonial"
                className="w-9 h-9 rounded-full border border-white/25 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
              >
                <ArrowLeft size={16} strokeWidth={2} />
              </button>
              <button
                onClick={next}
                aria-label="Next testimonial"
                className="w-9 h-9 rounded-full border border-white/25 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
              >
                <ArrowRight size={16} strokeWidth={2} />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12" />
      </div>
    </section>
  );
}

export default TestimonialsSection;