import React from 'react';
import Icon from '../AppIcon';

const Footer = () => {
  return (
    <footer className="bg-[#82c7fc] text-black py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* MAIN GRID */}
        <div className="grid lg:grid-cols-5 gap-8 items-start">

          {/* Company Info */}
          <div className="lg:col-span-2">
            <img
              src="/fstonelogo.png"
              alt="Fstone Technologies"
              className="h-44 w-auto object-contain"
            />

            <p className="text-black/80 mb-6 max-w-md">
              Where trust is non-negotiable. Empowering businesses
              with 20+ years of expertise in workforce solutions
              and talent management.
            </p>

            <div className="flex space-x-4">
  {[
    {
      name: 'Linkedin',
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/company/fstone-technologies/posts/?feedView=all&viewAsMember=true',
      hoverColor: 'group-hover:text-[#0A66C2]', 
    },
    {
      name: 'Twitter',
      label: 'X (Twitter)',
      url: 'https://x.com/fstonetech',
      hoverColor: 'group-hover:text-black', 
    },
    {
      name: 'Facebook',
      label: 'Facebook',
      url: 'https://www.facebook.com/yourpage',
      hoverColor: 'group-hover:text-[#1877F2]', 
    },
  ].map((item) => (
    <a
      key={item.label}
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={item.label}
      className="
        w-10 h-10
        bg-black/10
        rounded-lg
        flex items-center justify-center
        transition-all duration-300
        hover:bg-white
        group
      "
    >
      <Icon
        name={item.name}
        size={20}
        className={`
          text-black
          transition-colors duration-300
          ${item.hoverColor}
        `}
      />
    </a>
  ))}
</div>

          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="/homepage" className="text-black/70 hover:text-accent">Home</a></li>
              <li><a href="/service" className="text-black/70 hover:text-accent">Services</a></li>
              <li><a href="/about" className="text-black/70 hover:text-accent">About Us</a></li>
              <li><a href="/careers" className="text-black/70 hover:text-accent">Careers</a></li>
              <li><a href="/contact" className="text-black/70 hover:text-accent">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>

            <div className="space-y-4">

              <div className="flex items-center space-x-3">
                <Icon name="Phone" size={18} />
                <p className="text-black/80">+91 1234567890</p>
              </div>

              <div className="flex items-center space-x-3">
                <Icon name="Mail" size={18} />
                <p className="text-black/80">hello@fstone.com</p>
              </div>

              <div className="flex items-center space-x-3">
                <Icon name="Clock" size={18} />
                <p className="text-black/80 text-sm">
                  Mon–Fri: 9:00AM – 6:00PM<br />
                  Sat–Sun: Closed
                </p>
              </div>
            </div>
          </div>

          {/* Office Locations */}
          <div>
  <h4 className="text-lg font-semibold mb-6">Office Locations</h4>

  <div className="space-y-4 text-black/80 text-sm">
    <p>
      <strong>USA – Pennsylvania</strong><br />
      2003 S Easton Rd, Suite 308<br />
      Doylestown, PA 18901
    </p>

    <p>
      <strong>USA – New Jersey</strong><br />
      3084, Congressional Office Park, Route 27<br />
      Suite #3, Kendall Park<br />
      New Jersey 08824
    </p>

    <p>
      <strong>India – Gurugram</strong><br />
      Suite 911 B, Tower B4<br />
      Spaze IT Park, Sector 49<br />
      Gurugram, Haryana 122018
    </p>
  </div>
</div>


        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-black/20 mt-12 pt-8 text-center">
          <p className="text-black/70 text-sm">
            © {new Date().getFullYear()} Fstone Technologies. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
