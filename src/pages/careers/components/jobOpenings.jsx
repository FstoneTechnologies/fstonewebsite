import React from "react";

const JoinOurTeam = () => {
  return (
    <section className="bg-white">

      {/* HERO / INTRO WITH BG IMAGE */}
      <div
        className="relative py-28 bg-center bg-cover bg-no-repeat"
        style={{
          backgroundImage:
            "url('jobop.jpg')",
        }}
      >
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl lg:text-4xl font-bold">
            Join Our Team
          </h2>

          <p className="mt-6 text-lg max-w-3xl mx-auto leading-relaxed text-white/90">
            At Fstone Technologies, we believe people are our greatest strength.
            Join a team where innovation, learning, and growth are part of everyday work.
          </p>

          {/* CTA BUTTON */}
          <div className="mt-10 flex justify-center">
            <a
              href="https://www.hirees.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden inline-flex items-center justify-center 
                         bg-black text-white px-14 py-5 rounded-full font-semibold 
                         transition-all duration-300 hover:bg-accent hover:shadow-lg 
                         min-w-[320px]"
            >
              <span
                className="absolute left-4 w-9 h-9 rounded-full bg-blue-400 text-black 
                           flex items-center justify-center transition-all duration-300 
                           group-hover:left-[calc(100%-3rem)]"
              >
                →
              </span>

              <span className="relative z-10">
                Explore Open Positions
              </span>
            </a>
          </div>
        </div>
      </div>

    </section>
  );
};

export default JoinOurTeam;
