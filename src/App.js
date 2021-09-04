import { useState } from "react";
import "./App.scss";

let date;
let intervalId;

function App() {
  const [time, setTime] = useState(0);

  const starthandler = () => {
    if (!intervalId) {
      date = new Date();
      intervalId = setInterval(() => {
        setTime(new Date() - date);
      }, 1);
    }
  };

  const format = (time) => {
    // let milliSec = time % 1000;
    let sec = Math.floor(Math.floor(time / 1000) % 60);
    let min = Math.floor(Math.floor(time / 60000) % 60);
    let hour = Math.floor(Math.floor(time / 3600000) % 60);
    return `${hour}:${min}:${sec}`;
  };

  const resetHandler = () => {
    clearInterval(intervalId);
    intervalId = undefined;
    setTime(0);
    date = undefined;
  };

  const pauseHandler = () => {
    clearInterval(intervalId);
    intervalId = undefined;
  };

  return (
    <div className="App">
      <div className="container">
        <div className="timer">
          <span>{format(time)}</span>
        </div>

        <div className="action-container">
          <button className="button active" onClick={starthandler}>
            start
          </button>
          <button className="button" onClick={resetHandler}>
            reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
