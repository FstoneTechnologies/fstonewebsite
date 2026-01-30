import ContactUs from "components/ui/ContactUs";
import Footer from "components/ui/Footer";
import Header from "components/ui/Header";
import React from "react";

const WorkforceAnalytics = () => {
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
              backgroundImage: "url('/ana.jpg')"
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
              Workforce Analytics
            </h1>

            <p className="mt-6 text-lg lg:text-xl text-gray-200 max-w-3xl leading-relaxed">
              Leverage workforce data and analytics to improve productivity,
              engagement, and overall workforce performance.
            </p>
          </div>
        </section>

        {/* CONTENT SECTION */}
        <section className="py-20">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">

            <p className="text-lg text-slate-700 leading-relaxed mb-8">
              Our Workforce Analytics services help organizations turn workforce
              data into actionable insights that support smarter talent decisions
              and improved organizational performance.
            </p>

            <p className="text-lg text-slate-700 leading-relaxed mb-8">
              By combining data, analytics platforms, and workforce expertise,
              we enable businesses to understand trends, predict outcomes, and
              optimize workforce strategies.
            </p>

            {/* KEY OFFERINGS */}
            <div className="mt-14">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                Our Workforce Analytics Capabilities
              </h2>

              <ul className="space-y-4 text-slate-700">
                <li>• Workforce data collection and integration</li>
                <li>• Talent performance and productivity analytics</li>
                <li>• Employee engagement and retention insights</li>
                <li>• Workforce forecasting and predictive analytics</li>
                <li>• Dashboards, KPIs, and executive reporting</li>
                <li>• Data-driven workforce strategy optimization</li>
              </ul>
            </div>

            {/* VALUE SECTION */}
            <div className="mt-14">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                How We Create Impact
              </h2>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                We work closely with HR, operations, and leadership teams to
                identify key workforce metrics and deliver insights aligned
                with business goals.
              </p>

              <p className="text-lg text-slate-700 leading-relaxed">
                By enabling evidence-based workforce decisions, we help
                organizations improve productivity, enhance engagement,
                reduce attrition, and build high-performing teams.
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

export default WorkforceAnalytics;
