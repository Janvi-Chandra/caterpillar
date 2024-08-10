import React from 'react';
import './PredictSection.css';
import Catpredict from '../assets/Catpredict.png';

const PredictSection = () => {
  return (
    <section className="predict-section">
      <div className="predict-logo">
        <img src={Catpredict} alt="Brand Logo" />
      </div>
      <p className="predict-paragraph">
      Kindly enter the details below so thar we can
      predict component failures based on history and usage data.
      </p>
      <div className="predict-inputs">
        <label>
          <span>Machine</span>
          <input type="text" placeholder="Enter machine type" />
        </label>
        <label>
          <span>Component</span>
          <input type="text" placeholder="Enter component" />
        </label>
        <label>
          <span>Parameter</span>
          <input type="text" placeholder="Enter parameter" />
        </label>
        <label>
          <span>Value</span>
          <input type="text" placeholder="Enter value" />
        </label>
      </div>
      <button className="get-started-button">
        Submit
      </button>
    </section>
  );
};

export default PredictSection;
