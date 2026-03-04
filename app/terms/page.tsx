import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Use | West Fraser Developments",
  description: "Terms of Use for the West Fraser Developments Ltd. website.",
};

export default function TermsPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative h-[30vh] flex items-end overflow-hidden bg-gray-900">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-700" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-12 w-full">
          <p className="text-xs uppercase tracking-[0.3em] text-white/50 mb-3">Legal</p>
          <h1 className="text-5xl md:text-6xl font-bold text-white">Terms of Use</h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-sm text-gray-400 mb-12">Last updated: March 2025</p>

          <div className="prose prose-gray max-w-none space-y-10 text-gray-600 leading-relaxed">

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
              <p>
                By accessing or using the West Fraser Developments Ltd. website (the &ldquo;Site&rdquo;), you agree to be
                bound by these Terms of Use (&ldquo;Terms&rdquo;). If you do not agree to these Terms, please do not use
                the Site. West Fraser Developments Ltd. (&ldquo;West Fraser,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) reserves
                the right to modify these Terms at any time. Your continued use of the Site following any
                changes constitutes your acceptance of the revised Terms.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4">2. Use of the Site</h2>
              <p className="mb-3">You agree to use the Site only for lawful purposes and in a manner that does not infringe the rights of others. You must not:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Use the Site in any way that violates applicable local, provincial, national, or international law or regulation;</li>
                <li>Transmit unsolicited or unauthorised advertising or promotional material;</li>
                <li>Attempt to gain unauthorised access to any part of the Site or its related systems;</li>
                <li>Engage in any conduct that restricts or inhibits anyone&apos;s use or enjoyment of the Site.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4">3. Intellectual Property</h2>
              <p>
                All content on this Site — including text, images, graphics, logos, and design elements —
                is the property of West Fraser Developments Ltd. or its licensors and is protected by
                applicable Canadian and international copyright and intellectual property laws. You may not
                reproduce, distribute, or create derivative works from any content on this Site without
                our express written permission.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4">4. Accuracy of Information</h2>
              <p>
                The information on this Site is provided for general informational purposes only. While we
                strive to keep it accurate and up to date, we make no representations or warranties of any
                kind, express or implied, about the completeness, accuracy, reliability, or suitability of
                any information on the Site. Project details, pricing, availability, and renderings are
                subject to change without notice and do not constitute a binding offer or representation.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4">5. No Real Estate Advice</h2>
              <p>
                Nothing on this Site constitutes real estate, legal, financial, or investment advice.
                All purchase decisions should be made in consultation with qualified professionals and
                with reference to the applicable disclosure statement or offering documents. Renderings,
                floor plans, and specifications are for illustrative purposes only and may differ from
                completed construction.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4">6. Limitation of Liability</h2>
              <p>
                To the fullest extent permitted by applicable law, West Fraser Developments Ltd. shall
                not be liable for any indirect, incidental, special, consequential, or punitive damages
                arising from your use of, or inability to use, the Site or its content. Our total
                liability for any claim arising from your use of the Site shall not exceed one hundred
                Canadian dollars ($100 CAD).
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4">7. Third-Party Links</h2>
              <p>
                The Site may contain links to third-party websites for your convenience. We do not
                endorse or take responsibility for the content, privacy practices, or terms of any
                linked sites. Accessing third-party links is at your own risk.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4">8. Privacy</h2>
              <p>
                Your use of the Site is also governed by our{" "}
                <a href="/privacy" className="text-gray-900 underline hover:text-gray-600">
                  Privacy Policy
                </a>
                , which is incorporated into these Terms by reference. By using the Site, you consent
                to the collection and use of your information as described in the Privacy Policy.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4">9. Governing Law</h2>
              <p>
                These Terms are governed by and construed in accordance with the laws of the Province
                of British Columbia and the federal laws of Canada applicable therein. Any disputes
                arising under these Terms shall be subject to the exclusive jurisdiction of the courts
                of British Columbia.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4">10. Contact Us</h2>
              <p>
                If you have any questions about these Terms of Use, please contact us:
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
