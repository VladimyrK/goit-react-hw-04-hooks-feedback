import React, { useEffect, useState } from 'react';

import FeedbackOptions from './components/FeedbackOptions';
import Section from './components/Section';
import Statistics from './components/Statistics';

import './App.css';

function App() {
  // state = {
  //   good: 0,
  //   neutral: 0,
  //   bad: 0,
  //   total: 0,
  //   positive: 0,
  // };
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [positive, setPositive] = useState(0);

  const options = [
    { id: '1', name: 'Good', func: () => setGood(good => good + 1) },
    {
      id: '2',
      name: 'Neutral',
      func: () => setNeutral(neutral => neutral + 1),
    },
    { id: '3', name: 'Bad', func: () => setBad(bad => bad + 1) },
  ];

  useEffect(() => setTotal(good + neutral + bad), [bad, good, neutral]);

  useEffect(() => {
    setPositive(Math.round((good / total) * 100));
  }, [good, total]);

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions options={options}></FeedbackOptions>
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
