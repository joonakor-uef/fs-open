import React, { useState } from "react";

const Button = (props) => {
  return(
    <button onClick={props.clickHandler}>
      {props.text}
    </button>
  )
}

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  let total = good + neutral + bad
  let average = ((good * 1) + (bad * -1)) / total;
  let percentGood = (good / total) * 100;

  return (
    <>
      <div>
        <h1>Anna palautetta</h1>
        <Button clickHandler={() => setGood(good + 1)} text='Hyvä' />
        <Button clickHandler={() => setNeutral(neutral + 1)} text='Neutraali' />
        <Button clickHandler={() => setBad(bad + 1)} text='Huono' />
      </div>
      <div>
        <h1>Tilastot</h1>
        <p>Hyvä {good}</p>
        <p>Neutraali {neutral}</p>
        <p>Huono {bad}</p>
        <p>Yhteensä {total}</p>
        <p>Keskiarvo {average}</p>
        <p>Positiivisia {percentGood}%</p>
      </div>
    </>
  );
}

export default App;