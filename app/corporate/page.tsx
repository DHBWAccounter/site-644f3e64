import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import Link from "next/link";

export const metadata = {
  title: "Corporate membership — Bitcoin Association Switzerland",
};

export default function CorporatePage() {
  return (
    <>
      <Header />

      <main className="flex-1 bg-white">
        {/* Breadcrumb */}
        <div className="bg-gray-light border-b border-gray-200">
          <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <nav className="flex items-center space-x-2 text-sm text-gray-600">
              <span className="text-gray-400">membership</span>
              <span className="text-gray-400">/</span>
              <Link href="/private" className="hover:text-primary transition-colors">
                Private
              </Link>
              <span className="text-gray-400">/</span>
              <span className="text-primary">Corporate</span>
              <span className="text-gray-400">/</span>
              <Link href="/our-corporate-members" className="hover:text-primary transition-colors">
                Our Corporate Members
              </Link>
            </nav>
          </div>
        </div>

        <section className="py-12 md:py-16">
          <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl md:text-4xl font-bold text-dark mb-8">
              Corporate Membership
            </h1>

            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <p>
                Corporate membership in Bitcoin Association Switzerland offers companies the opportunity to support our mission and connect with the Swiss Bitcoin community.
              </p>

              <h2 className="text-2xl font-bold text-dark mt-8 mb-4">
                Benefits
              </h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Logo displayed on our website</li>
                <li>Access to member-only events and discussions</li>
                <li>Networking opportunities with other Bitcoin companies</li>
                <li>Input on association activities and direction</li>
                <li>Support Bitcoin education and adoption in Switzerland</li>
              </ul>

              <h2 className="text-2xl font-bold text-dark mt-8 mb-4">
                Membership Fee
              </h2>
              <p>
                The annual corporate membership fee is CHF 380, payable in Bitcoin.
              </p>

              <h2 className="text-2xl font-bold text-dark mt-8 mb-4">
                Application Process
              </h2>
              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li>
                  Send an application to{" "}
                  <a
                    href="mailto:info@bitcoinassociation.ch"
                    className="text-primary hover:underline"
                  >
                    info@bitcoinassociation.ch
                  </a>{" "}
                  introducing your company and explaining your connection to the Swiss Bitcoin ecosystem.
                </li>
                <li>
                  The board will review your application and respond within 14 days.
                </li>
                <li>
                  Upon acceptance, send the membership fee (CHF 380 equivalent) to our Bitcoin address:
                  <p className="font-mono bg-gray-100 p-3 rounded text-sm break-all my-4">
                    bc1q4rw988vc977354c70qae7m6k4zj45plksm47g0sek36zhe3adv5ss7w9ju
                  </p>
                </li>
                <li>
                  Email your transaction ID to confirm payment.
                </li>
                <li>
                  Once confirmed, send us your logo to be added to the website.
                </li>
              </ol>

              <h2 className="text-2xl font-bold text-dark mt-8 mb-4">
                Renewal
              </h2>
              <p>
                Corporate memberships are valid for one year from the date of acceptance. Renewal notices will be sent before expiration.
              </p>

              <div className="mt-8">
                <Link
                  href="/our-corporate-members"
                  className="inline-flex items-center px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors"
                >
                  View Current Corporate Members
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}