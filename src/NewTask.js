import { useState } from "react"

export default function NewTask({addTask}) {

  const [taskName, setTaskName] = useState("");

  const handleTaskName = event => {
    setTaskName(event.target.value);
  }

  const enterDown = event => {
    if (event.key == "Enter") {
      submitTask()
    }
  }

  const submitTask = () => {
    if (taskName != "") {
      addTask(taskName)
      setTaskName("")
    } else {
      alert("Task name can't be empty!")
    }
  }

  return (
    <div className="newTaskContainer">
      <input type={"text"} onChange={handleTaskName} value={taskName} onKeyDown={enterDown}/>
      <button onClick={submitTask}>Add</button>
    </div>
  )
}