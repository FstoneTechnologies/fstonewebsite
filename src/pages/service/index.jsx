import React, { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';

import Header from '../../components/ui/Header';
import ServiceHero from './components/ServiceHero';
import ServiceNavigation from './components/ServiceNavigation';

import ClientServices from './components/ClientServices';
import ITStaffing from './components/ITStaffing';

import BusinessConsulting from './components/BusinessConsulting';
import WorkforceSolutions from './components/WorkforceSolutions';
import OutsourcingServices from './components/OutsourcingServices';
import Footer from '../../components/ui/Footer';
import LazyLoad from '../../components/LazyLoad';
import TechnologyConsulting from './components/TechnologyConsulting ';
import SuccessStories from './components/SuccessStories ';

const ServicesShowcase = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const location = useLocation();


  // 🔥 two refs
  const serviceNavRef = useRef(null);       // cards section
  const serviceDetailsRef = useRef(null);   // details section (TARGET)

  // 🔥 read active service from URL
  const activeFromURL = searchParams.get('active');

  // 🔥 state synced with URL
  const [activeService, setActiveService] = useState(
    activeFromURL || 'client-services'
  );

  // 🔥 helper: scroll to SERVICE DETAILS (not cards)
  const scrollToServiceDetails = () => {
    if (!serviceDetailsRef.current) return;

    const yOffset = -120; // adjust for sticky header
    const y =
      serviceDetailsRef.current.getBoundingClientRect().top +
      window.pageYOffset +
      yOffset;

    window.scrollTo({
      top: y,
      behavior: 'smooth',
    });
  };

  // Scroll to top on first load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // 🔥 URL → STATE + SCROLL (Home → Service / refresh)
  useEffect(() => {
    if (activeFromURL && activeFromURL !== activeService) {
      setActiveService(activeFromURL);

      setTimeout(() => {
        scrollToServiceDetails();
      }, 300);
    }
  }, [activeFromURL]);

useEffect(() => {
  if (location.hash === '#services') {
    setTimeout(() => {
      serviceNavRef.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }, 300);
  }
}, [location]);


  // 🔥 STATE → URL + SCROLL (clicking service cards)
  const handleServiceChange = (serviceId) => {
    setActiveService(serviceId);
    navigate(`/service?active=${serviceId}`);

    setTimeout(() => {
      scrollToServiceDetails();
    }, 200);
  };

  // Render service content
  const renderActiveService = () => {
    switch (activeService) {
      case 'client-services':
        return <ClientServices />;

      case 'it-staff':
        return <ITStaffing />;

      case 'technology-consulting':
        return <TechnologyConsulting />;

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

      {/* Service Navigation (CARDS) */}
      <div ref={serviceNavRef}>
        <LazyLoad>
          <ServiceNavigation
            activeService={activeService}
            onServiceChange={handleServiceChange}
          />
        </LazyLoad>
      </div>

      {/* 🔥 SERVICE DETAILS (SCROLL TARGET) */}
      <div ref={serviceDetailsRef}>
        {renderActiveService()}
      </div>

      {/* Success Stories */}
      <SuccessStories />

      <Footer />
    </div>
  );
};

export default ServicesShowcase;