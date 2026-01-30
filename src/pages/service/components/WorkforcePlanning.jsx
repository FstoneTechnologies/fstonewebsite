import ContactUs from "components/ui/ContactUs";
import Footer from "components/ui/Footer";
import Header from "components/ui/Header";
import React from "react";

const WorkforcePlanning = () => {
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
              backgroundImage: "url('/wf.jpg')"
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
              Workforce Planning
            </h1>

            <p className="mt-6 text-lg lg:text-xl text-gray-200 max-w-3xl leading-relaxed">
              Strategic workforce planning to align talent supply with business
              demand across geographies and functions.
            </p>
          </div>
        </section>

        {/* CONTENT SECTION */}
        <section className="py-20">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">

            <p className="text-lg text-slate-700 leading-relaxed mb-8">
              Our Workforce Planning services help organizations anticipate
              future talent needs, optimize workforce structures, and ensure
              the right skills are available at the right time.
            </p>

            <p className="text-lg text-slate-700 leading-relaxed mb-8">
              By aligning workforce strategy with business objectives, we enable
              organizations to manage growth, control costs, and respond
              effectively to changing market conditions.
            </p>

            {/* KEY OFFERINGS */}
            <div className="mt-14">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                Our Workforce Planning Capabilities
              </h2>

              <ul className="space-y-4 text-slate-700">
                <li>• Workforce demand and supply forecasting</li>
                <li>• Skills gap analysis and workforce segmentation</li>
                <li>• Strategic hiring and talent deployment planning</li>
                <li>• Global workforce planning across regions</li>
                <li>• Scenario modeling and capacity planning</li>
                <li>• Workforce analytics and reporting</li>
              </ul>
            </div>

            {/* VALUE SECTION */}
            <div className="mt-14">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                How We Create Impact
              </h2>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                We work closely with HR and business leaders to translate
                strategic goals into actionable workforce plans.
              </p>

              <p className="text-lg text-slate-700 leading-relaxed">
                By enabling data-driven workforce decisions, we help
                organizations improve talent utilization, reduce workforce
                risk, and build resilient teams that support long-term growth.
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

export default WorkforcePlanning;
