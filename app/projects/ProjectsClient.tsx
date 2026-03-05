"use client";

import { useState } from "react";
import Image from "next/image";
import type { ConstructionProject } from "@/lib/data/construction-projects";

const CATEGORIES = ["All", "Commercial", "Industrial", "Residential", "Tenant Improvement"] as const;
type Category = (typeof CATEGORIES)[number];

export default function ProjectsClient({ projects }: { projects: ConstructionProject[] }) {
  const [active, setActive] = useState<Category>("All");

  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <>
      {/* Filter bar */}
      <div className="flex flex-wrap gap-2 mb-12">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-5 py-2 text-xs font-semibold uppercase tracking-[0.15em] transition-colors ${
              active === cat
                ? "bg-[#1a2e44] text-white"
                : "bg-white border border-gray-200 text-gray-500 hover:border-[#1a2e44] hover:text-[#1a2e44]"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((p) => (
          <div key={p.id} className="group block overflow-hidden">
            <div className="relative h-60 w-full overflow-hidden bg-gray-200">
              <Image
                src={p.img}
                alt={p.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span className={`absolute top-3 left-3 ${p.statusColor} text-white text-[10px] font-bold uppercase tracking-widest px-2.5 py-1`}>
                {p.status}
              </span>
              <span className="absolute top-3 right-3 bg-[#1a2e44]/80 text-white text-[10px] font-semibold uppercase tracking-widest px-2.5 py-1">
                {p.category}
              </span>
            </div>
            <div className="pt-5 pb-4 border-b border-gray-100 group-hover:border-[#1a2e44] transition-colors">
              <p className="text-[11px] uppercase tracking-widest text-gray-400 mb-1.5">
                {p.location} &middot; {p.sqft} &middot; {p.year}
              </p>
              <h3 className="text-xl font-bold text-[#1a2e44] group-hover:text-[#c9973a] transition-colors mb-2">
                {p.name}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed line-clamp-2">{p.scope}</p>
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-20 text-gray-400">
          No projects in this category yet.
        </div>
      )}
    </>
  );
}
