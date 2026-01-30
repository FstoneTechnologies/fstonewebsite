import ContactUs from "components/ui/ContactUs";
import Footer from "components/ui/Footer";
import Header from "components/ui/Header";
import React from "react";

const DataAnalyticsAI = () => {
  return (
    <>
      <main className="bg-white">
        <Header />

        {/* HERO SECTION */}
        <section className="relative h-[75vh] min-h-[520px] flex items-center">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/dataa.jpg')"
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />

          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
            <p className="text-sm tracking-wide uppercase text-blue-300 mb-4">
              FSTONE Technologies Services
            </p>

            <h1 className="text-4xl lg:text-6xl font-bold text-white max-w-4xl leading-tight">
              Data, Analytics & AI
            </h1>

            <p className="mt-6 text-lg lg:text-xl text-gray-200 max-w-3xl leading-relaxed">
              Leverage data-driven insights, advanced analytics, and AI solutions
              to enable smarter decision-making and business innovation.
            </p>
          </div>
        </section>

        {/* CONTENT SECTION */}
        <section className="py-20">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">

            <p className="text-lg text-slate-700 leading-relaxed mb-8">
              Our Data, Analytics & AI Consulting services help organizations
              unlock the full value of their data through modern analytics
              platforms and intelligent solutions.
            </p>

            <p className="text-lg text-slate-700 leading-relaxed mb-8">
              We design and implement scalable data architectures, analytics
              solutions, and AI models that drive insights, efficiency, and
              competitive advantage.
            </p>

            {/* KEY OFFERINGS */}
            <div className="mt-14">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                Our Data, Analytics & AI Capabilities
              </h2>

              <ul className="space-y-4 text-slate-700">
                <li>• Data engineering and data platform design</li>
                <li>• Business intelligence and advanced analytics</li>
                <li>• AI and machine learning solutions</li>
                <li>• Predictive and prescriptive analytics</li>
                <li>• Cloud-based data lakes and warehouses</li>
                <li>• Data governance, security, and compliance</li>
              </ul>
            </div>

            {/* VALUE SECTION */}
            <div className="mt-14">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                How We Create Impact
              </h2>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                We align data strategy with business goals to ensure analytics
                initiatives deliver measurable value.
              </p>

              <p className="text-lg text-slate-700 leading-relaxed">
                By enabling intelligent, data-driven decision-making, we help
                organizations innovate faster and achieve sustainable growth.
              </p>
            </div>

          </div>
        </section>

        <ContactUs/>
        <Footer />
      </main>
    </>
  );
};

export default DataAnalyticsAI;
