import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ArrowRight } from "lucide-react";

export default function HomePage() {
  return (
    <>
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="relative h-[500px] md:h-[600px] lg:h-[700px]">
            <Image
              src="https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1731266806784-123YYCP5HJCJDHFQ19NH/BAS_background_winter1.jpg?format=2500w"
              alt="Bitcoin Association Switzerland"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white px-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Our Mission
                </h1>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
                We form an active community of enthusiasts with regular events, try to resolve open legal questions, and educate the public by providing a contact point for media inquiries.
              </p>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Bitcoin has the potential not only to revolutionize online payments, but also to give control over their financial transactions and assets back to individuals, and to serve as an asset with exceptionally strong property guarantees. Furthermore, its technology has the potential to serve as a platform for countless other services that can benefit from decentralized consensus and cryptographically secure tracking of property. As an Association, we want to pave the way for Bitcoin to flourish and unfold its full potential.
              </p>
            </div>
          </div>
        </section>

        {/* Cards Section */}
        <section className="py-16 bg-gray-light">
          <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8">
              {/* About Card */}
              <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="relative h-64">
                  <Image
                    src="https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1563354199228-0X8V4KH8AJ67UZI0QY6Z/1.jpg"
                    alt="About"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-dark mb-3">
                    <Link href="/about-1" className="hover:text-primary transition-colors">
                      About
                    </Link>
                  </h2>
                  <p className="text-gray-600 mb-4">
                    Find out about our organization and mission.
                  </p>
                  <Link
                    href="/about-1"
                    className="inline-flex items-center text-primary font-medium hover:text-primary-dark transition-colors"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>

              {/* Join Us Card */}
              <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="relative h-64">
                  <Image
                    src="https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1563354353803-U6B96VGNWCKLD4E8VRHD/bas_gv_2018_bw.jpeg"
                    alt="Join Us"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-dark mb-3">
                    <Link href="/meetups-events" className="hover:text-primary transition-colors">
                      Join US
                    </Link>
                  </h2>
                  <p className="text-gray-600 mb-4">
                    You can become a contributor to our cause, or participate yourself.
                  </p>
                  <Link
                    href="/meetups-events"
                    className="inline-flex items-center text-primary font-medium hover:text-primary-dark transition-colors"
                  >
                    Find Out How
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}