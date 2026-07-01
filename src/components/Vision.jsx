import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";

const BG = "#edebe7";
const TEXT_DARK = "#1a1a1a";

const tabs = [
  {
    label: "Innovation",
    content:
      "Innovation is woven into the fabric of our strategy. We recognize the dynamic nature of the financial landscape and are committed to staying at the forefront of industry trends. Our strategy involves embracing technological advancements, exploring innovative solutions.",
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

  return (
    <section style={{ backgroundColor: BG }} className="w-full">
      <div className="max-w-7xl mx-auto  py-14 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left column - image */}
          <div className="overflow-hidden aspect-[4/3.3] lg:aspect-[4/3.6]">
            <img
              src="https://images.unsplash.com/photo-1573497491208-6b1acb260507?auto=format&fit=crop&w=1200&q=80"
              alt="Two business professionals discussing strategy by a window"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right column - content */}
          <div>
            <span
              style={{ color: TEXT_DARK, borderColor: "#c9c6bd" }}
              className="inline-block rounded-full border text-[10px] tracking-[0.14em] uppercase px-4 py-2 mb-6"
            >
              Our vision
            </span>

            <h2
              style={{ color: TEXT_DARK }}
              className="font-semibold leading-[1.12] text-3xl sm:text-4xl lg:text-[2.75rem] max-w-lg"
            >
              Building a legacy of excellence
            </h2>

            <p className="text-[15px] leading-relaxed text-neutral-600 mt-6 max-w-xl">
              We are more than just financial consultants; we are a
              dedicated team of experts driven by a shared vision of
              transforming challenges into opportunities.
            </p>

            {/* Tabs */}
            <div className="mt-10 flex items-center gap-6 sm:gap-8 border-b border-neutral-300 overflow-x-auto">
              {tabs.map((tab, i) => (
                <button
                  key={tab.label}
                  onClick={() => setActive(i)}
                  style={{ color: TEXT_DARK }}
                  className={`relative pb-4 text-[15px] sm:text-base font-medium whitespace-nowrap transition-opacity ${
                    active === i ? "opacity-100" : "opacity-45 hover:opacity-70"
                  }`}
                >
                  {tab.label}
                  {active === i && (
                    // <span
                    //   style={{ backgroundColor: TEXT_DARK }}
                    //   className="absolute left-0 -bottom-px h-[2px] w-full"
                    // />
                  )}
                </button>
              ))}
            </div>

            <p className="text-[15px] leading-relaxed text-neutral-600 mt-7 max-w-xl">
              {tabs[active].content}
            </p>

            <a
              href="#"
              style={{ color: TEXT_DARK }}
              className="inline-flex items-center gap-1.5 text-sm font-medium mt-8 hover:opacity-70 transition-opacity"
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