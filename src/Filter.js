export default function Filter(props) {
  return (
    <div className="filter" onClick={props.onClick}>
      <input type={"checkbox"} checked={props.checked}/>
      <p>hide completed</p>
    </div>
  )
}