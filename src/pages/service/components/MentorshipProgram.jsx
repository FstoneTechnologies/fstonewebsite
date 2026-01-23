import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Image from '../../../components/AppImage';

const MentorshipProgram = () => {
  const [selectedMentor, setSelectedMentor] = useState(null);

  const mentors = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      title: 'Former CTO, Tech Mahindra',
      expertise: ['Technology Strategy', 'Product Development', 'Team Building'],
      experience: '20+ years',
      startups: 15,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
      bio: `Rajesh has led technology transformations at multiple Fortune 500 companies and has been instrumental in scaling tech teams from 10 to 500+ engineers. His expertise in cloud architecture and agile methodologies has helped startups achieve 10x growth.`,
      achievements: [
        'Led digital transformation at 3 Fortune 500 companies',
        'Mentored 50+ startups with 80% success rate',
        'Expert in AI/ML and cloud technologies'
      ],
      availability: 'Available for 2 new mentees'
    },
    {
      id: 2,
      name: 'Priya Sharma',
      title: 'Former VP Marketing, Flipkart',
      expertise: ['Digital Marketing', 'Brand Strategy', 'Growth Hacking'],
      experience: '15+ years',
      startups: 22,
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face',
      bio: `Priya built and scaled marketing teams that drove user acquisition for millions of customers. Her growth strategies have helped startups achieve viral growth and establish strong brand presence in competitive markets.`,
      achievements: [
        'Scaled user base from 1M to 50M at Flipkart',
        'Expert in performance marketing and analytics',
        'Built marketing teams across 5 countries'
      ],
      availability: 'Fully booked - Waitlist available'
    },
    {
      id: 3,
      name: 'Amit Patel',
      title: 'Serial Entrepreneur & Investor',
      expertise: ['Fundraising', 'Business Strategy', 'Operations'],
      experience: '18+ years',
      startups: 8,
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
      bio: `Amit has founded 3 successful startups with 2 exits totaling $150M. As an angel investor, he has invested in 40+ startups and provides hands-on guidance on fundraising, business model optimization, and scaling operations.`,
      achievements: [
        '2 successful exits worth $150M combined',
        'Angel investor in 40+ startups',
        'Raised $50M+ across multiple ventures'
      ],
      availability: 'Available for 1 new mentee'
    },
    {
      id: 4,
      name: 'Dr. Sunita Reddy',
      title: 'Former Director, DRDO',
      expertise: ['Government Relations', 'Defense Tech', 'R&D Strategy'],
      experience: '25+ years',
      startups: 12,
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop&crop=face',
      bio: `Dr. Reddy brings deep expertise in government sector engagement and defense technology development. Her network and knowledge of regulatory frameworks help startups navigate complex government partnerships and defense contracts.`,
      achievements: [
        'Led 10+ defense technology projects',
        'Expert in government procurement processes',
        'Strong network in defense and aerospace sectors'
      ],
      availability: 'Available for 3 new mentees'
    }
  ];

  const mentorshipTiers = [
    {
      name: 'Startup Mentor',
      price: '₹25,000/month',
      duration: '6 months minimum',
      features: [
        '2 one-on-one sessions per month',
        'Email support between sessions',
        'Access to mentor\'s network',
        'Strategic planning assistance',
        'Investor introduction (if applicable)'
      ],
      popular: false
    },
    {
      name: 'Growth Accelerator',
      price: '₹45,000/month',
      duration: '3 months minimum',
      features: [
        '4 one-on-one sessions per month',
        '24/7 WhatsApp support',
        'Weekly group sessions',
        'Investor pitch preparation',
        'Board meeting preparation',
        'Team hiring assistance'
      ],
      popular: true
    },
    {
      name: 'Executive Coaching',
      price: '₹75,000/month',
      duration: '12 months minimum',
      features: [
        'Weekly one-on-one sessions',
        'Unlimited communication access',
        'Leadership development program',
        'Board advisory support',
        'Crisis management guidance',
        'Exit strategy planning'
      ],
      popular: false
    }
  ];

  const successStories = [
    {
      startup: 'TechFlow Solutions',
      mentor: 'Rajesh Kumar',
      outcome: 'Raised ₹15Cr Series A',
      growth: '500% revenue growth',
      timeline: '8 months'
    },
    {
      startup: 'EcoGreen Products',
      mentor: 'Priya Sharma',
      outcome: '2M+ user acquisition',
      growth: '1200% user growth',
      timeline: '6 months'
    },
    {
      startup: 'DefenseTech Innovations',
      mentor: 'Dr. Sunita Reddy',
      outcome: '₹25Cr government contract',
      growth: 'First defense startup contract',
      timeline: '12 months'
    }
  ];

  return (
    <section className="bg-background py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Expert Mentorship Program
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Get paired with industry veterans who have built, scaled, and exited successful companies. Our mentors provide hands-on guidance tailored to your specific challenges and goals.
          </p>
        </div>

        {/* Mentor Profiles */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            Meet Our Expert Mentors
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {mentors?.map((mentor) => (
              <div
                key={mentor?.id}
                className={`bg-card rounded-2xl p-6 shadow-brand border-2 transition-all cursor-pointer ${
                  selectedMentor?.id === mentor?.id
                    ? 'border-primary shadow-brand-lg'
                    : 'border-border hover:border-primary/50'
                }`}
                onClick={() => setSelectedMentor(selectedMentor?.id === mentor?.id ? null : mentor)}
              >
                <div className="text-center mb-4">
                  <div className="relative inline-block mb-4">
                    <Image
                      src={mentor?.image}
                      alt={mentor?.name}
                      className="w-20 h-20 rounded-full object-cover mx-auto"
                    />
                    <div className={`absolute -bottom-1 -right-1 w-6 h-6 rounded-full border-2 border-white ${
                      mentor?.availability?.includes('Available') ? 'bg-success' : 'bg-warning'
                    }`}></div>
                  </div>
                  
                  <h4 className="font-bold text-foreground mb-1">{mentor?.name}</h4>
                  <p className="text-sm text-primary font-medium mb-2">{mentor?.title}</p>
                  <p className="text-xs text-muted-foreground mb-3">{mentor?.experience} experience</p>
                </div>

                <div className="space-y-3">
                  <div className="flex flex-wrap gap-1">
                    {mentor?.expertise?.slice(0, 2)?.map((skill, index) => (
                      <span
                        key={index}
                        className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                    {mentor?.expertise?.length > 2 && (
                      <span className="text-xs px-2 py-1 bg-muted text-muted-foreground rounded-full">
                        +{mentor?.expertise?.length - 2}
                      </span>
                    )}
                  </div>

                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Startups mentored:</span>
                    <span className="font-semibold text-foreground">{mentor?.startups}</span>
                  </div>

                  <div className={`text-xs px-2 py-1 rounded text-center ${
                    mentor?.availability?.includes('Available')
                      ? 'bg-success/10 text-success' :'bg-warning/10 text-warning'
                  }`}>
                    {mentor?.availability}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Selected Mentor Details */}
          {selectedMentor && (
            <div className="bg-card rounded-2xl p-8 shadow-brand-lg border border-primary/20">
              <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <div className="flex items-start space-x-6 mb-6">
                    <Image
                      src={selectedMentor?.image}
                      alt={selectedMentor?.name}
                      className="w-24 h-24 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-2">
                        {selectedMentor?.name}
                      </h3>
                      <p className="text-primary font-medium mb-2">{selectedMentor?.title}</p>
                      <p className="text-muted-foreground">{selectedMentor?.bio}</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Key Achievements</h4>
                      <div className="space-y-2">
                        {selectedMentor?.achievements?.map((achievement, index) => (
                          <div key={index} className="flex items-start space-x-3">
                            <Icon name="Award" size={16} className="text-accent mt-1 flex-shrink-0" />
                            <span className="text-muted-foreground">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Expertise Areas</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedMentor?.expertise?.map((skill, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-surface rounded-lg p-6">
                    <h4 className="font-semibold text-foreground mb-4">Mentorship Stats</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Experience:</span>
                        <span className="font-semibold">{selectedMentor?.experience}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Startups Mentored:</span>
                        <span className="font-semibold">{selectedMentor?.startups}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Availability:</span>
                        <span className={`font-semibold ${
                          selectedMentor?.availability?.includes('Available') ? 'text-success' : 'text-warning'
                        }`}>
                          {selectedMentor?.availability?.includes('Available') ? 'Available' : 'Waitlist'}
                        </span>
                      </div>
                    </div>
                  </div>

                  <Button
                    variant="default"
                    size="lg"
                    iconName="Calendar"
                    iconPosition="left"
                    className="w-full"
                    disabled={!selectedMentor?.availability?.includes('Available')}
                  >
                    {selectedMentor?.availability?.includes('Available') 
                      ? 'Schedule Meeting' :'Join Waitlist'
                    }
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Mentorship Tiers */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            Choose Your Mentorship Level
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {mentorshipTiers?.map((tier, index) => (
              <div
                key={index}
                className={`relative bg-card rounded-2xl p-8 shadow-brand border-2 ${
                  tier?.popular
                    ? 'border-primary shadow-brand-lg'
                    : 'border-border'
                }`}
              >
                {tier?.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h4 className="text-xl font-bold text-foreground mb-2">{tier?.name}</h4>
                  <div className="text-3xl font-bold text-primary mb-2">{tier?.price}</div>
                  <p className="text-muted-foreground">{tier?.duration}</p>
                </div>

                <div className="space-y-4 mb-8">
                  {tier?.features?.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start space-x-3">
                      <Icon name="Check" size={16} className="text-success mt-1 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button
                  variant={tier?.popular ? "default" : "outline"}
                  size="lg"
                  className="w-full"
                  iconName="ArrowRight"
                  iconPosition="right"
                >
                  Get Started
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* Success Stories */}
        <div className="bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            Mentorship Success Stories
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {successStories?.map((story, index) => (
              <div key={index} className="bg-card rounded-lg p-6 shadow-brand">
                <div className="mb-4">
                  <h4 className="font-bold text-foreground mb-2">{story?.startup}</h4>
                  <p className="text-sm text-primary">Mentored by {story?.mentor}</p>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Icon name="Target" size={16} className="text-success" />
                    <span className="text-sm font-medium text-success">{story?.outcome}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="TrendingUp" size={16} className="text-accent" />
                    <span className="text-sm font-medium text-accent">{story?.growth}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Clock" size={16} className="text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">Achieved in {story?.timeline}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MentorshipProgram;