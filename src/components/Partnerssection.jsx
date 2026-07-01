import React, { useEffect, useRef } from "react";
import { Hexagon, Zap, Box, AlignJustify, ToggleLeft, Globe, Shield, Target, Award, Star, Users } from "lucide-react";

const BG = "#efece5";
const TEXT_DARK = "#1a1a1a";

const partners = [
  { label: "GlobalBank", icon: Hexagon },
  { label: "Boltshift", icon: Zap, filled: true },
  { label: "Lightbox", icon: Box },
  { label: "FeatherDev", icon: AlignJustify },
  { label: "CloudWatch", icon: ToggleLeft, filled: true },
  { label: "NexusCorp", icon: Globe },
  { label: "ShieldTech", icon: Shield, filled: true },
  { label: "TargetPro", icon: Target },
  { label: "ApexGroup", icon: Award, filled: true },
  { label: "StarLink", icon: Star },
  { label: "UnityHub", icon: Users, filled: true },
];

function PartnerCard({ label, icon: Icon, filled }) {
  return (
    <div className="bg-white p-4 sm:p-5 flex flex-col justify-between h-32 sm:h-36 lg:h-40 min-w-[140px] sm:min-w-[160px] lg:min-w-[280px]">
      <p className="text-neutral-400 text-[10px] sm:text-xs">{label}</p>
      <div className="flex items-center justify-center gap-2 flex-1">
        {filled ? (
          <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-neutral-400 flex items-center justify-center shrink-0">
            <Icon size={12} strokeWidth={2} className="text-white sm:size-[14px]" />
          </span>
        ) : (
          <Icon size={18} strokeWidth={1.75} className="text-neutral-400 shrink-0 sm:size-[22px]" />
        )}
        <span className="text-neutral-500 font-semibold text-sm sm:text-base lg:text-lg whitespace-nowrap">
          {label}
        </span>
      </div>
    </div>
  );
}

function PartnersSection() {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let animationId;
    let scrollSpeed = 1; // pixels per frame

    const scroll = () => {
      if (container) {
        // If we've scrolled past the first set, reset to create seamless loop
        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft = 0;
        } else {
          container.scrollLeft += scrollSpeed;
        }
        animationId = requestAnimationFrame(scroll);
      }
    };

    // Start scrolling
    animationId = requestAnimationFrame(scroll);

    // Pause on hover
    const pauseScroll = () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
        animationId = null;
      }
    };

    const resumeScroll = () => {
      if (!animationId) {
        animationId = requestAnimationFrame(scroll);
      }
    };

    container.addEventListener("mouseenter", pauseScroll);
    container.addEventListener("mouseleave", resumeScroll);
    container.addEventListener("touchstart", pauseScroll);
    container.addEventListener("touchend", resumeScroll);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
      container.removeEventListener("mouseenter", pauseScroll);
      container.removeEventListener("mouseleave", resumeScroll);
      container.removeEventListener("touchstart", pauseScroll);
      container.removeEventListener("touchend", resumeScroll);
    };
  }, []);

  // Duplicate partners for seamless scrolling
  const allPartners = [...partners, ...partners];

  return (
    <section style={{ backgroundColor: BG }} className="w-full overflow-hidden px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto py-12 sm:py-16 lg:py-24">
        <p
          style={{ color: TEXT_DARK }}
          className="text-lg sm:text-xl lg:text-2xl leading-snug max-w-full sm:max-w-md mb-8 sm:mb-10 lg:mb-12"
        >
          Discover the strength in our collaborations, where success is a
          shared accomplishment.
        </p>

        {/* Auto-scrolling container */}
        <div 
          ref={scrollContainerRef}
          className="overflow-x-auto overflow-y-hidden hide-scrollbar"
          style={{
            scrollBehavior: "auto",
            WebkitOverflowScrolling: "touch",
          }}
        >
          <div className="flex gap-4 sm:gap-5 w-max">
            {allPartners.map((partner, index) => (
              <PartnerCard key={`${partner.label}-${index}`} {...partner} />
            ))}
          </div>
        </div>

        {/* Scroll indicators (optional) */}
        <div className="flex justify-center gap-2 mt-6 sm:mt-8 lg:hidden">
          <div className="w-2 h-2 rounded-full bg-neutral-400/60"></div>
          <div className="w-2 h-2 rounded-full bg-neutral-400/20"></div>
          <div className="w-2 h-2 rounded-full bg-neutral-400/20"></div>
        </div>
      </div>

      <style jsx>{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}

export default PartnersSection;