//Lógica principal de la aplicación, que se encarga de renderizar el contenido y manejar el estado del contador.

import { useState } from "react";
import Display from "./components/Display";
import Button from "./components/Button";
import History from "./components/History";

function App() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([]);

  const handleClick = (value) => {
    if (value === "=") {
      try {
        const result = eval(input);
        setHistory([...history, `${input} = ${result}`]);
        setInput(result.toString());
      } catch {
        setInput("Error");
      }
    } else if (value === "C") {
      setInput("");
    } else {
      setInput(input + value);
    }
  };

  return (
    <div className="app">
      <h1>Calculadora</h1>

      <Display value={input} />

      <div className="buttons">
        {["7","8","9","/","4","5","6","*","1","2","3","-","0",".","=","+","C"].map((btn) => (
          <Button key={btn} value={btn} onClick={handleClick} />
        ))}
      </div>

      <History history={history} />
    </div>
  );
}

export default App;
