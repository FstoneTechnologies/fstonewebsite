import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import FstoneCareers from "pages/careers";


const NotFound = lazy(() => import("pages/NotFound"));
const ServicesShowcase = lazy(() => import('./pages/service'));
const ContactConsultationPage = lazy(() => import('./pages/contact'));
const Homepage = lazy(() => import('./pages/homepage'));
const AboutDaRYTE = lazy(() => import('./pages/about'));

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-muted-foreground">Loading...</div>}>
        <RouterRoutes>
          {/* Define your route here */}
          <Route path="/" element={<Homepage />} />
          <Route path="/service" element={<ServicesShowcase />} />
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
