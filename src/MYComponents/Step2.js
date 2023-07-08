import React from 'react';

const Step2 = ({ onNext, onPrevious }) => {
  return (
    <div>
      <h2>Step 2</h2>
      {/* Step 2 form fields */}
      <button onClick={onPrevious}>Previous</button>
      <button onClick={onNext}>Next</button>
    </div>
  );
};

export default Step2;
