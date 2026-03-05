import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectsClient from "./ProjectsClient";
import { constructionProjects } from "@/lib/data/construction-projects";

export const metadata: Metadata = {
  title: "Projects | West Fraser Construction",
  description:
    "Explore West Fraser Construction's portfolio of commercial, industrial, residential, and tenant improvement projects across BC.",
};

export default function ProjectsPage() {
  return (
    <>
      <Navbar />

      {/* Page Header */}
      <section className="bg-[#1a2e44] pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs uppercase tracking-[0.3em] text-[#c9973a] font-semibold mb-4">Our Work</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
            Projects
          </h1>
          <p className="text-white/60 text-lg max-w-2xl leading-relaxed">
            A selection of completed and in-progress projects spanning commercial, industrial, residential, and tenant improvement scopes across British Columbia.
          </p>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-[#243d5a] py-8">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: "1M+", label: "Sq Ft Delivered" },
            { value: "50+", label: "Projects Completed" },
            { value: "30+", label: "Years in BC" },
            { value: "4", label: "Project Categories" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl font-bold text-white">{s.value}</div>
              <div className="text-xs uppercase tracking-widest text-gray-400 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Filterable Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <ProjectsClient projects={constructionProjects} />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#f7f5f1] py-20 text-center px-6">
        <p className="text-xs uppercase tracking-[0.3em] text-[#c9973a] font-semibold mb-4">Work With Us</p>
        <h2 className="text-3xl md:text-4xl font-bold text-[#1a2e44] mb-4">
          Have a project in mind?
        </h2>
        <p className="text-gray-500 max-w-lg mx-auto mb-10 text-lg leading-relaxed">
          Tell us about your project and we&apos;ll get back to you within one business day with how we can help.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-[#1a2e44] text-white px-10 py-4 text-sm font-semibold uppercase tracking-wider hover:bg-[#243d5a] transition-colors"
        >
          Request a Quote
        </Link>
      </section>

      <Footer />
    </>
  );
}
