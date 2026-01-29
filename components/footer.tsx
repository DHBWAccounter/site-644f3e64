"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUp } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-dark text-white">
      {/* Main Footer */}
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
          {/* Logo and Social */}
          <div className="flex flex-col items-center md:items-start space-y-6">
            <Image
              src="https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1486226923132-GES7LLNU167XSPW77W83/image-asset.png"
              alt="Bitcoin"
              width={80}
              height={80}
              className="opacity-90"
            />
            <div className="flex space-x-6">
              <Link
                href="https://www.meetup.com/Bitcoin-Meetup-Switzerland/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors text-sm"
              >
                Meetup
              </Link>
              <Link
                href="https://www.youtube.com/channel/UC5nVX9C2vM1dFg0BvatKEOg"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors text-sm"
              >
                Bitcoin Lectures
              </Link>
              <Link
                href="https://x.com/bitcoin_ch"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors text-sm"
              >
                X
              </Link>
            </div>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="flex items-center space-x-2 text-gray-400 hover:text-primary transition-colors"
          >
            <span className="text-sm">Back to Top</span>
            <ArrowUp className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-8">
            <Link
              href="/privacy"
              className="text-sm text-gray-500 hover:text-primary transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-sm text-gray-500 hover:text-primary transition-colors"
            >
              Terms and Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}