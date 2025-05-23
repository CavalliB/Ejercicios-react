const Statistics = ({ good, neutral, bad }) => {
    
    const all = good + neutral + bad
    
    if (all===0){
        return <p>No feedback given</p>
    }

    const average = (good - bad) / all
    const positive = (good / all) * 100

    return (
    <div>
        <p>good {good}</p>
        <p>neutral {neutral}</p>
        <p>bad {bad}</p>
        <p>all {all}</p>
        <p>average {average}</p>
        <p>positive {positive}%</p>
    </div>
    )
}

export default Statistics
