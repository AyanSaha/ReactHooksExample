import './App.css';
import React, { useState } from 'react';
function App() {
  let currentTime = new Date().toLocaleTimeString();
  const [cTime,uTime] = useState(currentTime);
  const updatedTime = ()=>{
    uTime(new Date().toLocaleTimeString());
  }
  return (
    <div className="App" onLoad={updatedTime}>
      <h1>Current Time {cTime} </h1>
      <button onClick={updatedTime}> Click Me </button>
    </div>
  );
}

export default App;
