import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const PartnershipNetwork = () => {
  const governmentPartners = [
    {
      name: "Ministry of Electronics & IT",
      type: "Central Government",
      description: "Digital India initiatives and technology policy collaboration",
      logo: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=100&h=100&fit=crop",
      projects: 15
    },
    {
      name: "Department of Science & Technology",
      type: "Central Government", 
      description: "Innovation funding and research partnerships",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop",
      projects: 12
    },
    {
      name: "Karnataka State Government",
      type: "State Government",
      description: "Startup Karnataka ecosystem development",
      logo: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=100&h=100&fit=crop",
      projects: 20
    },
    {
      name: "MSME Development Board",
      type: "Statutory Body",
      description: "Small business development and support programs",
      logo: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=100&h=100&fit=crop",
      projects: 18
    }
  ];

  const industryPartners = [
    {
      name: "TechMahindra",
      type: "Technology Partner",
      description: "Enterprise solutions and digital transformation",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop",
      collaboration: "Mentorship & Technology"
    },
    {
      name: "NASSCOM",
      type: "Industry Association",
      description: "IT industry advocacy and startup ecosystem support",
      logo: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=100&h=100&fit=crop",
      collaboration: "Policy & Advocacy"
    },
    {
      name: "CII - Confederation of Indian Industry",
      type: "Business Association",
      description: "Industry networking and business development",
      logo: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=100&h=100&fit=crop",
      collaboration: "Business Development"
    },
    {
      name: "Indian Angel Network",
      type: "Investment Network",
      description: "Angel investor connections and funding facilitation",
      logo: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=100&h=100&fit=crop",
      collaboration: "Funding & Investment"
    }
  ];

  const ecosystemPartners = [
    {
      name: "T-Hub Hyderabad",
      type: "Innovation Hub",
      description: "Cross-collaboration and startup exchange programs"
    },
    {
      name: "91springboard",
      type: "Co-working Network",
      description: "Workspace partnerships and community building"
    },
    {
      name: "Indian Institute of Management",
      type: "Academic Institution",
      description: "Research collaboration and talent pipeline"
    },
    {
      name: "Gurugram Chamber of Commerce",
      type: "Business Chamber",
      description: "Local business networking and advocacy"
    }
  ];

  const partnershipBenefits = [
    {
      icon: "Handshake",
      title: "Strategic Alliances",
      description: "Long-term partnerships that create mutual value and growth opportunities",
      color: "primary"
    },
    {
      icon: "Network",
      title: "Ecosystem Access",
      description: "Comprehensive network spanning government, industry, and academic sectors",
      color: "secondary"
    },
    {
      icon: "Target",
      title: "Focused Collaboration",
      description: "Purpose-driven partnerships aligned with startup success and innovation goals",
      color: "accent"
    },
    {
      icon: "Globe",
      title: "Market Expansion",
      description: "Global reach through international partnerships and cross-border initiatives",
      color: "primary"
    }
  ];

  return (
    <section className="py-20 bg-yellow-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Icon name="Network" size={16} />
            <span>Partnership Network</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Strategic Collaborations for Success
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our extensive network of government agencies, industry leaders, and ecosystem partners 
            creates unparalleled opportunities for startup growth and market access.
          </p>
        </div>

        {/* Partnership Benefits */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {partnershipBenefits?.map((benefit, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-brand border border-border text-center">
              <div className={`w-12 h-12 bg-${benefit?.color}/10 rounded-xl flex items-center justify-center mx-auto mb-4`}>
                <Icon name={benefit?.icon} size={24} className={`text-${benefit?.color}`} />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{benefit?.title}</h3>
              <p className="text-sm text-muted-foreground">{benefit?.description}</p>
            </div>
          ))}
        </div>

        {/* Government Partners */}
        <div className="mb-20">
          <div className="flex items-center space-x-3 mb-8">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
              <Icon name="Building" size={20} className="text-primary" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground">Government Partnerships</h3>
              <p className="text-muted-foreground">Strategic alliances with key government agencies</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {governmentPartners?.map((partner, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-brand border border-border hover:shadow-brand-lg transition-brand">
                <div className="flex items-start space-x-4">
                  <Image
                    src={partner?.logo}
                    alt={`${partner?.name} logo`}
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-semibold text-foreground">{partner?.name}</h4>
                      <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                        {partner?.projects} Projects
                      </span>
                    </div>
                    <p className="text-sm text-secondary font-medium mb-2">{partner?.type}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{partner?.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Industry Partners */}
        <div className="mb-20">
          <div className="flex items-center space-x-3 mb-8">
            <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center">
              <Icon name="Briefcase" size={20} className="text-secondary" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground">Industry Partners</h3>
              <p className="text-muted-foreground">Collaborations with leading organizations and associations</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {industryPartners?.map((partner, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-brand border border-border hover:shadow-brand-lg transition-brand">
                <div className="flex items-start space-x-4">
                  <Image
                    src={partner?.logo}
                    alt={`${partner?.name} logo`}
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-semibold text-foreground">{partner?.name}</h4>
                      <span className="text-xs bg-secondary/10 text-secondary px-2 py-1 rounded-full">
                        {partner?.collaboration}
                      </span>
                    </div>
                    <p className="text-sm text-accent font-medium mb-2">{partner?.type}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{partner?.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Ecosystem Partners */}
        <div className="mb-20">
          <div className="flex items-center space-x-3 mb-8">
            <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
              <Icon name="Users" size={20} className="text-accent" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground">Ecosystem Partners</h3>
              <p className="text-muted-foreground">Community collaborations and knowledge sharing networks</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ecosystemPartners?.map((partner, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-brand border border-border text-center hover:shadow-brand-lg transition-brand">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon name="Building2" size={24} className="text-accent" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">{partner?.name}</h4>
                <p className="text-xs text-secondary font-medium mb-2">{partner?.type}</p>
                <p className="text-sm text-muted-foreground">{partner?.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Partnership Impact */}
        <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">Partnership Impact</h3>
            <p className="text-white/90">Measurable outcomes from strategic collaborations</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">65+</div>
              <div className="text-sm text-white/80">Active Partnerships</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">₹200Cr+</div>
              <div className="text-sm text-white/80">Partnership Value</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">150+</div>
              <div className="text-sm text-white/80">Joint Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">25+</div>
              <div className="text-sm text-white/80">Countries Reached</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnershipNetwork;