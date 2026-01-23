import React, { useState, useEffect } from 'react';
import Header from '../../components/ui/Header';
import ServiceHero from './components/ServiceHero';
import ServiceNavigation from './components/ServiceNavigation';
import ClientServices from './components/ClientServices';
import ITStaffing from './components/ITStaffing';
import OutsourcingServices from './components/OutsourcingServices';
import Icon from '../../components/AppIcon';
import Footer from '../../components/ui/Footer';
import LazyLoad from '../../components/LazyLoad';
import BusinessConsulting from './components/BusinessConsulting';
import WorkforceSolutions from './components/WorkforceSolutions';
import SuccessStories from './components/SuccessStories ';
import TechnologyConsulting from './components/TechnologyConsulting ';

const ServicesShowcase = () => {
  // 🔥 IMPORTANT: default must match ServiceNavigation IDs
  const [activeService, setActiveService] = useState('client-services');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const renderActiveService = () => {
    switch (activeService) {
      case 'client-services':
        return <ClientServices />;

      case 'it-staff':
        return <ITStaffing />;

      case 'technology-consulting':
        return <TechnologyConsulting/>;

      case 'business-consulting':
        return <BusinessConsulting />;

      case 'workforce-solutions':
        return <WorkforceSolutions />;

      case 'outsourcing':
        return <OutsourcingServices />;

      default:
        return <ClientServices />;
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

  {renderActiveService()}


      {/* Service Recommendation */}
      <SuccessStories />

      {/* Footer CTA */}
      {/* <section
  className="w-full h-[420px] md:h-[520px] bg-cover bg-center"
  style={{
    backgroundImage: "url('/services-cta.jpg')" // image from public folder
  }}
>
</section> */}


      <Footer />
    </div>
  );
};

export default ServicesShowcase;
