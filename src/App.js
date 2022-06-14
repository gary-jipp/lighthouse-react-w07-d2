import { useState } from 'react';
import './App.css';

function App() {
  console.log("Rendering App Component");
  const [counter, setCounter] = useState(0);

  let input = "";

  const onClick = function () {
    setCounter(counter + 1);
  };


  return (
    <div className="App">
      <h2>Hello React</h2>

      <input type="text" value={input} />
      <button onClick={onClick}>Click Me</button>
      <div>counter = {counter}</div>

    </div >
  );
}

export default App;
