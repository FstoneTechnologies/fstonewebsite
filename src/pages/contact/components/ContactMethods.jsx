import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';

const ContactMethods = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    service: '',
    message: ''
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

  const contactMethods = [
    {
      id: 'phone',
      icon: 'Phone',
      title: 'Phone Support',
      description: 'Direct line to our experts',
      details: '+91 98765 43210',
      hours: 'Mon–Fri: 9:00 AM – 6:00 PM',
      response: 'Immediate',
      color: 'bg-green-600'
    },
    {
      id: 'email',
      icon: 'Mail',
      title: 'Email Support',
      description: 'Detailed written communication',
      details: 'hello@fstone.com',
      hours: '24/7 Monitoring',
      response: 'Within 24 hours',
      color: 'bg-blue-600'
    },
    {
      id: 'linkedin',
      icon: 'Linkedin',
      title: 'LinkedIn Connect',
      description: 'Professional networking',
      details: '@fstone technologies',
      hours: 'Business Hours',
      response: 'Within 48 hours',
      color: 'bg-orange-500'
    }
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you! We will contact you shortly.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      service: '',
      message: ''
    });
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">
            Multiple Ways to Connect
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Choose your preferred communication method. We’re available across multiple channels to support you.
          </p>
        </div>

        {/* Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-stretch">

          {/* LEFT COLUMN */}
          <div className="h-full flex flex-col">

            <div className="space-y-6 flex-1">
              {contactMethods.map((method) => (
                <div
                  key={method.id}
                  className="bg-[#0B8FA6] rounded-2xl p-6 border border-[#0B8FA6] shadow-sm hover:shadow-md transition"
                >
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 ${method.color} rounded-xl flex items-center justify-center`}>
                      <Icon name={method.icon} size={22} color="white" />
                    </div>

                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-white mb-1">
                        {method.title}
                      </h4>
                      <p className="text-white mb-3">{method.description}</p>

                      <div className="space-y-2 text-sm">
                        <div className="flex items-center">
                          <Icon name="ExternalLink" size={16} className="text-white mr-2" />
                          <span className="font-medium text-white">
                            {method.details}
                          </span>
                        </div>
                        <div className="flex items-center">
                          <Icon name="Clock" size={16} className="text-white mr-2" />
                          <span className="text-white">{method.hours}</span>
                        </div>
                        <div className="flex items-center">
                          <Icon name="Zap" size={16} className="text-white mr-2" />
                          <span className="text-white font-medium">{method.response}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="h-full flex flex-col">
            <div className="bg-[#0B8FA6] rounded-2xl p-8 border border-[#0B8FA6] shadow-md flex-1 flex flex-col">

              <h3 className="text-2xl font-semibold text-white mb-3">
                Send Us a Message
              </h3>

              <form
                onSubmit={handleSubmit}
                className="space-y-5 flex-1 flex flex-col "
              >
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      Full Name <span className="text-red-400">*</span>
                    </label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      required
                      className="bg-white text-black"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      Email Address <span className="text-red-400">*</span>
                    </label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@company.com"
                      required
                      className="bg-white text-black"
                    />
                  </div>
                </div>


                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      Phone Number
                    </label>
                    <Input
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+91 98765 43210"
                      className="bg-white text-black"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      Service Interest <span className="text-red-400">*</span>
                    </label>
                    <Select
                      options={serviceOptions}
                      value={formData.service}
                      onChange={(value) =>
                        setFormData({ ...formData, service: value })
                      }
                      placeholder="Select service"
                      required
                      
                    />
                  </div>
                </div>


                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    Subject <span className="text-red-500">*</span>
                  </label>

                  <Input
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Brief subject line"
                    required
                    className="bg-white text-black"
                  />
                </div>


                <div>
                  <label className="block text-sm font-medium text-white mb-1">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 border border-white rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none resize-none"
                    placeholder="Please provide details about your inquiry..."
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  fullWidth
                  iconName="Send"
                  iconPosition="right"
                  className="mt-auto bg-[#1F74B5] hover:bg-accent text-white"
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
