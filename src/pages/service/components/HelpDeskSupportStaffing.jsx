import ContactUs from "components/ui/ContactUs";
import Footer from "components/ui/Footer";
import Header from "components/ui/Header";
import React from "react";

const HelpDeskSupportStaffing = () => {
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
              backgroundImage: "url('/24x7.jpg')"
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
              Help Desk & Technical Support Staffing
            </h1>

            <p className="mt-6 text-lg lg:text-xl text-gray-200 max-w-3xl leading-relaxed">
              Reliable help desk and technical support professionals delivering
              fast, efficient, and customer-focused IT support services.
            </p>
          </div>
        </section>

        {/* CONTENT SECTION */}
        <section className="py-20">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">

            <p className="text-lg text-slate-700 leading-relaxed mb-8">
              Our Help Desk & Technical Support Staffing Services provide
              organizations with skilled support professionals who ensure
              smooth day-to-day IT operations and positive end-user experiences.
            </p>

            <p className="text-lg text-slate-700 leading-relaxed mb-8">
              We offer flexible staffing models to support L1, L2, and L3
              service desks, enabling businesses to resolve incidents quickly
              and maintain high service quality.
            </p>

            {/* KEY OFFERINGS */}
            <div className="mt-14">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                Our Help Desk & Support Capabilities
              </h2>

              <ul className="space-y-4 text-slate-700">
                <li>• Level 1, Level 2, and Level 3 technical support</li>
                <li>• Incident, problem, and request management</li>
                <li>• Desktop, application, and system support</li>
                <li>• ITSM tools and service desk platforms</li>
                <li>• 24×7 support and shift-based staffing</li>
                <li>• SLA-driven service delivery and reporting</li>
              </ul>
            </div>

            {/* VALUE SECTION */}
            <div className="mt-14">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                How We Create Impact
              </h2>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                We work closely with IT operations teams to understand support
                volumes, service expectations, and escalation processes—ensuring
                the right support talent is deployed from day one.
              </p>

              <p className="text-lg text-slate-700 leading-relaxed">
                By providing dependable help desk professionals, we help
                organizations reduce downtime, improve user satisfaction,
                and maintain consistent, high-quality IT support services.
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

export default HelpDeskSupportStaffing;
