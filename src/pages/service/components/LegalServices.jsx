import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const LegalServices = () => {
  const [activeStage, setActiveStage] = useState('pre-incorporation');

  const legalStages = [
    {
      id: 'pre-incorporation',
      name: 'Pre-Incorporation',
      icon: 'FileText',
      description: 'Foundation setup and compliance',
      services: [
        {
          name: 'Business Structure Consultation',
          description: 'Choose optimal legal structure for your business',
          price: '₹15,000',
          timeline: '3-5 days'
        },
        {
          name: 'Name Reservation & Registration',
          description: 'Secure your business name and register entity',
          price: '₹25,000',
          timeline: '7-10 days'
        },
        {
          name: 'Founder Agreement Drafting',
          description: 'Comprehensive founder and equity agreements',
          price: '₹35,000',
          timeline: '5-7 days'
        },
        {
          name: 'Intellectual Property Filing',
          description: 'Trademark, copyright, and patent applications',
          price: '₹20,000',
          timeline: '10-15 days'
        }
      ]
    },
    {
      id: 'scaling',
      name: 'Scaling Stage',
      icon: 'TrendingUp',
      description: 'Growth-focused legal support',
      services: [
        {
          name: 'Investment Documentation',
          description: 'Term sheets, SHA, and investor agreements',
          price: '₹75,000',
          timeline: '10-14 days'
        },
        {
          name: 'Employment Law Compliance',
          description: 'HR policies, contracts, and labor law compliance',
          price: '₹45,000',
          timeline: '7-10 days'
        },
        {
          name: 'Regulatory Compliance Audit',
          description: 'Comprehensive compliance review and remediation',
          price: '₹60,000',
          timeline: '14-21 days'
        },
        {
          name: 'Contract Management System',
          description: 'Vendor, customer, and partnership agreements',
          price: '₹40,000',
          timeline: '5-8 days'
        }
      ]
    },
    {
      id: 'exit-planning',
      name: 'Exit Planning',
      icon: 'Target',
      description: 'Strategic exit preparation',
      services: [
        {
          name: 'Due Diligence Preparation',
          description: 'Organize legal documents for investor review',
          price: '₹1,25,000',
          timeline: '21-30 days'
        },
        {
          name: 'Valuation Support Documentation',
          description: 'Legal framework for business valuation',
          price: '₹85,000',
          timeline: '14-21 days'
        },
        {
          name: 'M&A Transaction Support',
          description: 'Complete merger and acquisition legal support',
          price: '₹2,50,000',
          timeline: '45-60 days'
        },
        {
          name: 'IPO Readiness Assessment',
          description: 'Legal preparation for public offering',
          price: '₹3,50,000',
          timeline: '60-90 days'
        }
      ]
    }
  ];

  const complianceChecklist = [
    { item: 'GST Registration & Filing', status: 'required', complexity: 'Medium' },
    { item: 'PF & ESI Registration', status: 'conditional', complexity: 'Low' },
    { item: 'Professional Tax Registration', status: 'required', complexity: 'Low' },
    { item: 'Shop & Establishment License', status: 'required', complexity: 'Medium' },
    { item: 'FSSAI License (Food Business)', status: 'conditional', complexity: 'High' },
    { item: 'Environmental Clearance', status: 'conditional', complexity: 'High' },
    { item: 'Import Export Code (IEC)', status: 'conditional', complexity: 'Medium' },
    { item: 'Digital Signature Certificate', status: 'required', complexity: 'Low' }
  ];

  const activeStageData = legalStages?.find(stage => stage?.id === activeStage);

  return (
    <section className="bg-yellow-50 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Compliance & Legal Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Navigate complex legal requirements with confidence. Our expert legal team provides comprehensive support at every stage of your business journey.
          </p>
        </div>

        {/* Stage Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {legalStages?.map((stage) => (
            <button
              key={stage?.id}
              onClick={() => setActiveStage(stage?.id)}
              className={`flex items-center space-x-3 px-6 py-4 rounded-lg font-medium transition-all ${
                activeStage === stage?.id
                  ? 'bg-primary text-primary-foreground shadow-brand'
                  : 'bg-card text-foreground hover:bg-primary/10 border border-border'
              }`}
            >
              <Icon name={stage?.icon} size={20} />
              <div className="text-left">
                <div className="font-semibold">{stage?.name}</div>
                <div className="text-xs opacity-80">{stage?.description}</div>
              </div>
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Services List */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              {activeStageData?.name} Services
            </h3>
            
            <div className="grid gap-6">
              {activeStageData?.services?.map((service, index) => (
                <div key={index} className="bg-card rounded-lg p-6 shadow-brand border border-border hover:shadow-brand-lg transition-shadow">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-foreground mb-2">
                        {service?.name}
                      </h4>
                      <p className="text-muted-foreground mb-4">
                        {service?.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-6">
                      <div className="flex items-center space-x-2">
                        <Icon name="IndianRupee" size={16} className="text-success" />
                        <span className="font-semibold text-success">{service?.price}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Icon name="Clock" size={16} className="text-muted-foreground" />
                        <span className="text-muted-foreground">{service?.timeline}</span>
                      </div>
                    </div>
                    
                    <Button
                      variant="outline"
                      size="sm"
                      iconName="ArrowRight"
                      iconPosition="right"
                    >
                      Get Started
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Compliance Checker */}
          <div className="space-y-6">
            <div className="bg-card rounded-lg p-6 shadow-brand border border-border">
              <h3 className="text-xl font-bold text-foreground mb-4">
                Interactive Compliance Checker
              </h3>
              <p className="text-muted-foreground mb-6">
                Check your business compliance requirements based on your industry and business type.
              </p>
              
              <div className="space-y-4">
                {complianceChecklist?.slice(0, 5)?.map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-surface rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className={`w-3 h-3 rounded-full ${
                        item?.status === 'required' ? 'bg-error' : 
                        item?.status === 'conditional' ? 'bg-warning' : 'bg-success'
                      }`}></div>
                      <span className="text-sm font-medium text-foreground">{item?.item}</span>
                    </div>
                    <span className={`text-xs px-2 py-1 rounded ${
                      item?.complexity === 'High' ? 'bg-error/10 text-error' :
                      item?.complexity === 'Medium'? 'bg-warning/10 text-warning' : 'bg-success/10 text-success'
                    }`}>
                      {item?.complexity}
                    </span>
                  </div>
                ))}
              </div>
              
              <Button
                variant="default"
                size="sm"
                iconName="CheckCircle"
                iconPosition="left"
                className="w-full mt-4"
              >
                Run Full Compliance Check
              </Button>
            </div>

            {/* Document Templates */}
            <div className="bg-card rounded-lg p-6 shadow-brand border border-border">
              <h3 className="text-xl font-bold text-foreground mb-4">
                Document Templates
              </h3>
              <p className="text-muted-foreground mb-6">
                Download ready-to-use legal document templates.
              </p>
              
              <div className="space-y-3">
                {[
                  'Founder Agreement Template',
                  'Employee Contract Template',
                  'NDA Template',
                  'Service Agreement Template',
                  'Privacy Policy Template'
                ]?.map((template, index) => (
                  <button
                    key={index}
                    className="flex items-center justify-between w-full p-3 bg-surface rounded-lg hover:bg-primary/5 transition-colors"
                  >
                    <div className="flex items-center space-x-3">
                      <Icon name="FileText" size={16} className="text-primary" />
                      <span className="text-sm font-medium text-foreground">{template}</span>
                    </div>
                    <Icon name="Download" size={16} className="text-muted-foreground" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Legal Team Expertise */}
        <div className="bg-gradient-to-r from-secondary to-primary rounded-2xl p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">Expert Legal Team</h3>
            <p className="text-white/90">25+ years of combined legal expertise across industries</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <Icon name="Scale" size={32} className="mx-auto mb-4" />
              <div className="text-xl font-bold mb-2">Corporate Law</div>
              <div className="text-white/80 text-sm">Business formation & governance</div>
            </div>
            <div className="text-center">
              <Icon name="Shield" size={32} className="mx-auto mb-4" />
              <div className="text-xl font-bold mb-2">IP Protection</div>
              <div className="text-white/80 text-sm">Patents, trademarks & copyrights</div>
            </div>
            <div className="text-center">
              <Icon name="Users" size={32} className="mx-auto mb-4" />
              <div className="text-xl font-bold mb-2">Employment Law</div>
              <div className="text-white/80 text-sm">HR policies & labor compliance</div>
            </div>
            <div className="text-center">
              <Icon name="Building" size={32} className="mx-auto mb-4" />
              <div className="text-xl font-bold mb-2">Regulatory</div>
              <div className="text-white/80 text-sm">Industry-specific compliance</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LegalServices;