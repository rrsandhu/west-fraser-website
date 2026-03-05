import Link from "next/link";

const serviceLinks = [
  { label: "Design-Build", href: "/services#design-build" },
  { label: "General Contracting", href: "/services#general-contracting" },
  { label: "Pre-Construction", href: "/services#pre-construction" },
  { label: "Tenant Improvements", href: "/services#tenant-improvements" },
  { label: "Renovations & Upgrades", href: "/services#renovations" },
];

const companyLinks = [
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#1a2e44] text-gray-400">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">

          {/* Column 1 — Brand + Address */}
          <div className="lg:col-span-2">
            {/* Logo */}
            <div className="flex items-center gap-2.5 mb-6">
              <svg width="26" height="26" viewBox="0 0 28 28" fill="none" className="text-[#c9973a]">
                <rect x="4" y="15" width="20" height="4" rx="1" fill="currentColor" />
                <path d="M7 15V11C7 7.686 10.134 5 14 5C17.866 5 21 7.686 21 11V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M11 15V12C11 10.343 12.343 9 14 9C15.657 9 17 10.343 17 12V15" fill="currentColor" />
              </svg>
              <div>
                <div className="text-sm font-bold text-white tracking-wide leading-none font-[family-name:var(--font-manrope)]">
                  West Fraser
                </div>
                <div className="text-[10px] font-semibold tracking-[0.2em] uppercase leading-none mt-0.5 text-[#c9973a]">
                  Construction
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-5 max-w-xs">
              Full-service design-build and general contracting for commercial, industrial, and residential projects across BC.
            </p>
            <address className="not-italic text-sm leading-7 text-gray-400">
              11411 131 Street<br />
              Surrey, BC, V3R 2T9<br />
              <a href="tel:+16045828500" className="hover:text-white transition-colors">
                T: 604-582-8500
              </a>
              <br />
              <a href="mailto:info@wfconstruction.ca" className="hover:text-white transition-colors mt-1 inline-block">
                info@wfconstruction.ca
              </a>
            </address>
          </div>

          {/* Column 2 — Services */}
          <div>
            <h4 className="text-white text-xs font-semibold uppercase tracking-[0.2em] mb-5">
              Services
            </h4>
            <ul className="space-y-3 text-sm">
              {serviceLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Company */}
          <div>
            <h4 className="text-white text-xs font-semibold uppercase tracking-[0.2em] mb-5">
              Company
            </h4>
            <ul className="space-y-3 text-sm mb-8">
              {companyLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <Link
              href="/contact"
              className="inline-block bg-[#c9973a] text-white text-xs font-semibold px-5 py-3 tracking-wider uppercase hover:bg-[#a87828] transition-colors"
            >
              Request a Quote
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between gap-3 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} West Fraser Construction Ltd. All rights reserved. A division of West Fraser Developments.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
