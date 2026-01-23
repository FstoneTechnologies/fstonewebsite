import React, { useState, useEffect } from 'react';
import Header from '../../components/ui/Header';
import ServiceHero from './components/ServiceHero';
import ServiceNavigation from './components/ServiceNavigation';
import IncubatorPrograms from './components/IncubatorPrograms';
import LegalServices from './components/LegalServices';
import MentorshipProgram from './components/MentorshipProgram';
import GovernmentSector from './components/GovernmentSector';
import ServiceRecommendation from './components/ServiceRecommendation';
import Icon from '../../components/AppIcon';
import Footer from '../../components/ui/Footer';
import LazyLoad from '../../components/LazyLoad';
const ServicesShowcase = () => {
  const [activeService, setActiveService] = useState('incubator');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const renderActiveService = () => {
    switch (activeService) {
      case 'incubator':
        return <IncubatorPrograms />;
      case 'legal':
        return <LegalServices />;
      case 'mentorship':
        return <MentorshipProgram />;
      case 'government':
        return <GovernmentSector />;
      default:
        return <IncubatorPrograms />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Hero Section */}
      <LazyLoad>
        <ServiceHero />
      </LazyLoad>
      {/* Service Navigation */}
      <LazyLoad>
        <ServiceNavigation 
          activeService={activeService} 
          onServiceChange={setActiveService} 
        />
      </LazyLoad>
      {/* Active Service Content */}
      <LazyLoad>
        {renderActiveService()}
      </LazyLoad>
      {/* Service Recommendation Engine */}
      <LazyLoad>
        <ServiceRecommendation />
      </LazyLoad>
      {/* Footer CTA */}
      <section className="bg-gradient-to-r from-primary via-secondary to-primary py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join 300+ organisations who have scaled faster and delivered better results with Fstone Technologies. Your success story starts here.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button className="inline-flex items-center justify-center px-8 py-4 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold rounded-lg shadow-cta transition-all hover:scale-105">
                <Icon name="Rocket" size={20} className="mr-2" />
                Start Your Journey
              </button>
              <button className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary font-semibold rounded-lg transition-all">
                <Icon name="Phone" size={20} className="mr-2" />
                Call +91 98765 43210
              </button>
            </div>
            
            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-white">
              <div className="text-center">
                <div className="text-2xl font-bold mb-1">500+</div>
                <div className="text-white/80 text-sm">Startups Supported</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold mb-1">₹250Cr+</div>
                <div className="text-white/80 text-sm">Funding Facilitated</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold mb-1">25+</div>
                <div className="text-white/80 text-sm">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold mb-1">95%</div>
                <div className="text-white/80 text-sm">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ServicesShowcase;