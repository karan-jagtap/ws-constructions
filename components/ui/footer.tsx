import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer id="footer">
      <div className="py-12 md:py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Top area: Blocks */}
          <div className="grid md:grid-cols-12 gap-8 lg:gap-20 mb-8 md:mb-12">
            {/* 1st block */}
            <div className="md:col-span-7 lg:col-span-8">
              <div className="mb-2">
                {/* Logo */}
                <Link
                  href="/"
                  className="inline-block transition duration-150 ease-in-out"
                  aria-label="W.S. Constructions"
                >
                  {/* <div> */}
                  <p className="text-3xl font-semibold text-purple-700">
                    W.S. Constuctions
                  </p>
                  <p className="text-xl uppercase">Engineers & Contractors</p>
                  {/* </div> */}
                </Link>
              </div>
              <div className="text-gray-500">
                <p>
                  Flat No - 5, Shirish Classic, Right Bhusari Colony, Kothrud,
                  Pune - 411037
                </p>
                <p>Pune, Maharashtra, India</p>
              </div>
            </div>

            {/* 2nd block */}
            <div className="md:col-span-5 lg:col-span-4">
              <div className="text-gray-500">
                <p className="md:my-1">
                  <span className="text-purple-700 font-semibold mr-2">
                    Mobile :
                  </span>
                  <span>+91 9822060590</span>
                </p>
                <p className="md:my-1">
                  <span className="text-purple-700 font-semibold mr-2">
                    Mobile 2:
                  </span>
                  <span>+91 9850666619</span>
                </p>
                <p className="md:my-1">
                  <span className="text-purple-700 font-semibold mr-2">
                    Email :
                  </span>
                  <span>hemantkasbekar@hotmail.com</span>
                </p>
                <p className="md:my-1">
                  <span className="text-purple-700 font-semibold mr-2">
                    Email 2:
                  </span>
                  <span>khemantrao@yahoo.co.in</span>
                </p>
                <p className="md:my-1">
                  <span className="text-purple-700 font-semibold mr-2">
                    Email 2:
                  </span>
                  <span>mksurvey999@gmail.com</span>
                </p>
              </div>
            </div>
          </div>

          {/* Bottom area */}
          <div className="md:flex md:items-center md:justify-between">
            {/* Copyrights note */}
            <div className="text-gray-500 text-sm mr-4">
              &copy; W.S. Constructions. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
