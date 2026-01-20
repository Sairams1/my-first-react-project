import { useState } from "react";
import "./styles/App.css";


function App() {
  const [mood, setMood] = useState("🙂 Neutral");

  return (
    <div className="container">
      <h1 className="title">Mood Changer 🎭</h1>

      <div className="mood-box">
        <h2>Current Mood</h2>
        <p className="mood">{mood}</p>
      </div>

      <div className="buttons">
        <button className="happy" onClick={() => setMood("😄 Happy")}>
          Happy
        </button>

        <button className="angry" onClick={() => setMood("😡 Angry")}>
          Angry
        </button>

        <button className="sleepy" onClick={() => setMood("😴 Sleepy")}>
          Sleepy
        </button>
      </div>
    </div>
  );
}

export default App;

