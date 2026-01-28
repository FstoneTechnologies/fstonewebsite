import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqCategories = [
    {
      category: "General",
      faqs: [
        {
          question: "What services does Fstone Technologies offer?",
          answer: `We provide end-to-end workforce solutions to help businesses grow faster:
• Talent Advisory Services
• Staffing & Recruiting Services
• Managed Delivery Services
• Executive Search Services
• Workforce Management (RPO, MSP, VMS)`
        },
        {
          question: "What industries does Fstone Technologies serve?",
          answer: `We serve multiple industries:
• IT & Software Services
• Engineering & Manufacturing
• Healthcare & Life Sciences
• Sales & Marketing
• Corporate Services`
        },
        {
          question: "What makes Fstone Technologies different?",
          answer: `Our differentiators:
• Deep industry expertise
• Custom workforce solutions
• Fast & reliable delivery
• Long-term partnership mindset`
        }
      ]
    },
    {
      category: "Support & Timelines",
      faqs: [
        {
          question: "How quickly can you deliver candidates?",
          answer: `Typical timelines:
• Contract roles: 2–5 days
• Permanent roles: 1–3 weeks
• Executive search: 3–6 weeks`
        },
        {
          question: "Do you offer post-placement support?",
          answer: `Yes, we provide:
• Onboarding support
• Performance follow-ups
• Replacement assistance
• Ongoing engagement management`
        },
        {
          question: "Do you support remote hiring?",
          answer: `Absolutely:
• Remote & hybrid hiring
• Multi-city & pan-India recruitment
• Centralized workforce management`
        }
      ]
    }
  ];

  const toggleFAQ = (key) => {
    setOpenFAQ(openFAQ === key ? null : key);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Quick answers to common questions about our services and process.
          </p>
        </div>

        {/* FAQ Categories */}
        <div className="space-y-10">
          {faqCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-white border border-gray-200 rounded-2xl shadow-md p-6"
            >
              {/* Category Title */}
              <h3 className="text-xl font-semibold text-blue-900 mb-6 flex items-center">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                  <Icon name="HelpCircle" size={18} className="text-[#1F74B5]" />
                </div>
                {category.category}
              </h3>

              {/* Questions */}
              <div className="space-y-4">
                {category.faqs.map((faq, faqIndex) => {
                  const key = `${categoryIndex}-${faqIndex}`;
                  const isOpen = openFAQ === key;

                  return (
                    <div
                      key={faqIndex}
                      className="border border-gray-200 rounded-lg overflow-hidden"
                    >
                      {/* Question */}
                      <button
                        onClick={() => toggleFAQ(key)}
                        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-blue-50 transition"
                      >
                        <span className="font-medium text-blue-900 pr-4">
                          {faq.question}
                        </span>
                        <Icon
                          name="ChevronDown"
                          size={20}
                          className={`text-gray-500 transform transition-transform duration-300 ${
                            isOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </button>

                      {/* Answer (Animated) */}
                      <div
                        className={`transition-all duration-300 ease-in-out overflow-hidden ${
                          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                        }`}
                      >
                        <div className="px-6 pb-4 pt-2 bg-blue-50 text-gray-700 whitespace-pre-line leading-relaxed">
                          {faq.answer}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 bg-blue-50 border border-blue-200 rounded-2xl p-8 text-center">
          <Icon name="MessageCircle" size={48} className="mx-auto mb-4 text-[#1F74B5]" />
          <h3 className="text-2xl font-bold text-blue-900 mb-3">
            Still Have Questions?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Our team is happy to help. Reach out and we’ll respond within 24 hours.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+919876543210"
              className="inline-flex items-center justify-center px-6 py-3 bg-[#1F74B5] text-white rounded-lg font-medium hover:bg-blue-700 transition"
            >
              <Icon name="Phone" size={18} className="mr-2" />
              Call Us Now
            </a>
            <a
              href="mailto:hello@fstone.com"
              className="inline-flex items-center justify-center px-6 py-3 bg-white border border-blue-300 text-[#1F74B5] rounded-lg font-medium hover:bg-blue-100 transition"
            >
              <Icon name="Mail" size={18} className="mr-2" />
              Send Email
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FAQSection;
