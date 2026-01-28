import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ServicePathways = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 3;

  const pathways = [
    {
      id: 'client-services',
      title: 'Client Services',
      subtitle: 'Delivering Business Value',
      description: 'End-to-end workforce and service delivery to help organisations scale faster and operate efficiently.',
      icon: 'Users',
      color: 'accent',
      benefits: [
        'Talent Advisory Services',
        'Staffing & Recruiting',
        'Managed Delivery',
        'Executive Search',
        'Workforce Management'
      ],
      stats: { label: 'Clients Served', value: '300+' }
    },
    {
      id: 'it-staff',
      title: 'IT Staff',
      subtitle: 'Skilled Talent On Demand',
      description: 'Providing qualified IT professionals across technologies, domains, and engagement models.',
      icon: 'Code',
      color: 'accent',
      benefits: [
        'Frontend & Backend Developers',
        'Cloud & DevOps Engineers',
        'QA & Automation Specialists',
        'Support & Infrastructure Staff'
      ],
      stats: { label: 'Professionals Placed', value: '5000+' }
    },
    {
      id: 'technology-consulting',
      title: 'Technology Consulting',
      subtitle: 'Driving Digital Excellence',
      description: 'Strategic and technical consulting to modernize systems and improve technology performance.',
      icon: 'Cpu',
      color: 'accent',
      benefits: [
        'Digital Transformation',
        'Cloud Strategy',
        'Application Modernization',
        'Architecture Advisory'
      ],
      stats: { label: 'Projects Delivered', value: '350+' }
    },
    {
      id: 'business-consulting',
      title: 'Business Consulting',
      subtitle: 'Optimizing Business Performance',
      description: 'Advisory services to improve operations, governance, and organisational effectiveness.',
      icon: 'TrendingUp',
      color: 'accent',
      benefits: [
        'Process Optimization',
        'Operational Excellence',
        'Change Management',
        'Governance & Compliance'
      ],
      stats: { label: 'Efficiency Gain', value: '40%' }
    },
    {
      id: 'workforce-solutions',
      title: 'Workforce Solutions',
      subtitle: 'Building High-Performance Teams',
      description: 'Comprehensive workforce planning, hiring, and management solutions for growing enterprises.',
      icon: 'Briefcase',
      color: 'accent',
      benefits: [
        'Workforce Planning',
        'Bulk & Ramp Hiring',
        'RPO & MSP Models',
        'VMS Implementation'
      ],
      stats: { label: 'Hiring Accuracy', value: '98%' }
    },
    {
      id: 'outsourcing',
      title: 'Outsourcing Services',
      subtitle: 'Focus on Core, We Handle the Rest',
      description: 'Managed services and outsourcing to reduce operational load and improve service quality.',
      icon: 'Layers',
      color: 'accent',
      benefits: [
        'IT Support Outsourcing',
        'Managed Delivery Teams',
        'Back Office Operations',
        'Service Desk Management'
      ],
      stats: { label: 'Cost Savings', value: '30%' }
    },
  ];


  const getColorClasses = (color, isHovered) => {
    const colors = {
      primary: {
        bg: isHovered ? 'bg-primary' : 'bg-primary/5',
        text: isHovered ? 'text-primary-foreground' : 'text-primary',
        border: 'border-primary/20',
        icon: isHovered ? 'text-primary-foreground' : 'text-primary'
      },
      secondary: {
        bg: isHovered ? 'bg-secondary' : 'bg-secondary/5',
        text: isHovered ? 'text-secondary-foreground' : 'text-secondary',
        border: 'border-secondary/20',
        icon: isHovered ? 'text-secondary-foreground' : 'text-secondary'
      },
      accent: {
        bg: isHovered ? 'bg-accent' : 'bg-accent/5',
        text: isHovered ? 'text-accent-foreground' : 'text-accent',
        border: 'border-accent/20',
        icon: isHovered ? 'text-accent-foreground' : 'text-accent'
      }
    };



    return colors?.[color];
  };

  const handleNext = () => {
    if (startIndex + visibleCount < pathways.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Service We Offer
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore our services designed to power innovation and efficiency
          </p>
        </div>

        {/* Pathways Grid */}
        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            disabled={startIndex === 0}
            className="absolute -left-20 top-1/2 -translate-y-1/2 p-3 rounded-full border border-muted bg-white shadow hover:bg-muted disabled:opacity-40 z-10"
          >
            <Icon name="ChevronLeft" size={20} />
          </button>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            disabled={startIndex + visibleCount >= pathways.length}
            className="absolute -right-20 top-1/2 -translate-y-1/2 p-3 rounded-full border border-muted bg-white shadow hover:bg-muted disabled:opacity-40 z-10"
          >
            <Icon name="ChevronRight" size={20} />
          </button>

          <div className="grid md:grid-cols-3 gap-8">

            {pathways?.slice(startIndex, startIndex + visibleCount).map((pathway) => {
              const isHovered = hoveredCard === pathway?.id;
              const colorClasses = getColorClasses(pathway?.color, isHovered);

              return (
                <div
                  key={pathway?.id}
                  className={`relative group cursor-pointer transition-all duration-500 transform hover:scale-105 ${isHovered ? 'z-10' : ''
                    }`}
                  onMouseEnter={() => setHoveredCard(pathway?.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className={`
                  h-full p-8 rounded-2xl border transition-all duration-500
                  ${colorClasses?.bg} ${colorClasses?.border}
                  ${isHovered ? 'shadow-brand-lg' : 'shadow-brand'}
                `}>
                    {/* Icon & Stats */}
                    <div className="flex items-start justify-between mb-6">
                      <div className={`
                      w-16 h-16 rounded-xl flex items-center justify-center transition-all duration-500
                      ${isHovered ? 'bg-white/20' : 'bg-white/10'}
                    `}>
                        <Icon
                          name={pathway?.icon}
                          size={28}
                          className={`${colorClasses?.icon} transition-colors duration-500`}
                        />
                      </div>
                      <div className="text-right">
                        <div className={`text-2xl font-bold ${colorClasses?.text} transition-colors duration-500`}>
                          {pathway?.stats?.value}
                        </div>
                        <div className={`text-sm ${isHovered ? 'text-white/80' : 'text-muted-foreground'} transition-colors duration-500`}>
                          {pathway?.stats?.label}
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="mb-6">
                      <h3 className={`text-xl font-bold mb-2 ${colorClasses?.text} transition-colors duration-500`}>
                        {pathway?.title}
                      </h3>
                      <p className={`text-sm font-medium mb-3 ${isHovered ? 'text-black/90' : 'text-muted-foreground'} transition-colors duration-500`}>
                        {pathway?.subtitle}
                      </p>
                      <p className={`text-sm leading-relaxed ${isHovered ? 'text-black/80' : 'text-foreground/80'} transition-colors duration-500`}>
                        {pathway?.description}
                      </p>
                    </div>

                    {/* Benefits */}
                    <div className={`mb-6 transition-all duration-500 ${isHovered ? 'opacity-100 max-h-40' : 'opacity-0 max-h-0 overflow-hidden'}`}>
                      <ul className="space-y-2">
                        {pathway?.benefits?.map((benefit, index) => (
                          <li key={index} className="flex items-center space-x-2 text-sm text-black/90">
                            <Icon name="Check" size={14} className="text-black/70" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA */}
                   <div className={`transition-all duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
  <Link to={`/service?active=${pathway.id}`}>
  <Button
    variant="ghost"
    size="sm"
    iconName="ArrowRight"
    iconPosition="right"
    className="text-black hover:bg-white/20"
  >
    Learn More
  </Button>
</Link>

</div>

                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Not sure which service is right for you?
          </p>
          <Link to="/contact">
            <Button
              variant="outline"
              size="lg"
              iconName="MessageCircle"
              iconPosition="left"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              Get Personalized Guidance
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicePathways;