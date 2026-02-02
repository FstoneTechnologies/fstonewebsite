import ContactUs from 'components/ui/ContactUs';
import React, { useEffect, useState } from 'react';

const CARD_WIDTH = 350;
const GAP = 32;
const VISIBLE = 3;
const TOTAL_SHIFT = CARD_WIDTH + GAP;

const SuccessStories = () => {
    const stories = [
        {
            image:'/our1.jpg',
            title:
                'Helping enterprises modernize legacy systems and scale operations with cloud-first strategies.'
        },
        {
            image:'/our4.jpg',
            title:
                'Delivering intelligent analytics platforms enabling faster, data-driven decision making.'
        },
        {
            image:'/our2.jfif',
            title:
                'Driving digital transformation for financial services through secure, scalable systems.'
        },
        {
            image:'/our3.jfif',
            title:
                'Strengthening enterprise delivery with high-impact IT staff augmentation and managed services.'
        }
    ];

    // clone first 3 cards
    const slides = [...stories, ...stories.slice(0, VISIBLE)];

    const [index, setIndex] = useState(0);
    const [transition, setTransition] = useState(true);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => prev + 1);
        }, 4000);

        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        // when reaching cloned slides
        if (index === stories.length) {
            setTimeout(() => {
                setTransition(false);
                setIndex(0);

                // re-enable animation immediately
                requestAnimationFrame(() => {
                    requestAnimationFrame(() => {
                        setTransition(true);
                    });
                });
            }, 700);
        }
    }, [index, stories.length]);

    return (
        <>
        <section className="bg-gradient-to-r from-[#0ead5b] via-[#c5b82f] to-[#0A7F8C] py-20">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-white">
                    Our Success Stories
                </h2>

                {/* Viewport */}
                <div
                    className="overflow-hidden mx-auto"
                    style={{
                        width: CARD_WIDTH * VISIBLE + GAP * (VISIBLE - 1)
                    }}
                >
                    <div
                        className="flex gap-8"
                        style={{
                            transform: `translateX(-${index * TOTAL_SHIFT}px)`,
                            transition: transition
                                ? 'transform 0.7s ease-in-out'
                                : 'none'
                        }}
                    >
                        {slides.map((story, i) => (
                            <div key={i} className="w-[350px] shrink-0">
                                {/* image zoom container */}
                                <div className="overflow-hidden h-56">
                                    <img
                                        src={story.image}
                                        alt="Success story"
                                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                                    />
                                </div>

                                <div className="bg-white p-6 min-h-[260px] flex flex-col justify-between">
                                    <div>
                                        <span className="text-[#0E5CAD] font-semibold uppercase">
                                            Success Story
                                        </span>
                                        <h3 className="text-[18px] font-semibold mt-4">
                                            {story.title}
                                        </h3>
                                    </div>

                                    {/* <button className="mt-6 self-start px-6 py-2 bg-[#0E5CAD] text-white font-medium transition-all hover:scale-105 hover:bg-[#0B4A8A]">
                                        Read the Story
                                    </button> */}
                                </div>
                            </div>

                        ))}
                    </div>
                </div>
            </div>
        </section>
        <ContactUs/>
        </>
    );
};

export default SuccessStories;
