import React from "react";
import { Scale, Percent, TrendingUp, FileText, ArrowUpRight } from "lucide-react";

const NAVY = "#16273f";

const services = [
  {
    icon: Scale,
    title: "Risk Mitigation",
    description: "The complexities of financial risk management.",
  },
  {
    icon: Percent,
    title: "Tax Planning",
    description: "Tax landscapes with strategic tax optimization.",
  },
  {
    icon: TrendingUp,
    title: "Financial Forecasting",
    description: "Develop accurate financial forecasts and budgets.",
  },
  {
    icon: FileText,
    title: "Acquisitions Advisory",
    description: "Consultants assist in navigating the complexities.",
  },
];

function ServiceRow({ icon: Icon, title, description, isLast }) {
  return (
    <div className={`py-4 sm:py-6 md:py-7 mt-2 sm:mt-6 ${!isLast ? "border-b border-white/10" : ""}`}>
      <div className="grid grid-cols-1 sm:grid-cols-[1fr_1.6fr] gap-3 sm:gap-6 md:gap-18 items-start">
        <div className="flex items-center gap-3 sm:gap-4">
          <Icon size={24} strokeWidth={1.05} className="text-white/80 shrink-0 sm:size-[32px]" />
          <h3 className="text-white text-base sm:text-lg font-normal">{title}</h3>
        </div>
        <p className="text-slate-300 text-sm sm:text-md leading-relaxed sm:pl-2 max-w-full sm:max-w-xs">
          {description}
        </p>
      </div>
    </div>
  );
}

function Service() {
  return (
    <section style={{ backgroundColor: NAVY }} className="w-full px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto py-10 sm:py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.7fr] gap-8 sm:gap-10 lg:gap-16">
          {/* Left column */}
          <div>
            <span className="inline-block rounded-full border border-slate-500/60 text-slate-100 text-[10px] tracking-[0.14em] uppercase px-3 sm:px-4 py-1.5 sm:py-2 mb-3">
              What we do
            </span>

            <h2 className="text-white font-normal text-2xl sm:text-3xl lg:text-4xl">
              Our Services
            </h2>

            <p className="text-slate-300 text-sm sm:text-md mt-4 sm:mt-6 lg:mt-8 max-w-full sm:max-w-sm">
              Our range of services is crafted to deliver strategic insights,
              and foster sustainable growth for businesses across various
              industries.
            </p>

            {/* Uncomment if needed
            <a
              href="#"
              className="inline-flex items-center gap-1.5 text-white text-sm font-medium mt-6 sm:mt-10 lg:mt-24 hover:text-slate-300 transition-colors"
            >
              View All Services
              <ArrowUpRight size={16} strokeWidth={2.25} />
            </a>
            */}
          </div>

          {/* Right column - services list */}
          <div className="border-t border-white/10 lg:border-t-0 mt-8 sm:mt-12 lg:mt-18">
            {services.map((service, i) => (
              <ServiceRow
                key={service.title}
                icon={service.icon}
                title={service.title}
                description={service.description}
                isLast={i === services.length - 1}
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