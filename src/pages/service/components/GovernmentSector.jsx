import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Image from '../../../components/AppImage';

const GovernmentSector = () => {
  const [activeTab, setActiveTab] = useState('introductions');

  const governmentPrograms = [
    {
      name: 'Startup India Initiative',
      department: 'DPIIT, Ministry of Commerce',
      benefits: ['Tax exemptions for 3 years', 'Fast-track patent examination', 'Self-certification compliance'],
      eligibility: 'Incorporated within 10 years, annual turnover < ₹100Cr',
      timeline: '30-45 days',
      successRate: '85%'
    },
    {
      name: 'MSME Registration',
      department: 'Ministry of MSME',
      benefits: ['Priority sector lending', 'Collateral-free loans', 'Government tender preferences'],
      eligibility: 'Manufacturing investment < ₹50Cr, Service turnover < ₹50Cr',
      timeline: '15-20 days',
      successRate: '95%'
    },
    {
      name: 'Digital India Program',
      department: 'Ministry of Electronics & IT',
      benefits: ['Technology grants up to ₹50L', 'Incubation support', 'Market access facilitation'],
      eligibility: 'Technology-focused startups, Indian entity',
      timeline: '60-90 days',
      successRate: '70%'
    },
    {
      name: 'Defense Innovation Fund',
      department: 'Ministry of Defence',
      benefits: ['R&D grants up to ₹10Cr', 'Testing facility access', 'Procurement opportunities'],
      eligibility: 'Defense technology solutions, security clearance',
      timeline: '90-120 days',
      successRate: '60%'
    }
  ];

  const sectorConnections = [
    {
      sector: 'Defense & Aerospace',
      departments: ['Ministry of Defence', 'DRDO', 'HAL', 'BEL'],
      opportunities: ['Defense procurement', 'R&D partnerships', 'Technology transfer'],
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
      activeProjects: 12,
      totalValue: '₹250Cr+'
    },
    {
      sector: 'Healthcare & Pharma',
      departments: ['Ministry of Health', 'AIIMS', 'ICMR', 'Drug Controller'],
      opportunities: ['Clinical trials', 'Medical device approval', 'Public health programs'],
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop',
      activeProjects: 8,
      totalValue: '₹180Cr+'
    },
    {
      sector: 'Agriculture & Rural',
      departments: ['Ministry of Agriculture', 'ICAR', 'FCI', 'Rural Development'],
      opportunities: ['AgriTech solutions', 'Rural connectivity', 'Food processing'],
      image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&h=300&fit=crop',
      activeProjects: 15,
      totalValue: '₹320Cr+'
    },
    {
      sector: 'Smart Cities & Infrastructure',
      departments: ['Ministry of Urban Development', 'Smart Cities Mission', 'NHAI'],
      opportunities: ['Smart city solutions', 'Infrastructure development', 'Urban planning'],
      image: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1f?w=400&h=300&fit=crop',
      activeProjects: 20,
      totalValue: '₹500Cr+'
    }
  ];

  const successCases = [
    {
      startup: 'AeroTech Solutions',
      sector: 'Defense',
      contract: '₹25Cr Defense Contract',
      timeline: '8 months',
      description: 'Developed autonomous drone technology for border surveillance',
      outcome: 'First private company to win major defense contract in category'
    },
    {
      startup: 'MedInnovate',
      sector: 'Healthcare',
      contract: '₹15Cr AIIMS Partnership',
      timeline: '6 months',
      description: 'AI-powered diagnostic tool for rural healthcare centers',
      outcome: 'Deployed across 200+ government hospitals'
    },
    {
      startup: 'AgriSmart Technologies',
      sector: 'Agriculture',
      contract: '₹30Cr FCI Contract',
      timeline: '10 months',
      description: 'IoT-based crop monitoring and yield prediction system',
      outcome: 'Increased crop yield by 25% in pilot regions'
    }
  ];

  const complianceRequirements = [
    {
      category: 'Security Clearance',
      requirements: ['Background verification', 'Facility security audit', 'Personnel screening'],
      timeline: '45-60 days',
      complexity: 'High'
    },
    {
      category: 'Financial Compliance',
      requirements: ['Audited financials', 'Tax compliance certificate', 'Banking relationships'],
      timeline: '15-30 days',
      complexity: 'Medium'
    },
    {
      category: 'Technical Standards',
      requirements: ['Quality certifications', 'Testing protocols', 'Documentation standards'],
      timeline: '30-45 days',
      complexity: 'High'
    },
    {
      category: 'Legal Framework',
      requirements: ['Contract law compliance', 'IP protection', 'Regulatory approvals'],
      timeline: '20-40 days',
      complexity: 'Medium'
    }
  ];

  return (
    <section className="bg-yellow-50 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Government Sector Introductions
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Leverage our deep government connections and 25+ years of public sector experience to access lucrative government contracts, grants, and partnership opportunities.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {[
            { id: 'introductions', name: 'Sector Introductions', icon: 'Handshake' },
            { id: 'programs', name: 'Government Programs', icon: 'FileText' },
            { id: 'compliance', name: 'Compliance Support', icon: 'Shield' },
            { id: 'success', name: 'Success Stories', icon: 'Trophy' }
          ]?.map((tab) => (
            <button
              key={tab?.id}
              onClick={() => setActiveTab(tab?.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all ${
                activeTab === tab?.id
                  ? 'bg-primary text-primary-foreground shadow-brand'
                  : 'bg-card text-foreground hover:bg-primary/10 border border-border'
              }`}
            >
              <Icon name={tab?.icon} size={20} />
              <span>{tab?.name}</span>
            </button>
          ))}
        </div>

        {/* Sector Introductions */}
        {activeTab === 'introductions' && (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Strategic Sector Connections
              </h3>
              <p className="text-muted-foreground">
                Access decision-makers across key government sectors with our established network
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {sectorConnections?.map((sector, index) => (
                <div key={index} className="bg-card rounded-2xl overflow-hidden shadow-brand border border-border hover:shadow-brand-lg transition-shadow">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={sector?.image}
                      alt={sector?.sector}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <h4 className="text-xl font-bold mb-2">{sector?.sector}</h4>
                      <div className="flex items-center space-x-4 text-sm">
                        <span>{sector?.activeProjects} Active Projects</span>
                        <span>{sector?.totalValue} Value</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <div>
                      <h5 className="font-semibold text-foreground mb-2">Key Departments</h5>
                      <div className="flex flex-wrap gap-2">
                        {sector?.departments?.map((dept, deptIndex) => (
                          <span
                            key={deptIndex}
                            className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full"
                          >
                            {dept}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h5 className="font-semibold text-foreground mb-2">Opportunities</h5>
                      <div className="space-y-2">
                        {sector?.opportunities?.map((opportunity, oppIndex) => (
                          <div key={oppIndex} className="flex items-center space-x-2">
                            <Icon name="ArrowRight" size={14} className="text-accent" />
                            <span className="text-sm text-muted-foreground">{opportunity}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Button
                      variant="outline"
                      size="sm"
                      iconName="Calendar"
                      iconPosition="left"
                      className="w-full"
                    >
                      Schedule Introduction
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Government Programs */}
        {activeTab === 'programs' && (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Government Support Programs
              </h3>
              <p className="text-muted-foreground">
                Navigate complex government programs with our expert guidance and application support
              </p>
            </div>

            <div className="grid gap-6">
              {governmentPrograms?.map((program, index) => (
                <div key={index} className="bg-card rounded-lg p-6 shadow-brand border border-border">
                  <div className="grid lg:grid-cols-4 gap-6">
                    <div className="lg:col-span-2">
                      <h4 className="text-lg font-bold text-foreground mb-2">{program?.name}</h4>
                      <p className="text-primary font-medium mb-4">{program?.department}</p>
                      
                      <div className="space-y-3">
                        <div>
                          <h5 className="font-semibold text-foreground mb-2">Key Benefits</h5>
                          <div className="space-y-1">
                            {program?.benefits?.map((benefit, benefitIndex) => (
                              <div key={benefitIndex} className="flex items-start space-x-2">
                                <Icon name="Check" size={14} className="text-success mt-1 flex-shrink-0" />
                                <span className="text-sm text-muted-foreground">{benefit}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h5 className="font-semibold text-foreground mb-2">Eligibility</h5>
                        <p className="text-sm text-muted-foreground">{program?.eligibility}</p>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-center p-3 bg-surface rounded-lg">
                          <div className="text-lg font-bold text-primary">{program?.timeline}</div>
                          <div className="text-xs text-muted-foreground">Processing Time</div>
                        </div>
                        <div className="text-center p-3 bg-surface rounded-lg">
                          <div className="text-lg font-bold text-success">{program?.successRate}</div>
                          <div className="text-xs text-muted-foreground">Success Rate</div>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col justify-center">
                      <Button
                        variant="default"
                        size="sm"
                        iconName="FileText"
                        iconPosition="left"
                        className="mb-2"
                      >
                        Apply Now
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        iconName="Info"
                        iconPosition="left"
                      >
                        Learn More
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Compliance Support */}
        {activeTab === 'compliance' && (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Government Compliance Support
              </h3>
              <p className="text-muted-foreground">
                Ensure full compliance with government requirements and regulations
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {complianceRequirements?.map((compliance, index) => (
                <div key={index} className="bg-card rounded-lg p-6 shadow-brand border border-border">
                  <div className="flex items-start justify-between mb-4">
                    <h4 className="text-lg font-bold text-foreground">{compliance?.category}</h4>
                    <span className={`text-xs px-2 py-1 rounded ${
                      compliance?.complexity === 'High' ? 'bg-error/10 text-error' : 'bg-warning/10 text-warning'
                    }`}>
                      {compliance?.complexity} Complexity
                    </span>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h5 className="font-semibold text-foreground mb-2">Requirements</h5>
                      <div className="space-y-2">
                        {compliance?.requirements?.map((req, reqIndex) => (
                          <div key={reqIndex} className="flex items-center space-x-2">
                            <Icon name="CheckCircle" size={14} className="text-primary" />
                            <span className="text-sm text-muted-foreground">{req}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <div className="flex items-center space-x-2">
                        <Icon name="Clock" size={16} className="text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">{compliance?.timeline}</span>
                      </div>
                      <Button variant="outline" size="sm">
                        Get Support
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Success Stories */}
        {activeTab === 'success' && (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Government Contract Success Stories
              </h3>
              <p className="text-muted-foreground">
                Real results from startups we've helped secure government partnerships
              </p>
            </div>

            <div className="grid gap-8">
              {successCases?.map((story, index) => (
                <div key={index} className="bg-card rounded-lg p-8 shadow-brand border border-border">
                  <div className="grid lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h4 className="text-xl font-bold text-foreground mb-2">{story?.startup}</h4>
                          <span className="text-primary font-medium">{story?.sector} Sector</span>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-success">{story?.contract}</div>
                          <div className="text-sm text-muted-foreground">Contract Value</div>
                        </div>
                      </div>

                      <p className="text-muted-foreground mb-4">{story?.description}</p>
                      
                      <div className="flex items-center space-x-6">
                        <div className="flex items-center space-x-2">
                          <Icon name="Clock" size={16} className="text-accent" />
                          <span className="text-sm font-medium">Secured in {story?.timeline}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Icon name="Trophy" size={16} className="text-success" />
                          <span className="text-sm font-medium">Success Outcome</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-surface rounded-lg p-6">
                      <h5 className="font-semibold text-foreground mb-3">Impact Achieved</h5>
                      <p className="text-muted-foreground text-sm">{story?.outcome}</p>
                      
                      <Button
                        variant="outline"
                        size="sm"
                        iconName="ExternalLink"
                        iconPosition="right"
                        className="w-full mt-4"
                      >
                        View Case Study
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-white mt-16">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Access Government Opportunities?
            </h3>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              Let our government sector experts guide you through the complex landscape of public sector partnerships, contracts, and funding opportunities.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="default"
                size="lg"
                iconName="Calendar"
                iconPosition="left"
                className="bg-white text-primary hover:bg-white/90"
              >
                Schedule Consultation
              </Button>
              <Button
                variant="outline"
                size="lg"
                iconName="Download"
                iconPosition="left"
                className="border-white text-white hover:bg-white hover:text-primary"
              >
                Download Guide
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GovernmentSector;