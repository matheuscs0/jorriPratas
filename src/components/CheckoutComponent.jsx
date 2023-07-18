// CheckoutComponent.js
import React, { useState } from 'react';
import ConsultaCep from './consultaCep';
import ResumeFinish from './ResumeFinish';
import Payment from './Payment'
import ProgressBar from './ProgressBar';

const CheckoutComponent = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handlePreviousStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  return (
    <div>
      <ProgressBar currentStep={currentStep} />

      {currentStep === 1 && <ConsultaCep onNextStep={handleNextStep} />}
      {currentStep === 2 && (
        <ResumeFinish onPreviousStep={handlePreviousStep} onNextStep={handleNextStep} />
      )}
      {currentStep === 3 && <Payment onPreviousStep={handlePreviousStep} />}
    </div>
  );
};

export default CheckoutComponent;
