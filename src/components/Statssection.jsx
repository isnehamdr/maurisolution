import React from "react";
import { DollarSign, Check, Users } from "lucide-react";

const BG = "#efece5";
const TEXT_DARK = "#1a1a1a";

const stats = [
  {
    icon: DollarSign,
    value: "24+",
    description:
      "Years of collective experience in providing strategic consultancy services",
  },
  {
    icon: Check,
    value: "95%",
    description:
      "Client satisfaction rate, reflecting our commitment to exceeding expectations",
  },
  {
    icon: Users,
    value: "20+",
    description:
      "A dedicated team professionals, bringing diverse skills & expertise to innovative solutions",
  },
];

function StatsSection() {
  return (
    <section style={{ backgroundColor: BG }} className="w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-0 py-14 lg:py-20">
        <p
          style={{ color: TEXT_DARK }}
          className="text-[15px] sm:text-base leading-relaxed max-w-2xl"
        >
          At Helder, we don&apos;t just offer solutions; we craft
          collaborative roadmaps tailored to your unique needs, ensuring your
          business not only thrives in the present but also remains
          resilient in the face of future challenges.
        </p>

        <div className="grid grid-cols-3 gap-6 sm:gap-10 mt-14">
          {stats.map(({ icon: Icon }, i) => (
            <div key={i} className="flex justify-start">
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

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-10 mt-10">
          {stats.map((stat) => (
            <div key={stat.value}>
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