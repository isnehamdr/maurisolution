import React, { useState } from "react";
import { Menu, X, ArrowUpRight, ChevronRight } from "lucide-react";

const NAVY = "#16273f";
const NAVY_LIGHT = "#13233f";
const GOLD = "#cda86a";

function Hero() {
  return (
    <section className="w-full bg-[#16273f] min-h-screen flex items-center">
      <div className="pt-8 pb-14 lg:pt-16 lg:pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center">
          {/* Left column */}
          <div className="order-2 lg:order-1">
            <span className="inline-block rounded-full border border-slate-400/60 text-slate-100 text-[10px] tracking-[0.18em] uppercase px-3 sm:px-4 py-2 mb-4 sm:mb-5 mt-0 lg:mt-12">
              Catalyst for growth
            </span>

            <h1 className="text-white font-normal leading-[1.08] text-[2rem] sm:text-[2.5rem] md:text-5xl lg:text-[3.4rem] max-w-2xl mx-auto lg:mx-0">
              Empowering your business future
            </h1>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mt-4 sm:mt-6 max-w-xl mx-auto lg:mx-0">
              What sets us apart is our unwavering dedication to client success,
              fueled by a client-centric approach, transparent communication,
              and a relentless pursuit of innovation.
            </p>

            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mt-8 sm:mt-12 lg:mt-16">
              <a
                href="#"
                style={{ backgroundColor: GOLD }}
                className="inline-flex items-center gap-1.5 text-[#0c1a30] text-sm font-medium rounded-full px-5 sm:px-6 py-2.5 sm:py-3 hover:opacity-90 transition-opacity duration-300"
              >
                Contact us
                <ChevronRight size={16} strokeWidth={2.5} />
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-1.5 text-white text-sm font-medium px-1 py-2.5 sm:py-3 hover:text-[#cda86a] transition-colors duration-300 border-b-2 border-transparent hover:border-[#cda86a]"
              >
                Get in Touch
                <ArrowUpRight size={16} strokeWidth={2.5} />
              </a>
            </div>

            <div className="flex items-center gap-3 sm:gap-4 mt-12 sm:mt-24 md:mt-36 lg:mt-48">
              <div className="flex -space-x-3 flex-shrink-0">
                <img
                  src="https://i.pravatar.cc/64?img=12"
                  alt=""
                  style={{ borderColor: NAVY }}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2"
                />
                <img
                  src="https://i.pravatar.cc/64?img=32"
                  alt=""
                  style={{ borderColor: NAVY }}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2"
                />
                <div
                  style={{ backgroundColor: NAVY_LIGHT, borderColor: NAVY }}
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border-2 flex items-center justify-center text-white"
                >
                  <svg width="14" height="14" sm:width="16" sm:height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <line x1="3" y1="18" x2="21" y2="18" />
                  </svg>
                </div>
              </div>
              <p className="text-white text-xs sm:text-sm max-w-[180px] sm:max-w-[220px] leading-relaxed">
                We navigate your success journey with expertise and dedication.
              </p>
            </div>
          </div>

          {/* Right column - image */}
          <div className="order-1 lg:order-2 relative">
            <div className="overflow-hidden aspect-[4/4.4] max-h-[500px] lg:max-h-none">
              <img
                src="image/hero.jpg"
                alt="Two business professionals shaking hands in a meeting"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <p className="absolute -bottom-8 sm:-bottom-12 right-4 sm:right-8 lg:right-32 text-xs sm:text-sm text-white tracking-wide hidden sm:block whitespace-nowrap">
              Your Success, Our Commitment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;