// import React, { useState, useEffect } from 'react';
// import Icon from '../../../components/AppIcon';
// import Image from '../../../components/AppImage';
// import Button from '../../../components/ui/Button';
// import LazyLoad from '../../../components/LazyLoad';

// const SuccessCarousel = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [isAutoPlaying, setIsAutoPlaying] = useState(true);

//   const successStories = [
//     {
//       id: 1,
//       company: 'TechFlow Solutions',
//       industry: 'SaaS Technology',
//       logo: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=80&h=80&fit=crop&crop=center',
//       founder: 'Rajesh Kumar',
//       founderImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face',
//       story: `"DaRYTE transformed our startup from a simple idea to a ₹2.5 Cr funded company. Their legal expertise and mentorship were invaluable in navigating complex compliance requirements."`,
//       metrics: {
//         funding: '₹2.5 Cr',
//         growth: '300%',
//         timeline: '18 months',
//         employees: '25+'
//       },
//       achievements: [
//         'Series A funding secured',
//         'Expanded to 3 cities',
//         'Government contracts won',
//         'Team scaled 5x'
//       ]
//     },
//     {
//       id: 2,
//       company: 'GreenTech Innovations',
//       industry: 'Clean Energy',
//       logo: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=80&h=80&fit=crop&crop=center',
//       founder: 'Priya Sharma',
//       founderImage: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=60&h=60&fit=crop&crop=face',
//       story: `"The incubation program at DaRYTE provided us with the perfect ecosystem. From legal compliance to market access, everything was seamlessly handled."`,
//       metrics: {
//         funding: '₹1.8 Cr',
//         growth: '250%',
//         timeline: '24 months',
//         employees: '18+'
//       },
//       achievements: [
//         'Pre-Series A completed',
//         'Patent applications filed',
//         'Strategic partnerships',
//         'Market validation achieved'
//       ]
//     },
//     {
//       id: 3,
//       company: 'HealthCare Connect',
//       industry: 'HealthTech',
//       logo: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=80&h=80&fit=crop&crop=center',
//       founder: 'Dr. Amit Patel',
//       founderImage: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=60&h=60&fit=crop&crop=face',
//       story: `"DaRYTE's expertise in healthcare regulations was crucial for our success. They helped us navigate complex compliance while maintaining our growth momentum."`,
//       metrics: {
//         funding: '₹3.2 Cr',
//         growth: '400%',
//         timeline: '20 months',
//         employees: '30+'
//       },
//       achievements: [
//         'Series A funding raised',
//         'Regulatory approvals',
//         '10K+ users acquired',
//         'Multi-city expansion'
//       ]
//     }
//   ];

//   useEffect(() => {
//     if (!isAutoPlaying) return;
    
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % successStories?.length);
//     }, 6000);

//     return () => clearInterval(interval);
//   }, [isAutoPlaying, successStories?.length]);

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % successStories?.length);
//     setIsAutoPlaying(false);
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + successStories?.length) % successStories?.length);
//     setIsAutoPlaying(false);
//   };

//   const goToSlide = (index) => {
//     setCurrentSlide(index);
//     setIsAutoPlaying(false);
//   };

//   const currentStory = successStories?.[currentSlide];

//   return (
//     <section className="py-20 bg-yellow-50 from-surface to-background">
//       <div className="max-w-7xl mx-auto px-6 lg:px-8">
//         {/* Section Header */}
//         <LazyLoad>
//           <div className="text-center mb-16">
//             <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
//               <Icon name="Trophy" size={16} className="text-primary" />
//               <span className="text-sm font-medium text-primary">Success Stories</span>
//             </div>
//             <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
//               From Vision to Victory
//             </h2>
//             <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
//               Discover how DaRYTE has transformed startup dreams into successful enterprises. 
//               Our proven track record speaks for itself.
//             </p>
//           </div>
//         </LazyLoad>

//         {/* Carousel Container */}
//         <LazyLoad delay={200}>
//           <div className="relative bg-card border border-border rounded-3xl overflow-hidden shadow-brand-lg">
//             <div className="grid lg:grid-cols-2 gap-0">
//               {/* Story Content */}
//               <div className="p-8 lg:p-12">
//                 {/* Company Logo */}
//                 <LazyLoad delay={300}>
//                   <div className="mb-6">
//                     <Image 
//                       src={currentStory?.logo} 
//                       alt={currentStory?.company}
//                       className="w-20 h-20 rounded-xl shadow-lg"
//                     />
//                   </div>
//                 </LazyLoad>

//                 {/* Company Info */}
//                 <LazyLoad delay={400}>
//                   <div className="mb-8">
//                     <h3 className="text-2xl font-bold text-foreground mb-2">{currentStory?.company}</h3>
//                     <p className="text-muted-foreground mb-4">{currentStory?.industry}</p>
//                     <p className="text-foreground leading-relaxed italic">"{currentStory?.story}"</p>
//                   </div>
//                 </LazyLoad>

//                 {/* Founder Info */}
//                 <LazyLoad delay={500}>
//                   <div className="flex items-center space-x-4 mb-6">
//                     <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary/20">
//                       <Image 
//                         src={currentStory?.founderImage} 
//                         alt={currentStory?.founder}
//                         className="w-full h-full object-cover"
//                       />
//                     </div>
//                     <div>
//                       <div className="font-semibold text-foreground">{currentStory?.founder}</div>
//                       <div className="text-sm text-muted-foreground">Founder & CEO</div>
//                     </div>
//                   </div>
//                 </LazyLoad>

//                 {/* Achievements */}
//                 <LazyLoad delay={600}>
//                   <div>
//                     <h4 className="font-semibold text-foreground mb-4">Key Achievements</h4>
//                     <div className="grid grid-cols-2 gap-3">
//                       {currentStory?.achievements?.map((achievement, index) => (
//                         <div key={index} className="flex items-center space-x-2">
//                           <Icon name="CheckCircle" size={16} className="text-success" />
//                           <span className="text-sm text-foreground">{achievement}</span>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 </LazyLoad>
//               </div>

//               {/* Metrics Panel */}
//               <div className="bg-gradient-to-br from-primary/5 to-secondary/5 p-8 lg:p-12 flex flex-col justify-center">
//                 <h4 className="text-xl font-bold text-foreground mb-8 text-center">
//                   Growth Metrics
//                 </h4>
                
//                 <div className="grid grid-cols-2 gap-6">
//                   <div className="text-center">
//                     <div className="text-3xl font-bold text-success mb-2">
//                       {currentStory?.metrics?.funding}
//                     </div>
//                     <div className="text-sm text-muted-foreground">Funding Raised</div>
//                   </div>
                  
//                   <div className="text-center">
//                     <div className="text-3xl font-bold text-primary mb-2">
//                       {currentStory?.metrics?.growth}
//                     </div>
//                     <div className="text-sm text-muted-foreground">Revenue Growth</div>
//                   </div>
                  
//                   <div className="text-center">
//                     <div className="text-3xl font-bold text-secondary mb-2">
//                       {currentStory?.metrics?.timeline}
//                     </div>
//                     <div className="text-sm text-muted-foreground">Timeline</div>
//                   </div>
                  
//                   <div className="text-center">
//                     <div className="text-3xl font-bold text-accent mb-2">
//                       {currentStory?.metrics?.employees}
//                     </div>
//                     <div className="text-sm text-muted-foreground">Team Size</div>
//                   </div>
//                 </div>

//                 {/* Progress Visualization */}
//                 <div className="mt-8 p-4 bg-card rounded-xl">
//                   <div className="flex justify-between text-sm text-muted-foreground mb-2">
//                     <span>Success Journey</span>
//                     <span>100%</span>
//                   </div>
//                   <div className="w-full bg-border rounded-full h-2">
//                     <div className="bg-gradient-to-r from-primary to-success h-2 rounded-full w-full"></div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </LazyLoad>

//         {/* Navigation Controls */}
//         <LazyLoad delay={700}>
//           <div className="flex items-center justify-between mt-8">
//             <Button
//               variant="outline"
//               size="sm"
//               iconName="ChevronLeft"
//               onClick={prevSlide}
//               className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
//             />
            
//             {/* Slide Indicators */}
//             <div className="flex space-x-2">
//               {successStories?.map((_, index) => (
//                 <button
//                   key={index}
//                   onClick={() => goToSlide(index)}
//                   className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                     index === currentSlide 
//                       ? 'bg-primary w-8' :'bg-border hover:bg-muted-foreground'
//                   }`}
//                 />
//               ))}
//             </div>
            
//             <Button
//               variant="outline"
//               size="sm"
//               iconName="ChevronRight"
//               onClick={nextSlide}
//               className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
//             />
//           </div>
//         </LazyLoad>
//       </div>
//     </section>
//   );
// };

// export default SuccessCarousel;

import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';
import LazyLoad from '../../../components/LazyLoad';

const SuccessCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const successStories = [
    {
      id: 1,
      company: 'Global FinTech Client',
      industry: 'Financial Services',
      logo: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=80&h=80&fit=crop&crop=center',
      founder: 'Delivery Lead',
      founderImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face',
      story: `Fstone enabled us to rapidly scale our technology teams while maintaining quality and compliance. Their workforce strategy significantly improved our delivery timelines.`,
      metrics: {
        funding: '₹120 Cr',
        growth: '45%',
        timeline: '12 months',
        employees: '150+'
      },
      achievements: [
        'Scaled delivery teams',
        'Improved hiring turnaround',
        'Enhanced delivery efficiency',
        'Strengthened governance'
      ]
    },
    {
      id: 2,
      company: 'Enterprise Manufacturing Group',
      industry: 'Manufacturing & Engineering',
      logo: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=80&h=80&fit=crop&crop=center',
      founder: 'HR Transformation Head',
     founderImage: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&h=200&q=80',

      story: `Fstone transformed our recruitment and workforce processes across multiple plants. We achieved faster hiring and better talent alignment across all functions.`,
      metrics: {
        funding: '₹80 Cr',
        growth: '38%',
        timeline: '10 months',
        employees: '120+'
      },
      achievements: [
        'Centralised hiring model',
        'Reduced time-to-hire',
        'Improved talent quality',
        'Pan-India rollout'
      ]
    },
    {
      id: 3,
      company: 'Global IT Services Firm',
      industry: 'Information Technology',
      logo: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=80&h=80&fit=crop&crop=center',
      founder: 'Talent Acquisition Director',
      founderImage: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=60&h=60&fit=crop&crop=face',
      story: `With Fstone’s managed delivery and staffing expertise, we scaled faster into new markets while maintaining consistent talent quality and performance.`,
      metrics: {
        funding: '₹150 Cr',
        growth: '52%',
        timeline: '14 months',
        employees: '200+'
      },
      achievements: [
        'Multi-location expansion',
        'Executive hiring success',
        'Improved workforce retention',
        'Delivery model optimisation'
      ]
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % successStories.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, successStories.length]);

  const nextSlide = () => { setCurrentSlide((prev) => (prev + 1) % successStories.length); setIsAutoPlaying(false); };
  const prevSlide = () => { setCurrentSlide((prev) => (prev - 1 + successStories.length) % successStories.length); setIsAutoPlaying(false); };
  const goToSlide = (index) => { setCurrentSlide(index); setIsAutoPlaying(false); };

  const currentStory = successStories[currentSlide];

  return (
    <section className="py-20 bg-white from-surface to-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <LazyLoad>
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-blue border border-[#1F74B5] rounded-full px-4 py-2 mb-6">
              <Icon name="Trophy" size={16} className="text-primary" />
              <span className="text-sm font-medium text-primary">Client Success</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Driving Business Impact
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              See how Fstone Technologies helps enterprises scale faster, hire smarter, and deliver better results.
            </p>
          </div>
        </LazyLoad>

       <LazyLoad delay={200}>
  <div className="relative bg-card border border-border rounded-3xl overflow-hidden shadow-brand-lg">
    <div className="grid lg:grid-cols-2 gap-0">

      {/* LEFT SECTION – SOLID BLUE */}
      <div className="p-8 lg:p-12 bg-[#1F74B5]">
        <div className="mb-6">
          <Image
            src={currentStory.logo}
            alt={currentStory.company}
            className="w-20 h-20 rounded-xl shadow-lg"
          />
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-bold text-yellow-50 mb-2">
            {currentStory.company}
          </h3>
          <p className="text-yellow-50/80 mb-4">
            {currentStory.industry}
          </p>
          <p className="text-yellow-50 italic leading-relaxed">
            "{currentStory.story}"
          </p>
        </div>

        <div className="flex items-center space-x-4 mb-6">
          <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-yellow-50/40">
            <Image
              src={currentStory.founderImage}
              alt={currentStory.founder}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <div className="font-semibold text-yellow-50">
              {currentStory.founder}
            </div>
            <div className="text-sm text-yellow-50/80">
              Client Representative
            </div>
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-yellow-50 mb-4">
            Key Outcomes
          </h4>
          <div className="grid grid-cols-2 gap-3">
            {currentStory.achievements.map((achievement, index) => (
              <div key={index} className="flex items-center space-x-2">
                <Icon name="CheckCircle" size={16} className="text-yellow-50" />
                <span className="text-sm text-yellow-50">
                  {achievement}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* RIGHT SECTION – BLUE GRADIENT */}
      <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 lg:p-12 flex flex-col justify-center">
        <h4 className="text-xl font-bold text-foreground mb-8 text-center">
          Business Impact
        </h4>

        <div className="grid grid-cols-2 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-success mb-2">
              {currentStory.metrics.funding}
            </div>
            <div className="text-sm text-muted-foreground">
              Annual Revenue
            </div>
          </div>

          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">
              {currentStory.metrics.growth}
            </div>
            <div className="text-sm text-muted-foreground">
              Efficiency Gain
            </div>
          </div>

          <div className="text-center">
            <div className="text-3xl font-bold text-secondary mb-2">
              {currentStory.metrics.timeline}
            </div>
            <div className="text-sm text-muted-foreground">
              Engagement Duration
            </div>
          </div>

          <div className="text-center">
            <div className="text-3xl font-bold text-accent mb-2">
              {currentStory.metrics.employees}
            </div>
            <div className="text-sm text-muted-foreground">
              Team Scaled
            </div>
          </div>
        </div>

        <div className="mt-8 p-4 bg-card rounded-xl">
          <div className="flex justify-between text-sm text-muted-foreground mb-2">
            <span>Engagement Success</span>
            <span>100%</span>
          </div>
          <div className="w-full bg-border rounded-full h-2">
            <div className="bg-gradient-to-r from-primary to-success h-2 rounded-full w-full"></div>
          </div>
        </div>
      </div>

    </div>
  </div>
</LazyLoad>


        <LazyLoad delay={700}>
          <div className="flex items-center justify-between mt-8">
            <Button variant="outline" size="sm" iconName="ChevronLeft" onClick={prevSlide} className="border-primary text-primary hover:bg-primary hover:text-primary-foreground" />
            <div className="flex space-x-2">
              {successStories.map((_, index) => (
                <button key={index} onClick={() => goToSlide(index)} className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-primary w-8' : 'bg-border hover:bg-muted-foreground'}`} />
              ))}
            </div>
            <Button variant="outline" size="sm" iconName="ChevronRight" onClick={nextSlide} className="border-primary text-primary hover:bg-primary hover:text-primary-foreground" />
          </div>
        </LazyLoad>
      </div>
    </section>
  );
};

export default SuccessCarousel;
