import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { projects } from "@/lib/data/projects";

export const metadata: Metadata = {
  title: "Residential Projects | West Fraser Developments",
  description:
    "Explore West Fraser Developments' residential portfolio — new condominiums, townhomes, and presale communities across Metro Vancouver. Find your next home today.",
};

const stats = [
  { value: "30+", label: "Properties & Projects" },
  { value: "1,000+", label: "Homes Built" },
  { value: "30+", label: "Years in BC" },
  { value: "5+", label: "Metro Vancouver Municipalities" },
];

export default function ResidentialPage() {
  return (
    <>
      <Navbar />

      {/* Page Hero */}
      <section className="relative h-[45vh] md:h-[55vh] flex items-end overflow-hidden bg-gray-800">
        <Image
          src="https://westfraserdev.ca/wp-content/uploads/2021/11/Living_dark_001.png"
          alt="West Fraser Developments Residential"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-16 w-full">
          <p className="text-xs uppercase tracking-[0.3em] text-white/50 mb-3">
            West Fraser Developments
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white">Residential</h1>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-gray-900 py-8">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl font-bold text-white">{s.value}</div>
              <div className="text-xs uppercase tracking-widest text-gray-400 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-4">Our Homes</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Designed for how <br />you actually live.
            </h2>
          </div>
          <div>
            <p className="text-gray-500 text-lg leading-relaxed">
              From thoughtfully crafted condominiums to spacious townhomes, every
              West Fraser Developments residential community is designed with livability at its core.
              We build in Metro Vancouver's most sought-after neighbourhoods —
              close to transit, schools, parks, and the urban amenities that matter.
            </p>
          </div>
        </div>
      </section>

      {/* Projects grid */}
      <section className="pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((p) => (
              <Link
                key={p.id}
                href={p.externalUrl ?? `/residential/${p.id}`}
                target={p.externalUrl ? "_blank" : undefined}
                rel={p.externalUrl ? "noopener noreferrer" : undefined}
                className="group block overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow"
              >
                {/* Project image */}
                <div className="relative h-64 w-full overflow-hidden bg-gray-200">
                  <Image
                    src={p.img}
                    alt={p.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {(p.status === "COMING SOON" || p.status === "PRESALE SOON" || p.status === "UNDER CONSTRUCTION") && (
                    <span className={`absolute top-4 left-4 ${p.statusColor} text-white text-[10px] font-bold uppercase tracking-widest px-2.5 py-1`}>
                      {p.status === "PRESALE SOON" ? "Presale Soon" : p.status === "UNDER CONSTRUCTION" ? "Under Construction" : "Coming Soon"}
                    </span>
                  )}
                </div>

                {/* Info */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-[11px] uppercase tracking-widest text-gray-400">{p.type}</p>
                    <p className="text-[11px] text-gray-400">{p.units}</p>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-0.5 group-hover:text-gray-600 transition-colors">
                    {p.name}
                  </h3>
                  <p className="text-sm text-gray-500 mb-3">
                    {p.neighbourhood} · {p.location}
                  </p>
                  <p className="text-sm text-gray-500 leading-relaxed mb-4">{p.description}</p>
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-semibold text-gray-900">{p.priceFrom}</p>
                    <span className="text-[11px] text-gray-400 uppercase tracking-widest group-hover:text-gray-700 transition-colors">
                      View Project →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Process section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-4">The Process</p>
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900">Buying with West Fraser Developments</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Register Your Interest", desc: "Join our VIP list for early access to pricing, floor plans, and exclusive presale opportunities." },
              { step: "02", title: "Tour the Presentation Centre", desc: "Visit our on-site or virtual presentation centres to explore layouts, finishes, and building amenities." },
              { step: "03", title: "Choose Your Home", desc: "Work with our sales team to select the floor plan, level, and view that fits your lifestyle and budget." },
              { step: "04", title: "Move In", desc: "Our customer care team supports you from deposit to keys — and beyond with our comprehensive warranty program." },
            ].map((item) => (
              <div key={item.step} className="text-center px-4">
                <div className="text-5xl font-black text-gray-100 mb-4">{item.step}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-900 text-white text-center px-6">
        <p className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-4">Get Started</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to find your next home?</h2>
        <p className="text-gray-400 max-w-lg mx-auto mb-10">
          Register for updates on upcoming projects and be the first to know about
          presale pricing and priority access.
        </p>
        <Link
          href="/customer-service"
          className="inline-block bg-white text-gray-900 px-10 py-4 text-sm font-semibold uppercase tracking-wider hover:bg-gray-100 transition-colors"
        >
          Register Now
        </Link>
      </section>

      <Footer />
    </>
  );
}
