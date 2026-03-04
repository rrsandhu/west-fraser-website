import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "News | West Fraser Developments",
  description:
    "Latest news and project announcements from West Fraser Developments — new communities, ground-breakings, and milestones across Metro Vancouver.",
};

const articles = [
  {
    date: "March 2025",
    category: "Development",
    title: "820 Dogwood Breaks Ground in Burquitlam",
    summary:
      "West Fraser Developments has officially broken ground on 820 Dogwood Street in Coquitlam's Burquitlam neighbourhood, a 202-suite purpose-built rental building steps from the Burquitlam SkyTrain station.",
  },
  {
    date: "January 2025",
    category: "Presale",
    title: "Muse Presale Launches in Surrey's Guildford Neighbourhood",
    summary:
      "West Fraser Developments announces the presale launch of Muse, an upcoming 108-suite condominium community at 10277 150 Street in Surrey. Register now at theportraitcollection.ca.",
  },
  {
    date: "November 2024",
    category: "Community",
    title: "Surrey City Centre Construction Update",
    summary:
      "Construction continues on West Fraser's 115-suite upscale rental community in the heart of Surrey City Centre, with leasing expected to open in summer 2025.",
  },
  {
    date: "September 2024",
    category: "Development",
    title: "The Grove Announced for 15622 104 Avenue, Surrey",
    summary:
      "West Fraser Developments announces The Grove, a 133-suite mixed-use rental development featuring 28,000 sq ft of ground-floor commercial space in Surrey's Guildford neighbourhood.",
  },
  {
    date: "June 2024",
    category: "Milestone",
    title: "Radley Completes Full Occupancy in Surrey City Centre",
    summary:
      "West Fraser Developments celebrates full occupancy at Radley, its 193-suite condominium community in the heart of Surrey City Centre, marking another milestone in the company's history.",
  },
];

export default function NewsPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative h-[40vh] flex items-end overflow-hidden bg-gray-900">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-700" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-16 w-full">
          <p className="text-xs uppercase tracking-[0.3em] text-white/50 mb-3">
            West Fraser Developments
          </p>
          <h1 className="text-6xl md:text-7xl font-bold text-white">News</h1>
        </div>
      </section>

      {/* Articles */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="divide-y divide-gray-100">
            {articles.map((a, i) => (
              <article key={i} className="py-12 group">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-[11px] uppercase tracking-widest text-white bg-gray-900 px-2.5 py-1 font-semibold">
                    {a.category}
                  </span>
                  <span className="text-sm text-gray-400">{a.date}</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 leading-snug mb-3">
                  {a.title}
                </h2>
                <p className="text-gray-500 leading-relaxed">{a.summary}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-50 text-center px-6">
        <p className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-4">Stay Connected</p>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Follow us for the latest updates.</h2>
        <p className="text-gray-500 mb-8 max-w-sm mx-auto">
          Stay up to date with new project announcements and community news on our social channels.
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="https://www.linkedin.com/company/westfraserdev"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-gray-900 text-gray-900 px-8 py-3 text-sm font-semibold uppercase tracking-wider hover:bg-gray-900 hover:text-white transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://www.instagram.com/westfraserdev/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-gray-900 text-gray-900 px-8 py-3 text-sm font-semibold uppercase tracking-wider hover:bg-gray-900 hover:text-white transition-colors"
          >
            Instagram
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}
