import { Link } from "react-router-dom";
const Timer = ({ time, setTime, timerOn, setTimerOn }) => {
  const handleStopTimer = (index) => {
    const updated = timerOn.map((timer, i) => {
      if (i === index) {
        timer = false;
      }
      return timer;
    });
    setTimerOn(updated);
  };
  const handleStartTimer = (index) => {
    console.log(index,"iii")
    const updated = timerOn.map((timer, i) => {
      if (i === index) {
        timer = true;
      }
      return timer;
    });
    setTimerOn(updated);
  };
  const handleReset = (index) => {
    const updated = time.map((tim, i) => {
      if (i === index) {
        tim = 0;
      }
      return tim;
    });
    setTime(updated);
  };
  return (
    <>
      <Link to="/">Go To Home</Link>
      <h1>Timer</h1>

      {time.map((tim, i) => {
        return (
          <div className="Timers" key={i}>
            <h2>Stopwatch</h2>
            <div id="display">
              <span>{("0" + Math.floor((tim / 60000) % 60)).slice(-2)}:</span>
              <span>{("0" + Math.floor((tim / 1000) % 60)).slice(-2)}:</span>
              <span>{("0" + ((tim / 10) % 100)).slice(-2)}</span>
            </div>

            <div id="buttons">
              {!timerOn[i] && tim === 0 && (
                <button onClick={() => handleStartTimer(i)}>Start</button>
              )}
              {timerOn[i] && (
                <button onClick={() => handleStopTimer(i)}>Stop</button>
              )}
              {!timerOn[i] && tim > 0 && (
                <button onClick={() => handleReset(i)}>Reset</button>
              )}
              {!timerOn[i] && tim > 0 && (
                <button onClick={() => handleStartTimer(i)}>Resume</button>
              )}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Timer;
