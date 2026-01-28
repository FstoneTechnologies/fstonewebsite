import React, { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';

import ServiceNavigation from './ServiceNavigation';
import ClientServices from './ClientServices';
import TechnologyConsulting from './TechnologyConsulting';
import BusinessConsulting from './BusinessConsulting';
import WorkforceSolutions from './WorkforceSolutions';
import OutsourcingServices from './OutsourcingServices';

const ServicesPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const activeFromURL = searchParams.get('active');

  const [activeService, setActiveService] = useState(
    activeFromURL || 'client-services'
  );

  // ✅ URL → STATE (on page load / refresh)
  useEffect(() => {
    if (activeFromURL && activeFromURL !== activeService) {
      setActiveService(activeFromURL);

      setTimeout(() => {
        window.scrollTo({
          top: window.innerHeight,
          behavior: 'smooth',
        });
      }, 200);
    }
  }, [activeFromURL]);

  // ✅ STATE → URL (when clicking tabs)
  const handleServiceChange = (serviceId) => {
    setActiveService(serviceId);

    // 🔥 update URL without reload
    navigate(`/service?active=${serviceId}`, { replace: false });

    setTimeout(() => {
      window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth',
      });
    }, 150);
  };

  return (
    <>
      <ServiceNavigation
        activeService={activeService}
        onServiceChange={handleServiceChange}
      />

      {activeService === 'client-services' && <ClientServices />}
      {activeService === 'technology-consulting' && <TechnologyConsulting />}
      {activeService === 'business-consulting' && <BusinessConsulting />}
      {activeService === 'workforce-solutions' && <WorkforceSolutions />}
      {activeService === 'outsourcing' && <OutsourcingServices />}
    </>
  );
};

export default ServicesPage;
