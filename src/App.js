import {useState} from 'react';
import './App.css';

function App() {
  console.log("Rendering App Component");

  const [counter, setCounter] = useState(0);

  const onClick = function() {
    setCounter(counter + 1);
    console.log("Button Clicked.  count = ", counter);
  };


  return (
    <div className="App">
      <h2>Hello React</h2>

      <button onClick={onClick}>Click Me</button>
      <button onClick={() => setCounter(counter + 1)}>Click Me</button>
      <div>counter = {counter}</div>

    </div >
  );
}

export default App;
