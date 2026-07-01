import React from "react";
import { ArrowUpRight } from "lucide-react";

const BG = "#edebe7";
const TEXT_DARK = "black";

function WhoWeAre() {
  return (
    <section style={{ backgroundColor: BG }} className="w-full px-4">
      <div className="max-w-7xl mx-auto py-14 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left column - image */}
          <div className=" overflow-hidden aspect-[4/3.3] lg:aspect-[4/3.6]">
            <img
              src="image/about.jpg"
              alt="Team of business professionals reviewing documents together in a meeting"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right column - content */}
          <div>
            <span
              style={{ color: TEXT_DARK, borderColor: "#c9c6bd" }}
              className="inline-block rounded-full border text-[10px] tracking-[0.14em] uppercase px-4 py-2 mb-6"
            >
              Who we are
            </span>

            <h2
              style={{ color: TEXT_DARK }}
              className="font-normal leading-[1.12] text-3xl sm:text-4xl  "
            >
              A journey of strategic brilliance
            </h2>

            <div className="mt-6 space-y-4 max-w-xl">
              <p className="text-[15px] leading-relaxed text-neutral-600">
                Founded on a shared passion for driving success, we are a
                dynamic team of professionals committed to empowering
                businesses and individuals to thrive in an ever-evolving
                world.
              </p>
              <p className="text-[15px] leading-relaxed text-neutral-600">
                We are more than advisors; we are partners in your journey.
                Our dedicated team of four experts brings a wealth of
                knowledge to every project.
              </p>
            </div>

            <a
              href="#"
              
              className="inline-flex items-center gap-1.5 text-sm font-normal text-neutral-600 mt-8 mb-4 hover:opacity-70 transition-opacity"
            >
              More About us
              <ArrowUpRight size={16} strokeWidth={2.25} />
            </a>

            <div className="border-t border-neutral-300 mt-10 pt-8 grid grid-cols-2 gap-8 max-w-xl">
              <div>
                <p
                  style={{ color: TEXT_DARK }}
                  className="text-4xl sm:text-6xl font-normal tracking-[1.5]px"
                >
                  24+
                </p>
                <p className="text-sm text-neutral-600 mt-2">
                  Years of collective experience
                </p>
              </div>
              <div>
                <p
                  style={{ color: TEXT_DARK }}
                  className="text-4xl sm:text-6xl font-normal tracking-[1.5]px"
                >
                  95%
                </p>
                <p className="text-sm text-neutral-600 mt-2">
                  Remarkable client satisfaction rate
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhoWeAre;