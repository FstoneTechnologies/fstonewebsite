import ContactUs from "components/ui/ContactUs";
import Footer from "components/ui/Footer";
import Header from "components/ui/Header";
import React from "react";

const BusinessAnalysisStaffing = () => {
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
              backgroundImage: "url('/ba.jpg')"
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
              Business Analysis Staffing
            </h1>

            <p className="mt-6 text-lg lg:text-xl text-gray-200 max-w-3xl leading-relaxed">
              Skilled business analysts bridging business goals and technology
              through data-driven insights and strategic analysis.
            </p>
          </div>
        </section>

        {/* CONTENT SECTION */}
        <section className="py-20">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">

            <p className="text-lg text-slate-700 leading-relaxed mb-8">
              Our Business Analysis Staffing Services help organizations translate
              complex business requirements into clear, actionable technical and
              functional solutions.
            </p>

            <p className="text-lg text-slate-700 leading-relaxed mb-8">
              By providing experienced business analysts with strong domain and
              technical expertise, we enable better decision-making, improved
              system alignment, and successful project outcomes.
            </p>

            {/* KEY OFFERINGS */}
            <div className="mt-14">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                Our Business Analysis Capabilities
              </h2>

              <ul className="space-y-4 text-slate-700">
                <li>• Requirements gathering and stakeholder analysis</li>
                <li>• Business process modeling and optimization</li>
                <li>• Functional and technical documentation</li>
                <li>• Data analysis and reporting support</li>
                <li>• Gap analysis and solution evaluation</li>
                <li>• Agile and waterfall project support</li>
              </ul>
            </div>

            {/* VALUE SECTION */}
            <div className="mt-14">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                How We Create Impact
              </h2>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                We collaborate closely with business and technology stakeholders
                to ensure clarity, alignment, and accuracy throughout the project
                lifecycle.
              </p>

              <p className="text-lg text-slate-700 leading-relaxed">
                By placing the right business analysts at the center of
                transformation initiatives, we help organizations reduce risk,
                improve delivery efficiency, and achieve measurable business
                outcomes.
              </p>
            </div>

          </div>
        </section>
            <ContactUs/>
        {/* FOOTER */}
        <Footer />
      </main>
    </>
  );
};

export default BusinessAnalysisStaffing;
