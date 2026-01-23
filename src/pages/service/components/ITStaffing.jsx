import React, { useState } from 'react';

const ITStaffing = () => {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 4;

  const services = [
    {
      title: 'Web Development',
      description:
        'Skilled frontend and backend developers delivering scalable, secure, and high-performance web applications.',
      image: '/webdevelopment.webp'
    },
    {
      title: 'Mainframe Programming',
      description:
        'Experienced mainframe professionals skilled in COBOL, JCL, DB2, and enterprise legacy systems.',
      image: '/Mainframedev.avif'
    },
    {
      title: 'Business Analysis',
      description:
        'Business analysts bridging business goals and technology with data-driven insights.',
      image: '/BusinessAnalysis.webp'
    },
    {
      title: 'Software Development & Engineering',
      description:
        'Experienced software engineers across technologies to design, build, and maintain enterprise-grade solutions.',
      image: '/softwaredevelopment.webp'
    },
    {
      title: 'Database Development',
      description:
        'Database architects and developers skilled in design, optimization, migration, and performance tuning.',
      image: '/database-building.jpg'
    },
    {
      title: 'Network Engineering',
      description:
        'Network engineers ensuring secure, scalable, and high-availability IT infrastructure.',
      image: '/NetworkEngineering.avif'
    },
    {
      title: 'System Analysis',
      description:
        'System analysts evaluating, designing, and improving IT systems to meet business needs.',
      image: '/SystemAnalysis.avif'
    },
    {
      title: 'Help Desk & Technical Support',
      description:
        'Help-desk professionals providing reliable L1–L3 technical support and incident resolution.',
      image: '/HelpDesk.webp'
    }
  ];

  const handleNext = () => {
    if (startIndex + visibleCount < services.length) {
      setStartIndex(startIndex + visibleCount);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - visibleCount);
    }
  };

  return (
    <section className="bg-[#f2fbfc] py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="mb-14">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            IT Staff Augmentation
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl">
            FSTONE Technologies uses its expertise, resources, and a database of
            1M+ candidates to quickly connect you with top talent that fits your
            team and goals.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services
            .slice(startIndex, startIndex + visibleCount)
            .map((service, index) => (
              <div key={index} className="group cursor-pointer">

                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Text block */}
                <div className="bg-gradient-to-br from-[#0E5CAD] to-[#0B8FA6] p-6 min-h-[260px]">
                  <h3 className="text-xl font-semibold text-white mb-4">
                    {service.title}
                  </h3>
                  <p className="text-white/90 leading-relaxed text-sm mb-6">
                    {service.description}
                  </p>

                  {/* Learn more */}
                  <span
                    className="
                      text-cyan-300 font-medium inline-flex items-center gap-2
                      transition-all duration-300 ease-out
                      hover:text-[#f99a0b]
                      hover:scale-110
                    "
                  >
                    Learn more
                    <span
                      className="
                        text-lg transition-all duration-300 ease-out
                        hover:translate-x-1
                        hover:scale-125
                      "
                    >
                      →
                    </span>
                  </span>
                </div>

              </div>
            ))}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center gap-6 mt-12">
          <button
            onClick={handlePrev}
            disabled={startIndex === 0}
            className="px-6 py-2 rounded-lg border border-[#0B8FA6] text-[#0B8FA6]
              hover:bg-[#0B8FA6] hover:text-white transition disabled:opacity-40"
          >
            ← Previous
          </button>

          <button
            onClick={handleNext}
            disabled={startIndex + visibleCount >= services.length}
            className="px-6 py-2 rounded-lg border border-[#0B8FA6] text-[#0B8FA6]
              hover:bg-[#0B8FA6] hover:text-white transition disabled:opacity-40"
          >
            Next →
          </button>
        </div>

      </div>
    </section>
  );
};

export default ITStaffing;
