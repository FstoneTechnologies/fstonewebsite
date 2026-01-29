import Footer from "components/ui/Footer";
import Header from "components/ui/Header";
import React from "react";

const BusinessStrategyAdvisory = () => {
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
              backgroundImage: "url('/BusinessStrategyAdvisory.jpg')"
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
              Business Strategy & Advisory
            </h1>

            <p className="mt-6 text-lg lg:text-xl text-gray-200 max-w-3xl leading-relaxed">
              We help organizations define clear business strategies aligned
              with market trends, digital innovation, and long-term growth
              objectives.
            </p>
          </div>
        </section>

        {/* CONTENT SECTION */}
        <section className="py-20">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">

            <p className="text-lg text-slate-700 leading-relaxed mb-8">
              Our Business Strategy & Advisory services support organizations
              in making informed, forward-looking decisions that drive
              sustainable growth and competitive advantage.
            </p>

            <p className="text-lg text-slate-700 leading-relaxed mb-8">
              We work closely with leadership teams to align business vision,
              operating models, and technology investments with evolving
              market dynamics and customer expectations.
            </p>

            {/* KEY OFFERINGS */}
            <div className="mt-14">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                Our Business Strategy Capabilities
              </h2>

              <ul className="space-y-4 text-slate-700">
                <li>• Business strategy development and roadmap planning</li>
                <li>• Market analysis and competitive positioning</li>
                <li>• Digital strategy and innovation advisory</li>
                <li>• Operating model and process transformation</li>
                <li>• Growth strategy and expansion planning</li>
                <li>• Technology-enabled business transformation</li>
              </ul>
            </div>

            {/* VALUE SECTION */}
            <div className="mt-14">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                How We Create Impact
              </h2>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                We bring a structured, data-driven approach to strategy
                formulation—ensuring clarity, alignment, and actionable outcomes.
              </p>

              <p className="text-lg text-slate-700 leading-relaxed">
                By combining business insight with technology expertise,
                we help organizations execute strategies that improve
                performance, accelerate innovation, and enable long-term success.
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

export default BusinessStrategyAdvisory;
