import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Image from '../../../components/AppImage';

const IncubatorPrograms = () => {
  const [activeProgram, setActiveProgram] = useState('accelerator');

  const programs = [
    {
      id: 'accelerator',
      name: 'Startup Accelerator',
      duration: '6 Months',
      investment: '₹5-50 Lakhs',
      equity: '8-12%',
      features: [
        'Dedicated workspace in 6000 sq ft facility',
        'Weekly mentor sessions with industry experts',
        'Legal & compliance support',
        'Investor pitch preparation',
        'Market validation assistance',
        'Technology development guidance'
      ],
      outcomes: [
        '85% of startups raise follow-on funding',
        'Average 300% revenue growth',
        '95% survival rate after 2 years'
      ]
    },
    {
      id: 'incubator',
      name: 'Business Incubator',
      duration: '12 Months',
      investment: '₹2-25 Lakhs',
      equity: '5-8%',
      features: [
        'Flexible co-working space access',
        'Bi-weekly mentorship sessions',
        'Business model development',
        'Prototype development support',
        'Market research assistance',
        'Networking events access'
      ],
      outcomes: [
        '70% successfully launch products',
        'Average 200% user growth',
        '80% secure seed funding'
      ]
    },
    {
      id: 'reattire',
      name: 'ReAttire Program',
      duration: '3 Months',
      investment: '₹50,000-2 Lakhs',
      equity: 'No Equity',
      features: [
        'Weekend and evening sessions',
        'Retirement transition planning',
        'Skill enhancement workshops',
        'Peer learning groups',
        'Industry expert sessions',
        'Post-retirement venture guidance'
      ],
      outcomes: [
        '90% complete transition successfully',
        '60% start new ventures',
        '100% report improved confidence'
      ]
    }
  ];

  const officeSpaces = [
    {
      name: 'Co-working Area',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop',
      description: 'Open collaborative workspace with modern amenities'
    },
    {
      name: 'Private Meeting Rooms',
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop',
      description: 'Soundproof rooms for confidential discussions'
    },
    {
      name: 'Networking Lounge',
      image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=600&h=400&fit=crop',
      description: 'Casual space for networking and collaboration'
    }
  ];

  const activeData = programs?.find(p => p?.id === activeProgram);

  return (
    <section className="bg-background py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Workforce & Business Solutions
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Empower your organisation with our end-to-end workforce, staffing, and consulting services designed to help you scale efficiently, optimise operations, and deliver better results.
          </p>
        </div>


        {/* Program Selection */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {programs?.map((program) => (
            <button
              key={program?.id}
              onClick={() => setActiveProgram(program?.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${activeProgram === program?.id
                  ? 'bg-primary text-primary-foreground shadow-brand'
                  : 'bg-surface text-foreground hover:bg-primary/10'
                }`}
            >
              {program?.name}
            </button>
          ))}
        </div>

        {/* Program Details */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-8">
            <div className="bg-card rounded-2xl p-8 shadow-brand border border-border">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                  <Icon name="Rocket" size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">{activeData?.name}</h3>
                  <p className="text-muted-foreground">Comprehensive growth program</p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center p-4 bg-surface rounded-lg">
                  <div className="text-2xl font-bold text-primary">{activeData?.duration}</div>
                  <div className="text-sm text-muted-foreground">Duration</div>
                </div>
                <div className="text-center p-4 bg-surface rounded-lg">
                  <div className="text-2xl font-bold text-secondary">{activeData?.investment}</div>
                  <div className="text-sm text-muted-foreground">Investment</div>
                </div>
                <div className="text-center p-4 bg-surface rounded-lg">
                  <div className="text-2xl font-bold text-accent">{activeData?.equity}</div>
                  <div className="text-sm text-muted-foreground">Equity</div>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-4">Program Features</h4>
                  <div className="space-y-3">
                    {activeData?.features?.map((feature, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <Icon name="Check" size={16} className="text-success mt-1 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-4">Expected Outcomes</h4>
                  <div className="space-y-3">
                    {activeData?.outcomes?.map((outcome, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <Icon name="TrendingUp" size={16} className="text-accent mt-1 flex-shrink-0" />
                        <span className="text-muted-foreground">{outcome}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-border">
                <Button
                  variant="default"
                  size="lg"
                  iconName="ArrowRight"
                  iconPosition="right"
                  className="w-full bg-primary hover:bg-primary/90"
                >
                  Apply for {activeData?.name}
                </Button>
              </div>
            </div>
          </div>

          {/* Office Space Virtual Tour */}
          <div className="space-y-8">
            <div className="bg-card rounded-2xl p-8 shadow-brand border border-border">
              <h3 className="text-xl font-bold text-foreground mb-6">
                Virtual Office Tour - 6000 Sq Ft Facility
              </h3>

              <div className="space-y-6">
                {officeSpaces?.map((space, index) => (
                  <div key={index} className="group cursor-pointer">
                    <div className="relative overflow-hidden rounded-lg mb-3">
                      <Image
                        src={space?.image}
                        alt={space?.name}
                        className="w-full h-48 object-cover transition-transform group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="absolute bottom-4 left-4 text-white">
                          <Icon name="Play" size={24} />
                        </div>
                      </div>
                    </div>
                    <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {space?.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">{space?.description}</p>
                  </div>
                ))}
              </div>

              <div className="pt-6 border-t border-border">
                <Button
                  variant="outline"
                  size="lg"
                  iconName="MapPin"
                  iconPosition="left"
                  className="w-full"
                >
                  Schedule Physical Tour
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Success Metrics */}
        <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">Program Success Metrics</h3>
            <p className="text-white/90">Real results from our incubated startups</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">500+</div>
              <div className="text-white/80">Startups Incubated</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">₹250Cr+</div>
              <div className="text-white/80">Funding Raised</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">85%</div>
              <div className="text-white/80">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">2000+</div>
              <div className="text-white/80">Jobs Created</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IncubatorPrograms;