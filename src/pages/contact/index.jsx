import React, { useState, useEffect } from 'react';
import Header from '../../components/ui/Header';
import ContactHero from './components/ContactHero';
import ConsultationBooking from './components/ConsultationBooking';
import ContactMethods from './components/ContactMethods';
import OfficeLocation from './components/OfficeLocation';
import FAQSection from './components/FAQSection';
import LiveChatWidget from './components/LiveChatWidget';
import Icon from '../../components/AppIcon';
import Footer from '../../components/ui/Footer';
import LazyLoad from '../../components/LazyLoad';

const ContactConsultationPage = () => {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);

    // Set page title
    document.title = 'Contact & Consultation - DaRYTE Business Incubator';
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBookConsultation = () => {
    scrollToSection('consultation-booking');
  };

  const handleQuickInquiry = () => {
    scrollToSection('contact-methods');
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Hero Section */}
      <section id="hero">
        <LazyLoad>
          <ContactHero 
            onBookConsultation={handleBookConsultation}
            onQuickInquiry={handleQuickInquiry}
          />
        </LazyLoad>
      </section>
      {/* Consultation Booking Section */}
      <section id="consultation-booking">
        <LazyLoad>
          <ConsultationBooking />
        </LazyLoad>
      </section>
      {/* Contact Methods Section */}
      <section id="contact-methods">
        <LazyLoad>
          <ContactMethods />
        </LazyLoad>
      </section>
      {/* Office Location Section */}
      <section id="office-location">
        <LazyLoad>
          <OfficeLocation />
        </LazyLoad>
      </section>
      {/* FAQ Section */}
      <section id="faq">
        <LazyLoad>
          <FAQSection />
        </LazyLoad>
      </section>
      {/* Footer */}
      <Footer />
      {/* Live Chat Widget */}
      <LiveChatWidget />
    </div>
  );
};

export default ContactConsultationPage;