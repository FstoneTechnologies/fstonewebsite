import Footer from "components/ui/Footer";
import Header from "components/ui/Header";
import React from "react";

const ITOutsourcing = () => {
  return (
    <>
      <main className="bg-white">
        <Header />

        {/* HERO SECTION */}
        <section className="relative h-[75vh] min-h-[520px] flex items-center">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/ITOutsourcing.jpg')"
            }}
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />

          {/* Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
            <p className="text-sm tracking-wide uppercase text-blue-300 mb-4">
              FSTONE Technologies Services
            </p>

            <h1 className="text-4xl lg:text-6xl font-bold text-white max-w-4xl leading-tight">
              IT Outsourcing
            </h1>

            <p className="mt-6 text-lg lg:text-xl text-gray-200 max-w-3xl leading-relaxed">
              End-to-end IT outsourcing services delivering reliable, scalable,
              and cost-effective technology operations.
            </p>
          </div>
        </section>

        {/* CONTENT SECTION */}
        <section className="py-20">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">

            <p className="text-lg text-slate-700 leading-relaxed mb-8">
              Our IT Outsourcing services enable organizations to focus on core
              business priorities while we manage and operate their technology
              environments with efficiency and reliability.
            </p>

            <p className="text-lg text-slate-700 leading-relaxed mb-8">
              We provide flexible outsourcing models supported by skilled teams,
              proven processes, and strong governance to ensure consistent
              service delivery and operational excellence.
            </p>

            {/* KEY OFFERINGS */}
            <div className="mt-14">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                Our IT Outsourcing Capabilities
              </h2>

              <ul className="space-y-4 text-slate-700">
                <li>• End-to-end IT operations management</li>
                <li>• Application support and maintenance</li>
                <li>• Infrastructure and cloud operations</li>
                <li>• Service desk and IT support services</li>
                <li>• Vendor and service level management</li>
                <li>• Cost optimization and performance reporting</li>
              </ul>
            </div>

            {/* VALUE SECTION */}
            <div className="mt-14">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                How We Create Impact
              </h2>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                We work closely with clients to understand operational needs,
                performance expectations, and business goals—designing
                outsourcing models that deliver measurable value.
              </p>

              <p className="text-lg text-slate-700 leading-relaxed">
                By providing reliable and scalable IT outsourcing services,
                we help organizations reduce operational costs, improve service
                quality, and achieve greater agility in a dynamic technology
                landscape.
              </p>
            </div>

          </div>
        </section>

        {/* FOOTER */}
        <Footer />
      </main>
    </>
  );
};

export default ITOutsourcing;
