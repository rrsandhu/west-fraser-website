import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Customer Service | West Fraser Developments",
  description:
    "Contact West Fraser Developments' customer care team for warranty claims, maintenance requests, and homeowner support. We're here to help.",
};

const faqs = [
  {
    q: "How do I submit a warranty claim for my new home?",
    a: "You can submit a warranty claim through our online homeowner portal, by emailing customercare@wfdev.ca, or by calling our Customer Care line at 604-582-8500. Please have your address and purchase contract number handy. All new homes come with a 2-5-10 warranty as required by BC's Homeowner Protection Act.",
  },
  {
    q: "What is the 2-5-10 home warranty?",
    a: "The 2-5-10 warranty is mandatory for new homes in BC: 2 years on labour and materials, 5 years on the building envelope (windows, doors, roofing), and 10 years on the structural components. West Fraser Developments works with certified third-party warranty providers to ensure your home is fully protected.",
  },
  {
    q: "Who do I contact for a maintenance issue in my rental suite?",
    a: "Rental residents can submit maintenance requests through the resident portal, by emailing info@wfdev.ca, or by calling the on-site property management office. Emergency maintenance (water leaks, heating failure, lock issues) is available 24/7.",
  },
  {
    q: "When will I receive my completion date for my presale purchase?",
    a: "Completion dates are communicated through your real estate agent and directly via email as the project progresses. You will receive a minimum of 10 days' notice before your final completion date as required by the Real Estate Development Marketing Act (REDMA).",
  },
  {
    q: "Can I make changes to my home before completion?",
    a: "Depending on the stage of construction, we offer a variety of colour schemes, upgrade packages, and optional modifications through our Décor Centre. Our sales team will contact you when your home is eligible for selections. Changes after a certain construction milestone may not be possible.",
  },
  {
    q: "How do I register for a new project or VIP presale event?",
    a: "Visit the project page on our website and click 'Register' to be added to our priority list. You'll receive early access to pricing, floor plans, and exclusive sales events before the general public opening.",
  },
  {
    q: "What documents will I need at completion?",
    a: "At completion you will need government-issued photo ID, a certified cheque or bank draft for the balance due (as confirmed by your lawyer), proof of home insurance, and your mortgage commitment letter. Your lawyer or notary will guide you through the full process.",
  },
  {
    q: "Does West Fraser Developments manage its own rental properties?",
    a: "Yes. West Fraser Developments's in-house property management team manages all of our purpose-built rental communities. This means faster response times, consistent standards, and a direct line of communication with a team that cares about the long-term quality of your home.",
  },
];


export default function CustomerServicePage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative h-[38vh] md:h-[45vh] flex items-end overflow-hidden bg-gray-700">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-600" />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-16 w-full">
          <p className="text-xs uppercase tracking-[0.3em] text-white/50 mb-3">
            West Fraser Developments
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white">Customer Service</h1>
        </div>
      </section>

      {/* Quick contact bar */}
      <section className="bg-gray-900 py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <p className="text-gray-300">
            Mon – Fri: 8:30 AM – 4:30 PM &nbsp;|&nbsp; After-hours emergency line available for rental residents
          </p>
          <div className="flex flex-wrap gap-6">
            <a href="tel:+16045828500" className="text-white font-semibold hover:text-gray-300 transition-colors">
              📞 604-582-8500
            </a>
            <a href="mailto:customercare@wfdev.ca" className="text-white font-semibold hover:text-gray-300 transition-colors">
              ✉ customercare@wfdev.ca
            </a>
          </div>
        </div>
      </section>

      {/* Contact form + info */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 md:gap-20">
          {/* Form */}
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-4">Get in Touch</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Send Us a Message</h2>
            <ContactForm />
          </div>

          {/* Contact details */}
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-4">Office</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Visit Us</h2>
            <div className="space-y-8 text-sm">
              <div>
                <h4 className="font-bold text-gray-900 uppercase tracking-wider text-xs mb-2">Head Office</h4>
                <p className="text-gray-500 leading-7">
                  11411 131 Street<br />
                  Surrey, BC, V3R 2T9<br />
                  <a href="tel:+16045828500" className="text-gray-900 font-semibold hover:underline">T: 604-582-8500</a><br />
                  <a href="mailto:info@wfdev.ca" className="text-gray-900 font-semibold hover:underline">info@wfdev.ca</a>
                </p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 uppercase tracking-wider text-xs mb-2">Customer Care</h4>
                <p className="text-gray-500 leading-7">
                  <a href="tel:+16045828500" className="text-gray-900 font-semibold hover:underline">T: 604-582-8500</a><br />
                  <a href="mailto:customercare@wfdev.ca" className="text-gray-900 font-semibold hover:underline">customercare@wfdev.ca</a><br />
                  Mon – Fri: 8:30 AM – 4:30 PM
                </p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 uppercase tracking-wider text-xs mb-2">Rental Inquiries</h4>
                <p className="text-gray-500 leading-7">
                  <a href="mailto:info@wfdev.ca" className="text-gray-900 font-semibold hover:underline">info@wfdev.ca</a><br />
                  Mon – Fri: 9:00 AM – 5:00 PM<br />
                  Sat: 10:00 AM – 4:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-14">
            <p className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-4">FAQ</p>
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900">Frequently Asked Questions</h2>
          </div>
          <div className="divide-y divide-gray-100">
            {faqs.map((faq) => (
              <details key={faq.q} className="group py-6">
                <summary className="flex items-center justify-between cursor-pointer list-none gap-6">
                  <span className="text-base font-semibold text-gray-900 group-open:text-gray-600">
                    {faq.q}
                  </span>
                  <span className="shrink-0 text-gray-400 group-open:rotate-45 transition-transform text-xl leading-none">
                    +
                  </span>
                </summary>
                <p className="mt-4 text-gray-500 leading-relaxed text-sm pr-8">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
