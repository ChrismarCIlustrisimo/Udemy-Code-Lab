import React, {useState} from "react";

function App() {
  const [currentTime, setCurrentTime] = useState();

   function updateTime() {
       setCurrentTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false })
      )
    }
    setInterval(updateTime, 1000);

  return (
    <div className="container">
      <h1>{currentTime}</h1>
      <button onClick={updateTime}>Get Time</button>
    </div>
  );
}

export default App;
