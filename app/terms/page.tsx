import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export const metadata = {
  title: "Terms and Conditions — Bitcoin Association Switzerland",
};

export default function TermsPage() {
  return (
    <>
      <Header />

      <main className="flex-1 bg-white">
        <section className="py-12 md:py-16">
          <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl md:text-4xl font-bold text-dark mb-8">
              Terms and Conditions
            </h1>

            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <p>
                These Terms and Conditions govern your use of the Bitcoin Association Switzerland website and your membership in the association.
              </p>

              <h2 className="text-2xl font-bold text-dark mt-8 mb-4">
                1. Membership
              </h2>
              <p>
                Membership in Bitcoin Association Switzerland is open to individuals and organizations who support our mission. Membership fees are non-refundable.
              </p>

              <h2 className="text-2xl font-bold text-dark mt-8 mb-4">
                2. Code of Conduct
              </h2>
              <p>
                Members and event participants are expected to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Treat others with respect and professionalism</li>
                <li>Not engage in harassment or discriminatory behavior</li>
                <li>Respect intellectual property rights</li>
                <li>Not promote scams or fraudulent schemes</li>
              </ul>

              <h2 className="text-2xl font-bold text-dark mt-8 mb-4">
                3. Website Use
              </h2>
              <p>
                The content on this website is provided for informational purposes only. We do not provide financial advice. Always do your own research before making any investment decisions.
              </p>

              <h2 className="text-2xl font-bold text-dark mt-8 mb-4">
                4. Intellectual Property
              </h2>
              <p>
                All content on this website, including text, graphics, logos, and images, is the property of Bitcoin Association Switzerland or its content suppliers and is protected by copyright laws.
              </p>

              <h2 className="text-2xl font-bold text-dark mt-8 mb-4">
                5. Limitation of Liability
              </h2>
              <p>
                Bitcoin Association Switzerland and its board members shall not be liable for any direct, indirect, incidental, special, or consequential damages resulting from the use or inability to use our services or website.
              </p>

              <h2 className="text-2xl font-bold text-dark mt-8 mb-4">
                6. Disclaimer
              </h2>
              <p>
                Corporate members listed on our website are not liable for any conduct or official messages of BAS; nor is BAS responsible for the conduct and/or business of the listed organizations.
              </p>

              <h2 className="text-2xl font-bold text-dark mt-8 mb-4">
                7. Governing Law
              </h2>
              <p>
                These Terms and Conditions are governed by the laws of Switzerland. Any disputes shall be subject to the jurisdiction of the courts of Zurich, Switzerland.
              </p>

              <h2 className="text-2xl font-bold text-dark mt-8 mb-4">
                8. Changes to Terms
              </h2>
              <p>
                We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to this page.
              </p>

              <h2 className="text-2xl font-bold text-dark mt-8 mb-4">
                9. Contact
              </h2>
              <p>
                For questions about these terms, please contact us at{" "}
                <a
                  href="mailto:info@bitcoinassociation.ch"
                  className="text-primary hover:underline"
                >
                  info@bitcoinassociation.ch
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}