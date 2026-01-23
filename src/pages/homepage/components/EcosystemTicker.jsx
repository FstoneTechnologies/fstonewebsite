import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';

const EcosystemTicker = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const achievements = [
    {
      id: 1,
      type: 'news',
      company: 'FSTONE Technologies',
      achievement: 'Expanded delivery operations to support new enterprise clients.',
      timeAgo: '2 days ago',
      icon: 'Newspaper',
      color: 'text-primary'
    },
    {
      id: 2,
      type: 'view',
      company: 'Leadership Team',
      achievement: 'Shared insights on workforce trends for 2026.',
      timeAgo: '4 days ago',
      icon: 'MessageSquare',
      color: 'text-secondary'
    },
    {
      id: 3,
      type: 'announcement',
      company: 'FSTONE Technologies',
      achievement: 'Launched enhanced Managed Delivery Services.',
      timeAgo: '1 week ago',
      icon: 'Rocket',
      color: 'text-success'
    },
    {
      id: 4,
      type: 'news',
      company: 'Client Success',
      achievement: 'Successfully supported a large-scale hiring program for a global client.',
      timeAgo: '1 week ago',
      icon: 'Users',
      color: 'text-accent'
    },
    {
      id: 5,
      type: 'view',
      company: 'Talent Advisory',
      achievement: 'Published a report on executive hiring strategies.',
      timeAgo: '2 weeks ago',
      icon: 'FileText',
      color: 'text-primary'
    },
    {
      id: 6,
      type: 'announcement',
      company: 'FSTONE Technologies',
      achievement: 'Strengthened partnerships across India and the US.',
      timeAgo: '3 weeks ago',
      icon: 'Handshake',
      color: 'text-secondary'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % achievements.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const getVisibleAchievements = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % achievements.length;
      visible.push(achievements[index]);
    }
    return visible;
  };

  return (
    <section className="py-12 bg-[#1F74B5] border-y border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-3">
            <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse"></div>
            <h3 className="text-lg font-semibold text-white">News & Views</h3>
          </div>
          <div className="text-sm text-white">
            Latest updates, insights, and announcements
          </div>
        </div>

        <div className="relative overflow-hidden">
          <div className="flex space-x-6 transition-transform duration-1000 ease-in-out">
            {getVisibleAchievements().map((achievement, index) => (
              <div
                key={`${achievement.id}-${currentIndex}`}
                className={`flex-shrink-0 w-full md:w-190 lg:w-96 transition-all duration-1000 ${
                  index === 0 ? 'opacity-100 scale-100' :
                  index === 1 ? 'opacity-80 scale-95' : 'opacity-60 scale-90'
                }`}
              >
                <div className="bg-surface border border-border rounded-xl p-6 hover:shadow-brand transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className={`w-10 h-10 rounded-lg bg-background flex items-center justify-center ${achievement.color}`}>
                      <Icon name={achievement.icon} size={20} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-foreground truncate">
                          {achievement.company}
                        </h4>
                        <span className="text-xs text-muted-foreground whitespace-nowrap ml-2">
                          {achievement.timeAgo}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {achievement.achievement}
                      </p>
                      <div className="flex items-center mt-3 space-x-2">
                        <div className={`w-2 h-2 rounded-full ${
                          achievement.type === 'news' ? 'bg-primary' :
                          achievement.type === 'view' ? 'bg-secondary' :
                          achievement.type === 'announcement' ? 'bg-success' : 'bg-primary'
                        }`}></div>
                        <span className="text-xs font-medium text-muted-foreground capitalize">
                          {achievement.type}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-6 space-x-2">
          {achievements.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-primary w-6' : 'bg-border hover:bg-muted-foreground'
              }`}
            />
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-8 border-t border-border">
          <div className="text-center">
            <div className="text-2xl font-bold text-yellow-50 mb-1">120+</div>
            <div className="text-sm text-yellow-50">Active Clients</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-yellow-50 mb-1">350+</div>
            <div className="text-sm text-yellow-50">Projects Delivered</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-yellow-50 mb-1">98%</div>
            <div className="text-sm text-yellow-50">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-yellow-50 mb-1">10+</div>
            <div className="text-sm text-yellow-50">Delivery Locations</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcosystemTicker;
