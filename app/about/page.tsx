import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About | West Fraser Construction",
  description:
    "West Fraser Construction is the construction arm of West Fraser Developments — delivering quality design-build and GC projects across BC since 1993.",
};

const values = [
  {
    title: "Safety",
    desc: "Every worker goes home safe. Our COR-certified safety program is non-negotiable on every project regardless of size or scope.",
  },
  {
    title: "Craftsmanship",
    desc: "We build things the right way. Our superintendents enforce quality standards daily — not just at inspection time.",
  },
  {
    title: "Communication",
    desc: "Clients get regular, honest project updates. No surprises. We surface problems early and bring solutions with them.",
  },
  {
    title: "Accountability",
    desc: "We own our commitments — on schedule, on budget, and on scope. When something goes wrong, we fix it.",
  },
];

const timeline = [
  { year: "1993", event: "West Fraser Developments founded in Surrey, BC." },
  { year: "2000s", event: "Expanded residential portfolio across Metro Vancouver with award-winning condominium communities." },
  { year: "2010s", event: "Launched construction division to self-perform GC and design-build projects, reducing delivery risk for WFD projects." },
  { year: "2020", event: "West Fraser Construction formalized as a dedicated construction entity serving third-party clients across BC." },
  { year: "2023+", event: "Active portfolio includes residential, commercial, and industrial projects totalling over 1M sq ft under management." },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />

      {/* Page Header */}
      <section className="bg-[#1a2e44] pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs uppercase tracking-[0.3em] text-[#c9973a] font-semibold mb-4">Who We Are</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
            About West Fraser<br />Construction
          </h1>
          <p className="text-white/60 text-lg max-w-2xl leading-relaxed">
            The construction arm of West Fraser Developments — bringing three decades of BC real estate knowledge to every project we build.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[#c9973a] font-semibold mb-4">Our Story</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a2e44] leading-tight mb-6">
              Built from the inside out.
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-4">
              West Fraser Construction was born out of West Fraser Developments — a Surrey-based real estate developer that has shaped communities across Metro Vancouver since 1993. As WFD&apos;s project portfolio grew in complexity and scale, so did the need for a construction partner that understood the development business from the inside.
            </p>
            <p className="text-gray-500 text-lg leading-relaxed mb-4">
              Rather than outsource that expertise, we built it. West Fraser Construction now operates as a full-service design-build and general contracting company, serving both the West Fraser group of companies and select third-party clients across British Columbia.
            </p>
            <p className="text-gray-500 text-lg leading-relaxed">
              We bring developer-level thinking to every project: rigorous cost management, schedule accountability, and a constant focus on building value — not just buildings.
            </p>
          </div>
          <div className="relative h-[450px] bg-gray-200">
            <Image
              src="/Construction/West%20Fraser%20Developments_Radley_01_September%2023%202022%20copy.jpg"
              alt="West Fraser Construction Radley project"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 bg-[#1a2e44]">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">
          {[
            {
              label: "Our Mission",
              text: "To deliver construction projects that exceed client expectations on quality, schedule, and value — every time, without exception.",
            },
            {
              label: "Who We Serve",
              text: "Commercial landlords, residential developers, institutional owners, municipalities, and growing businesses requiring professional construction services in BC.",
            },
            {
              label: "Our Approach",
              text: "Collaborative, transparent, and disciplined. We engage early, plan rigorously, and execute with experienced people who take ownership of outcomes.",
            },
          ].map((item) => (
            <div key={item.label}>
              <p className="text-[#c9973a] text-xs uppercase tracking-[0.2em] font-semibold mb-4">{item.label}</p>
              <p className="text-white/80 text-lg leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-[#f7f5f1]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14">
            <p className="text-xs uppercase tracking-[0.3em] text-[#c9973a] font-semibold mb-3">What Drives Us</p>
            <h2 className="text-3xl md:text-5xl font-bold text-[#1a2e44]">Our Values</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-0 border border-gray-200">
            {values.map((v, i) => (
              <div
                key={v.title}
                className={`p-8 lg:p-10 bg-white ${
                  i < values.length - 1 ? "border-b sm:border-b-0 sm:border-r border-gray-200" : ""
                }`}
              >
                <div className="w-10 h-10 bg-[#1a2e44] flex items-center justify-center mb-5">
                  <span className="text-[#c9973a] text-sm font-bold">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="text-xl font-bold text-[#1a2e44] mb-3">{v.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14">
            <p className="text-xs uppercase tracking-[0.3em] text-[#c9973a] font-semibold mb-3">Our History</p>
            <h2 className="text-3xl md:text-5xl font-bold text-[#1a2e44]">Thirty years of building BC.</h2>
          </div>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[11px] top-2 bottom-2 w-px bg-gray-200 hidden md:block" />
            <div className="space-y-10">
              {timeline.map((item) => (
                <div key={item.year} className="flex gap-8 items-start">
                  <div className="relative hidden md:block shrink-0">
                    <div className="w-6 h-6 rounded-full bg-[#1a2e44] border-4 border-white ring-1 ring-gray-200" />
                  </div>
                  <div className="pb-8 border-b border-gray-100 flex-1">
                    <p className="text-[#c9973a] text-sm font-bold uppercase tracking-widest mb-1">{item.year}</p>
                    <p className="text-gray-600 text-lg leading-relaxed">{item.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#c9973a] py-20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">Let&apos;s build something together.</h2>
            <p className="text-white/80 text-lg">Contact our team to discuss your project.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-block bg-white text-[#1a2e44] font-bold px-8 py-4 text-sm uppercase tracking-wider hover:bg-gray-100 transition-colors text-center"
            >
              Contact Us
            </Link>
            <Link
              href="/projects"
              className="inline-block border-2 border-white text-white font-semibold px-8 py-4 text-sm uppercase tracking-wider hover:bg-white/10 transition-colors text-center"
            >
              View Projects
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
