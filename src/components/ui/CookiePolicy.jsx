import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const CookiePolicy = () => {
  return (
    <>
    <Header/>
    <section className="bg-white py-20">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-6">Cookie Policy</h1>

        <p className="text-sm text-gray-600 mb-10">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <div className="space-y-8 text-gray-800 text-sm leading-relaxed">
          {/* Intro */}
          <p>
            This Cookie Policy explains what cookies are and how we use them. You should read this policy to understand what cookies are, how we use them, the types of cookies we use i.e., the information we collect using cookies and how that information is used and how to control the cookie preferences. For further information on how we use, store, and keep your personal data secure.
          </p>

          {/* What are cookies */}
          <div>
            <h2 className="text-xl font-semibold mb-2">
              What are cookies?
            </h2>
            <p>
              Cookies are small text files that are used to store small pieces of information. The cookies are stored on your device when the website is loaded on your browser. These cookies help us make the website function properly, make the website more secure, provide better user experience, and understand how the website performs and to analyse what works and where it needs improvement.
            </p>
          </div>

          {/* How we use cookies */}
          <div>
            <h2 className="text-xl font-semibold mb-2">
              How we use cookies
            </h2>
            <p>
              We use cookies for the following purposes:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>To ensure the website functions correctly</li>
              <li>To analyze website traffic and usage</li>
              <li>To remember your preferences</li>
              <li>To improve our services and content</li>
            </ul>
          </div>

          {/* Types of cookies */}
          <div>
            <h2 className="text-xl font-semibold mb-2">
              Types of cookies we use
            </h2>

            <div className="space-y-4">
              <div>
                <h3 className="font-semibold">Functional Cookies</h3>
                <p>
                  These cookies are necessary for the website to operate and
                  cannot be switched off. They enable core functionality such
                  as security, network management, and accessibility.
                </p>
              </div>

              <div>
                <h3 className="font-semibold">Statistics Cookies</h3>
                <p>
                  These cookies help us understand how visitors interact with
                  our website by collecting and reporting information
                  anonymously.
                </p>
              </div>

              <div>
                <h3 className="font-semibold">Marketing Cookies</h3>
                <p>
                  These cookies are used to track visitors across websites in
                  order to display relevant advertisements and measure the
                  effectiveness of marketing campaigns.
                </p>
              </div>
            </div>
          </div>

          {/* Managing cookies */}
          <div>
            <h2 className="text-xl font-semibold mb-2">
              Managing your cookie preferences
            </h2>
            <p>
              You can manage your cookie preferences at any time by adjusting
              your browser settings or by using the cookie consent options
              available on our website.
            </p>
          </div>

          {/* Third-party cookies */}
          <div>
            <h2 className="text-xl font-semibold mb-2">
              Third-party cookies
            </h2>
            <p>
              In some cases, we may use third-party services such as analytics
              providers. These third parties may place cookies on your device
              in accordance with their own privacy policies.
            </p>
          </div>

          {/* Changes */}
          <div>
            <h2 className="text-xl font-semibold mb-2">
              Changes to this Cookie Policy
            </h2>
            <p>
              We may update this Cookie Policy from time to time to reflect
              changes in technology, legislation, or our business practices.
              Any changes will be posted on this page.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-xl font-semibold mb-2">
              Contact us
            </h2>
            <p>
              If you have any questions about this Cookie Policy, please
              contact us at{" "}
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

export default CookiePolicy;
