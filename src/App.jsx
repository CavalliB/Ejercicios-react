import { useState } from 'react'

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const goodclick = () => {
    setGood(good + 1)
  }
  const neutralclick = () => {
    setNeutral(neutral + 1)
  }
  const badclick = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={goodclick}>good</button>
      <button onClick={neutralclick}>neutral</button>
      <button onClick={badclick}>neutral</button>

      <h1>statics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>

    </div>
  )
}

export default App