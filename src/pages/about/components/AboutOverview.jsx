import React, { useState } from "react";
import Image from "../../../components/AppImage";

const sections = [
  {
    id: "purpose",
    title: "Our purpose",
    content:
      "Founded in 2011, Fstone Technologies is driven by a purpose to empower businesses with reliable, secure, and future-ready technology solutions that create long-term value.",
  },
  {
    id: "started",
    title: "How we started",
    content:
      "We were formed to deliver innovative workforce and technology solutions across the industry lifecycle. Our mission remains focused on leveraging deep domain knowledge to guide clients toward sustainable growth.",
  },
  {
    id: "industry",
    title: "Supporting the industry",
    content:
      "We actively support enterprises and high-growth organizations by combining strategic consulting, modern technology, and skilled talent to solve complex business challenges.",
  },
  {
    id: "values",
    title: "Our core values",
    content:
      "Integrity, transparency, customer-first thinking, innovation with purpose, and collaboration define how we work and how we build long-term partnerships.",
  },
];

const AboutOverview = () => {
  const [active, setActive] = useState("purpose");

  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-20 items-start">

        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-4xl font-bold text-slate-900 mb-14">
            Global expertise with a <br />
            customer-centric approach
          </h2>

          <div className="relative pl-10">
            {/* Vertical Base Line */}
            <div className="absolute left-2 top-0 bottom-0 w-px bg-slate-200"></div>

            {sections.map((item) => {
              const isActive = active === item.id;

              return (
                <div
                  key={item.id}
                  onClick={() => setActive(item.id)}
                  className="mb-10 cursor-pointer"
                >
                  <div className="flex items-start gap-6">

                    {/* INDICATOR + BLINKING DOT */}
                    <div className="relative flex items-start">
                      {/* Active yellow line */}
                      <div
                        className={`w-1 transition-all duration-300 ${
                          isActive ? "bg-yellow-400 h-full" : "bg-transparent"
                        }`}
                      ></div>

                      {/* Blinking Dot */}
                      {isActive && (
                        <div className="absolute -left-[6px] top-1">
                          <span className="absolute inline-flex h-4 w-4 rounded-full bg-accent opacity-75 animate-ping"></span>
                          <span className="relative inline-flex h-3 w-3 rounded-full bg-accent"></span>
                        </div>
                      )}
                    </div>

                    {/* TEXT CONTENT */}
                    <div className="flex-1">
                      <h3
                        className={`text-xl font-semibold transition-colors duration-300 ${
                          isActive ? "text-accent" : "text-slate-900"
                        }`}
                      >
                        {item.title}
                      </h3>

                      {/* Animated Expand */}
                      <div
                        className={`grid transition-all duration-300 ease-in-out ${
                          isActive
                            ? "grid-rows-[1fr] opacity-100 mt-4"
                            : "grid-rows-[0fr] opacity-0"
                        }`}
                      >
                        <p className="overflow-hidden text-slate-600 leading-relaxed">
                          {item.content}
                        </p>
                      </div>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative">
          {/* Decorative yellow blocks */}
          <div className="absolute -top-6 -right-6 w-40 h-40 bg-accent z-0"></div>
          <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-accent z-0"></div>

          <div className="relative z-10 rounded-xl overflow-hidden shadow-xl">
            <Image
              src="/about1.jpg"
              alt="Fstone Technologies Team"
              className="w-full h-[420px] object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutOverview;
