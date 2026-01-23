import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const CompanyCulture = () => {
  const cultureValues = [
    {
      icon: "Shield",
      title: "Integrity First",
      description: "Every decision is guided by unwavering ethical standards and transparent practices",
      color: "primary"
    },
    {
      icon: "Users", 
      title: "Collaborative Growth",
      description: "We believe in growing together - our success is measured by our clients\' achievements",
      color: "secondary"
    },
    {
      icon: "Lightbulb",
      title: "Innovation Mindset", 
      description: "Constantly evolving our approaches to meet the dynamic needs of modern businesses",
      color: "accent"
    },
    {
      icon: "Heart",
      title: "Genuine Care",
      description: "Every startup is treated as our own, with personal investment in their success journey",
      color: "primary"
    }
  ];

  const officeSpaces = [
    {
      name: "Co-working Hub",
      description: "Open collaborative spaces designed for creativity and networking",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop"
    },
    {
      name: "Private Offices",
      description: "Dedicated spaces for focused work and confidential meetings",
      image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=400&h=300&fit=crop"
    },
    {
      name: "Meeting Rooms",
      description: "State-of-the-art conference facilities for presentations and discussions",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop"
    },
    {
      name: "Networking Lounge",
      description: "Comfortable spaces for informal meetings and community building",
      image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=400&h=300&fit=crop"
    }
  ];

  const teamMoments = [
    {
      title: "Team Collaboration",
      description: "Professional team working together in our modern office environment with glass walls",
      image: ""
    },
    {
      title: "Executive Leadership",
      description: "Leadership team and professionals collaborating in our premium office environment with modern architecture",
      image: ""
    },
    {
      title: "Startup Events",
      description: "Regular networking events and startup showcases",
      image: ""
    },
    {
      title: "Mentorship Sessions",
      description: "One-on-one guidance and strategic planning meetings",
      image: ""
    }
  ];

  return (
    <section className="py-20 bg-yellow-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Icon name="Heart" size={16} />
            <span>Company Culture</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            The Right Culture • The Right Intent
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our culture isn't just about what we do - it's about how we do it. Every interaction, 
            every decision, and every relationship is built on our core values.
          </p>
        </div>

        {/* Culture Values */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {cultureValues?.map((value, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-brand border border-border hover:shadow-brand-lg transition-brand">
              <div className={`w-12 h-12 bg-${value?.color}/10 rounded-xl flex items-center justify-center mb-4`}>
                <Icon name={value?.icon} size={24} className={`text-${value?.color}`} />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">{value?.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{value?.description}</p>
            </div>
          ))}
        </div>

        {/* Office Space Showcase */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
              Our 6000 Sq Ft Innovation Hub
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Thoughtfully designed spaces that foster creativity, collaboration, and growth
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {officeSpaces?.map((space, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-xl mb-4">
                  <Image
                    src={space?.image}
                    alt={`${space?.name} at DaRYTE office`}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-brand"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-brand"></div>
                  <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-brand">
                    <Icon name="Eye" size={20} />
                  </div>
                </div>
                <h4 className="font-semibold text-foreground mb-2">{space?.name}</h4>
                <p className="text-sm text-muted-foreground">{space?.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Moments */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                Life at Fstone
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Beyond business success, we're building a community where innovation thrives, 
                relationships matter, and every individual contributes to something meaningful.
              </p>
            </div>

            {/* Culture Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-border">
                <div className="text-2xl font-bold text-primary mb-1">95%</div>
                <div className="text-sm text-muted-foreground">Team Satisfaction</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm border border-border">
                <div className="text-2xl font-bold text-secondary mb-1">50+</div>
                <div className="text-sm text-muted-foreground">Events Annually</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm border border-border">
                <div className="text-2xl font-bold text-accent mb-1">24/7</div>
                <div className="text-sm text-muted-foreground">Support Available</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm border border-border">
                <div className="text-2xl font-bold text-primary mb-1">100%</div>
                <div className="text-sm text-muted-foreground">Ethical Standards</div>
              </div>
            </div>

            {/* Core Principles */}
            <div className="bg-white rounded-xl p-6 shadow-brand border border-border">
              <h4 className="font-semibold text-foreground mb-4">Our Daily Principles</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle" size={16} className="text-accent" />
                  <span className="text-sm text-muted-foreground">Every client interaction builds lasting trust</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle" size={16} className="text-accent" />
                  <span className="text-sm text-muted-foreground">Innovation is encouraged and celebrated</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle" size={16} className="text-accent" />
                  <span className="text-sm text-muted-foreground">Continuous learning and growth mindset</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle" size={16} className="text-accent" />
                  <span className="text-sm text-muted-foreground">Collaborative success over individual achievement</span>
                </div>
              </div>
            </div>
          </div>

          {/* Team Moments Gallery */}
          <div className="space-y-6">
            {teamMoments?.map((moment, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-brand border border-border hover:shadow-brand-lg transition-brand group">
                <div className="relative overflow-hidden">
                  <Image
                    src={moment?.image}
                    alt={moment?.title}
                    className="w-full h-40 object-cover group-hover:scale-105 transition-brand"
                  />
                  {moment?.image?.includes('IMG_') && (
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  )}
                </div>
                <div className="p-2">
                  <h4 className="font-semibold text-foreground mb-2">{moment?.title}</h4>
                  <p className="text-sm text-muted-foreground">{moment?.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyCulture;