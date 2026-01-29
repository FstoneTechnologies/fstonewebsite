import Footer from "components/ui/Footer";
import Header from "components/ui/Header";
import React from "react";

const MainframeProgrammingStaffing = () => {
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
              backgroundImage: "url('/MainframeStaffing.jpg')"
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
              Mainframe Programming Staffing
            </h1>

            <p className="mt-6 text-lg lg:text-xl text-gray-200 max-w-3xl leading-relaxed">
              Expert mainframe professionals supporting mission-critical
              enterprise systems with stability, security, and performance.
            </p>
          </div>
        </section>

        {/* CONTENT SECTION */}
        <section className="py-20">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">

            <p className="text-lg text-slate-700 leading-relaxed mb-8">
              Our Mainframe Programming Staffing Services provide organizations
              with highly skilled professionals who specialize in maintaining,
              enhancing, and modernizing legacy enterprise systems.
            </p>

            <p className="text-lg text-slate-700 leading-relaxed mb-8">
              We help businesses ensure continuity, reliability, and scalability
              of their core systems while supporting modernization initiatives
              that align legacy platforms with evolving digital strategies.
            </p>

            {/* KEY OFFERINGS */}
            <div className="mt-14">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                Our Mainframe Programming Capabilities
              </h2>

              <ul className="space-y-4 text-slate-700">
                <li>• COBOL, JCL, and DB2 development and support</li>
                <li>• CICS, IMS, and batch processing systems</li>
                <li>• Legacy system maintenance and modernization</li>
                <li>• High-volume transaction processing</li>
                <li>• Performance tuning and system optimization</li>
                <li>• 24×7 production support and incident management</li>
              </ul>
            </div>

            {/* VALUE SECTION */}
            <div className="mt-14">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                How We Create Impact
              </h2>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                We work closely with enterprises to understand system complexity,
                operational risks, and modernization goals—deploying the right
                mainframe experts to ensure system stability and continuity.
              </p>

              <p className="text-lg text-slate-700 leading-relaxed">
                By providing reliable and experienced mainframe professionals,
                we help organizations reduce downtime, improve system efficiency,
                and extend the value of mission-critical legacy platforms.
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

export default MainframeProgrammingStaffing;
