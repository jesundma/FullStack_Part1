import { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const StatisticLine = (printout) => {
  const {text, value} = printout
  return (
    <tr>
      <td>{text}</td> 
      <td>{value}</td>
    </tr>
  )
}

const Display = ({figures}) => {

  const [sgood, sneutral, sbad] = figures

  const stotal = sgood + sneutral + sbad
  const saverage = (sgood*1+sbad*-1)/stotal
  const spositive = sgood/stotal*100 + ' %'

  if (stotal == 0) {
  return (
      <tr>
        <td>No feedback given</td>
      </tr>
    )} else {
  return (
    <>
      <StatisticLine text="Good: " value={sgood}/>
      <StatisticLine text="Neutral: " value={sneutral}/>
      <StatisticLine text="Bad: " value={sbad}/>
      <StatisticLine text="All: " value={stotal}/>
      <StatisticLine text="Average: " value={saverage}/>
      <StatisticLine text="Positive: " value={spositive}/>
    </>
    )}
  
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const statics = [good, neutral, bad]

  const handleGoodClick = () => {
    setGood(good + 1)
  }
  
  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }
  
  const handleBadClick = () => {
    setBad(bad + 1)
  }
  
  return (
    <div>
        <p style={{ fontSize: 40 }}>
          <b>
            Give feedback
          </b>
        </p>
          <Button handleClick={handleGoodClick} text='good'/>
          <Button handleClick={handleNeutralClick} text='neutral'/>
          <Button handleClick={handleBadClick} text='bad'/>
        <p style={{ fontSize: 40 }}>
          <b>
            Statistics
          </b>
        </p>
        <table>
          <tbody>
            <Display figures = {statics}/>
          </tbody>
      </table>
    </div>
    
  )
}

export default App