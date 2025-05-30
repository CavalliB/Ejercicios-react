import { useState } from 'react'
let aleatorio = null

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  function GenerarAleatorio(min,max){
    return (Math.floor(Math.random() * (max-min)) + min)
  }
  console.log(aleatorio)

  const [selected, setSelected] = useState(0)

  const handleClick= () => {
  return (aleatorio = GenerarAleatorio(0,8)) //nose por que el min es inclusive y el max no xd
  }

  return (
    <div>
      {anecdotes[selected]}
      <div>
        <button onClick={() => setSelected(handleClick())}>next anecdote</button>
      </div>
    </div>
  )
}




export default App

