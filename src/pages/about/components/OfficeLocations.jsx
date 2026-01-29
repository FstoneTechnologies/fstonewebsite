import React, { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";

const officeLocations = [
 
  {
    city: "Doylestown, PA",
    title: "Regional Office",
    address: "2003 S Easton Rd, Suite 308Doylestown, PA 18901",
    image: "https://images.unsplash.com/photo-1505761671935-60b3a7427bad",
  },
  
  {
    city: "Gurgaon, India",
    title: "Office",
    address: "Suite 911 B, Tower B4 Spaze IT Park, Sector 49 Gurugram, Haryana 122018",
    image: "/gn.jpg",
  },
  {
    city: "New Jersey, USA",
    title: "Corporate Headquarters",
    address: "3084, Congressional Office Park, Route 27 Suite #3, Kendall Park New Jersey 08824",
    image: "/nj.webp",
  },
];

const VISIBLE = 3;

const OfficeLocations = () => {
  const trackRef = useRef(null);
  const cardRef = useRef(null);

  const [index, setIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);

  useEffect(() => {
    if (cardRef.current) {
      const gap = 32; // gap-8 = 32px
      setCardWidth(cardRef.current.offsetWidth + gap);
    }
  }, []);

  const maxIndex = officeLocations.length - VISIBLE;

  return (
    <section className="py-8 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Our Office Locations</h2>
          <p className="text-gray-600 mt-2">
            Connecting globally, delivering locally
          </p>
        </div>

        {/* Slider */}
        <div className="relative overflow-hidden">
          <div
            ref={trackRef}
            className="flex gap-8 transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${index * cardWidth}px)`,
            }}
          >
            {officeLocations.map((office, i) => (
              <div
                key={i}
                ref={i === 0 ? cardRef : null}
             className="w-1/3 max-w-[380px] shrink-0 bg-gray-100 rounded-xl shadow-md overflow-hidden group"

              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={office.image}
                    alt={office.city}
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Hover address */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <div className="text-white text-sm">
                      <div className="flex items-center gap-1 mb-1">
                        <MapPin size={16} />
                        <span className="font-semibold">
                          {office.city}
                        </span>
                      </div>
                      <p className="text-xs">{office.address}</p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-lg font-semibold">{office.city}</h3>
                  <p className="text-sm text-gray-500 mt-1">
                    {office.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-center gap-6 mt-12">
          <button
            onClick={() => setIndex(Math.max(index - 1, 0))}
            disabled={index === 0}
            className="p-3 rounded-full border disabled:opacity-40 hover:bg-gray-100"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={() => setIndex(Math.min(index + 1, maxIndex))}
            disabled={index === maxIndex}
            className="p-3 rounded-full border disabled:opacity-40 hover:bg-gray-100"
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default OfficeLocations;
