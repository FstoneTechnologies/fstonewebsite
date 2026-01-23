import React from 'react';
import Icon from '../../../components/AppIcon';

const ImpactMetrics = () => {
  const metrics = [
    {
      icon: "Rocket",
      number: "200+",
      label: "Startups Incubated",
      description: "Successfully guided from idea to market",
      color: "primary"
    },
    {
      icon: "DollarSign",
      number: "₹500Cr+",
      label: "Funding Facilitated",
      description: "Total capital raised by portfolio companies",
      color: "secondary"
    },
    {
      icon: "TrendingUp",
      number: "85%",
      label: "Success Rate",
      description: "Companies achieving sustainable growth",
      color: "accent"
    },
    {
      icon: "Users",
      number: "1000+",
      label: "Jobs Created",
      description: "Employment opportunities generated",
      color: "primary"
    },
    {
      icon: "Building",
      number: "25+",
      label: "Government Partnerships",
      description: "Active collaborations with agencies",
      color: "secondary"
    },
    {
      icon: "Award",
      number: "15+",
      label: "Successful Exits",
      description: "Acquisitions and IPO achievements",
      color: "accent"
    }
  ];

  const industryBreakdown = [
    { sector: "Technology", percentage: 35, companies: 70 },
    { sector: "Healthcare", percentage: 20, companies: 40 },
    { sector: "Fintech", percentage: 15, companies: 30 },
    { sector: "E-commerce", percentage: 12, companies: 24 },
    { sector: "EdTech", percentage: 10, companies: 20 },
    { sector: "Others", percentage: 8, companies: 16 }
  ];

  const yearlyGrowth = [
    { year: "2019", startups: 25, funding: "₹45Cr" },
    { year: "2020", startups: 35, funding: "₹75Cr" },
    { year: "2021", startups: 50, funding: "₹120Cr" },
    { year: "2022", startups: 65, funding: "₹180Cr" },
    { year: "2023", startups: 85, funding: "₹250Cr" },
    { year: "2024", startups: 110, funding: "₹350Cr" }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Icon name="BarChart" size={16} />
            <span>Impact Metrics</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Measurable Success Stories
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our impact goes beyond numbers - each metric represents dreams realized, 
            jobs created, and innovations brought to life through strategic guidance.
          </p>
        </div>

        {/* Main Metrics Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {metrics?.map((metric, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-brand border border-border hover:shadow-brand-lg transition-brand group">
              <div className={`w-16 h-16 bg-${metric?.color}/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-brand`}>
                <Icon name={metric?.icon} size={28} className={`text-${metric?.color}`} />
              </div>
              
              <div className="space-y-3">
                <div className={`text-3xl font-bold text-${metric?.color}`}>
                  {metric?.number}
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {metric?.label}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {metric?.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Industry Breakdown */}
          <div className="bg-white rounded-2xl p-8 shadow-brand border border-border">
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center">
                <Icon name="PieChart" size={20} className="text-secondary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">Industry Distribution</h3>
                <p className="text-sm text-muted-foreground">Portfolio companies by sector</p>
              </div>
            </div>

            <div className="space-y-4">
              {industryBreakdown?.map((industry, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-foreground">{industry?.sector}</span>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-muted-foreground">{industry?.companies} companies</span>
                      <span className="text-sm font-semibold text-secondary">{industry?.percentage}%</span>
                    </div>
                  </div>
                  <div className="w-full bg-surface rounded-full h-2">
                    <div 
                      className="bg-secondary rounded-full h-2 transition-brand"
                      style={{ width: `${industry?.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Yearly Growth */}
          <div className="bg-white rounded-2xl p-8 shadow-brand border border-border">
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                <Icon name="TrendingUp" size={20} className="text-accent" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">Growth Trajectory</h3>
                <p className="text-sm text-muted-foreground">Year-over-year progress</p>
              </div>
            </div>

            <div className="space-y-6">
              {yearlyGrowth?.map((year, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-surface rounded-lg">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                      <span className="text-sm font-bold text-accent">{year?.year}</span>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-foreground">
                        {year?.startups} Startups
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Companies incubated
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-semibold text-primary">
                      {year?.funding}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Funding facilitated
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Success Highlights */}
        <div className="mt-20">
          <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-white">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">Success Highlights</h3>
              <p className="text-white/90">Key achievements that define our impact</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon name="Star" size={24} className="text-white" />
                </div>
                <div className="text-2xl font-bold mb-2">3 Unicorns</div>
                <div className="text-sm text-white/80">Portfolio companies valued at $1B+</div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon name="Globe" size={24} className="text-white" />
                </div>
                <div className="text-2xl font-bold mb-2">12 Countries</div>
                <div className="text-sm text-white/80">Global expansion achieved</div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon name="Trophy" size={24} className="text-white" />
                </div>
                <div className="text-2xl font-bold mb-2">50+ Awards</div>
                <div className="text-sm text-white/80">Industry recognition received</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactMetrics;