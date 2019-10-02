import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ onClick, text }) => {
    return (
        <button onClick={onClick}>
            {text}
        </button>
    )
}

const Statistic = ({ text, value }) => {
    return (
        <tbody>
            <tr>
                <td>{text}</td>
                <td>{value}</td>
            </tr>
        </tbody>
    )
}

const Statistics = (props) => {
    if (props.sum === 0) {
        return (
            <div>No feedback given</div>
        )
    }
    else {
        return (
            <table>
                <Statistic text="good" value={props.good} />
                <Statistic text="neutral" value={props.neutral} />
                <Statistic text="bad" value={props.bad} />
                <Statistic text="all" value={props.sum} />
                <Statistic text="average" value={props.ave} />
                <Statistic text="possitive" value={props.pos} />
            </table>
        )
    }
}

const App = () => {
    // const-definitions
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    const sum = good + neutral + bad;
    const ave = (good * 1 + neutral * 0 - bad * 1) / sum;
    const pos = (good / sum) * 100;

    return (
        <div>
            <h1>give feedback</h1>
            <Button onClick={() => setGood(good + 1)} text="good" />
            <Button onClick={() => setNeutral(neutral + 1)} text="neutral" />
            <Button onClick={() => setBad(bad + 1)} text="bad" />
            <h1>statistics</h1>
            <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                sum={sum}
                ave={ave ? ave : 0}
                pos={pos ? pos + " %" : 0 + " %"}
            />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));