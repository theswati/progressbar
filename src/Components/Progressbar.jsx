import React, { useState, useEffect } from 'react';

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Simulate an asynchronous operation
      // In a real-world scenario, you would replace this with your own asynchronous operation
      if (progress < 100) {
        setProgress(prevProgress => prevProgress + 10);
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [progress]);

  return (

    <div id="barOuter">
      <div id="barInner" style={{ width: `${progress}%` }}>
        {`${progress}%`}
      </div>
    </div>
  );
};

export default ProgressBar;
