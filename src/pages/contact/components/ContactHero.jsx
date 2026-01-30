import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ContactHero = ({ onBookConsultation, onQuickInquiry }) => {
  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-teal-600 to-blue-800 pt-24 pb-16 overflow-hidden">

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border border-white/20 rounded-full"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 border border-white/20 rounded-full"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
              <span className="text-white/80 text-sm font-medium">Multi-Channel Engagement</span>
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Let's Build Your
              <span className="block text-accent">Success Story</span>
            </h1>

            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Connect with our experts through your preferred channel. From quick consultations to strategic planning sessions, we're here to accelerate your growth journey.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-accent mb-1">24hrs</div>
                <div className="text-sm text-white/80">Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent mb-1">500+</div>
                <div className="text-sm text-white/80">Consultations</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent mb-1">95%</div>
                <div className="text-sm text-white/80">Success Rate</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={onQuickInquiry}
                className="group relative overflow-hidden inline-flex items-center justify-center bg-black text-white px-14 py-5 rounded-full font-semibold transition-all duration-300 hover:bg-accent hover:shadow-lg min-w-[320px]"
              >
                {/* SLIDING ICON */}
                <span className="absolute left-4 w-9 h-9 rounded-full bg-blue-400 text-black flex items-center justify-center transition-all duration-300 group-hover:left-[calc(100%-3rem)]">
                  →
                </span>

                {/* TEXT */}
                <span className="relative z-10 transition-all duration-300">
                  Quick Inquiry
                </span>
              </button>
            </div>

          </div>

          {/* Contact Cards */}
          <div className="space-y-4">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center">
                  <Icon name="Phone" size={24} color="white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Direct Call</h3>
                  <p className="text-white/80 text-sm">Immediate assistance</p>
                </div>
              </div>
              <p className="text-white/90 text-lg font-medium">+1 732 746 0010</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center">
                  <Icon name="Mail" size={24} color="white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Email Support</h3>
                  <p className="text-white/80 text-sm">Detailed inquiries</p>
                </div>
              </div>
              <p className="text-white/90 text-lg font-medium">info@fstonetechnologies.com</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <div className="flex items-center space-x-4 mb-4">

                {/* Clickable Icon */}
                <a
                  href="https://www.google.com/maps/@40.4369499,-74.5371851,3a,75y,201.51h,90t/data=!3m7!1e1!3m5!1s-ebAemgUdW-qBO0gxCRCwg!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D0%26panoid%3D-ebAemgUdW-qBO0gxCRCwg%26yaw%3D201.50854!7i16384!8i8192?entry=ttu&g_ep=EgoyMDI2MDEyOC4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer hover:scale-105 transition-transform"
                  title="Open in Google Maps"
                >
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                    <Icon name="MapPin" size={24} color="white" />
                  </div>
                </a>

                <div>
                  <h3 className="text-white font-semibold">Visit Office</h3>
                  <p className="text-white/80 text-sm">For more inquiries </p>
                </div>
              </div>

              <p className="text-white/90 text-sm">New Jersey 08824</p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;