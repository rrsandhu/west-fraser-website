import Image from "next/image";
import Link from "next/link";

const featured = [
  {
    id: "muse",
    name: "Muse",
    location: "Surrey, BC",
    neighbourhood: "Guildford",
    type: "Condominiums",
    badge: "Presale Soon",
    badgeColor: "bg-blue-700",
    img: "/Muse/photo-1.jpg",
    href: "https://theportraitcollection.ca/",
    external: true,
  },
  {
    id: "the-grove",
    name: "The Grove",
    location: "Surrey, BC",
    neighbourhood: "Guildford",
    type: "Condominiums + Commercial",
    badge: "Coming Soon",
    badgeColor: "bg-blue-700",
    img: "/The%20Grove/photo-1.jpg",
    href: "/residential/the-grove",
    external: false,
  },
  {
    id: "surrey-city-centre",
    name: "Surrey City Centre",
    location: "Surrey, BC",
    neighbourhood: "Surrey City Centre",
    type: "Condominiums",
    badge: "Under Construction",
    badgeColor: "bg-amber-600",
    img: "/Surrey%20City%20Centre/photo-1.jpeg",
    href: "/residential/surrey-city-centre",
    external: false,
  },
  {
    id: "820-dogwood",
    name: "820 Dogwood",
    location: "Coquitlam, BC",
    neighbourhood: "Burquitlam",
    type: "Condominiums",
    badge: "Under Construction",
    badgeColor: "bg-amber-600",
    img: "/820%20Dogwood/photo-1.png",
    href: "/residential/820-dogwood",
    external: false,
  },
];

export default function ProjectsRow() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Heading */}
        <div className="mb-12">
          <p className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-4">Our Portfolio</p>
          <div className="flex items-end justify-between gap-8">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900">Featured Projects</h2>
            <Link
              href="/residential"
              className="shrink-0 hidden md:inline-block border border-gray-900 text-gray-900 px-8 py-3 text-sm font-semibold uppercase tracking-wider hover:bg-gray-900 hover:text-white transition-colors"
            >
              View All Projects
            </Link>
          </div>
        </div>

        {/* 4-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((p) => (
            <Link
              key={p.id}
              href={p.href}
              target={p.external ? "_blank" : undefined}
              rel={p.external ? "noopener noreferrer" : undefined}
              className="group block overflow-hidden"
            >
              {/* Image */}
              <div className="relative h-64 sm:h-80 lg:h-96 w-full overflow-hidden bg-gray-200">
                <Image
                  src={p.img}
                  alt={p.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className={`absolute top-3 left-3 ${p.badgeColor} text-white text-[10px] font-bold uppercase tracking-widest px-2.5 py-1`}>
                  {p.badge}
                </span>
              </div>

              {/* Info */}
              <div className="pt-5 pb-2 border-b border-gray-100 group-hover:border-gray-900 transition-colors">
                <p className="text-[11px] uppercase tracking-widest text-gray-400 mb-1">
                  {p.neighbourhood} &middot; {p.type}
                </p>
                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-gray-600 transition-colors mb-0.5">
                  {p.name}
                </h3>
                <p className="text-sm text-gray-500">{p.location}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile view all */}
        <div className="mt-10 text-center md:hidden">
          <Link
            href="/residential"
            className="inline-block border border-gray-900 text-gray-900 px-10 py-4 text-sm font-semibold uppercase tracking-wider hover:bg-gray-900 hover:text-white transition-colors"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
}
