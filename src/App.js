import "./App.css";
import { useEffect, useState } from "react";
import moment from "moment";

function App() {
  const [date, setDate] = useState("");
  const [minutos, setMinutos] = useState("");

  useEffect(() => {
    setDate(moment().add(minutos, "minutes").format("HH:mm"));
  }, [minutos]);

  return (
    <div className="App">
      <div className="wrapper">
        <div className="hora">{date}</div>
        <div class="group">
          <input
            type="text"
            required
            onChange={(event) => setMinutos(event.target.value)}
            value={minutos}
          />
          <span class="bar"></span>
          <label>Minutos</label>
        </div>
      </div>
    </div>
  );
}

export default App;
