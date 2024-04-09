import Image from "next/image";

import OurDesiger01 from "@/public/images/our-designer-01.jpg";
import OurDesiger02 from "@/public/images/our-designer-02.jpg";
import OurDesiger03 from "@/public/images/our-designer-03.jpg";

export default function OurDesigners() {
  return (
    <section id="our-designers">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">
          {/* Section header */}
          <div
            className="mx-auto text-center pb-12 md:pb-16"
            data-aos="fade-down"
          >
            <div
              className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-green-600 bg-green-200 rounded-full mb-4"
              data-aos="zoom-out-up"
            >
              Blueprints to Brilliance
            </div>
            <h1 className="h2 font-semibold mb-8">Our Designers</h1>
            <div className="grid gap-20 md:gap-10">
              {/* Item 1 */}
              <div className="md:grid md:grid-cols-12 md:gap-4 items-center">
                {/* Image */}
                <div
                  className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-4 mb-8 md:mb-0 rtl"
                  data-aos="fade-up"
                >
                  <Image
                    className="max-w-full mx-auto md:max-w-none h-auto object-contain w-full rounded-xl shadow-xl"
                    src={OurDesiger02}
                    alt="Our Designer 01"
                  />
                </div>
                {/* Content */}
                <div
                  className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-8"
                  data-aos="fade-left"
                >
                  <div className="md:pl-2 lg:pl-8 xl:pl-12">
                    <p className="text-base md:text-lg text-gray-600 text-justify font-medium">
                      <span className="text-purple-700 font-semibold">
                        Mr. S.T. Kenghe & Associates
                      </span>
                      , a very senior designer, specializes in various bridge
                      structures. He serves as a{" "}
                      <span className="text-purple-700 font-semibold">
                        consultant
                      </span>{" "}
                      on the Pune Municipal Corporation Panel and collaborates
                      with other organizations. Having been the Head of the
                      Department at the College of Engineering, Pune, Civil
                      Engineering department, he resigned from the same post and
                      founded his firm, M/s S. T. Kenghe & Associates. Being one
                      of the reputed and senior-most designers with vast
                      experience in designing major bridges, flyovers, etc.,
                      across nearly all categories, is an extra feather added to
                      our firm’s cap.
                    </p>
                  </div>
                </div>
              </div>

              {/* Item 2 */}
              <div className="md:grid md:grid-cols-12 md:gap-4 items-center">
                {/* Image */}
                <div
                  className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-4 mb-8 md:mb-0 rtl md:order-1"
                  data-aos="fade-up"
                >
                  <Image
                    className="max-w-full mx-auto md:max-w-none h-auto object-contain w-full rounded-xl shadow-xl"
                    src={OurDesiger01}
                    alt="Our Designer 02"
                  />
                </div>
                {/* Content */}
                <div
                  className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-8"
                  data-aos="fade-right"
                >
                  <div className="md:pr-2 lg:pr-8 xl:pr-12">
                    <p className="text-base md:text-lg text-gray-600 text-justify font-medium">
                      <span className="text-purple-700 font-semibold">
                        Mr. S. G. Dixit
                      </span>{" "}
                      from{" "}
                      <span className="text-purple-700 font-semibold">
                        Steelcon Structural Designers
                      </span>
                      , completed his B.E. from Pune University in June 1968,
                      securing the second rank of honors. He attended a training
                      program on "Design of Pre-stressed Concrete Bridges" at
                      the University of Roorkee. He has served as a{" "}
                      <span className="text-purple-700 font-semibold">
                        consultant
                      </span>{" "}
                      to M.I.D.C. through Dr. C. M. Pandit for pre-stressed
                      concrete bridges at Patalganga, Oshiwara Nala Mumbai, and
                      M.C.G.B. Thane. Along with R.C.C. bridges on the Kham
                      river at Aurangabad with Pile Foundations, he also
                      possesses experience with long-span structures,
                      multi-storied buildings, water treatment plants, pump
                      houses, and elevated service reservoirs.
                    </p>
                  </div>
                </div>
              </div>

              {/* Item 3 */}
              <div className="md:grid md:grid-cols-12 md:gap-4 items-center">
                {/* Image */}
                <div
                  className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-4 mb-8 md:mb-0 rtl"
                  data-aos="fade-up"
                >
                  <Image
                    className="max-w-full mx-auto md:max-w-none h-auto object-contain w-full rounded-xl shadow-xl"
                    src={OurDesiger03}
                    alt="Our Designer 03"
                  />
                </div>
                {/* Content */}
                <div
                  className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-8"
                  data-aos="fade-left"
                >
                  <div className="md:pl-2 lg:pl-8 xl:pl-12">
                    <p className="text-base md:text-lg text-gray-600 text-justify mb-3 font-medium">
                      <span className="text-purple-700 font-semibold">
                        Frischmann Prabhu India, Consulting Engineering Services
                        (C.E.S.) & Dalal Mott MacDonald
                      </span>{" "}
                      are a few more{" "}
                      <span className="text-purple-700 font-semibold">
                        consultants
                      </span>{" "}
                      with whom our firm has executed bridges and subway works.
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-purple-700 text-right italic mb-3">
                <span className="text-purple-700">**</span> More details, if
                needed, will be supplied on request.{" "}
                <span className="text-purple-700">**</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
