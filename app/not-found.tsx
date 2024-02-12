"use client";

import Link from "next/link";
import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

export default function NotFound() {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 600,
      easing: "ease-out-sine",
    });
  });

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-semibold mb-4" data-aos="fade-up">
        Page Not Found
      </h1>
      <p className="text-gray-600 mb-8" data-aos="fade-up" data-aos-delay="200">
        Sorry, the page you're looking for does not exist.
      </p>
      <Link
        href="/"
        className="text-blue-600 hover:underline"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        Go back to home
      </Link>
    </div>
  );
}
