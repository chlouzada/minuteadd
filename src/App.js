import "./App.css";
import { useEffect, useState } from "react";
import moment from "moment";

function App() {
  const [date, setDate] = useState("");
  const [customDate, setCustomDate] = useState("");
  const [minutos, setMinutos] = useState("");
  const [customTime, setCustomTime] = useState("");

  useEffect(() => {
    setDate(moment().add(minutos, "minutes").format("HH:mm"));
    const aux = moment(customTime,"HH:mm").add(minutos, "minutes").format("HH:mm");
    setCustomDate(aux === 'Invalid date' ? "--:--" : aux);
    console.log(customTime)
  }, [minutos,customTime]);

  return (
    <div className="App">
      <div className="wrapper">
        <div className="hora-custom">{customDate}</div>
        <div class="group">
          <input
          className="time"
            type="time"
            required
            onChange={(event) => setCustomTime(event.target.value)}
            value={customTime}
          />
          <span className="bar"></span>
        </div>
        <div className="group">
          <input
            type="text"
            required
            onChange={(event) => setMinutos(event.target.value)}
            value={minutos}
          />
          <span className="bar"></span>
          <label>Minutos</label>
        </div>
      </div>
    </div>
  );
}

export default App;
