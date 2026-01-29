import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import Link from "next/link";

export const metadata = {
  title: "Private membership — Bitcoin Association Switzerland",
};

export default function PrivateMembershipPage() {
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
              <Link href="/private" className="text-primary hover:underline">
                Private
              </Link>
              <span className="text-gray-400">/</span>
              <Link href="/corporate" className="hover:text-primary transition-colors">
                Corporate
              </Link>
              <span className="text-gray-400">/</span>
              <Link href="/our-corporate-members" className="hover:text-primary transition-colors">
                Our Corporate Members
              </Link>
            </nav>
          </div>
        </div>

        {/* Content */}
        <section className="py-12 md:py-16">
          <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl md:text-4xl font-bold text-dark mb-8">
              New/Renew Membership (2024 - 2025 edition)
            </h1>

            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <div>
                <p className="font-semibold text-dark mb-2">
                  How do I renew my membership?
                </p>
                <p>
                  Pay your membership fee to the Bitcoin Association Switzerland&apos;s wallet address:
                </p>
                <p className="font-mono bg-gray-100 p-3 rounded text-sm break-all my-4">
                  bc1q4rw988vc977354c70qae7m6k4zj45plksm47g0sek36zhe3adv5ss7w9ju
                </p>
                <p>
                  Once payment is confirmed on-chain, go to the membership form submission page:
                </p>
                <p className="my-4">
                  <Link
                    href="/membership-form"
                    className="text-primary font-semibold hover:underline"
                  >
                    https://www.bitcoinassociation.ch/membership-form
                  </Link>
                </p>
                <p>
                  Fill out the form in its entirety, entering your Transaction ID and, optionally, your Telegram handle to be added to the BAS members group. If possible, specify how many years of membership (minimum 1) you have paid for. The number of years of membership will be automatically calculated based on the amount of BTC paid.
                </p>
                <p>
                  Within 7 days, we will send you a confirmation that your membership status has been confirmed, or - if we have any doubts - we may ask you to provide additional information.
                </p>
                <p className="font-semibold text-dark">
                  No membership fees are returned if you fail to provide sufficient information.
                </p>
              </div>

              <div>
                <p className="font-semibold text-dark mb-2">
                  What&apos;s the membership fee?
                </p>
                <p>
                  The annual membership fee is CHF 21, payable in bitcoin on-chain (with secondary layer payment solutions coming soon). If you wish to pay for more than 1 year in one payment, please make a note in the comment section of the membership form.
                </p>
              </div>

              <div>
                <p className="font-semibold text-dark mb-2">
                  What if I haven&apos;t been a member before?
                </p>
                <p>
                  That&apos;s ok, we don&apos;t judge :-) you can follow the same process as outlined above. If we don&apos;t know you, chances are a little higher we ask for additional information.
                </p>
              </div>

              <div>
                <p className="font-semibold text-dark mb-2">
                  What about corporate members?
                </p>
                <p>
                  If you already are a corporate member (with your logo{" "}
                  <Link href="/our-corporate-members" className="text-primary hover:underline">
                    here
                  </Link>
                  ) and your membership is expired, you can complete the renewal payment and send us an email application with all the information indicated (Name, TransactionID, number of years paid etc.) at{" "}
                  <a
                    href="mailto:info@bitcoinassociation.ch"
                    className="text-primary hover:underline"
                  >
                    info@bitcoinassociation.ch
                  </a>
                  , the corporate membership fee is CHF 380.
                </p>
                <p>
                  If you are not a corporate member yet, you can send an application to{" "}
                  <a
                    href="mailto:info@bitcoinassociation.ch"
                    className="text-primary hover:underline"
                  >
                    info@bitcoinassociation.ch
                  </a>{" "}
                  where you introduce your company and explain how you are connected to the Swiss ecosystem.
                </p>
                <p>
                  You will hear back within 14 days whether you&apos;ve been accepted or not. Once you have received confirmation that you have been accepted, you will need to send the equivalent of at least CHF 380 to the Bitcoin Association Switzerland&apos;s wallet:
                </p>
                <p className="font-mono bg-gray-100 p-3 rounded text-sm break-all my-4">
                  bc1q4rw988vc977354c70qae7m6k4zj45plksm47g0sek36zhe3adv5ss7w9ju
                </p>
                <p>
                  followed by an email to the two addresses mentioned stating your Transaction ID.
                </p>
                <p>
                  Once we confirm receipt of the funds, you can send us the logo to be added to the website.
                </p>
                <p>
                  The process is also outlined{" "}
                  <Link href="/corporate" className="text-primary hover:underline">
                    here
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}