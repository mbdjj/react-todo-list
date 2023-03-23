export default function Filter(props) {
  return (
    <div className="filter" onClick={props.onClick}>
      <h1>Marcin's To Do list</h1>
      <div>
        <input type={"checkbox"} checked={props.checked}/>
        <p>Hide completed</p>
      </div>
    </div>
  )
}