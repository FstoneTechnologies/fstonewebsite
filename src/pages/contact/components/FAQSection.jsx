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
• Talent Advisory Services to build and retain high-performing teams
• Staffing & Recruiting Services for contract and permanent hiring
• Managed Delivery Services for project-based and outsourced execution
• Search Services for executive and leadership hiring
• Workforce Management Services including RPO, MSP, and VMS implementation
We help organisations optimise talent, improve efficiency, and drive business growth.`
        },
        {
          question: "What industries does Fstone Technologies serve?",
          answer: `We work across multiple industries including:
• IT and Software Services
• Engineering and Manufacturing
• Healthcare and Life Sciences
• Sales and Marketing
• Corporate and Professional Services
Our industry-focused approach ensures better talent alignment and results.`
        },
        {
          question: "What makes Fstone Technologies different from other staffing companies?",
          answer: `Our strength lies in:
• Deep domain and industry expertise
• Customised workforce solutions
• Fast and reliable delivery
• Long-term partnership approach
We focus on delivering business value, not just filling positions.`
        }
      ]
    },
    {
      category: "Pricing",
      faqs: [
        {
          question: "How is pricing determined for Fstone services?",
          answer: `Pricing is based on:
• Type of service selected
• Role complexity and skill requirements
• Hiring volume and engagement duration
• Delivery and management model
We offer transparent and competitive pricing aligned with business needs.`
        },
        {
          question: "Do you offer flexible pricing models?",
          answer: `Yes, we offer flexible pricing options:
• Percentage-based fees for permanent hiring
• Fixed or hourly pricing for contract staffing
• Custom pricing for managed delivery and workforce management
Our goal is to maximise value while controlling costs.`
        },
        {
          question: "Are there any hidden charges?",
          answer: `No, we follow complete pricing transparency:
• All costs are discussed upfront
• No hidden or surprise fees
• Clear service scope and billing structure
You always know what you are paying for.`
        }
      ]
    },
    {
      category: "Application & Process",
      faqs: [
        {
          question: "How does the engagement process work with Fstone Technologies?",
          answer: `Our engagement process is simple and efficient:
1. Requirement discussion and needs analysis
2. Solution and hiring model finalisation
3. Talent sourcing and screening
4. Client interviews and selection
5. Onboarding and ongoing support
This ensures speed, quality, and transparency.`
        },
        {
          question: "How does Fstone ensure candidate quality?",
          answer: `We use a structured evaluation process:
• Skill and technical assessments
• Behavioral and cultural fit checks
• Background and reference verification
• Domain expert review
Only thoroughly vetted candidates are presented.`
        },
        {
          question: "Can Fstone handle large-scale or ongoing hiring requirements?",
          answer: `Yes, we specialise in scalable hiring solutions:
• Bulk and ramp-up hiring
• Ongoing recruitment support
• Project-based and long-term engagements
We adapt quickly to changing workforce demands.`
        }
      ]
    },
    {
      category: "Support & Time",
      faqs: [
        {
          question: "How quickly can Fstone deliver suitable candidates?",
          answer: `Our typical delivery timelines are:
• Contract roles: 2–5 business days
• Permanent roles: 1–3 weeks
• Executive search: 3–6 weeks
Timelines may vary based on role complexity.`
        },
        {
          question: "Do you provide support after candidate placement?",
          answer: `Yes, we offer ongoing post-placement support:
• Onboarding assistance
• Performance follow-ups
• Replacement support if required
• Continuous engagement management
Our support ensures long-term success.`
        },
        {
          question: "Can Fstone support remote or multi-location hiring?",
          answer: `Yes, we support hiring across locations:
• Remote and hybrid workforce hiring
• Multi-city and pan-India recruitment
• Centralised workforce management
We help businesses hire talent wherever it is needed.`
        }
      ]
    }
  ];

  const toggleFAQ = (categoryIndex, faqIndex) => {
    const key = `${categoryIndex}-${faqIndex}`;
    setOpenFAQ(openFAQ === key ? null : key);
  };

  return (
    <section className="py-16 bg-background">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground">
            Find answers to common questions about our services, processes, and support.
          </p>
        </div>

        <div className="space-y-8">
          {faqCategories?.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-card rounded-2xl p-6 shadow-brand">
              <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mr-3">
                  <Icon name="HelpCircle" size={18} className="text-primary" />
                </div>
                {category?.category}
              </h3>

              <div className="space-y-4">
                {category?.faqs?.map((faq, faqIndex) => {
                  const isOpen = openFAQ === `${categoryIndex}-${faqIndex}`;
                  return (
                    <div key={faqIndex} className="border border-border rounded-lg overflow-hidden">
                      <button
                        onClick={() => toggleFAQ(categoryIndex, faqIndex)}
                        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-surface transition-brand"
                      >
                        <span className="font-medium text-foreground pr-4">{faq?.question}</span>
                        <Icon
                          name={isOpen ? "ChevronUp" : "ChevronDown"}
                          size={20}
                          className="text-muted-foreground flex-shrink-0"
                        />
                      </button>
                      {isOpen && (
                        <div className="px-6 pb-4 border-t border-border bg-surface/50">
                          <div className="pt-4 text-muted-foreground whitespace-pre-line leading-relaxed">
                            {faq?.answer}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Still Have Questions CTA */}
        <div className="mt-12 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 text-center border border-primary/20">
          <Icon name="MessageCircle" size={48} className="mx-auto mb-4 text-primary" />
          <h3 className="text-2xl font-bold text-foreground mb-3">Still Have Questions?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Can't find the answer you're looking for? Our expert team is here to help.
            Get in touch and we'll respond within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+919876543210"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-brand"
            >
              <Icon name="Phone" size={18} className="mr-2" />
              Call Us Now
            </a>
            <a
              href="mailto:hello@daryte.com"
              className="inline-flex items-center justify-center px-6 py-3 bg-secondary text-secondary-foreground rounded-lg font-medium hover:bg-secondary/90 transition-brand"
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