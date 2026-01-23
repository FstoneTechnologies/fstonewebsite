import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const FounderStory = () => {
  const milestones = [
    {
      year: "1998",
      title: "Legal Career Begins",
      description: "Started practicing law with focus on corporate compliance and regulatory frameworks",
      icon: "Scale"
    },
    {
      year: "2005",
      title: "Technology Sector Entry",
      description: "Expanded expertise to technology law, helping early-stage tech companies navigate complex regulations",
      icon: "Code"
    },
    {
      year: "2012",
      title: "Government Partnerships",
      description: "Established strong relationships with government agencies, facilitating startup-government collaborations",
      icon: "Building"
    },
    {
      year: "2018",
      title: "DaRYTE Foundation",
      description: "Founded DaRYTE with vision to create comprehensive ecosystem for startup success",
      icon: "Rocket"
    },
    {
      year: "2023",
      title: "Expansion & Growth",
      description: "Scaled operations to 6000 sq ft facility, expanded team, and launched multiple specialized programs",
      icon: "TrendingUp"
    }
  ];

  return (
    <section className="py-20 bg-yellow-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Icon name="User" size={16} />
            <span>Founder's Journey</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            A Legacy of Trust & Excellence
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From humble beginnings in legal practice to building India's most trusted business incubator, 
            our founder's journey reflects the same values we instill in every startup we guide.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Founder Profile */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-brand border border-border">
              <div className="flex items-start space-x-6">
                <div className="relative">
                  <Image
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&crop=face"
                    alt="Founder and CEO of DaRYTE Business Incubator"
                    className="w-20 h-20 rounded-full object-cover"
                  />
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                    <Icon name="CheckCircle" size={16} className="text-white" />
                  </div>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground mb-1">Rajesh Kumar Sharma</h3>
                  <p className="text-primary font-medium mb-2">Founder & CEO</p>
                  <p className="text-sm text-muted-foreground mb-4">
                    LLB, MBA • 25+ Years Experience • Government Sector Specialist
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">Legal Expert</span>
                    <span className="px-3 py-1 bg-secondary/10 text-secondary text-xs rounded-full">Tech Advisor</span>
                    <span className="px-3 py-1 bg-accent/10 text-accent text-xs rounded-full">Mentor</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-border">
                <blockquote className="text-foreground italic leading-relaxed">
                  "Every startup deserves not just funding, but the right guidance to build something meaningful. 
                  Trust isn't just our tagline - it's the foundation of every relationship we build."
                </blockquote>
              </div>
            </div>

            {/* Core Values */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground">Founding Principles</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name="Eye" size={16} className="text-primary" />
                  </div>
                  <span className="text-foreground font-medium">The Right Vision</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-secondary/10 rounded-full flex items-center justify-center">
                    <Icon name="Users" size={16} className="text-secondary" />
                  </div>
                  <span className="text-foreground font-medium">The Right Culture</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center">
                    <Icon name="Heart" size={16} className="text-accent" />
                  </div>
                  <span className="text-foreground font-medium">The Right Intent</span>
                </div>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-foreground mb-8">Journey Milestones</h4>
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border"></div>
              
              {milestones?.map((milestone, index) => (
                <div key={index} className="relative flex items-start space-x-6 pb-8">
                  {/* Timeline Dot */}
                  <div className="relative z-10 w-12 h-12 bg-white border-2 border-primary rounded-full flex items-center justify-center shadow-sm">
                    <Icon name={milestone?.icon} size={20} className="text-primary" />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 bg-white rounded-lg p-6 shadow-sm border border-border">
                    <div className="flex items-center space-x-3 mb-2">
                      <span className="text-sm font-bold text-accent bg-accent/10 px-2 py-1 rounded">
                        {milestone?.year}
                      </span>
                      <h5 className="font-semibold text-foreground">{milestone?.title}</h5>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {milestone?.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderStory;