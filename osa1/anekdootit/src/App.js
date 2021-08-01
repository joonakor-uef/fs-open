import React, { useState } from 'react';

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.'
  ]

  const [selected, setSelected] = useState(Math.floor(Math.random() * anecdotes.length));
  const [votes, setAllVotes] = useState(Array(anecdotes.length).fill(0));
  let mostVotedAnecdote = '';
  
  const clickHandlerVote = () => {
    const votesCopy = {...votes};
    votesCopy[selected] += 1;
    setAllVotes(votesCopy);
    const mostVotes = Math.max(...votesCopy)
    for (let i = 0; i < votesCopy.length; i++) {
      const element = votesCopy[i];
      if (element > votesCopy[i - 1]) {
        mostVotedAnecdote = element;
      }
    }
    console.log(votesCopy);
  }

  return (
    <>
      <h1>Päivän anekdootti</h1>
      <p>
        {anecdotes[selected]}
      </p>
      <p>
        Ääniä: {votes[selected]}
      </p>
      <button onClick={() => setSelected(Math.floor(Math.random() * anecdotes.length))}>Seuraava anekdootti</button>
      <button onClick={() => clickHandlerVote()}>Äänestä</button>
      <h1>Eniten ääniä saanut anekdootti</h1>
      <p>
        {mostVotedAnecdote}
      </p>
    </>
  );
}

export default App;
