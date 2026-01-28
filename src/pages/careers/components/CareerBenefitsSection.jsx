import React, { useEffect, useRef, useState } from "react";

/* 🔹 Reusable hook for scroll reveal */
const useInView = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); // animate only once
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return [ref, visible];
};

const CareerBenefitsSection = () => {
  const [cardsRef, showCards] = useInView();

  return (
    <section className="py-24 bg-white">

      {/* HEADING */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
          We Care About Our Team Members
        </h2>

        <p className="mt-6 text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed">
          At FSTONE Technologies we encourage learning and development throughout
          your career, and provide regular training, mentoring, and networking
          opportunities to help you enhance your skills. A career at Fstone also offers:
        </p>
      </div>

      {/* FULL WIDTH BACKGROUND IMAGE */}
      <div
        className="relative mt-16 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/career-bg.jpg')" }}
      >
        {/* CONTENT WRAPPER */}
        <div
          ref={cardsRef}
          className={`max-w-7xl mx-auto px-6 lg:px-8 py-15
            transition-all duration-700 ease-out
            ${showCards ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}
          `}
        >

          {/* TOP ROW (3 cards) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              "Flexibility",
              "Competitive compensation",
              "Comprehensive medical coverage",
            ].map((title, index) => (
              <div
                key={index}
                style={{ transitionDelay: `${index * 120}ms` }}
                className="
                  bg-[#0B8FA6]
                  rounded-2xl
                  px-8 py-12
                  shadow-md
                  flex items-center justify-center
                  transition-all duration-700
                  hover:shadow-lg hover:-translate-y-1
                "
              >
                <h3 className="text-lg font-semibold text-white text-center">
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
                style={{ transitionDelay: `${(index + 3) * 120}ms` }}
                className="
                  w-full sm:w-[300px]
                  bg-[#0B8FA6]
                  rounded-2xl
                  px-8 py-12
                  shadow-md
                  flex items-center justify-center
                  transition-all duration-700
                  hover:shadow-lg hover:-translate-y-1
                "
              >
                <h3 className="text-lg font-semibold text-white text-center">
                  {title}
                </h3>
              </div>
            ))}
          </div>

        </div>
      </div>

    </section>
  );
};

export default CareerBenefitsSection;
