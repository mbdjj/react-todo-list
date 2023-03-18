import React, { useState } from "react";
import "./App.css";

import Filter from "./Filter";
import ToDoList from "./ToDoList";
import Task from "./Task";

function App() {
  var [hideCompleted, setHideCompleted] = useState(false);
  var [tasks, setTasks] = useState([{ name: "do stuff", completed: true }, {name: "do other stuff", completed: false}]);

  const handleClick = () => {
    setHideCompleted(!hideCompleted);
  };

  const handleTaskClick = (index) => {
    const temp = [...tasks];
    temp[index].completed = !temp[index].completed;
    setTasks(temp);
    console.log(`changed tasks to: ${temp}`)
  };

  return (
    <div className="App">
      <Filter checked={hideCompleted} onClick={handleClick} />
      <div className="line"></div>
      <ToDoList>
        {tasks.map((task, index) => {
          return (
            <div key={index}>
              <Task task={task} hideCompleted={hideCompleted} onClick={() => {handleTaskClick(index)}}/>
            </div>
          );
        })}
      </ToDoList>
      <div className="line"></div>
    </div>
  );
}

export default App;
