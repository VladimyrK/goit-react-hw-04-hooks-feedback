import React, { useState } from 'react';

import FeedbackOptions from './components/FeedbackOptions';
import Section from './components/Section';
import Statistics from './components/Statistics';

import './App.css';

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const options = [
    { id: '1', name: 'Good' },
    {
      id: '2',
      name: 'Neutral',
    },
    { id: '3', name: 'Bad' },
  ];

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    let percentage = (good * 100) / countTotalFeedback();

    return Math.round(percentage);
  };

  const handleBtnClick = e => {
    switch (e.target.name) {
      case 'Good':
        return setGood(state => state + 1);
      case 'Neutral':
        return setNeutral(state => state + 1);
      case 'Bad':
        return setBad(state => state + 1);
      default:
        return;
    }
  };

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={options}
          onClick={handleBtnClick}
        ></FeedbackOptions>
      </Section>
      <Section title="Statistics">
        {good || neutral || bad ? (
          <Statistics
            good={good}
            bad={bad}
            neutral={neutral}
            total={countTotalFeedback()}
            positive={countPositiveFeedbackPercentage()}
          ></Statistics>
        ) : (
          <p>Nothing here yet, but you could leave your feedback</p>
        )}
      </Section>
    </div>
  );
}

export default App;
