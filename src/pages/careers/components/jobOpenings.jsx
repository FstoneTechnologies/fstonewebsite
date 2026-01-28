import React from "react";
import { Link } from "react-router-dom";

const jobOpenings = [
  {
    id: 1,
    title: "Frontend Developer (React)",
    location: "Bangalore / Remote",
    type: "Full Time",
    experience: "2–4 Years",
  },
  {
    id: 2,
    title: "Backend Developer (Java / Spring)",
    location: "Bangalore",
    type: "Full Time",
    experience: "3–5 Years",
  },
  {
    id: 3,
    title: "UI/UX Designer",
    location: "Remote",
    type: "Contract",
    experience: "1–3 Years",
  },
  {
    id: 4,
    title: "HR Recruiter",
    location: "Hyderabad",
    type: "Full Time",
    experience: "1–3 Years",
  },
];

const JoinOurTeam = () => {
  return (
    <section className="bg-white">

      {/* HERO / INTRO */}
      <div className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
            Join Our Team
          </h2>
          <p className="mt-6 text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            At Fstone Technologies, we believe people are our greatest strength.
            Join a team where innovation, learning, and growth are part of everyday work.
          </p>

          {/* CTA */}
         
        </div>
      </div>

      {/* JOB OPENINGS */}
      <div id="openings" className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          {/* JOB LIST */}
          <div className="space-y-6">
            {jobOpenings.map((job) => (
              <div
                key={job.id}
                className="border border-gray-200 rounded-2xl p-6 flex flex-col lg:flex-row lg:items-center lg:justify-between hover:shadow-lg transition"
              >
                {/* Job Info */}
                <div>
                  <h3 className="text-xl font-semibold text-slate-900">
                    {job.title}
                  </h3>
                  <div className="mt-2 flex flex-wrap gap-4 text-sm text-slate-600">
                    <span>📍 {job.location}</span>
                    <span>🕒 {job.type}</span>
                    <span>💼 {job.experience}</span>
                  </div>
                </div>

                {/* Apply Button */}
                <div className="mt-4 lg:mt-0">
  <a
    href="https://www.hirees.com/"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center justify-center px-6 py-3 bg-[#1F74B5] text-white rounded-lg font-medium hover:bg-blue-700 transition"
  >
    Apply Now
  </a>
</div>

              </div>
            ))}
          </div>

          {/* NO OPENINGS MESSAGE (future use) */}
          {jobOpenings.length === 0 && (
            <p className="text-center text-slate-600">
              Currently, there are no open positions. Please check back later.
            </p>
          )}

        </div>
      </div>

    </section>
  );
};

export default JoinOurTeam;
