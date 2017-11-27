import React from 'react';

const ToDoList = ({ tasks }) => {
  return(
    <ul>
      { tasks.map((task, i) => <li key={i}>{task}</li>)}
    </ul>
  )
}

export default ToDoList;
