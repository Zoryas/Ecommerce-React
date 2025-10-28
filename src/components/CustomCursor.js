import React, { useEffect } from 'react';

const CustomCursor = () => {
  useEffect(() => {
    // Show loading cursor during page load
    document.body.classList.add('loading');
    
    const handleLoad = () => {
      document.body.classList.remove('loading');
    };

    // Handle page load
    if (document.readyState === 'complete') {
      document.body.classList.remove('loading');
    } else {
      window.addEventListener('load', handleLoad);
    }

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  return null; // This component doesn't render anything
};

export default CustomCursor;