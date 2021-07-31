import React, { useState } from "react";

const Button = (props) => {
  return(
    <button onClick={props.clickHandler}>
      {props.text}
    </button>
  )
}

const StatisticsLine = ({text, value}) => {
  return(
    <div>
      <p>
        {text} {value}
      </p>
    </div>
  )
}

const Statistics = (props) => {
  let good = props.feedback.good;
  let neutral = props.feedback.neutral;
  let bad = props.feedback.bad;
  let total = good + neutral + bad;
  let average = ((good * 1) + (bad * -1)) / total;
  let percentGood = (good / total) * 100;

  if (good === 0 && neutral === 0 && bad === 0) {
    return (
      <h2>
        Palautetta ei ole annettu.
      </h2>
    )
  }

  return(
    <div>
      <h1>Tilastot</h1>
      <StatisticsLine text="Hyvä: " value={good} />
      <StatisticsLine text="Neutraali: " value={neutral} />
      <StatisticsLine text="Huono: " value={bad} />
      <StatisticsLine text="Yhteensä: " value={total} />
      <StatisticsLine text="Keskiarvo: " value={average} />
      <StatisticsLine text="Prosenttia hyviä: " value={percentGood} />
    </div>
    )
}

function App() {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  });

  const setGood = () => {
    setFeedback({...feedback, good: feedback.good + 1})
  }
  
  const setNeutral = () => {
    setFeedback({...feedback, neutral: feedback.neutral + 1})
  }
  
  const setBad = () => {
    setFeedback({...feedback, bad: feedback.bad + 1})
  }

  return (
    <>
      <div>
        <h1>Anna palautetta</h1>
          <Button clickHandler={() => setGood()} text='Hyvä' />
          <Button clickHandler={() => setNeutral()} text='Neutraali' />
          <Button clickHandler={() => setBad()} text='Huono' />
      </div>
      <Statistics feedback={feedback} />
    </>
  );
}

export default App;
