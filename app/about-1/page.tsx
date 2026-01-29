import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export const metadata = {
  title: "About — Bitcoin Association Switzerland",
};

export default function AboutPage() {
  return (
    <>
      <Header />

      <main className="flex-1 bg-white">
        <section className="py-12 md:py-16">
          <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl md:text-4xl font-bold text-dark mb-8">
              About Bitcoin Association Switzerland
            </h1>

            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <p>
                The Bitcoin Association Switzerland (BAS) was founded to form an active community of Bitcoin enthusiasts, resolve open legal questions, and educate the public by providing a contact point for media inquiries.
              </p>

              <h2 className="text-2xl font-bold text-dark mt-8 mb-4">
                Our Mission
              </h2>
              <p>
                Bitcoin has the potential not only to revolutionize online payments, but also to give control over their financial transactions and assets back to individuals, and to serve as an asset with exceptionally strong property guarantees. Furthermore, its technology has the potential to serve as a platform for countless other services that can benefit from decentralized consensus and cryptographically secure tracking of property.
              </p>
              <p>
                As an Association, we want to pave the way for Bitcoin to flourish and unfold its full potential.
              </p>

              <h2 className="text-2xl font-bold text-dark mt-8 mb-4">
                What We Do
              </h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Organize regular meetups and events across Switzerland</li>
                <li>Work on resolving open legal questions regarding Bitcoin</li>
                <li>Educate the public about Bitcoin and its potential</li>
                <li>Provide a contact point for media inquiries</li>
                <li>Advocate for favorable Bitcoin regulation in Switzerland</li>
                <li>Build a strong community of Bitcoin enthusiasts</li>
              </ul>

              <h2 className="text-2xl font-bold text-dark mt-8 mb-4">
                Our History
              </h2>
              <p>
                Since our founding, we have grown to become one of the leading Bitcoin associations in Europe. We have organized hundreds of events, helped shape Bitcoin-related regulation in Switzerland, and built a vibrant community of members and supporters.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}