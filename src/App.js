import {useState} from 'react';
import './App.css';

function App() {
  console.log("Rendering App Component");

  const [counter, setCounter] = useState(0);
  const [input, setInput] = useState("");

  const onClick = function() {
    setCounter(counter + 1);
  };

  const onChange = function(event) {
    setInput(event.target.value);
    console.log(event.target.value);
  };

  return (
    <div className="App">
      <h2>Hello React</h2>

      <input type="text" value={input} onChange={onChange} />
      <button onClick={onClick}>Click Me</button>
      <div>counter = {counter}</div>

    </div >
  );
}

export default App;
