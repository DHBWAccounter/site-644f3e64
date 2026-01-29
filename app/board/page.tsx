import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export const metadata = {
  title: "Board — Bitcoin Association Switzerland",
};

export default function BoardPage() {
  return (
    <>
      <Header />

      <main className="flex-1 bg-white">
        <section className="py-12 md:py-16">
          <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl md:text-4xl font-bold text-dark mb-8">
              Board of Directors
            </h1>

            <p className="text-gray-600 mb-12 max-w-3xl">
              The Bitcoin Association Switzerland is governed by a board elected by its members. The current board was elected at the 2024 General Assembly.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Board Member */}
              <div className="bg-gray-light rounded-lg p-6">
                <h3 className="text-lg font-semibold text-dark mb-1">
                  President
                </h3>
                <p className="text-primary font-medium mb-2">Position</p>
                <p className="text-gray-600 text-sm">
                  Leading the association&apos;s strategic direction and representing BAS externally.
                </p>
              </div>

              <div className="bg-gray-light rounded-lg p-6">
                <h3 className="text-lg font-semibold text-dark mb-1">
                  Vice President
                </h3>
                <p className="text-primary font-medium mb-2">Position</p>
                <p className="text-gray-600 text-sm">
                  Supporting the president and overseeing operational matters.
                </p>
              </div>

              <div className="bg-gray-light rounded-lg p-6">
                <h3 className="text-lg font-semibold text-dark mb-1">
                  Treasurer
                </h3>
                <p className="text-primary font-medium mb-2">Position</p>
                <p className="text-gray-600 text-sm">
                  Managing the association&apos;s finances and budget.
                </p>
              </div>

              <div className="bg-gray-light rounded-lg p-6">
                <h3 className="text-lg font-semibold text-dark mb-1">
                  Secretary
                </h3>
                <p className="text-primary font-medium mb-2">Position</p>
                <p className="text-gray-600 text-sm">
                  Maintaining records and handling correspondence.
                </p>
              </div>

              <div className="bg-gray-light rounded-lg p-6">
                <h3 className="text-lg font-semibold text-dark mb-1">
                  Board Member
                </h3>
                <p className="text-primary font-medium mb-2">Position</p>
                <p className="text-gray-600 text-sm">
                  Contributing to strategic decisions and leading initiatives.
                </p>
              </div>

              <div className="bg-gray-light rounded-lg p-6">
                <h3 className="text-lg font-semibold text-dark mb-1">
                  Board Member
                </h3>
                <p className="text-primary font-medium mb-2">Position</p>
                <p className="text-gray-600 text-sm">
                  Contributing to strategic decisions and leading initiatives.
                </p>
              </div>
            </div>

            <div className="mt-12 p-6 bg-primary/10 rounded-lg">
              <h2 className="text-xl font-semibold text-dark mb-4">
                Contact the Board
              </h2>
              <p className="text-gray-600">
                For inquiries regarding the board or governance matters, please contact us at{" "}
                <a
                  href="mailto:board@bitcoinassociation.ch"
                  className="text-primary hover:underline"
                >
                  board@bitcoinassociation.ch
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