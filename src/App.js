import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Timer from "./Pages/Timer";
function App() {
  const [time, setTime] = useState([0, 0]);
  const [timerOn, setTimerOn] = useState([false, false]);
  const [interval, setInterval] = useState([null, null]);
  useEffect(() => {
    for (let i = 0; i < timerOn.length; i++) {
      if (timerOn[i]) {
        const updatedInterval = interval.map((inter, ind) => {
          if (i === ind) {
            inter = setInterval(() => {
              const updated = time.map((tim, index) => {
                if (i === index) {
                  tim = tim + 10;
                }
                return tim;
              });
              setTime(updated);
            }, 10);
          }
          return inter;
        });
        setInterval(updatedInterval);
      } else if (!timerOn[i]) {
        clearInterval(interval[i]);
        const updated = interval.map((inter, index) => {
          if (i === index) {
            inter = null;
          }
          return inter;
        });
        setInterval(updated);
      }
    }
    return () => {
      for (let i = 0; i < timerOn.length; i++) {
        clearInterval(interval[i]);
        const updated = interval.map((inter, index) => {
          if (i === index) {
            inter = null;
          }
          return inter;
        });
        setInterval(updated);
      }
    };
  }, [timerOn, time]);
  return (
    <Router>
      <Routes>
        <Route
          path="/timer"
          element={
            <Timer
              time={time}
              setTime={setTime}
              timerOn={timerOn}
              setTimerOn={setTimerOn}
            />
          }
        />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
