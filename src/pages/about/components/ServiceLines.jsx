
import React from "react";
import Icon from "../../../components/AppIcon";

const services = [
  // IT Staff Augmentation
  { title: "Web Development", icon: "Globe" },
  { title: "Mainframe Programming", icon: "Server" },
  { title: "Business Analysis", icon: "BarChart" },
  { title: "Software Development & Engineering", icon: "Code" },

  // Technology Consulting
  { title: "Digital Transformation", icon: "RefreshCcw" },
  { title: "Cloud & Infrastructure Consulting", icon: "Cloud" },
  { title: "Application Modernization", icon: "Layers" },
  { title: "Data, Analytics & AI", icon: "Database" },

  // Business Consulting
  { title: "Business Strategy & Advisory", icon: "Target" },
  { title: "Process Optimization", icon: "Settings" },
  { title: "Digital Business Transformation", icon: "TrendingUp" },
  { title: "Change & Risk Management", icon: "ShieldCheck" },

  // Workforce Solutions
  { title: "Workforce Planning", icon: "Users" },
  { title: "RPO & MSP Services", icon: "Briefcase" },
  { title: "Workforce Analytics", icon: "PieChart" },
  { title: "Compliance & Governance", icon: "FileCheck" },

  // Outsourcing Services
  { title: "IT Outsourcing", icon: "Cpu" },
  { title: "Engineering & Development Services", icon: "Wrench" },
  { title: "Business Process Outsourcing", icon: "Repeat" },
  { title: "24×7 Global Support", icon: "Clock" },
];

const ServiceLines = () => {
  return (
    <section className="py-24 bg-[#f6f5f3]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900">
            Service Lines
          </h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            Comprehensive technology, business, and workforce solutions designed
            to help organizations scale, transform, and succeed.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="
                bg-white rounded-xl p-10
                border border-slate-200
                text-center
                transition-all duration-300
                hover:shadow-xl hover:-translate-y-1
                cursor-pointer
              "
            >
              {/* ICON (BIG, CLEAN) */}
              <div className="mb-6 flex justify-center">
                <Icon
                  name={service.icon}
                  size={44}
                  className="text-accent"
                />
              </div>

              {/* TITLE */}
              <h3 className="text-lg font-semibold text-slate-900 leading-snug">
                {service.title}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServiceLines;
