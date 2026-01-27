import React from 'react';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import CompanyCulture from './components/CompanyCulture';
import Footer from '../../components/ui/Footer';
import LazyLoad from '../../components/LazyLoad';
import AboutOverview from './components/AboutOverview';
import ServiceLines from './components/ServiceLines';
import LeadershipSection from './components/LeadershipSection';
const AboutDaRYTE = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Hero Section */}
      <LazyLoad>
        <HeroSection />
      </LazyLoad>
      {/* Founder Story */}
      <LazyLoad>
        <AboutOverview />
      </LazyLoad>
      {/* Service Lines */}
      <LazyLoad>
        <ServiceLines />
      </LazyLoad>
      {/* Company Culture */}
      <LazyLoad>
        <CompanyCulture />
      </LazyLoad>
      {/* Impact Metrics */}
      <LazyLoad>
        <LeadershipSection/>
      </LazyLoad>
      {/* Partnership Network */}
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AboutDaRYTE;