import React from 'react';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import FounderStory from './components/FounderStory';
import TeamProfiles from './components/TeamProfiles';
import CompanyCulture from './components/CompanyCulture';
import ImpactMetrics from './components/ImpactMetrics';
import PartnershipNetwork from './components/PartnershipNetwork';
import OfficeSpaceTour from './components/OfficeSpaceTour';
import ClientTestimonials from './components/ClientTestimonials';
import Icon from '../../components/AppIcon';
import Footer from '../../components/ui/Footer';
import LazyLoad from '../../components/LazyLoad';
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
        <FounderStory />
      </LazyLoad>
      {/* Team Profiles */}
      <LazyLoad>
        <TeamProfiles />
      </LazyLoad>
      {/* Company Culture */}
      <LazyLoad>
        <CompanyCulture />
      </LazyLoad>
      {/* Impact Metrics */}
      <LazyLoad>
        <ImpactMetrics />
      </LazyLoad>
      {/* Partnership Network */}
      <LazyLoad>
        <PartnershipNetwork />
      </LazyLoad>
      {/* Office Space Tour */}
      <LazyLoad>
        <OfficeSpaceTour />
      </LazyLoad>
      {/* Client Testimonials */}
      <LazyLoad>
        <ClientTestimonials />
      </LazyLoad>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AboutDaRYTE;