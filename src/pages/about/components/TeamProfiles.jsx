import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const TeamProfiles = () => {
  const [activeTeamMember, setActiveTeamMember] = useState(0);

  const teamMembers = [
    {
      id: 1,
      name: "Priya Mehta",
      role: "Head of Legal & Compliance",
      experience: "15+ Years",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
      specializations: ["Corporate Law", "Regulatory Compliance", "Intellectual Property"],
      credentials: "LLB, LLM • Bar Council of India • Company Secretary",
      portfolioCompanies: 45,
      bio: `Priya brings over 15 years of expertise in corporate law and regulatory compliance. She has successfully guided numerous startups through complex legal frameworks and government regulations. Her deep understanding of intellectual property law has helped protect and monetize innovations for our portfolio companies.`,
      achievements: [
        "Successfully handled 200+ compliance cases",
        "Expert in startup legal structuring",
        "Government liaison specialist"
      ]
    },
    {
      id: 2,
      name: "Arjun Singh",
      role: "Technology & Innovation Lead",
      experience: "12+ Years",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      specializations: ["Tech Strategy", "Product Development", "Digital Transformation"],
      credentials: "B.Tech, M.Tech • Google Cloud Certified • AWS Solutions Architect",
      portfolioCompanies: 38,
      bio: `Arjun leads our technology initiatives and helps startups build scalable, innovative solutions. With extensive experience in product development and digital transformation, he guides founders through technical challenges and strategic technology decisions.`,
      achievements: [
        "Led digital transformation for 50+ companies",
        "Expert in cloud architecture and scaling",
        "Mentor for tech startup accelerators"
      ]
    },
    {
      id: 3,
      name: "Kavya Reddy",
      role: "Business Strategy & Operations",
      experience: "18+ Years",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      specializations: ["Business Strategy", "Operations Management", "Market Analysis"],
      credentials: "MBA Finance • CFA • Strategic Management Certified",
      portfolioCompanies: 52,
      bio: `Kavya specializes in business strategy and operational excellence. She works closely with founders to develop sustainable business models, optimize operations, and create strategic roadmaps for growth and market expansion.`,
      achievements: [
        "Developed strategies for 100+ startups",
        "Expert in financial modeling and planning",
        "Market research and analysis specialist"
      ]
    },
    {
      id: 4,
      name: "Rohit Gupta",
      role: "Government Relations & Partnerships",
      experience: "20+ Years",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face",
      specializations: ["Government Relations", "Policy Analysis", "Partnership Development"],
      credentials: "MA Public Administration • Former Government Official • Policy Expert",
      portfolioCompanies: 35,
      bio: `Rohit brings two decades of government sector experience, facilitating partnerships between startups and government agencies. His deep understanding of policy frameworks and regulatory environments helps companies navigate government opportunities.`,
      achievements: [
        "Facilitated 80+ government partnerships",
        "Expert in policy analysis and compliance",
        "Former senior government official"
      ]
    }
  ];

  const currentMember = teamMembers?.[activeTeamMember];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Icon name="Users" size={16} />
            <span>Our Expert Team</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Meet the Minds Behind Success
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our diverse team of experts brings together decades of experience across legal, technology, 
            business strategy, and government sectors to provide comprehensive guidance.
          </p>
        </div>

        {/* Leadership Team Image */}
        <div className="mb-16">
          <div className="relative rounded-2xl overflow-hidden shadow-brand-lg">
            <Image
              src=""
              alt="DaRYTE leadership team - executive professionals collaborating around laptop in premium office environment"
              className="w-full h-[400px] lg:h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
            <div className="absolute bottom-8 left-8 right-8 text-white">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h3 className="text-xl font-bold mb-2">Executive Leadership Team</h3>
                <p className="text-white/90 leading-relaxed">
                  Our leadership team combines decades of experience in premium business environments, 
                  providing strategic mentorship and guidance in our state-of-the-art facilities.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Team Member Cards */}
          <div className="lg:col-span-1 space-y-4">
            {teamMembers?.map((member, index) => (
              <div
                key={member?.id}
                onClick={() => setActiveTeamMember(index)}
                className={`p-6 rounded-xl border cursor-pointer transition-brand ${
                  activeTeamMember === index
                    ? 'bg-primary text-primary-foreground border-primary shadow-brand'
                    : 'bg-white hover:bg-surface border-border hover:border-primary/30'
                }`}
              >
                <div className="flex items-center space-x-4">
                  <Image
                    src={member?.image}
                    alt={`${member?.name} - ${member?.role}`}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <h3 className={`font-semibold mb-1 ${
                      activeTeamMember === index ? 'text-primary-foreground' : 'text-foreground'
                    }`}>
                      {member?.name}
                    </h3>
                    <p className={`text-sm mb-2 ${
                      activeTeamMember === index ? 'text-primary-foreground/80' : 'text-muted-foreground'
                    }`}>
                      {member?.role}
                    </p>
                    <div className="flex items-center space-x-2">
                      <Icon 
                        name="Clock" 
                        size={14} 
                        className={activeTeamMember === index ? 'text-primary-foreground/60' : 'text-muted-foreground'} 
                      />
                      <span className={`text-xs ${
                        activeTeamMember === index ? 'text-primary-foreground/80' : 'text-muted-foreground'
                      }`}>
                        {member?.experience}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Detailed Profile */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-8 shadow-brand border border-border">
              {/* Header */}
              <div className="flex items-start space-x-6 mb-8">
                <Image
                  src={currentMember?.image}
                  alt={`${currentMember?.name} - ${currentMember?.role}`}
                  className="w-24 h-24 rounded-2xl object-cover"
                />
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-foreground mb-2">{currentMember?.name}</h3>
                  <p className="text-primary font-semibold mb-2">{currentMember?.role}</p>
                  <p className="text-sm text-muted-foreground mb-4">{currentMember?.credentials}</p>
                  
                  <div className="flex items-center space-x-6">
                    <div className="flex items-center space-x-2">
                      <Icon name="Briefcase" size={16} className="text-accent" />
                      <span className="text-sm font-medium text-foreground">{currentMember?.experience}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Icon name="Building" size={16} className="text-accent" />
                      <span className="text-sm font-medium text-foreground">
                        {currentMember?.portfolioCompanies} Companies
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bio */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-foreground mb-3">About</h4>
                <p className="text-muted-foreground leading-relaxed">{currentMember?.bio}</p>
              </div>

              {/* Specializations */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-foreground mb-4">Specializations</h4>
                <div className="flex flex-wrap gap-3">
                  {currentMember?.specializations?.map((spec, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-medium"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Achievements */}
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-4">Key Achievements</h4>
                <div className="space-y-3">
                  {currentMember?.achievements?.map((achievement, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Icon name="CheckCircle" size={14} className="text-accent" />
                      </div>
                      <span className="text-sm text-muted-foreground">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamProfiles;