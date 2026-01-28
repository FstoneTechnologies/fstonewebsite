
import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import CountUp from './CountUp';

const SocialProof = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Rohit Mehta',
      position: 'Delivery Director',
      company: 'Global FinTech Client',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200&q=80',
      testimonial: `Fstone helped us scale our technology teams quickly while maintaining quality and compliance. Their structured workforce approach saved us months of effort.`,
      rating: 5,
      category: 'Enterprise Client'
    },
    {
      id: 2,
      name: 'Ankit Verma',
      position: 'Head of HR',
      company: 'Manufacturing Group',
      image: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=200&h=200&q=80',
      testimonial: `Our recruitment and delivery processes became faster and more reliable after partnering with Fstone. The quality of talent and service has been exceptional.`,
      rating: 5,
      category: 'HR Leader'
    },
    {
      id: 3,
      name: 'Sanjay Kapoor',
      position: 'CTO',
      company: 'IT Services Firm',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=200&h=200&q=80',
      testimonial: `With Fstone’s managed delivery and staffing expertise, we expanded into new markets without compromising on talent quality or delivery standards.`,
      rating: 5,
      category: 'Technology Partner'
    },
    {
      id: 4,
      name: 'Neha Gupta',
      position: 'Operations Head',
      company: 'Healthcare Services',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&h=200&q=80',
      testimonial: `Fstone’s workforce solutions helped us build reliable teams across multiple locations with consistent performance and governance.`,
      rating: 5,
      category: 'Operations Leader'
    }
  ];

  const awards = [
    {
      title: 'Best Workforce Solutions Provider',
      organization: 'Industry Excellence Awards',
      year: '2024',
      icon: 'Award'
    },
    {
      title: 'Excellence in Talent Delivery',
      organization: 'HR Leadership Forum',
      year: '2023',
      icon: 'Users'
    },
    {
      title: 'Top Managed Services Partner',
      organization: 'Enterprise Connect',
      year: '2023',
      icon: 'TrendingUp'
    }
  ];

  const currentTestimonial = testimonials[activeTestimonial];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-accent/10 border border-[#1F74B5] rounded-full px-4 py-2 mb-6">
            <Icon name="Star" size={16} className="text-primary" />
            <span className="text-sm font-medium text-primary">
              Trusted by Industry Leaders
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our Clients Say
          </h2>

          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Hear from enterprise leaders and partners who have experienced the Fstone difference firsthand.
          </p>
        </div>

        {/* TESTIMONIAL CARD */}
        <div className="bg-[#1F74B5] rounded-3xl shadow-brand-lg p-8 md:p-12 mb-16">
          <div className="grid lg:grid-cols-3 gap-8 items-center">

            <div className="lg:col-span-2">
              <div className="flex items-center space-x-1 mb-6">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <Icon key={i} name="Star" size={20} className="text-yellow-50 fill-current" />
                ))}
              </div>

              <blockquote className="text-xl text-yellow-50 leading-relaxed mb-8 italic">
                "{currentTestimonial.testimonial}"
              </blockquote>

              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-yellow-50/40">
                  <Image
                    src={currentTestimonial.image}
                    alt={currentTestimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-semibold text-yellow-50 text-lg">
                    {currentTestimonial.name}
                  </div>
                  <div className="text-yellow-50/80">
                    {currentTestimonial.position}, {currentTestimonial.company}
                  </div>
                  <div className="text-sm text-yellow-50 font-medium">
                    {currentTestimonial.category}
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              {testimonials.map((testimonial, index) => (
                <button
                  key={testimonial.id}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-full text-left p-4 rounded-xl transition-all duration-300 border ${index === activeTestimonial
                      ? 'bg-white border-[#1F74B5]'
                      : 'bg-white hover:bg-gray border-transparent'
                    }`}

                >
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="min-w-0">
                      <div className="font-medium text-black text-sm truncate">
                        {testimonial.name}
                      </div>
                      <div className="text-xs text-black-50/80">
                        {testimonial.category}
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>

          </div>
        </div>

        {/* AWARDS */}
        <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-3xl p-8 md:p-12">
          <h3 className="text-2xl font-bold text-foreground text-center mb-12">
            Awards & Recognition
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {awards.map((award, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-[#1F74B5] rounded-2xl flex items-center justify-center shadow-brand">
                  <Icon name={award.icon} size={28} className="text-white" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">{award.title}</h4>
                <p className="text-sm text-muted-foreground mb-1">{award.organization}</p>
                <div className="text-xs text-muted-foreground font-medium">{award.year}</div>
              </div>
            ))}
          </div>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-border">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">
              <CountUp end={90} suffix="+" />
              </div>
            <div className="text-sm text-muted-foreground">Clients Served</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-success mb-2">
              <CountUp end={5000} suffix="+" />
            </div>
            <div className="text-sm text-muted-foreground">Professionals Placed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-secondary mb-2">
              <CountUp end={98} suffix="%" />
              </div>
            <div className="text-sm text-muted-foreground">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent mb-2">
              <CountUp end={20} suffix="+" />
            </div>
            <div className="text-sm text-muted-foreground">Years Experience</div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default SocialProof;
