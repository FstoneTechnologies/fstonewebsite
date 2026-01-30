import ContactUs from "components/ui/ContactUs";
import Footer from "components/ui/Footer";
import Header from "components/ui/Header";
import React from "react";

const RpoMspServices = () => {
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
              backgroundImage: "url('/rpo.jpg')"
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
              RPO & MSP Services
            </h1>

            <p className="mt-6 text-lg lg:text-xl text-gray-200 max-w-3xl leading-relaxed">
              End-to-end recruitment process outsourcing (RPO) and managed
              service provider (MSP) solutions designed to scale hiring and
              workforce management efficiently.
            </p>
          </div>
        </section>

        {/* CONTENT SECTION */}
        <section className="py-20">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">

            <p className="text-lg text-slate-700 leading-relaxed mb-8">
              Our RPO & MSP Services help organizations streamline recruitment
              operations, improve talent quality, and gain greater visibility
              and control over workforce programs.
            </p>

            <p className="text-lg text-slate-700 leading-relaxed mb-8">
              We manage the entire recruitment lifecycle and vendor ecosystem
              using structured processes, technology platforms, and
              performance-driven governance models.
            </p>

            {/* KEY OFFERINGS */}
            <div className="mt-14">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                Our RPO & MSP Capabilities
              </h2>

              <ul className="space-y-4 text-slate-700">
                <li>• End-to-end recruitment process outsourcing (RPO)</li>
                <li>• Managed Service Provider (MSP) program management</li>
                <li>• Vendor management and supplier optimization</li>
                <li>• Talent pipeline development and workforce planning</li>
                <li>• Recruitment analytics and performance reporting</li>
                <li>• Compliance, governance, and cost control</li>
              </ul>
            </div>

            {/* VALUE SECTION */}
            <div className="mt-14">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                How We Create Impact
              </h2>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                We partner closely with HR and procurement teams to design
                scalable recruitment and workforce management programs that
                align with business growth objectives.
              </p>

              <p className="text-lg text-slate-700 leading-relaxed">
                By combining process excellence, technology enablement, and
                data-driven insights, we help organizations reduce hiring time,
                optimize costs, and improve workforce outcomes.
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

export default RpoMspServices;
