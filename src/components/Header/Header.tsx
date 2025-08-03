"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDownIcon, Bars3Icon, XMarkIcon } from "@/assets/icons";
import { navigationItems, dropdownContent } from "@/assets/data";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = (itemName: string) => {
    setActiveDropdown(activeDropdown === itemName ? null : itemName);
  };

  return (
    <header className="bg-background-secondary text-foreground py-5 shadow-sm border-b border-foreground">
      <div className="mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            {/* <Link href="/" className="flex items-center">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">B</span>
              </div>
              <span className="ml-2 text-xl font-bold text-gray-900">
                Bomba
              </span>
            </Link> */}
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-5 text-foreground items-center text-[17px] font-medium">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative">
                {item.hasDropdown ? (
                  <div className="relative">
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className="flex items-center text-foreground hover:text-foreground-hover px-3 py-2 md:px-0 text-sm font-medium transition-colors duration-200"
                    >
                      {item.name}
                      <ChevronDownIcon />
                    </button>
                    {activeDropdown === item.name && (
                      <div className="absolute right-0 mt-2 w-48 bg-background-secondary rounded-md shadow-lg py-1 z-50 border border-foreground/10">
                        {dropdownContent[
                          item.name as keyof typeof dropdownContent
                        ]?.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            className="block px-4 py-2 text-sm text-foreground hover:text-foreground-hover hover:bg-foreground/5 transition-colors duration-200"
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="text-foreground hover:text-foreground-hover px-3 py-2 md:px-0 text-sm font-medium transition-colors duration-200 hover:no-underline"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          <div className="hidden md:flex flex-shrink-0" />

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600"
            >
              {isMenuOpen ? (
                <XMarkIcon className="h-10 w-10 text-foreground" />
              ) : (
                <Bars3Icon />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background-secondary border-t border-foreground/10">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  {item.hasDropdown ? (
                    <div>
                      <button
                        onClick={() => toggleDropdown(item.name)}
                        className="flex items-center justify-between w-full text-left px-3 py-2 text-base font-medium text-foreground hover:text-foreground-hover hover:bg-foreground/5 rounded-md transition-colors duration-200"
                      >
                        {item.name}
                        <ChevronDownIcon />
                      </button>
                      {activeDropdown === item.name && (
                        <div className="pl-4 space-y-1">
                          {dropdownContent[
                            item.name as keyof typeof dropdownContent
                          ]?.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              className="block px-3 py-2 text-sm text-foreground hover:text-foreground-hover hover:bg-foreground/5 rounded-md transition-colors duration-200"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {dropdownItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="block px-3 py-2 text-base font-medium text-foreground hover:text-foreground-hover hover:bg-foreground/5 rounded-md transition-colors duration-200"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
