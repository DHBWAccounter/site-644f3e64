import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import Image from "next/image";

export const metadata = {
  title: "Media Kit — Bitcoin Association Switzerland",
};

export default function MediaKitPage() {
  return (
    <>
      <Header />

      <main className="flex-1 bg-white">
        <section className="py-12 md:py-16">
          <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl md:text-4xl font-bold text-dark mb-8">
              Media Kit
            </h1>

            <p className="text-gray-600 mb-12 max-w-3xl">
              Download official Bitcoin Association Switzerland logos and brand assets for media use.
            </p>

            {/* Logo Downloads */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gray-light rounded-lg p-6">
                <h3 className="text-lg font-semibold text-dark mb-4">
                  Logo with Name
                </h3>
                <div className="bg-white p-4 rounded mb-4 flex items-center justify-center h-40">
                  <Image
                    src="https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/t/59062102be659450876bfb81/1493573890585/logo_with_name.png?format=300w"
                    alt="Bitcoin Association Switzerland Logo"
                    width={200}
                    height={100}
                    className="max-h-32 w-auto"
                  />
                </div>
                <p className="text-sm text-gray-600">
                  Official logo with association name. Use this for most media purposes.
                </p>
              </div>

              <div className="bg-gray-light rounded-lg p-6">
                <h3 className="text-lg font-semibold text-dark mb-4">
                  Logo Only
                </h3>
                <div className="bg-white p-4 rounded mb-4 flex items-center justify-center h-40">
                  <Image
                    src="https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/fe5fab46-02c5-44d0-8de7-74185cd0904c/Bitcoin+Association+Switzerland.png?format=300w"
                    alt="Bitcoin Association Switzerland Logo"
                    width={100}
                    height={100}
                    className="max-h-32 w-auto"
                  />
                </div>
                <p className="text-sm text-gray-600">
                  Logo icon only. Use for social media avatars or small format applications.
                </p>
              </div>
            </div>

            {/* Brand Guidelines */}
            <div className="bg-gray-light rounded-lg p-8">
              <h2 className="text-2xl font-bold text-dark mb-4">
                Brand Guidelines
              </h2>
              <ul className="space-y-3 text-gray-600">
                <li>
                  <span className="font-semibold">Primary Color:</span>{" "}
                  <span className="inline-block w-4 h-4 bg-primary rounded ml-2 align-middle"></span>{" "}
                  #3D9991
                </li>
                <li>
                  <span className="font-semibold">Secondary Color:</span>{" "}
                  <span className="inline-block w-4 h-4 bg-dark rounded ml-2 align-middle"></span>{" "}
                  #1F1F1F
                </li>
                <li>
                  <span className="font-semibold">Primary Font:</span> Proxima Nova
                </li>
                <li>
                  <span className="font-semibold">Secondary Font:</span> Adobe Garamond Pro
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-dark mb-4">
                Media Inquiries
              </h2>
              <p className="text-gray-600">
                For media inquiries, interviews, or additional assets, please contact us at{" "}
                <a
                  href="mailto:media@bitcoinassociation.ch"
                  className="text-primary hover:underline"
                >
                  media@bitcoinassociation.ch
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