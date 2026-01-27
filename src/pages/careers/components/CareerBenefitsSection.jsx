import React from "react";

const CareerBenefitsSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">

        {/* Heading */}
        <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
          We Care About Our Team Members
        </h2>

        {/* Description */}
        <p className="mt-6 text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed">
          At Fstone Technologies we encourage learning and development throughout
          your career, and provide regular training, mentoring, and networking
          opportunities to help you enhance your skills. A career at Fstone also offers:
        </p>

        {/* TOP ROW (3 cards) */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            "Flexibility",
            "Competitive compensation",
            "Comprehensive medical coverage",
          ].map((title, index) => (
            <div
              key={index}
              className="
                bg-[#fff6e1]
                rounded-2xl
                px-8 py-12
                shadow-sm
                flex items-center justify-center
                transition-all duration-300
                hover:shadow-lg hover:-translate-y-1
              "
            >
              <h3 className="text-lg font-semibold text-slate-900">
                {title}
              </h3>
            </div>
          ))}
        </div>

        {/* BOTTOM ROW (2 cards centered) */}
        <div className="mt-10 flex flex-wrap justify-center gap-10">
          {[
            "Learning & development",
            "Growth opportunities",
          ].map((title, index) => (
            <div
              key={index}
              className="
                w-full sm:w-[300px]
                bg-[#fff6e1]
                rounded-2xl
                px-8 py-12
                shadow-sm
                flex items-center justify-center
                transition-all duration-300
                hover:shadow-lg hover:-translate-y-1
              "
            >
              <h3 className="text-lg font-semibold text-slate-900">
                {title}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CareerBenefitsSection;
