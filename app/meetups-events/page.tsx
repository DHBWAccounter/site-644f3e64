import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import Link from "next/link";

export const metadata = {
  title: "Meetups & Events — Bitcoin Association Switzerland",
};

export default function MeetupsEventsPage() {
  return (
    <>
      <Header />

      <main className="flex-1 bg-white">
        <section className="py-12 md:py-16">
          <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl md:text-4xl font-bold text-dark mb-8">
              Meetups & Events
            </h1>

            <p className="text-gray-600 mb-12 max-w-3xl">
              Join our active community of Bitcoin enthusiasts. We host regular meetups across Switzerland where you can learn, share, and connect with fellow Bitcoiners.
            </p>

            {/* Meetup Groups */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              <Link
                href="https://www.meetup.com/Bitcoin-Meetup-Switzerland/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-light rounded-lg p-6 hover:shadow-md transition-shadow"
              >
                <h3 className="text-lg font-semibold text-dark mb-2">
                  Bitcoin Meetup Zurich
                </h3>
                <p className="text-gray-600 text-sm">
                  Our largest meetup group, hosting regular events in Zurich.
                </p>
              </Link>

              <Link
                href="https://www.meetup.com/Bitcoin-Meetup-Geneva"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-light rounded-lg p-6 hover:shadow-md transition-shadow"
              >
                <h3 className="text-lg font-semibold text-dark mb-2">
                  Bitcoin Meetup Geneva
                </h3>
                <p className="text-gray-600 text-sm">
                  Connecting the Bitcoin community in the Geneva area.
                </p>
              </Link>

              <Link
                href="https://www.meetup.com/Bitcoin-Meetup-Luzern/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-light rounded-lg p-6 hover:shadow-md transition-shadow"
              >
                <h3 className="text-lg font-semibold text-dark mb-2">
                  Bitcoin Meetup Luzern
                </h3>
                <p className="text-gray-600 text-sm">
                  Regular meetups in the heart of Switzerland.
                </p>
              </Link>

              <Link
                href="https://www.meetup.com/Bitcoin-Meetup-Neuchatel/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-light rounded-lg p-6 hover:shadow-md transition-shadow"
              >
                <h3 className="text-lg font-semibold text-dark mb-2">
                  Bitcoin Meetup Neuchâtel
                </h3>
                <p className="text-gray-600 text-sm">
                  Join the Bitcoin community in Neuchâtel.
                </p>
              </Link>

              <Link
                href="https://www.meetup.com/bitcoin-meetup-basel/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-light rounded-lg p-6 hover:shadow-md transition-shadow"
              >
                <h3 className="text-lg font-semibold text-dark mb-2">
                  Bitcoin Meetup Basel
                </h3>
                <p className="text-gray-600 text-sm">
                  Bitcoin enthusiasts gathering in Basel.
                </p>
              </Link>
            </div>

            {/* How to Participate */}
            <div className="bg-gray-light rounded-lg p-8">
              <h2 className="text-2xl font-bold text-dark mb-4">
                How to Participate
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  There are many ways to get involved with Bitcoin Association Switzerland:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Attend our regular meetups and events</li>
                  <li>Become a member and support our mission</li>
                  <li>Volunteer to help organize events</li>
                  <li>Share your knowledge as a speaker</li>
                  <li>Connect with us on social media</li>
                </ul>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/private"
                  className="inline-flex items-center px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors"
                >
                  Become a Member
                </Link>
                <Link
                  href="/roadshow-2025"
                  className="inline-flex items-center px-6 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition-colors"
                >
                  View Roadshow 2025
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