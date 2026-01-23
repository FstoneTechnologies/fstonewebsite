import React from 'react';

const AnimatedBackground = ({ 
  type = "floating", 
  count = 6, 
  opacity = 0.2, 
  size = "medium",
  colors = ["blue", "teal", "orange", "purple", "pink"],
  className = ""
}) => {
  const getSizeClasses = () => {
    switch (size) {
      case "small": return "w-4 h-4";
      case "medium": return "w-8 h-8";
      case "large": return "w-16 h-16";
      case "xl": return "w-20 h-20";
      default: return "w-8 h-8";
    }
  };

  const getColorClasses = (index) => {
    const colorMap = {
      blue: "from-blue-400 to-blue-600",
      teal: "from-teal-400 to-teal-600",
      orange: "from-orange-400 to-orange-600",
      purple: "from-purple-400 to-purple-600",
      pink: "from-pink-400 to-pink-600",
      yellow: "from-yellow-400 to-yellow-600",
      green: "from-green-400 to-green-600",
      indigo: "from-indigo-400 to-indigo-600"
    };
    
    const colorKeys = Object.keys(colorMap);
    const colorIndex = index % colorKeys.length;
    return colorMap[colorKeys[colorIndex]];
  };

  const getAnimationClasses = (index) => {
    switch (type) {
      case "floating":
        return "animate-float";
      case "pulse":
        return "animate-pulse";
      case "bounce":
        return "animate-bounce";
      case "spin":
        return "animate-spin";
      case "ping":
        return "animate-ping";
      default:
        return "animate-float";
    }
  };

  const getPositionClasses = (index) => {
    const positions = [
      "top-20 left-20",
      "top-40 right-32",
      "bottom-40 left-1/4",
      "top-1/3 right-20",
      "bottom-1/3 right-1/3",
      "top-1/2 left-20",
      "top-1/4 right-1/4",
      "bottom-1/4 left-1/3"
    ];
    
    return positions[index % positions.length];
  };

  const getShape = (index) => {
    const shapes = ["rounded-full", "rounded-lg", "rounded-md", "transform rotate-45"];
    return shapes[index % shapes.length];
  };

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {Array.from({ length: count }, (_, index) => (
        <div
          key={index}
          className={`absolute ${getPositionClasses(index)} ${getSizeClasses()} opacity-${Math.floor(opacity * 100)} ${getAnimationClasses(index)} ${getShape(index)}`}
          style={{
            animationDelay: `${index * 0.9}s`,
            animationDuration: `${5 + index * 0.8}s`
          }}
        >
          <div className={`w-full h-full bg-gradient-to-br ${getColorClasses(index)}`}></div>
        </div>
      ))}
    </div>
  );
};

export default AnimatedBackground;
