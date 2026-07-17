import React, { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

// Import your WhatsApp image

const BacktoTop = () => {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 250);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed bottom-4 right-4 md:bottom-4 md:right-6 z-[9999] flex flex-col items-center gap-2">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/9779851043700" // Replace with your WhatsApp number
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group"
      >
        <div className="w-14 h-14 md:w-16 md:h-16 rounded-full  overflow-hidden">
          <img
            src={"image/whatsapp.png"} // Replace with your WhatsApp image path
            alt="WhatsApp"
            className="w-full h-full object-cover"
          />
        </div>
      </a>

      {/* Back To Top */}
      <button
        onClick={scrollToTop}
        aria-label="Back to top"
        className={`w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#16273F] opacity-50 text-white shadow-xl flex items-center justify-center transition-all duration-300 hover:bg-[#1e3557] hover:scale-110 ${
          showTop
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-5 pointer-events-none"
        }`}
      >
        <ChevronUp size={26} strokeWidth={2.5} />
      </button>
    </div>
  );
};

export default BacktoTop;