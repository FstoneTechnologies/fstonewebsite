import React, { useRef } from 'react';
import Icon from '../../../components/AppIcon';

const ServiceNavigation = ({ activeService, onServiceChange }) => {
  const scrollRef = useRef(null);

  const services = [
    {
      id: 'client',
      name: 'Client Services',
      icon: 'Rocket',
      description: 'End-to-end startup acceleration',
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 'legal',
      name: 'Legal Services',
      icon: 'Scale',
      description: 'Compliance & regulatory guidance',
      color: 'from-green-500 to-green-600'
    },
    {
      id: 'mentorship',
      name: 'Mentorship',
      icon: 'Users',
      description: 'Expert guidance & networking',
      color: 'from-purple-500 to-purple-600'
    },
    {
      id: 'government',
      name: 'Government Sector',
      icon: 'Building',
      description: 'Public sector introductions',
      color: 'from-orange-500 to-orange-600'
    }
    // add more cards freely
  ];

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const scrollAmount = 320;
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    });
  };

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Choose Your Growth Path
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Select a service area to explore tailored solutions, engagement models, and real-world success stories designed for your business.
          </p>
        </div>

        {/* Navigation Wrapper */}
        <div className="relative">
          
          {/* Left Arrow */}
          <button
            onClick={() => scroll('left')}
            className="hidden md:flex absolute -left-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-brand border items-center justify-center hover:bg-primary hover:text-white transition"
          >
            <Icon name="ChevronLeft" size={20} />
          </button>

          {/* Cards */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide pb-4"
          >
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => onServiceChange(service.id)}
                className={`group relative min-w-[280px] p-6 rounded-2xl border-2 transition-all duration-300 text-left ${
                  activeService === service.id
                    ? 'border-primary bg-primary/5 shadow-brand-lg'
                    : 'border-border bg-card hover:border-primary/50 hover:shadow-brand'
                }`}
              >
                <div className="space-y-4">
                  <div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center text-white group-hover:scale-110 transition-transform`}
                  >
                    <Icon name={service.icon} size={24} />
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {service.description}
                    </p>
                  </div>

                  <div className="flex items-center text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-sm font-medium">Explore Details</span>
                    <Icon name="ArrowRight" size={16} className="ml-2" />
                  </div>
                </div>

                {activeService === service.id && (
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                    <Icon name="Check" size={14} className="text-white" />
                  </div>
                )}
              </button>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => scroll('right')}
            className="hidden md:flex absolute -right-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-brand border items-center justify-center hover:bg-primary hover:text-white transition"
          >
            <Icon name="ChevronRight" size={20} />
          </button>

        </div>
      </div>
    </section>
  );
};

export default ServiceNavigation;
