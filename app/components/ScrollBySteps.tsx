'use client';
import React, { useEffect } from 'react';

const ScrollBySteps = () => {
  useEffect(() => {
    const handleScroll = (event) => {
      event.preventDefault(); // Prevent default scrolling behavior

      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY;
      let targetSection = null;

      sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (scrollPosition >= sectionTop - sectionHeight / 2 && scrollPosition < sectionTop + sectionHeight / 2) {
          if (event.deltaY > 0) {
            // Scrolling down
            targetSection = sections[index + 1];
          } else {
            // Scrolling up
            targetSection = sections[index - 1];
          }
        }
      });

      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop,
          behavior: 'smooth',
        });
      }
    };

    window.addEventListener('wheel', handleScroll, { passive: false });

    return () => window.removeEventListener('wheel', handleScroll);
  }, []);

  return null;
};

export default ScrollBySteps;