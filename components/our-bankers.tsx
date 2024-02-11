export default function OurBankers() {
  return (
    <section id="our-bankers">
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
              Solvency: Rs. 5 crores
            </div>
            <h1 className="h2 mb-4">Our Bankers</h1>
            <p className="text-gray-600 text-lg text-justify mb-3">
              Our Bankers have been the{" "}
              <span className="text-purple-700 font-semibold">
                State Bank Of India, Market Yard branch, Pune
              </span>
              . Accordingly our banks have issued us a Solvency to the tune of
              Rs. 5 crores. You are free to approach them for any confidential
              report if you so deem fit.
            </p>
            <p className="text-gray-600 text-lg text-justify">
              In case you also need our present financial rating or our Balance
              sheet kindly contact our{" "}
              <span className="text-purple-700 font-semibold">
                Audiitor Vishnu Khandelwal
              </span>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
