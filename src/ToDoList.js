import React from "react"
import "./ToDoList.css"

export default function ToDoList(props) {
  return (
    <div className="toDoList">
      {!React.Children.count(props.children) ? <p>Nothing to do...</p> : <>{props.children}</>}
    </div>
  )
}