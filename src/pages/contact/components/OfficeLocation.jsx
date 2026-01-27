import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const OfficeLocation = () => {
  const [activeView, setActiveView] = useState('map');

  const officeDetails = {
    address: "fstone Technologies\nSuite 911 B Tower B4 Spaze IT Park, Sector 49, Gurugram, Haryana 122018, India",
    phone: "+91 98765 43210",
    email: "hello@fstone.com",
    hours: {
      weekdays: "Monday - Friday: 9:00 AM - 6:00 PM",
      saturday: "Saturday: Closed",
      sunday: "Sunday: Closed"
    }
  };

  const facilities = [
    
    {
      icon: 'Users',
      title: 'Meeting Rooms',
      description: '8 fully equipped conference rooms for consultations'
    },
    {
      icon: 'Wifi',
      title: 'High-Speed Internet',
      description: 'Dedicated fiber connection for seamless video calls'
    },
    {
      icon: 'Car',
      title: 'Parking Available',
      description: 'Complimentary parking for consultation visitors'
    },
    {
      icon: 'Coffee',
      title: 'Refreshments',
      description: 'Coffee bar and refreshment area for guests'
    },
    {
      icon: 'Shield',
      title: 'Security',
      description: '24/7 security with visitor management system'
    }
  ];

  const transportOptions = [
    {
      icon: 'Train',
      title: 'Metro Station',
      description: 'Huda city Metro Station - 20 minutes ',
      distance: '8.7km'
    },
    {
      icon: 'Bus',
      title: 'Bus Stop',
      description: 'Multiple bus routes available',
      distance: '200m'
    },
    {
      icon: 'Car',
      title: 'Taxi/Cab',
      description: 'Easy pickup/drop location',
      distance: 'Direct access'
    },
    {
      icon: 'Plane',
      title: 'Airport',
      description: 'Indira Gandhi International Airport',
      distance: '45 minutes'
    }
  ];

  return (
    <section className="py-16 bg-yellow-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Map and Location Info */}
          <div>
            <div className="bg-card rounded-2xl overflow-hidden shadow-brand">
              {/* Map View Toggle */}
              <div className="flex border-b border-border">
                <button
                  onClick={() => setActiveView('map')}
                  className={`flex-1 px-6 py-4 text-sm font-medium transition-brand ${
                    activeView === 'map' ?'bg-primary text-primary-foreground' :'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <Icon name="Map" size={16} className="inline mr-2" />
                  Map View
                </button>
                <button
                  onClick={() => setActiveView('street')}
                  className={`flex-1 px-6 py-4 text-sm font-medium transition-brand ${
                    activeView === 'street' ?'bg-primary text-primary-foreground' :'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <Icon name="Camera" size={16} className="inline mr-2" />
                  Street View
                </button>
              </div>

              {/* Map Container */}
              <div className="h-80 bg-muted relative">
                <iframe
                  width="100%"
                  height="100%"
                  loading="lazy"
                  title="fstone Office Location"
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps/place/Fstone+Technologies/@28.4133293,77.0416733,17z/data=!3m1!5s0x390d2283d6ee1097:0x328a4c68e4c6f888!4m14!1m7!3m6!1s0x390d229ac87cfdd5:0x69e8530883d800e0!2sFstone+Technologies!8m2!3d28.4133246!4d77.0442482!16s%2Fg%2F11g72gwc8v!3m5!1s0x390d229ac87cfdd5:0x69e8530883d800e0!8m2!3d28.4133246!4d77.0442482!16s%2Fg%2F11g72gwc8v?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D"
                  className="border-0"
        
                />
                <div className="absolute top-4 right-4">
                  <Button
                    variant="default"
                    size="sm"
                    iconName="ExternalLink"
                    iconPosition="left"
                    className="bg-white text-primary hover:bg-white/90 shadow-brand"
                  >
                    Open in Maps
                  </Button>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="mt-6 bg-card rounded-xl p-6 shadow-brand">
              <h3 className="text-xl font-semibold text-foreground mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Icon name="MapPin" size={20} className="text-primary mt-1" />
                  <div>
                    <p className="text-foreground font-medium">Address</p>
                    <p className="text-muted-foreground text-sm whitespace-pre-line">{officeDetails?.address}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Phone" size={20} className="text-success" />
                  <div>
                    <p className="text-foreground font-medium">Phone</p>
                    <p className="text-muted-foreground text-sm">{officeDetails?.phone}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Mail" size={20} className="text-secondary" />
                  <div>
                    <p className="text-foreground font-medium">Email</p>
                    <p className="text-muted-foreground text-sm">{officeDetails?.email}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Office Hours */}
            <div className="mt-6 bg-card rounded-xl p-6 shadow-brand">
              <h3 className="text-xl font-semibold text-foreground mb-4">Office Hours</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Monday - Friday</span>
                  <span className="text-foreground font-medium">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Saturday</span>
                  <span className="text-error font-medium">Closed</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Sunday</span>
                  <span className="text-error font-medium">Closed</span>
                </div>
              </div>
              <div className="mt-4 p-3 bg-success/10 rounded-lg">
                <div className="flex items-center space-x-2">
                  <Icon name="Clock" size={16} className="text-success" />
                  <span className="text-success text-sm font-medium">Currently Open</span>
                </div>
              </div>
            </div>
          </div>

          {/* Facilities and Transport */}
          <div className="space-y-8">
            {/* Office Facilities */}
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">Office Facilities</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {facilities?.map((facility, index) => (
                  <div key={index} className="bg-card rounded-xl p-4 shadow-brand border border-border">
                    <div className="flex items-start space-x-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon name={facility?.icon} size={20} className="text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">{facility?.title}</h4>
                        <p className="text-muted-foreground text-sm">{facility?.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Transportation */}
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">How to Reach</h3>
              <div className="space-y-4">
                {transportOptions?.map((transport, index) => (
                  <div key={index} className="bg-card rounded-xl p-4 shadow-brand border border-border">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center">
                          <Icon name={transport?.icon} size={20} className="text-secondary" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground">{transport?.title}</h4>
                          <p className="text-muted-foreground text-sm">{transport?.description}</p>
                        </div>
                      </div>
                      <span className="text-accent font-medium text-sm">{transport?.distance}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfficeLocation;