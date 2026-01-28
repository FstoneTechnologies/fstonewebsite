import React from 'react';
import Header from '../../components/ui/Header';
import Footer from '../../components/ui/Footer';
import LazyLoad from '../../components/LazyLoad';
import CareerHeroSection from './components/CareerHeroSection ';
import CareerBenefitsSection from './components/CareerBenefitsSection';
import JoinOurTeam from './components/jobOpenings';


const FstoneCareers = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <LazyLoad>
        <CareerHeroSection/>
      </LazyLoad>
     {/* Benefits Section */}
      <LazyLoad>
        <CareerBenefitsSection/>
      </LazyLoad>
      <LazyLoad>
        <JoinOurTeam/>
      </LazyLoad>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default FstoneCareers;
