import Footer from "components/ui/Footer";
import Header from "components/ui/Header";
import React from "react";

const CloudInfrastructureConsulting = () => {
  return (
    <>
      <main className="bg-white">
        <Header />

        <section className="relative h-[75vh] min-h-[520px] flex items-center">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/CloudInfrastructure.jpg')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />

          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
            <p className="text-sm uppercase text-blue-300 mb-4">
              FSTONE Technologies Services
            </p>
            <h1 className="text-4xl lg:text-6xl font-bold text-white">
              Cloud & Infrastructure Consulting
            </h1>
            <p className="mt-6 text-lg lg:text-xl text-gray-200 max-w-3xl">
              Strategic cloud consulting to design, migrate, and optimize secure
              infrastructure across hybrid and multi-cloud environments.
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <p className="text-lg text-slate-700 mb-8">
              We help organizations build resilient, scalable, and secure cloud
              infrastructures aligned with business needs.
            </p>

            <p className="text-lg text-slate-700 mb-8">
              Our experts guide cloud adoption across AWS, Azure, and hybrid
              platforms.
            </p>

            <div className="mt-14">
              <h2 className="text-2xl font-bold mb-6">
                Our Cloud & Infrastructure Capabilities
              </h2>
              <ul className="space-y-4 text-slate-700">
                <li>• Cloud strategy and architecture</li>
                <li>• Migration and modernization</li>
                <li>• Hybrid and multi-cloud solutions</li>
                <li>• Infrastructure security and governance</li>
                <li>• Cost optimization and performance tuning</li>
              </ul>
            </div>

            <div className="mt-14">
              <h2 className="text-2xl font-bold mb-6">
                How We Create Impact
              </h2>
              <p className="text-lg text-slate-700 mb-6">
                We enable faster deployments, improved reliability, and lower
                infrastructure costs.
              </p>
              <p className="text-lg text-slate-700">
                Our approach ensures cloud environments are secure, scalable,
                and future-ready.
              </p>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default CloudInfrastructureConsulting;
