import React from "react";
import { Linkedin } from "lucide-react";

const ContactUs = () => {
  return (
    <section className="bg-[#e5e5e5] py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <p className="text-5xl font-bold mb-4">Contact us</p>
        <p className="text-sm text-gray-700 mb-12">
          (*) Asterisk denotes mandatory fields
        </p>

        <div className="grid md:grid-cols-2 gap-16">
          {/* LEFT FORM */}
          <div>
            <div className="grid grid-cols-2 gap-8">
              {/* First Name */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  First name*
                </label>
                <input
                  type="text"
                  className="w-full bg-transparent border-b border-black focus:outline-none"
                />
              </div>

              {/* Last Name */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Last name*
                </label>
                <input
                  type="text"
                  className="w-full bg-transparent border-b border-black focus:outline-none"
                />
              </div>

              {/* Work Email */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Work email*
                </label>
                <input
                  type="email"
                  className="w-full bg-transparent border-b border-black focus:outline-none"
                />
              </div>

              {/* Company */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Company*
                </label>
                <input
                  type="text"
                  className="w-full bg-transparent border-b border-black focus:outline-none"
                />
              </div>

              {/* Job Title */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Job title*
                </label>
                <input
                  type="text"
                  className="w-full bg-transparent border-b border-black focus:outline-none"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Phone number (optional)
                </label>
                <input
                  type="text"
                  className="w-full bg-transparent border-b border-black focus:outline-none"
                />
              </div>
            </div>

            {/* Checkboxes */}
            <div className="mt-10 space-y-4">
              <label className="flex items-start gap-3 text-sm">
                <input type="checkbox" className="mt-1" />
                <span>
                  I agree to the{" "}
                  <a href="/privacy-policy" className="text-orange-600 underline">
                    privacy notice
                  </a>
                </span>
              </label>

              <label className="flex items-start gap-3 text-sm">
                <input type="checkbox" className="mt-1" />
                <span>
                  Subscribe me to latest thought leadership, blogs and updates.
                </span>
              </label>
            </div>

            {/* ✅ ACTIONS — BELOW FORM */}
            <div className="flex items-center gap-4 mt-12">
              {/* Submit Button */}
              <button
                type="submit"
                className="px-10 py-3 bg-black text-white font-medium hover:bg-gray-800 transition"
              >
                Submit
              </button>

              {/* LinkedIn Icon */}
              <a
                href="https://www.linkedin.com/company/fstone-technologies/posts/?feedView=all&viewAsMember=true"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 border border-black flex items-center justify-center hover:bg-black hover:text-white transition"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* RIGHT MESSAGE BOX */}
          <div>
            <textarea
              rows={12}
              placeholder="How can we help you?"
              className="w-full bg-transparent border border-black p-4 resize-none focus:outline-none"
            />

            <p className="text-sm mt-6">
              You can also email us directly at{" "}
              <a
                href="mailto:info@fstonetechnologies.com"
                className="text-orange-600 font-medium"
              >
                info@fstonetechnologies.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
