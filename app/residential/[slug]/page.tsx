import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { projects } from "@/lib/data/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.id === slug);
  if (!project) return {};
  return {
    title: `${project.name} | West Fraser Developments`,
    description: project.description,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.id === slug);
  if (!project) notFound();

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative h-[45vh] md:h-[65vh] flex items-end overflow-hidden bg-gray-900">
        <Image
          src={project.img}
          alt={project.name}
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/80" />

        {/* Back link */}
        <Link
          href="/residential"
          className="absolute top-28 left-8 z-20 flex items-center gap-2 text-white/70 hover:text-white text-sm font-medium transition-colors"
        >
          <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M19 12H5M12 5l-7 7 7 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          All Residential Projects
        </Link>

        <div className="relative z-10 max-w-[1280px] mx-auto px-8 pb-16 w-full">
          {(project.status === "COMING SOON" || project.status === "PRESALE SOON" || project.status === "UNDER CONSTRUCTION") && (
            <span className={`inline-block ${project.statusColor} text-white text-[10px] font-bold uppercase tracking-[0.15em] px-3 py-1.5 mb-4`}>
              {project.status === "PRESALE SOON" ? "Presale Soon" : project.status === "UNDER CONSTRUCTION" ? "Under Construction" : "Coming Soon"}
            </span>
          )}
          <h1
            className="font-extrabold text-white leading-[1.05] tracking-[-0.02em] mb-2"
            style={{ fontSize: "clamp(40px, 5vw, 68px)" }}
          >
            {project.name}
          </h1>
          <p className="text-white/60 text-[15px] font-medium">
            {project.neighbourhood} &middot; {project.location}
          </p>
        </div>
      </section>

      {/* Specs strip */}
      <section className="bg-gray-900 border-t border-white/5">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/8">
          {[
            { label: "Type", value: project.type },
            { label: "Homes", value: project.units },
            { label: "Neighbourhood", value: project.neighbourhood },
            { label: "Completed", value: project.year },
          ].map((s) => (
            <div key={s.label} className="bg-gray-900 py-7 px-6 text-center">
              <div className="text-[11px] uppercase tracking-[0.14em] text-gray-500 font-semibold mb-1.5">
                {s.label}
              </div>
              <div className="text-white font-semibold text-[15px]">{s.value}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Overview + sidebar */}
      <section className="py-12 md:py-[80px] bg-white">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8 grid md:grid-cols-3 gap-10 md:gap-16">
          {/* Overview */}
          <div className="md:col-span-2">
            <p className="text-[12px] uppercase tracking-[0.14em] text-gray-400 font-semibold mb-5">
              Project Overview
            </p>
            <h2
              className="font-extrabold text-[#111318] leading-[1.1] tracking-[-0.02em] mb-6"
              style={{ fontSize: "clamp(24px, 2.5vw, 36px)" }}
            >
              About {project.name}
            </h2>
            <p className="text-[17px] text-[#6c7280] leading-[1.75] mb-10">
              {project.overview}
            </p>

            {/* Features */}
            <p className="text-[12px] uppercase tracking-[0.14em] text-gray-400 font-semibold mb-5">
              Features & Highlights
            </p>
            <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
              {project.features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-[14px] text-[#6c7280]">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-400 shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          {/* Sidebar */}
          <div>
            <div className="border border-gray-100 rounded-xl p-8 sticky top-28">
              <p className="text-[12px] uppercase tracking-[0.14em] text-gray-400 font-semibold mb-6">
                Key Details
              </p>
              <dl className="space-y-4 mb-8">
                {[
                  { label: "Type", value: project.type },
                  { label: "Homes", value: project.units },
                  { label: "Year", value: project.year },
                  { label: "Address", value: project.address ?? project.neighbourhood },
                  { label: "Pricing", value: project.priceFrom },
                ].map((d) => (
                  <div key={d.label} className="flex justify-between gap-4 text-[13px] border-b border-gray-50 pb-4">
                    <dt className="text-gray-400 font-medium">{d.label}</dt>
                    <dd className="text-[#111318] font-semibold text-right">{d.value}</dd>
                  </div>
                ))}
              </dl>
              <Link
                href="/customer-service"
                className="block w-full text-center bg-[#111318] text-white py-4 text-[13px] font-semibold uppercase tracking-[0.12em] hover:bg-gray-700 transition-colors rounded-sm"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Photo gallery */}
      <section className="py-12 md:py-[80px] bg-[#f8fafc]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8">
          <p className="text-[12px] uppercase tracking-[0.14em] text-gray-400 font-semibold mb-8">
            Photo Gallery
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            {project.gallery.map((src, i) => (
              <div
                key={i}
                className={`relative overflow-hidden rounded-xl bg-gray-200 ${i === 0 ? "md:col-span-2 h-[220px] md:h-[360px]" : "h-[220px] md:h-[360px]"}`}
              >
                <Image
                  src={src}
                  alt={`${project.name} — photo ${i + 1}`}
                  fill
                  className="object-cover hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-gray-900 text-center px-6">
        <p className="text-[12px] uppercase tracking-[0.14em] text-gray-500 font-semibold mb-4">
          Interested in {project.name}?
        </p>
        <h2
          className="font-extrabold text-white leading-tight tracking-[-0.02em] mb-6"
          style={{ fontSize: "clamp(26px, 3vw, 40px)" }}
        >
          Get in touch with our team.
        </h2>
        <p className="text-gray-400 text-[15px] max-w-md mx-auto mb-10">
          Our sales team is ready to answer your questions, provide floor plans, and guide you through the process.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/customer-service"
            className="inline-block bg-white text-[#111318] px-10 py-4 text-[13px] font-semibold uppercase tracking-[0.12em] hover:bg-gray-100 transition-colors"
          >
            Contact Us
          </Link>
          <Link
            href="/residential"
            className="inline-block border border-white/20 text-white px-10 py-4 text-[13px] font-semibold uppercase tracking-[0.12em] hover:border-white/50 transition-colors"
          >
            All Projects
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
