import Footer from "components/ui/Footer";
import Header from "components/ui/Header";
import React from "react";

const ManagedDeliveryServices = () => {
  return (
    <>
      <main className="bg-white">
        <Header />

        {/* HERO SECTION */}
        <section className="relative h-[75vh] min-h-[520px] flex items-center">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/ManagedDeliveryServices.jpg')"
            }}
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />

          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
            <p className="text-sm tracking-wide uppercase text-blue-300 mb-4">
              FSTONE Technologies Services
            </p>

            <h1 className="text-4xl lg:text-6xl font-bold text-white max-w-4xl leading-tight">
              Managed Delivery Services
            </h1>

            <p className="mt-6 text-lg lg:text-xl text-gray-200 max-w-3xl leading-relaxed">
              Managed, project-based, and outsourced service delivery across
              IT, engineering, clinical, and business operations.
            </p>
          </div>
        </section>

        {/* CONTENT SECTION */}
        <section className="py-20">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">

            <p className="text-lg text-slate-700 leading-relaxed mb-8">
              Our Managed Delivery Services help organizations streamline
              operations, optimize costs, and accelerate outcomes through
              structured, accountable service delivery models.
            </p>

            <p className="text-lg text-slate-700 leading-relaxed mb-8">
              We take ownership of delivery execution by combining skilled
              teams, proven frameworks, and strong governance—allowing
              businesses to focus on core priorities while we manage outcomes.
            </p>

            {/* KEY OFFERINGS */}
            <div className="mt-14">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                Our Managed Delivery Capabilities
              </h2>

              <ul className="space-y-4 text-slate-700">
                <li>• Project-based delivery and execution ownership</li>
                <li>• Managed services across IT and business functions</li>
                <li>• Outcome-driven SLAs and governance models</li>
                <li>• Scalable delivery teams and resource management</li>
                <li>• Process optimization and operational excellence</li>
                <li>• Continuous improvement and performance tracking</li>
              </ul>
            </div>

            {/* VALUE SECTION */}
            <div className="mt-14">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                How We Create Impact
              </h2>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                We partner with clients to define clear objectives, delivery
                metrics, and governance structures—ensuring predictable,
                high-quality outcomes.
              </p>

              <p className="text-lg text-slate-700 leading-relaxed">
                By reducing operational complexity and improving execution
                efficiency, we help organizations scale faster with confidence.
              </p>
            </div>

          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default ManagedDeliveryServices;
