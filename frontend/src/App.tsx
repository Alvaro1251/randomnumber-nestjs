import { useState } from "react";
import "./App.css";

function App() {
  const [number, setNumber] = useState(null);

  const fetchRandomNumber = async () => {
    const response = await fetch("http://localhost:3000/random-number", {
      method: "POST",
    });
    const data = await response.json();
    console.log(data)
    setNumber(data.value);
  };

  return (
    <div>
      <button onClick={fetchRandomNumber}>Sacar un número random</button>
      {number && <h1>{number}</h1>}
    </div>
  );
}

export default App;
