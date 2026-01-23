import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Image from '../../../components/AppImage';
import LazyLoad from '../../../components/LazyLoad';

const KnowledgeCenter = () => {
  const [activeCategory, setActiveCategory] = useState('compliance');

  const categories = [
    {
      id: 'compliance',
      name: 'Legal Compliance',
      icon: 'Scale',
      color: 'text-primary',
      image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&h=300&fit=crop&crop=center'
    },
    {
      id: 'funding',
      name: 'Funding Guides',
      icon: 'TrendingUp',
      color: 'text-success',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop&crop=center'
    },
    {
      id: 'startup',
      name: 'Startup Toolkit',
      icon: 'Rocket',
      color: 'text-secondary',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop&crop=center'
    },
    {
      id: 'regulatory',
      name: 'Regulatory Updates',
      icon: 'FileText',
      color: 'text-accent',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&crop=center'
    }
  ];

  const resources = {
    compliance: [
      {
        title: 'Complete GST Compliance Guide for Startups',
        description: 'Step-by-step guide covering GST registration, filing, and compliance requirements for new businesses.',
        type: 'PDF Guide',
        downloads: '2.5K',
        icon: 'Download',
        size: '2.8 MB'
      },
      {
        title: 'Company Registration Checklist',
        description: 'Comprehensive checklist for private limited company registration with required documents.',
        type: 'Checklist',
        downloads: '1.8K',
        icon: 'CheckSquare',
        size: '1.2 MB'
      },
      {
        title: 'Employment Law Compliance Template',
        description: 'Ready-to-use templates for employment contracts, policies, and compliance documentation.',
        type: 'Template',
        downloads: '1.2K',
        icon: 'FileText',
        size: '3.1 MB'
      }
    ],
    funding: [
      {
        title: 'Investor Pitch Deck Template',
        description: 'Professional pitch deck template with proven structure for successful funding rounds.',
        type: 'PowerPoint',
        downloads: '3.2K',
        icon: 'Presentation',
        size: '4.5 MB'
      },
      {
        title: 'Financial Modeling for Startups',
        description: 'Excel templates and guides for creating comprehensive financial models and projections.',
        type: 'Excel Template',
        downloads: '2.1K',
        icon: 'Calculator',
        size: '2.3 MB'
      },
      {
        title: 'Due Diligence Preparation Guide',
        description: 'Complete guide to preparing for investor due diligence with document checklists.',
        type: 'PDF Guide',
        downloads: '1.5K',
        icon: 'Search',
        size: '1.9 MB'
      }
    ],
    startup: [
      {
        title: 'Business Plan Template & Guide',
        description: 'Comprehensive business plan template with section-by-section guidance and examples.',
        type: 'Word Template',
        downloads: '4.1K',
        icon: 'FileText',
        size: '3.7 MB'
      },
      {
        title: 'Market Research Toolkit',
        description: 'Tools and templates for conducting effective market research and competitive analysis.',
        type: 'Toolkit',
        downloads: '2.8K',
        icon: 'BarChart3',
        size: '5.2 MB'
      },
      {
        title: 'Product Launch Checklist',
        description: 'Step-by-step checklist for successful product launches with timeline and milestones.',
        type: 'Checklist',
        downloads: '1.9K',
        icon: 'Rocket',
        size: '1.1 MB'
      }
    ],
    regulatory: [
      {
        title: 'Latest Startup Policy Updates - Q4 2024',
        description: 'Recent changes in startup policies, tax benefits, and regulatory requirements.',
        type: 'Report',
        downloads: '1.6K',
        icon: 'Newspaper',
        size: '2.4 MB'
      },
      {
        title: 'Data Protection Compliance Guide',
        description: 'Complete guide to data protection laws and compliance requirements for digital businesses.',
        type: 'PDF Guide',
        downloads: '1.3K',
        icon: 'Shield',
        size: '2.1 MB'
      },
      {
        title: 'Industry-Specific Regulations Overview',
        description: 'Sector-wise regulatory requirements for fintech, healthtech, edtech, and other industries.',
        type: 'Overview',
        downloads: '1.1K',
        icon: 'Building',
        size: '3.3 MB'
      }
    ]
  };

  const activeResources = resources?.[activeCategory];

  return (
    <section className="py-20 bg-yellow-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <LazyLoad>
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
              <Icon name="BookOpen" size={16} className="text-primary" />
              <span className="text-sm font-medium text-primary">Knowledge Hub</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Your Startup Success Toolkit
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Access comprehensive guides, templates, and resources curated by our legal and business experts. 
              Everything you need to build, scale, and succeed.
            </p>
          </div>
        </LazyLoad>

        {/* Category Navigation */}
        <LazyLoad delay={200}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {categories.map((category, index) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`group relative overflow-hidden rounded-2xl p-6 text-center transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-primary text-primary-foreground shadow-lg scale-105'
                    : 'bg-card hover:bg-card/80 hover:shadow-md'
                }`}
              >
                {/* Background Image */}
                <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                  <Image
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover"
                    animation={index === 0 ? "fadeIn" : index === 1 ? "slideUp" : index === 2 ? "zoomIn" : "slideLeft"}
                    delay={index * 100}
                    lazy={true}
                  />
                </div>
                
                {/* Category Content */}
                <div className="relative z-10">
                  <div className={`w-12 h-12 mx-auto mb-3 rounded-xl bg-background/20 flex items-center justify-center ${
                    activeCategory === category.id ? 'text-primary-foreground' : category.color
                  }`}>
                    <Icon name={category.icon} size={24} />
                  </div>
                  <h3 className="font-semibold text-sm">{category.name}</h3>
                </div>
              </button>
            ))}
          </div>
        </LazyLoad>

        {/* Resources Grid */}
        <LazyLoad delay={400}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {resources[activeCategory]?.map((resource, index) => (
              <div key={index} className="bg-card border border-border rounded-2xl p-6 hover:shadow-brand transition-all duration-300 group">
                {/* Resource Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon name={resource.icon} size={18} className="text-primary" />
                    </div>
                    <div>
                      <div className="text-xs font-medium text-primary">{resource.type}</div>
                      <div className="text-xs text-muted-foreground">{resource.size}</div>
                    </div>
                  </div>
                  <div className="text-xs text-muted-foreground">{resource.downloads} downloads</div>
                </div>

                {/* Resource Content */}
                <h3 className="font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {resource.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {resource.description}
                </p>

                {/* Resource Stats & Action */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                    <Icon name="Download" size={14} />
                    <span>{resource.downloads} downloads</span>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    iconName="ArrowRight"
                    iconPosition="right"
                    className="text-primary hover:bg-primary/10 opacity-0 group-hover:opacity-100 transition-all duration-300"
                  >
                    Download
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </LazyLoad>

        {/* Newsletter Signup */}
        <LazyLoad delay={600}>
          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-3xl p-8 md:p-12 relative overflow-hidden">
            {/* Background Animated Image */}
            <div className="absolute top-0 right-0 w-64 h-64 opacity-5">
              <Image
                src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=400&fit=crop&crop=center"
                alt="Newsletter background"
                className="w-full h-full object-cover"
                animation="rotate"
                delay={500}
                lazy={true}
              />
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 items-center relative z-10">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Stay Updated with Latest Resources
                </h3>
                <p className="text-foreground/80 mb-6">
                  Get notified when we publish new guides, templates, and regulatory updates. 
                  Join 5000+ startup founders who trust our insights.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <Icon name="Check" size={16} className="text-success" />
                    <span className="text-sm text-foreground">Weekly updates</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Check" size={16} className="text-success" />
                    <span className="text-sm text-foreground">Exclusive content</span>
                  </div>
                </div>
              </div>
              <div className="bg-card rounded-2xl p-6">
                <div className="flex space-x-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  />
                  <Button
                    variant="default"
                    iconName="Send"
                    iconPosition="right"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    Subscribe
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground mt-3">
                  No spam. Unsubscribe anytime.
                </p>
              </div>
            </div>
          </div>
        </LazyLoad>

        {/* Bottom CTA */}
        <LazyLoad delay={800}>
          <div className="text-center mt-16">
            <p className="text-muted-foreground mb-6">
              Need personalized guidance for your specific situation?
            </p>
            <Link to="/contact">
              <Button
                variant="outline"
                size="lg"
                iconName="MessageCircle"
                iconPosition="left"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                Schedule Expert Consultation
              </Button>
            </Link>
          </div>
        </LazyLoad>
      </div>
    </section>
  );
};

export default KnowledgeCenter;