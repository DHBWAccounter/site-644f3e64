import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import Link from "next/link";

export const metadata = {
  title: "News — Bitcoin Association Switzerland",
};

export default function NewsPage() {
  return (
    <>
      <Header />

      <main className="flex-1 bg-white">
        {/* Breadcrumb */}
        <div className="bg-gray-light border-b border-gray-200">
          <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <nav className="flex items-center space-x-2 text-sm text-gray-600">
              <span className="text-gray-400">News</span>
              <span className="text-gray-400">/</span>
              <span className="text-primary">News</span>
              <span className="text-gray-400">/</span>
              <Link href="/archive" className="hover:text-primary transition-colors">
                Archive
              </Link>
            </nav>
          </div>
        </div>

        {/* Content */}
        <section className="py-12 md:py-16">
          <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl md:text-4xl font-bold text-dark mb-8">
              News
            </h1>
            <p className="text-gray-600 mb-8">
              Stay updated with the latest news and announcements from Bitcoin Association Switzerland.
            </p>

            <div className="space-y-8">
              {/* Sample News Items */}
              <article className="border-b border-gray-100 pb-8">
                <Link href="#" className="block group">
                  <h2 className="text-xl font-semibold text-dark group-hover:text-primary transition-colors mb-2">
                    Bitcoin Association Switzerland Welcomes the Federal Council&apos;s Endorsement of Enhanced Bitcoin Regulation
                  </h2>
                  <p className="text-gray-500 text-sm mb-3">February 28, 2025</p>
                  <p className="text-gray-600">
                    We welcome the recent announcement by the Federal Council regarding the future regulatory framework for Bitcoin in Switzerland.
                  </p>
                </Link>
              </article>

              <article className="border-b border-gray-100 pb-8">
                <Link href="#" className="block group">
                  <h2 className="text-xl font-semibold text-dark group-hover:text-primary transition-colors mb-2">
                    Bitcoin Association Switzerland appoints new board, sets bold vision for the future
                  </h2>
                  <p className="text-gray-500 text-sm mb-3">November 13, 2024</p>
                  <p className="text-gray-600">
                    At our recent general assembly, members elected a new board to lead the association into its next chapter.
                  </p>
                </Link>
              </article>

              <article className="border-b border-gray-100 pb-8">
                <Link href="#" className="block group">
                  <h2 className="text-xl font-semibold text-dark group-hover:text-primary transition-colors mb-2">
                    Statement on the 12-Point Program for a Forward-Looking Digital Financial Center
                  </h2>
                  <p className="text-gray-500 text-sm mb-3">May 31, 2025</p>
                  <p className="text-gray-600">
                    Our official statement regarding the Swiss government&apos;s 12-point program for digital finance.
                  </p>
                </Link>
              </article>
            </div>

            <div className="mt-12">
              <Link
                href="/archive"
                className="inline-flex items-center text-primary font-medium hover:text-primary-dark transition-colors"
              >
                View Archive
                <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}