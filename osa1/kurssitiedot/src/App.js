import React from 'react';

const App = () => {
  const course = 'Half Stack application development';
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10,
    },
    {
      name: 'Using props to pass data',
      exercises: 7,
    },
    {
      name: 'State of a component',
      exercises: 14,
    },
  ];
  /* let total = parts.forEach((part) => {
    total += part.exercises;
  }); */

  return (
    <>
      <Header course={course} />
      {/* <Content name={parts[0].name} exercises={parts[0].exercises} />  */}
      <Content parts={parts} />
      <Total parts={parts} />
    </>
  );
};

const Header = (props) => {
  return <h1>{props.course}</h1>;
};

const Content = (props) => {
  return (
    <div>
      {props.name} {props.exercises}
    </div>
  );
};

const Total = (props) => {
  return (
    <p>
      Number of exercises{' '}
      {props.parts[0].exercises +
        props.parts[1].exercises +
        props.parts[2].exercises}
    </p>
  );
};

export default App;
