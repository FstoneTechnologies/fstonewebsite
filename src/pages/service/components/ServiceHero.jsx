// import React from 'react';
// import Icon from '../../../components/AppIcon';
// import Button from '../../../components/ui/Button';
// import { Link } from 'react-router-dom';
// const ServiceHero = () => {
//   return (
//     <section className="relative bg-gradient-to-br from-primary via-secondary to-primary/90 text-white overflow-hidden">
//       {/* Background Pattern */}
//       <div className="absolute inset-0 opacity-10">
//         <div className="absolute top-20 left-10 w-32 h-32 border border-white/20 rounded-full"></div>
//         <div className="absolute top-40 right-20 w-24 h-24 border border-white/20 rounded-full"></div>
//         <div className="absolute bottom-20 left-1/4 w-16 h-16 border border-white/20 rounded-full"></div>
//       </div>

//       <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
//         <div className="grid lg:grid-cols-2 gap-12 items-center">
//           {/* Content */}
//           <div className="space-y-8">
//             <div className="space-y-4">
//               <div className="flex items-center space-x-3">
//                 <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
//                   <Icon name="Briefcase" size={24} />
//                 </div>
//                 <span className="text-accent font-medium">Comprehensive Growth Ecosystem</span>
//               </div>
              
//               <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
//                 Services That
//                 <span className="block text-accent">Transform Businesses</span>
//               </h1>
              
//               <p className="text-xl text-white/90 leading-relaxed">
//                 From startup incubation to enterprise scaling, our comprehensive ecosystem provides everything you need to build, grow, and succeed in today's competitive landscape.
//               </p>
//             </div>

//             <div className="flex flex-col sm:flex-row gap-4">
//               <Button
//                 variant="default"
//                 size="lg"
//                 iconName="ArrowRight"
//                 iconPosition="right"
//                 className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-cta"
//               >
//                 Explore Programs
//               </Button>
//               <Link to="/contact">
//               <Button
//                 variant="outline"
//                 size="lg"
//                 iconName="Calendar"
//                 iconPosition="left"
//                 className="border-white text-white hover:bg-white hover:text-primary"
//               >
//                 Schedule Consultation
//               </Button>
//               </Link>
//             </div>

//             {/* Trust Indicators */}
//             <div className="flex items-center space-x-8 pt-8 border-t border-white/20">
//               <div className="text-center">
//                 <div className="text-2xl font-bold">500+</div>
//                 <div className="text-sm text-white/80">Startups Incubated</div>
//               </div>
//               <div className="text-center">
//                 <div className="text-2xl font-bold">25+</div>
//                 <div className="text-sm text-white/80">Years Experience</div>
//               </div>
//               <div className="text-center">
//                 <div className="text-2xl font-bold">95%</div>
//                 <div className="text-sm text-white/80">Success Rate</div>
//               </div>
//             </div>
//           </div>

//           {/* Visual Element */}
//           <div className="relative">
//             <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
//               <div className="space-y-6">
//                 <div className="flex items-center justify-between p-4 bg-white/10 rounded-lg">
//                   <div className="flex items-center space-x-3">
//                     <Icon name="Rocket" size={20} />
//                     <span className="font-medium">Incubator Program</span>
//                   </div>
//                   <Icon name="ChevronRight" size={16} />
//                 </div>
                
//                 <div className="flex items-center justify-between p-4 bg-white/10 rounded-lg">
//                   <div className="flex items-center space-x-3">
//                     <Icon name="Scale" size={20} />
//                     <span className="font-medium">Legal Services</span>
//                   </div>
//                   <Icon name="ChevronRight" size={16} />
//                 </div>
                
//                 <div className="flex items-center justify-between p-4 bg-white/10 rounded-lg">
//                   <div className="flex items-center space-x-3">
//                     <Icon name="Users" size={20} />
//                     <span className="font-medium">Mentorship</span>
//                   </div>
//                   <Icon name="ChevronRight" size={16} />
//                 </div>
                
//                 <div className="flex items-center justify-between p-4 bg-white/10 rounded-lg">
//                   <div className="flex items-center space-x-3">
//                     <Icon name="Building" size={20} />
//                     <span className="font-medium">Government Sector</span>
//                   </div>
//                   <Icon name="ChevronRight" size={16} />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ServiceHero;




import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import { Link } from 'react-router-dom';

const ServiceHero = () => {
  return (
    <section className="relative bg-gradient-to-r from-[#1E3A8A] via-[#0891B2] to-[#0D9488] text-white overflow-hidden">

      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border border-white/20 rounded-full"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 border border-white/20 rounded-full"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                  <Icon name="Briefcase" size={24} />
                </div>
                <span className="text-accent font-medium">End-to-End Workforce Solutions</span>
              </div>

              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Services That
                <span className="block text-accent">Power Business Growth</span>
              </h1>

              <p className="text-xl text-white/90 leading-relaxed">
                From staffing and talent advisory to managed delivery and workforce transformation, we help organisations scale efficiently and deliver with confidence.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="default"
                size="lg"
                iconName="ArrowRight"
                iconPosition="right"
                className="group inline-flex items-center space-x-2 bg-[#1F74B5] hover:bg-orange-400 text-white font-semibold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Explore Services
              </Button>
              <Link to="/contact">
                <Button
                  variant="outline"
                  size="lg"
                  iconName="Calendar"
                  iconPosition="left"
                  className="group inline-flex items-center space-x-2 border-2 border-teal-400 text-teal-300 hover:bg-teal-400 hover:text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300"
                >
                  Schedule Consultation
                </Button>
              </Link>
            </div>

            <div className="flex items-center space-x-8 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="text-2xl font-bold">300+</div>
                <div className="text-sm text-white/80">Clients Served</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">25+</div>
                <div className="text-sm text-white/80">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">98%</div>
                <div className="text-sm text-white/80">Client Satisfaction</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="space-y-6">
                <div className="flex items-center justify-between p-4 bg-white/10 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Icon name="Users" size={20} />
                    <span className="font-medium">Staffing & Recruiting</span>
                  </div>
                  <Icon name="ChevronRight" size={16} />
                </div>

                <div className="flex items-center justify-between p-4 bg-white/10 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Icon name="Layers" size={20} />
                    <span className="font-medium">Managed Delivery</span>
                  </div>
                  <Icon name="ChevronRight" size={16} />
                </div>

                <div className="flex items-center justify-between p-4 bg-white/10 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Icon name="Search" size={20} />
                    <span className="font-medium">Executive Search</span>
                  </div>
                  <Icon name="ChevronRight" size={16} />
                </div>

                <div className="flex items-center justify-between p-4 bg-white/10 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Icon name="TrendingUp" size={20} />
                    <span className="font-medium">Workforce Consulting</span>
                  </div>
                  <Icon name="ChevronRight" size={16} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;
