import { useState } from 'react'
import Statistics from './Statistics'

const App = () => {
  const [votes,setvotes]= useState({
  good: 0,
  neutral: 0,
  bad:0
  })
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)



const Button = ({click,text}) => (<button onClick={click}>{text}</button>)

  return (
    <div>
      <h1>give feedback</h1>
      <Button click={() => setvotes({...votes, good:votes.good +1})} text="good" />
      <Button click={() => setvotes({...votes, neutral:votes.neutral +1})} text="neutral" />
      <Button click={() => setvotes({...votes, bad:votes.bad +1})} text="bad" />

      <h1>statistics</h1>
      <Statistics votes={votes} />
    </div>
  )
}

export default App
