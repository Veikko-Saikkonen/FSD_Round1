import React,  { useState } from 'react';
import ReactDOM from 'react-dom';



const CurrentAnecdote = ({index}) => {
    return([
    <h1>
      Anecdote of the day   
    </h1>,
    <div>
        {anecdotes[index]}
    </div>,
    ])
}

const Button = ({onClick, text}) => (
    <button onClick = {onClick}>
      {text}
    </button>
)


function random(max){
    return Math.floor(Math.random() * max);
};
const VoteAnecdoteButton = ({index, mostVoted, setMostVoted, totalVotes, setTotalVotes, votes, setVotes}) =>
{
  return(
    <Button
      onClick = {() => 
        {
          votes[index] += 1
          setVotes(votes)
          setTotalVotes(totalVotes += 1)
          if(votes[index] > votes[mostVoted])
          {
            setMostVoted(index)
          }
        }
      }
      text = 'Vote'
    />
  )
}

const NextAnecdoteButton = ({setSelected}) => {
    return(
    <Button 
        onClick = {() => setSelected(random(6))}
        text = 'Next anecdote'
    />
    )
}

const MostVoted = ({index}) => 
{
  return(
    [
      <h2>
        Anecdote with the most votes
      </h2>,
      <p>
        {anecdotes[index]}
      </p>
    ]
  )
}

const AllVotes = ({votes}) =>
{
  let elems = [
  <h2>
    Total amount of votes: {votes.reduce((a,b) => a + b, 0)}
  </h2>,
  <h3>
    Per anecdote: 
  </h3>];
  
  let i = 0;

  votes.forEach(value => {
    elems = elems.concat(
      <p>{value} : {anecdotes[i++]}</p>
    )
  });
  return(
    elems
  )
}

const App = ({anecdotes}) => {
  const [selected, setSelected] = useState(0)
  const [mostVoted, setMostVoted] = useState(0)
  const [totalVotes, setTotalVotes] = useState(0)
  const [votes, setVotes] = useState(Array(6).fill(0))

  console.log("Votes : " + votes)
  return (
    <div>
      <div>
        <CurrentAnecdote anecdotes = {anecdotes} index = {selected} />
      </div>
      <div>
        <NextAnecdoteButton setSelected = {setSelected} />
        <VoteAnecdoteButton index = {selected}  mostVoted = {mostVoted} setMostVoted = {setMostVoted}
                            totalVotes = {totalVotes} setTotalVotes = {setTotalVotes}
                            votes = {votes} setVotes = {setVotes}/>
      </div>
      <div>
        <MostVoted anecdotes = {anecdotes} index = {mostVoted}/>
        <AllVotes totalVotes = {totalVotes} votes = {votes}/>
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



ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
