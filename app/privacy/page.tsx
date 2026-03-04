import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | West Fraser Developments",
  description: "Privacy Policy for West Fraser Developments Ltd.",
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative h-[30vh] flex items-end overflow-hidden bg-gray-900">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-700" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-12 w-full">
          <p className="text-xs uppercase tracking-[0.3em] text-white/50 mb-3">Legal</p>
          <h1 className="text-5xl md:text-6xl font-bold text-white">Privacy Policy</h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-sm text-gray-400 mb-12">Last updated: March 2025</p>

          <div className="prose prose-gray max-w-none space-y-10 text-gray-600 leading-relaxed">

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4">1. Introduction</h2>
              <p>
                West Fraser Developments Ltd. ("West Fraser," "we," "us," or "our") is committed to protecting
                the privacy of individuals who visit our website and interact with our services. This Privacy
                Policy explains how we collect, use, disclose, and safeguard your personal information in
                accordance with the <em>Personal Information Protection Act</em> (PIPA) of British Columbia
                and applicable Canadian privacy legislation.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>
              <p className="mb-3">We may collect the following types of personal information:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Contact information</strong> — name, email address, phone number, and mailing address when you submit a contact form, register for a project, or inquire about a rental or leasing opportunity.</li>
                <li><strong>Purchase and tenancy information</strong> — information related to your purchase agreement, rental application, or tenancy, including financial and identification documents provided as part of those processes.</li>
                <li><strong>Website usage data</strong> — browser type, IP address, pages visited, and time spent on our site, collected automatically through cookies and analytics tools.</li>
                <li><strong>Communications</strong> — records of your correspondence with us, including emails, phone calls, and form submissions.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>
              <p className="mb-3">We use your personal information to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Respond to your inquiries and provide customer service;</li>
                <li>Process rental applications and manage tenancy agreements;</li>
                <li>Send project updates, presale information, and marketing communications (where you have consented);</li>
                <li>Comply with legal and regulatory obligations;</li>
                <li>Improve our website and services through analytics.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4">4. Disclosure of Your Information</h2>
              <p>
                We do not sell your personal information. We may share your information with trusted third parties
                who assist us in operating our business (such as property management software providers, legal
                advisors, and marketing partners), subject to confidentiality agreements. We may also disclose
                information where required by law or regulatory authority.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4">5. Cookies</h2>
              <p>
                Our website uses cookies to enhance your browsing experience and gather analytics data. You may
                disable cookies through your browser settings; however, some features of our website may not
                function properly as a result.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4">6. Retention</h2>
              <p>
                We retain personal information only for as long as necessary to fulfill the purposes for which
                it was collected, or as required by law. When information is no longer needed, it is securely
                destroyed or anonymized.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4">7. Your Rights</h2>
              <p>
                You have the right to request access to, correction of, or deletion of your personal information
                held by us. To make such a request, please contact us at the address below. We will respond
                within 30 days.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4">8. Security</h2>
              <p>
                We take reasonable measures to protect your personal information from unauthorized access,
                disclosure, alteration, or destruction. However, no transmission over the internet is completely
                secure and we cannot guarantee absolute security.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4">9. Third-Party Links</h2>
              <p>
                Our website may contain links to third-party websites. We are not responsible for the privacy
                practices of those sites and encourage you to review their privacy policies independently.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4">10. Contact Us</h2>
              <p>
                For questions or concerns regarding this Privacy Policy or the handling of your personal
                information, please contact:
              </p>
              <address className="not-italic mt-4 text-sm leading-7 border-l-2 border-gray-200 pl-4">
                <strong className="text-gray-900">West Fraser Developments Ltd.</strong><br />
                11411 131 Street<br />
                Surrey, BC, V3R 2T9<br />
                <a href="tel:+16045828500" className="text-gray-900 hover:underline">T: 604-582-8500</a><br />
                <a href="mailto:info@wfdev.ca" className="text-gray-900 hover:underline">info@wfdev.ca</a>
              </address>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
