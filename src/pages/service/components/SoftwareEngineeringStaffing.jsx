import Footer from "components/ui/Footer";
import Header from "components/ui/Header";
import React from "react";

const SoftwareEngineeringStaffing = () => {
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
              backgroundImage: "url('/SoftwareEngineeringStaffing.jpg')"
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
              Software Engineering Staffing
            </h1>

            <p className="mt-6 text-lg lg:text-xl text-gray-200 max-w-3xl leading-relaxed">
              Experienced software engineers delivering reliable, scalable,
              and high-quality solutions across modern technology stacks.
            </p>
          </div>
        </section>

        {/* CONTENT SECTION */}
        <section className="py-20">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">

            <p className="text-lg text-slate-700 leading-relaxed mb-8">
              Our Software Engineering Staffing Services help organizations
              strengthen development teams with skilled engineers who bring
              deep technical expertise and hands-on delivery experience.
            </p>

            <p className="text-lg text-slate-700 leading-relaxed mb-8">
              We provide flexible staffing models that support application
              development, system modernization, and large-scale digital
              transformation initiatives.
            </p>

            {/* KEY OFFERINGS */}
            <div className="mt-14">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                Our Software Engineering Capabilities
              </h2>

              <ul className="space-y-4 text-slate-700">
                <li>• Full-stack software development expertise</li>
                <li>• Enterprise and cloud-native application development</li>
                <li>• Microservices and API-based architectures</li>
                <li>• Agile and DevOps-driven delivery models</li>
                <li>• Application modernization and refactoring</li>
                <li>• Quality-focused development and testing practices</li>
              </ul>
            </div>

            {/* VALUE SECTION */}
            <div className="mt-14">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                How We Create Impact
              </h2>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                We align engineering talent with your technology stack,
                delivery timelines, and business objectives—ensuring seamless
                integration into your existing teams.
              </p>

              <p className="text-lg text-slate-700 leading-relaxed">
                By providing highly capable software engineers on demand,
                we help organizations accelerate development cycles, improve
                code quality, and deliver scalable solutions with confidence.
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

export default SoftwareEngineeringStaffing;
