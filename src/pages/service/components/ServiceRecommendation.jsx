import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Select from '../../../components/ui/Select';

const ServiceRecommendation = () => {
  const [formData, setFormData] = useState({
    businessStage: '',
    industry: '',
    goals: '',
    timeline: '',
    budget: ''
  });
  const [recommendations, setRecommendations] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const businessStageOptions = [
    { value: 'idea', label: 'Idea Stage' },
    { value: 'mvp', label: 'MVP Development' },
    { value: 'early-revenue', label: 'Early Revenue' },
    { value: 'scaling', label: 'Scaling Phase' },
    { value: 'established', label: 'Established Business' }
  ];

  const industryOptions = [
    { value: 'technology', label: 'Technology & Software' },
    { value: 'healthcare', label: 'Healthcare & Biotech' },
    { value: 'fintech', label: 'Financial Technology' },
    { value: 'ecommerce', label: 'E-commerce & Retail' },
    { value: 'manufacturing', label: 'Manufacturing' },
    { value: 'agriculture', label: 'Agriculture & Food' },
    { value: 'education', label: 'Education & EdTech' },
    { value: 'defense', label: 'Defense & Aerospace' },
    { value: 'other', label: 'Other' }
  ];

  const goalOptions = [
    { value: 'fundraising', label: 'Raise Investment' },
    { value: 'scaling', label: 'Scale Operations' },
    { value: 'compliance', label: 'Legal Compliance' },
    { value: 'government', label: 'Government Contracts' },
    { value: 'mentorship', label: 'Expert Guidance' },
    { value: 'market-entry', label: 'Market Entry' }
  ];

  const timelineOptions = [
    { value: '1-3months', label: '1-3 Months' },
    { value: '3-6months', label: '3-6 Months' },
    { value: '6-12months', label: '6-12 Months' },
    { value: '12months+', label: '12+ Months' }
  ];

  const budgetOptions = [
    { value: 'under-1l', label: 'Under ₹1 Lakh' },
    { value: '1-5l', label: '₹1-5 Lakhs' },
    { value: '5-25l', label: '₹5-25 Lakhs' },
    { value: '25-50l', label: '₹25-50 Lakhs' },
    { value: '50l+', label: '₹50+ Lakhs' }
  ];

  const generateRecommendations = () => {
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      const mockRecommendations = {
        primaryService: {
          name: 'Startup Accelerator Program',
          match: '95%',
          description: 'Perfect fit for your scaling phase technology startup',
          price: '₹25,000/month',
          duration: '6 months',
          benefits: [
            'Weekly mentor sessions with tech industry experts',
            'Investor pitch preparation and introductions',
            'Legal compliance support for scaling',
            'Access to 6000 sq ft co-working facility'
          ]
        },
        secondaryServices: [
          {
            name: 'Legal Services - Scaling Stage',
            match: '88%',
            description: 'Investment documentation and compliance support',
            price: '₹75,000',
            timeline: '10-14 days'
          },
          {
            name: 'Expert Mentorship',
            match: '85%',
            description: 'Technology strategy and product development guidance',
            price: '₹45,000/month',
            timeline: '3 months minimum'
          }
        ],
        additionalServices: [
          {
            name: 'Government Sector Introductions',
            match: '70%',
            description: 'Access to government technology contracts',
            price: 'Custom pricing',
            timeline: 'Ongoing'
          }
        ],
        totalInvestment: '₹2.5-5 Lakhs',
        expectedOutcomes: [
          '85% chance of raising follow-on funding',
          'Average 300% revenue growth',
          'Access to investor network of 200+ VCs',
          'Government contract opportunities worth ₹50Cr+'
        ]
      };
      
      setRecommendations(mockRecommendations);
      setIsLoading(false);
    }, 2000);
  };

  const handleSubmit = (e) => {
    e?.preventDefault();
    generateRecommendations();
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <section className="bg-background py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Service Recommendation Engine
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Get personalized service recommendations based on your business stage, industry, and goals. Our AI-powered engine analyzes your inputs to suggest the optimal growth pathway.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <div className="bg-card rounded-2xl p-8 shadow-brand border border-border">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Tell Us About Your Business
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <Select
                label="Business Stage"
                description="What stage is your business currently in?"
                options={businessStageOptions}
                value={formData?.businessStage}
                onChange={(value) => handleInputChange('businessStage', value)}
                required
              />

              <Select
                label="Industry"
                description="Which industry does your business operate in?"
                options={industryOptions}
                value={formData?.industry}
                onChange={(value) => handleInputChange('industry', value)}
                required
              />

              <Select
                label="Primary Goal"
                description="What's your main objective for the next 12 months?"
                options={goalOptions}
                value={formData?.goals}
                onChange={(value) => handleInputChange('goals', value)}
                required
              />

              <Select
                label="Timeline"
                description="When do you want to achieve your primary goal?"
                options={timelineOptions}
                value={formData?.timeline}
                onChange={(value) => handleInputChange('timeline', value)}
                required
              />

              <Select
                label="Budget Range"
                description="What's your budget for professional services?"
                options={budgetOptions}
                value={formData?.budget}
                onChange={(value) => handleInputChange('budget', value)}
                required
              />

              <Button
                type="submit"
                variant="default"
                size="lg"
                loading={isLoading}
                iconName="Zap"
                iconPosition="left"
                className="w-full"
                disabled={!formData?.businessStage || !formData?.industry || !formData?.goals}
              >
                {isLoading ? 'Analyzing Your Needs...' : 'Get Recommendations'}
              </Button>
            </form>
          </div>

          {/* Recommendations */}
          <div className="space-y-6">
            {!recommendations && !isLoading && (
              <div className="bg-surface rounded-2xl p-8 text-center">
                <Icon name="Target" size={48} className="mx-auto text-muted-foreground mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-2">
                  Ready for Personalized Recommendations?
                </h3>
                <p className="text-muted-foreground">
                  Fill out the form to get tailored service recommendations based on your specific business needs and goals.
                </p>
              </div>
            )}

            {isLoading && (
              <div className="bg-card rounded-2xl p-8 shadow-brand border border-border">
                <div className="text-center">
                  <div className="animate-spin w-12 h-12 border-4 border-primary border-t-transparent rounded-full mx-auto mb-4"></div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    Analyzing Your Business Needs
                  </h3>
                  <p className="text-muted-foreground">
                    Our AI engine is processing your inputs to find the perfect service combination...
                  </p>
                </div>
              </div>
            )}

            {recommendations && (
              <div className="space-y-6">
                {/* Primary Recommendation */}
                <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-white">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">
                        {recommendations?.primaryService?.name}
                      </h3>
                      <p className="text-white/90">{recommendations?.primaryService?.description}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-accent">
                        {recommendations?.primaryService?.match}
                      </div>
                      <div className="text-white/80 text-sm">Match Score</div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="text-xl font-bold">{recommendations?.primaryService?.price}</div>
                      <div className="text-white/80 text-sm">Investment</div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="text-xl font-bold">{recommendations?.primaryService?.duration}</div>
                      <div className="text-white/80 text-sm">Duration</div>
                    </div>
                  </div>

                  <div className="space-y-2 mb-6">
                    {recommendations?.primaryService?.benefits?.map((benefit, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <Icon name="Check" size={16} className="text-accent mt-1 flex-shrink-0" />
                        <span className="text-white/90">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  <Button
                    variant="default"
                    size="lg"
                    iconName="ArrowRight"
                    iconPosition="right"
                    className="bg-accent hover:bg-accent/90 text-accent-foreground"
                  >
                    Apply for This Program
                  </Button>
                </div>

                {/* Secondary Services */}
                <div className="space-y-4">
                  <h4 className="text-xl font-bold text-foreground">
                    Complementary Services
                  </h4>
                  
                  {recommendations?.secondaryServices?.map((service, index) => (
                    <div key={index} className="bg-card rounded-lg p-6 shadow-brand border border-border">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h5 className="font-bold text-foreground mb-1">{service?.name}</h5>
                          <p className="text-muted-foreground text-sm">{service?.description}</p>
                        </div>
                        <span className="text-primary font-bold">{service?.match}</span>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <span className="text-success font-semibold">{service?.price}</span>
                          <span className="text-muted-foreground text-sm">{service?.timeline}</span>
                        </div>
                        <Button variant="outline" size="sm">
                          Learn More
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Expected Outcomes */}
                <div className="bg-surface rounded-lg p-6">
                  <h4 className="font-bold text-foreground mb-4">Expected Outcomes</h4>
                  <div className="space-y-3">
                    {recommendations?.expectedOutcomes?.map((outcome, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <Icon name="TrendingUp" size={16} className="text-success mt-1 flex-shrink-0" />
                        <span className="text-muted-foreground">{outcome}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 pt-4 border-t border-border">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-foreground">Total Investment Range:</span>
                      <span className="text-2xl font-bold text-primary">{recommendations?.totalInvestment}</span>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="text-center">
                  <Button
                    variant="default"
                    size="lg"
                    iconName="Calendar"
                    iconPosition="left"
                    className="mr-4"
                  >
                    Schedule Consultation
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    iconName="Download"
                    iconPosition="left"
                  >
                    Download Report
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceRecommendation;