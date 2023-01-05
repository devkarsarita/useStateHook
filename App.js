import React, { useState } from "react";
function App() {
  const [time, setTime] = useState(0);

  function sayHi() {
    setTime(new Date().toLocaleTimeString("it-IT"));
  }
  setInterval(sayHi, 1000);

  return (
    <div className="container">
      <h1> {time} </h1>
      <button onClick={sayHi}>Get Time</button>
    </div>
  );
}

export default App;
