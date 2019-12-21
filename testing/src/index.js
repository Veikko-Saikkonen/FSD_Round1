import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div key = 'Root'>
      <div key = 'Header'>
        <Header />
      </div>
      <div key = 'Feedback'>
        <GiveFeedback good = {good} setGood = {setGood} neutral = {neutral} setNeutral = {setNeutral} bad = {bad} setBad = {setBad} />
      </div>
      <div key = 'Statistics'>
        <Statistics good = {good} neutral = {neutral} bad = {bad} />
      </div>
    </div>
  )
}

const Statistic = ({text, value}) =>
{
  return(
      <tr key = {text}>
        <td>
          {text}
        </td>
        <td>
          {value}
        </td>
      </tr>
  )
}

const Statistics = ({good, setGood, neutral, setNeutral, bad, setBad}) => {

  const totalCount =  good + bad + neutral;
  const average = (good + bad) / totalCount;
  const positiveFraction = good/totalCount * 100;

  let elements = [
    <table>
      <thead>
      </thead>
      <tbody>
      <Statistic text = 'Number of reviews' value = {totalCount}/>
      <Statistic text = 'Good' value = {good}/>
      <Statistic text = 'Neutral' value = {neutral}/>
      <Statistic text = 'Bad' value = {bad}/>
      <Statistic text = 'Average feedback' value = {average}/>
      <Statistic text = 'Percentage of positive feedback' value = {positiveFraction.toString().concat(' %')}/>
      </tbody>
    </table>
  ]

  const defaultMessage = [
    <p key = 'Default'>
      No reviews yet!
    </p>
  ]
  if(!totalCount)
  {
    elements = defaultMessage;
  }
  return(
    [
    <h2>
      Statistics
    </h2>,
    elements
    ]
  )
}

const Header = () => {
  return(
    <h1>
      Unicafen palautesovellus
    </h1>
  )
}

const Feedbackbuttons = ({good, setGood, neutral, setNeutral, bad, setBad}) => {
  return(
  <>
    <Button
      onClick={() => setGood(good + 1)}
      text='Give positive feedback'
    />
    <Button
      onClick={() => setNeutral(neutral + 1)}
      text='Give neutral feedback'
    />
    <Button
      onClick={() => setBad(bad + 1)}
      text='Give negative feedback'
    />
  </>
  )
}

const Button = ({onClick, text}) => (
  <button onClick = {onClick}>
    {text}
  </button>
)


const GiveFeedback = ({good, setGood, neutral, setNeutral, bad, setBad}) => {
return(
  <>
    <h2>
      Give feedback:
    </h2>
    <div>
      <Feedbackbuttons good = {good} setGood = {setGood} neutral = {neutral} setNeutral = {setNeutral} bad = {bad} setBad = {setBad} />
    </div>
  </>
)
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)