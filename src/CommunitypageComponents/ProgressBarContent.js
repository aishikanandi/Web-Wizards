import React from 'react';
import CommunityleftCard from "./CommunityleftCard";
import CommunityrightCard from "./CommunityrightCard";
import "./ProgressBarContent.css"

const ProgressBarContent = ({ activeStep, steps }) => {
  const progressContent = [
    {
      title: '2019-2020',
      content: 
      <div>
      <h1 className="DesignationCommunitycoordinator">COORDINATORS</h1>
      <div className='CardsContainerCommunity'>
        <CommunityleftCard 
          name = "Person"
          image={require('./OPENLAKE.png')}
          githublink = "#"
          maillink = "#"
          linkedinlink = "#"

        />
        <CommunityrightCard 
          name = "Person"
          image={require('./OPENLAKE.png')}
          githublink = "#"
          maillink = "#"
          linkedinlink = "#"
        />
      </div>
      <h1 className="DesignationCommunitymentors">MENTORS</h1>
      <div className='CardsContainerCommunity'>
      <CommunityleftCard 
          name = "Person"
          image={require('./OPENLAKE.png')}
          githublink = "#"
          maillink = "#"
          linkedinlink = "#"

        />
         <CommunityrightCard 
          name = "Person"
          image={require('./OPENLAKE.png')}
          githublink = "#"
          maillink = "#"
          linkedinlink = "#"
        />
      </div>
      </div>,
    },
    {
      title: '2020-2021',
      content: <div>
      <h1 className="DesignationCommunitycoordinator">COORDINATORS</h1>
      <div className='CardsContainerCommunity'>
        <CommunityleftCard 
          name = "Person"
          image={require('./OPENLAKE.png')}
          githublink = "#"
          maillink = "#"
          linkedinlink = "#"

        />
        <CommunityrightCard 
          name = "Person"
          image={require('./OPENLAKE.png')}
          githublink = "#"
          maillink = "#"
          linkedinlink = "#"
        />
      </div>
      <h1 className="DesignationCommunitymentors">MENTORS</h1>
      <div className='CardsContainerCommunity'>
      <CommunityleftCard 
          name = "Person"
          image={require('./OPENLAKE.png')}
          githublink = "#"
          maillink = "#"
          linkedinlink = "#"

        />
         <CommunityrightCard 
          name = "Person"
          image={require('./OPENLAKE.png')}
          githublink = "#"
          maillink = "#"
          linkedinlink = "#"
        />
      </div>
      </div>,
    },
    {
      title: '2021-2022',
      content: <div>
      <h1 className="DesignationCommunitycoordinator">COORDINATORS</h1>
      <div className='CardsContainerCommunity'>
        <CommunityleftCard 
          name = "Person"
          image={require('./OPENLAKE.png')}
          githublink = "#"
          maillink = "#"
          linkedinlink = "#"

        />
        <CommunityrightCard 
          name = "Person"
          image={require('./OPENLAKE.png')}
          githublink = "#"
          maillink = "#"
          linkedinlink = "#"
        />
      </div>
      <h1 className="DesignationCommunitymentors">MENTORS</h1>
      <div className='CardsContainerCommunity'>
      <CommunityleftCard 
          name = "Person"
          image={require('./OPENLAKE.png')}
          githublink = "#"
          maillink = "#"
          linkedinlink = "#"

        />
         <CommunityrightCard 
          name = "Person"
          image={require('./OPENLAKE.png')}
          githublink = "#"
          maillink = "#"
          linkedinlink = "#"
        />
      </div>
      </div>,
    },
    {
      title: '2022-2023',
      content: <div>
      <h1 className="DesignationCommunitycoordinator">COORDINATORS</h1>
      <div className='CardsContainerCommunity'>
        <CommunityleftCard 
          name = "Person"
          image={require('./OPENLAKE.png')}
          githublink = "#"
          maillink = "#"
          linkedinlink = "#"

        />
        <CommunityrightCard 
          name = "Person"
          image={require('./OPENLAKE.png')}
          githublink = "#"
          maillink = "#"
          linkedinlink = "#"
        />
      </div>
      <h1 className="DesignationCommunitymentors">MENTORS</h1>
      <div className='CardsContainerCommunity'>
      <CommunityleftCard 
          name = "Person"
          image={require('./OPENLAKE.png')}
          githublink = "#"
          maillink = "#"
          linkedinlink = "#"

        />
         <CommunityrightCard 
          name = "Person"
          image={require('./OPENLAKE.png')}
          githublink = "#"
          maillink = "#"
          linkedinlink = "#"
        />
      </div>
      </div>,
    },
    {
      title: '2023-2024',
      content: <div>
      <h1 className="DesignationCommunitycoordinator">COORDINATORS</h1>
      <div className='CardsContainerCommunity'>
        <CommunityleftCard 
          name = "Person"
          image={require('./OPENLAKE.png')}
          githublink = "#"
          maillink = "#"
          linkedinlink = "#"

        />
        <CommunityrightCard 
          name = "Person"
          image={require('./OPENLAKE.png')}
          githublink = "#"
          maillink = "#"
          linkedinlink = "#"
        />
      </div>
      <h1 className="DesignationCommunitymentors">MENTORS</h1>
      <div className='CardsContainerCommunity'>
      <CommunityleftCard 
          name = "Person"
          image={require('./OPENLAKE.png')}
          githublink = "#"
          maillink = "#"
          linkedinlink = "#"

        />
         <CommunityrightCard 
          name = "Person"
          image={require('./OPENLAKE.png')}
          githublink = "#"
          maillink = "#"
          linkedinlink = "#"
        />
      </div>
      </div>,
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
