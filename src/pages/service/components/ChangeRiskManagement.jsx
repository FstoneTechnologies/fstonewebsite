
import ContactUs from "components/ui/ContactUs";
import Footer from "components/ui/Footer";
import Header from "components/ui/Header";
import React from "react";

const ChangeRiskManagement = () => {
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
              backgroundImage: "url('/risk.jpg')"
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
              Change & Risk Management
            </h1>

            <p className="mt-6 text-lg lg:text-xl text-gray-200 max-w-3xl leading-relaxed">
              Support organizational change with structured governance, risk
              mitigation, and change management frameworks.
            </p>
          </div>
        </section>

        {/* CONTENT SECTION */}
        <section className="py-20">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">

            <p className="text-lg text-slate-700 leading-relaxed mb-8">
              Our Change & Risk Management services help organizations navigate
              complex transformations while minimizing disruption and managing
              operational, technology, and compliance risks.
            </p>

            <p className="text-lg text-slate-700 leading-relaxed mb-8">
              We provide structured frameworks, governance models, and practical
              change management strategies to ensure successful adoption and
              sustainable outcomes.
            </p>

            {/* KEY OFFERINGS */}
            <div className="mt-14">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                Our Change & Risk Management Capabilities
              </h2>

              <ul className="space-y-4 text-slate-700">
                <li>• Change management strategy and planning</li>
                <li>• Risk identification, assessment, and mitigation</li>
                <li>• Governance frameworks and controls</li>
                <li>• Stakeholder engagement and communication planning</li>
                <li>• Compliance, audit, and regulatory risk management</li>
                <li>• Training, adoption, and readiness management</li>
              </ul>
            </div>

            {/* VALUE SECTION */}
            <div className="mt-14">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                How We Create Impact
              </h2>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                We work closely with leadership and delivery teams to anticipate
                risks early and design proactive mitigation strategies.
              </p>

              <p className="text-lg text-slate-700 leading-relaxed">
                By enabling structured change and effective risk management,
                we help organizations execute transformation initiatives with
                confidence, control, and long-term success.
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

export default ChangeRiskManagement;
