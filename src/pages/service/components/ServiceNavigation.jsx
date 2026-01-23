
import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';

const ServiceNavigation = ({ activeService, onServiceChange }) => {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 3;

  const services = [
    {
      id: 'client-services',
      name: 'Client Services',
      icon: 'Users',
      description: 'End-to-end service delivery',
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 'it-staff',
      name: 'IT Staff Augmentation',
      icon: 'Code',
      description: 'Skilled IT talent on demand',
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      id: 'technology-consulting',
      name: 'Technology Consulting',
      icon: 'Cpu',
      description: 'Driving digital transformation',
      color: 'from-purple-500 to-purple-600'
    },
    {
      id: 'business-consulting',
      name: 'Business Consulting',
      icon: 'TrendingUp',
      description: 'Optimizing business performance',
      color: 'from-green-500 to-green-600'
    },
    {
      id: 'workforce-solutions',
      name: 'Workforce Solutions',
      icon: 'Briefcase',
      description: 'Building high-performing teams',
      color: 'from-orange-500 to-orange-600'
    },
    {
      id: 'outsourcing',
      name: 'Outsourcing Services',
      icon: 'Layers',
      description: 'Managed services & operations',
      color: 'from-teal-500 to-teal-600'
    }
  ];

  const handleNext = () => {
    if (startIndex + visibleCount < services.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  // 🔥 NEW: keep active card visible
  useEffect(() => {
    const activeIndex = services.findIndex(
      (s) => s.id === activeService
    );

    if (activeIndex === -1) return;

    // if active card is before visible window
    if (activeIndex < startIndex) {
      setStartIndex(activeIndex);
    }

    // if active card is after visible window
    if (activeIndex >= startIndex + visibleCount) {
      setStartIndex(activeIndex - visibleCount + 1);
    }
  }, [activeService]);

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Choose Your Growth Path
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Select a service area to explore tailored solutions and engagement models.
          </p>
        </div>

        {/* Navigation */}
        <div className="relative">

          {/* LEFT ARROW */}
          <button
            onClick={handlePrev}
            disabled={startIndex === 0}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10
              hidden md:flex w-10 h-10 items-center justify-center
              rounded-full bg-white border shadow
              hover:bg-primary hover:text-white
              disabled:opacity-40"
          >
            <Icon name="ChevronLeft" size={20} />
          </button>

          {/* CARDS */}
          <div className="grid md:grid-cols-3 gap-8 px-16">
            {services
              .slice(startIndex, startIndex + visibleCount)
              .map((service) => {
                const isActive = activeService === service.id;

                return (
                  <button
                    key={service.id}
                    onClick={() => onServiceChange(service.id)}
                    className={`group relative text-left rounded-2xl p-6 border-2 transition-all duration-300
            ${isActive
                        ? 'border-primary bg-primary/5 shadow-brand-lg scale-[1.03]'
                        : 'border-[#0B8FA6] bg-[#0B8FA6] text-white hover:shadow-brand hover:scale-[1.02]'
                      }
          `}
                  >
                    {/* Icon */}
                    <div
                      className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-transform
              ${isActive
                          ? `bg-gradient-to-br ${service.color} text-white`
                          : 'bg-white/20 text-white'
                        }
              group-hover:scale-110
            `}
                    >
                      <Icon name={service.icon} size={24} />
                    </div>

                    {/* Text */}
                    <h3
                      className={`font-semibold mb-2 transition-colors
              ${isActive ? 'text-foreground group-hover:text-primary' : 'text-white'}
            `}
                    >
                      {service.name}
                    </h3>

                    <p
                      className={`text-sm mb-4
              ${isActive ? 'text-muted-foreground' : 'text-white/90'}
            `}
                    >
                      {service.description}
                    </p>

                    {/* CTA */}
                    <div
                      className={`flex items-center transition-opacity
              ${isActive
                          ? 'text-primary opacity-100'
                          : 'text-white opacity-0 group-hover:opacity-100'
                        }
            `}
                    >
                      <span className="text-sm font-medium">Explore Details</span>
                      <Icon name="ArrowRight" size={16} className="ml-2" />
                    </div>

                    {/* Active Tick */}
                    {isActive && (
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                        <Icon name="Check" size={14} className="text-white" />
                      </div>
                    )}
                  </button>
                );
              })}
          </div>


          {/* RIGHT ARROW */}
          <button
            onClick={handleNext}
            disabled={startIndex + visibleCount >= services.length}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10
              hidden md:flex w-10 h-10 items-center justify-center
              rounded-full bg-white border shadow
              hover:bg-primary hover:text-white
              disabled:opacity-40"
          >
            <Icon name="ChevronRight" size={20} />
          </button>

        </div>
      </div>
    </section>
  );
};

export default ServiceNavigation;
