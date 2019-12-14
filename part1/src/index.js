import React from 'react'
import ReactDOM from 'react-dom'


const Header = (props) => {
    return(
        <>
            <h1>{props.course}</h1>
        </>
    )
}

const Part = (props) => {
    return(
        <>
            <p>{props.course} {props.exercises}</p>
        </>
    )
}

const Content = (props) => {
    const content = [];
    for (let index = 0; index < props.data.length; index++) {
        content.push(<Part course = {props.data[index].name} exercises = {props.data[index].exercises}/>);
    };
    return(content);
}

const Total = (props) => {
    return(
        <>
        <p>
            Number of exercises {props.data
                                      .map(elem => elem.exercises)
                                      .reduce((a,b) => a + b, 0)}
        </p>
        </>
    )
}

const App = () => {
    const course = {
        name: 'Half Stack application development',
        parts: [
          {
            name: 'Fundamentals of React',
            exercises: 10
          },
          {
            name: 'Using props to pass data',
            exercises: 7
          },
          {
            name: 'State of a component',
            exercises: 14
          }
        ]
    }
    return (
        <div>
        <Header course = {course.name} />
        <Content data = {course.parts} />
        <Total data = {course.parts} />
        </div>
    )
  }

ReactDOM.render(<App />, document.getElementById('root'))