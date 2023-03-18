import React, {useState} from 'react';
import './App.css';

import Filter from './Filter';

function App() {

  var [hideCompleted, setHideCompleted] = useState(false);
  var [tasks, setTasks] = useState([]);

  const handleClick = () => {
    setHideCompleted(!hideCompleted)
  }

  return (
    <div className="App">
      <Filter checked={hideCompleted} onClick={handleClick}/>
      <div className='line'></div>

      <div className='line'></div>
    </div>
  );
}

export default App;
