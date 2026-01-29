import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export const metadata = {
  title: "Finances — Bitcoin Association Switzerland",
};

export default function FinancesPage() {
  return (
    <>
      <Header />

      <main className="flex-1 bg-white">
        <section className="py-12 md:py-16">
          <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl md:text-4xl font-bold text-dark mb-8">
              Finances
            </h1>

            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <p>
                Bitcoin Association Switzerland is committed to transparency in its financial operations. As a non-profit organization, we rely on membership fees and donations to fund our activities.
              </p>

              <h2 className="text-2xl font-bold text-dark mt-8 mb-4">
                Funding Sources
              </h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Membership fees (Private: CHF 21/year, Corporate: CHF 380/year)</li>
                <li>Donations from supporters</li>
                <li>Event sponsorships</li>
              </ul>

              <h2 className="text-2xl font-bold text-dark mt-8 mb-4">
                Expenses
              </h2>
              <p>
                Our funds are used for:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Organizing meetups and events</li>
                <li>Legal and regulatory work</li>
                <li>Educational materials and outreach</li>
                <li>Administrative costs</li>
              </ul>

              <h2 className="text-2xl font-bold text-dark mt-8 mb-4">
                Financial Reports
              </h2>
              <p>
                Annual financial reports are presented at our General Assembly and available to members upon request.
              </p>

              <h2 className="text-2xl font-bold text-dark mt-8 mb-4">
                Bitcoin Treasury
              </h2>
              <p>
                As a Bitcoin-focused organization, we maintain a treasury in Bitcoin. This aligns with our mission and demonstrates our commitment to the technology we promote.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}