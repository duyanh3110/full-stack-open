import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
    const [selected, setSelected] = useState(0);
    const [vote, setVote] = useState(Array.apply(null, new Array(6)).map(Number.prototype.valueOf, 0));

    const generateNumber = () => {
        let randomNum = Math.floor(Math.random() * 7);
        setSelected(randomNum);
    }

    const handleVoting = () => {
        const copyVote = { ...vote }
        copyVote[selected] += 1;
        setVote(copyVote);
    }

    return (
        <div>
            {props.anecdotes[selected]}
            <div>has {vote[selected]} votes</div>
            <div>
                <button onClick={handleVoting}>vote</button>
                <button onClick={generateNumber}>next anecdote</button>
            </div>
        </div>
    )
}

const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
    <App anecdotes={anecdotes} />,
    document.getElementById('root')
)