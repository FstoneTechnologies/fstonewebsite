import ContactUs from "components/ui/ContactUs";
import Footer from "components/ui/Footer";
import Header from "components/ui/Header";
import React from "react";

const WebDevelopmentStaffing = () => {
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
              backgroundImage: "url('/web.jpg')"
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
              Web Development Staffing
            </h1>

            <p className="mt-6 text-lg lg:text-xl text-gray-200 max-w-3xl leading-relaxed">
              Skilled frontend and backend developers delivering scalable,
              secure, and high-performance web applications tailored to
              modern business needs.
            </p>
          </div>
        </section>

        {/* CONTENT SECTION */}
        <section className="py-20">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">

            <p className="text-lg text-slate-700 leading-relaxed mb-8">
              Our Web Development Staffing Services help organizations quickly
              scale their digital teams with experienced frontend and backend
              developers who align with project requirements, technology stacks,
              and business goals.
            </p>

            <p className="text-lg text-slate-700 leading-relaxed mb-8">
              By combining technical expertise with a flexible staffing model,
              we enable businesses to accelerate development, improve product
              quality, and respond rapidly to changing market demands.
            </p>

            {/* KEY OFFERINGS */}
            <div className="mt-14">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                Our Web Development Capabilities
              </h2>

              <ul className="space-y-4 text-slate-700">
                <li>• Frontend development using React, Angular, and Vue</li>
                <li>• Backend development with Java, Node.js, .NET, and PHP</li>
                <li>• Full-stack web application development</li>
                <li>• API and microservices architecture</li>
                <li>• Secure, scalable, and performance-optimized solutions</li>
                <li>• Agile delivery and collaborative development models</li>
              </ul>
            </div>

            {/* VALUE SECTION */}
            <div className="mt-14">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                How We Create Impact
              </h2>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                We work closely with clients to understand application goals,
                technical challenges, and delivery timelines—ensuring the right
                developers are onboarded quickly and effectively.
              </p>

              <p className="text-lg text-slate-700 leading-relaxed">
                By providing skilled web development professionals on demand,
                we help organizations reduce development risk, improve speed to
                market, and build reliable digital platforms that scale with
                business growth.
              </p>
            </div>

          </div>
        </section>

        {/* FOOTER */}
        
        <ContactUs/>
        <Footer />
      </main>
    </>
  );
};

export default WebDevelopmentStaffing;
