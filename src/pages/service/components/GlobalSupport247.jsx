import ContactUs from "components/ui/ContactUs";
import Footer from "components/ui/Footer";
import Header from "components/ui/Header";
import React from "react";

const GlobalSupport247 = () => {
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
              backgroundImage: "url('/global.jpg')"
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
              24×7 Global Support
            </h1>

            <p className="mt-6 text-lg lg:text-xl text-gray-200 max-w-3xl leading-relaxed">
              Round-the-clock support services leveraging global delivery centers
              across India, the US, and Europe.
            </p>
          </div>
        </section>

        {/* CONTENT SECTION */}
        <section className="py-20">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">

            <p className="text-lg text-slate-700 leading-relaxed mb-8">
              Our 24×7 Global Support services ensure uninterrupted business
              operations by providing continuous technical, application, and
              operational support across multiple time zones.
            </p>

            <p className="text-lg text-slate-700 leading-relaxed mb-8">
              With globally distributed delivery centers and experienced support
              teams, we help organizations maintain system availability, meet
              SLAs, and deliver consistent service quality around the clock.
            </p>

            {/* KEY OFFERINGS */}
            <div className="mt-14">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                Our 24×7 Global Support Capabilities
              </h2>

              <ul className="space-y-4 text-slate-700">
                <li>• Round-the-clock application and infrastructure support</li>
                <li>• Global service desk and help desk operations</li>
                <li>• Follow-the-sun delivery model</li>
                <li>• Incident, problem, and escalation management</li>
                <li>• SLA-driven monitoring and reporting</li>
                <li>• Multi-region support across India, US, and Europe</li>
              </ul>
            </div>

            {/* VALUE SECTION */}
            <div className="mt-14">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                How We Create Impact
              </h2>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                We design global support models aligned with your operational
                needs, customer expectations, and service-level commitments.
              </p>

              <p className="text-lg text-slate-700 leading-relaxed">
                By delivering continuous, reliable support services, we help
                organizations minimize downtime, improve customer satisfaction,
                and operate with confidence in a global business environment.
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

export default GlobalSupport247;
