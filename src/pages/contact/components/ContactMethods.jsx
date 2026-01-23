import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';

const ContactMethods = () => {
  const [activeTab, setActiveTab] = useState('general');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    service: '',
    message: '',
    urgency: ''
  });

  const serviceOptions = [
    { value: 'incubator', label: 'Business Incubator Program' },
    { value: 'legal', label: 'Legal & Compliance Services' },
    { value: 'mentorship', label: 'Mentorship Program' },
    { value: 'government', label: 'Government Sector Introduction' },
    { value: 'reattire', label: 'ReAttire Retirement Program' },
    { value: 'scaling', label: 'Rapid Scaling Consultation' },
    { value: 'other', label: 'Other Services' }
  ];

  const urgencyOptions = [
    { value: 'low', label: 'General Inquiry (3-5 days)' },
    { value: 'medium', label: 'Business Planning (1-2 days)' },
    { value: 'high', label: 'Urgent Consultation (24 hours)' },
    { value: 'emergency', label: 'Emergency Legal Issue (Immediate)' }
  ];

  const contactMethods = [
    {
      id: 'phone',
      icon: 'Phone',
      title: 'Phone Support',
      description: 'Direct line to our experts',
      details: '+91 98765 43210',
      hours: 'Mon-Fri: 9:00 AM - 6:00 PM',
      response: 'Immediate',
      color: 'bg-success'
    },
    {
      id: 'email',
      icon: 'Mail',
      title: 'Email Support',
      description: 'Detailed written communication',
      details: 'hello@fstone.com',
      hours: '24/7 Monitoring',
      response: 'Within 24 hours',
      color: 'bg-primary'
    },
    {
      id: 'whatsapp',
      icon: 'MessageCircle',
      title: 'WhatsApp Business',
      description: 'Quick messages and updates',
      details: '+91 98765 43210',
      hours: 'Mon-Fri: 9:00 AM - 8:00 PM',
      response: 'Within 2 hours',
      color: 'bg-success'
    },
    {
      id: 'linkedin',
      icon: 'Linkedin',
      title: 'LinkedIn Connect',
      description: 'Professional networking',
      details: '@fastone technologies',
      hours: 'Business Hours',
      response: 'Within 48 hours',
      color: 'bg-secondary'
    }
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e?.target?.name]: e?.target?.value
    });
  };

  const handleSubmit = (e) => {
    e?.preventDefault();
    console.log('Contact form submission:', formData);
    alert('Thank you for your inquiry! We will get back to you within 24 hours.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      service: '',
      message: '',
      urgency: ''
    });
  };

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Multiple Ways to Connect
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose your preferred communication method. We're available across multiple channels to ensure you get the support you need.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Methods */}
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-8">Direct Contact Options</h3>
            <div className="space-y-6">
              {contactMethods?.map((method) => (
                <div key={method?.id} className="bg-card rounded-xl p-6 shadow-brand border border-border">
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 ${method?.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <Icon name={method?.icon} size={24} color="white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-foreground mb-2">{method?.title}</h4>
                      <p className="text-muted-foreground mb-3">{method?.description}</p>
                      <div className="space-y-2">
                        <div className="flex items-center text-sm">
                          <Icon name="ExternalLink" size={16} className="text-accent mr-2" />
                          <span className="text-foreground font-medium">{method?.details}</span>
                        </div>
                        <div className="flex items-center text-sm">
                          <Icon name="Clock" size={16} className="text-muted-foreground mr-2" />
                          <span className="text-muted-foreground">{method?.hours}</span>
                        </div>
                        <div className="flex items-center text-sm">
                          <Icon name="Zap" size={16} className="text-success mr-2" />
                          <span className="text-success">{method?.response}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Emergency Contact */}
            {/* <div className="mt-8 bg-error/5 border border-error/20 rounded-xl p-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-error rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon name="AlertTriangle" size={24} color="white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-error mb-2">Emergency Legal Consultation</h4>
                  <p className="text-muted-foreground mb-3">
                    For urgent compliance issues or regulatory challenges requiring immediate attention.
                  </p>
                  <Button
                    variant="destructive"
                    size="sm"
                    iconName="Phone"
                    iconPosition="left"
                  >
                    Emergency Hotline: +91 98765 43211
                  </Button>
                </div>
              </div>
            </div> */}
          </div>

          {/* Contact Form */}
          <div>
            <div className="bg-card rounded-2xl p-8 shadow-brand-lg">
              <h3 className="text-2xl font-semibold text-foreground mb-6">Send Us a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
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

                <div className="grid md:grid-cols-2 gap-4">
                  <Input
                    label="Phone Number"
                    type="tel"
                    name="phone"
                    placeholder="+91 98765 43210"
                    value={formData?.phone}
                    onChange={handleInputChange}
                  />
                  <Select
                    label="Service Interest"
                    options={serviceOptions}
                    value={formData?.service}
                    onChange={(value) => setFormData({...formData, service: value})}
                    placeholder="Select service"
                    required
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <Input
                    label="Subject"
                    type="text"
                    name="subject"
                    placeholder="Brief subject line"
                    value={formData?.subject}
                    onChange={handleInputChange}
                    required
                  />
                  <Select
                    label="Urgency Level"
                    options={urgencyOptions}
                    value={formData?.urgency}
                    onChange={(value) => setFormData({...formData, urgency: value})}
                    placeholder="Select urgency"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message <span className="text-error">*</span>
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent resize-none"
                    placeholder="Please provide details about your inquiry, business challenges, or specific requirements..."
                    value={formData?.message}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="bg-surface rounded-lg p-4">
                  <div className="flex items-start space-x-3">
                    <Icon name="Info" size={20} className="text-primary mt-0.5" />
                    <div className="text-sm text-muted-foreground">
                      <p className="font-medium text-foreground mb-1">Response Time Commitment:</p>
                      <ul className="space-y-1">
                        <li>• General inquiries: Within 24 hours</li>
                        <li>• Business consultations: Within 12 hours</li>
                        <li>• Emergency legal issues: Within 2 hours</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <Button
                  type="submit"
                  variant="default"
                  size="lg"
                  fullWidth
                  iconName="Send"
                  iconPosition="right"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMethods;