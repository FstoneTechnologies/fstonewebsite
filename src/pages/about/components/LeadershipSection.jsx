import React, { useState } from "react";
import Image from "../../../components/AppImage";

const leadershipTabs = ["Board of Directors", "Management Team"];

const leadershipData = {
  "Board of Directors": [
    {
      name: "Kavita Yadav",
      role: "Chief Executive Officer",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face",
    },
    {
      name: "Lakhan Pal Solanki",
      role: "Chief Technology Officer",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face",
    },
    {
      name: "Director Name",
      role: "Independent Director",
      image:
        "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop&crop=face",
    },
  ],

  "Management Team": [
    {
      name: "CEO Name",
      role: "Chief Executive Officer",
      image:
        "https://images.unsplash.com/photo-1557862921-37829c790f19?w=400&h=400&fit=crop&crop=face",
    },
    {
      name: "CTO Name",
      role: "Chief Technology Officer",
      image:
        "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=400&h=400&fit=crop&crop=face",
    },
  ],

};



const LeadershipSection = () => {
  const [activeTab, setActiveTab] = useState("Board of Directors");

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* HEADER */}
        <h2 className="text-4xl font-bold text-slate-900 mb-6">
          Fstone <span className="text-accent">Leadership</span>
        </h2>

        {/* TABS */}
        <div className="flex gap-10 border-b border-slate-200 mb-14">
          {leadershipTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-3 font-medium transition-all ${
                activeTab === tab
                  ? "text-accent border-b-2 border-accent"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* CARDS */}
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
  {leadershipData[activeTab]?.map((person, index) => (
    <div
      key={index}
      className="
        group
        bg-[#f7f6f4]
        rounded-2xl
        p-8
        text-center
        shadow-sm
        transition-all
        duration-500
        hover:shadow-2xl
        hover:-translate-y-2
        hover:scale-[1.03]
      "
    >
      {/* IMAGE */}
      <div className="mb-6 flex justify-center">
        <div className="w-40 h-40 rounded-full bg-slate-200 overflow-hidden">
          <Image
            src={person.image}
            alt={person.name}
            className="
              w-full h-full object-cover
              grayscale
              transition-all
              duration-500
              group-hover:grayscale-0
              group-hover:scale-110
            "
          />
        </div>
      </div>

      {/* NAME */}
      <h3 className="text-lg font-semibold text-slate-900">
        {person.name}
      </h3>

      {/* ROLE */}
      <p className="text-slate-600 mt-1 text-sm">
        {person.role}
      </p>
    </div>
  ))}
</div>


      </div>
    </section>
  );
};

export default LeadershipSection;
