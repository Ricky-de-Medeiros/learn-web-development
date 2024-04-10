// src/components/Tutorial.js
import React, { useState } from 'react';

const Tutorial = ({ steps }) => {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => setCurrentStep((prevStep) => Math.min(prevStep + 1, steps.length - 1));
  const prevStep = () => setCurrentStep((prevStep) => Math.max(prevStep - 1, 0));

  return (
    <div className="tutorial">
      <div className="step-content">
        <h3>{steps[currentStep].title}</h3>
        <p>{steps[currentStep].content}</p>
      </div>
      <div className="navigation">
        {currentStep > 0 && (
          <button onClick={prevStep}>Previous</button>
        )}
        {currentStep < steps.length - 1 && (
          <button onClick={nextStep}>Next</button>
        )}
      </div>
    </div>
  );
};

export default Tutorial;
