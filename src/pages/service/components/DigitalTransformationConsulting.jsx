import Footer from "components/ui/Footer";
import Header from "components/ui/Header";
import React from "react";

const DigitalTransformationConsulting = () => {
  return (
    <>
      <main className="bg-white">
        <Header />

        <section className="relative h-[75vh] min-h-[520px] flex items-center">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/DigitalTransformation.jpg')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />

          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
            <p className="text-sm uppercase text-blue-300 mb-4">
              FSTONE Technologies Services
            </p>
            <h1 className="text-4xl lg:text-6xl font-bold text-white">
              Digital Transformation
            </h1>
            <p className="mt-6 text-lg lg:text-xl text-gray-200 max-w-3xl">
              Transform legacy systems, processes, and platforms into modern,
              scalable, and cloud-ready digital solutions.
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <p className="text-lg text-slate-700 mb-8">
              Our Digital Transformation Consulting services help organizations
              reimagine business models, modernize technology, and unlock new
              opportunities through innovation.
            </p>

            <p className="text-lg text-slate-700 mb-8">
              We combine strategy, technology, and execution to enable faster
              innovation, operational efficiency, and improved customer
              experiences.
            </p>

            <div className="mt-14">
              <h2 className="text-2xl font-bold mb-6">
                Our Digital Transformation Capabilities
              </h2>
              <ul className="space-y-4 text-slate-700">
                <li>• Legacy system modernization</li>
                <li>• Digital strategy and roadmap design</li>
                <li>• Process automation and optimization</li>
                <li>• Cloud-first transformation initiatives</li>
                <li>• Agile and DevOps adoption</li>
              </ul>
            </div>

            <div className="mt-14">
              <h2 className="text-2xl font-bold mb-6">
                How We Create Impact
              </h2>
              <p className="text-lg text-slate-700 mb-6">
                We partner with leadership teams to deliver measurable outcomes
                and sustainable transformation.
              </p>
              <p className="text-lg text-slate-700">
                Our approach ensures faster time-to-market, reduced costs, and
                scalable digital platforms.
              </p>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default DigitalTransformationConsulting;
