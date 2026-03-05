import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { constructionProjects } from "@/lib/data/construction-projects";

// ── Trust badges ────────────────────────────────────────────────────────────
const trustBadges = [
  "Design-Build",
  "General Contracting",
  "Tenant Improvements",
  "Commercial & Industrial",
  "Pre-Construction Services",
  "30+ Years in BC",
];

// ── Services overview ────────────────────────────────────────────────────────
const services = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="text-[#c9973a]">
        <rect x="4" y="20" width="24" height="3" rx="1" fill="currentColor" />
        <path d="M8 20V12L16 4L24 12V20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="13" y="14" width="6" height="6" rx="0.5" fill="currentColor" />
      </svg>
    ),
    title: "Design-Build",
    desc: "Single-source responsibility from concept through construction. We coordinate design, engineering, and delivery under one contract — reducing risk and compressing schedules.",
    href: "/services#design-build",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="text-[#c9973a]">
        <path d="M6 28V8L16 4L26 8V28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="12" y="18" width="8" height="10" rx="0.5" fill="currentColor" />
        <rect x="10" y="12" width="4" height="4" rx="0.5" stroke="currentColor" strokeWidth="1.5" />
        <rect x="18" y="12" width="4" height="4" rx="0.5" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    title: "General Contracting",
    desc: "Experienced GC services for commercial, industrial, and multi-family projects. We manage trades, schedules, and quality so your project is delivered on time and on budget.",
    href: "/services#general-contracting",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="text-[#c9973a]">
        <rect x="4" y="4" width="24" height="24" rx="2" stroke="currentColor" strokeWidth="2" />
        <path d="M10 12H22M10 16H18M10 20H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <circle cx="24" cy="24" r="5" fill="currentColor" />
        <path d="M22 24L23.5 25.5L26 23" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Pre-Construction",
    desc: "Budgeting, scheduling, value engineering, and trade procurement before a shovel hits the ground. Reduce surprises and optimize your project scope early.",
    href: "/services#pre-construction",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="text-[#c9973a]">
        <rect x="4" y="10" width="24" height="18" rx="2" stroke="currentColor" strokeWidth="2" />
        <path d="M10 10V6H22V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M12 18H20M12 22H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    title: "Tenant Improvements",
    desc: "Fast, professional fit-outs for retail, office, and industrial tenants. We work within occupied buildings and meet tight timelines without disrupting your operations.",
    href: "/services#tenant-improvements",
  },
];

// ── Process steps ────────────────────────────────────────────────────────────
const processSteps = [
  { num: "01", title: "Discovery", desc: "Understand your program, site, budget, and schedule requirements." },
  { num: "02", title: "Design", desc: "Develop design concepts and drawings with our engineering partners." },
  { num: "03", title: "Permits", desc: "Manage municipal permit submissions and approvals from start to finish." },
  { num: "04", title: "Build", desc: "Self-perform and manage trades with rigorous QA/QC and site safety." },
  { num: "05", title: "Handover", desc: "Commission, deficiency closeout, and a complete building handover package." },
];

// ── Featured projects (first 6) ──────────────────────────────────────────────
const featuredProjects = constructionProjects.slice(0, 6);

export default function Home() {
  return (
    <>
      <Navbar />
      <main>

        {/* ── HERO ─────────────────────────────────────────────────────────── */}
        <section className="relative min-h-screen flex items-center overflow-hidden bg-[#1a2e44]">
          <Image
            src="/Construction/DJI_20251007192022_0092_D.jpg"
            alt="West Fraser Construction"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-[#1a2e44]/65" />

          <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 w-full">
            <div className="max-w-3xl">
              <p className="text-[#c9973a] text-xs font-semibold uppercase tracking-[0.3em] mb-5">
                West Fraser Construction
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] mb-6">
                Design to Construction.<br />Delivered.
              </h1>
              <p className="text-white/70 text-lg sm:text-xl leading-relaxed mb-10 max-w-2xl">
                Full-service design-build and general contracting for commercial, industrial, and residential projects across British Columbia. Built on quality, schedule certainty, and transparency.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-block bg-[#c9973a] text-white font-semibold px-8 py-4 text-sm uppercase tracking-wider hover:bg-[#a87828] transition-colors text-center"
                >
                  Request a Quote
                </Link>
                <Link
                  href="/services"
                  className="inline-block border-2 border-white/60 text-white font-semibold px-8 py-4 text-sm uppercase tracking-wider hover:border-white hover:bg-white/10 transition-colors text-center"
                >
                  View Services
                </Link>
              </div>
            </div>
          </div>

          {/* Scroll hint */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-white/40">
            <div className="w-px h-16 bg-white/30 animate-pulse" />
          </div>
        </section>

        {/* ── TRUST BAR ────────────────────────────────────────────────────── */}
        <section className="bg-[#f7f5f1] border-y border-gray-200 py-5">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
              {trustBadges.map((badge) => (
                <div key={badge} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c9973a] shrink-0" />
                  <span className="text-xs font-semibold uppercase tracking-[0.15em] text-[#1a2e44]">
                    {badge}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SERVICES OVERVIEW ────────────────────────────────────────────── */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-14">
              <p className="text-xs uppercase tracking-[0.3em] text-[#c9973a] font-semibold mb-3">What We Do</p>
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                <h2 className="text-3xl md:text-5xl font-bold text-[#1a2e44] leading-tight max-w-xl">
                  End-to-end construction services.
                </h2>
                <Link
                  href="/services"
                  className="shrink-0 border border-[#1a2e44] text-[#1a2e44] px-8 py-3 text-sm font-semibold uppercase tracking-wider hover:bg-[#1a2e44] hover:text-white transition-colors"
                >
                  All Services
                </Link>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-0 border border-gray-200">
              {services.map((s, i) => (
                <Link
                  key={s.title}
                  href={s.href}
                  className={`group p-8 lg:p-10 flex flex-col gap-5 hover:bg-[#f7f5f1] transition-colors ${
                    i < services.length - 1 ? "border-b lg:border-b-0 lg:border-r border-gray-200" : ""
                  }`}
                >
                  <div>{s.icon}</div>
                  <div>
                    <h3 className="text-lg font-bold text-[#1a2e44] mb-2 group-hover:text-[#c9973a] transition-colors">
                      {s.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
                  </div>
                  <span className="text-xs uppercase tracking-widest text-[#c9973a] font-semibold mt-auto group-hover:underline">
                    Learn More →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── OUR PROCESS ──────────────────────────────────────────────────── */}
        <section className="py-24 bg-[#1a2e44]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-14">
              <p className="text-xs uppercase tracking-[0.3em] text-[#c9973a] font-semibold mb-3">How We Work</p>
              <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">Our Process</h2>
            </div>

            <div className="grid md:grid-cols-5 gap-0">
              {processSteps.map((step, i) => (
                <div
                  key={step.num}
                  className={`p-8 border-t border-white/10 ${
                    i < processSteps.length - 1 ? "md:border-r" : ""
                  }`}
                >
                  <div className="text-[#c9973a] text-4xl font-bold mb-4 leading-none">{step.num}</div>
                  <h3 className="text-white font-bold text-lg mb-3">{step.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FEATURED PROJECTS ─────────────────────────────────────────────── */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-14">
              <p className="text-xs uppercase tracking-[0.3em] text-[#c9973a] font-semibold mb-3">Portfolio</p>
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                <h2 className="text-3xl md:text-5xl font-bold text-[#1a2e44] leading-tight">Featured Projects</h2>
                <Link
                  href="/projects"
                  className="shrink-0 border border-[#1a2e44] text-[#1a2e44] px-8 py-3 text-sm font-semibold uppercase tracking-wider hover:bg-[#1a2e44] hover:text-white transition-colors"
                >
                  View All Projects
                </Link>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredProjects.map((p) => (
                <Link
                  key={p.id}
                  href="/projects"
                  className="group block overflow-hidden"
                >
                  <div className="relative h-64 w-full overflow-hidden bg-gray-200">
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
                      {p.location} &middot; {p.sqft}
                    </p>
                    <h3 className="text-xl font-bold text-[#1a2e44] group-hover:text-[#c9973a] transition-colors mb-1">
                      {p.name}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed line-clamp-2">{p.scope}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── SAFETY & QUALITY ─────────────────────────────────────────────── */}
        <section className="py-24 bg-[#f7f5f1]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-[#c9973a] font-semibold mb-3">Our Standards</p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a2e44] leading-tight mb-6">
                  Safety and quality are not optional.
                </h2>
                <p className="text-gray-500 text-lg leading-relaxed mb-4">
                  Every West Fraser Construction project operates under a comprehensive Health & Safety Plan. We maintain a COR-certified safety program and hold our subcontractors to the same standards we hold ourselves.
                </p>
                <p className="text-gray-500 text-lg leading-relaxed">
                  Quality control is built into every phase — not inspected at the end. Our site superintendents conduct daily QA reviews, and we document progress with regular client reporting throughout construction.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-5">
                {[
                  { value: "COR", label: "Safety Certified" },
                  { value: "30+", label: "Years Delivering Projects" },
                  { value: "1M+", label: "Sq Ft Completed" },
                  { value: "Zero", label: "Tolerance for Defects" },
                ].map((s) => (
                  <div key={s.label} className="bg-white border border-gray-200 p-8">
                    <div className="text-3xl md:text-4xl font-bold text-[#1a2e44] mb-2">{s.value}</div>
                    <div className="text-sm text-gray-500">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA BAND ─────────────────────────────────────────────────────── */}
        <section className="bg-[#c9973a] py-20">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-2">
                Ready to start your project?
              </h2>
              <p className="text-white/80 text-lg">
                Tell us what you need. We&apos;ll get back to you within one business day.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <Link
                href="/contact"
                className="inline-block bg-white text-[#1a2e44] font-bold px-8 py-4 text-sm uppercase tracking-wider hover:bg-gray-100 transition-colors text-center"
              >
                Request a Quote
              </Link>
              <Link
                href="/services"
                className="inline-block border-2 border-white text-white font-semibold px-8 py-4 text-sm uppercase tracking-wider hover:bg-white/10 transition-colors text-center"
              >
                Our Services
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
