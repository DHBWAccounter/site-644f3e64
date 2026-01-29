import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export const metadata = {
  title: "Membership Form — Bitcoin Association Switzerland",
};

export default function MembershipFormPage() {
  return (
    <>
      <Header />

      <main className="flex-1 bg-white">
        {/* Content */}
        <section className="py-12 md:py-16">
          <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto">
              <h1 className="text-3xl md:text-4xl font-bold text-dark mb-8">
                Membership Form
              </h1>

              <form className="space-y-6">
                {/* Name Fields */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-dark mb-2"
                    >
                      First Name <span className="text-red-500">(required)</span>
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-dark mb-2"
                    >
                      Last Name <span className="text-red-500">(required)</span>
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-dark mb-2"
                  >
                    Email <span className="text-red-500">(required)</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                  />
                </div>

                {/* Transaction ID */}
                <div>
                  <label
                    htmlFor="txid"
                    className="block text-sm font-medium text-dark mb-2"
                  >
                    Bitcoin Transaction ID (TxID){" "}
                    <span className="text-red-500">(required)</span>
                  </label>
                  <input
                    type="text"
                    id="txid"
                    name="txid"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                  />
                </div>

                {/* Telegram */}
                <div>
                  <label
                    htmlFor="telegram"
                    className="block text-sm font-medium text-dark mb-2"
                  >
                    Telegram Username (To be added to our BAS chat)
                  </label>
                  <input
                    type="text"
                    id="telegram"
                    name="telegram"
                    placeholder="@username"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                  />
                </div>

                {/* Comments */}
                <div>
                  <label
                    htmlFor="comments"
                    className="block text-sm font-medium text-dark mb-2"
                  >
                    Comments
                  </label>
                  <textarea
                    id="comments"
                    name="comments"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all resize-vertical"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full md:w-auto px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors"
                >
                  Submit
                </button>
              </form>

              {/* reCAPTCHA notice */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <p className="text-xs text-gray-500">
                  This site is protected by reCAPTCHA and the Google{" "}
                  <a
                    href="https://www.google.com/intl/en/policies/privacy/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Privacy Policy
                  </a>{" "}
                  and{" "}
                  <a
                    href="https://www.google.com/intl/en/policies/terms/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Terms of Service
                  </a>{" "}
                  apply.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}