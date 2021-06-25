import React from "react";

const course = "Half Stack application development";
const part1 = "Fundamentals of React";
const exercises1 = 10;
const part2 = "Using props to pass data";
const exercises2 = 7;
const part3 = "State of a component";
const exercises3 = 14;

let exercisesTotal = exercises1 + exercises2 + exercises3;

const App = () => {
  return (
    <>
      <Header course={course} />
      <Content />
      <Total total={exercisesTotal} />

      {/* <p>
        {part1} {exercises1}
      </p>
      <p>
        {part2} {exercises2}
      </p>
      <p>
        {part3} {exercises3}
      </p>
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p> */}
    </>
  );
};

const Header = (props) => {
  return <h1>{props.course}</h1>;
};

const Content = (props) => {
  return (
    <div>
      <Part part={part1} exercise={exercises1} />
      <Part part={part2} exercise={exercises2} />
      <Part part={part3} exercise={exercises3} />
    </div>
  );
};

const Total = (props) => {
  return <p>Number of exercises {props.total}</p>;
};

const Part = (props) => {
  <p>
    {props.part} {props.exercise}
  </p>;
};

export default App;
