import React from 'react';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import ServicePathways from './components/ServicePathways';
import EcosystemTicker from './components/EcosystemTicker';
import TrustIndicators from './components/TrustIndicators';
import SuccessCarousel from './components/SuccessCarousel';
import KnowledgeCenter from './components/KnowledgeCenter';
import SocialProof from './components/SocialProof';
import MobileOptimized from './components/MobileOptimized';
import Footer from '../../components/ui/Footer';
import LazyLoad from '../../components/LazyLoad';
const Homepage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Main Content */}
      <main className="pt-16">
        {/* Hero Section with immersive office space background */}
        <LazyLoad>
          <HeroSection />
        </LazyLoad>
        
        {/* Interactive Service Pathways */}
        <LazyLoad>
          <ServicePathways />
        </LazyLoad>
        
        {/* Real-time Ecosystem Updates */}
        <LazyLoad>
          <EcosystemTicker />
        </LazyLoad>
        
        {/* Trust & Credibility Indicators */}
        <LazyLoad>
          <TrustIndicators />
        </LazyLoad>
        
        {/* Success Stories Carousel */}
        <LazyLoad>
          <SuccessCarousel />
        </LazyLoad>
        
        {/* Knowledge Center Preview */}
        {/* <KnowledgeCenter /> */}
        
        {/* Social Proof & Testimonials */}
        <LazyLoad>
          <SocialProof />
        </LazyLoad>
        
        {/* Mobile-Optimized Section */}
        <LazyLoad>
          <MobileOptimized />
        </LazyLoad>
      </main>
      {/* Footer */}
     <Footer />
    </div>
  );
};

export default Homepage;