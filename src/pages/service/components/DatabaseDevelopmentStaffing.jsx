import Footer from "components/ui/Footer";
import Header from "components/ui/Header";
import React from "react";

const DatabaseDevelopmentStaffing = () => {
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
              backgroundImage: "url('/DatabaseDevelopmentStaffing.jpg')"
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
              Database Development Staffing
            </h1>

            <p className="mt-6 text-lg lg:text-xl text-gray-200 max-w-3xl leading-relaxed">
              Experienced database architects and developers delivering
              secure, scalable, and high-performance data solutions.
            </p>
          </div>
        </section>

        {/* CONTENT SECTION */}
        <section className="py-20">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">

            <p className="text-lg text-slate-700 leading-relaxed mb-8">
              Our Database Development Staffing Services help organizations
              manage, optimize, and modernize data platforms that support
              mission-critical applications and analytics.
            </p>

            <p className="text-lg text-slate-700 leading-relaxed mb-8">
              By providing skilled database professionals, we enable businesses
              to ensure data reliability, improve system performance, and
              support scalable growth initiatives.
            </p>

            {/* KEY OFFERINGS */}
            <div className="mt-14">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                Our Database Development Capabilities
              </h2>

              <ul className="space-y-4 text-slate-700">
                <li>• Database design and data modeling</li>
                <li>• Performance tuning and query optimization</li>
                <li>• Data migration and modernization</li>
                <li>• High availability, backup, and recovery solutions</li>
                <li>• Cloud and on-premise database management</li>
                <li>• Data security, compliance, and governance</li>
              </ul>
            </div>

            {/* VALUE SECTION */}
            <div className="mt-14">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                How We Create Impact
              </h2>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                We collaborate with application and infrastructure teams to
                align database architecture with performance, scalability,
                and availability requirements.
              </p>

              <p className="text-lg text-slate-700 leading-relaxed">
                By delivering experienced database professionals on demand,
                we help organizations reduce operational risk, enhance data
                performance, and support long-term business objectives.
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

export default DatabaseDevelopmentStaffing;
