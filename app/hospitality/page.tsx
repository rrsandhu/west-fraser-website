import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { hotels } from "@/lib/data/hotels";

export const metadata: Metadata = {
  title: "Hospitality | West Fraser Developments",
  description:
    "West Fraser Developments has developed and operated hotel properties under Hyatt, Best Western, Ramada, and Sigma Inn & Suites brands across BC and the Prairies.",
};

const stats = [
  { value: "8+", label: "Hotel Properties" },
  { value: "900+", label: "Hotel Rooms" },
  { value: "4", label: "Provinces" },
  { value: "15+", label: "Years in Hospitality" },
];

export default function HospitalityPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative h-[45vh] md:h-[60vh] flex items-end overflow-hidden bg-gray-900">
        <Image
          src="https://westfraserdev.ca/wp-content/uploads/2019/07/kelownacrop-daytime.png"
          alt="West Fraser Hospitality"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-black/75" />
        <div className="relative z-10 max-w-[1280px] mx-auto px-8 pb-20 w-full">
          <p className="text-[13px] uppercase tracking-[0.14em] text-white/50 font-semibold mb-4">
            West Fraser Developments
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.05] tracking-[-0.02em]">
            Hospitality
          </h1>
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
      <section className="py-16 md:py-[90px] bg-white">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8 grid md:grid-cols-2 gap-10 md:gap-20 items-center">
          <div>
            <p className="text-[12px] uppercase tracking-[0.14em] text-gray-400 font-semibold mb-5">
              Hotel Development
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#111318] leading-[1.1] tracking-[-0.02em]">
              Exceptional stays,
              <br />
              exceptional places.
            </h2>
          </div>
          <div>
            <p className="text-base md:text-[17px] text-[#6c7280] leading-[1.75]">
              West Fraser Developments has developed and operated hotel properties under
              internationally recognized brands including Hyatt, Best Western, Ramada, and
              our own Sigma Inn &amp; Suites brand — from British Columbia to the Prairies.
              Our hospitality portfolio reflects the same commitment to quality, guest
              experience, and long-term value that defines all our development work.
            </p>
          </div>
        </div>
      </section>

      {/* Hotels grid */}
      <section className="pb-16 md:pb-[90px] bg-white">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
            {hotels.map((h) => (
              <a
                key={h.id}
                href={h.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group overflow-hidden rounded-xl border border-gray-100 shadow-[0_2px_16px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_40px_rgba(0,0,0,0.11)] transition-shadow duration-300 block bg-white"
              >
                <div className="relative h-56 w-full overflow-hidden bg-gray-100">
                  <Image
                    src={h.img}
                    alt={h.name}
                    fill
                    className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                  />
                </div>
                <div className="p-7">
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-[11px] uppercase tracking-[0.12em] text-gray-400 font-semibold">
                      {h.brand}
                    </p>
                    <p className="text-[11px] text-gray-400 tracking-wide">{h.rooms}</p>
                  </div>
                  <h3 className="text-[18px] font-bold text-[#111318] tracking-[-0.01em] leading-snug mb-1 group-hover:text-gray-500 transition-colors">
                    {h.name}
                  </h3>
                  <p className="text-[13px] text-[#6c7280] mb-4">
                    {h.location} &middot; {h.year}
                  </p>
                  <p className="text-[14px] text-[#6c7280] leading-[1.65] mb-6">
                    {h.description}
                  </p>
                  <p className="text-[11px] text-gray-400 uppercase tracking-[0.12em] font-semibold group-hover:text-gray-700 transition-colors">
                    Book Now →
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Lobby interior feature */}
      <section className="py-16 md:py-[90px] bg-[#f8fafc]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8 grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="relative h-[240px] md:h-[380px] overflow-hidden rounded-xl bg-gray-200">
            <Image
              src="https://westfraserdev.ca/wp-content/uploads/2021/11/Lobby_001.jpg"
              alt="Hotel Lobby"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-[12px] uppercase tracking-[0.14em] text-gray-400 font-semibold mb-5">
              Our Approach
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#111318] leading-[1.1] tracking-[-0.02em] mb-6">
              Built to brand standard.
              <br />
              Built to last.
            </h2>
            <p className="text-base md:text-[17px] text-[#6c7280] leading-[1.75] mb-8">
              Every West Fraser hotel is designed and constructed to meet or exceed the
              brand standards of our franchise partners. From lobby design to room
              configuration, we invest in quality that drives occupancy, guest satisfaction,
              and long-term asset value.
            </p>
            <a
              href="/customer-service"
              className="inline-block bg-[#111318] text-white px-8 py-4 text-[13px] font-semibold uppercase tracking-[0.12em] hover:bg-gray-700 transition-colors"
            >
              Hospitality Inquiries
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
