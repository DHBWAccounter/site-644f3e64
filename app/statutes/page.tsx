import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export const metadata = {
  title: "Statutes — Bitcoin Association Switzerland",
};

export default function StatutesPage() {
  return (
    <>
      <Header />

      <main className="flex-1 bg-white">
        <section className="py-12 md:py-16">
          <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl md:text-4xl font-bold text-dark mb-8">
              Statutes
            </h1>

            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <p>
                The statutes of Bitcoin Association Switzerland define our purpose, organization, and governance structure.
              </p>

              <h2 className="text-2xl font-bold text-dark mt-8 mb-4">
                Article 1: Name and Domicile
              </h2>
              <p>
                Under the name &quot;Bitcoin Association Switzerland&quot; exists an association according to articles 60 et seq. of the Swiss Civil Code. The domicile of the association is Zurich.
              </p>

              <h2 className="text-2xl font-bold text-dark mt-8 mb-4">
                Article 2: Purpose
              </h2>
              <p>
                The purpose of the association is to promote Bitcoin and related technologies, educate the public, and provide a platform for exchange among enthusiasts.
              </p>

              <h2 className="text-2xl font-bold text-dark mt-8 mb-4">
                Article 3: Membership
              </h2>
              <p>
                Membership is open to individuals and organizations that support the purpose of the association. Members are admitted by the board and pay annual membership fees.
              </p>

              <h2 className="text-2xl font-bold text-dark mt-8 mb-4">
                Article 4: Organs
              </h2>
              <p>
                The organs of the association are:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>The General Assembly</li>
                <li>The Board</li>
                <li>The Auditor (optional)</li>
              </ul>

              <h2 className="text-2xl font-bold text-dark mt-8 mb-4">
                Article 5: General Assembly
              </h2>
              <p>
                The General Assembly is the supreme organ of the association. It meets annually and decides on important matters including the election of the board and approval of financial reports.
              </p>

              <h2 className="text-2xl font-bold text-dark mt-8 mb-4">
                Full Statutes
              </h2>
              <p>
                The complete statutes are available upon request. Please contact us at{" "}
                <a
                  href="mailto:info@bitcoinassociation.ch"
                  className="text-primary hover:underline"
                >
                  info@bitcoinassociation.ch
                </a>{" "}
                for more information.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}