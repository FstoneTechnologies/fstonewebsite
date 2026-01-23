import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const MobileOptimized = () => {
  const [showVirtualTour, setShowVirtualTour] = useState(false);

  const quickActions = [
    {
      title: 'Apply Now',
      description: 'Start your incubation journey',
      icon: 'Rocket',
      color: 'bg-primary',
      textColor: 'text-primary-foreground',
      path: '/apply'
    },
    {
      title: 'Book Consultation',
      description: 'Schedule expert guidance',
      icon: 'Calendar',
      color: 'bg-secondary',
      textColor: 'text-secondary-foreground',
      path: '/contact'
    },
    {
      title: 'Virtual Tour',
      description: 'Explore our 6000 sq ft space',
      icon: 'Play',
      color: 'bg-accent',
      textColor: 'text-accent-foreground',
      action: () => setShowVirtualTour(true)
    }
  ];

  const keyFeatures = [
    {
      icon: 'Shield',
      title: '25+ Years Legal Expertise',
      description: 'Proven track record in business law'
    },
    {
      icon: 'TrendingUp',
      title: '85% Success Rate',
      description: 'Portfolio companies achieving growth'
    },
    {
      icon: 'Users',
      title: 'Expert Mentor Network',
      description: 'Industry veterans guiding your journey'
    },
    {
      icon: 'Building2',
      title: 'Premium Office Space',
      description: '6000 sq ft state-of-the-art facility'
    }
  ];

  return (
    <section className="lg:hidden py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="max-w-lg mx-auto px-6">
        {/* Mobile Hero */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-2 mb-6">
            <Icon name="Smartphone" size={16} className="text-accent" />
            <span className="text-sm font-medium text-accent">Mobile Optimized Experience</span>
          </div>
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Your Success Journey
            <br />
            <span className="text-gradient-brand">Starts Here</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Access our complete ecosystem of startup support, legal expertise, and growth resources 
            right from your mobile device.
          </p>
        </div>

        {/* Quick Actions */}
        <div className="space-y-4 mb-12">
          {quickActions?.map((action, index) => (
            <div key={index}>
              {action?.path ? (
                <Link to={action?.path}>
                  <div className={`${action?.color} ${action?.textColor} rounded-2xl p-6 shadow-brand hover:shadow-brand-lg transition-all duration-300 active:scale-95`}>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                        <Icon name={action?.icon} size={24} className="text-current" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-1">{action?.title}</h3>
                        <p className="text-sm opacity-90">{action?.description}</p>
                      </div>
                      <Icon name="ArrowRight" size={20} className="text-current opacity-70" />
                    </div>
                  </div>
                </Link>
              ) : (
                <button
                  onClick={action?.action}
                  className={`w-full ${action?.color} ${action?.textColor} rounded-2xl p-6 shadow-brand hover:shadow-brand-lg transition-all duration-300 active:scale-95`}
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <Icon name={action?.icon} size={24} className="text-current" />
                    </div>
                    <div className="flex-1 text-left">
                      <h3 className="font-semibold text-lg mb-1">{action?.title}</h3>
                      <p className="text-sm opacity-90">{action?.description}</p>
                    </div>
                    <Icon name="ArrowRight" size={20} className="text-current opacity-70" />
                  </div>
                </button>
              )}
            </div>
          ))}
        </div>

        {/* Key Features */}
        <div className="bg-card rounded-2xl p-6 shadow-brand mb-12">
          <h3 className="font-semibold text-foreground text-center mb-6">
            Why Choose DaRYTE?
          </h3>
          <div className="space-y-4">
            {keyFeatures?.map((feature, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name={feature?.icon} size={18} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground text-sm mb-1">
                    {feature?.title}
                  </h4>
                  <p className="text-xs text-muted-foreground">
                    {feature?.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Card */}
        <div className="bg-gradient-to-r from-secondary/10 to-primary/10 rounded-2xl p-6 border border-border">
          <div className="text-center mb-6">
            <Icon name="MessageCircle" size={32} className="text-secondary mx-auto mb-3" />
            <h3 className="font-semibold text-foreground mb-2">
              Need Immediate Assistance?
            </h3>
            <p className="text-sm text-muted-foreground">
              Our experts are available to help you get started
            </p>
          </div>
          
          <div className="space-y-3">
            <Button
              variant="default"
              fullWidth
              iconName="Phone"
              iconPosition="left"
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground"
            >
              Call Now: +91 98765 43210
            </Button>
            <Button
              variant="outline"
              fullWidth
              iconName="Mail"
              iconPosition="left"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              Email: hello@daryte.com
            </Button>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-2 gap-4 mt-8">
          <div className="text-center">
            <div className="text-2xl font-bold text-primary mb-1">50+</div>
            <div className="text-xs text-muted-foreground">Portfolio Companies</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-success mb-1">₹25+ Cr</div>
            <div className="text-xs text-muted-foreground">Funding Raised</div>
          </div>
        </div>
      </div>
      {/* Virtual Tour Modal */}
      {showVirtualTour && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="bg-card rounded-2xl p-6 w-full max-w-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-foreground">Virtual Office Tour</h3>
              <button
                onClick={() => setShowVirtualTour(false)}
                className="w-8 h-8 bg-surface rounded-lg flex items-center justify-center"
              >
                <Icon name="X" size={16} className="text-muted-foreground" />
              </button>
            </div>
            <div className="aspect-video bg-surface rounded-lg mb-4 flex items-center justify-center">
              <div className="text-center">
                <Icon name="Play" size={48} className="text-primary mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">6000 Sq Ft Premium Space</p>
              </div>
            </div>
            <Button
              variant="default"
              fullWidth
              iconName="Play"
              iconPosition="left"
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Start Virtual Tour
            </Button>
          </div>
        </div>
      )}
    </section>
  );
};

export default MobileOptimized;