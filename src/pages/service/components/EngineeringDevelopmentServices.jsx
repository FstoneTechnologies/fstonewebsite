import ContactUs from "components/ui/ContactUs";
import Footer from "components/ui/Footer";
import Header from "components/ui/Header";
import React from "react";

const EngineeringDevelopmentServices = () => {
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
              backgroundImage: "url('/eds.jpg')"
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
              Engineering & Development Services
            </h1>

            <p className="mt-6 text-lg lg:text-xl text-gray-200 max-w-3xl leading-relaxed">
              Dedicated engineering teams for application development,
              maintenance, and product innovation.
            </p>
          </div>
        </section>

        {/* CONTENT SECTION */}
        <section className="py-20">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">

            <p className="text-lg text-slate-700 leading-relaxed mb-8">
              Our Engineering & Development Services provide organizations with
              dedicated, high-performing engineering teams to design, build,
              maintain, and enhance digital products and enterprise applications.
            </p>

            <p className="text-lg text-slate-700 leading-relaxed mb-8">
              We combine technical excellence, agile delivery practices, and
              deep domain expertise to accelerate innovation while ensuring
              quality, scalability, and long-term maintainability.
            </p>

            {/* KEY OFFERINGS */}
            <div className="mt-14">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                Our Engineering & Development Capabilities
              </h2>

              <ul className="space-y-4 text-slate-700">
                <li>• Dedicated engineering and product development teams</li>
                <li>• Custom application development and enhancement</li>
                <li>• Product engineering and innovation support</li>
                <li>• Application maintenance and modernization</li>
                <li>• Agile, DevOps, and CI/CD-driven delivery</li>
                <li>• Quality assurance and continuous improvement</li>
              </ul>
            </div>

            {/* VALUE SECTION */}
            <div className="mt-14">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                How We Create Impact
              </h2>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                We align engineering teams with your business objectives,
                technology stack, and delivery roadmap to ensure seamless
                collaboration and predictable outcomes.
              </p>

              <p className="text-lg text-slate-700 leading-relaxed">
                By providing scalable engineering capacity and innovation
                expertise, we help organizations accelerate product delivery,
                reduce technical risk, and build solutions that drive long-term
                business value.
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

export default EngineeringDevelopmentServices;
