import React from 'react';

const WorkforceSolutions = () => {
  const services = [
    {
      title: 'Workforce Planning',
      description:
        'Strategic workforce planning to align talent supply with business demand across geographies and functions.',
      image:
        'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600&h=400&fit=crop'
    },
    {
      title: 'RPO & MSP Services',
      description:
        'End-to-end recruitment process outsourcing (RPO) and managed service provider (MSP) solutions.',
      image:
        'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&h=400&fit=crop'
    },
    {
      title: 'Workforce Analytics',
      description:
        'Leverage workforce data and analytics to improve productivity, engagement, and workforce performance.',
      image:
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop'
    },
    {
      title: 'Compliance & Governance',
      description:
        'Ensure workforce compliance, risk mitigation, and governance across contracts, vendors, and regions.',
      image:
        'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop'
    }
  ];

  return (
    <section className="bg-[#f2fbfc] py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="mb-14">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Workforce Solutions
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Flexible and scalable workforce solutions designed to help
            organizations adapt, grow, and stay competitive.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group cursor-pointer">

              <div className="relative overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              <div className="bg-gradient-to-br from-[#0E5CAD] to-[#0B8FA6] p-6 min-h-[260px]">
                <h3 className="text-xl font-semibold text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-white/90 text-sm mb-6">
                  {service.description}
                </p>
                <span className="text-cyan-300 hover:text-[#f99a0b] transition-all">
                  Learn more →
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WorkforceSolutions;
