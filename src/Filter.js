import "./Filter.css"

export default function Filter(props) {
  return (
    <div onClick={props.onClick}>
      <input type={"checkbox"} checked={props.checked}/>
      <p>hide completed</p>
    </div>
  )
}