import { link } from 'd3';
import React from 'react';
import { Link } from 'react-router-dom';

const BusinessConsulting = () => {
  const services = [
    {
      title: 'Business Strategy & Advisory',
      description:
        'We help organizations define clear business strategies aligned with market trends, digital innovation, and long-term growth objectives.',
      image:'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop',
      link: '/services/business-consulting/business-strategy-advisory'
    },
    {
      title: 'Process Optimization',
      description:
        'Streamline operations, improve efficiency, and reduce costs through data-driven process analysis and optimization.',
      image:'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
      link: '/services/business-consulting/process-optimization'
    },
    {
      title: 'Digital Business Transformation',
      description:
        'Enable digital-first business models by aligning people, processes, and technology for sustainable transformation.',
      image:'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&h=400&fit=crop',
      link: '/services/business-consulting/digital-business-transformation'
    },
    {
      title: 'Change & Risk Management',
      description:
        'Support organizational change with structured governance, risk mitigation, and change management frameworks.',
      image:'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&h=400&fit=crop',
      link: '/services/business-consulting/change-risk-management'
    }
  ];

  return (
    <section className="bg-[#f2fbfc] py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="mb-14">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Business Consulting
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl">
            We partner with organizations to optimize operations, drive
            transformation, and deliver measurable business outcomes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group cursor-pointer">

              <div className="relative overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="bg-gradient-to-br from-[#0E5CAD] to-[#0B8FA6] p-6 min-h-[260px]">
                <h3 className="text-xl font-semibold text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-white/90 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
                 {service.link && (
                                    <Link
                                      to={service.link}
                                      className="text-cyan-300 font-medium inline-flex items-center gap-2
                      transition-all duration-300 ease-out
                      hover:text-[#f99a0b] hover:scale-110"
                                    >
                                      Learn more
                                      <span className="text-lg transition-all duration-300 group-hover:translate-x-1">
                                        →
                                      </span>
                                    </Link>
                                  )}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default BusinessConsulting;
