import React from 'react';

const TechnologyConsulting = () => {
  const services = [
    {
      title: 'Digital Transformation',
      description:
        'We help organizations modernize their digital landscape by transforming legacy systems, processes, and platforms into scalable, cloud-ready solutions.',
      image: '/DigitalTransformation.jpg'
        
    },
    {
      title: 'Cloud & Infrastructure Consulting',
      description:
        'Strategic cloud consulting to design, migrate, and optimize secure infrastructure across AWS, Azure, and hybrid environments.',
      image:
        '/cloud.jpg'
    },
    {
      title: 'Application Modernization',
      description:
        'Re-architect, refactor, and enhance applications to improve performance, scalability, security, and user experience.',
      image:
        'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop'
    },
    {
      title: 'Data, Analytics & AI',
      description:
        'Leverage data-driven insights, advanced analytics, and AI solutions to enable smarter decision-making and business innovation.',
      image:
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop'
    }
  ];

  return (
    <section className="bg-[#f2fbfc] py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="mb-14">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Technology Consulting
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl">
            We partner with businesses to design, build, and scale future-ready
            technology solutions that drive innovation, efficiency, and growth.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
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

              {/* Text Block */}
              <div className="bg-gradient-to-br from-[#0E5CAD] to-[#0B8FA6] p-6 min-h-[260px]">
                <h3 className="text-xl font-semibold text-white mb-4">
                  {service.title}
                </h3>

                <p className="text-white/90 leading-relaxed text-sm mb-6">
                  {service.description}
                </p>

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

      </div>
    </section>
  );
};

export default TechnologyConsulting;
