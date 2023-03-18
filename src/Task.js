export default function Task(props) {
  const task = props.task

  const completedClass = props.hideCompleted ? "hide" : "overline"

  return (
    <div className={`task ${task.completed ? completedClass : ""}`} onClick={props.onClick}>
      <input type={"checkbox"} checked={task.completed}/>
      <p>{task.name}</p>
    </div>
  )
}