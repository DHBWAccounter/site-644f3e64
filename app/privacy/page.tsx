import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export const metadata = {
  title: "Privacy Policy — Bitcoin Association Switzerland",
};

export default function PrivacyPage() {
  return (
    <>
      <Header />

      <main className="flex-1 bg-white">
        <section className="py-12 md:py-16">
          <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl md:text-4xl font-bold text-dark mb-8">
              Privacy Policy
            </h1>

            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <p>
                Bitcoin Association Switzerland (BAS) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information.
              </p>

              <h2 className="text-2xl font-bold text-dark mt-8 mb-4">
                Information We Collect
              </h2>
              <p>
                We collect information that you provide directly to us, including:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Name and contact information (email, Telegram username)</li>
                <li>Bitcoin transaction IDs for membership verification</li>
                <li>Information provided in contact forms</li>
              </ul>

              <h2 className="text-2xl font-bold text-dark mt-8 mb-4">
                How We Use Your Information
              </h2>
              <p>
                We use your information to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Process and verify membership applications</li>
                <li>Communicate with you about association activities</li>
                <li>Add you to our member groups (with your consent)</li>
                <li>Respond to your inquiries</li>
              </ul>

              <h2 className="text-2xl font-bold text-dark mt-8 mb-4">
                Information Sharing
              </h2>
              <p>
                We do not sell or rent your personal information to third parties. We may share information with:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Service providers who assist our operations</li>
                <li>Legal authorities when required by law</li>
              </ul>

              <h2 className="text-2xl font-bold text-dark mt-8 mb-4">
                Data Security
              </h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
              </p>

              <h2 className="text-2xl font-bold text-dark mt-8 mb-4">
                Your Rights
              </h2>
              <p>
                You have the right to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Access your personal information</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Withdraw consent for processing</li>
              </ul>

              <h2 className="text-2xl font-bold text-dark mt-8 mb-4">
                Contact Us
              </h2>
              <p>
                For privacy-related questions, please contact us at{" "}
                <a
                  href="mailto:privacy@bitcoinassociation.ch"
                  className="text-primary hover:underline"
                >
                  privacy@bitcoinassociation.ch
                </a>
              </p>

              <h2 className="text-2xl font-bold text-dark mt-8 mb-4">
                Updates to This Policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time. The latest version will always be posted on this page.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}