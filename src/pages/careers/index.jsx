import React from 'react';
import Header from '../../components/ui/Header';
import Footer from '../../components/ui/Footer';
import LazyLoad from '../../components/LazyLoad';
import CareerHeroSection from './components/CareerHeroSection ';


const FstoneCareers = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <LazyLoad>
        <CareerHeroSection/>
      </LazyLoad>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default FstoneCareers;
