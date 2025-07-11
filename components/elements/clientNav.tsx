"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaBars } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";

const ClientNav = () => {
  const logo = "logo.png";
  const ulItems = [
    "home",
    "about",
    "admission",
    "faculty",
    "institutes",
    "e-learning",
    "contact",
  ];
  const path = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  // Helper to determine active link
  const isActive = (text: string) => {
    if (text === "home") return path === "/";
    if (text === "e-learning") return path.startsWith("/e-learning");
    return path.startsWith(`/${text}`);
  };

  return (
    <div className="w-full flex justify-between px-3 md:p-0 relative">
      <Image
        width={100}
        height={100}
        alt="Safwat University"
        src={logo}
        className="w-[60vw] md:w-[30vw] "
        unoptimized={true}
        priority={true}
      />
      {/* Mobile menu button */}
      <button
        className="md:hidden flex items-center z-30"
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-label="Open menu"
      >
        <FaBars className="text-2xl sm:text-3xl" />
      </button>

      {/* Animated mobile menu */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-black/40 z-500 transition-opacity duration-300 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMenuOpen(false)}
      >
        <nav
          className={`absolute top-0 left-0 w-3/4 max-w-xs h-full bg-white shadow-lg p-6 transition-transform duration-300 ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className="absolute top-4 right-4 text-2xl"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <FaTimes />
          </button>
          <ul className="flex flex-col gap-6 mt-12 text-lg font-medium">
            {ulItems.map((text) => (
              <li key={text + "mobile"}>
                <Link
                  className={`capitalize block py-2 px-2 rounded transition-colors ${
                    isActive(text) ? "text-green-800 font-bold" : ""
                  }`}
                  href={text === "home" ? `/` : `/${text}`}
                  onClick={() => setMenuOpen(false)}
                >
                  {text}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Desktop menu */}
      <ul className="hidden md:flex w-auto gap-2 mdl:gap-4 mdl:text-xl lg:text-[1.3rem] items-center pr-3 text-lg font-medium">
        {ulItems.map((text) => (
          <li key={text + "rand"}>
            <Link
              className={`w-full h-full capitalize transition-colors ${
                isActive(text) ? "text-green-800 font-bold" : ""
              }`}
              href={text === "home" ? `/` : `/${text}`}
            >
              {text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClientNav;