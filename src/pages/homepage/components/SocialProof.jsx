// import React, { useState } from 'react';
// import Icon from '../../../components/AppIcon';
// import Image from '../../../components/AppImage';

// const SocialProof = () => {
//   const [activeTestimonial, setActiveTestimonial] = useState(0);

//   const testimonials = [
//     {
//       id: 1,
//       name: 'Rajesh Kumar',
//       position: 'Founder & CEO',
//       company: 'TechFlow Solutions',
//       image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face',
//       testimonial: `DaRYTE's expertise in legal compliance saved us months of research and potential costly mistakes. Their mentorship program connected us with industry veterans who provided invaluable guidance during our scaling phase.`,rating: 5,category: 'Startup Founder'
//     },
//     {
//       id: 2,
//       name: 'Dr. Priya Sharma',position: 'Director',company: 'Government Health Department',image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&h=80&fit=crop&crop=face',testimonial: `We've partnered with DaRYTE for startup introductions in the healthcare sector. Their portfolio companies consistently demonstrate high compliance standards and innovative solutions that align with our policy objectives.`,
//       rating: 5,
//       category: 'Government Partner'
//     },
//     {
//       id: 3,
//       name: 'Amit Patel',
//       position: 'Founder',
//       company: 'GreenTech Innovations',
//       image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=80&h=80&fit=crop&crop=face',
//       testimonial: `The ReAttire program helped me transition from a 20-year corporate career to successfully launching my own startup. The structured approach and peer network were exactly what I needed for this major life change.`,
//       rating: 5,
//       category: 'ReAttire Graduate'
//     },
//     {
//       id: 4,
//       name: 'Sarah Johnson',
//       position: 'Investment Manager',
//       company: 'Venture Capital Firm',
//       image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=80&h=80&fit=crop&crop=face',
//       testimonial: `DaRYTE-incubated startups consistently show superior legal documentation and compliance readiness. This significantly reduces our due diligence time and increases our confidence in potential investments.`,
//       rating: 5,
//       category: 'Investor'
//     }
//   ];

//   const mediaLogos = [
//     {
//       name: 'Economic Times',
//       logo: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=120&h=60&fit=crop&crop=center'
//     },
//     {
//       name: 'Business Standard',
//       logo: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=120&h=60&fit=crop&crop=center'
//     },
//     {
//       name: 'Startup India',
//       logo: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=120&h=60&fit=crop&crop=center'
//     },
//     {
//       name: 'Inc42',
//       logo: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=120&h=60&fit=crop&crop=center'
//     }
//   ];

//   const awards = [
//     {
//       title: 'Best Incubator 2024',
//       organization: 'Startup India',
//       year: '2024',
//       icon: 'Award'
//     },
//     {
//       title: 'Excellence in Legal Services',
//       organization: 'Bar Council Recognition',
//       year: '2023',
//       icon: 'Scale'
//     },
//     {
//       title: 'Top Mentor Network',
//       organization: 'Entrepreneur Magazine',
//       year: '2023',
//       icon: 'Users'
//     }
//   ];

//   const currentTestimonial = testimonials?.[activeTestimonial];

//   return (
//     <section className="py-20 bg-background">
//       <div className="max-w-7xl mx-auto px-6 lg:px-8">
//         {/* Section Header */}
//         <div className="text-center mb-16">
//           <div className="inline-flex items-center space-x-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-2 mb-6">
//             <Icon name="Star" size={16} className="text-accent" />
//             <span className="text-sm font-medium text-accent">Trusted by Industry Leaders</span>
//           </div>
//           <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
//             What Our Community Says
//           </h2>
//           <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
//             Hear from startup founders, government partners, and industry experts who have 
//             experienced the DaRYTE difference firsthand.
//           </p>
//         </div>

//         {/* Featured Testimonial */}
//         <div className="bg-card rounded-3xl shadow-brand-lg p-8 md:p-12 mb-16">
//           <div className="grid lg:grid-cols-3 gap-8 items-center">
//             {/* Testimonial Content */}
//             <div className="lg:col-span-2">
//               <div className="flex items-center space-x-1 mb-6">
//                 {[...Array(currentTestimonial?.rating)]?.map((_, i) => (
//                   <Icon key={i} name="Star" size={20} className="text-accent fill-current" />
//                 ))}
//               </div>
//               <blockquote className="text-xl text-foreground leading-relaxed mb-8 italic">
//                 "{currentTestimonial?.testimonial}"
//               </blockquote>
//               <div className="flex items-center space-x-4">
//                 <div className="w-16 h-16 rounded-full overflow-hidden">
//                   <Image 
//                     src={currentTestimonial?.image} 
//                     alt={currentTestimonial?.name}
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//                 <div>
//                   <div className="font-semibold text-foreground text-lg">
//                     {currentTestimonial?.name}
//                   </div>
//                   <div className="text-muted-foreground">
//                     {currentTestimonial?.position}, {currentTestimonial?.company}
//                   </div>
//                   <div className="text-sm text-accent font-medium">
//                     {currentTestimonial?.category}
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Testimonial Navigation */}
//             <div className="space-y-4">
//               {testimonials?.map((testimonial, index) => (
//                 <button
//                   key={testimonial?.id}
//                   onClick={() => setActiveTestimonial(index)}
//                   className={`w-full text-left p-4 rounded-xl transition-all duration-300 ${
//                     index === activeTestimonial
//                       ? 'bg-primary/10 border border-primary/20' :'bg-surface hover:bg-surface/80 border border-transparent'
//                   }`}
//                 >
//                   <div className="flex items-center space-x-3">
//                     <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
//                       <Image 
//                         src={testimonial?.image} 
//                         alt={testimonial?.name}
//                         className="w-full h-full object-cover"
//                       />
//                     </div>
//                     <div className="min-w-0">
//                       <div className="font-medium text-foreground text-sm truncate">
//                         {testimonial?.name}
//                       </div>
//                       <div className="text-xs text-muted-foreground">
//                         {testimonial?.category}
//                       </div>
//                     </div>
//                   </div>
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Media Coverage */}
//         {/* <div className="mb-16">
//           <h3 className="text-xl font-semibold text-foreground text-center mb-8">
//             Featured In
//           </h3>
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
//             {mediaLogos?.map((media, index) => (
//               <div key={index} className="text-center opacity-60 hover:opacity-100 transition-opacity duration-300">
//                 <div className="h-12 flex items-center justify-center mb-2">
//                   <Image 
//                     src={media?.logo} 
//                     alt={media?.name}
//                     className="max-h-full max-w-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
//                   />
//                 </div>
//                 <div className="text-xs text-muted-foreground">{media?.name}</div>
//               </div>
//             ))}
//           </div>
//         </div> */}

//         {/* Awards & Recognition */}
//         <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-3xl p-8 md:p-12">
//           <h3 className="text-2xl font-bold text-foreground text-center mb-12">
//             Awards & Recognition
//           </h3>
//           <div className="grid md:grid-cols-3 gap-8">
//             {awards?.map((award, index) => (
//               <div key={index} className="text-center">
//                 <div className="w-16 h-16 mx-auto mb-4 bg-card rounded-2xl flex items-center justify-center shadow-brand">
//                   <Icon name={award?.icon} size={28} className="text-primary" />
//                 </div>
//                 <h4 className="font-semibold text-foreground mb-2">{award?.title}</h4>
//                 <p className="text-sm text-muted-foreground mb-1">{award?.organization}</p>
//                 <div className="text-xs text-accent font-medium">{award?.year}</div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Trust Stats */}
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-border">
//           <div className="text-center">
//             <div className="text-3xl font-bold text-primary mb-2">5000+</div>
//             <div className="text-sm text-muted-foreground">Entrepreneurs Guided</div>
//           </div>
//           <div className="text-center">
//             <div className="text-3xl font-bold text-success mb-2">₹50+ Cr</div>
//             <div className="text-sm text-muted-foreground">Funding Facilitated</div>
//           </div>
//           <div className="text-center">
//             <div className="text-3xl font-bold text-secondary mb-2">98%</div>
//             <div className="text-sm text-muted-foreground">Client Satisfaction</div>
//           </div>
//           <div className="text-center">
//             <div className="text-3xl font-bold text-accent mb-2">25+</div>
//             <div className="text-sm text-muted-foreground">Years Experience</div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SocialProof;
import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import CountUp from './CountUp';

const SocialProof = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Rohit Mehta',
      position: 'Delivery Director',
      company: 'Global FinTech Client',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200&q=80',
      testimonial: `Fstone helped us scale our technology teams quickly while maintaining quality and compliance. Their structured workforce approach saved us months of effort.`,
      rating: 5,
      category: 'Enterprise Client'
    },
    {
      id: 2,
      name: 'Ankit Verma',
      position: 'Head of HR',
      company: 'Manufacturing Group',
      image: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=200&h=200&q=80',
      testimonial: `Our recruitment and delivery processes became faster and more reliable after partnering with Fstone. The quality of talent and service has been exceptional.`,
      rating: 5,
      category: 'HR Leader'
    },
    {
      id: 3,
      name: 'Sanjay Kapoor',
      position: 'CTO',
      company: 'IT Services Firm',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=200&h=200&q=80',
      testimonial: `With Fstone’s managed delivery and staffing expertise, we expanded into new markets without compromising on talent quality or delivery standards.`,
      rating: 5,
      category: 'Technology Partner'
    },
    {
      id: 4,
      name: 'Neha Gupta',
      position: 'Operations Head',
      company: 'Healthcare Services',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&h=200&q=80',
      testimonial: `Fstone’s workforce solutions helped us build reliable teams across multiple locations with consistent performance and governance.`,
      rating: 5,
      category: 'Operations Leader'
    }
  ];

  const awards = [
    {
      title: 'Best Workforce Solutions Provider',
      organization: 'Industry Excellence Awards',
      year: '2024',
      icon: 'Award'
    },
    {
      title: 'Excellence in Talent Delivery',
      organization: 'HR Leadership Forum',
      year: '2023',
      icon: 'Users'
    },
    {
      title: 'Top Managed Services Partner',
      organization: 'Enterprise Connect',
      year: '2023',
      icon: 'TrendingUp'
    }
  ];

  const currentTestimonial = testimonials[activeTestimonial];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-accent/10 border border-[#1F74B5] rounded-full px-4 py-2 mb-6">
            <Icon name="Star" size={16} className="text-primary" />
            <span className="text-sm font-medium text-primary">
              Trusted by Industry Leaders
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our Clients Say
          </h2>

          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Hear from enterprise leaders and partners who have experienced the Fstone difference firsthand.
          </p>
        </div>

        {/* TESTIMONIAL CARD */}
        <div className="bg-[#1F74B5] rounded-3xl shadow-brand-lg p-8 md:p-12 mb-16">
          <div className="grid lg:grid-cols-3 gap-8 items-center">

            <div className="lg:col-span-2">
              <div className="flex items-center space-x-1 mb-6">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <Icon key={i} name="Star" size={20} className="text-yellow-50 fill-current" />
                ))}
              </div>

              <blockquote className="text-xl text-yellow-50 leading-relaxed mb-8 italic">
                "{currentTestimonial.testimonial}"
              </blockquote>

              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-yellow-50/40">
                  <Image
                    src={currentTestimonial.image}
                    alt={currentTestimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-semibold text-yellow-50 text-lg">
                    {currentTestimonial.name}
                  </div>
                  <div className="text-yellow-50/80">
                    {currentTestimonial.position}, {currentTestimonial.company}
                  </div>
                  <div className="text-sm text-yellow-50 font-medium">
                    {currentTestimonial.category}
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              {testimonials.map((testimonial, index) => (
                <button
                  key={testimonial.id}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-full text-left p-4 rounded-xl transition-all duration-300 border ${index === activeTestimonial
                      ? 'bg-white border-[#1F74B5]'
                      : 'bg-white hover:bg-gray border-transparent'
                    }`}

                >
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="min-w-0">
                      <div className="font-medium text-black text-sm truncate">
                        {testimonial.name}
                      </div>
                      <div className="text-xs text-black-50/80">
                        {testimonial.category}
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>

          </div>
        </div>

        {/* AWARDS */}
        <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-3xl p-8 md:p-12">
          <h3 className="text-2xl font-bold text-foreground text-center mb-12">
            Awards & Recognition
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {awards.map((award, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-[#1F74B5] rounded-2xl flex items-center justify-center shadow-brand">
                  <Icon name={award.icon} size={28} className="text-white" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">{award.title}</h4>
                <p className="text-sm text-muted-foreground mb-1">{award.organization}</p>
                <div className="text-xs text-muted-foreground font-medium">{award.year}</div>
              </div>
            ))}
          </div>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-border">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">
              <CountUp end={300} suffix="+" />
              </div>
            <div className="text-sm text-muted-foreground">Clients Served</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-success mb-2">
              <CountUp end={5000} suffix="+" />
            </div>
            <div className="text-sm text-muted-foreground">Professionals Placed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-secondary mb-2">
              <CountUp end={98} suffix="%" />
              </div>
            <div className="text-sm text-muted-foreground">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent mb-2">
              <CountUp end={25} suffix="+" />
            </div>
            <div className="text-sm text-muted-foreground">Years Experience</div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default SocialProof;
