import Link from "next/link";
import MobileMenu from "./mobile-menu";

import Logo from "@/public/images/logo.svg";
import Image from "next/image";

export default function Header() {
  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-3 text-2xl font-extrabold"
              aria-label="Cruip"
            >
              <Image src={Logo} width={64} alt="Logo" />
              <span>Constructions</span>
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <Link
                  href="/#about-us"
                  className="font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  href="/#our-bankers"
                  className="font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  Bankers
                </Link>
              </li>

              <li>
                <Link
                  href="/#our-designers"
                  className="font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  Designers
                </Link>
              </li>

              <li>
                <Link
                  href="/#our-tools-and-plants"
                  className="font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  Tools & Plants
                </Link>
              </li>

              <li>
                <Link
                  href="/#aim"
                  className="font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  Aim
                </Link>
              </li>
            </ul>
          </nav>

          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
