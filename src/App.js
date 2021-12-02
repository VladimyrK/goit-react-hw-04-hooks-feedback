import React, { useState, useEffect } from 'react';

import FeedbackOptions from './components/FeedbackOptions';
import Section from './components/Section';
import Statistics from './components/Statistics';

import './App.css';

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [positive, setPositive] = useState(0);

  const options = [
    { id: '1', name: 'Good' },
    {
      id: '2',
      name: 'Neutral',
    },
    { id: '3', name: 'Bad' },
  ];

  useEffect(() => {
    setTotal(good + neutral + bad);
    setPositive(Math.round((good / total) * 100));
  }, [bad, good, neutral, total]);

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
            total={total}
            positive={positive}
          ></Statistics>
        ) : (
          <p>Nothing here yet, but you could leave your feedback</p>
        )}
      </Section>
    </div>
  );
}

export default App;
