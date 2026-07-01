import React from "react";
import { ArrowUpRight } from "lucide-react";

// Two distinct bands: a lighter "connect" band up top, a darker band
// underneath for the link columns + bottom bar.
const CONNECT_BG = "#16273f";
const LINKS_BG = "#0c1a30";
const GOLD = "white";

/* lucide-react dropped brand/logo icons (Facebook, Twitter, Instagram,
   Youtube, etc.) in recent versions, so these are small inline SVGs
   instead of a lucide import — keeps this component version-proof. */
function XIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}
function FacebookIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M13.5 21v-8.06h2.7l.4-3.13h-3.1V7.8c0-.9.25-1.52 1.55-1.52h1.66V3.48c-.29-.04-1.27-.12-2.41-.12-2.39 0-4.02 1.46-4.02 4.13v2.3H7.6v3.13h2.68V21z" />
    </svg>
  );
}
function YoutubeIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M21.58 7.19a2.51 2.51 0 0 0-1.77-1.78C18.25 5 12 5 12 5s-6.25 0-7.81.41a2.51 2.51 0 0 0-1.77 1.78A26.3 26.3 0 0 0 2 12a26.3 26.3 0 0 0 .42 4.81 2.51 2.51 0 0 0 1.77 1.78C5.75 19 12 19 12 19s6.25 0 7.81-.41a2.51 2.51 0 0 0 1.77-1.78A26.3 26.3 0 0 0 22 12a26.3 26.3 0 0 0-.42-4.81zM10 15.5v-7l6 3.5z" />
    </svg>
  );
}
function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

const navLinks = ["About us", "Services", "Case Study", "Blogs", "Team"];

const serviceLinks = [
  "Risk Mitigation",
  "Tax Planning",
  "Financial Forecasting",
  "Acquisitions Advisory",
  "Cash Flow Management",
  "Investment Strategies",
];

const companyLinks = ["FAQ", "Reviews", "Privacy Policy", "Terms & Conditions", "License"];

function Footer() {
  return (
    <footer className="w-full">
      {/* Band 1 — "Let's Connect" hero strip */}
      <div style={{ backgroundColor: CONNECT_BG }} className="w-full">
        <div className="max-w-7xl mx-auto px-5 sm:px-0 py-14 lg:py-16">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
            <div className="max-w-2xl">
              <p
                style={{ color: GOLD }}
                className="text-md font-normal tracking-wide mb-3"
              >
                Let&apos;s Connect
              </p>
              <h2 className="text-white text-xl sm:text-2xl lg:text-3xl font-normal">
                The comprehensive chronicle of financial insights, business
                tips, and strategic advice for every entrepreneur and investor
              </h2>
            </div>

            <a href="#" className="flex items-center gap-4 shrink-0 group">
              <span className="text-white text-sm sm:text-2xl font-medium">Get a Quote</span>
              <span className="w-11 h-11 rounded-full bg-white flex items-center justify-center group-hover:opacity-80 transition-opacity">
                <ArrowUpRight size={24} strokeWidth={2.25} style={{ color: LINKS_BG }} />
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Band 2 — link columns + bottom bar, visually distinct from band 1 */}
      <div style={{ backgroundColor: LINKS_BG }} className="w-full">
        <div className=" px-5 sm:px-24">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-6 py-12">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href="#"
                  style={{ color: GOLD }}
                  className="text-3xl font-normal hover:opacity-75 transition-opacity w-fit"
                >
                  {link}
                </a>
              ))}
            </div>

.l
            <div className="flex flex-col gap-3">
              {serviceLinks.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-slate-400 text-sm hover:text-slate-200 transition-colors w-fit"
                >
                  {link}
                </a>
              ))}
            </div>

            <div className="flex flex-col gap-3">
              {companyLinks.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-slate-400 text-sm hover:text-slate-200 transition-colors w-fit"
                >
                  {link}
                </a>
              ))}
            </div>

            <div className="flex flex-col gap-3">
              <p className="text-slate-400 text-sm leading-relaxed">
                4517 W. Story St. Grove,
                <br />
                Pennsylvania 6-7987
              </p>
              <a
                href="mailto:hello@example.com"
                className="text-slate-400 text-sm hover:text-slate-200 transition-colors w-fit"
              >
                hello@example.com
              </a>
              <a
                href="tel:2065551234"
                className="text-slate-400 text-sm hover:text-slate-200 transition-colors w-fit"
              >
                (206) 555-0118
              </a>
              <a
                href="#"
                style={{ color: GOLD }}
                className="inline-flex items-center gap-1.5 text-sm font-medium mt-2 hover:opacity-75 transition-opacity w-fit"
              >
                Contact us
                <ArrowUpRight size={14} strokeWidth={2.25} />
              </a>
            </div>
          </div>

          <div className="border-t border-white/10" />

          <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-4 py-6">
            <p className="text-slate-500 text-xs text-center sm:text-left">
              &copy; 2026 Helder. Designed by Giona. Powered by Webflow.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" aria-label="X" className="text-slate-400 hover:text-white transition-colors">
                <XIcon width={15} height={15} />
              </a>
              <a href="#" aria-label="Facebook" className="text-slate-400 hover:text-white transition-colors">
                <FacebookIcon width={15} height={15} />
              </a>
              <a href="#" aria-label="YouTube" className="text-slate-400 hover:text-white transition-colors">
                <YoutubeIcon width={17} height={17} />
              </a>
              <a href="#" aria-label="Instagram" className="text-slate-400 hover:text-white transition-colors">
                <InstagramIcon width={16} height={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;