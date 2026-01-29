"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "/" },
  {
    label: "News",
    href: "/blog",
    children: [
      { label: "News", href: "/bitcoin-association-switzerland" },
      { label: "Archive", href: "/archive" },
    ],
  },
  {
    label: "Events",
    href: "/events",
    children: [
      { label: "Roadshow 2025", href: "/roadshow-2025" },
      {
        label: "Bitcoin Meetup (Zurich)",
        href: "https://www.meetup.com/Bitcoin-Meetup-Switzerland/",
        external: true,
      },
      {
        label: "Bitcoin Meetup Geneva",
        href: "https://www.meetup.com/Bitcoin-Meetup-Geneva",
        external: true,
      },
      {
        label: "Bitcoin Meetup Luzern",
        href: "https://www.meetup.com/Bitcoin-Meetup-Luzern/",
        external: true,
      },
      {
        label: "Bitcoin Meetup Neuchatel",
        href: "https://www.meetup.com/Bitcoin-Meetup-Neuchatel/",
        external: true,
      },
      {
        label: "Bitcoin Meetup Basel",
        href: "https://www.meetup.com/bitcoin-meetup-basel/",
        external: true,
      },
    ],
  },
  {
    label: "membership",
    href: "/membership",
    children: [
      { label: "Private", href: "/private" },
      { label: "Corporate", href: "/corporate" },
      { label: "Our Corporate Members", href: "/our-corporate-members" },
    ],
  },
  { label: "Participate", href: "/meetups-events" },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "About", href: "/about-1" },
      { label: "Board", href: "/board" },
      { label: "Finances", href: "/finances" },
      { label: "Statutes", href: "/statutes" },
      { label: "Media Kit", href: "/media-kit" },
      { label: "Contact", href: "/contact-1" },
    ],
  },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="bg-white border-b border-gray-100">
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/fe5fab46-02c5-44d0-8de7-74185cd0904c/Bitcoin+Association+Switzerland.png?format=1500w"
              alt="Bitcoin Association Switzerland"
              width={200}
              height={50}
              className="h-10 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                {item.children ? (
                  <>
                    <button className="flex items-center px-3 py-2 text-sm font-medium text-dark hover:text-primary transition-colors">
                      {item.label}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </button>
                    {openDropdown === item.label && (
                      <div className="absolute top-full left-0 w-56 bg-white shadow-lg border border-gray-100 py-2 z-50">
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            target={child.external ? "_blank" : undefined}
                            rel={child.external ? "noopener noreferrer" : undefined}
                            className="block px-4 py-2 text-sm text-dark hover:text-primary hover:bg-gray-50 transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="px-3 py-2 text-sm font-medium text-dark hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-dark"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-100 py-4">
            <nav className="space-y-2">
              {navItems.map((item) => (
                <div key={item.label}>
                  {item.children ? (
                    <div className="space-y-1">
                      <span className="block px-3 py-2 text-sm font-semibold text-dark">
                        {item.label}
                      </span>
                      <div className="pl-4 space-y-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            target={child.external ? "_blank" : undefined}
                            rel={child.external ? "noopener noreferrer" : undefined}
                            className="block px-3 py-2 text-sm text-gray-600 hover:text-primary transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="block px-3 py-2 text-sm font-medium text-dark hover:text-primary transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}