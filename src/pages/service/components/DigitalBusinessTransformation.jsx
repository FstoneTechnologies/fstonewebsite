import Footer from "components/ui/Footer";
import Header from "components/ui/Header";
import React from "react";

const DigitalBusinessTransformation = () => {
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
              backgroundImage: "url('/DigitalBusinessTransformation.jpg')"
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
              Digital Business Transformation
            </h1>

            <p className="mt-6 text-lg lg:text-xl text-gray-200 max-w-3xl leading-relaxed">
              Enable digital-first business models by aligning people, processes,
              and technology for sustainable transformation.
            </p>
          </div>
        </section>

        {/* CONTENT SECTION */}
        <section className="py-20">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">

            <p className="text-lg text-slate-700 leading-relaxed mb-8">
              Our Digital Business Transformation services help organizations
              reimagine how they operate, engage customers, and deliver value
              in an increasingly digital and competitive landscape.
            </p>

            <p className="text-lg text-slate-700 leading-relaxed mb-8">
              We take a holistic approach to transformation—aligning strategy,
              culture, processes, and technology to drive long-term business
              outcomes and organizational agility.
            </p>

            {/* KEY OFFERINGS */}
            <div className="mt-14">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                Our Digital Business Transformation Capabilities
              </h2>

              <ul className="space-y-4 text-slate-700">
                <li>• Digital-first strategy and operating model design</li>
                <li>• Business process digitization and automation</li>
                <li>• Change management and workforce enablement</li>
                <li>• Customer experience and journey transformation</li>
                <li>• Technology and platform modernization</li>
                <li>• Data-driven decision-making and performance tracking</li>
              </ul>
            </div>

            {/* VALUE SECTION */}
            <div className="mt-14">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                How We Create Impact
              </h2>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                We partner closely with leadership teams to ensure transformation
                initiatives are aligned with business objectives and embraced
                across the organization.
              </p>

              <p className="text-lg text-slate-700 leading-relaxed">
                By enabling digital-first thinking and execution, we help
                organizations improve agility, enhance customer value, and
                achieve sustainable growth in a rapidly evolving market.
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

export default DigitalBusinessTransformation;
