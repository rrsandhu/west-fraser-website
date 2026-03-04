import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Careers | West Fraser Developments",
  description:
    "Join the West Fraser Developments team. We're always looking for talented builders, marketers, and managers to help shape Metro Vancouver's urban landscape.",
};

const values = [
  {
    title: "Build Something Lasting",
    desc: "Our projects are still here decades later. We take pride in work that stands the test of time — whether it's a building, a relationship, or a reputation.",
  },
  {
    title: "People First",
    desc: "We're a people business. The communities we build, the tenants we serve, the residents who call our buildings home — they drive everything we do.",
  },
  {
    title: "Own It",
    desc: "We trust our team. We hire talented people and give them the autonomy to make decisions, solve problems, and lead their areas with confidence.",
  },
  {
    title: "Better Every Day",
    desc: "From sustainability practices to digital tools, we're always looking for smarter ways to develop, operate, and serve. Complacency has no place here.",
  },
];

export default function CareersPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative h-[50vh] md:h-[60vh] flex items-center overflow-hidden bg-gray-900">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-slate-700" />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20 w-full">
          <p className="text-xs uppercase tracking-[0.3em] text-white/50 mb-5">
            West Fraser Developments · Careers
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-none mb-6">
            Build your<br />career here.
          </h1>
          <p className="text-lg text-white/60 max-w-lg">
            Join a team of builders, marketers, managers, and creators who are shaping
            Metro Vancouver's urban landscape for generations to come.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start mb-20">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-4">Our Culture</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                What it means <br />to work here.
              </h2>
            </div>
            <div className="pt-2">
              <p className="text-gray-500 text-lg leading-relaxed">
                West Fraser Developments has been building Metro Vancouver for over 50 years. That means
                we've also been building careers — and we take both seriously. Our team
                is collaborative, driven, and genuinely proud of the work we do. Whether
                you're early in your career or a seasoned industry professional, you'll
                find a place to grow here.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 border-t border-gray-100 pt-12">
            {values.map((v) => (
              <div key={v.title}>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{v.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-gray-900 text-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-gray-300 mb-4">Join the Team</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">Interested in joining us?</h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-10">
            We're always interested in hearing from talented people. Send us your resume
            and a note about the kind of work you're passionate about — we keep strong
            candidates on file for future opportunities.
          </p>
          <a
            href="mailto:info@wfdev.ca"
            className="inline-block bg-white text-gray-900 px-10 py-4 text-sm font-semibold uppercase tracking-wider hover:bg-gray-100 transition-colors"
          >
            Email info@wfdev.ca
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}
