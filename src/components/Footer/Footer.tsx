"use client";

import Link from "next/link";
import { PlayStoreIcon, AppStoreIcon } from "@/assets/icons";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="lg:border-t lg:border-foreground bg-cover bg-center bg-no-repeat max-w-[1440px] mx-auto"
      style={{
        backgroundImage: "url('/footer-bg.png')",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col items-start lg:flex-row justify-between lg:items-center">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Company Links */}
            <div className="pb-20 lg:pb-40">
              <h3 className="text-base font-medium text-primary mb-4">
                Company
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="#"
                    className="text-foreground hover:text-secondary-foreground text-[24px] leading-[32px] transition-colors duration-200"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-foreground hover:text-secondary-foreground text-[24px] leading-[32px] transition-colors duration-200"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-foreground hover:text-secondary-foreground text-[24px] leading-[32px] transition-colors duration-200"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-foreground hover:text-secondary-foreground text-[24px] leading-[32px] transition-colors duration-200"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    href="/press"
                    className="text-foreground hover:text-secondary-foreground text-[24px] leading-[32px] transition-colors duration-200"
                  >
                    Press
                  </Link>
                </li>
              </ul>
            </div>

            {/* Support Links */}
            <div>
              <h3 className="text-base font-medium text-primary mb-4">
                Support
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="mailto:hello@bomba.co"
                    className="text-foreground hover:text-secondary-foreground text-[24px] leading-[32px] transition-colors duration-200"
                  >
                    hello@bomba.co
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/your-number"
                    className="text-foreground hover:text-secondary-foreground text-[24px] leading-[32px] transition-colors duration-200 flex items-center"
                  >
                    WhatsApp ↗
                  </a>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-foreground hover:text-secondary-foreground text-[24px] leading-[32px] transition-colors duration-200"
                  >
                    Help Center
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Company Tagline */}
          <div>
            <h4 className="text-lg leading-[26px] font-normal text-primary mb-2">
              The neo bank for Africans globally
            </h4>
            <p className="text-lg leading-[26px] text-foreground">
              Bomba Ltd is a UK-incorporated Company with Registration Number
              (RC 12551277)
            </p>
          </div>
        </div>

        {/* Company Info and Social Media */}
        <div className="mt-12 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-12">
            {/* Left Section - App Downloads & Legal Info */}
            <div className="flex-col space-y-2 hidden lg:flex">
              {/* App Download Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#"
                  className="flex items-center justify-center gap-x-3 px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                >
                  <div className="w-6 h-6 mr-3">
                    <PlayStoreIcon />
                  </div>
                  <div className="flex flex-col gap-y-0">
                    <span className="text-sm font-normal text-primary">
                      Get it on
                    </span>
                    <span className="text-lg font-bold text-primary">
                      Google Play
                    </span>
                  </div>
                </a>
                <a
                  href="#"
                  className="flex items-center justify-center gap-x-3 px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                >
                  <div className="w-6 h-6 mr-3">
                    <AppStoreIcon />
                  </div>
                  <div className="flex flex-col gap-y-0">
                    <span className="text-sm font-normal text-primary">
                      Download on the
                    </span>
                    <span className="text-lg font-bold text-primary">
                      App Store
                    </span>
                  </div>
                </a>
              </div>

              {/* Copyright */}
              <p className="text-[15px] leading-[24px] text-primary">
                © {currentYear} Bomba Limited. All rights reserved.
              </p>

              {/* Legal Links */}
              <div className="flex flex-wrap gap-2 text-[15px] leading-[24px] text-primary">
                <Link
                  href="#"
                  className="text-foreground hover:text-secondary-foreground transition-colors duration-200"
                >
                  Terms of Service
                </Link>
                <span className="text-secondary">|</span>
                <Link
                  href="#"
                  className="text-foreground hover:text-secondary-foreground transition-colors duration-200"
                >
                  Privacy Policy
                </Link>
                <span className="text-secondary">|</span>
                <Link
                  href="#"
                  className="text-foreground hover:text-secondary-foreground transition-colors duration-200"
                >
                  T&C UK
                </Link>
                <span className="text-secondary">|</span>
                <Link
                  href="#"
                  className="text-foreground hover:text-secondary-foreground transition-colors duration-200"
                >
                  Cookie Policy
                </Link>
              </div>
            </div>

            {/* Right Section - Newsletter & Social Media */}
            <div className="flex flex-col space-y-6 w-full lg:w-auto">
              {/* Newsletter */}
              <div>
                <h3 className="text-lg font-medium text-primary mb-4">
                  Stay update on our newsletter
                </h3>
                <div className="flex gap-3 flex-col lg:flex-row">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="flex-1 bg-primary text-white placeholder:text-sm leading-[22px] p-6 px-14 placeholder-[rgba(110, 128, 163, 1)] rounded-l-none rounded-r-2xl lg:!rounded-r-none lg:rounded-l-2xl"
                  />
                  <button className="px-6 py-6 w-1/2 lg:w-auto text-secondary-foreground font-medium hover:text-blue-700 transition-colors duration-200 flex items-center border-0 border-b-2 border-b-secondary-foreground ">
                    Subscribe <span className="ml-1">→</span>
                  </button>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="hidden justify-between gap-6 text-[15px] leading-[24px] text-foreground mt-2 lg:flex">
                <Link
                  href="#"
                  className="text-[15px] text-foreground hover:text-gray-700 transition-colors duration-200"
                >
                  Instagram
                </Link>
                <Link
                  href="#"
                  className="text-[15px] text-foreground hover:text-gray-700 transition-colors duration-200"
                >
                  Facebook
                </Link>
                <Link
                  href="#"
                  className="text-[15px] text-foreground hover:text-gray-700 transition-colors duration-200"
                >
                  Linkedin
                </Link>
                <Link
                  href="#"
                  className="text-[15px] text-foreground hover:text-gray-700 transition-colors duration-200"
                >
                  Twitter
                </Link>
              </div>

              {/* Mobile Social Media Links */}
              <div className="flex-col space-y-2 flex lg:hidden">
                {/* App Download Buttons */}
                <div className="flex flex-row justify-between gap-4 py-5">
                  <div className="flex flex-col justify-between gap-6 text-[15px] leading-[24px] text-foreground mt-2 lg:hidden">
                    <Link
                      href="#"
                      className="text-[15px] text-foreground hover:text-gray-700 transition-colors duration-200"
                    >
                      Instagram
                    </Link>
                    <Link
                      href="#"
                      className="text-[15px] text-foreground hover:text-gray-700 transition-colors duration-200"
                    >
                      Facebook
                    </Link>
                    <Link
                      href="#"
                      className="text-[15px] text-foreground hover:text-gray-700 transition-colors duration-200"
                    >
                      Linkedin
                    </Link>
                    <Link
                      href="#"
                      className="text-[15px] text-foreground hover:text-gray-700 transition-colors duration-200"
                    >
                      Twitter
                    </Link>
                  </div>

                  <div className="flex flex-col gap-4">
                    <a
                      href="#"
                      className="flex items-center justify-center gap-x-3 px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                    >
                      <div className="w-6 h-6 mr-3">
                        <PlayStoreIcon />
                      </div>
                      <div className="flex flex-col gap-y-0">
                        <span className="text-sm font-normal text-primary">
                          Get it on
                        </span>
                        <span className="text-lg font-bold text-primary">
                          Google Play
                        </span>
                      </div>
                    </a>
                    <a
                      href="#"
                      className="flex items-center justify-center gap-x-3 px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                    >
                      <div className="w-6 h-6 mr-3">
                        <AppStoreIcon />
                      </div>
                      <div className="flex flex-col gap-y-0">
                        <span className="text-sm font-normal text-primary">
                          Download on the
                        </span>
                        <span className="text-lg font-bold text-primary">
                          App Store
                        </span>
                      </div>
                    </a>
                  </div>
                </div>

                <div className="flex flex-col border-t border-foreground pt-5">
                  {/* Copyright */}
                  <p className="text-[15px] leading-[24px] text-primary">
                    © {currentYear} Bomba Limited. All rights reserved.
                  </p>

                  {/* Legal Links */}
                  <div className="flex flex-wrap gap-2 text-[15px] leading-[24px] text-primary">
                    <Link
                      href="#"
                      className="text-foreground hover:text-secondary-foreground transition-colors duration-200"
                    >
                      Terms of Service
                    </Link>
                    <span className="text-secondary">|</span>
                    <Link
                      href="#"
                      className="text-foreground hover:text-secondary-foreground transition-colors duration-200"
                    >
                      Privacy Policy
                    </Link>
                    <span className="text-secondary">|</span>
                    <Link
                      href="#"
                      className="text-foreground hover:text-secondary-foreground transition-colors duration-200"
                    >
                      T&C UK
                    </Link>
                    <span className="text-secondary">|</span>
                    <Link
                      href="#"
                      className="text-foreground hover:text-secondary-foreground transition-colors duration-200"
                    >
                      Cookie Policy
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
