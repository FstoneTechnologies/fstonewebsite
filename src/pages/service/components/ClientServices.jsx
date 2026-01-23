
import React from 'react';

const ClientServices = () => {
  const services = [
    {
      title: 'Talent Advisory Services',
      description:
        'Strategic talent advisory to help organisations attract, develop, and retain high-performing teams aligned with business goals.',
      image:
        'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600&h=400&fit=crop'
    },
    {
      title: 'Staffing & Recruiting Services',
      description:
        'Contract and permanent staffing solutions across industries to secure the right talent for evolving business needs.',
      image:
        'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&h=400&fit=crop'
    },
    {
      title: 'Managed Delivery Services',
      description:
        'Managed, project-based, and outsourced service delivery across IT, engineering, clinical, and business operations.',
      image:
        'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&h=400&fit=crop'
    },
    {
      title: 'Search & Workforce Management',
      description:
        'Executive search and end-to-end workforce management solutions including RPO, MSP, and VMS implementation.',
      image:
        'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&h=400&fit=crop'
    }
  ];

  return (
    <section className="bg-[#f2fbfc] py-20">


      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="mb-14">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Client Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl">
            We deliver comprehensive workforce and talent solutions designed
            to help organisations scale efficiently and perform at their best.
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

              {/* Text block */}
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

export default ClientServices;
