import Footer from "components/ui/Footer";
import Header from "components/ui/Header";
import React from "react";

const SearchWorkforceManagement = () => {
  return (
    <>
      <main className="bg-white">
        <Header />

        {/* HERO SECTION */}
        <section className="relative h-[75vh] min-h-[520px] flex items-center">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/SearchWorkforceManagement.jpg')"
            }}
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />

          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
            <p className="text-sm tracking-wide uppercase text-blue-300 mb-4">
              FSTONE Technologies Services
            </p>

            <h1 className="text-4xl lg:text-6xl font-bold text-white max-w-4xl leading-tight">
              Search & Workforce Management
            </h1>

            <p className="mt-6 text-lg lg:text-xl text-gray-200 max-w-3xl leading-relaxed">
              Executive search and end-to-end workforce management solutions
              including RPO, MSP, and VMS implementation.
            </p>
          </div>
        </section>

        {/* CONTENT SECTION */}
        <section className="py-20">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">

            <p className="text-lg text-slate-700 leading-relaxed mb-8">
              Our Search & Workforce Management Services enable organizations
              to attract top leadership talent while managing large, complex
              workforces with efficiency and control.
            </p>

            <p className="text-lg text-slate-700 leading-relaxed mb-8">
              We provide structured workforce programs supported by data,
              technology platforms, and governance frameworks—ensuring
              visibility, compliance, and cost optimization.
            </p>

            {/* KEY OFFERINGS */}
            <div className="mt-14">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                Our Workforce Management Capabilities
              </h2>

              <ul className="space-y-4 text-slate-700">
                <li>• Executive and leadership search services</li>
                <li>• Recruitment Process Outsourcing (RPO)</li>
                <li>• Managed Service Provider (MSP) programs</li>
                <li>• Vendor Management System (VMS) implementation</li>
                <li>• Workforce analytics and reporting</li>
                <li>• Compliance, governance, and cost control</li>
              </ul>
            </div>

            {/* VALUE SECTION */}
            <div className="mt-14">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                How We Create Impact
              </h2>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                We help organizations gain full visibility into their workforce
                while improving talent quality, supplier performance, and
                operational efficiency.
              </p>

              <p className="text-lg text-slate-700 leading-relaxed">
                By aligning workforce strategy with business objectives, we
                enable scalable, compliant, and future-ready talent ecosystems.
              </p>
            </div>

          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default SearchWorkforceManagement;
