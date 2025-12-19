import React, { useState, useEffect, useRef } from 'react';

interface FadeInSectionProps {
  children: React.ReactNode;
  className?: string;
}

const FadeInSection: React.FC<FadeInSectionProps> = ({ children, className = "" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        // Trigger when part of the element is visible
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Stop observing once visible to ensure it only animates in once
          if (domRef.current) observer.unobserve(domRef.current);
        }
      });
    }, { 
      threshold: 0.1, // 10% visibility to trigger
      rootMargin: "0px 0px -50px 0px" // Trigger slightly before the bottom
    });

    const { current } = domRef;
    if (current) observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
    };
  }, []);

  return (
    <div
      ref={domRef}
      className={`transition-all duration-1000 ease-out transform will-change-transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default FadeInSection;