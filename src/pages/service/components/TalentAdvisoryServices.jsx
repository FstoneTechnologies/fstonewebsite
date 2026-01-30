import ContactUs from "components/ui/ContactUs";
import Footer from "components/ui/Footer";
import Header from "components/ui/Header";
import React from "react";

const TalentAdvisoryServices = () => {
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
            backgroundImage: "url('/TalentAdvisoryServices.jpg')"
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
            Talent Advisory Services
          </h1>

          <p className="mt-6 text-lg lg:text-xl text-gray-200 max-w-3xl leading-relaxed">
            Build, develop, and retain a future-ready workforce with
            strategic talent insights and advisory services designed
            to drive long-term business performance.
          </p>
        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">

          <p className="text-lg text-slate-700 leading-relaxed mb-8">
            Our Talent Advisory Services help organizations design and implement
            people strategies that align workforce capabilities with business goals.
            With deep expertise in talent management, organizational design, and
            workforce planning, we partner with leaders to unlock the full potential
            of their people.
          </p>

          <p className="text-lg text-slate-700 leading-relaxed mb-8">
            We take a data-driven and human-centric approach to help businesses
            attract, engage, and retain high-performing teams while building
            resilient talent ecosystems that can adapt to changing market demands.
          </p>

          {/* KEY OFFERINGS */}
          <div className="mt-14">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Our Talent Advisory Capabilities
            </h2>

            <ul className="space-y-4 text-slate-700">
              <li>• Workforce strategy and long-term talent planning</li>
              <li>• Talent acquisition and employer branding advisory</li>
              <li>• Leadership assessment and succession planning</li>
              <li>• Employee engagement and retention strategies</li>
              <li>• Performance management and capability development</li>
              <li>• Organizational design and change management</li>
            </ul>
          </div>

          {/* VALUE SECTION */}
          <div className="mt-14">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              How We Create Impact
            </h2>

            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              We work closely with leadership teams to identify workforce gaps,
              anticipate future skills needs, and implement scalable talent
              solutions that improve productivity, engagement, and business agility.
            </p>

            <p className="text-lg text-slate-700 leading-relaxed">
              By aligning talent strategies with organizational objectives,
              we help companies build a competitive advantage through people.
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

export default TalentAdvisoryServices;
