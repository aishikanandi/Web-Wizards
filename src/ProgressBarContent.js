import React from 'react';
import Footer from "./components/footer";
import CommunityleftCard from "./CommunityleftCard";
import CommunityrightCard from "./CommunityrightCard";
import "./ProgressBarContent.css"

const ProgressBarContent = ({ activeStep, steps }) => {
  const progressContent = [
    {
      title: 'HOME SECTION',
      content: 
      <div><h1>hey</h1><Footer /></div>
    },
    {
      title: '2023-2024',
      content: <div>
      <h1 className="DesignationCommunitycoordinator">COORDINATORS</h1>
      <div className='CardsContainerCommunity'>
        <CommunityleftCard />
        <CommunityrightCard />
      </div>
      <h1 className="DesignationCommunitymentors">MENTORS</h1>
      <div className='CardsContainerCommunity'>
        <CommunityleftCard />
        <CommunityrightCard />
      </div>
      </div>,
    },
    {
      title: 'Creative CREATIONS',
      content: 'Content for Creative CREATIONS'
    },
    {
      title: 'TESTIMONIALS NOW',
      content: 'Content for TESTIMONIALS NOW'
    },
    {
      title: 'OUR LOCATIONS',
      content: 'Content for OUR LOCATIONS'
    }
  ];

  return (
    <div id="progress-content-section">
      {progressContent.map((step, index) => (
        <div
          key={index}
          className={`section-content ${
            activeStep === index ? 'active' : ''
          }`}
        >
          <h2>{step.title}</h2>
          <p>{step.content}</p>
        </div>
      ))}
    </div>
  );
};

export default ProgressBarContent;
