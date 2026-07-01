import React from "react";
import { ArrowUpRight } from "lucide-react";

const BG = "#edebe7";
const TEXT_DARK = "#1a1a1a";

const team = [
  {
    name: "Jacob Jones",
    role: "Founder & CEO",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Esther Howards",
    role: "Legal Advisor",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Robert Fox",
    role: "Finance Manager",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Jerome Bell",
    role: "Technology Lead",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
  },
];

function TeamCard({ name, role, image }) {
  return (
    <div className="relative overflow-hidden aspect-[3/4] group">
      <img
        src={image}
        alt={name}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-transparent" />
      <div className="absolute bottom-0 left-0 p-4 sm:p-5">
        <p className="text-white text-lg font-medium leading-tight">{name}</p>
        <p className="text-slate-200 text-sm mt-0.5">{role}</p>
      </div>
    </div>
  );
}

function Team() {
  return (
    <section style={{ backgroundColor: BG }} className="w-full">
      <div className="max-w-7xl mx-auto py-14 lg:py-20 px-4 sm:px-0">
        <div className="flex items-start sm:items-center justify-between mb-8">
          <div>
            <span
              style={{ color: TEXT_DARK, borderColor: "#c9c6bd" }}
              className="inline-block rounded-full border text-xs  uppercase px-2 py-1 mb-4"
            >
              Members
            </span>
            <h2
              style={{ color: TEXT_DARK }}
              className="font-normal text-xl sm:text-2xl"
            >
              Meet Our Consultants
            </h2>
          </div>

          {/* <a
            href="#"
            style={{ color: TEXT_DARK }}
            className="hidden sm:inline-flex items-center gap-1.5 text-sm font-medium hover:opacity-70 transition-opacity shrink-0"
          >
            View All
            <ArrowUpRight size={16} strokeWidth={2.25} />
          </a> */}
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {team.map((member) => (
            <TeamCard key={member.name} {...member} />
          ))}
        </div>

        {/* <a
          href="#"
          style={{ color: TEXT_DARK }}
          className="sm:hidden inline-flex items-center gap-1.5 text-sm font-medium mt-6 hover:opacity-70 transition-opacity"
        >
          View All
          <ArrowUpRight size={16} strokeWidth={2.25} />
        </a> */}
      </div>
    </section>
  );
}

export default Team;