import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
    // const-definitions
    const course = 'Half Stack application development'
    const part1 = {
        name: 'Fundamentals of React',
        exercises: 10
    }
    const part2 = {
        name: 'Using props to pass data',
        exercises: 7
    }
    const part3 = {
        name: 'State of a component',
        exercises: 14
    }

    const Header = (props) => {
        return (
            <h1>{props.course}</h1>
        )
    }

    const Part = (props) => {
        return (
            <p>
                {props.part} {props.exercise}
            </p>
        )
    }

    const Content = () => {
        return (
            <div>
                <Part part={part1.name} exercise={part1.exercises} />
                <Part part={part2.name} exercise={part2.exercises} />
                <Part part={part3.name} exercise={part3.exercises} />
            </div>
        )
    }

    const Total = () => {
        return (
            <p>
                Number of exercises {part1.exercises + part2.exercises + part3.exercises}
            </p>
        )
    }

    return (
        <div>
            <Header course={course} />
            <Content />
            <Total />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));