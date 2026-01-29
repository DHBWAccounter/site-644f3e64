import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export const metadata = {
  title: "Roadshow 2025 — Bitcoin Association Switzerland",
};

export default function RoadshowPage() {
  return (
    <>
      <Header />

      <main className="flex-1 bg-white">
        <section className="py-12 md:py-16">
          <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl md:text-4xl font-bold text-dark mb-8">
              Roadshow 2025
            </h1>
            <p className="text-gray-600 mb-8">
              Join us for our 2025 roadshow across Switzerland! We&apos;re bringing Bitcoin education and community meetups to cities throughout the country.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Event Card */}
              <div className="bg-gray-light rounded-lg p-6">
                <h3 className="text-lg font-semibold text-dark mb-2">Zurich</h3>
                <p className="text-gray-600 text-sm mb-4">Date: TBA</p>
                <p className="text-gray-600">
                  Join us for an evening of Bitcoin discussions and networking in Zurich.
                </p>
              </div>

              <div className="bg-gray-light rounded-lg p-6">
                <h3 className="text-lg font-semibold text-dark mb-2">Geneva</h3>
                <p className="text-gray-600 text-sm mb-4">Date: TBA</p>
                <p className="text-gray-600">
                  Bitcoin meetup and educational session in Geneva.
                </p>
              </div>

              <div className="bg-gray-light rounded-lg p-6">
                <h3 className="text-lg font-semibold text-dark mb-2">Basel</h3>
                <p className="text-gray-600 text-sm mb-4">Date: TBA</p>
                <p className="text-gray-600">
                  Connect with the Bitcoin community in Basel.
                </p>
              </div>

              <div className="bg-gray-light rounded-lg p-6">
                <h3 className="text-lg font-semibold text-dark mb-2">Luzern</h3>
                <p className="text-gray-600 text-sm mb-4">Date: TBA</p>
                <p className="text-gray-600">
                  Educational event and community gathering in Luzern.
                </p>
              </div>

              <div className="bg-gray-light rounded-lg p-6">
                <h3 className="text-lg font-semibold text-dark mb-2">Neuchâtel</h3>
                <p className="text-gray-600 text-sm mb-4">Date: TBA</p>
                <p className="text-gray-600">
                  Bitcoin discussion and networking in Neuchâtel.
                </p>
              </div>
            </div>

            <div className="mt-12 p-6 bg-primary/10 rounded-lg">
              <h2 className="text-xl font-semibold text-dark mb-4">
                Stay Updated
              </h2>
              <p className="text-gray-600">
                Follow us on social media or join our meetup groups to get the latest updates on roadshow dates and locations.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}