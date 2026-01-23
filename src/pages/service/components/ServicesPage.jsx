import React, { useRef, useState } from 'react';
import ServiceNavigation from './ServiceNavigation';
import ClientServices from './ClientServices';
import TechnologyConsulting from './TechnologyConsulting';
import BusinessConsulting from './BusinessConsulting';
import WorkforceSolutions from './WorkforceSolutions';
import OutsourcingServices from './OutsourcingServices';
const ServicesPage = () => {
  const [activeService, setActiveService] = useState('client-services');

  const handleServiceChange = (serviceId) => {
    setActiveService(serviceId);

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
