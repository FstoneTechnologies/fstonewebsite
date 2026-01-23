import React, { useState, useRef, useEffect } from 'react';
import Image from './AppImage';

const LazyImage = ({ 
  src, 
  alt, 
  className = "", 
  threshold = 0.1,
  rootMargin = '50px',
  ...props 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [imageSrc, setImageSrc] = useState("");
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            setImageSrc(src);
            observer.disconnect();
          }
        });
      },
      {
        threshold,
        rootMargin
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, [src, threshold, rootMargin]);

  return (
    <div ref={ref} className="relative">
      {!isVisible && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse rounded"></div>
      )}
      
      {isVisible && (
        <Image
          src={imageSrc}
          alt={alt}
          className={`transition-opacity duration-500 ${
            imageSrc ? 'opacity-100' : 'opacity-0'
          } ${className}`}
          {...props}
        />
      )}
    </div>
  );
};

export default LazyImage;
