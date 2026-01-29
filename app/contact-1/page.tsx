import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export const metadata = {
  title: "Contact — Bitcoin Association Switzerland",
};

export default function ContactPage() {
  return (
    <>
      <Header />

      <main className="flex-1 bg-white">
        <section className="py-12 md:py-16">
          <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl md:text-4xl font-bold text-dark mb-8">
              Contact
            </h1>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div>
                <h2 className="text-xl font-semibold text-dark mb-6">
                  Get in Touch
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-dark mb-2">General Inquiries</h3>
                    <a
                      href="mailto:info@bitcoinassociation.ch"
                      className="text-primary hover:underline"
                    >
                      info@bitcoinassociation.ch
                    </a>
                  </div>

                  <div>
                    <h3 className="font-semibold text-dark mb-2">Membership</h3>
                    <a
                      href="mailto:membership@bitcoinassociation.ch"
                      className="text-primary hover:underline"
                    >
                      membership@bitcoinassociation.ch
                    </a>
                  </div>

                  <div>
                    <h3 className="font-semibold text-dark mb-2">Media Inquiries</h3>
                    <a
                      href="mailto:media@bitcoinassociation.ch"
                      className="text-primary hover:underline"
                    >
                      media@bitcoinassociation.ch
                    </a>
                  </div>

                  <div>
                    <h3 className="font-semibold text-dark mb-2">Events</h3>
                    <a
                      href="mailto:events@bitcoinassociation.ch"
                      className="text-primary hover:underline"
                    >
                      events@bitcoinassociation.ch
                    </a>
                  </div>

                  <div>
                    <h3 className="font-semibold text-dark mb-2">Board</h3>
                    <a
                      href="mailto:board@bitcoinassociation.ch"
                      className="text-primary hover:underline"
                    >
                      board@bitcoinassociation.ch
                    </a>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h3 className="font-semibold text-dark mb-4">
                    Connect With Us
                  </h3>
                  <div className="flex flex-wrap gap-4">
                    <a
                      href="https://www.meetup.com/Bitcoin-Meetup-Switzerland/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      Meetup
                    </a>
                    <a
                      href="https://www.youtube.com/channel/UC5nVX9C2vM1dFg0BvatKEOg"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      YouTube
                    </a>
                    <a
                      href="https://x.com/bitcoin_ch"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      X (Twitter)
                    </a>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-gray-light rounded-lg p-6">
                <h2 className="text-xl font-semibold text-dark mb-6">
                  Send us a Message
                </h2>
                <form className="space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-dark mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-dark mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-dark mb-2"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-dark mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all resize-vertical"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}