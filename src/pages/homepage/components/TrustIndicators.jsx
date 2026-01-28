
import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import LazyLoad from '../../../components/LazyLoad';

const TrustIndicators = () => {
  const trustMetrics = [
    {
      icon: 'Award',
      value: '20+',
      label: 'Years Experience',
      description: 'Workforce and business expertise',
      color: 'text-primary'
    },
    {
      icon: 'Layers',
      value: '250+',
      label: 'Projects Delivered',
      description: 'Successful client engagements',
      color: 'text-secondary'
    },
    {
      icon: 'Users',
      value: '90+',
      label: 'Clients Served',
      description: 'Successful enterprise partnerships',
      color: 'text-accent'
    },
    {
      icon: 'TrendingUp',
      value: '98%',
      label: 'Client Satisfaction',
      description: 'Long-term trusted relationships',
      color: 'text-success'
    }
  ];

  const certifications = [
    {
      name: 'ISO 9001:2015 Certified',
      authority: 'Quality Management Systems',
      year: '2022',
      icon: 'CheckCircle'
    },
    {
      name: 'ISO 27001:2013 Certified',
      authority: 'Information Security Management',
      year: '2023',
      icon: 'Shield'
    },
    {
      name: 'MSME Registration',
      authority: 'Ministry of MSME, Government of India',
      year: '2021',
      icon: 'Building'
    },
    {
      name: 'Industry Partnership Member',
      authority: 'Technology & Staffing Associations',
      year: '2020',
      icon: 'Users'
    }
  ];

  const partnerships = [
    {
      name: 'DTCC',
      description: 'Global financial services infrastructure and technology partner',
      logo: '/dtcc.png',
      count: 'Global Partner'
    },
    {
      name: 'TATA',
      description: 'Enterprise and technology transformation partner',
      logo: '/tata.png',
      count: 'Enterprise Partner'
    },
    {
      name: 'Infosys',
      description: 'IT services and digital transformation partner',
      logo: '/infosys.png',
      count: 'Technology Partner'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <LazyLoad>
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-primary/10 border border-[#1F74B5] rounded-full px-4 py-2 mb-6">
              <Icon name="Shield" size={16} className="text-primary" />
              <span className="text-sm font-medium text-primary">Trusted by Industry Leaders</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Built on Trust, Proven by Results
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our foundation of trust is built on decades of workforce expertise, strategic partnerships, and a proven record of delivering high-impact talent and business solutions.
            </p>
          </div>
        </LazyLoad>

        <LazyLoad>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            {trustMetrics.map((metric, index) => (
              <div key={index} className="text-center group">
                <div
                  className="
            rounded-2xl p-6
            transition-all duration-300
            hover:shadow-brand
            group-hover:scale-105
            border
          "
                  style={{
                    backgroundColor: '#1F74B5',
                    borderColor: '#155A8A',
                  }}
                >
                  {/* Icon (FULL COLOR like before) */}
                  <div
                    className={`
              w-12 h-12 mx-auto mb-4 rounded-xl
              bg-white flex items-center justify-center
              ${metric.color}
            `}
                  >
                    <Icon name={metric.icon} size={24} />
                  </div>

                  {/* Value */}
                  <div className="text-2xl md:text-3xl font-bold text-yellow-50 mb-1">
                    {metric.value}
                  </div>

                  {/* Label */}
                  <div className="font-semibold text-yellow-50 mb-2">
                    {metric.label}
                  </div>

                  {/* Description */}
                  <div className="text-sm text-yellow-50">
                    {metric.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </LazyLoad>



        <LazyLoad>
          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-3xl p-8 md:p-12 mb-20">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <div
                    className="w-16 h-16 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: '#1F74B5' }}
                  >

                    <Icon name="User" size={28} className="text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">Founder & Managing Director</h3>
                    <p className="text-muted-foreground">20+ Years in Workforce & Business</p>
                  </div>
                </div>
                <h4 className="text-2xl font-bold text-foreground mb-4">Decades of Workforce Leadership</h4>
                <p className="text-foreground/80 mb-6 leading-relaxed">
                  Our founder brings over 25 years of experience in building, scaling, and managing high-performing teams across industries.
                  This deep understanding of talent, operations, and delivery enables organisations to grow efficiently while maintaining quality and compliance.
                </p>
                <div className="space-y-3">
                  {['Staffing & Talent Strategy', 'Enterprise Delivery & Operations', 'Leadership & Workforce Consulting'].map((item, i) => (
                    <div key={i} className="flex items-center space-x-3">
                      <Icon name="Check" size={16} className="text-success" />
                      <span className="text-sm text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="bg-[#1F74B5] rounded-2xl p-6 shadow-brand">
                  <div className="text-center mb-4">
                    <div className="text-3xl font-bold text-yellow-50 mb-2">
                      1998
                    </div>
                    <div className="text-sm text-yellow-50/90">
                      Professional Career Started
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-yellow-50">Clients Served</span>
                      <span className="font-semibold text-yellow-50">300+</span>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-sm text-yellow-50">Client Satisfaction</span>
                      <span className="font-semibold text-yellow-50">98%</span>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-sm text-yellow-50">Enterprise Partnerships</span>
                      <span className="font-semibold text-yellow-50">20+</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </LazyLoad>

        <LazyLoad>
          <div className="mb-20">
            <h3 className="text-2xl font-bold text-foreground text-center mb-12">
              Certifications & Recognitions
            </h3>

           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
  {certifications.map((cert, index) => {
    const cardColors = [
      'bg-emerald-500',
      'bg-purple-500',
      'bg-amber-500',
      'bg-sky-500',
    ];

    return (
      <div
        key={index}
        className={`
          ${cardColors[index % cardColors.length]}
          rounded-xl p-6 text-center
          transition-all duration-300
          hover:shadow-brand hover:scale-105
        `}
      >
        {/* Icon */}
        <div className="w-12 h-12 mx-auto mb-4 bg-white rounded-lg flex items-center justify-center">
          <Icon name={cert.icon} size={20} className="text-gray-800" />
        </div>

        {/* Title */}
        <h4 className="font-semibold text-white mb-2">
          {cert.name}
        </h4>

        {/* Authority */}
        <p className="text-sm text-white/90 mb-2">
          {cert.authority}
        </p>

        {/* Year */}
        <div className="text-xs text-white font-medium">
          {cert.year}
        </div>
      </div>
    );
  })}
</div>

          </div>
        </LazyLoad>



        <LazyLoad>
          <div>
            <h3 className="text-2xl font-bold text-foreground text-center mb-12">Our Partners</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {partnerships.map((partner, index) => (
                <div key={index} className="text-center group">
                  <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-300"
                      animation="fadeIn"
                      delay={index * 200}
                      lazy
                    />
                  </div>

                  <h4 className="font-semibold text-foreground mb-2">{partner.name}</h4>
                  <p className="text-sm text-muted-foreground mb-2">{partner.description}</p>
                  <div className="text-lg font-bold text-primary">{partner.count}</div>
                </div>
              ))}
            </div>
          </div>
        </LazyLoad>
      </div>
    </section>
  );
};

export default TrustIndicators;
