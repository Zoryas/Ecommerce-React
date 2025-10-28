import React, { useEffect } from 'react';
import '../css/Background.css';

const Background = ({ children }) => {
  useEffect(() => {
    const createFallingElements = () => {
      const container = document.querySelector('.background-page .falling-elements');
      if (!container) return;

      const existingElements = container.querySelectorAll('.falling-element');
      existingElements.forEach(el => el.remove());

      const elementTypes = [
        { class: 'scoop fast', speed: 'fast' },
        { class: 'drip fast', speed: 'fast' },
        { class: 'cherry medium', speed: 'medium' },
        { class: 'sprinkle fast', speed: 'fast' },
        { class: 'waffle slow', speed: 'slow' },
        { class: 'sprinkle-fast fast', speed: 'fast' },
        { class: 'drip-fast fast', speed: 'fast' },
        { class: 'scoop medium', speed: 'medium' },
        { class: 'cherry slow', speed: 'slow' },
        { class: 'sprinkle medium', speed: 'medium' }
      ];
      
      for (let i = 0; i < 25; i++) {
        const element = document.createElement('div');
        const type = elementTypes[Math.floor(Math.random() * elementTypes.length)];
        element.className = `falling-element ${type.class}`;
        element.style.left = `${Math.random() * 100}%`;
        element.style.animationDelay = `${Math.random() * 12}s`;
        container.appendChild(element);
      }
    };

    createFallingElements();
  }, []);

  return (
    <>
      <div className="background-page">
        <div className="falling-elements">
        </div>
      </div>
      {children}
    </>
  );
};

export default Background;