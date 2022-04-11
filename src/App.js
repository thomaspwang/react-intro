import { useState } from 'react'
const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
  </button>
  )
}

const Statistics = (props) => {
  if (props.good == 0 &&  props.bad == 0 && props.neutral == 0) {
    return (
      <p>No feedback given</p>
    )
  } else {
    return (
      <div>
        <p>good {props.good}</p>
        <p>neutral {props.neutral}</p>
        <p>bad {props.bad}</p>
        <p>all {props.bad + props.good + props.neutral}</p>
        <p>average {props.bad * -1 + props.good * 1 + props.neutral * 0}</p>
        <p>positive {(props.good / (props.bad + props.good + props.neutral)) * 100}%</p>
      </div>
    )
  }
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />
      <h1>Statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App