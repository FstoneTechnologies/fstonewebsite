import Footer from "components/ui/Footer";
import Header from "components/ui/Header";
import React from "react";

const ApplicationModernization = () => {
  return (
    <>
      <main className="bg-white">
        <Header />

        {/* HERO SECTION */}
        <section className="relative h-[75vh] min-h-[520px] flex items-center">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/ApplicationModernization.jpg')"
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />

          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
            <p className="text-sm tracking-wide uppercase text-blue-300 mb-4">
              FSTONE Technologies Services
            </p>

            <h1 className="text-4xl lg:text-6xl font-bold text-white max-w-4xl leading-tight">
              Application Modernization
            </h1>

            <p className="mt-6 text-lg lg:text-xl text-gray-200 max-w-3xl leading-relaxed">
              Re-architect, refactor, and enhance applications to improve
              performance, scalability, security, and user experience.
            </p>
          </div>
        </section>

        {/* CONTENT SECTION */}
        <section className="py-20">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">

            <p className="text-lg text-slate-700 leading-relaxed mb-8">
              Our Application Modernization Consulting services help organizations
              transform legacy applications into modern, cloud-ready platforms
              that support innovation and business agility.
            </p>

            <p className="text-lg text-slate-700 leading-relaxed mb-8">
              We modernize applications using proven architectures, cloud-native
              technologies, and best practices to improve reliability, security,
              and maintainability.
            </p>

            {/* KEY OFFERINGS */}
            <div className="mt-14">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                Our Application Modernization Capabilities
              </h2>

              <ul className="space-y-4 text-slate-700">
                <li>• Application re-architecture and refactoring</li>
                <li>• Legacy system modernization</li>
                <li>• Cloud-native and microservices migration</li>
                <li>• Performance, scalability, and security improvements</li>
                <li>• DevOps and CI/CD enablement</li>
                <li>• User experience and interface enhancements</li>
              </ul>
            </div>

            {/* VALUE SECTION */}
            <div className="mt-14">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                How We Create Impact
              </h2>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                We work closely with engineering and business teams to modernize
                applications without disrupting ongoing operations.
              </p>

              <p className="text-lg text-slate-700 leading-relaxed">
                By modernizing applications strategically, we help organizations
                reduce technical debt, accelerate innovation, and improve overall
                system performance.
              </p>
            </div>

          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default ApplicationModernization
