import React,  { useState } from 'react';
import ReactDOM from 'react-dom';


const CurrentAnecdote = ({index}) => {
    return(
    <div>
        {anecdotes[index]}
    </div>
    )
}

const Button = ({onClick, text}) => (
    <button onClick = {onClick}>
      {text}
    </button>
)


const App = (props) => {
  const [selected, setSelected] = useState(0)

  return (
    <div>
      <CurrentAnecdote index = {selected} />
      <NextAnecdoteButton setSelected = {setSelected} />
    </div>
  )
}

function random(max){
    return Math.floor(Math.random() * max);
};

const NextAnecdoteButton = ({setSelected, index}) => {
    return(
    <Button 
        onClick = {() => setSelected(random(6))}
        text = 'Next random anecdote'
    />
    )
}

function VoteThis(index) {
    anecdoteHandlers[index][1](anecdoteHandlers[index][0] + 1);
    return
} 
const anecdoteHandlers = [[useState(0)], [useState(0)], [useState(0)], [useState(0)], [useState(0)], [useState(0)]]

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



ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
