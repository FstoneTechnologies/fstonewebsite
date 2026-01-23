import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';

const ConsultationBooking = () => {
  const [selectedConsultation, setSelectedConsultation] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
const consultationTypes = [
  {
    value: 'quick',
    label: 'Quick Workforce Assessment (30 min)',
    description: 'Initial discussion to understand your hiring and workforce needs',
    price: 'Free',
    features: ['Hiring needs overview', 'Workforce challenges review', 'Initial recommendations']
  },
  {
    value: 'comprehensive',
    label: 'Comprehensive Workforce Review (90 min)',
    description: 'Detailed analysis of workforce, delivery, and talent strategy',
    price: '₹5,000',
    features: ['Workforce gap analysis', 'Hiring and delivery roadmap', 'Talent sourcing strategy', 'Follow-up discussion']
  },
  {
    value: 'strategic',
    label: 'Strategic Workforce Planning (Half Day)',
    description: 'In-depth planning for scalable workforce and delivery models',
    price: '₹15,000',
    features: ['Workforce planning workshop', 'Scaling and delivery strategy', 'Implementation roadmap', 'Stakeholder alignment', '30-day advisory support']
  }
];


  const timeSlots = [
    { value: '09:00', label: '9:00 AM' },
    { value: '10:30', label: '10:30 AM' },
    { value: '12:00', label: '12:00 PM' },
    { value: '14:00', label: '2:00 PM' },
    { value: '15:30', label: '3:30 PM' },
    { value: '17:00', label: '5:00 PM' }
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e?.target?.name]: e?.target?.value
    });
  };

  const handleSubmit = (e) => {
    e?.preventDefault();
    console.log('Consultation booking:', {
      type: selectedConsultation,
      date: selectedDate,
      time: selectedTime,
      ...formData
    });
    alert('Consultation booked successfully! We will send you a confirmation email shortly.');
  };

  const selectedType = consultationTypes?.find(type => type?.value === selectedConsultation);

  return (
    <section className="py-16 bg-yellow-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Book Your Consultation
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose the consultation type that best fits your needs and schedule a session with our experts.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Consultation Types */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-semibold text-foreground mb-6">Choose Consultation Type</h3>
            <div className="space-y-4">
              {consultationTypes?.map((type) => (
                <div
                  key={type?.value}
                  className={`p-6 rounded-xl border-2 cursor-pointer transition-brand ${
                    selectedConsultation === type?.value
                      ? 'border-primary bg-primary/5' :'border-border bg-card hover:border-primary/50'
                  }`}
                  onClick={() => setSelectedConsultation(type?.value)}
                >
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="font-semibold text-foreground">{type?.label}</h4>
                    <span className="text-accent font-bold">{type?.price}</span>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4">{type?.description}</p>
                  <ul className="space-y-2">
                    {type?.features?.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-muted-foreground">
                        <Icon name="Check" size={16} className="text-success mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Booking Form */}
          <div className="lg:col-span-2">
            <div className="bg-card rounded-2xl p-8 shadow-brand">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <Input
                    label="Full Name"
                    type="text"
                    name="name"
                    placeholder="Enter your full name"
                    value={formData?.name}
                    onChange={handleInputChange}
                    required
                  />
                  <Input
                    label="Email Address"
                    type="email"
                    name="email"
                    placeholder="your.email@company.com"
                    value={formData?.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <Input
                    label="Phone Number"
                    type="tel"
                    name="phone"
                    placeholder="+91 98765 43210"
                    value={formData?.phone}
                    onChange={handleInputChange}
                    required
                  />
                  <Input
                    label="Company Name"
                    type="text"
                    name="company"
                    placeholder="Your company name"
                    value={formData?.company}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <Input
                    label="Preferred Date"
                    type="date"
                    name="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e?.target?.value)}
                    min={new Date()?.toISOString()?.split('T')?.[0]}
                    required
                  />
                  <Select
                    label="Preferred Time"
                    options={timeSlots}
                    value={selectedTime}
                    onChange={setSelectedTime}
                    placeholder="Select time slot"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Additional Message
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent resize-none"
                    placeholder="Tell us about your business challenges or specific areas you'd like to discuss..."
                    value={formData?.message}
                    onChange={handleInputChange}
                  />
                </div>

                {selectedType && (
                  <div className="bg-surface rounded-lg p-6">
                    <h4 className="font-semibold text-foreground mb-3">Consultation Summary</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Type:</span>
                        <span className="text-foreground">{selectedType?.label}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Price:</span>
                        <span className="text-accent font-semibold">{selectedType?.price}</span>
                      </div>
                      {selectedDate && (
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Date:</span>
                          <span className="text-foreground">{new Date(selectedDate)?.toLocaleDateString()}</span>
                        </div>
                      )}
                      {selectedTime && (
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Time:</span>
                          <span className="text-foreground">{timeSlots?.find(slot => slot?.value === selectedTime)?.label}</span>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                <Button
                  type="submit"
                  variant="default"
                  size="lg"
                  fullWidth
                  iconName="Calendar"
                  iconPosition="left"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground"
                  disabled={!selectedConsultation || !selectedDate || !selectedTime}
                >
                  Book Consultation
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationBooking;