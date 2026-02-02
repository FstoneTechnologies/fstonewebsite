import React from "react";
import Image from "../../../components/AppImage";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-[90vh] bg-gradient-to-br from-[#f6f5f3] via-[#eef3f8] to-[#e8f2f1] overflow-hidden">

      <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-2 min-h-[90vh]">
        {/* LEFT CONTENT */}
        <div className="flex flex-col justify-center px-8 lg:px-20 py-16 space-y-8 z-10 mt-10 lg:mt-15">
          <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 leading-tight">
            Powering Talent. <br />
            <span className="text-accent">Driving Growth.</span>
          </h1>

          <p className="text-lg text-slate-700 max-w-xl">
            Fstone Technologies delivers workforce, technology, and business
            solutions that help organizations scale, transform, and succeed
            with confidence.
          </p>

          {/* STATS */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-xl">
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="text-3xl font-bold text-slate-900">20+</h3>
              <p className="text-sm text-slate-600">
                Years of industry experience
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="text-3xl font-bold text-slate-900">Global</h3>
              <p className="text-sm text-slate-600">
                Presence across regions
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="text-3xl font-bold text-slate-900">24×7</h3>
              <p className="text-sm text-slate-600">
                Client support & delivery
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="pt-6">
            <Link to="/contact">
              <button className="group relative overflow-hidden inline-flex items-center justify-center bg-black text-white px-14 py-5 rounded-full font-semibold transition-all duration-300 hover:bg-accent hover:shadow-lg min-w-[320px]">
                {/* ICON */}
                <span className="absolute left-4 w-9 h-9 rounded-full bg-blue-400 text-black flex items-center justify-center transition-all duration-300 group-hover:left-[calc(100%-3rem)]">
                  →
                </span>

                {/* TEXT */}
                <span className="relative z-10 transition-all duration-300">
                  Reach Out to Us
                </span>
              </button>
            </Link>
          </div>

        </div>

        {/* RIGHT IMAGE (DIAGONAL) */}
        <div className="relative hidden lg:block">
          <div
            className="absolute inset-0"
            style={{
              clipPath: "polygon(12% 0, 100% 0, 100% 100%, 0 100%)",
            }}
          >
            <Image
              src="/aboutHero.jpeg"
              alt="Fstone Technologies Team"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;

