import React from 'react';

const Step3 = ({ onPrevious, onSubmit }) => {
  return (
    <div>
      <h2>Step 3</h2>
      {/* Step 3 form fields */}
      <button onClick={onPrevious}>Previous</button>
      <button onClick={onSubmit}>Submit</button>
    </div>
  );
};

export default Step3;
