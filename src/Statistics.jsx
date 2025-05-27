const Statistics = ({votes }) => {
    
    const all = votes.good + votes.neutral + votes.bad
    
    if (all===0){
        return <p>No feedback given</p>
    }

    const average = (votes.good - votes.bad) / all
    const positive = (votes.good / all) * 100

    const StatisticLine = ({ text, value }) => (<p>{text} {value}</p>)


    return (
    <div>
        <StatisticLine text="good" value ={votes.good} />
        <StatisticLine text="neutral" value ={votes.neutral} />
        <StatisticLine text="bad" value ={votes.bad} />
        <StatisticLine text="all" value ={all} />
        <StatisticLine text="average" value ={average} />
        <StatisticLine text="positive" value ={positive} />
        
    </div>
    )
}

export default Statistics
