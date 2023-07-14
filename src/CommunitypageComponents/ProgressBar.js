import React from 'react';
import ProgressBarContent from './ProgressBarContent';

class ProgressBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeStep: 0
    };
  }

  handleStepClick = (index) => {
    this.setState({ activeStep: index });
  };

  render() {
    const { activeStep } = this.state;

    const steps = [
        '2019-2020',
      '2020-2021',
      '2021-2022',
      '2022-2023',
      '2023-2024'
    ];

    const progressWidth = (activeStep / (steps.length - 1)) * 100 + '%';

    const colors = ['#018DFF', '#3A37CE', '#997FD0', '#01528C'];
    const progressBarStyle = {
      width: progressWidth,
      background: `linear-gradient(to right, ${colors.slice(0, activeStep + 1).join(',')})`
    };

    return (
      <div className="process-wrapper">
        <div id="progress-bar-container">
          <ul>
            {steps.map((step, index) => (
              <li
                key={index}
                className={`step step0${index + 1} ${
                  activeStep === index ? 'active' : ''
                }`}
                onClick={() => this.handleStepClick(index)}
              >
                <div className="step-inner">{step}</div>
              </li>
            ))}
          </ul>

          <div id="line">
            <div id="line-progress" style={progressBarStyle}></div>
          </div>
        </div>

        <ProgressBarContent activeStep={activeStep} steps={steps} />
      </div>
    );
  }
}

export default ProgressBar;
