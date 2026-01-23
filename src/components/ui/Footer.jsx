// import React, { useState, useEffect } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import Icon from '../AppIcon';
// import Button from './Button';

// // adjust the path if needed

// const Footer = () => {
//   return (
//     <footer className="bg-[#a9d5f6] text-primary-foreground py-16">
//       <div className="max-w-7xl mx-auto px-6 lg:px-8">
//         <div className="grid lg:grid-cols-4 gap-8">
//           {/* Company Info */}
//           <div className="lg:col-span-2">
//             {/* <div className="flex items-center space-x-3 mb-6">
//               <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center">
//                 <span className="text-white font-bold text-xl">F</span>
//               </div>
//               <div>
//                 <h3 className="text-2xl font-bold">FSTONE TECHNOLOGIES</h3>
//                 <p className="text-primary-foreground/80">Focus on sucess</p>
//               </div>
//             </div> */}
//              <img
//               src="/fstonelogo.png"
//               alt="Fstone Technologies"
//               className="h-44 w-auto object-contain"
//             />
//             <p className="text-primary-foreground/90 mb-6 max-w-md">
//               Where trust is non-negotiable. Empowering businesses with 25+ years of expertise in workforce solutions and talent management.
//             </p>
//             <div className="flex space-x-4">
//               <a
//                 href="#"
//                 className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary-foreground/20 transition-brand"
//               >
//                 <Icon name="Linkedin" size={20} />
//               </a>
//               <a
//                 href="#"
//                 className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary-foreground/20 transition-brand"
//               >
//                 <Icon name="Twitter" size={20} />
//               </a>
//               <a
//                 href="#"
//                 className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary-foreground/20 transition-brand"
//               >
//                 <Icon name="Facebook" size={20} />
//               </a>
//               <a
//                 href="#"
//                 className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary-foreground/20 transition-brand"
//               >
//                 <Icon name="Instagram" size={20} />
//               </a>
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
//             <ul className="space-y-3">
//               <li>
//                 <a href="/homepage" className="text-primary-foreground/80 hover:text-primary-foreground transition-brand">Home</a>
//               </li>
//               <li>
//                 <a href="/service" className="text-primary-foreground/80 hover:text-primary-foreground transition-brand">Services</a>
//               </li>
//               <li>
//                 <a href="/about" className="text-primary-foreground/80 hover:text-primary-foreground transition-brand">About Us</a>
//               </li>
//               <li>
//                 <a href="/contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-brand">Contact Us</a>
//               </li>
//               {/* <li>
//                 <a href="#consultation-booking" className="text-primary-foreground/80 hover:text-primary-foreground transition-brand">Book Consultation</a>
//               </li> */}
//             </ul>
//           </div>

//           {/* Contact Info */}
//           <div>
//             <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
//             <div className="space-y-4">
//               <div className="flex items-start space-x-3">
//                 <Icon name="MapPin" size={18} className="text-accent mt-1" />
//                 <div>
//                   <p className="text-primary-foreground/90 text-sm">
//                    Suite 911 B Tower B4 Spaze IT Park Fstone Technologies<br />
//                    Sector 49<br />
//                     Gurugram, Haryana 122018
//                   </p>
//                 </div>
//               </div>
//               <div className="flex items-center space-x-3">
//                 <Icon name="Phone" size={18} className="text-accent" />
//                 <p className="text-primary-foreground/90">+91 1234567890</p>
//               </div>
//               <div className="flex items-center space-x-3">
//                 <Icon name="Mail" size={18} className="text-accent" />
//                 <p className="text-primary-foreground/90">hello@fstone.com</p>
//               </div>
//               <div className="flex items-center space-x-3">
//                 <Icon name="Clock" size={18} className="text-accent" />
//                 <p className="text-primary-foreground/90 text-sm">
//                   Mon-Fri: 9:00 AM - 6:00 PM<br />
//                   Sat-Sun: Closed
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Bottom Bar */}
//         <div className="border-t border-primary-foreground/20 mt-12 pt-8 flex flex-col md:flex-row justify-center items-center">
//           <p className="text-primary-foreground/80 text-sm">
//             © {new Date().getFullYear()} Fstone Technologies. All rights reserved.
//           </p>
//           {/* <div className="flex space-x-6 mt-4 md:mt-0">
//             <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition-brand">Privacy Policy</a>
//             <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition-brand">Terms of Service</a>
//             <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition-brand">Cookie Policy</a>
//           </div> */}
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from 'react';
import Icon from '../AppIcon';

const Footer = () => {
  return (
    <footer className="bg-[#82c7fc] text-black py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* MAIN GRID */}
        <div className="grid lg:grid-cols-4 gap-8 items-start">

          {/* Company Info */}
          <div className="lg:col-span-2">
            <img
              src="/fstonelogo.png"
              alt="Fstone Technologies"
              className="h-44 w-auto object-contain"
            />

            <p className="text-black/80 mb-6 max-w-md">
              Where trust is non-negotiable. Empowering businesses with 25+ years
              of expertise in workforce solutions and talent management.
            </p>

            <div className="flex space-x-4">
  {[
    { name: 'Linkedin', url: 'https://www.linkedin.com/company/fstone-technologies/posts/?feedView=all&viewAsMember=true' },
    { name: 'Twitter', url: 'https://x.com/fstonetech' },
    { name: 'Facebook', url: 'https://www.facebook.com/yourpage' },
    { name: 'Instagram', url: 'https://www.instagram.com/yourhandle' },
  ].map((item) => (
    <a
      key={item.name}
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 bg-black/10 rounded-lg flex items-center justify-center hover:bg-black/20 transition-brand"
    >
      <Icon name={item.name} size={20} className="text-black" />
    </a>
  ))}
</div>

          </div>

          {/* Quick Links */}
          <div className="mt-2">
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: 'Home', link: '/homepage' },
                { name: 'Services', link: '/service' },
                { name: 'About Us', link: '/about' },
                { name: 'Contact Us', link: '/contact' },
              ].map((item) => (
                <li key={item.name}>
                  <a
                    href={item.link}
                    className="text-black/70 hover:text-black transition-brand"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="mt-2">
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4">

              <div className="flex items-start space-x-3">
                <Icon name="MapPin" size={25} className="text-black mt-1" />
                <p className="text-black/80 text-sm">
                  Suite 911 B Tower B4 Spaze IT Park Fstone Technologies
                  <br />
                  Sector 49
                  <br />
                  Gurugram, Haryana 122018
                </p>
              </div>

              <div className="flex items-center space-x-3">
                <Icon name="Phone" size={18} className="text-black" />
                <p className="text-black/80">+91 1234567890</p>
              </div>

              <div className="flex items-center space-x-3">
                <Icon name="Mail" size={18} className="text-black" />
                <p className="text-black/80">hello@fstone.com</p>
              </div>

              <div className="flex items-center space-x-3">
                <Icon name="Clock" size={18} className="text-black" />
                <p className="text-black/80 text-sm">
                  Mon-Fri: 9:00 AM - 6:00 PM
                  <br />
                  Sat-Sun: Closed
                </p>
              </div>

            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-black/20 mt-12 pt-8 flex justify-center">
          <p className="text-black/70 text-sm text-center">
            © {new Date().getFullYear()} Fstone Technologies. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
