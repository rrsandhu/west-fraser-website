import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { commercialProperties as properties } from "@/lib/data/commercial";

export const metadata: Metadata = {
  title: "Commercial Properties | West Fraser Developments",
  description:
    "West Fraser Developments' commercial portfolio spans retail, industrial, and mixed-use properties across Metro Vancouver. Enquire about leasing opportunities today.",
};

const offerings = [
  {
    title: "Retail Spaces",
    desc: "From neighbourhood-scale strip plazas to large-format community shopping centres, our retail portfolio attracts established national tenants and beloved local operators alike.",
    sqft: "Neighbourhood to Large-Format",
  },
  {
    title: "Industrial & Warehouse",
    desc: "Modern industrial and warehouse facilities with flexible configurations, excellent highway access, and purpose-built layouts for commercial and distribution operations.",
    sqft: "Custom configurations",
  },
  {
    title: "Mixed-Use",
    desc: "Ground-floor commercial space integrated into residential towers — highly visible, high-traffic locations with built-in customer bases from day one.",
    sqft: "Retail + Office + Residential",
  },
];

export default function CommercialPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative h-[45vh] md:h-[55vh] flex items-end overflow-hidden bg-gray-800">
        <Image
          src="/Evergreen%20Mall/photo-2.jpg"
          alt="West Fraser Developments Commercial"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-16 w-full">
          <p className="text-xs uppercase tracking-[0.3em] text-white/50 mb-3">
            West Fraser Developments
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white">Commercial</h1>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-gray-900 py-8">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: "30+", label: "Properties & Projects" },
            { value: "200,000+", label: "Sq Ft Commercial" },
            { value: "30+", label: "Years in BC" },
            { value: "5+", label: "Metro Vancouver Municipalities" },
          ].map((s) => (
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
            <p className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-4">Commercial Real Estate</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Spaces where <br />business thrives.
            </h2>
          </div>
          <div>
            <p className="text-gray-500 text-lg leading-relaxed mb-4">
              West Fraser Developments's commercial portfolio spans retail, industrial, and
              mixed-use properties across Metro Vancouver and the Lower Mainland. We develop
              and manage vibrant commercial environments that attract quality tenants
              and serve the communities around them.
            </p>
            <p className="text-gray-500 text-lg leading-relaxed">
              Our in-house leasing and property management teams ensure a seamless
              experience from inquiry to lease execution — and a long-term partnership
              focused on your success.
            </p>
          </div>
        </div>
      </section>

      {/* Offerings */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-12">What We Offer</p>
          <div className="grid md:grid-cols-3 gap-0 border border-gray-200">
            {offerings.map((o, i) => (
              <div
                key={o.title}
                className={`p-6 sm:p-8 md:p-10 ${i < offerings.length - 1 ? "md:border-r border-gray-200" : ""}`}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">{o.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">{o.desc}</p>
                <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold">{o.sqft}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Properties */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-2">Portfolio</p>
              <h2 className="text-2xl md:text-4xl font-bold text-gray-900">Featured Properties</h2>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {properties.map((p) => (
              <Link
                key={p.id}
                href={`/commercial/${p.id}`}
                className="group block overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow"
              >
                <div className="relative h-56 w-full overflow-hidden bg-gray-200">
                  {p.img && (
                    <Image
                      src={p.img}
                      alt={p.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  )}
                </div>
                <div className="p-7">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-[11px] uppercase tracking-widest text-gray-400">{p.type}</p>
                    <p className="text-[11px] text-gray-400">{p.size}</p>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">{p.name}</h3>
                  <p className="text-sm text-gray-400 mb-3">{p.location} · {p.year}</p>
                  <p className="text-sm text-gray-500 leading-relaxed mb-4">{p.description}</p>
                  <div className="flex items-center justify-between">
                    <p className="text-xs text-gray-400 font-medium">{p.anchor}</p>
                    <p className="text-[11px] text-gray-400 uppercase tracking-[0.12em] font-semibold group-hover:text-gray-700 transition-colors">View Details →</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why West Fraser Commercial */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-4">Why West Fraser Developments</p>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
                A long-term landlord. <br />A true partner.
              </h2>
              <p className="text-gray-400 leading-relaxed">
                We don't flip our properties. As a long-term holder and operator of
                commercial real estate, we invest in the success of our tenants and
                the vitality of our centres. Our in-house team handles leasing,
                property management, maintenance, and marketing — all under one roof.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { value: "4+", label: "Commercial Properties" },
                { value: "30+", label: "Years Experience" },
                { value: "5+", label: "Municipalities" },
                { value: "1993", label: "Since" },
              ].map((s) => (
                <div key={s.label} className="border border-gray-700 p-8">
                  <div className="text-4xl font-bold text-white mb-2">{s.value}</div>
                  <div className="text-sm text-gray-400">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leasing CTA */}
      <section className="py-20 bg-white text-center px-6">
        <p className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-4">Get in Touch</p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Interested in leasing?</h2>
        <p className="text-gray-500 max-w-lg mx-auto mb-10">
          Contact our commercial leasing team to discuss available spaces,
          upcoming opportunities, and how West Fraser Developments can support your business.
        </p>
        <a
          href="/customer-service"
          className="inline-block bg-gray-900 text-white px-10 py-4 text-sm font-semibold uppercase tracking-wider hover:bg-gray-700 transition-colors"
        >
          Contact Leasing Team
        </a>
      </section>

      <Footer />
    </>
  );
}
