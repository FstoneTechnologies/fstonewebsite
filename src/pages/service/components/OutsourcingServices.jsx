import React from 'react';

const OutsourcingServices = () => {
  const services = [
    {
      title: 'IT Outsourcing',
      description:
        'End-to-end IT outsourcing services delivering reliable, scalable, and cost-effective technology operations.',
      image:
        'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&h=400&fit=crop'
    },
    {
      title: 'Engineering & Development Services',
      description:
        'Dedicated engineering teams for application development, maintenance, and product innovation.',
      image:
        'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop'
    },
    {
      title: 'Business Process Outsourcing',
      description:
        'BPO services across operations, support, and back-office functions to improve efficiency and reduce costs.',
      image:
        'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop'
    },
    {
      title: '24×7 Global Support',
      description:
        'Round-the-clock support services leveraging global delivery centers across India, US, and Europe.',
      image:
        'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&h=400&fit=crop'
    }
  ];

  return (
    <section className="bg-[#f2fbfc] py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="mb-14">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Outsourcing Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Trusted outsourcing services that enable businesses to focus on
            core objectives while we manage execution and operations.
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

export default OutsourcingServices;
