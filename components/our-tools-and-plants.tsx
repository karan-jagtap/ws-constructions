import Image from "next/image";

import OurTools01 from "@/public/images/our-tools-01.jpg";
import OurTools02 from "@/public/images/our-tools-02.jpg";
import OurTools03 from "@/public/images/our-tools-03.jpg";
import OurTools04 from "@/public/images/our-tools-04.jpeg";

export default function OurToolsAndPlants() {
  return (
    <section id="our-tools-and-plants">
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
              Building with Cutting-Edge Tools
            </div>
            <h1 className="h2 font-semibold mb-8">Our Tools & Plants</h1>
            <div className="grid gap-20 md:gap-10">
              {/* Item 1 */}
              <div className="md:grid md:grid-cols-12 md:gap-4 items-center">
                {/* Image */}
                <div
                  className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-4 lg:col-span-2 mb-8 md:mb-0 rtl"
                  data-aos="fade-up"
                >
                  <Image
                    className="max-w-full mx-auto md:max-w-none h-auto object-contain w-full rounded-xl shadow-xl"
                    src={OurTools01}
                    alt="Our Designer 01"
                  />
                </div>
                {/* Content */}
                <div
                  className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-8 lg:col-span-10"
                  data-aos="fade-left"
                >
                  <div className="md:pl-2 lg:pl-8 xl:pl-12">
                    <p className="text-base md:text-lg text-gray-600 text-justify">
                      Another sister concern,{" "}
                      <span className="text-purple-700 font-semibold">
                        Global Ventures, Pune
                      </span>
                      , undertakes earthmoving and the hiring of machinery such
                      as{" "}
                      <span className="text-purple-700 font-semibold">
                        Poklain, JCBs, excavators, compressors, dumpers
                      </span>
                      , etc. These sophisticated machinery pieces are used by
                      W.S. Constructions as and when required.
                    </p>
                  </div>
                </div>
              </div>

              {/* Item 2 */}
              <div className="md:grid md:grid-cols-12 md:gap-4 items-center">
                {/* Image */}
                <div
                  className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-4 lg:col-span-2 mb-8 md:mb-0 rtl md:order-1"
                  data-aos="fade-up"
                >
                  <Image
                    className="max-w-full mx-auto md:max-w-none h-auto object-contain w-full rounded-xl shadow-xl"
                    src={OurTools02}
                    alt="Our Designer 02"
                  />
                </div>
                {/* Content */}
                <div
                  className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-8 lg:col-span-10"
                  data-aos="fade-right"
                >
                  <div className="md:pr-2 lg:pr-8 xl:pr-12">
                    <p className="text-base md:text-lg text-gray-600 text-justify">
                      <span className="text-purple-700 font-semibold">
                        Omkar Crane Services
                      </span>{" "}
                      &{" "}
                      <span className="text-purple-700 font-semibold">
                        Sanas Cranes Pvt. Ltd., Pune
                      </span>
                      , are two other firms that carry out{" "}
                      <span className="text-purple-700 font-semibold">
                        erection jobs
                      </span>{" "}
                      required for various sites, including shuttering and
                      structures.
                    </p>
                  </div>
                </div>
              </div>

              {/* Item 3 */}
              <div className="md:grid md:grid-cols-12 md:gap-4 items-center">
                {/* Image */}
                <div
                  className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-4 lg:col-span-2 mb-8 md:mb-0 rtl"
                  data-aos="fade-up"
                >
                  <Image
                    className="max-w-full mx-auto md:max-w-none h-auto object-contain w-full rounded-xl shadow-xl"
                    src={OurTools03}
                    alt="Our Designer 03"
                  />
                </div>
                {/* Content */}
                <div
                  className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-8 lg:col-span-10"
                  data-aos="fade-left"
                >
                  <div className="md:pl-2 lg:pl-8 xl:pl-12">
                    <p className="text-base md:text-lg text-gray-600 text-justify mb-3">
                      <span className="text-purple-700 font-semibold">
                        Safe Enterprises, Bandra Mumbai
                      </span>
                      , is another associate that takes care of our{" "}
                      <span className="text-purple-700 font-semibold">
                        piling works
                      </span>
                      , using conventional types and rigs as and when required.
                    </p>
                  </div>
                </div>
              </div>

              {/* Item 4 */}
              <div className="md:grid md:grid-cols-12 md:gap-4 items-center">
                {/* Image */}
                <div
                  className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-4 lg:col-span-2 mb-8 md:mb-0 rtl md:order-1"
                  data-aos="fade-up"
                >
                  <Image
                    className="max-w-full mx-auto md:max-w-none h-auto object-contain w-full rounded-xl shadow-xl"
                    src={OurTools04}
                    alt="Our Designer 02"
                  />
                </div>
                {/* Content */}
                <div
                  className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-8 lg:col-span-10"
                  data-aos="fade-right"
                >
                  <div className="md:pr-2 lg:pr-8 xl:pr-12">
                    <p className="text-base md:text-lg text-gray-600 text-justify">
                      Our pre-stressing jobs are done by{" "}
                      <span className="text-purple-700 font-semibold">
                        Mr. Sunil Rikhra
                      </span>{" "}
                      of{" "}
                      <span className="text-purple-700 font-semibold">
                        PSC Engineers, formerly J. K. Prestressing Andheri,
                        Mumbai
                      </span>
                      , who initially worked with{" "}
                      <span className="text-purple-700 font-semibold">
                        Fressinet India and Killick Nixon
                      </span>
                      .
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
