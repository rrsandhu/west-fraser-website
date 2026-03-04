import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-12">

          {/* Column 1 — Address & contact */}
          <div className="md:col-span-2">
            <h4 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">
              West Fraser Developments
            </h4>
            <address className="not-italic text-sm leading-7">
              11411 131 Street<br />
              Surrey, BC, V3R 2T9<br />
              <a href="tel:+16045828500" className="hover:text-white transition-colors">
                T: 604-582-8500
              </a>
              <br />
              <a href="fax:+16045828505" className="hover:text-white transition-colors">
                F: 604-582-8505
              </a>
              <br />
              <a href="mailto:info@wfdev.ca" className="hover:text-white transition-colors mt-1 inline-block">
                info@wfdev.ca
              </a>
            </address>
          </div>

          {/* Column 2 — Site links */}
          <div>
            <h4 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">
              Properties
            </h4>
            <ul className="space-y-2 text-sm">
              {["Residential", "Apartment Rentals", "Commercial"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="hover:text-white transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Company + Social, Logo */}
          <div className="flex flex-col justify-between">
            <div>
              <h4 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">
                Company
              </h4>
              <ul className="space-y-2 text-sm mb-8">
                {["About", "Careers", "Customer Service", "Contact"].map((item) => (
                  <li key={item}>
                    <Link
                      href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                      className="hover:text-white transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Social icons */}
              <div className="flex items-center gap-4">
                {[
                  { label: "LinkedIn", href: "https://www.linkedin.com/company/westfraserdev", path: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z M4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" },
                  { label: "Instagram", href: "https://www.instagram.com/westfraserdev/", path: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37zm1.5-4.87h.01M7.5 20.5h9a4 4 0 0 0 4-4v-9a4 4 0 0 0-4-4h-9a4 4 0 0 0-4 4v9a4 4 0 0 0 4 4z" },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="text-gray-500 hover:text-white transition-colors"
                  >
                    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                      <path d={s.path} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            {/* Logo */}
            <div className="mt-10 self-end">
              <Link href="/" className="relative block h-10 w-40">
                <Image
                  src="/logo-white2.png"
                  alt="West Fraser Developments"
                  fill
                  className="object-contain object-right"
                />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between gap-3 text-xs">
          <p>© {new Date().getFullYear()} West Fraser Developments Ltd. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
