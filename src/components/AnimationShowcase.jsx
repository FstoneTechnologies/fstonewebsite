import React from 'react';
import Image from './AppImage';
import AnimatedBackground from './AnimatedBackground';

const AnimationShowcase = () => {
  const demoImages = [
    {
      src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=200&fit=crop&crop=center',
      alt: 'Startup Office',
      animation: 'fadeIn',
      delay: 0
    },
    {
      src: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=300&h=200&fit=crop&crop=center',
      alt: 'Business Growth',
      animation: 'slideUp',
      delay: 200
    },
    {
      src: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=300&h=200&fit=crop&crop=center',
      alt: 'Legal Documents',
      animation: 'slideLeft',
      delay: 400
    },
    {
      src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop&crop=center',
      alt: 'Team Meeting',
      animation: 'slideRight',
      delay: 600
    },
    {
      src: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=300&h=200&fit=crop&crop=center',
      alt: 'Innovation',
      animation: 'zoomIn',
      delay: 800
    },
    {
      src: 'https://images.unsplash.com/photo-1541354329998-f4d9a9f9297f?w=300&h=200&fit=crop&crop=center',
      alt: 'Success',
      animation: 'bounce',
      delay: 1000
    }
  ];

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-foreground mb-8 text-center">
          Animation & Lazy Loading Showcase
        </h1>
        
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-6">Animated Background Elements</h2>
          <div className="relative h-64 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl overflow-hidden">
            <AnimatedBackground 
              type="floating"
              count={12}
              opacity={0.3}
              size="medium"
              colors={["blue", "teal", "orange", "purple", "pink", "yellow"]}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-lg text-foreground font-medium">Floating Animated Elements</p>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-6">Image Animation Types</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {demoImages.map((image, index) => (
              <div key={index} className="bg-card rounded-xl p-4 shadow-lg">
                <div className="mb-4">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-48 object-cover rounded-lg"
                    animation={image.animation}
                    delay={image.delay}
                    lazy={true}
                  />
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-foreground mb-2">{image.alt}</h3>
                  <p className="text-sm text-muted-foreground capitalize">{image.animation} Animation</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-6">Animation Controls</h2>
          <div className="bg-card rounded-xl p-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">6</div>
                <div className="text-sm text-muted-foreground">Animation Types</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary mb-2">Lazy</div>
                <div className="text-sm text-muted-foreground">Loading</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">Intersection</div>
                <div className="text-sm text-muted-foreground">Observer</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-success mb-2">Staggered</div>
                <div className="text-sm text-muted-foreground">Delays</div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className="text-muted-foreground mb-4">
            Scroll down to see lazy loading in action. Images will animate as they come into view.
          </p>
          <div className="h-32 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl flex items-center justify-center">
            <p className="text-foreground">Scroll to trigger more animations</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimationShowcase;
