import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Services | West Fraser Construction",
  description:
    "West Fraser Construction offers design-build, general contracting, pre-construction, tenant improvements, and renovation services across BC.",
};

const services = [
  {
    id: "design-build",
    number: "01",
    title: "Design-Build",
    tagline: "Single-source delivery from concept to completion.",
    overview:
      "Our design-build model puts one team in charge of design, engineering, and construction — eliminating the gaps between disciplines that cause cost overruns and schedule delays. You get a single point of accountability and a streamlined process from day one.",
    includes: [
      "Architectural and engineering design coordination",
      "Design development and construction documents",
      "Permit application and municipal approvals",
      "Full construction management and self-perform trades",
      "Mechanical, electrical, and structural integration",
      "Quality control and commissioning",
      "Project closeout and warranty program",
    ],
    whoFor: "Owners who want reduced risk, faster schedules, and a single point of responsibility for design and construction.",
  },
  {
    id: "general-contracting",
    number: "02",
    title: "General Contracting",
    tagline: "Expert trade coordination and project delivery.",
    overview:
      "West Fraser Construction manages the full construction process as your General Contractor — from pre-construction planning through to final handover. We assemble the right trade team, hold the schedule, and enforce quality standards at every stage.",
    includes: [
      "Tendering and trade procurement",
      "Construction scheduling and sequencing",
      "Site safety management (COR certified)",
      "Trade coordination and daily site supervision",
      "RFI and submittal management",
      "Owner reporting and progress updates",
      "Deficiency management and closeout",
    ],
    whoFor: "Developers, institutional owners, and municipalities seeking a reliable GC with a strong BC track record.",
  },
  {
    id: "pre-construction",
    number: "03",
    title: "Pre-Construction",
    tagline: "Set your project up for success before ground breaks.",
    overview:
      "Poor planning creates expensive problems. Our pre-construction team provides detailed cost planning, schedule development, value engineering, and trade market analysis early in the project — so there are no surprises when construction begins.",
    includes: [
      "Conceptual and detailed cost estimating",
      "Project schedule development",
      "Value engineering and scope optimization",
      "Trade market analysis and procurement strategy",
      "Site investigation and constructability review",
      "Risk identification and mitigation planning",
      "Budget reconciliation at each design milestone",
    ],
    whoFor: "Owners, developers, and lenders who want rigorous cost and schedule certainty before committing capital.",
  },
  {
    id: "tenant-improvements",
    number: "04",
    title: "Tenant Improvements & Fit-Outs",
    tagline: "Fast, professional fit-outs for retail, office, and industrial tenants.",
    overview:
      "We specialize in occupied-building tenant improvements — working within active commercial environments with minimal disruption. From basic space refreshes to full demising-wall-to-ceiling fit-outs, we deliver on tight retail and office timelines.",
    includes: [
      "Retail and food & beverage fit-outs",
      "Office build-outs and open-plan conversions",
      "Industrial tenant demising and improvements",
      "Mechanical, electrical, and sprinkler modifications",
      "Flooring, millwork, and ceiling systems",
      "After-hours and phased work scheduling",
      "Permit coordination and building management liaison",
    ],
    whoFor: "Commercial landlords, retail brands, and office tenants requiring fast, clean, code-compliant fit-outs.",
  },
  {
    id: "renovations",
    number: "05",
    title: "Renovations & Upgrades",
    tagline: "Extend the life and performance of your existing building.",
    overview:
      "Building retrofit and upgrade projects require a contractor who understands how to work in existing conditions — unknown structure, live utilities, and occupied spaces. West Fraser Construction brings that experience to every renovation project.",
    includes: [
      "Building envelope upgrades (windows, roofing, cladding)",
      "Mechanical and electrical system replacements",
      "Seismic upgrade and structural reinforcement",
      "Lobby, corridor, and common area refreshes",
      "Suite renovation programs (phased and occupied)",
      "Accessibility upgrades and code compliance work",
      "Energy efficiency improvements",
    ],
    whoFor: "Property owners and strata corporations looking to upgrade aging buildings and improve performance or value.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />

      {/* Page Header */}
      <section className="bg-[#1a2e44] pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs uppercase tracking-[0.3em] text-[#c9973a] font-semibold mb-4">What We Offer</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
            Construction Services
          </h1>
          <p className="text-white/60 text-lg max-w-2xl leading-relaxed">
            From the first sketch to the final inspection, West Fraser Construction delivers every phase of the construction process with the same commitment to quality, schedule, and transparency.
          </p>
        </div>
      </section>

      {/* Service sections */}
      {services.map((s, idx) => (
        <section
          key={s.id}
          id={s.id}
          className={`py-20 md:py-28 ${idx % 2 === 0 ? "bg-white" : "bg-[#f7f5f1]"}`}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20">
              {/* Left col */}
              <div>
                <div className="text-[80px] font-bold text-gray-100 leading-none mb-4 select-none">
                  {s.number}
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#1a2e44] mb-3">{s.title}</h2>
                <p className="text-[#c9973a] font-semibold text-sm mb-6">{s.tagline}</p>
                <div className="inline-block bg-[#1a2e44]/5 border border-[#1a2e44]/10 px-4 py-3 text-xs text-gray-500 leading-relaxed max-w-xs">
                  <span className="font-semibold text-[#1a2e44] block mb-1">Best for:</span>
                  {s.whoFor}
                </div>
              </div>

              {/* Right col */}
              <div>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">{s.overview}</p>
                <div className="mb-8">
                  <p className="text-xs uppercase tracking-[0.2em] text-gray-400 font-semibold mb-4">What&apos;s Included</p>
                  <ul className="space-y-3">
                    {s.includes.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-gray-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#c9973a] mt-2 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link
                  href="/contact"
                  className="inline-block bg-[#1a2e44] text-white px-8 py-3.5 text-sm font-semibold uppercase tracking-wider hover:bg-[#243d5a] transition-colors"
                >
                  Book a Consultation
                </Link>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="bg-[#c9973a] py-20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">Not sure which service fits your project?</h2>
            <p className="text-white/80 text-lg">Talk to our team. We&apos;ll help you figure out the right approach.</p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 inline-block bg-white text-[#1a2e44] font-bold px-8 py-4 text-sm uppercase tracking-wider hover:bg-gray-100 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
