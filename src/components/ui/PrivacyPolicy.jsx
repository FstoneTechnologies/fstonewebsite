import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const PrivacyPolicy = () => {
  return (
    <>
    <Header/>
    <section className="bg-white py-20">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>

        <p className="text-sm text-gray-600 mb-10">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <div className="space-y-8 text-gray-800 text-sm leading-relaxed">
          {/* Intro */}
          <p>
            This Privacy Policy explains how <strong>Fstone</strong> we collects, uses, and protects your personal
            information when you visit or interact with our website.
          </p>

          {/* Information we collect */}
          <div>
            <h2 className="text-xl font-semibold mb-2">
              Information we collect
            </h2>
            <p>We may collect the following types of information:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Personal details such as name, email address, phone number</li>
              <li>Company and job-related information</li>
              <li>Information submitted through contact forms</li>
              <li>Technical data such as IP address, browser type, and device information</li>
            </ul>
          </div>

          {/* How we use information */}
          <div>
            <h2 className="text-xl font-semibold mb-2">
              How we use your information
            </h2>
            <p>Your information may be used to:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Respond to inquiries and contact requests</li>
              <li>Provide and improve our services</li>
              <li>Communicate updates, insights, and business information</li>
              <li>Analyze website usage and performance</li>
              <li>Comply with legal and regulatory obligations</li>
            </ul>
          </div>

          {/* Cookies */}
          <div>
            <h2 className="text-xl font-semibold mb-2">
              Cookies and tracking technologies
            </h2>
            <p>
              We use cookies and similar tracking technologies to enhance user
              experience and analyze website traffic. You can control cookie
              usage through our cookie consent banner or browser settings.
            </p>
          </div>

          {/* Data sharing */}
          <div>
            <h2 className="text-xl font-semibold mb-2">
              Sharing of information
            </h2>
            <p>
              We do not sell or rent your personal information. We may share
              your data with trusted third-party service providers who assist
              us in operating our website and delivering services, subject to
              confidentiality obligations.
            </p>
          </div>

          {/* Data security */}
          <div>
            <h2 className="text-xl font-semibold mb-2">
              Data security
            </h2>
            <p>
              We implement appropriate technical and organizational measures to
              protect your personal data from unauthorized access, disclosure,
              or misuse.
            </p>
          </div>

          {/* Data retention */}
          <div>
            <h2 className="text-xl font-semibold mb-2">
              Data retention
            </h2>
            <p>
              We retain personal information only for as long as necessary to
              fulfill the purposes outlined in this Privacy Policy or as
              required by law.
            </p>
          </div>

          {/* Your rights */}
          <div>
            <h2 className="text-xl font-semibold mb-2">
              Your rights
            </h2>
            <p>
              Depending on your location, you may have rights regarding your
              personal data, including the right to access, correct, or delete
              your information, and to withdraw consent at any time.
            </p>
          </div>

          {/* Third-party links */}
          <div>
            <h2 className="text-xl font-semibold mb-2">
              Third-party links
            </h2>
            <p>
              Our website may contain links to external websites. We are not
              responsible for the privacy practices or content of those
              third-party sites.
            </p>
          </div>

          {/* Changes */}
          <div>
            <h2 className="text-xl font-semibold mb-2">
              Changes to this Privacy Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. Any updates
              will be posted on this page with the revised date.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-xl font-semibold mb-2">
              Contact us
            </h2>
            <p>
              If you have any questions or concerns about this Privacy Policy or
              how we handle your data, please contact us at{" "}
              <a
                href="mailto:info@fstonetechnologies.com"
                className="text-orange-600 underline"
              >
                info@fstonetechnologies.com
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
    <Footer/>
    </>
  );
};

export default PrivacyPolicy;
