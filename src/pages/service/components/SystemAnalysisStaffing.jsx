import ContactUs from "components/ui/ContactUs";
import Footer from "components/ui/Footer";
import Header from "components/ui/Header";
import React from "react";

const SystemAnalysisStaffing = () => {
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
              backgroundImage: "url('/sys.jpg')"
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
              System Analysis Staffing
            </h1>

            <p className="mt-6 text-lg lg:text-xl text-gray-200 max-w-3xl leading-relaxed">
              Experienced system analysts evaluating, designing, and improving
              IT systems to meet evolving business requirements.
            </p>
          </div>
        </section>

        {/* CONTENT SECTION */}
        <section className="py-20">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">

            <p className="text-lg text-slate-700 leading-relaxed mb-8">
              Our System Analysis Staffing Services help organizations assess
              existing IT systems, identify gaps, and design optimized solutions
              that align technology with business objectives.
            </p>

            <p className="text-lg text-slate-700 leading-relaxed mb-8">
              By providing skilled system analysts, we enable smoother system
              integrations, improved performance, and reduced operational risk
              across complex IT environments.
            </p>

            {/* KEY OFFERINGS */}
            <div className="mt-14">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                Our System Analysis Capabilities
              </h2>

              <ul className="space-y-4 text-slate-700">
                <li>• System requirements analysis and documentation</li>
                <li>• Application and infrastructure assessment</li>
                <li>• System integration and data flow analysis</li>
                <li>• Performance evaluation and optimization</li>
                <li>• Solution design and technical specifications</li>
                <li>• Support for system modernization initiatives</li>
              </ul>
            </div>

            {/* VALUE SECTION */}
            <div className="mt-14">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                How We Create Impact
              </h2>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                We collaborate with business, development, and infrastructure
                teams to ensure system designs meet functional, technical, and
                performance expectations.
              </p>

              <p className="text-lg text-slate-700 leading-relaxed">
                By deploying experienced system analysts, we help organizations
                improve system reliability, reduce implementation risk, and
                deliver technology solutions that support long-term growth.
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

export default SystemAnalysisStaffing;
