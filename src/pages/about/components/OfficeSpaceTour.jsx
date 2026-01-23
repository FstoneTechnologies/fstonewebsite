import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const OfficeSpaceTour = () => {
  const [activeSpace, setActiveSpace] = useState(0);

  const officeSpaces = [
    {
      id: 1,
      name: "Reception & Welcome Area",
      description: "First impressions matter. Our welcoming reception area sets the tone for collaboration and success.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
      features: ["Professional reception desk", "Comfortable seating area", "Digital display boards", "Welcome refreshments"],
      capacity: "20 people",
      type: "Reception"
    },
    {
      id: 2,
      name: "Open Co-working Hub",
      description: "Dynamic collaborative spaces designed to foster creativity, networking, and spontaneous innovation.",
      image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&h=600&fit=crop",
      features: ["Flexible workstations", "High-speed internet", "Collaborative zones", "Natural lighting"],
      capacity: "50 workstations",
      type: "Co-working"
    },
    {
      id: 3,
      name: "Private Office Suites",
      description: "Dedicated spaces for focused work, confidential meetings, and strategic planning sessions.",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop",
      features: ["Soundproof rooms", "Executive furniture", "Video conferencing", "Private entrances"],
      capacity: "2-8 people per suite",
      type: "Private Office"
    },
    {
      id: 4,
      name: "Conference & Meeting Rooms",
      description: "State-of-the-art meeting facilities equipped with latest technology for presentations and discussions.",
      image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&h=600&fit=crop",
      features: ["4K displays", "Video conferencing", "Wireless presentation", "Catering facilities"],
      capacity: "6-20 people",
      type: "Meeting Room"
    },
    {
      id: 5,
      name: "Innovation Lab",
      description: "Dedicated space for prototyping, testing, and developing innovative solutions with cutting-edge tools.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop",
      features: ["3D printing", "Electronics workbench", "Testing equipment", "Prototype storage"],
      capacity: "15 people",
      type: "Lab"
    },
    {
      id: 6,
      name: "Networking Lounge",
      description: "Comfortable informal spaces perfect for networking, casual meetings, and community building.",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
      features: ["Comfortable seating", "Coffee station", "Informal meeting areas", "Relaxation zone"],
      capacity: "30 people",
      type: "Lounge"
    }
  ];

  const amenities = [
    { icon: "Wifi", name: "High-Speed Internet", description: "Fiber optic connectivity" },
    { icon: "Coffee", name: "Refreshment Center", description: "Complimentary beverages" },
    { icon: "Car", name: "Parking Facility", description: "Dedicated parking spaces" },
    { icon: "Shield", name: "24/7 Security", description: "Round-the-clock protection" },
    { icon: "Zap", name: "Power Backup", description: "Uninterrupted operations" },
    { icon: "Phone", name: "Communication Hub", description: "Advanced telecom facilities" }
  ];

  const currentSpace = officeSpaces?.[activeSpace];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Icon name="Building" size={16} />
            <span>Office Space Tour</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Experience Our 6000 Sq Ft Innovation Hub
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Take a virtual tour of our thoughtfully designed workspace that combines functionality, 
            comfort, and inspiration to create the perfect environment for startup success.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Space Navigation */}
          <div className="lg:col-span-1 space-y-3">
            <h3 className="text-lg font-semibold text-foreground mb-4">Explore Our Spaces</h3>
            {officeSpaces?.map((space, index) => (
              <div
                key={space?.id}
                onClick={() => setActiveSpace(index)}
                className={`p-4 rounded-xl border cursor-pointer transition-brand ${
                  activeSpace === index
                    ? 'bg-primary text-primary-foreground border-primary shadow-brand'
                    : 'bg-white hover:bg-surface border-border hover:border-primary/30'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    activeSpace === index ? 'bg-primary-foreground/20' : 'bg-primary/10'
                  }`}>
                    <Icon 
                      name="MapPin" 
                      size={18} 
                      className={activeSpace === index ? 'text-primary-foreground' : 'text-primary'} 
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className={`font-semibold text-sm ${
                      activeSpace === index ? 'text-primary-foreground' : 'text-foreground'
                    }`}>
                      {space?.name}
                    </h4>
                    <p className={`text-xs ${
                      activeSpace === index ? 'text-primary-foreground/80' : 'text-muted-foreground'
                    }`}>
                      {space?.type} • {space?.capacity}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Space Details */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-brand border border-border overflow-hidden">
              {/* Image */}
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={currentSpace?.image}
                  alt={`${currentSpace?.name} at DaRYTE office`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {currentSpace?.type}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2">
                    <div className="flex items-center space-x-2">
                      <Icon name="Users" size={16} className="text-primary" />
                      <span className="text-sm font-medium text-foreground">{currentSpace?.capacity}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">{currentSpace?.name}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">{currentSpace?.description}</p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-foreground mb-4">Key Features</h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    {currentSpace?.features?.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-6 h-6 bg-accent/10 rounded-full flex items-center justify-center">
                          <Icon name="Check" size={14} className="text-accent" />
                        </div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Navigation */}
                <div className="flex items-center justify-between pt-6 border-t border-border">
                  <button
                    onClick={() => setActiveSpace(activeSpace > 0 ? activeSpace - 1 : officeSpaces?.length - 1)}
                    className="flex items-center space-x-2 text-primary hover:text-primary/80 transition-brand"
                  >
                    <Icon name="ChevronLeft" size={16} />
                    <span className="text-sm font-medium">Previous</span>
                  </button>
                  
                  <div className="flex space-x-2">
                    {officeSpaces?.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveSpace(index)}
                        className={`w-2 h-2 rounded-full transition-brand ${
                          activeSpace === index ? 'bg-primary' : 'bg-border hover:bg-primary/50'
                        }`}
                      />
                    ))}
                  </div>
                  
                  <button
                    onClick={() => setActiveSpace(activeSpace < officeSpaces?.length - 1 ? activeSpace + 1 : 0)}
                    className="flex items-center space-x-2 text-primary hover:text-primary/80 transition-brand"
                  >
                    <span className="text-sm font-medium">Next</span>
                    <Icon name="ChevronRight" size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Amenities */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-4">Premium Amenities</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Everything you need for productive work and comfortable collaboration
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {amenities?.map((amenity, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-brand border border-border text-center hover:shadow-brand-lg transition-brand">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon name={amenity?.icon} size={24} className="text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">{amenity?.name}</h4>
                <p className="text-sm text-muted-foreground">{amenity?.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact for Tour */}
        <div className="mt-20 bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-white text-center">
          <div className="max-w-2xl mx-auto">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Icon name="Calendar" size={28} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Schedule a Physical Tour</h3>
            <p className="text-white/90 mb-6">
              Experience our space in person. Book a guided tour to see how DaRYTE can be the perfect 
              home for your startup journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-white/90 transition-brand">
                Book Tour Now
              </button>
              <button className="border border-white/30 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-brand">
                Download Brochure
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfficeSpaceTour;