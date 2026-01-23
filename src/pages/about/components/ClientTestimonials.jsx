import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import { Link } from 'react-router-dom';
const ClientTestimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Ananya Sharma",
      role: "Founder & CEO",
      company: "HealthTech Solutions",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      testimonial: `Fstone Technologies helped us scale our operations and build high-performing teams in record time. Their structured workforce approach, delivery expertise, and commitment to quality made a real difference to our growth. ‘Trust is non-negotiable’ isn’t just a statement — it’s reflected in every interaction and every result they deliver.`,
      results: {
        funding: "₹50Cr",
        growth: "300%",
        timeline: "18 months"
      },
      industry: "HealthTech",
      videoAvailable: true
    },
    {
      id: 2,
      name: "Rajesh Patel",
      role: "Co-founder",
      company: "EduLearn Platform",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      testimonial: `What sets Fstone Technologies apart is their holistic approach. They didn’t just provide staffing or delivery support — they became our strategic partners. From helping us design our workforce model to scaling our teams and operations, they’ve been instrumental in our journey from a small team to a large, high-performing organisation.`,
      results: {
        funding: "₹25Cr",
        growth: "10000%",
        timeline: "24 months"
      },
      industry: "EdTech",
      videoAvailable: true
    },
    {
      id: 3,
      name: "Priya Menon",
      role: "Founder",
      company: "GreenTech Innovations",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      testimonial: `The team at Fstone Technologies understood our vision for sustainable technology from day one. Their expertise in government partnerships helped us secure crucial environmental clearances and policy support. Today, our green energy solutions are deployed across 12 states, and we're on track for international expansion.`,
      results: {
        funding: "₹75Cr",
        growth: "450%",
        timeline: "30 months"
      },
      industry: "CleanTech",
      videoAvailable: false
    },
    {
      id: 4,
      name: "Arjun Singh",
      role: "CEO",
      company: "FinSecure Technologies",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      testimonial: `Navigating fintech regulations seemed impossible until we partnered with Fstone Technologies. Their deep understanding of financial compliance and their relationships with regulatory bodies made our licensing process smooth. We've now processed over ₹1000 crores in transactions with zero compliance issues.`,
      results: {
        funding: "₹40Cr",
        growth: "600%",
        timeline: "20 months"
      },
      industry: "FinTech",
      videoAvailable: true
    },
    {
      id: 5,
      name: "Kavya Reddy",
      role: "Founder",
      company: "AgriTech Solutions",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      testimonial: `Fstone Technologies’ domain expertise and delivery support were game-changing for our agritech business. They helped us build the right field and technology teams, scale operations across regions, and streamline our service delivery. Today, our platform supports over 100,000 farmers across India — and Fstone has been a key partner in that journey`,
      results: {
        funding: "₹30Cr",
        growth: "400%",
        timeline: "22 months"
      },
      industry: "AgriTech",
      videoAvailable: false
    }
  ];

  const successMetrics = [
    { label: "Average Funding Raised", value: "₹44Cr", icon: "DollarSign" },
    { label: "Average Growth Rate", value: "550%", icon: "TrendingUp" },
    { label: "Success Timeline", value: "22 months", icon: "Clock" },
    { label: "Client Satisfaction", value: "98%", icon: "Heart" }
  ];

  const currentTestimonial = testimonials?.[activeTestimonial];

  return (
    <section className="py-20 bg-yellow-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Icon name="MessageSquare" size={16} />
            <span>Client Testimonials</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Success Stories from Our Partners
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Hear directly from founders who have transformed their startups into successful businesses 
            with DaRYTE's guidance and support.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Testimonial Navigation */}
          <div className="lg:col-span-1 space-y-4">
            <h3 className="text-lg font-semibold text-foreground mb-6">Featured Stories</h3>
            {testimonials?.map((testimonial, index) => (
              <div
                key={testimonial?.id}
                onClick={() => setActiveTestimonial(index)}
                className={`p-4 rounded-xl border cursor-pointer transition-brand ${
                  activeTestimonial === index
                    ? 'bg-primary text-primary-foreground border-primary shadow-brand'
                    : 'bg-white hover:bg-surface border-border hover:border-primary/30'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <Image
                    src={testimonial?.image}
                    alt={`${testimonial?.name} - ${testimonial?.company}`}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <h4 className={`font-semibold text-sm ${
                      activeTestimonial === index ? 'text-primary-foreground' : 'text-foreground'
                    }`}>
                      {testimonial?.name}
                    </h4>
                    <p className={`text-xs ${
                      activeTestimonial === index ? 'text-primary-foreground/80' : 'text-muted-foreground'
                    }`}>
                      {testimonial?.company}
                    </p>
                    <div className="flex items-center space-x-1 mt-1">
                      {[...Array(testimonial?.rating)]?.map((_, i) => (
                        <Icon 
                          key={i} 
                          name="Star" 
                          size={12} 
                          className={`${
                            activeTestimonial === index ? 'text-primary-foreground/60' : 'text-accent'
                          } fill-current`} 
                        />
                      ))}
                    </div>
                  </div>
                  {testimonial?.videoAvailable && (
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                      activeTestimonial === index ? 'bg-primary-foreground/20' : 'bg-primary/10'
                    }`}>
                      <Icon 
                        name="Play" 
                        size={12} 
                        className={activeTestimonial === index ? 'text-primary-foreground' : 'text-primary'} 
                      />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Detailed Testimonial */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-8 shadow-brand border border-border">
              {/* Header */}
              <div className="flex items-start space-x-6 mb-8">
                <Image
                  src={currentTestimonial?.image}
                  alt={`${currentTestimonial?.name} - ${currentTestimonial?.company}`}
                  className="w-20 h-20 rounded-2xl object-cover"
                />
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-1">{currentTestimonial?.name}</h3>
                      <p className="text-primary font-semibold mb-1">{currentTestimonial?.role}</p>
                      <p className="text-muted-foreground text-sm">{currentTestimonial?.company}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-xs bg-secondary/10 text-secondary px-2 py-1 rounded-full">
                        {currentTestimonial?.industry}
                      </span>
                      {currentTestimonial?.videoAvailable && (
                        <button className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-brand">
                          <Icon name="Play" size={14} className="text-primary" />
                        </button>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(currentTestimonial?.rating)]?.map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="text-accent fill-current" />
                    ))}
                    <span className="text-sm text-muted-foreground ml-2">({currentTestimonial?.rating}.0)</span>
                  </div>
                </div>
              </div>

              {/* Testimonial Content */}
              <div className="mb-8">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon name="Quote" size={16} className="text-primary" />
                  </div>
                  <blockquote className="text-foreground leading-relaxed italic">
                    "{currentTestimonial?.testimonial}"
                  </blockquote>
                </div>
              </div>

              {/* Results */}
              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-border">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-1">{currentTestimonial?.results?.funding}</div>
                  <div className="text-sm text-muted-foreground">Funding Raised</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-secondary mb-1">{currentTestimonial?.results?.growth}</div>
                  <div className="text-sm text-muted-foreground">Growth Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent mb-1">{currentTestimonial?.results?.timeline}</div>
                  <div className="text-sm text-muted-foreground">Timeline</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Success Metrics */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-4">Client Success Metrics</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Average outcomes achieved by our portfolio companies
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {successMetrics?.map((metric, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-brand border border-border text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon name={metric?.icon} size={24} className="text-primary" />
                </div>
                <div className="text-2xl font-bold text-primary mb-2">{metric?.value}</div>
                <div className="text-sm text-muted-foreground">{metric?.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-white text-center">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Write Your Success Story?</h3>
            <p className="text-white/90 mb-6">
             Join the ranks of successful organisations who have scaled their businesses with Fstone Technologies’ expertise
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <button className="bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-white/90 transition-brand">
                  Start Your Journey
                </button>
              </Link>
              <Link to="/contact">
                <button className="border border-white/30 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-brand">
                  Schedule Consultation
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonials;