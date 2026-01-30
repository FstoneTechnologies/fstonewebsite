import ContactUs from "components/ui/ContactUs";
import Footer from "components/ui/Footer";
import Header from "components/ui/Header";
import React from "react";

const NetworkEngineeringStaffing = () => {
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
              backgroundImage: "url('/nt.jpg')"
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
              Network Engineering Staffing
            </h1>

            <p className="mt-6 text-lg lg:text-xl text-gray-200 max-w-3xl leading-relaxed">
              Skilled network engineers delivering secure, scalable, and
              high-availability infrastructure solutions.
            </p>
          </div>
        </section>

        {/* CONTENT SECTION */}
        <section className="py-20">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">

            <p className="text-lg text-slate-700 leading-relaxed mb-8">
              Our Network Engineering Staffing Services help organizations
              design, implement, and manage resilient network infrastructures
              that support business-critical operations.
            </p>

            <p className="text-lg text-slate-700 leading-relaxed mb-8">
              By providing experienced network professionals, we enable
              businesses to maintain secure connectivity, ensure uptime,
              and scale infrastructure in line with growth demands.
            </p>

            {/* KEY OFFERINGS */}
            <div className="mt-14">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                Our Network Engineering Capabilities
              </h2>

              <ul className="space-y-4 text-slate-700">
                <li>• Network design and architecture</li>
                <li>• LAN, WAN, and wireless networking</li>
                <li>• Network security and firewall management</li>
                <li>• Cloud and hybrid network integration</li>
                <li>• Performance monitoring and optimization</li>
                <li>• Incident response and 24×7 network support</li>
              </ul>
            </div>

            {/* VALUE SECTION */}
            <div className="mt-14">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                How We Create Impact
              </h2>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                We work closely with IT and security teams to align network
                infrastructure with performance, compliance, and reliability
                requirements.
              </p>

              <p className="text-lg text-slate-700 leading-relaxed">
                By deploying skilled network engineers on demand, we help
                organizations reduce downtime, strengthen security, and
                build scalable infrastructure for long-term success.
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

export default NetworkEngineeringStaffing;
