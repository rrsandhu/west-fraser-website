import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { rentals } from "@/lib/data/rentals";

export const metadata: Metadata = {
  title: "Apartment Rentals | West Fraser Developments",
  description:
    "Discover West Fraser Developments' purpose-built rental communities across Metro Vancouver. Professionally managed, high-quality homes with no intention to sell.",
};

const amenities = [
  { icon: "/icon_dumbbell.png", label: "Fitness Centres" },
  { icon: "/icon_paw.png", label: "Pet Friendly" },
  { icon: "/icon_car.png", label: "Secure Parking" },
  { icon: "/icon_lightning.png", label: "EV Charging" },
  { icon: "/icon_box.png", label: "Storage Lockers" },
  { icon: "/icon_leaf.png", label: "Outdoor Spaces" },
  { icon: "/icon_bicycle.png", label: "Bike Storage" },
  { icon: "/icon_laptop.png", label: "Co-work Lounges" },
];

export default function RentalsPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative h-[45vh] md:h-[55vh] flex items-end overflow-hidden bg-gray-700">
        <Image
          src="/Everett/photo-1.jpg"
          alt="Apartment Rentals"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-16 w-full">
          <p className="text-xs uppercase tracking-[0.3em] text-white/50 mb-3">
            West Fraser Developments
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white">Apartment Rentals</h1>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-4">Purpose-Built Rentals</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Rent with confidence. <br />Live with pride.
            </h2>
          </div>
          <div>
            <p className="text-gray-500 text-lg leading-relaxed mb-6">
              West Fraser Developments's purpose-built rental communities offer Metro Vancouver
              residents professionally managed, high-quality homes with no intention
              to sell. When you rent with us, you're not just a tenant — you're a
              valued resident in a community we're committed to for the long term.
            </p>
            <ul className="space-y-2">
              {["Professional on-site property management", "Responsive maintenance team", "Secure and well-maintained buildings", "No fixed-term lease required after first year"].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-gray-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-900 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Rental listings */}
      <section className="pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Our Communities</h2>
            <p className="text-sm text-gray-500">{rentals.length} properties across Metro Vancouver</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {rentals.map((r) => (
              <Link
                key={r.id}
                href={`/rentals/${r.id}`}
                className="group flex flex-col overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow"
              >
                {/* Image */}
                <div className="relative h-56 w-full overflow-hidden bg-gray-200">
                  <Image
                    src={r.img}
                    alt={r.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-4 left-4 bg-white text-gray-900 text-[10px] font-bold uppercase tracking-widest px-2.5 py-1">
                    {r.available}
                  </span>
                </div>

                {/* Content */}
                <div className="p-7 flex flex-col flex-1">
                  <p className="text-[11px] uppercase tracking-widest text-gray-400 mb-1">
                    {r.neighbourhood} · {r.location}
                  </p>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-gray-600 transition-colors">
                    {r.name}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-4">{r.description}</p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {r.features.slice(0, 4).map((f) => (
                      <span key={f} className="text-[11px] bg-gray-100 text-gray-600 px-2.5 py-1 uppercase tracking-wide">
                        {f}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto flex items-center justify-between">
                    <p className="text-sm font-semibold text-gray-900">{r.suites}</p>
                    <p className="text-[11px] text-gray-400 uppercase tracking-[0.12em] font-semibold group-hover:text-gray-700 transition-colors">
                      View Details →
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-4">Building Features</p>
            <h2 className="text-4xl font-bold text-gray-900">Everything you need, included.</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {amenities.map((a) => (
              <div key={a.label} className="bg-white p-5 sm:p-8 text-center shadow-sm">
                <div className="relative w-10 h-10 mx-auto mb-4">
                  <Image src={a.icon} alt={a.label} fill className="object-contain" />
                </div>
                <p className="text-sm font-semibold text-gray-900">{a.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Renter info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
          {[
            {
              title: "How to Apply",
              desc: "Our application process is simple and transparent. Browse available suites, book a showing online, and submit your application with proof of income and references.",
            },
            {
              title: "What's Included",
              desc: "All suites include window coverings and professional property management. Select suites include in-suite laundry. Building amenities vary by community.",
            },
            {
              title: "Tenant Rights",
              desc: "We operate under BC's Residential Tenancy Act and are committed to fair and transparent tenancy practices for all residents.",
            },
          ].map((item) => (
            <div key={item.title} className="border-t-2 border-gray-900 pt-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-500 leading-relaxed text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-900 text-center px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Find your next home.</h2>
        <p className="text-gray-400 max-w-lg mx-auto mb-10">
          Browse available suites, book a showing, or get in touch with our rental
          team to learn about upcoming availability.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/customer-service" className="bg-white text-gray-900 px-8 py-4 text-sm font-semibold uppercase tracking-wider hover:bg-gray-100 transition-colors">
            Contact Rental Team
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}
