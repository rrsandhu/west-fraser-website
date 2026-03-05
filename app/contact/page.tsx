import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact | West Fraser Construction",
  description:
    "Request a quote or book a consultation with West Fraser Construction. We respond within one business day.",
};

const contactInfo = [
  {
    label: "Office",
    lines: ["11411 131 Street", "Surrey, BC  V3R 2T9"],
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="text-[#c9973a]">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    label: "Phone",
    lines: ["604-582-8500"],
    href: "tel:+16045828500",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="text-[#c9973a]">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.8a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.56 3h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 10.9a16 16 0 0 0 6 6l.9-.9a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
  {
    label: "Email",
    lines: ["info@wfconstruction.ca"],
    href: "mailto:info@wfconstruction.ca",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="text-[#c9973a]">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
  {
    label: "Hours",
    lines: ["Monday – Friday", "8:00 AM – 5:00 PM PST"],
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="text-[#c9973a]">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
];

export default function ContactPage() {
  return (
    <>
      <Navbar />

      {/* Page Header */}
      <section className="bg-[#1a2e44] pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs uppercase tracking-[0.3em] text-[#c9973a] font-semibold mb-4">Get in Touch</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-4">
            Request a Quote
          </h1>
          <p className="text-white/60 text-lg max-w-xl leading-relaxed">
            Tell us about your project. We&apos;ll review your inquiry and follow up within one business day.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="py-20 bg-[#f7f5f1]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-[2fr_1fr] gap-12 lg:gap-16 items-start">

            {/* Form */}
            <div className="bg-white p-8 md:p-12 border border-gray-100 shadow-sm">
              <h2 className="text-2xl font-bold text-[#1a2e44] mb-2">Send Us a Message</h2>
              <p className="text-gray-500 text-sm mb-8">
                Fields marked with <span className="text-[#c9973a] font-semibold">*</span> are required.
              </p>
              <ContactForm />
            </div>

            {/* Contact info + sidebar */}
            <div className="space-y-6">
              {/* Info cards */}
              {contactInfo.map((item) => (
                <div key={item.label} className="bg-white border border-gray-100 p-6 flex gap-4 items-start">
                  <div className="mt-0.5 shrink-0">{item.icon}</div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.15em] text-gray-400 mb-1.5">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-sm font-medium text-[#1a2e44] hover:text-[#c9973a] transition-colors leading-relaxed"
                      >
                        {item.lines.join("\n")}
                      </a>
                    ) : (
                      <div className="text-sm text-[#1a2e44] leading-relaxed">
                        {item.lines.map((line) => (
                          <div key={line}>{line}</div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}

              {/* Promise block */}
              <div className="bg-[#1a2e44] p-6">
                <p className="text-xs uppercase tracking-[0.2em] text-[#c9973a] font-semibold mb-3">Our Promise</p>
                <p className="text-white/80 text-sm leading-relaxed">
                  Every inquiry gets a personal response — not an automated reply. We&apos;ll read your project details, ask the right questions, and give you honest feedback about how we can help.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What happens next */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <p className="text-xs uppercase tracking-[0.3em] text-[#c9973a] font-semibold mb-3">What to Expect</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a2e44]">What happens after you reach out.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-0 border border-gray-200">
            {[
              {
                num: "01",
                title: "We Review Your Inquiry",
                desc: "Within one business day, a member of our team reviews your project details and determines the right fit.",
              },
              {
                num: "02",
                title: "Discovery Call",
                desc: "We schedule a brief call to understand your scope, timeline, budget, and any constraints.",
              },
              {
                num: "03",
                title: "Proposal",
                desc: "We prepare a tailored proposal — whether that's a preliminary budget, service agreement, or design-build contract.",
              },
            ].map((step, i) => (
              <div
                key={step.num}
                className={`p-8 lg:p-10 ${i < 2 ? "border-b md:border-b-0 md:border-r border-gray-200" : ""}`}
              >
                <div className="text-5xl font-bold text-gray-100 leading-none mb-4">{step.num}</div>
                <h3 className="text-lg font-bold text-[#1a2e44] mb-3">{step.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
