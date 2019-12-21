import React from 'react';

const UseScript = url => {
    const script = document.createElement('script');

    script.src = "./line_chart.js";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
};

export default UseScript;
