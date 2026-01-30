import ContactUs from "components/ui/ContactUs";
import Footer from "components/ui/Footer";
import Header from "components/ui/Header";
import React from "react";

const ComplianceGovernance = () => {
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
              backgroundImage: "url('/com.jpg')"
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
              Compliance & Governance
            </h1>

            <p className="mt-6 text-lg lg:text-xl text-gray-200 max-w-3xl leading-relaxed">
              Ensure workforce compliance, risk mitigation, and governance across
              contracts, vendors, and regions.
            </p>
          </div>
        </section>

        {/* CONTENT SECTION */}
        <section className="py-20">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">

            <p className="text-lg text-slate-700 leading-relaxed mb-8">
              Our Compliance & Governance services help organizations manage
              workforce-related risks while ensuring adherence to regulatory,
              contractual, and organizational standards.
            </p>

            <p className="text-lg text-slate-700 leading-relaxed mb-8">
              We provide structured governance frameworks and compliance controls
              that support global workforce programs and complex vendor ecosystems.
            </p>

            {/* KEY OFFERINGS */}
            <div className="mt-14">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                Our Compliance & Governance Capabilities
              </h2>

              <ul className="space-y-4 text-slate-700">
                <li>• Workforce compliance management across regions</li>
                <li>• Contract and vendor governance frameworks</li>
                <li>• Risk assessment and mitigation strategies</li>
                <li>• Regulatory, audit, and policy compliance</li>
                <li>• Workforce governance reporting and controls</li>
                <li>• Continuous monitoring and compliance assurance</li>
              </ul>
            </div>

            {/* VALUE SECTION */}
            <div className="mt-14">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                How We Create Impact
              </h2>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                We collaborate with HR, legal, procurement, and compliance teams
                to design governance models that balance flexibility with control.
              </p>

              <p className="text-lg text-slate-700 leading-relaxed">
                By strengthening compliance and governance, we help organizations
                reduce risk exposure, ensure regulatory adherence, and maintain
                consistent workforce standards across regions.
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

export default ComplianceGovernance;
