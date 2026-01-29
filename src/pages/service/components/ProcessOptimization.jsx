import Footer from "components/ui/Footer";
import Header from "components/ui/Header";
import React from "react";

const ProcessOptimization = () => {
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
              backgroundImage: "url('/ProcessOptimization.jpg')"
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
              Process Optimization
            </h1>

            <p className="mt-6 text-lg lg:text-xl text-gray-200 max-w-3xl leading-relaxed">
              Streamline operations, improve efficiency, and reduce costs through
              data-driven process analysis and optimization.
            </p>
          </div>
        </section>

        {/* CONTENT SECTION */}
        <section className="py-20">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">

            <p className="text-lg text-slate-700 leading-relaxed mb-8">
              Our Process Optimization services help organizations identify
              inefficiencies, eliminate bottlenecks, and improve operational
              performance across business and technology functions.
            </p>

            <p className="text-lg text-slate-700 leading-relaxed mb-8">
              By combining data-driven analysis with industry best practices,
              we enable businesses to optimize workflows, reduce costs, and
              enhance overall productivity.
            </p>

            {/* KEY OFFERINGS */}
            <div className="mt-14">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                Our Process Optimization Capabilities
              </h2>

              <ul className="space-y-4 text-slate-700">
                <li>• End-to-end process assessment and mapping</li>
                <li>• Identification of inefficiencies and bottlenecks</li>
                <li>• Data-driven performance analysis and KPIs</li>
                <li>• Process redesign and standardization</li>
                <li>• Automation and technology enablement</li>
                <li>• Continuous improvement and optimization frameworks</li>
              </ul>
            </div>

            {/* VALUE SECTION */}
            <div className="mt-14">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                How We Create Impact
              </h2>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                We collaborate closely with business leaders and operations
                teams to design optimized processes aligned with strategic
                goals and operational realities.
              </p>

              <p className="text-lg text-slate-700 leading-relaxed">
                By improving efficiency, reducing waste, and enabling scalable
                operations, we help organizations achieve measurable cost
                savings and sustainable performance improvements.
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

export default ProcessOptimization;
