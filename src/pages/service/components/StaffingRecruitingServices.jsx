import Footer from "components/ui/Footer";
import Header from "components/ui/Header";
import React from "react";

const StaffingRecruitingServices = () => {
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
              backgroundImage: "url('/StaffingRecruitingServices.jpg')"
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
              Staffing & Recruiting Services
            </h1>

            <p className="mt-6 text-lg lg:text-xl text-gray-200 max-w-3xl leading-relaxed">
              Contract and permanent staffing solutions across industries to
              secure the right talent for evolving business needs.
            </p>
          </div>
        </section>

        {/* CONTENT SECTION */}
        <section className="py-20">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">

            <p className="text-lg text-slate-700 leading-relaxed mb-8">
              Our Staffing & Recruiting Services help organizations build agile,
              high-performing teams by connecting them with the right talent at
              the right time. We support businesses across industries with
              flexible staffing models that scale with growth, transformation,
              and operational demands.
            </p>

            <p className="text-lg text-slate-700 leading-relaxed mb-8">
              With deep domain expertise and a strong talent network, we deliver
              skilled professionals who align with your technical requirements,
              organizational culture, and long-term business objectives—ensuring
              faster hiring and sustained workforce performance.
            </p>

            {/* KEY OFFERINGS */}
            <div className="mt-14">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                Our Staffing & Recruiting Capabilities
              </h2>

              <ul className="space-y-4 text-slate-700">
                <li>• Contract staffing for short-term and long-term needs</li>
                <li>• Permanent hiring for key and leadership roles</li>
                <li>• IT & non-IT recruitment across industries</li>
                <li>• Specialized hiring for niche technologies</li>
                <li>• Workforce augmentation and managed staffing</li>
                <li>• End-to-end recruitment lifecycle management</li>
              </ul>
            </div>

            {/* VALUE SECTION */}
            <div className="mt-14">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                How We Create Impact
              </h2>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                We collaborate closely with clients to understand their business
                goals, workforce challenges, and role requirements—allowing us
                to deliver talent solutions that reduce hiring timelines and
                improve retention.
              </p>

              <p className="text-lg text-slate-700 leading-relaxed">
                By combining market insights, proven hiring strategies, and a
                people-first approach, we help organizations build strong,
                scalable teams that drive long-term success.
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

export default StaffingRecruitingServices;
