const Statistics = ({ good, neutral, bad }) => {
    
    const all = good + neutral + bad
    
    if (all===0){
        return <p>No feedback given</p>
    }

    const average = (good - bad) / all
    const positive = (good / all) * 100

    const StatisticLine = ({ text, value }) => (<p>{text} {value}</p>)


    return (
    <div>
        <StatisticLine text="good" value ={good} />
        <StatisticLine text="neutral" value ={neutral} />
        <StatisticLine text="bad" value ={bad} />
        <StatisticLine text="all" value ={all} />
        <StatisticLine text="average" value ={average} />
        <StatisticLine text="positive" value ={positive} />
        
    </div>
    )
}

export default Statistics
