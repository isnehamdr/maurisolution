import React from "react";
import { ArrowUpRight } from "lucide-react";

const BG = "#efece5";
const TEXT_DARK = "#1a1a1a";

const articles = [
  {
    date: "Jan 29, 2024",
    category: "Expert Insights Series",
    title: "Understanding cryptocurrency a guide for businesses",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=700&q=80",
  },
  {
    date: "Jan 29, 2024",
    category: "Financial Growth Strategies",
    title: "Building a resilient business risk mitigation tactics",
    image:
      "https://images.unsplash.com/photo-1560264280-88b68371db39?auto=format&fit=crop&w=700&q=80",
  },
];

function ArticleCard({ date, category, title, image }) {
  return (
    <div className="bg-white rounded-xl p-4 sm:p-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
        <div className="relative overflow-hidden aspect-[3.3/3.5] ">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
          <span
            style={{ color: TEXT_DARK }}
            className="absolute top-3 left-3 bg-white text-xs font-medium px-3 py-1.5 rounded"
          >
            {date}
          </span>
        </div>

        <div className="flex flex-col justify-center py-2 sm:py-4">
          <p className="text-neutral-500 text-md">{category}</p>
          <h3
            style={{ color: TEXT_DARK }}
            className="text-xl sm:text-2xl font-normal mt-2 "
          >
            {title}
          </h3>
          {/* <a
            href="#"
            style={{ color: TEXT_DARK }}
            className="inline-flex items-center gap-1.5 text-sm font-medium mt-6 sm:mt-8 hover:opacity-70 transition-opacity w-fit"
          >
            Read More
            <ArrowUpRight size={15} strokeWidth={2.25} />
          </a> */}
        </div>
      </div>
    </div>
  );
}

function ArticlesSection() {
  return (
    <section style={{ backgroundColor: BG }} className="w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-0 py-14 lg:py-20">
        <div className="flex items-start sm:items-center justify-between mb-8">
          <div>
            <span
              style={{ color: TEXT_DARK, borderColor: "#c9c6bd" }}
              className="inline-block rounded-full border text-[10px] tracking-[0.14em] uppercase px-2 py-1 mb-4"
            >
              News
            </span>
            <h2
              style={{ color: TEXT_DARK }}
              className="font-normal  text-3xl "
            >
              Latest Articles
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {articles.map((article) => (
            <ArticleCard key={article.title} {...article} />
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

export default ArticlesSection;