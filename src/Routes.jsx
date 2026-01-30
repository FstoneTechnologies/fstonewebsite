import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import FstoneCareers from "pages/careers";
import TalentAdvisoryServices from "pages/service/components/TalentAdvisoryServices";
import StaffingRecruitingServices from "pages/service/components/StaffingRecruitingServices";
import ManagedDeliveryServices from "pages/service/components/ManagedDeliveryServices";
import SearchWorkforceManagement from "pages/service/components/SearchWorkforceManagement";
import WebDevelopmentStaffing from "pages/service/components/WebDevelopmentStaffing";
import MainframeProgrammingStaffing from "pages/service/components/MainframeProgrammingStaffing";
import BusinessAnalysisStaffing from "pages/service/components/BusinessAnalysisStaffing";
import SoftwareEngineeringStaffing from "pages/service/components/SoftwareEngineeringStaffing";
import DatabaseDevelopmentStaffing from "pages/service/components/DatabaseDevelopmentStaffing";
import NetworkEngineeringStaffing from "pages/service/components/NetworkEngineeringStaffing";
import SystemAnalysisStaffing from "pages/service/components/SystemAnalysisStaffing";
import HelpDeskSupportStaffing from "pages/service/components/HelpDeskSupportStaffing";
import DigitalTransformationConsulting from "pages/service/components/DigitalTransformationConsulting";
import CloudInfrastructureConsulting from "pages/service/components/CloudInfrastructureConsulting";
import ApplicationModernization from "pages/service/components/ApplicationModernization";
import DataAnalyticsAI from "pages/service/components/DataAnalyticsAI";
import BusinessStrategyAdvisory from "pages/service/components/BusinessStrategyAdvisory";
import ProcessOptimization from "pages/service/components/ProcessOptimization";
import DigitalBusinessTransformation from "pages/service/components/DigitalBusinessTransformation";
import ChangeRiskManagement from "pages/service/components/ChangeRiskManagement";
import WorkforcePlanning from "pages/service/components/WorkforcePlanning";
import RpoMspServices from "pages/service/components/RpoMspServices";
import WorkforceAnalytics from "pages/service/components/WorkforceAnalytics";
import ComplianceGovernance from "pages/service/components/ComplianceGovernance";
import ITOutsourcing from "pages/service/components/ITOutsourcing";
import EngineeringDevelopmentServices from "pages/service/components/EngineeringDevelopmentServices";
import BusinessProcessOutsourcing from "pages/service/components/BusinessProcessOutsourcing";
import GlobalSupport247 from "pages/service/components/GlobalSupport247";
import CookieConsent from "components/ui/CookieConsent";
import CookiePolicy from "components/ui/CookiePolicy";
import PrivacyPolicy from "components/ui/PrivacyPolicy";


const NotFound = lazy(() => import("pages/NotFound"));
const ServicesShowcase = lazy(() => import('./pages/service'));
const ContactConsultationPage = lazy(() => import('./pages/contact'));
const Homepage = lazy(() => import('./pages/homepage'));
const AboutDaRYTE = lazy(() => import('./pages/about'));

const Routes = () => {
  return (
    
    <BrowserRouter>
     <CookieConsent/>
      <ErrorBoundary>
      <ScrollToTop />
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-muted-foreground">Loading...</div>}>
        <RouterRoutes>
          {/* Define your route here */}
          <Route path="/" element={<Homepage />} />
          <Route path="/service" element={<ServicesShowcase />} />
          <Route path="/services/talent-advisory" element={<TalentAdvisoryServices />} />
          <Route path="/services/staffing-recruiting" element={<StaffingRecruitingServices/>} />
          <Route path="/services/managed-delivery" element={<ManagedDeliveryServices/>} />
          <Route path="/services/search-workforce" element={<SearchWorkforceManagement/>} />

         <Route path="/services/it-staff/web-development" element={<WebDevelopmentStaffing />} />
        <Route path="/services/it-staff/mainframe" element={<MainframeProgrammingStaffing/>} />
        <Route path="/services/it-staff/business-analysis" element={<BusinessAnalysisStaffing/>} />
        <Route path="/services/it-staff/software-engineering" element={<SoftwareEngineeringStaffing/>} />
        <Route path="/services/it-staff/database-development" element={<DatabaseDevelopmentStaffing/>} />
        <Route path="/services/it-staff/network-engineering" element={<NetworkEngineeringStaffing/>} />
        <Route path="/services/it-staff/system-analysis" element={<SystemAnalysisStaffing/>} />
        <Route path="/services/it-staff/help-desk" element={<HelpDeskSupportStaffing/>} />

         <Route path="/services/technology-consulting/digital-transformation" element={<DigitalTransformationConsulting/>} />
         <Route path="/services/technology-consulting/cloud-infrastructure" element={<CloudInfrastructureConsulting/>} />
         <Route path="/services/technology-consulting/application-modernization" element={<ApplicationModernization/>} />
         <Route path="/services/technology-consulting/data-analytics-ai" element={<DataAnalyticsAI/>} />

         <Route path="/services/business-consulting/business-strategy-advisory" element={<BusinessStrategyAdvisory/>} />
         <Route path="/services/business-consulting/process-optimization" element={<ProcessOptimization/>} />
         <Route path="/services/business-consulting/digital-business-transformation" element={<DigitalBusinessTransformation/>} />
         <Route path="/services/business-consulting/change-risk-management" element={<ChangeRiskManagement/>} />

         <Route path="/services/workforce-solutions/workforce-planning" element={<WorkforcePlanning/>} />
         <Route path="/services/workforce-solutions/rpo-msp-services" element={<RpoMspServices/>} />
         <Route path="/services/workforce-solutions/workforce-analytics" element={<WorkforceAnalytics/>} />
         <Route path="/services/workforce-solutions/compliance-governance" element={<ComplianceGovernance/>} />

         <Route path="/services/outsourcing/it-outsourcing" element={<ITOutsourcing/>} />
         <Route path="/services/outsourcing/engineering-development" element={<EngineeringDevelopmentServices/>} />
         <Route path="/services/outsourcing/business-process-outsourcing" element={<BusinessProcessOutsourcing/>} />
         <Route path="/services/outsourcing/global-support-247" element={<GlobalSupport247/>} />
         
         <Route path="/cookie-policy" element={<CookiePolicy/>} />
         <Route path="/privacy-policy" element={<PrivacyPolicy/>} />

          <Route path="/contact" element={<ContactConsultationPage />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/about" element={<AboutDaRYTE />} />
          <Route path="/careers" element={<FstoneCareers/>} />
          <Route path="*" element={<NotFound />} />
        </RouterRoutes>
      </Suspense>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;
