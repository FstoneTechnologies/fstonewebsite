
import React, { useState, useEffect } from 'react';
import { Rocket, Calendar, Shield, Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedBackground from '../../../components/AnimatedBackground';
import LazyLoad from '../../../components/LazyLoad';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-teal-600 to-blue-800 text-white">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-teal-600/60 to-blue-800/90"></div>
      
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full bg-gradient-to-br from-blue-500 via-teal-400 to-blue-600"></div>
      </div>

      {/* Animated Background Elements */}
      <AnimatedBackground 
        type="floating"
        count={8}
        opacity={0.15}
        speed={1.8}
        size="medium"
        colors={["blue", "teal", "orange", "purple", "pink", "yellow", "green", "indigo"]}
      />

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <LazyLoad>
          <div className={`transition-all duration-1000 ease-out ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}>
            
            {/* Trust Badge */}
            <LazyLoad delay={200}>
              <div className="inline-flex items-center space-x-2 bg-orange-500/10 border border-orange-400/30 rounded-full px-6 py-2 mb-8 backdrop-blur-sm">
                <Shield size={16} className="text-orange-400" />
                <span className="text-sm font-medium text-orange-300">25+ Years of Proven Expertise</span>
              </div>
            </LazyLoad>

            {/* Main Headline */}
            <LazyLoad delay={400}>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                <span className="text-white">Where Trust is</span>
                <br />
                <span className="bg-gradient-to-r from-orange-400 via-yellow-300 to-orange-500 bg-clip-text text-transparent">
                  Non-Negotiable
                </span>
              </h1>
            </LazyLoad>

            {/* Tagline */}
            <LazyLoad delay={600}>
              <div className="text-xl md:text-2xl text-gray-200 mb-8 max-w-4xl mx-auto">
                <span className="font-medium text-teal-300">The Right Vision</span>
                <span className="mx-2 text-orange-400">•</span>
                <span className="font-medium text-teal-300">The Right Culture</span>
                <span className="mx-2 text-orange-400">•</span>
                <span className="font-medium text-teal-300">The Right Intent</span>
              </div>
            </LazyLoad>

            {/* Description */}
            <LazyLoad delay={800}>
              <p className="text-lg text-gray-100 mb-12 max-w-3xl mx-auto leading-relaxed">
                We partner closely with clients to drive real transformation backed by deep expertise and proven results. Let’s connect and shape your future together.
              </p>
            </LazyLoad>

            {/* CTA Buttons */}
            <LazyLoad delay={1000}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                <Link to="/contact">
                  <button className="group inline-flex items-center space-x-2 bg-[#1F74B5] hover:bg-orange-400 text-white font-semibold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                    <Rocket size={20} className="group-hover:animate-pulse" />
                    <span>Start Your Journey</span>
                  </button>
                </Link>

                <Link to="/contact">
                  <button className="group inline-flex items-center space-x-2 border-2 border-teal-400 text-teal-300 hover:bg-teal-400 hover:text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300">
                    <Calendar size={20} />
                    <span>Schedule Consultation</span>
                  </button>
                </Link>
              </div>
            </LazyLoad>

            {/* Office Space Highlight */}
            <LazyLoad delay={1200}>
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 max-w-2xl mx-auto shadow-2xl hover:bg-white/15 transition-all duration-500">
                <div className="flex items-center justify-center space-x-4 mb-4">
                  <Building2 size={24} className="text-teal-400" />
                  <span className="text-lg font-semibold text-white">6000 Sq Ft Premium Office Space</span>
                </div>
                <p className="text-gray-200 mb-4">
                  State-of-the-art incubation facility designed for startup success
                </p>
              </div>
            </LazyLoad>
          </div>
        </LazyLoad>
      </div>
    </section>
  );
};

export default HeroSection;