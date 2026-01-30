import ContactUs from "components/ui/ContactUs";
import Footer from "components/ui/Footer";
import Header from "components/ui/Header";
import React from "react";

const BusinessProcessOutsourcing = () => {
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
              backgroundImage: "url('/bps.jpg')"
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
              Business Process Outsourcing
            </h1>

            <p className="mt-6 text-lg lg:text-xl text-gray-200 max-w-3xl leading-relaxed">
              BPO services across operations, support, and back-office functions
              to improve efficiency, scalability, and cost effectiveness.
            </p>
          </div>
        </section>

        {/* CONTENT SECTION */}
        <section className="py-20">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">

            <p className="text-lg text-slate-700 leading-relaxed mb-8">
              Our Business Process Outsourcing services help organizations
              streamline non-core operations, enhance service quality, and
              reduce operational costs through structured and scalable delivery
              models.
            </p>

            <p className="text-lg text-slate-700 leading-relaxed mb-8">
              We combine process expertise, technology enablement, and skilled
              teams to deliver reliable BPO solutions that support business
              continuity and long-term growth.
            </p>

            {/* KEY OFFERINGS */}
            <div className="mt-14">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                Our BPO Capabilities
              </h2>

              <ul className="space-y-4 text-slate-700">
                <li>• Back-office operations and administrative services</li>
                <li>• Customer support and service operations</li>
                <li>• Finance, accounting, and reporting processes</li>
                <li>• HR operations and workforce support services</li>
                <li>• Process automation and workflow optimization</li>
                <li>• SLA-driven service delivery and governance</li>
              </ul>
            </div>

            {/* VALUE SECTION */}
            <div className="mt-14">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                How We Create Impact
              </h2>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                We work closely with clients to understand operational needs,
                service expectations, and performance goals—designing BPO
                solutions that deliver measurable results.
              </p>

              <p className="text-lg text-slate-700 leading-relaxed">
                By outsourcing business processes to experienced teams, we help
                organizations improve efficiency, reduce costs, and focus on
                strategic initiatives that drive growth and innovation.
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

export default BusinessProcessOutsourcing;
