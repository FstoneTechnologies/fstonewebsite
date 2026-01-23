import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary via-secondary to-primary/90 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-32 right-16 w-24 h-24 border border-white/20 rounded-full"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 border border-white/20 rounded-full"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                  <Icon name="Users" size={24} className="text-white" />
                </div>
                <span className="text-accent font-medium text-lg">About DaRYTE</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Where Trust is{' '}
                <span className="text-accent font-accent italic">Non-Negotiable</span>
              </h1>
              
              <p className="text-xl text-white/90 leading-relaxed max-w-2xl">
                Built on 25+ years of unwavering expertise in workforce, technology, and business operations, Fstone Technologies stands as a trusted partner helping organisations scale, transform, and succeed.
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">25+</div>
                <div className="text-sm text-white/80">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">200+</div>
                <div className="text-sm text-white/80">Startups Guided</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">₹500Cr+</div>
                <div className="text-sm text-white/80">Funding Facilitated</div>
              </div>
            </div>

            {/* Mission Statement */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Icon name="Target" size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Our Mission</h3>
                  <p className="text-white/90 leading-relaxed">
                    To empower organisations with the right talent, strategy, and delivery capabilities — enabling sustainable growth, operational excellence, and long-term success through trust and integrity.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-brand-lg">
              <Image
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=700&fit=crop"
                alt="DaRYTE office space showcasing modern business environment"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-6 shadow-brand-lg max-w-xs">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <Icon name="Award" size={16} className="text-white" />
                </div>
                <span className="font-semibold text-primary">Excellence Award</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Recognized for outstanding contribution to startup ecosystem development in India
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;