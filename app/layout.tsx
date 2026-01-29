import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bitcoin Association Switzerland",
  description:
    "The Bitcoin Association Switzerland forms an active community of enthusiasts with regular events, try to resolve open legal questions, and educate the public by providing a contact point for media inquiries.",
  icons: {
    icon: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1486215439062-YZIDK4S304980M1UUWGH/favicon.ico?format=100w",
  },
  openGraph: {
    title: "Bitcoin Association Switzerland",
    description:
      "The Bitcoin Association Switzerland forms an active community of enthusiasts with regular events.",
    url: "https://www.bitcoinassociation.ch",
    siteName: "Bitcoin Association Switzerland",
    images: [
      {
        url: "http://static1.squarespace.com/static/5895d62d2994ca86b0cd9807/t/59062102be659450876bfb81/1493573890585/logo_with_name.png?format=1500w",
        width: 227,
        height: 237,
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <body className="antialiased min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}