import React, {useState} from 'react'
import ReactDOM from 'react-dom'

const Button = ({onClick, text}) => {
    return(
        <button onClick={onClick}>
            {text}
        </button>
    )
}

const Result = ({name, value}) => {
    return (
        <p>{name} {value}</p>
    )
}

const App = () => {
    // const-definitions
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    const sum = good + neutral + bad;
    const ave = (good * 1 + neutral * 0 - bad * 1)/sum;
    const pos = (good/sum) * 100;

    return(
        <div>
            <h1>give feedback</h1>
            <Button onClick={() => setGood(good + 1)} text="good" />
            <Button onClick={() => setNeutral(neutral + 1)} text="neutral" />
            <Button onClick={() => setBad(bad + 1)} text="bad" />
            <h1>statistics</h1>
            <Result name="good" value={good} />
            <Result name="neutral" value={neutral} />
            <Result name="bad" value={bad} />
            <Result name="all" value={sum} />
            <Result name="average" value={ave ? ave : 0} />
            <Result name="possitive" value={pos ? pos + " %" : 0 + " %"} />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));